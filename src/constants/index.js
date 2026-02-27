// --- 言語定義 ---
export const LANGUAGES = [
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'th', name: 'ภาษาไทย', flag: '🇹🇭' },
    { code: 'ph', name: 'Tagalog', flag: '🇵🇭' },
    { code: 'ne', name: 'नेपाली', flag: '🇳🇵' },
];

/**
 * UI用翻訳テキストオブジェクト
 * 基本的なラベリングやメッセージを定義
 */
export const COMMON_TRANSLATIONS = {
    menuTitle: { ja: '研修メニュー', vi: 'Menu đào tạo', id: 'Menu Pelatihan', th: 'เมนูการฝึกอบรม', ph: 'Menu ng Pagsasanay', ne: 'प्रशिक्षण मेनु' },
    concept: {
        ja: '現場で使う日本語を母国語で学びましょう。\nまずは『学習』、次に『クイズ』で挑戦！',
        vi: 'Hãy học tiếng Nhật dùng tại công trường bằng tiếng mẹ đẻ.\nHãy học từ "Học tập" sau đó thử sức với "Đố vui"!',
        id: 'Mari belajar bahasa Jepang di lapangan dalam bahasa ibu Anda.\nMulailah dengan "Belajar", lalu tantang diri Anda dengan "Kuis"!',
        th: 'เรียนรู้ภาษาญี่ปุ่นที่ใช้ในไซต์งานด้วยภาษาแม่ของคุณ\nเริ่มด้วย "การเรียนรู้" แล้วท้าทายตัวเองด้วย "ควิซ"!',
        ph: 'Alamin ang wikang Hapon sa site sa iyong sariling wika.\nMagsimula sa "Pag-aaral", pagkatapos ay subukan ang "Pagsusulit"!',
        ne: 'कार्यस्थलमा प्रयोग हुने जापानी भाषा आफ्नो मातृभाषामा सिक्नुहोस्।\nपहिले "सिकाई", त्यसपछि "क्विज" मा प्रयास गर्नुहोस्!'
    },
    selectLang: {
        ja: '言語を選択してください',
        vi: 'Chọn ngôn ngữ',
        id: 'Pilih bahasa',
        th: 'เลือกภาษา',
        ph: 'Pumili ng wika',
        ne: 'भाषा छान्नुहोस्',
        en: 'Select Language'
    },
    staffSupport: {
        ja: 'スタッフ用補助表記：',
        vi: 'Hỗ trợ nhân viên:',
        id: 'Dukungan staf:',
        th: 'การสนับสนุนเจ้าหน้าที่:',
        ph: 'Suporta sa staff:',
        ne: 'कर्मचारी सहयोगी जानकारी:'
    },
    dictionary: { ja: '単語検索・辞書', vi: 'Tra cứu từ điển', id: 'Pencarian Kata / Kamus', th: 'ต้นหาคำศัพท์ / พจนานุกรม', ph: 'Paghahanap ng Salita / Diksyunaryo', ne: 'शब्द खोज / शब्दकोश' },
    fiveS: { ja: '5S（日本の現場ルール）', vi: '5S (Quy tắc hiện trường)', id: '5S (Aturan Lapangan)', th: '5S (กฎระเบียบในพื้นที่)', ph: '5S (Mga Alituntunin sa Lugar)', ne: '5S (जापानी कार्यस्थल नियम)' },
    completed: { ja: '完了', vi: 'Hoàn thành', id: 'Selesai', th: 'เสร็จสิ้น', ph: 'Tapos na', ne: 'पूरा भयो' },
    back: { ja: '戻る', vi: 'Quay lại', id: 'Kembali', th: 'ย้อนกลับ', ph: 'Bumalik', ne: 'फिर्ता' },
    howToUse: { ja: '使い方ガイド', vi: 'Hướng dẫn sử dụng', id: 'Panduan Penggunaan', th: 'คู่มือการใช้งาน', ph: 'Gabay sa Paggamit', ne: 'प्रयोग गर्ने तरिका' },
    expired: {
        ja: '試用期間が終了しました',
        vi: 'Thời gian dùng thử đã kết thúc',
        id: 'Masa percobaan telah berakhir',
        th: 'ระยะเวลาทดลองใช้งานสิ้นสุดลงแล้ว',
        ph: 'Tapos na ang trial period',
        ne: 'परीक्षण अवधि समाप्त भयो'
    },
    updateRequired: {
        ja: '最新版にアップデート、または管理者に連絡してください。',
        vi: 'Vui lòng cập nhật phiên bản mới nhất hoặc liên hệ với quản trị viên.',
        id: 'Silakan perbarui ke versi terbaru atau hubungi administrator.',
        th: 'โปรดอัปデトเป็นเวอร์ชันล่าสุด またはติดต่อผู้ดูแลシステム',
        ph: 'Mangyaring mag-update sa pinakabagong bersyon o makipag-ugnayan sa administrator.',
        ne: 'नयाँ संस्करण अपडेट गर्नुहोस् वा व्यवस्थापकलाई सम्पर्क गर्नुहोस्।'
    },
    mentorName: { ja: 'あんぜんさん', vi: 'Anzen-san', id: 'Anzen-san', th: 'อันเซ็นซัง', ph: 'Anzen-san', ne: 'अन्जेन-सान' },
    streak: { ja: '連勝中！', vi: 'Ngày liên tiếp!', id: 'Hari berturut-turut!', th: 'วันติดต่อกัน!', ph: 'Tuloy-tuloy na araw!', ne: 'लगातार दिनहरू!' },
    searchPlaceholder: { ja: '検索...', vi: 'Tìm kiếm...', id: 'Cari...', th: 'ค้นหา...', ph: 'Maghanap...', ne: 'खोज्नुहोस्...' },
    itemsFound: { ja: '件', vi: 'mục', id: 'item', th: 'รายการ', ph: 'item', ne: 'आइटमहरू' },
    from: { ja: 'より', vi: 'từ', id: 'dari', th: 'จาก', ph: 'mula sa', ne: 'बाट' },
    todayRule: { ja: '今日のルール', vi: 'Quy tắc hôm nay', id: 'Aturan hari ini', th: 'กฎของวันนี้', ph: 'Alituntunin sa araw na ito', ne: 'आजको नियम' },
    todayPhrases: { ja: '今日のフレーズ5つ', vi: '5 mẫu câu hôm nay', id: '5 Frasa hari ini', th: '5 วลีของวันนี้', ph: '5 Prase sa araw na ito', ne: 'आजका ५ वाक्यांशहरू' },
    importantVocab: { ja: '重要単語', vi: 'Từ vựng quan trọng', id: 'Kata penting', th: 'คำศัพท์ที่สำคัญ', ph: 'Mahalagang salita', ne: 'महत्वपूर्ण शब्दहरू' },
    quizInstruction: {
        ja: '正しい日本語を選んでください',
        vi: 'Chọn tiếng Nhật đúng',
        id: 'Pilih bahasa Jepang yang benar',
        th: 'เลือกภาษาญี่ปุ่นที่ถูกต้อง',
        ph: 'Pumili ng tamang Japanese',
        ne: 'सही जापानी शब्द छान्नुहोस्'
    },
    quiz: { ja: 'クイズ', vi: 'Kiểm tra', id: 'Kuis', th: 'ควิซ', ph: 'Pagsusulit', ne: 'क्विज' },
    correct: { ja: '正解です！', vi: 'Chính xác!', id: 'Benar!', th: 'Correct!', ph: 'Tama!', ne: 'सही छ!' },
    wrong: { ja: '違います。もう一度。', vi: 'Sai rồi. Thử lại nhé.', id: 'Salah. Coba lagi.', th: 'ยังไม่ถูก ลองอีกครั้ง', ph: 'Mali. Subukan muli.', ne: 'गलत। फेरि प्रयास गर्नुहोस्।' },
    correctAnswer: { ja: '回答を見る', vi: 'Xem đáp án', id: 'Lihat jawaban', th: 'ดูคำตอบ', ph: 'Tingnan ang sagot', ne: 'उत्तर हेर्नुहोस्' },
    checkAnswer: { ja: '判定する', vi: 'Kiểm tra', id: 'Periksa', th: 'ตรวจสอบ', ph: 'Suriin', ne: 'जाँच गर्नुहोस्' },
    listenAnswer: { ja: '声を聴く', vi: 'Nghe âm thanh', id: 'Dengarkan suara', th: 'ฟังเสียง', ph: 'Pakinggan ang boses', ne: 'आवाज सुन्नुहोस्' },
    placeholder: { ja: '日本語で入力...', vi: 'Nhập bằng tiếng Nhật...', id: 'Masukkan dalam bahasa Jepang...', th: 'กรอกเป็นภาษาญี่ปุ่น...', ph: 'I-type sa Japanese...' },
    progress: { ja: '学習進捗', vi: 'Tiến độ học tập', id: 'Kemajuan Belajar', th: 'ความคืบหน้าการเรียน', ph: 'Progress sa Pag-aaral', ne: 'सिकाई प्रगति' },
    badges: { ja: '獲得バッジ', vi: 'Huy hiệu đã đạt', id: 'Lencana yang Didapat', th: 'เหรียญตราที่ได้รับ', ph: 'Mga Badges na Nakuha', ne: 'प्राप्त ब्याजहरू' },
    categories: {
        '基本・安全': { ja: '基本・安全', vi: 'Cơ bản & An toàn', id: 'Dasar & Keselamatan', th: 'พื้นฐานและความปลอดภัย', ph: 'Basic at Kaligtasan', ne: 'आधारभूत र सुरक्षा' },
        '指示・移動': { ja: '指示・移動', vi: 'Chỉ thị & Di chuyển', id: 'Instruksi & Pergerakan', th: 'คำสั่งและการเคลื่อนย้าย', ph: 'Instruksyon at Paggalaw', ne: 'निर्देशन र स्थानान्तरण' },
        '作業・現場ルール': { ja: '作業・現場ルール', vi: 'Công việc & Quy tắc', id: 'Pekerjaan & Aturan', th: 'งานและกฎระเบียบ', ph: 'Trabaho at Alituntunin', ne: 'काम र नियमहरू' }
    },
    mentor: {
        welcome: { ja: '今日も一緒に安全を学びましょう！', vi: 'Hôm nay hãy cùng học về an toàn nhé!', id: 'Mari belajar keselamatan bersama hari ini!', th: 'วันนี้มาเรียนรู้เรื่องความปลอดภัยด้วยกันเถอะ!', ph: 'Mag-aral tayo ng kaligtasan kasama ngayon!', ne: 'आज पनि सुरक्षाको बारेमा सँगै सिकौं!' },
        streak: { ja: 'すごい！連続学習{n}日目です！', vi: 'Tuyệt vời! Bạn đã học liên tiếp {n} ngày!', id: 'Hebat! Anda sudah belajar {n} hari berturut-turut!', th: 'สุดยอด! คุณเรียนติดต่อกันเป็นวันที่ {n} แล้ว!', ph: 'Galing! Ika-{n} na araw mo na ng tuloy-tuloy na pag-aaral!', ne: 'अचम्मको! तपाईंले लगातार {n} दिन सिक्नुभयो!' },
        test: { ja: '今日はテストだ。落ち着いていこう！', vi: 'Hôm nay là bài検査だ。落ち着いていこう！', id: 'Hari ini ada tes. Tetap tenang ya!', th: 'วันนี้มีสอบ ตั้งสติให้ดีนะ!', ph: 'May pagsusulit ngayon. Manatiling kalmado!', ne: 'आज परीक्षा छ। शान्त रहनुहोस्!' }
    },
    guide: {
        language: {
            title: { ja: '1. 言語の選び方', vi: '1. Cách chọn ngôn ngữ', id: '1. Cara memilih bahasa', th: '1. วิธีเลือกภาษา', ph: '1. Paano pumili ng wika', ne: '१. भाषा कसरी छान्ने' },
            desc: { ja: '母国語のボタンを押してください。旗を目印にします。', vi: 'Nhấn vào nút ngôn ngữ của bạn. Hãy nhìn vào lá cờ.', id: 'Tekan tombol bahasa Anda. Lihat benderanya.', th: 'กดปุ่มภาษาของคุณ โดยดูที่ธงชาติ', ph: 'Pindutin ang button ng iyong wika. Hanapin ang bandila.', ne: 'आफ्नो मातृभाषाको बटन थिच्नुहोस्। झण्डा हेरेर चिन्नुहोस्।' }
        },
        dictionary: {
            title: { ja: '2. 辞書の使い方', vi: '2. Cách dùng từ điển', id: '2. Cara menggunakan kamus', th: '2. วิธีใช้พจนานุกรม', ph: '2. Paano gamitin ang diksyunaryo', ne: '२. शब्दकोशको प्रयोग' },
            desc: { ja: '現場の言葉を探せます。🔊ボタンで音を聞けます。', vi: 'Bạn có thể tìm từ ngữ tại hiện trường. Nhấn 🔊 để nghe âm thanh.', id: 'Cari istilah lapangan. Tekan 🔊 untuk mendengar suara.', th: 'ค้นหาคำศัพท์ในไซต์งาน กด 🔊 เพื่อฟังเสียง', ph: 'Magハナプ ng mga salita sa site. Pindutin ang 🔊 para makinig.', ne: 'कार्यस्थलका शब्दहरू खोज्न सक्नुहुन्छ। आवाज सुन्न 🔊 बटन थिच्नुहोस्।' }
        },
        quiz: {
            title: { ja: '3. 学習とクイズ', vi: '3. Học và Kiểm tra', id: '3. Belajar dan Kuis', th: '3. การเรียนและคウィズ', ph: '3. Pag-aaral at Pagsusulit', ne: '३. सिकाई र क्विज' },
            desc: { ja: '毎日日本語を勉強します。クイズに合格すると進みます。', vi: 'Học tiếng Nhật mỗi ngày. Vượt qua kiểm tra để đi tiếp.', id: 'Belajar bahasa Jepang setiap hari. Lulus kuis untuk lanjut.', th: 'เรียนภาษาญี่ปุ่นทุกวัน ผ่านควิซเพื่อไปต่อ', ph: 'Mag-aral ng Japanese araw-araw. Ipasa ang pagsusulit para magpatuloy.', ne: 'हरेक दिन जापानी भाषा सिक्नुहोस्। क्विज पास गरेपछि अर्को चरणमा जानुहोस्।' }
        },
        badges: {
            title: { ja: '4. バッジをもらう', vi: '4. Nhận huy hiệu', id: '4. Nhận lencana', th: '4. การรับเหรียญตรา', ph: '4. Makakuha ng badge', ne: '४. ब्याज प्राप्त गर्ने' },
            desc: { ja: '10日クリアするごとに、合格バッジがもらえます。', vi: 'Cứ mỗi 10 ngày hoàn thành, bạn sẽ nhận được huy hiệu.', id: 'Dapatkan lencana setiap menyelesaikan 10 hari.', th: 'รับเหรียญตราทุกครั้งที่ผ่านครบ 10 วัน', ph: 'Makakakuha ng badge bawat 10 araw na matapos.', ne: 'हरेक १० दिन पूरा गरेपछि तपाईंले ब्याज पाउनुहुनेछ।' }
        }
    },
    supportMessage: {
        ja: 'よき学びの一助になりますよう。',
        vi: 'Hy vọng ứng dụng này sẽ giúp ích cho việc học tập của bạn.',
        id: 'Semoga aplikasi ini dapat membantu proses belajar Anda.',
        th: 'หวังว่าแอปนี้จะเป็นประโยชน์ต่อการเรียนรู้ของคุณ',
        ph: 'Sana ay makatulong ang app na ito sa iyong pag-aaral.',
        ne: 'यो एपले तपाईंको सिकाइमा मद्दत पुर्याउनेछ भन्ने आशा गर्दछौं।'
    }
};

