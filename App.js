import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, TextInput, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { registerRootComponent } from 'expo';
import { makeDay } from './src/utils/helpers';
import { LANGUAGES, COMMON_TRANSLATIONS, FIVE_S_DATA, SUPPLEMENTAL_VOCAB } from './src/constants';
import { DRILL_DATA } from './src/data/days';

// Externalized DRILL_DATA
const ALL_VOCAB = [
  ...DRILL_DATA.flatMap(day =>
    (day.vocab || []).map(v => ({
      ...v,
      dayId: day.id,
      dayTitle: day.title
    }))
  ),
  ...SUPPLEMENTAL_VOCAB
].filter(item => item && item.ja);

export default function App() {
  const [language, setLanguage] = useState('vi');
  const [isLanguageSelected, setIsLanguageSelected] = useState(false); // 言語選択済みフラグ
  const scrollViewRef = useRef(null);
  const listScrollPosRef = useRef(0);

  useEffect(() => {
    // データ整合性チェック
    DRILL_DATA.forEach(day => {
      if (!day.quiz || !day.quiz.q) {
        console.warn(`[Data Warning] ${day.id} (${day.title}) にクイズデータがありません。`);
      }
    });

    loadProgress();
  }, []);

  const [currentDay, setCurrentDay] = useState(null);
  const [show5S, setShow5S] = useState(false);
  const [showDictionary, setShowDictionary] = useState(false);
  const [showHowToUse, setShowHowToUse] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [completedDays, setCompletedDays] = useState([]);
  const [badges, setBadges] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [quizFeedback, setQuizFeedback] = useState(null); // 'correct' | 'wrong'
  const [quizChoices, setQuizChoices] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [streak, setStreak] = useState(0);
  const [lastStudyDate, setLastStudyDate] = useState(null);



  // 起動時に進捗を読み込む
  useEffect(() => {
    // loadProgress is already called in the expiration check useEffect
  }, []);

  const loadProgress = async () => {
    try {
      const savedDays = await AsyncStorage.getItem('completedDays');
      const savedBadges = await AsyncStorage.getItem('badges');
      const savedBookmarks = await AsyncStorage.getItem('bookmarks');
      const savedStreak = await AsyncStorage.getItem('streak');
      const savedLastDate = await AsyncStorage.getItem('lastStudyDate');
      const savedLang = await AsyncStorage.getItem('userLanguage');

      if (savedDays) setCompletedDays(JSON.parse(savedDays));
      if (savedBadges) setBadges(JSON.parse(savedBadges));
      if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
      if (savedStreak) setStreak(parseInt(savedStreak) || 0);
      if (savedLastDate) setLastStudyDate(savedLastDate);
      if (savedLang) {
        setLanguage(savedLang);
        setIsLanguageSelected(true);
      }
    } catch (e) {
      console.error('Failed to load progress', e);
    }
  };

  const saveProgress = async (newCompleted, newBadges, newBookmarks, newStreak, newLastDate) => {
    try {
      if (newCompleted) await AsyncStorage.setItem('completedDays', JSON.stringify(newCompleted));
      if (newBadges) await AsyncStorage.setItem('badges', JSON.stringify(newBadges));
      if (newBookmarks) await AsyncStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      if (newStreak !== undefined) await AsyncStorage.setItem('streak', newStreak.toString());
      if (newLastDate) await AsyncStorage.setItem('lastStudyDate', newLastDate);
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  };

  const updateStreak = () => {
    const today = new Date().toISOString().split('T')[0];
    if (lastStudyDate === today) return;

    let newStreak = 1;
    if (lastStudyDate) {
      const last = new Date(lastStudyDate);
      const diffTime = Math.abs(new Date(today) - last);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        newStreak = streak + 1;
      }
    }
    setStreak(newStreak);
    setLastStudyDate(today);
    saveProgress(null, null, null, newStreak, today);
  };

  const generateQuizChoices = (dayObj, lang) => {
    if (!dayObj || !dayObj.quiz) return;

    const correctAnswer = dayObj.quiz.a;
    // 正解未定義時はクラッシュ防止のため早期リターン
    if (!correctAnswer) {
      console.warn(`[Quiz] ${dayObj.id} has no correct answer (a)!`);
      return;
    }

    // mode: "pair" の場合は固定された options を使用する（どっち系）
    if (dayObj.quiz.mode === 'pair' && dayObj.quiz.options) {
      setQuizChoices([...dayObj.quiz.options].sort(() => Math.random() - 0.5));
      return;
    }

    const targetCount = dayObj.quiz.choiceCount || (dayObj.quiz.type === 'binary' ? 2 : 4);

    // 同Day内のフレーズと単語をプールにする
    const phrasesPool = (dayObj.phrases || []).map(p => p.ja);
    const vocabPool = (dayObj.vocab || []).map(v => v.ja);

    let pool = [...new Set([...phrasesPool, ...vocabPool])]
      .filter(item => item && item !== correctAnswer);

    const choices = [correctAnswer];

    // プールをシャッフル
    const shuffledPool = pool.sort(() => Math.random() - 0.5);

    // 目標数に足りるまで（またはプールが尽きるまで）追加
    const additionalChoices = shuffledPool.slice(0, targetCount - 1);
    choices.push(...additionalChoices);

    if (choices.length < 2) {
      console.warn(`[Quiz] ${dayObj.id} has only ${choices.length} choices!`);
      // 最低2択確保（最終手段で同Dayの別種から補う。既にpoolで合算済みなので、ここで足りなければ本当にデータ不足）
    }

    // 最終的な選択肢をシャッフルしてセット
    setQuizChoices(choices.sort(() => Math.random() - 0.5));
  };

  const checkBadgeMilestones = (newCompleted) => {
    let newBadges = [...badges];
    let changed = false;

    // Day10, Day20, Day30 are index 9, 19, 29
    if (newCompleted.includes('day10') && !newBadges.includes('bronze')) {
      newBadges.push('bronze');
      changed = true;
    }
    if (newCompleted.includes('day20') && !newBadges.includes('silver')) {
      newBadges.push('silver');
      changed = true;
    }
    if (newCompleted.includes('day30') && !newBadges.includes('gold')) {
      newBadges.push('gold');
      changed = true;
    }

    if (changed) {
      setBadges(newBadges);
      return newBadges;
    }
    return null;
  };

  const markAsCompleted = (dayId) => {
    if (!completedDays.includes(dayId)) {
      const newCompleted = [...completedDays, dayId];
      setCompletedDays(newCompleted);
      const newBadges = checkBadgeMilestones(newCompleted);
      updateStreak();
      saveProgress(newCompleted, newBadges);
    }
  };

  // ステート切り替え時に答えを非表示にする
  useEffect(() => {
    setShowAnswer(false);
    setUserAnswer('');
    setQuizFeedback(null);
    if (currentDay && currentDay.quiz) {
      generateQuizChoices(currentDay, language);
    }
    if (showDictionary || show5S || showHowToUse || currentDay) {
      setSearchQuery('');
    }
  }, [currentDay, show5S, showDictionary, showHowToUse]);

  const isAtMainList = !currentDay && !show5S && !showDictionary && !showHowToUse && isLanguageSelected;

  // 画面遷移時にスクロール位置をトップにリセット
  useEffect(() => {
    if (currentDay || show5S || showDictionary || showHowToUse) {
      // 詳細画面に遷移した際、その画面をトップにする
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: false });
      }, 10);
    } else if (isAtMainList) {
      // 一覧画面に戻った時、保存していた位置を復元
      if (listScrollPosRef.current > 0) {
        setTimeout(() => {
          scrollViewRef.current?.scrollTo({ y: listScrollPosRef.current, animated: false });
        }, 60); // 描画完了を待ってから復元
      }
    }
  }, [currentDay, show5S, showDictionary, showHowToUse, isAtMainList]);

  const toggleBookmark = (ja) => {
    const newBookmarks = bookmarks.includes(ja)
      ? bookmarks.filter(b => b !== ja)
      : [...bookmarks, ja];
    setBookmarks(newBookmarks);
    saveProgress(null, null, newBookmarks);
  };

  // 音声読み上げ関数
  const playSpeech = (text) => {
    // 1. 絵文字を除去
    let cleanText = text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F000}-\u{1FBFF}]/gu, '');

    // 2. 読み上げ補正用辞書
    const corrections = [
      // 熟語保護（先に置換することで分解を防ぐ）
      { k: '上下', r: 'じょうげ' },
      { k: '左右', r: 'さゆう' },
      { k: '前後', r: 'ぜんご' },
      { k: '道路', r: 'どうろ' },
      { k: '現場', r: 'げんば' },
      { k: '作業', r: 'さぎょう' },
      { k: '頭上注意', r: 'ずじょうちゅうい' },
      { k: '高電圧', r: 'こうでんあつ' },
      { k: '重機', r: 'じゅうき' },
      { k: 'KY活動', r: 'けーわいかつどう' },
      { k: '一時停止', r: 'いちじていし' },
      { k: '元請け', r: 'もとうけ' },
      { k: '下請け', r: 'したうけ' },
      { k: '立入禁止', r: 'たちいりきんし' },
      { k: '火気厳禁', r: 'かきげんきん' },
      { k: '感電注意', r: 'かんでんちゅうい' },
      { k: '親綱', r: 'おやづな' },

      // 単独漢字（訓読みを優先したいもの）
      { k: '頭', r: 'あたま' },
      { k: '旗', r: 'はた' },
      { k: '右', r: 'みぎ' },
      { k: '左', r: 'ひだり' },
      { k: '上', r: 'うえ' },
      { k: '下', r: 'した' },
      { k: '後', r: 'あと' },
      { k: '道', r: 'みち' },
      { k: '奥', r: 'おく' },
      { k: '手前', r: 'てまえ' },
      { k: '元に', r: 'もとに' },
      { k: '手元', r: 'てもと' },
      { k: '足元', r: 'あしもと' },
      { k: '指さし', r: 'ゆびさし' },
      { k: '付け', r: 'つけ' },
      { k: '外し', r: 'はずし' },
      { k: '薬', r: 'くすり' },
      { k: '端', r: 'はし' }
    ];

    // 文字数が長いものから順に置換を適用
    const sortedCorrections = [...corrections].sort((a, b) => b.k.length - a.k.length);

    sortedCorrections.forEach(item => {
      cleanText = cleanText.split(item.k).join(item.r);
    });

    Speech.speak(cleanText, { language: 'ja-JP' });
  };


  // 効果音再生関数
  const playSE = async (type) => {
    try {
      const source = type === 'correct'
        ? require('./assets/sounds/correct.mp3')
        : require('./assets/sounds/wrong.mp3');
      const { sound } = await Audio.Sound.createAsync(source);
      await sound.playAsync();
      // 再生後にアンロードするための処理（メモリリーク防止）
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (e) {
      console.log('Failed to play SE:', e);
    }
  };

  const handleCheckAnswer = () => {
    if (!currentDay) return;
    const isCorrect = userAnswer.trim() === currentDay.quiz.a.trim().replace(/ /g, ''); // 柔軟な判定（スペース無視）

    if (isCorrect) {
      setQuizFeedback('correct');
      setShowAnswer(true);
      markAsCompleted(currentDay.id);
    } else {
      setQuizFeedback('wrong');
    }
  };

  // --- 言語選択処理 ---
  const handleSelectLanguage = async (code) => {
    setLanguage(code);
    setIsLanguageSelected(true);
    try {
      await AsyncStorage.setItem('userLanguage', code);
    } catch (e) {
      console.error('Failed to save language', e);
    }
  };

  // --- 画面表示ロジック ---

  // 初期言語選択画面
  if (!isLanguageSelected) {
    return (
      <SafeAreaView style={styles.welcomeContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.welcomeContent}>
          <View style={styles.welcomeHeader}>
            <Text style={styles.welcomeTitle}>Chọn ngôn ngữ</Text>
            <Text style={styles.welcomeTitle}>Pilih bahasa</Text>
            <Text style={styles.welcomeTitle}>เลือกภาษา</Text>
            <Text style={styles.welcomeTitle}>Pumili ng wika</Text>
            <View style={styles.staffDivider} />
            <Text style={styles.staffSubTitle}>Select Language / 言語を選択してください</Text>
          </View>

          <View style={styles.langGridLarge}>
            {LANGUAGES.map((lang) => (
              <TouchableOpacity
                key={lang.code}
                style={styles.langCardLarge}
                onPress={() => handleSelectLanguage(lang.code)}
              >
                <Text style={styles.langFlagLarge}>{lang.flag}</Text>
                <View style={styles.langTextContainer}>
                  <Text style={styles.langNameLarge}>{lang.name}</Text>
                  <Text style={styles.langNameSub}>{LANGUAGES.find(l => l.code === lang.code).ja || lang.code}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }


  // ① 一覧画面
  if (!currentDay && !show5S && !showDictionary && !showHowToUse) {
    const categories = ['基本・安全', '指示・移動', '作業・現場ルール'];

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{COMMON_TRANSLATIONS.menuTitle[language]}</Text>
        </View>
        <ScrollView
          key="main-list-scroll"
          ref={scrollViewRef}
          style={styles.container}
          onScroll={(e) => {
            // 一覧画面にいる時だけ位置を記録する（遷移中の「0」上書きを防ぐ）
            if (isAtMainList) {
              listScrollPosRef.current = e.nativeEvent.contentOffset.y;
            }
          }}
          scrollEventThrottle={16}
        >
          <View style={styles.listContent}>
            {/* コンセプト宣言 */}
            <View style={styles.conceptSection}>
              <Text style={styles.conceptText}>{COMMON_TRANSLATIONS.concept[language]}</Text>
            </View>

            {/* 言語選択セクション */}
            {/* 学習進捗セクション */}
            <View style={styles.progressSection}>
              <Text style={styles.sectionTitle}>{COMMON_TRANSLATIONS.progress[language]}</Text>

              {/* メンターエリア */}
              <View style={styles.mentorBox}>
                <View style={styles.mentorAvatar}>
                  <Text style={styles.mentorEmoji}>👷</Text>
                </View>
                <View style={styles.mentorBalloon}>
                  <Text style={styles.mentorName}>{COMMON_TRANSLATIONS.mentorName[language]}</Text>
                  <Text style={styles.mentorText}>
                    {streak > 1
                      ? COMMON_TRANSLATIONS.mentor.streak[language].replace('{n}', streak)
                      : COMMON_TRANSLATIONS.mentor.welcome[language]}
                  </Text>
                </View>
              </View>

              <View style={styles.progressContainer}>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, { width: `${(completedDays.length / DRILL_DATA.length) * 100}%` }]} />
                </View>
                <View style={styles.progressMeta}>
                  <Text style={styles.progressText}>
                    {completedDays.length} / {DRILL_DATA.length}
                  </Text>
                  {streak > 0 && (
                    <Text style={styles.streakText}>🔥 {streak} {COMMON_TRANSLATIONS.streak[language]}</Text>
                  )}
                </View>
              </View>

              {badges.length > 0 && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeHeader}>{COMMON_TRANSLATIONS.badges[language]}</Text>
                  <View style={styles.badgeRow}>
                    {badges.includes('bronze') && <View style={[styles.badgeIcon, { backgroundColor: '#CD7F32' }]}><Text style={styles.badgeEmoji}>🥉</Text></View>}
                    {badges.includes('silver') && <View style={[styles.badgeIcon, { backgroundColor: '#C0C0C0' }]}><Text style={styles.badgeEmoji}>🥈</Text></View>}
                    {badges.includes('gold') && <View style={[styles.badgeIcon, { backgroundColor: '#FFD700' }]}><Text style={styles.badgeEmoji}>🥇</Text></View>}
                  </View>
                </View>
              )}
            </View>

            {/* 言語選択セクション (設定変更用) */}
            <View style={styles.settingSection}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>{COMMON_TRANSLATIONS.selectLang[language]}</Text>
                <Text style={styles.staffLabelSmall}>言語変更</Text>
              </View>
              <View style={styles.langGrid}>
                {LANGUAGES.map((lang) => (
                  <TouchableOpacity
                    key={lang.code}
                    style={[
                      styles.langButton,
                      language === lang.code && styles.langButtonActive
                    ]}
                    onPress={() => handleSelectLanguage(lang.code)}
                  >
                    <Text style={styles.langFlag}>{lang.flag}</Text>
                    <Text style={[
                      styles.langName,
                      language === lang.code && styles.langNameActive
                    ]}>{lang.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* 辞書ボタン */}
            <TouchableOpacity
              style={[styles.dayButton, { backgroundColor: '#F3E5F5', borderColor: '#9C27B0', marginBottom: 15 }]}
              onPress={() => setShowDictionary(true)}
            >
              <Text style={[styles.dayButtonText, { color: '#7B1FA2' }]}>🔍 {COMMON_TRANSLATIONS.dictionary[language]}</Text>
            </TouchableOpacity>

            {/* 5S専用ページへのボタン */}
            <TouchableOpacity
              style={[styles.dayButton, { backgroundColor: '#E3F2FD', borderColor: '#2196F3', marginBottom: 15 }]}
              onPress={() => setShow5S(true)}
            >
              <Text style={[styles.dayButtonText, { color: '#1976D2' }]}>📘 {COMMON_TRANSLATIONS.fiveS[language]}</Text>
            </TouchableOpacity>

            {/* 使い方ガイドボタン */}
            <TouchableOpacity
              style={[styles.dayButton, { backgroundColor: '#FFF9C4', borderColor: '#FBC02D', marginBottom: 20 }]}
              onPress={() => setShowHowToUse(true)}
            >
              <Text style={[styles.dayButtonText, { color: '#F57F17' }]}>💡 {COMMON_TRANSLATIONS.howToUse[language]}</Text>
            </TouchableOpacity>

            {categories.map((cat) => (
              <View key={cat} style={styles.categoryWrap}>
                <View style={styles.sectionHeaderRow}>
                  <Text style={styles.categoryHeader}>{COMMON_TRANSLATIONS.categories[cat][language]}</Text>
                  <Text style={styles.staffLabelSmall}>{cat}</Text>
                </View>
                <View style={styles.dayGrid}>
                  {(() => {
                    const catDays = DRILL_DATA.filter(day => day.category === cat);
                    const rows = [];
                    for (let i = 0; i < catDays.length; i += 2) {
                      rows.push(catDays.slice(i, i + 2));
                    }
                    return rows.map((row, rowIndex) => (
                      <View key={rowIndex} style={styles.dayRow}>
                        {row.map((day) => {
                          const isCompleted = completedDays.includes(day.id);
                          return (
                            <TouchableOpacity
                              key={day.id}
                              style={[styles.dayCard, isCompleted && styles.dayCardCompleted]}
                              onPress={() => setCurrentDay(day)}
                            >
                              <View style={styles.dayCardTop}>
                                <Text style={[styles.dayCardLabel, isCompleted && styles.dayCardLabelCompleted]}>Day {day.id.replace('day', '')}</Text>
                                {isCompleted && <Text style={styles.checkMarkIcon}>✅</Text>}
                              </View>
                              <Text style={[styles.dayCardTitle, isCompleted && styles.dayCardTitleCompleted]}>
                                {day.title}
                              </Text>
                              <Text style={styles.dayCardSubTitle}>
                                {day.translations?.[language] || ''}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                        {row.length === 1 && <View style={[styles.dayCard, { backgroundColor: 'transparent', borderWidth: 0, elevation: 0 }]} />}
                      </View>
                    ));
                  })()}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ② 5S専用画面
  if (show5S) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setShow5S(false)} style={styles.backButton}>
            <Text style={styles.backButtonText}>← {COMMON_TRANSLATIONS.back[language]}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitleDetail}>{FIVE_S_DATA.title[language] || FIVE_S_DATA.title.vi}</Text>
        </View>

        <ScrollView key="5s-scroll" ref={scrollViewRef} style={styles.scrollContent}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{FIVE_S_DATA.intro.title[language] || FIVE_S_DATA.intro.title.vi}</Text>
            <View style={styles.card}>
              <Text style={styles.descriptionText}>
                {FIVE_S_DATA.intro.desc.ja}
                {"\n"}
                <Text style={{ fontSize: 15, color: '#666' }}>
                  {FIVE_S_DATA.intro.desc[language] || FIVE_S_DATA.intro.desc.vi}
                </Text>
              </Text>
            </View>
          </View>

          {FIVE_S_DATA.items.map((item, idx) => (
            <View key={idx} style={styles.section}>
              <View style={styles.sectionHeaderRow}>
                <Text style={styles.sectionTitle}>
                  {item.title.ja} - {item.title[language] || item.title.vi}
                </Text>
                <TouchableOpacity style={styles.soundButtonSmall} onPress={() => playSpeech(item.pronounce)}>
                  <Text style={styles.soundIconSmall}>🔊</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.card}>
                {item.phrases.map((p, pIdx) => (
                  <View key={pIdx} style={{ marginBottom: pIdx < item.phrases.length - 1 ? 12 : 0 }}>
                    <View style={styles.phraseRowS}>
                      <Text style={styles.textJa}>{p.ja}</Text>
                      <TouchableOpacity style={styles.soundButtonSmall} onPress={() => playSpeech(p.ja)}>
                        <Text style={styles.soundIconSmall}>🔊</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.textVi}>{p[language] || p.vi}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{FIVE_S_DATA.advice.title[language] || FIVE_S_DATA.advice.title.vi}</Text>
            <View style={[styles.card, { backgroundColor: '#FFF9C4' }]}>
              <Text style={[styles.textJa, { fontWeight: 'bold' }]}>
                {FIVE_S_DATA.advice.desc.ja}
              </Text>
              <Text style={styles.textVi}>
                {FIVE_S_DATA.advice.desc[language] || FIVE_S_DATA.advice.desc.vi}
              </Text>
            </View>
          </View>

          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ③ 辞書・単語帳画面
  if (showDictionary) {
    const filteredVocab = ALL_VOCAB.filter(item =>
      item.ja.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item[language] && item[language].toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.vi && item.vi.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setShowDictionary(false)} style={styles.backButton}>
            <Text style={styles.backButtonText}>← {COMMON_TRANSLATIONS.back[language]}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{COMMON_TRANSLATIONS.dictionary[language]}</Text>
        </View>

        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            placeholder={COMMON_TRANSLATIONS.searchPlaceholder[language]}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Text style={styles.searchCount}>{filteredVocab.length} {COMMON_TRANSLATIONS.itemsFound[language]}</Text>
        </View>

        <ScrollView key="dictionary-scroll" ref={scrollViewRef} style={styles.container}>
          <View style={styles.vocabList}>
            {filteredVocab.map((item, index) => (
              <View
                key={index}
                style={styles.vocabListItem}
              >
                <View style={styles.vocabListLeft}>
                  <Text style={styles.vocabListItemJa}>{item.ja}</Text>
                  <Text style={styles.vocabListItemVi}>{item[language] || item.vi}</Text>
                  {item.dayTitle && (
                    <Text style={styles.vocabListItemDay}>{item.dayTitle} {COMMON_TRANSLATIONS.from[language]}</Text>
                  )}
                </View>
                <View style={styles.vocabActions}>
                  <TouchableOpacity onPress={() => toggleBookmark(item.ja)} style={styles.actionIcon}>
                    <Text style={{ fontSize: 20 }}>{bookmarks.includes(item.ja) ? '⭐' : '☆'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => playSpeech(item.ja.split(' ').pop())} style={styles.actionIcon}>
                    <Text style={{ fontSize: 20 }}>🔊</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ⑤ 使い方ガイド画面
  if (showHowToUse) {
    const guideItems = [
      { key: 'language', icon: '🌍' },
      { key: 'dictionary', icon: '🔍' },
      { key: 'quiz', icon: '📝' },
      { key: 'badges', icon: '🎖️' },
    ];

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setShowHowToUse(false)} style={styles.backButton}>
            <Text style={styles.backButtonText}>← {COMMON_TRANSLATIONS.back[language]}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitleDetail}>{COMMON_TRANSLATIONS.howToUse[language]}</Text>
        </View>

        <ScrollView key="how-to-use-scroll" ref={scrollViewRef} style={styles.scrollContent}>
          <View style={styles.guideContent}>
            {guideItems.map((item) => (
              <View key={item.key} style={styles.section}>
                <Text style={styles.sectionTitle}>{COMMON_TRANSLATIONS.guide[item.key].title[language]}</Text>
                <View style={styles.card}>
                  <View style={styles.guideItemRow}>
                    <Text style={styles.guideIcon}>{item.icon}</Text>
                    <View style={styles.guideTextContainer}>
                      <Text style={styles.textJa}>{COMMON_TRANSLATIONS.guide[item.key].desc.ja}</Text>
                      <Text style={styles.textVi}>{COMMON_TRANSLATIONS.guide[item.key].desc[language]}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}

            {/* 結びのメッセージ */}
            <View style={styles.supportMessageSection}>
              <Text style={styles.supportMessageText}>{COMMON_TRANSLATIONS.supportMessage[language]}</Text>
            </View>
          </View>
          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ④ 詳細画面
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setCurrentDay(null)} style={styles.backButton}>
          <Text style={styles.backButtonText}>← {COMMON_TRANSLATIONS.back[language]}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitleDetail}>{currentDay.title}</Text>
      </View>

      <ScrollView key="day-detail-scroll" ref={scrollViewRef} style={styles.scrollContent}>
        {/* メンターのアドバイス（テスト前） */}
        {(currentDay.id === 'day10' || currentDay.id === 'day20' || currentDay.id === 'day30') && (
          <View style={styles.mentorMessageDetail}>
            <View style={styles.mentorBoxSmall}>
              <Text style={styles.mentorEmojiSmall}>👷</Text>
              <Text style={styles.mentorTextSmall}>{COMMON_TRANSLATIONS.mentor.test[language]}</Text>
            </View>
          </View>
        )}

        {/* イラスト表示（テスト実装） */}
        {currentDay.image && (
          <View style={styles.topImageContainer}>
            <Image source={currentDay.image} style={styles.topImage} resizeMode="contain" />
          </View>
        )}

        {/* ルールセクション */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{COMMON_TRANSLATIONS.todayRule[language]}</Text>
          <View style={styles.card}>
            <View style={styles.phraseRowS}>
              <Text style={[styles.textJa, { flex: 1 }]}>🇯🇵 {currentDay.ruleJa}</Text>
              <TouchableOpacity style={styles.soundButtonSmall} onPress={() => playSpeech(currentDay.ruleJa)}>
                <Text style={styles.soundIconSmall}>🔊</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textVi}>🌐 {currentDay.translations[language] || currentDay.translations.vi}</Text>
          </View>
        </View>

        {/* フレーズセクション */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{COMMON_TRANSLATIONS.todayPhrases[language]}</Text>
          {currentDay.phrases.map((phrase, index) => (
            <View key={index} style={styles.phraseCard}>
              <View style={styles.phraseTexts}>
                <Text style={styles.textJa}>{phrase.ja}</Text>
                <Text style={styles.textVi}>{phrase[language] || phrase.vi}</Text>
              </View>
              <TouchableOpacity style={styles.soundButton} onPress={() => playSpeech(phrase.ja)}>
                <Text style={styles.soundIcon}>🔊</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* 単語セクション */}
        {currentDay.vocab && currentDay.vocab.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{COMMON_TRANSLATIONS.importantVocab[language]}</Text>
            <View style={styles.vocabGrid}>
              {currentDay.vocab.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.vocabCard}
                  onPress={() => playSpeech(item.ja.split(' ').pop())}
                >
                  <Text style={styles.vocabJa}>{item.ja}</Text>
                  <Text style={styles.vocabVi}>{item[language] || item.vi}</Text>
                  <View style={styles.vocabSoundIcon}>
                    <Text style={{ fontSize: 12 }}>🔊</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* クイズセクション */}
        {currentDay.quiz && currentDay.quiz.q && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{COMMON_TRANSLATIONS.quizInstruction[language]}</Text>
            <View style={styles.card}>
              <View>
                {(() => {
                  const q = currentDay.quiz.q || {};
                  const native = q[language] || q.vi || q.id || q.th || q.ph || q.ja || "";
                  return (
                    <Text style={styles.textVi}>『{native}』を日本語で言うと？</Text>
                  );
                })()}
              </View>

              <View style={styles.quizChoicesGrid}>
                {quizChoices.map((choice, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.choiceButton,
                      quizFeedback === 'correct' && choice === currentDay.quiz.a && styles.choiceButtonCorrect,
                      quizFeedback === 'wrong' && choice === userAnswer && styles.choiceButtonWrong
                    ]}
                    onPress={() => {
                      if (quizFeedback !== 'correct') {
                        setUserAnswer(choice);
                        const isCorrect = choice === currentDay.quiz.a;
                        playSE(isCorrect ? 'correct' : 'wrong');
                        if (isCorrect) {
                          setQuizFeedback('correct');
                          setShowAnswer(true);
                          markAsCompleted(currentDay.id);
                          // 改善(4): 正解時に自動で日本語を読み上げる
                          setTimeout(() => {
                            playSpeech(currentDay.quiz.a);
                          }, 500); // 正解SE（ピンポン）の後に少し遅れて読み上げ
                        } else {
                          setQuizFeedback('wrong');
                        }
                      }
                    }}
                  >
                    <Text style={styles.choiceText}>{choice}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {quizFeedback && (
                <View style={styles.feedbackArea}>
                  <Text style={[styles.feedbackText, quizFeedback === 'correct' ? styles.correctText : styles.wrongText]}>
                    {quizFeedback === 'correct' ? '🎉 ' + COMMON_TRANSLATIONS.correct[language] : '❌ ' + COMMON_TRANSLATIONS.wrong[language]}
                  </Text>
                </View>
              )}

              {/* 改善(4): 正解した後（または回答表示中）にだけリプレイボタンを表示 */}
              {(showAnswer || quizFeedback === 'correct') && (
                <View style={styles.quizActionRow}>
                  <TouchableOpacity
                    style={styles.listenButtonFull}
                    onPress={() => playSpeech(currentDay.quiz.a)}
                  >
                    <Text style={styles.listenButtonTextSmall}>🔊 {COMMON_TRANSLATIONS.listenAnswer[language]}</Text>
                  </TouchableOpacity>
                </View>
              )}

              {showAnswer && (
                <View style={styles.answerDisplay}>
                  <Text style={styles.answerLabel}>{COMMON_TRANSLATIONS.correctAnswer[language]}</Text>
                  <Text style={styles.answerText}>{currentDay.quiz.a}</Text>
                </View>
              )}
            </View>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// --- スタイル定義 ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50, // SafeAreaViewが効かない場合用
  },
  conceptSection: {
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50',
  },
  conceptText: {
    fontSize: 14,
    color: '#2E7D32',
    lineHeight: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  headerTitleDetail: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  listContent: {
    padding: 20,
  },
  dayButton: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  dayButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  scrollContent: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#666666',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  phraseCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  phraseTexts: {
    flex: 1,
  },
  textJa: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000000',
  },
  textVi: {
    fontSize: 20,
    color: '#666666',
    lineHeight: 28,
  },
  soundButton: {
    padding: 10,
    backgroundColor: '#E1F5FE',
    borderRadius: 50,
    marginLeft: 10,
  },
  soundIcon: {
    fontSize: 24,
  },
  quizText: {
    fontSize: 16,
    marginBottom: 12,
  },
  answerButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  answerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // --- ゲーミフィケーション & 新規スタイル ---
  progressSection: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  progressContainer: {
    marginVertical: 10,
  },
  progressBarBg: {
    width: '100%',
    height: 12,
    backgroundColor: '#EEE',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  progressMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  streakText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF5722',
  },
  mentorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 15,
  },
  mentorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFD54F',
  },
  mentorEmoji: {
    fontSize: 30,
  },
  mentorBalloon: {
    flex: 1,
    marginLeft: 12,
  },
  mentorName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 2,
  },
  mentorText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  quizChoicesGrid: {
    marginVertical: 15,
  },
  choiceButton: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  choiceButtonCorrect: {
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
  },
  choiceButtonWrong: {
    borderColor: '#F44336',
    backgroundColor: '#FFEBEE',
  },
  choiceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  listenButtonFull: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#2196F3',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  vocabActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    marginLeft: 15,
    padding: 5,
  },
  mentorMessageDetail: {
    padding: 15,
    paddingBottom: 0,
  },
  mentorBoxSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9C4',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FBC02D',
  },
  mentorEmojiSmall: {
    fontSize: 24,
    marginRight: 10,
  },
  mentorTextSmall: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#856404',
  },
  badgeContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 10,
  },
  badgeHeader: {
    fontSize: 13,
    color: '#999',
    marginBottom: 5,
  },
  badgeRow: {
    flexDirection: 'row',
  },
  badgeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  badgeEmoji: {
    fontSize: 20,
  },
  quizInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    marginVertical: 15,
    backgroundColor: '#F9F9F9',
  },
  quizInputCorrect: {
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
  },
  quizInputWrong: {
    borderColor: '#F44336',
    backgroundColor: '#FFEBEE',
  },
  quizActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  answerCheckButton: {
    flex: 1.5,
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  listenButtonSmall: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  listenButtonTextSmall: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
  feedbackArea: {
    marginBottom: 10,
    alignItems: 'center',
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  correctText: {
    color: '#4CAF50',
  },
  wrongText: {
    color: '#F44336',
  },

  guideContent: {
    paddingBottom: 20,
  },
  guideItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guideIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  guideTextContainer: {
    flex: 1,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
  answerDisplay: {
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  answerLabel: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  answerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  phraseRowS: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  soundButtonSmall: {
    padding: 6,
    backgroundColor: '#E1F5FE',
    borderRadius: 20,
  },
  soundIconSmall: {
    fontSize: 16,
  },
  categoryWrap: {
    marginBottom: 20,
  },
  categoryHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginLeft: 4,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
    paddingLeft: 8,
  },
  dayButtonInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  dayButtonCompleted: {
    backgroundColor: '#F1F8E9',
    borderColor: '#AED581',
  },
  dayButtonTextCompleted: {
    color: '#558B2F',
  },
  checkMark: {
    fontSize: 12,
    color: '#689F38',
    fontWeight: 'bold',
  },
  vocabGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vocabCard: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    position: 'relative',
  },
  vocabJa: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  vocabVi: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  topImageContainer: {
    width: '100%',
    height: 250,
    backgroundColor: '#F9F9F9',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  topImage: {
    width: '90%',
    height: '90%',
  },
  vocabSoundIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    opacity: 0.5,
  },
  searchSection: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  searchCount: {
    marginLeft: 10,
    fontSize: 12,
    color: '#666666',
    width: 40,
    textAlign: 'right',
  },
  vocabList: {
    padding: 10,
  },
  vocabListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  vocabListLeft: {
    flex: 1,
  },
  vocabListItemJa: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  vocabListItemVi: {
    fontSize: 20,
    color: '#666666',
    marginBottom: 2,
  },
  vocabListItemDay: {
    fontSize: 11,
    color: '#999999',
    fontStyle: 'italic',
  },
  vocabListItemSound: {
    fontSize: 20,
    marginLeft: 10,
    opacity: 0.6,
  },
  // --- New Styles for Refactor ---
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#1976D2', // セーフガード・ブルー
  },
  welcomeContent: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // 微かなオーバーレイ
  },
  welcomeHeader: {
    marginBottom: 40,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
    textAlign: 'center',
  },
  staffDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '60%',
    marginVertical: 15,
  },
  staffSubTitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  langGridLarge: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  langCardLarge: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    // 影の設定
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  langFlagLarge: {
    fontSize: 50,
    marginBottom: 10,
  },
  langTextContainer: {
    alignItems: 'center',
  },
  langNameLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  langNameSub: {
    fontSize: 11,
    color: '#888888',
    marginTop: 2,
  },
  settingSection: {
    backgroundColor: '#FAFAFA',
    padding: 16,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  staffLabelSmall: {
    fontSize: 11,
    color: '#999999',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  dayGrid: {
    paddingBottom: 5,
  },
  dayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch', // これにより同じ行のカードの高さが揃う
    marginBottom: 15,
  },
  dayCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  dayCardCompleted: {
    backgroundColor: '#F1F8E9',
    borderColor: '#AED581',
  },
  dayCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dayCardLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1976D2',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  dayCardLabelCompleted: {
    color: '#558B2F',
    backgroundColor: '#DCEDC8',
  },
  checkMarkIcon: {
    fontSize: 16,
  },
  dayCardTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333333',
    lineHeight: 18,
    marginBottom: 4,
  },
  dayCardTitleCompleted: {
    color: '#33691E',
  },
  dayCardSubTitle: {
    fontSize: 15,
    color: '#888888',
  },
});

registerRootComponent(App);