/**
 * 5S（現場ルール）データ
 */
export const FIVE_S_DATA = {
    title: { ja: '5S（現場のルール）', vi: 'Quy tắc 5S', id: 'Aturan 5S', th: 'กฎ 5S', ph: '5S Rules', ne: '5S (कार्यस्थलका नियमहरू)' },
    intro: {
        title: { ja: '5Sとは？', vi: '5S là gì?', id: 'Apa itu 5S?', th: '5S คืออะไร?', ph: 'Ano ang 5S?', ne: '5S भनेको के हो?' },
        desc: {
            ja: '日本の会社で大切な考え方。きれい・安全・ルールを守る。',
            vi: 'Cách tư duy quan trọng tại công ty Nhật: Sạch sẽ - An toàn - Tuân thủ quy tắc.',
            id: 'Cara berpikir penting di perusahaan Jepang: Bersih - Aman - Patuhi aturan.',
            th: 'แนวคิดสำคัญในบริษัทญี่ปุ่น: สะอาด - ปลอดภัย - ปฏิบัติตามกฎ',
            ph: 'Mahalagang konsepto sa mga kumpanya sa Japan: Malinis - Ligtas - Pagsunod sa mga alituntunin.',
            ne: 'जापानी कम्पनीहरूमा महत्त्वपूर्ण अवधारणा। सफा, सुरक्षित र नियमहरूको पालना।'
        }
    },
    items: [
        {
            title: { ja: '1. 整理（Seiri）', vi: 'Sàng lọc', id: 'Ringkas', th: 'สะสาง', ph: 'Suriin', ne: '१. सेइरी (व्यवस्थापन)' },
            pronounce: '整理、せいり',
            phrases: [
                { ja: '・使わない物は捨てる', vi: 'Vứt bỏ những thứ không cần thiết', id: 'Buang barang yang tidak perlu', th: 'ทิ้งของที่ไม่ได้ใช้', ph: 'Itapon ang mga hindi ginagamit', ne: '・प्रयोग नहुने सामान फ्याँक्नुहोस्' },
                { ja: '・必要な物だけ残す', vi: 'Chỉ giữ lại những thứ cần thiết', id: 'Hanya simpan barang yang diperlukan', th: 'เหลือไว้เฉพาะののが必要', ph: 'Itira lamang ang mga kailangan', ne: '・आवश्यक सामान मात्र राख्नुहोस्' }
            ]
        },
        {
            title: { ja: '2. 整頓（Seiton）', vi: 'Sắp xếp', id: 'Rapi', th: 'สะดวก', ph: 'Sinupin', ne: '२. सेइतोन (क्रमबद्धता)' },
            pronounce: '整頓、せいとん',
            phrases: [
                { ja: '・決まった場所に置く', vi: 'Đặt vào nơi đã quy định', id: 'Letakkan di tempat yang ditentukan', th: 'วาง在ที่ที่กำหนด', ph: 'Ilagay sa itinakdang lugar', ne: '・तोकिएको ठाउँमा राख्नुहोस्' },
                { ja: '・使ったら元に戻す', vi: 'Trả lại chỗ cũ sau khi sử dụng', id: 'Kembalikan ke tempat semula setelah dipakai', th: '使用した後は元に戻す', ph: 'Ibalik sa dati pagkatapos gamitin', ne: '・प्रयोग गरेपछि पुरानै ठाउँमा राख्नुहोस्' },
                { ja: '・ラベルを見る', vi: 'Kiểm tra nhãn dán', id: 'Lihat label', th: 'ดูฉลาก', ph: 'Tingnan ang label', ne: '・लेबल हेर्नुहोस्' }
            ]
        },
        {
            title: { ja: '3. 清掃（Seiso）', vi: 'Sạch sẽ', id: 'Resik', th: 'สะอาด', ph: 'Simutin', ne: '३. सेइसो (सरसफाइ)' },
            pronounce: '清掃、せいそう',
            phrases: [
                { ja: '・掃除する', vi: 'Quét dọn, vệ sinh', id: 'Bersihkan', th: 'ทำความสะอาด', ph: 'Maglinis', ne: '・सरसफाइ गर्नुहोस्' },
                { ja: '・ゴミを残さない', vi: 'Không để lại rác', id: 'Jangan tinggalkan sampah', th: 'ไม่ทิ้งขยะไว้', ph: 'Huwag mag-iwan ng basura', ne: '・फोहोर नछोड्नुहोस्' },
                { ja: '・床をきれいに', vi: 'Giữ sàn nhà sạch sẽ', id: 'Jaga kebersihan lantai', th: 'ทำพื้นให้สะอาด', ph: 'Panatilihing malinis ang sahig', ne: '・भुइँ सफा राख्नुहोस्' }
            ]
        },
        {
            title: { ja: '4. 清潔（Seiketsu）', vi: 'Săn sóc', id: 'Rawat', th: 'สร้างมาตรฐาน', ph: 'Siguruhin', ne: '४. सेइकेत्सु (स्वच्छता)' },
            pronounce: '清潔、せいけつ',
            phrases: [
                { ja: '・きれいを保つ', vi: 'Duy trì sự sạch sẽ', id: 'Jaga kebersihan', th: 'รักษาความสะอาด', ph: 'Panatilihin ang kalinisan', ne: '・सफा राख्नुहोस्' },
                { ja: '・毎日チェック', vi: 'Kiểm tra hàng daily', id: 'Cek setiap hari', th: 'ตรวจสอบทุกวัน', ph: 'I-check araw-araw', ne: '・हरेक दिन जाँच गर्नुहोस्' },
                { ja: '・ルールを守る', vi: 'Tuân thủ quy tắc', id: 'Patuhi aturan', th: 'ปฏิบัติตามกฎ', ph: 'Sundin ang mga alituntunin', ne: '・नियमहरूको पालना गर्नुहोस्' }
            ]
        },
        {
            title: { ja: '5. しつけ（Shitsuke）', vi: 'Sẵn sàng', id: 'Rajin', th: 'สร้างวินัย', ph: 'Sanayin', ne: '५. शित्सुके (अनुशासन)' },
            pronounce: 'しつけ',
            phrases: [
                { ja: '・決まりを守る', vi: 'Tuân thủ kỷ luật', id: 'Patuhi disiplin', th: 'ปฏิบัติตามข้อกำหนด', ph: 'Sundin ang mga patakaran', ne: '・नियमहरूको पालना गर्नुहोस्' },
                { ja: '・毎日やる', vi: 'Thực hiện hàng daily', id: 'Lakukan setiap hari', th: 'ทำทุกวัน', ph: 'Gawin araw-araw', ne: '・हरेक दिन गर्नुहोस्' },
                { ja: '・習慣にする', vi: 'Tạo thành thói quen', id: 'Jadikan kebiasaan', th: 'ทำให้เป็นนิสัย', ph: 'Gawing nakasanayan', ne: '・बानी बसाल्नुहोस्' }
            ]
        }
    ],
    advice: {
        title: { ja: 'アドバイス', vi: 'Lời khuyên', id: 'Saran', th: 'คำแนะนำ', ph: 'Payo', ne: 'सुझाव' },
        desc: {
            ja: '毎日少しずつ続けましょう。現場をきれいにすると、事故が減ります。',
            vi: 'Hãy duy trì mỗi ngày một ít. Giữ hiện trường sạch sẽ sẽ giảm bớt tai nạn.',
            id: 'Lakukan sedikit demi sedikit setiap hari. Menjaga kebersihan lapangan akan mengurangi kecelakaan.',
            th: 'ทำทีละนิดทุกวัน การรักษาความสะอาดในไซต์งานจะช่วยลดอุบัติเหตุ',
            ph: 'Gawin ng paunti-unti araw-araw. Kapag malinis ang site, mababawasan ang mga aksidente.',
            ne: 'हरेक दिन अलिअलि गर्दै जारी राख्नुहोस्। कार्यस्थल सफा राख्दा दुर्घटना कम हुन्छ।'
        }
    }
};

/**
 * 補足単語集
 */
export const SUPPLEMENTAL_VOCAB = [
    { ja: '🏗️ 現場', vi: 'Hiện trường / Công trường', id: 'Lapangan / Tempat proyek', th: 'ไซต์งาน / หน้างาน', ph: 'Site / Lugar ng trabaho', ne: 'कार्यस्थल', cat: '現場' },
    { ja: '🏢 事務所', vi: 'Văn phòng', id: 'Kantor', th: 'สำนักงาน', ph: 'Opisina', ne: 'कार्यालय', cat: '現場' },
    { ja: '🏠 休憩所', vi: 'Nơi nghỉ ngơi', id: 'Tempat istirahat', th: 'ที่พักผ่อน', ph: 'Pahingahan', ne: 'आराम गर्ने ठाउँ', cat: '現場' },
    { ja: '👷 現場監督', vi: 'Giám sát hiện trường', id: 'Mandor / Pengawas lapangan', th: 'ผู้ควบคุมงาน', ph: 'Site supervisor', ne: 'कार्यस्थल पर्यवेक्षक', cat: '現場' },
    { ja: '🤝 元請け', vi: 'Nhà thầu chính', id: 'Kontraktor utama', th: 'ผู้รับเหมาหลัก', ph: 'Main contractor', ne: 'मुख्य ठेकेदार', cat: '組織' },
    { ja: '🏗️ 下請け', vi: 'Nhà thầu phụ', id: 'Subkontraktor', th: 'ผู้รับเหมารอง', ph: 'Subcontractor', ne: 'उप-ठेकेदार', cat: '組織' },
    { ja: '🌅 朝礼', vi: 'Họp buổi sáng', id: 'Apel pagi', th: 'การรวมแถวเช้า', ph: 'Morning meeting', ne: 'बिहानी बैठक', cat: 'ルール' },
    { ja: '⚠️ KY活動（危険予知活動）', vi: 'Hoạt động KY (Dự đoán nguy hiểm)', id: 'Kegiatan KY (Prediksi Bahaya)', th: 'กิจกรรม KY (การทำนายอันตราย)', ph: 'KY Activity (Danger Prediction)', ne: 'KY गतिविधि (खतरा भविष्यवाणी)', cat: 'ルール' },
    { ja: '🪜 足場', vi: 'Giàn giáo', id: 'Scaffolding / Perancah', th: 'นั่งร้าน', ph: 'Scaffolding', ne: 'असिबा (खत)', cat: '設備' },
    { ja: '🪜 梯子', vi: 'Thang', id: 'Tangga', th: 'บันได', ph: 'Ladder', ne: 'भर्याङ', cat: '設備' },
    { ja: '🏢 仮設トイレ', vi: 'Nhà vệ sinh tạm thời', id: 'Toilet sementara', th: 'ห้องน้ำชั่วคราว', ph: 'Temporary toilet', ne: 'अस्थायी शौचालय', cat: '設備' },
    { ja: '🔌 仮設電源', vi: 'Nguồn điện tạm thời', id: 'Listrik sementara', th: 'ไฟฟ้าชั่วคราว', ph: 'Temporary power', ne: 'अस्थायी विद्युत आपूर्ति', cat: '設備' },
    { ja: '🧱 養生', vi: 'Che chắn / Bảo dưỡng', id: 'Perlindungan area (Bakoting)', th: 'การป้องกันพื้นผิว / การบ่ม', ph: 'Curing / Surface protection', ne: 'योन्जो (सतह संरक्षण)', cat: '作業' },
    { ja: '🛠️ 親綱', vi: 'Dây an toàn chính', id: 'Tali pengaman utama', th: 'เชือกช่วยชีวิต', ph: 'Lifeline', ne: 'सुरक्षा डोरी', cat: '安全' },
    { ja: 'Lantern 🏮 誘導灯', vi: 'Đèn hướng dẫn', id: 'Lampu penunjuk jalan', th: 'ไฟนำทาง', ph: 'Guide light', ne: 'गाइड लाइट', cat: '安全' },
    { ja: '掃除', vi: 'Dọn dẹp / Vệ sinh', id: 'Pembersihan', th: 'การทำความสะอาด', ph: 'Cleaning', ne: 'सरसफाइ', cat: '作業' },
    { ja: '🔨 はつり', vi: 'Đục phá bê tông', id: 'Membobok beton', th: 'การสกัดคอนกรีต', ph: 'Chipping (concrete)', ne: 'खत्सुरी (कंक्रिट काट्ने)', cat: '作業' },
    { ja: '🧱 溶接', vi: 'Hàn', id: 'Las', th: 'การพัสดุ / การเชื่อม', ph: 'Welding', ne: 'वेल्डिङ', cat: '作業' },
    { ja: '🏗️ 玉掛け', vi: 'Móc cáp / Treo hàng', id: 'Slings / Mengaitkan barang', th: 'การผูกรัดสิ่งของ (เครน)', ph: 'Slinging', ne: 'तामागाके (क्रुनेमा सामान बाँध्ने)', cat: '作業' },
    { ja: '🧱 建込み', vi: 'Dựng cột / Lắp dựng', id: 'Pemasangan rangka / kolom', th: 'การติดตั้งโครงสร้าง', ph: 'Setting / Erection', ne: 'ततेकोमी (स्तम्भ खडा गर्ने)', cat: '作業' },
    { ja: '🧱 打設', vi: 'Đổ bê tông', id: 'Pengecoran beton', th: 'การเทคอนกรีต', ph: 'Concrete pouring', ne: 'दाइसेत्सु (कंक्रिट खन्याउने)', cat: '作業' },
    { ja: '🔩 締付け', vi: 'Siết chặt', id: 'Pengencangan', th: 'การขันแน่น', ph: 'Tightening', ne: 'सिमेत्सुके (कस्ने)', cat: '作業' },
    { ja: '🧯 消火器', vi: 'Bình chữa cháy', id: 'Tabung Pemadam Api', th: 'ถังดับเพลิง', ph: 'Fire extinguisher', ne: 'अग्नि नियन्त्रक यन्त्र', cat: '安全' },
    { ja: '🩹 救急箱', vi: 'Hộp sơ cứu', id: 'Kotak P3K', th: 'ชุดปฐมพยาบาล', ph: 'First aid kit', ne: 'प्राथमिक उपचार बक्स', cat: '安全' },
    { ja: '📋 許可証', vi: 'Giấy phép', id: 'Surat izin', th: 'ใบอนุญาต', ph: 'Permit / license', ne: 'अनुमति पत्र', cat: '書類' },
    { ja: '💳 入館証', vi: 'Thẻ ra vào', id: 'Kartu masuk', th: 'บัตรประจำตัวขาเข้า', ph: 'Entry ID', ne: 'प्रवेश पत्र', cat: '書類' },
    { ja: '🚗 駐車場', vi: 'Bãi đỗ xe', id: 'Tempat parkir', th: 'ที่จอดรถ', ph: 'Parking lot', ne: 'पार्किङ स्थल', cat: '現場' }
];
