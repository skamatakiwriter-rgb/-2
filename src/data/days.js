import { makeDay } from '../utils/helpers';

export const DRILL_DATA = [
    makeDay(
        'day1',
        '基本・安全',
        'Day1：安全①：止まれ',
        '危険を見たらすぐに止める。大きい声で言います。',
        {
            vi: 'Thấy nguy hiểm thì phải dừng lại ngay. Nói to là đúng.',
            id: 'Berhenti jika melihat bahaya. Berteriak adalah jawaban yang benar.',
            th: 'หยุดหากเห็นอันตราย การตะโกนคือคำตอบที่ถูกต้อง',
            ph: 'Huminto kung makakita ng panganib. Ang pagsigaw ay ang tamang sagot.',
            ne: 'खतरा देखेमा तुरुन्तै रोक्नुहोस्। ठूलो स्वरमा भन्नुहोस्।'
        },
        [
            { ja: '危ない！止まって！', vi: 'Nguy hiểm! Dừng lại!', id: 'Bahaya! Berhenti!', th: 'อันตราย! หยุด!', ph: 'Panganib! Hinto!', ne: 'खतरा! रोक्नुहोस्!' },
            { ja: 'そこに入らないで！', vi: 'Đừng vào đó!', id: 'Jangan masuk ke sana!', th: 'อย่าเข้าไปที่นั่น!', ph: 'Huwag pumasok diyan!', ne: 'त्यहाँ नजानुहोस्!' },
            { ja: '下に人がいます！', vi: 'Có người ở phía dưới!', id: 'Ada orang di bawah!', th: 'มีคนอยู่ด้านล่าง!', ph: 'May tao sa ibaba!', ne: 'तल मान्छे छ!' },
            { ja: 'ヘルメットを着けてください', vi: 'Hãy đội mũ bảo hộ', id: 'Tolong pakai helm', th: 'กรุณาสวมหมวกนิรภัย', ph: 'Pakisuot ang helmet', ne: 'हेल्मेट लगाउनुहोस्' },
            { ja: '足元に気をつけてください', vi: 'Hãy chú ý bước chân', id: 'Tolong perhatikan langkah kaki', th: 'กรุณาระวังเท้าของคุณ', ph: 'Mag-ingat sa nilalakaran', ne: 'आफ्नो पाइला ध्यान दिनुहोस्' }
        ],
        [
            { ja: '🪖 ヘルメット', vi: 'Mũ bảo hộ', id: 'Helm', th: 'หมวกนิรภัย', ph: 'Helmet', ne: 'हेल्मेट' },
            { ja: '🧤 手袋', vi: 'Găng tay', id: 'Sarung tangan', th: 'ถุงมือ', ph: 'Gloves', ne: 'पन्जा' },
            { ja: '👟 安全靴', vi: 'Giày bảo hộ', id: 'Sepatu pengaman', th: 'รองเท้าセーフティ', ph: 'Safety shoes', ne: 'सुरक्षा जुत्ता' }
        ],
        {
            q: {
                ja: '危ない！止まって！',
                vi: 'Nguy hiểm! Dừng lại!',
                id: 'Bahaya! Berhenti!',
                th: 'อันตราย! หยุด!',
                ph: 'Panganib! Hinto!',
                ne: 'खतरा! रोक्नुहोस्!'
            },
            a: '危ない！止まって！'
        },
        require('../../assets/day1_safety.png')
    ),
    makeDay(
        'day2',
        '基本・安全',
        'Day2：指示①：運ぶ・置く',
        '分からない時は確認する。黙って進めるのが一番危ない。',
        {
            vi: 'Không hiểu thì phải hỏi. Im lặng làm tiếp là nguy hiểm nhất.',
            id: 'Konfirmasi jika tidak mengerti. Melanjutkan diam-diam adalah yang paling berbahaya.',
            th: 'ยืนยันหากคุณไม่เข้าใจ การดำเนินการต่อโดยไม่พูดอะไรเป็นสิ่งที่พึงระวังมากที่สุด',
            ph: 'Kumpirmahin kung hindi naiintindihan. Ang pagpapatuloy nang tahimik ay ang pinakamapanganib.',
            ne: 'नबुझेका कुराहरू सोध्नुहोस्। नभनी अगाडि बढ्नु सबैभन्दा खतरनाक हुन्छ।'
        },
        [
            { ja: 'これを運んでください', vi: 'Hãy mang cái này đi', id: 'Tolong bawa ini', th: 'กรุณาขนย้ายสิ่งนี้', ph: 'Pakidala ito', ne: 'यो बोक्नुहोस्' },
            { ja: 'そこに置いてください', vi: 'Hãy đặt ở đó', id: 'Tolong letakkan di sana', th: 'กรุณาวางไว้ตรงนั้น', ph: 'Pakilagay diyan', ne: 'त्यहाँ राख्नुहोस्' },
            { ja: '手伝ってください', vi: 'Làm ơn giúp tôi', id: 'Tolong bantu saya', th: 'กรุณาช่วยฉันด้วย', ph: 'Pakitulungan ako', ne: 'मलाई मद्दत गर्नुहोस्' },
            { ja: '次はこれです', vi: 'Tiếp theo là cái này', id: 'Selanjutnya ini', th: 'ต่อไปคือสิ่งนี้', ph: 'Ang susunod ay ito', ne: 'अब यो हो' },
            { ja: '今日はここまでです', vi: 'Hôm nay đến đây thôi', id: 'Sampai di sini untuk hari ini', th: 'วันนี้พอแค่นี้', ph: 'Hanggang dito na muna para sa araw na ito', ne: 'आजको लागि यति नै' }
        ],
        [
            { ja: '📦 パレット', vi: 'Pallet', id: 'Palet', th: 'พาเลท', ph: 'Pallet', ne: 'प्यालेट' },
            { ja: '🗑️ ゴミ箱', vi: 'Thùng rác', id: 'Tempat sampah', th: 'ถังขยะ', ph: 'Basurahan', ne: 'फोहोर फाल्ने भाँडो' },
            { ja: '📝 図面', vi: 'Bản vẽ', id: 'Gambar teknis', th: 'แบบแปลน', ph: 'Drawing', ne: 'नक्सा (ड्रइङ)' }
        ],
        {
            q: {
                ja: 'そこに置いてください',
                vi: 'Hãy đặt ở đó',
                id: 'Tolong letakkan di sana',
                th: 'กรุณาวางไว้ตรงนั้น',
                ph: 'Pakilagay diyan',
                ne: 'त्यहाँ राख्नुहोस्'
            },
            a: 'そこに置いてください'
        }
    ),
    makeDay(
        'day3',
        '基本・安全',
        'Day3：聞き返し',
        '聞こえない、分からない時は必ず聞き返す。',
        {
            vi: 'Khi không nghe rõ hoặc không hiểu, nhất định phải hỏi lại.',
            id: 'Selalu tanya kembali jika tidak terdengar atau tidak mengerti.',
            th: 'ต้องถามซ้ำเสมอเมื่อไม่ได้ยินหรือไม่เข้าใจ',
            ph: 'Palaging magtanong muli kung hindi narinig o hindi naintindihan.',
            ne: 'नसुनेमा वा नबुझेमा सधैं फेरि सोध्नुहोस्।'
        },
        [
            { ja: 'もう一度お願いします', vi: 'Làm ơn nói lại một lần nữa', id: 'Tolong sekali lagi', th: 'ขออีกรอบครับ/ค่ะ', ph: 'Pakiulit po', ne: 'कृपया फेरि एक पटक' },
            { ja: 'すみません、わかりません', vi: 'Xin lỗi, tôi không hiểu', id: 'Maaf, saya tidak mengerti', th: 'ขอโทษครับ/ค่ะ ฉันไม่เข้าใจ', ph: 'Paumanhin, hindi ko po naintindihan', ne: 'माफ गर्नुहोस्, मैले बुझिन' },
            { ja: 'もう少しゆっくりお願いします', vi: 'Làm ơn nói chậm lại một chút', id: 'Tolong bicara sedikit lebih pelan', th: 'กรุณาพูดช้าลงอีกนิดครับ/ค่ะ', ph: 'Pakibagalan po ng kaunti', ne: 'कृपया अलि बिस्तारै भन्नुहोस्' },
            { ja: '書いてもらえますか？', vi: 'Bạn có thể viết ra được không?', id: 'Bisa tolong tuliskan?', th: 'ช่วยเขียนให้หน่อยได้ไหมครับ/ค่ะ?', ph: 'Maaari mo bang isulat?', ne: 'के तपाईं लेखिदिन सक्नुहुन्छ?' },
            { ja: 'はい、わかりました', vi: 'Vâng, tôi đã hiểu', id: 'Ya, saya mengerti', th: 'ครับ/ค่ะ เข้าใจแล้ว', ph: 'Opo, naintindihan ko na', ne: 'हुन्छ, मैले बुझें' }
        ],
        [
            { ja: '📞 電話', vi: 'Điện thoại', id: 'Telepon', th: 'โทรศัพท์', ph: 'Telepono', ne: 'फोन' },
            { ja: '🖊️ ボールペン', vi: 'Bút bi', id: 'Pulpen', th: 'ปากกาลูกลื่น', ph: 'Ballpen', ne: 'बलपेन' },
            { ja: '📑 メモ帳', vi: 'Sổ ghi chép', id: 'Buku catatan', th: 'สมุดบันทึก', ph: 'Notepad', ne: 'नोटप्याड' }
        ],
        {
            q: {
                ja: 'もう一度お願いします',
                vi: 'Làm ơn nói lại một lần nữa',
                id: 'Tolong sekali lagi',
                th: 'ขออีกรอบครับ/ค่ะ',
                ph: 'Pakiulit po',
                ne: 'कृपया फेरि एक पटक'
            },
            a: 'もう一度お願いします'
        }
    ),
    makeDay(
        'day4',
        '基本・安全',
        'Day4：聞き間違い①（変える／帰る）',
        '似ている言葉に注意。文脈で決めるか確認する。',
        {
            vi: 'Chú ý các từ giống nhau. Xác nhận bằng cách phán đoán ngữ cảnh.',
            id: 'Waspadai kata-kata yang mirip. Putuskan berdasarkan konteks atau konfirmasi.',
            th: 'ระวังคำที่คล้ายกัน ตัดสินใจตามบริบทหรือยืนยันให้แน่ใจ',
            ph: 'Mag-ingat sa mga salitang magkatunog. Husgahan ayon sa konteksto o kumpirmahin.',
            ne: 'उस्तै सुनिने शब्दहरूमा ध्यान दिनुहोस्। सन्दर्भ अनुसार बुझ्नुहोस् वा सोध्नुहोस्।'
        },
        [
            { ja: '予定を変えます', vi: 'Thay đổi dự định', id: 'Mengubah jadwal', th: 'เปลี่ยนกำหนดการ', ph: 'Baguhin ang iskedyul', ne: 'योजना बदल्छु' },
            { ja: 'もう帰ります', vi: 'Đã về rồi (xong việc) / Sẽ về bây giờ', id: 'Sudah mau pulang', th: 'จะกลับแล้ว', ph: 'Uuwi na', ne: 'अब घर जान्छु' },
            { ja: '場所を変えてください', vi: 'Hãy thay đổi địa điểm', id: 'Tolong ubah tempatnya', th: 'กรุณาเปลี่ยนสถานที่', ph: 'Pakibago ang lugar', ne: 'ठाउँ बदल्नुहोस्' },
            { ja: '先に帰ってください', vi: 'Hãy về trước đi', id: 'Silakan pulang duluan', th: 'กรุณากลับไปก่อน', ph: 'Mauna na kayong umuwi', ne: 'तपाईं पहिले जानुहोस्' },
            { ja: 'やり方を変えましょう', vi: 'Hãy thay đổi cách làm', id: 'Mari ubah caranya', th: 'มาเปลี่ยนวิธีทำกันเถอะ', ph: 'Baguhin natin ang paraan', ne: 'तरिका बदलौं' }
        ],
        [
            { ja: '🗓️ 予定表', vi: 'Lịch trình', id: 'Jadwal', th: 'ตารางเวลา', ph: 'Iskedyul', ne: 'कार्यतालिका' },
            { ja: '⏰ 時間', vi: 'Thời gian', id: 'Waktu', th: 'เวลา', ph: 'Oras', ne: 'समय' },
            { ja: '🏠 休憩所', vi: 'Nơi nghỉ ngơi', id: 'Tempat istirahat', th: 'ที่พักผ่อน', ph: 'Pahingahan', ne: 'आराम गर्ने ठाउँ' }
        ],
        {
            type: 'binary',
            choiceCount: 2,
            mode: 'pair',
            options: ['予定を変えます', 'もう帰ります'],
            q: {
                ja: '予定を変えます',
                vi: 'Thay đổi dự định',
                id: 'Mengubah jadwal',
                th: 'เปลี่ยนกำหนดการ',
                ph: 'Baguhin ang iskedyul',
                ne: 'योजना बदल्छु'
            },
            a: '予定を変えます'
        }
    ),
    makeDay(
        'day5',
        '基本・安全',
        'Day5：聞き間違い②（橋／端）',
        'アクセントや助詞に注意。場所を指差して確認。',
        {
            vi: 'Chú ý trọng âm và trợ từ. Xác nhận bằng cách chỉ tay vào địa điểm.',
            id: 'Perhatikan aksen dan partikel. Konfirmasi dengan menunjuk tempat.',
            th: 'ระวังการเน้นเสียงและคำช่วย ยืนยันโดยการชี้ไปที่สถานที่',
            ph: 'Mag-ingat sa accent at particle. Kumpirmahin sa pamamagitan ng pagturo sa lugar.',
            ne: 'उच्चारण र व्याकरणमा ध्यान दिनुहोस्। ठाउँलाई औंल्याएर कुरा बुझ्नुहोस्।'
        },
        [
            { ja: 'はしに寄せてください', vi: 'Hãy dồn vào sát mép', id: 'Tolong tepikan ke pinggir', th: 'กรุณาชิดขอบ', ph: 'Paki-usog sa gilid', ne: 'छेउमा सार्नुहोस्' },
            { ja: '橋を渡ります', vi: 'Đi băng qua cầu', id: 'Menyeberangi jembatan', th: 'ข้ามสะพาน', ph: 'Tawid sa tulay', ne: 'पुल तर्छौं' },
            { ja: '道の端を歩きます', vi: 'Đi bộ sát mép đường', id: 'Berjalan di pinggir jalan', th: 'เดินริมถนน', ph: 'Maglakad sa gilid ng daan', ne: 'बाटोको छेउबाट हिँड्छौं' },
            { ja: 'そこは端っこです', vi: 'Chỗ đó là ở phía mép', id: 'Di sana adalah bagian pinggir', th: 'ตรงนั้นคือริมสุด', ph: 'Diyan sa may gilid', ne: 'त्यो छेउ हो' },
            { ja: '橋の下を通ります', vi: 'Đi thông qua dưới gầm cầu', id: 'Lewat di bawah jembatan', th: 'ลอดใต้สะพาน', ph: 'Dadaan sa ilalim ng tulay', ne: 'पुलको मुनिबाट जान्छौं' }
        ],
        [
            { ja: '🛣️ 道', vi: 'Đường', id: 'Jalan', th: 'ถนน', ph: 'Daan', ne: 'बाटो' },
            { ja: '🏗️ 足場', vi: 'Giàn giáo', id: 'Perancah / Scaffolding', th: 'นั่งร้าน', ph: 'Scaffolding', ne: 'असिबा (खत)' },
            { ja: '🚪 入口', vi: 'Lối vào', id: 'Pintu masuk', th: 'ทางเข้า', ph: 'Entrance', ne: 'ढोका (प्रवेशद्वार)' }
        ],
        {
            type: 'binary',
            choiceCount: 2,
            mode: 'pair',
            options: ['はし（端）', '橋'],
            q: {
                ja: 'はし（端）',
                vi: 'Phía mép (con đường)',
                id: 'Pinggir jalan',
                th: 'ริมถนน',
                ph: 'Gilid ng daan',
                ne: 'बाटोको छेउ'
            },
            a: 'はし（端）'
        }
    ),
    makeDay(
        'day6',
        '基本・安全',
        'Day6：危険指示（止まれ・入るな）',
        '強い言葉は命を守るため。すぐに行動する。',
        {
            vi: 'Những từ ngữ mạnh mẽ là để bảo vệ tính mạng. Hãy hành động ngay lập tức.',
            id: 'Kata-kata tegas untuk melindungi nyawa. Segera bertindak.',
            th: 'คำพูดที่รุนแรงเพื่อปกป้องชีวิต ลงมือทำทันที',
            ph: 'Ang matitigas na salita ay para protektahan ang buhay. Kumilos agad.',
            ne: 'बलिया शब्दहरू जीवन बचाउनका लागि हुन्। तुरुन्तै कार्य गर्नुहोस्।'
        },
        [
            { ja: '止まって！', vi: 'Dừng lại!', id: 'Berhenti!', th: 'หยุด!', ph: 'Hinto!', ne: 'रोक्नुहोस्!' },
            { ja: '入らないで！', vi: 'Đừng vào!', id: 'Jangan masuk!', th: 'อย่าเข้า!', ph: 'Huwag pumasok!', ne: 'नजानुहोस्!' },
            { ja: '危ない！', vi: 'Nguy hiểm!', id: 'Bahaya!', th: 'อันตราย!', ph: 'Panganib!', ne: 'खतरा!' },
            { ja: '逃げて！', vi: 'Chạy đi!', id: 'Lari!', th: 'หนีไป!', ph: 'Takbo!', ne: 'भाग्नुहोस्!' },
            { ja: '触らないで！', vi: 'Đừng chạm vào!', id: 'Jangan sentuh!', th: 'อย่าสัมผัส!', ph: 'Huwag hawakan!', ne: 'नुनुहोस्!' }
        ],
        [
            { ja: '🛑 停止ボタン', vi: 'Nút dừng', id: 'Tombol berhenti', th: 'ปุ่มหยุด', ph: 'Stop button', ne: 'रोक्ने बटन' },
            { ja: '⚠️ 危険箇所', vi: 'Nơi nguy hiểm', id: 'Area berbahaya', th: 'จุดอันตราย', ph: 'Lugar na mapanganib', ne: 'खतरनाक ठाउँ' },
            { ja: '危ない', vi: 'Nguy hiểm', id: 'Bahaya', th: 'อันตราย', ph: 'Panganib', ne: 'खतरा' }
        ],
        {
            q: {
                ja: '入らないで！',
                vi: 'Đừng vào!',
                id: 'Jangan masuk!',
                th: 'อย่าเข้า!',
                ph: 'Huwag pumasok!',
                ne: 'नजानुहोस्!'
            },
            a: '入らないで！'
        }
    ),
    makeDay(
        'day7',
        '基本・安全',
        'Day7：報告（間違えました・確認します）',
        'ミスはすぐに報告。隠すのが一番の問題。',
        {
            vi: 'Báo cáo lỗi ngay lập tức. Che giấu là vấn đề lớn nhất.',
            id: 'Segera lapor jika ada kesalahan. Menyembunyikannya adalah masalah terbesar.',
            th: 'รายงานข้อผิดพลาดทันที การปกปิดเป็นปัญหาใหญ่ที่สุด',
            ph: 'Iulat agad ang pagkakamali. Ang pagtatago nito ang pinakamalaking problema.',
            ne: 'गल्तीहरू तुरुन्तै रिपोर्ट गर्नुहोस्। लुकाउनु सबैभन्दा ठूलो समस्या हो।'
        },
        [
            { ja: '間違えました', vi: 'Tôi đã làm sai', id: 'Saya melakukan kesalahan', th: 'ฉันทำผิด', ph: 'Nagkamali po ako', ne: 'मैले गल्ती गरें' },
            { ja: '確認します', vi: 'Tôi sẽ xác nhận', id: 'Saya akan konfirmasi', th: 'จะตรวจสอบให้', ph: 'Kukumpirmahin ko po', ne: 'म जाँच गर्छु' },
            { ja: '終わりました', vi: 'Đã xong rồi', id: 'Sudah selesai', th: 'เสร็จแล้ว', ph: 'Tapos na po', ne: 'काम सकियो' },
            { ja: 'できました', vi: 'Đã làm được rồi', id: 'Sudah bisa', th: 'ทำได้แล้ว', ph: 'Nagawa ko na po', ne: 'भयो / भ्याएँ' },
            { ja: 'もう一度やります', vi: 'Tôi sẽ làm lại một lần nữa', id: 'Saya akan lakukan sekali lagi', th: 'จะทำอีกรอบ', ph: 'Gagawin ko pong muli', ne: 'म फेरि एक पटक गर्छु' }
        ],
        [
            { ja: '頭', vi: 'Đầu', id: 'Kepala', th: 'หัว', ph: 'Ulo', ne: 'टाउको' },
            { ja: 'お腹', vi: 'Bụng', id: 'Perut', th: 'ท้อง', ph: 'Tiyan', ne: 'पेट' },
            { ja: '熱', vi: 'Sốt', id: 'Demam', th: 'ไข้', ph: 'Lagnat', ne: 'ज्वरो' },
            { ja: '怪我', vi: 'Vết thương', id: 'Luka/Cedera', th: 'บาดแผล', ph: 'Sugat', ne: 'चोटपटक' },
            { ja: '🩹 絆創膏', vi: 'Băng cá nhân', id: 'Plester', th: 'พลาสเตอร์ยา', ph: 'Band-aid', ne: 'ब्यान्डेज' },
            { ja: '💊 薬', vi: 'Thuốc', id: 'Obat', th: 'ยา', ph: 'Gamot', ne: 'औषधि' }
        ],
        {
            q: {
                ja: '間違えました',
                vi: 'Tôi đã làm sai',
                id: 'Saya melakukan kesalahan',
                th: 'ฉันทำผิด',
                ph: 'Nagkamali po ako',
                ne: 'मैले गल्ती गरें'
            },
            a: '間違えました'
        }
    ),
    makeDay(
        'day8',
        '基本・安全',
        'Day8：体調・緊急（気分が悪い）',
        '無理をしない。異変を感じたらすぐに伝える。',
        {
            vi: 'Không làm quá sức. If cảm thấy bất thường, hãy báo ngay.',
            id: 'Jangan memaksakan diri. Segera beri tahu jika merasa tidak enak badan.',
            th: 'อย่าหักโหม หากรู้สึกผิดปกติให้แจ้งทันที',
            ph: 'Huwag pilitin. Kapag may naramdamang hindi maganda, sabihin agad.',
            ne: 'जबरजस्ती नगर्नुहोस्। यदि अस्वस्थ महसुस गर्नुभयो भने तुरुन्तै भन्नुहोस्।'
        },
        [
            { ja: '気分が悪いです', vi: 'Tôi cảm thấy không được khỏe', id: 'Saya merasa tidak enak badan', th: 'ฉันรู้สึกไม่สบาย', ph: 'Masama po ang pakiramdam ko', ne: 'मलाई असजिलो महसुस भइरहेको छ' },
            { ja: '頭が痛いです', vi: 'Tôi bị đau đầu', id: 'Kepala saya sakit', th: 'ฉันปวดหัว', ph: 'Masakit po ang ulo ko', ne: 'मेरो टाउको दुखिरहेको छ' },
            { ja: '怪我をしました', vi: 'Tôi đã bị thương', id: 'Saya cedera', th: 'ฉันได้รับบาดเจ็บ', ph: 'Nasugatan po ako', ne: 'मलाई चोट लाग्यो' },
            { ja: '休みます', vi: 'Tôi xin phép nghỉ', id: 'Saya mau istirahat', th: 'ฉันขอพัก', ph: 'Magpapahinga po ako', ne: 'म आराम गर्छु' },
            { ja: '病院に行きます', vi: 'Tôi đi đến bệnh viện', id: 'Saya pergi ke rumah sakit', th: 'ฉันจะไปโรงพยาบาล', ph: 'Pupunta po ako sa ospital', ne: 'म अस्पताल जान्छु' }
        ],
        [
            { ja: '整理整頓', vi: 'Sắp xếp gọn gàng', id: 'Ringkas & Rapi', th: 'สะสางและสะดวก', ph: 'Suriin at Sinupin', ne: 'सफा र व्यवस्थित' },
            { ja: '🧴 消毒液', vi: 'Dung dịch sát khuẩn', id: 'Disinfektan', th: 'น้ำยาฆ่าเชื้อ', ph: 'Disinfectant', ne: 'स्यानिटाइजर' },
            { ja: '🌡️ 体温計', vi: 'Nhiệt kế', id: 'Termometer', th: 'ปรอทวัดไข้', ph: 'Thermometer', ne: 'थर्मामिटर' }
        ],
        {
            q: {
                ja: '気分が悪いです',
                vi: 'Tôi cảm thấy không được khỏe',
                id: 'Saya merasa tidak enak badan',
                th: 'ฉันรู้สึกไม่สบาย',
                ph: 'Masama po ang pakiramdam ko',
                ne: 'मलाई असजिलो महसुस भइरहेको छ'
            },
            a: '気分が悪いです'
        }
    ),
    makeDay(
        'day9',
        '基本・安全',
        'Day9：介護基本語彙（食事・トイレ・痛い）',
        '現場でのコミュニケーションの基本。',
        {
            vi: 'Cơ bản về giao tiếp tại hiện trường.',
            id: 'Dasar komunikasi di lapangan.',
            th: 'พื้นฐานการสื่อสารในไซต์งาน',
            ph: 'Basic communication sa site.',
            ne: 'कार्यस्थलमा सञ्चारको आधारभूत कुराहरू।'
        },
        [
            { ja: 'ご飯を食べます', vi: 'Ăn cơm', id: 'Makan nasi', th: 'กินข้าว', ph: 'Kakain ng kanin', ne: 'खाना खान्छु' },
            { ja: 'トイレに行きますか？', vi: 'Bạn có đi vệ sinh không?', id: 'Mau ke toilet?', th: 'ไปเข้าห้องน้ำไหม?', ph: 'Pupunta ka ba sa banyo?', ne: 'शौचालय जान्छु' },
            { ja: 'どこが痛いですか？', vi: 'Bạn bị đau ở đâu?', id: 'Di mana yang sakit?', th: 'เจ็บตรงไหน?', ph: 'Saan po ang masakit?', ne: 'यहाँ दुख्छ' },
            { ja: '座ってください', vi: 'Hãy ngồi xuống', id: 'Silakan duduk', th: 'กรุณานั่งลง', ph: 'Pakiuupo po', ne: 'बस्नुहोस्' },
            { ja: 'お手伝いします', vi: 'Tôi sẽ giúp bạn', id: 'Saya bantu', th: 'ฉันจะช่วยคุณเอง', ph: 'Tutulungan ko po kayo', ne: 'म मद्दत गर्छु' }
        ],
        [
            { ja: '🧼 石鹸', vi: 'Xà phòng', id: 'Sabun', th: 'สบู่', ph: 'Sabon', ne: 'साबुन' },
            { ja: '🧻 トイレットペーパー', vi: 'Giấy vệ sinh', id: 'Tisu toilet', th: 'ทิชชู่', ph: 'Toilet paper', ne: 'शौचालय पेपर' },
            { ja: '🥤 水', vi: 'Nước', id: 'Air', th: 'น้ำ', ph: 'Tubig', ne: 'पानी' }
        ],
        {
            q: {
                ja: 'どこが痛いですか？',
                vi: 'Bạn bị đau ở đâu?',
                id: 'Di mana yang sakit?',
                th: 'เจ็บตรงไหน?',
                ph: 'Saan po ang masakit?',
                ne: 'यहाँ दुख्छ'
            },
            a: 'どこが痛いですか？'
        }
    ),
    makeDay(
        'day10',
        '基本・安全',
        "Day10：復習まとめクイズ",
        "10日間のまとめ。大切な言葉を再確認。",
        {
            vi: 'Tổng hợp 10 ngày. Xác nhận lại các từ ngữ quan trọng.',
            id: 'Rangkuman 10 hari. Konfirmasi ulang kata-kata penting.',
            th: 'สรุป 10 วัน ยืนยันคำศัพท์ที่สำคัญอีกครั้ง',
            ph: 'Summary ng 10 araw. Re-kumpirmahin ang mga mahalagang salita.',
            ne: 'सबै १० दिनको सारांश। कार्यस्थलका शब्दहरू फेरि एक पटक जाँच गर्नुहोस्।'
        },
        [
            { ja: '安全第一', vi: 'An toàn là trên hết', id: 'Utamakan keselamatan', th: 'ปลอดภัยไว้ก่อน', ph: 'Safety first', ne: 'सुरक्षा पहिलो' },
            { ja: 'お疲れ様でした', vi: 'Bạn đã vất vả rồi (Chào sau khi xong việc)', id: 'Terima kasih atas kerja kerasnya', th: 'ขอบคุณที่เหนื่อยยาก', ph: 'Salamat sa iyong pagpupursige', ne: 'आजको लागि धन्यवाद' },
            { ja: 'よろしくお願いします', vi: 'Rất mong sự giúp đỡ của bạn', id: 'Mohon bantuannya', th: 'ขอฝากเนื้อฝากตัวด้วย', ph: 'Inaasahan ko po ang inyong tulong', ne: 'मेरो सहयोगको अपेक्षा गर्दछु' },
            { ja: 'ありがとうございます', vi: 'Xin cảm ơn', id: 'Terima kasih', th: 'ขอบคุณ', ph: 'Salamat po', ne: 'धन्यवाद' },
            { ja: '失礼します', vi: 'Xin phép (Khi vào/ra)', id: 'Permisi', th: 'ขออนุญาต', ph: 'Excuse me', ne: 'माफ गर्नुहोस्' }
        ],
        [
            { ja: '📋 チェックリスト', vi: 'Bảng kiểm tra', id: 'Daftar periksa', th: 'รายการตรวจสอบ', ph: 'Checklist', ne: 'चेकलिस्ट' },
            { ja: '🧤 軍手', vi: 'Găng tay vải', id: 'Sarung tangan kain', th: 'ถุงมือผ้า', ph: 'Cotton gloves', ne: 'सुती पन्जा' },
            { ja: '🧼 洗剤', vi: 'Chất tẩy rửa', id: 'Deterjen', th: 'น้ำยาทำความสะอาด', ph: 'Detergent', ne: 'चापाकल सफा गर्ने' }
        ],
        {
            q: {
                ja: '安全第一',
                vi: 'An toàn là trên hết',
                id: 'Utamakan keselamatan',
                th: 'ปลอดภัยไว้ก่อน',
                ph: 'Safety first',
                ne: 'सुरक्षा पहिलो'
            },
            a: '安全第一'
        }
    ),
    makeDay(
        "day11",
        "指示・移動",
        "Day11：指示語（これ・それ・あれ）",
        "指示語だけだと分からない時がある。分からなければ必ず『どれですか？』と聞き返す。",
        {
            vi: 'Khi chỉ nói “cái này/cái đó”, nếu không rõ hãy hỏi lại “cái nào?”.',
            id: 'Terkadang sulit dimengerti jika hanya menggunakan kata tunjuk. Jika tidak mengerti, pastikan bertanya "Yang mana?"',
            th: 'บางครั้งการใช้แค่คำสรรพนามชี้เฉพาะอาจไม่เข้าใจ หากไม่ทราบต้องถามซ้ำเสมอว่า "อันไหนคะ/ครับ"',
            ph: 'Minsan hindi malinaw kung puro demonstratives lang ang gamit. Kung hindi sigurado, laging magtanong ng "alin po?"'
        },
        [
            { ja: "これを持ってください", vi: "Xin hãy cầm cái này", id: 'Tolong pegang ini', th: 'กรุณาถือสิ่งนี้', ph: 'Pakihawak nito', ne: 'यो समात्नुहोस्' },
            { ja: "それじゃないです", vi: "Không phảI cái đó", id: 'Bukan yang itu', th: 'ไม่ใช่สิ่งนั้น', ph: 'Hindi iyan', ne: 'त्यो होइन' },
            { ja: "あれを取ってください", vi: "Xin hãy lấy cái kia", id: 'Tolong ambilkan yang itu', th: 'กรุณาหยิบสิ่งนั้น', ph: 'Pakหยิบสิ่งนั้น', ne: 'त्यो (परको) दिनुहोस्' },
            { ja: "どれですか？", vi: "Cái nào vậy?", id: 'Yang mana?', th: 'อันไหนคะ/ครับ?', ph: 'Alin po?', ne: 'कुन हो?' },
            { ja: "これでいいですか？", vi: "Như thế này được không?", id: 'Apakah begini sudah benar?', th: 'แบบนี้โอเคไหมคะ/ครับ?', ph: 'Ganito po ba ang tama?', ne: 'यो ठीक छ?' }
        ],
        [
            { ja: '🛒 台車', vi: 'Xe đẩy', id: 'Troli', th: 'รถเข็น', ph: 'Pushcart', ne: 'ट्राली' },
            { ja: '🪜 脚立', vi: 'Thang', id: 'Tangga lipat', th: 'บันไดพับ', ph: 'Step ladder', ne: 'भर्‍याङ (फोल्डिङ)' },
            { ja: '📦 段ボール', vi: 'Thùng carton', id: 'Kardus', th: 'กล่องกระดาษ', ph: 'Cardboard box', ne: 'बाकस (कार्डबोर्ड)' }
        ],
        {
            q: {
                ja: 'どれですか？',
                vi: 'Cái nào vậy?',
                id: 'Yang mana?',
                th: 'อันไหนคะ/ครับ?',
                ph: 'Alin po?',
                ne: 'कुन हो?'
            },
            a: 'どれですか？'
        }
    ),
    makeDay(
        "day12",
        "指示・移動",
        "Day12：省略指示（こっち・そっち・あっち）",
        "現場では『こっち』『そっち』のように省略して指示される。迷ったら必ず確認する。",
        {
            vi: 'Ở công trường, người ta hay nói ngắn như “bên này/bên đó”. Nếu không chắc, hãy hỏi lại.',
            id: 'Di lapangan, sering digunakan singkatan seperti "Sini/Situ". Jika bingung, pastikan untuk bertanya.',
            th: 'ในไซต์งาน มักจะสั่งแบบย่อๆ เช่น "ฝั่งนี้" "ฝั่งนั้น" หากไม่แน่ใจต้องยืนยันเสมอ',
            ph: 'Sa site, madalas gamitin ang mga pinaikling salita tulad ng "dito/diyan". Kung nalilito, siguraduhing magtanong.',
            ne: 'कार्यस्थलमा "यता", "उता" जस्ता छोटा शब्दहरू प्रयोग गरिन्छ। झुक्किएमा सधैं सोध्नुहोस्।'
        },
        [
            { ja: "こっちです", vi: "Bên này", id: 'Ke sini', th: 'ฝั่งนี้', ph: 'Dito po', ne: 'यता हो' },
            { ja: "そっちじゃないです", vi: "Không phải bên đó", id: 'Bukan ke situ', th: 'ไม่ใช่ฝั่งนั้น', ph: 'Hindi diyan po', ne: 'त्यता होइन' },
            { ja: "あっちに置いてください", vi: "Hãy đặt ở đằng kia", id: 'Tolong letakkan di sebelah sana', th: 'กรุณาวางไว้ที่โน่น', ph: 'Pakilagay po roon', ne: 'उता राख्नुहोस्' },
            { ja: "ここですか？", vi: "Ở đây phải không?", id: 'Di sini?', th: 'ที่นี่ใช่ไหม?', ph: 'Dito po ba?', ne: 'यहाँ हो?' },
            { ja: "右に回してください", vi: "Hãy xoay sang right", id: 'Tolong putar ke kanan', th: 'กรุณาหมุนไปทางขวา', ph: 'Pakipaikot sa kanan', ne: 'दायाँ तिर घुमाउनुहोस्' }
        ],
        [
            { ja: '⬅️ 左', vi: 'Bên trái', id: 'Kiri', th: 'ซ้าย', ph: 'Kaliwa', ne: 'बायाँ' },
            { ja: '➡️ 右', vi: 'Bên phải', id: 'Kanan', th: 'ขวา', ph: 'Kanan', ne: 'दायाँ' },
            { ja: '⬆️ 上', vi: 'Phía trên', id: 'Atas', th: 'บน', ph: 'Itaas', ne: 'माथि' },
            { ja: '⬇️ 下', vi: 'Phía dưới', id: 'Bawah', th: 'ล่าง', ph: 'Ibaba', ne: 'तल' }
        ],
        {
            q: {
                ja: 'そっちじゃないです',
                vi: 'Không phải bên đó',
                id: 'Bukan ke situ',
                th: 'ไม่ใช่ฝั่งนั้น',
                ph: 'Hindi diyan po',
                ne: 'त्यता होइन'
            },
            a: 'そっちじゃないです'
        }
    ),
    makeDay(
        "day13",
        "指示・移動",
        "Day13：禁止・注意（触るな／入るな）",
        "危険な時は短い言葉で止める。『触らないで』『入らないで』を優先して使う。",
        {
            vi: 'Khi nguy hiểm, hãy dùng câu ngắn để dừng lại. Ưu tiên “đừng chạm” và “đừng vào”.',
            id: 'Gunakan kata singkat saat bahaya. Prioritaskan kata "Jangan sentuh" dan "Jangan masuk".',
            th: 'เมื่อมีอันตราย ให้ใช้คำสั้นๆ เพื่อหยุด เน้นใช้ "อย่าสัมผัส" "อย่าเข้า"',
            ph: 'Gumamit ng maiikling salita kapag mapanganib. Unahin ang "huwag hawakan" at "huwag pumasok".'
        },
        [
            { ja: "触らないでください", vi: "Đừng chạm vào", id: 'Tolong jangan disentuh', th: 'กรุณาอย่าสัมผัส', ph: 'Huwag pong hawakan', ne: 'कृपया नुनुहोस्' },
            { ja: "そこに入らないでください", vi: "Đừng vào đó", id: 'Tolong jangan masuk ke sana', th: 'กรุณาอย่าเข้าไปตรงนั้น', ph: 'Huwag pong pumasok diyan', ne: 'कृपया त्यहाँ नजानुहोस्' },
            { ja: "近づかないでください", vi: "Đừng lại gần", id: 'Tolong jangan mendekat', th: 'กรุณาอย่าเข้าใกล้', ph: 'Huwag pong lumapit', ne: 'कृपया नजिक नआउनुहोस्' },
            { ja: "危ないです", vi: "Nguy hiểm", id: 'Berbahaya', th: 'อันตราย', ph: 'Mapanganib po', ne: 'खतरा छ' },
            { ja: "止まってください", vi: "Dừng lại", id: 'Tolong berhenti', th: 'กรุณาหยุด', ph: 'Paki-hinto po', ne: 'कृपया रोक्नुहोस्' }
        ],
        [
            { ja: '🔌 コンセント', vi: 'Ổ cắm điện', id: 'Stopkontak', th: 'เต้ารับ', ph: 'Outlet', ne: 'सकेट' },
            { ja: '💡 電球', vi: 'Bóng đèn', id: 'Bohlam', th: 'หลอดไฟ', ph: 'Bulb', ne: 'विद्युतीय बल्ब' },
            { ja: '⚙️ 機械', vi: 'Máy móc', id: 'Mesin', th: 'เครื่องจักร', ph: 'Machine', ne: 'मेसिन' }
        ],
        {
            q: {
                ja: '触らないでください',
                vi: 'Đừng chạm vào',
                id: 'Tolong jangan disentuh',
                th: 'กรุณาอย่าสัมผัส',
                ph: 'Huwag pong hawakan',
                ne: 'कृपया नुनुहोस्'
            },
            a: '触らないでください'
        }
    ),
    makeDay(
        "day14",
        "指示・移動",
        "Day14：同音異義語（開ける／空ける）",
        "同じ音でも意味が違う言葉がある。分からない時は『どっちですか？』と聞き返す。",
        {
            vi: 'Có những từ phát âm giống nhau nhưng nghĩa khác. Nếu không rõ, hãy hỏi lại “ý nào?”.',
            id: 'Ada kata-kata yang bunyinya sama tapi artinya berbeda. Jika tidak jelas, tanyakan "Yang mana?".',
            th: 'มีคำที่ออกเสียงเหมือนกันแต่ความหมายต่างกัน หากไม่ชัดเจนให้ถามซ้ำว่า "อันไหน?"',
            ph: 'May mga salitang pareho ang tunog pero magkaiba ang kahulugan. Kung hindi milinaw, magtanong ng "alin po?".',
            ne: 'एकै उच्चारण भए पनि फरक अर्थ हुने शब्दहरू हुन्छन्। नबुझेमा "कुन चाहिँ हो?" भनेर सोध्नुहोस्।'
        },
        [
            { ja: "ドアを開けてください", vi: "Hãy mở cửa", id: 'Tolong buka pintunya', th: 'กรุณาเปิดประตู', ph: 'Pakibukas ang pinto', ne: 'ढोका खोल्नुहोस्' },
            { ja: "ここを空けてください", vi: "Hãy để trống chỗ này", id: 'Tolong kosongkan tempat ini', th: 'กรุณาเว้นที่ตรงนี้ไว้', ph: 'Pakibakante ang lugar na ito', ne: 'यो ठाउँ खाली गर्नुहोस्' },
            { ja: "『開ける』ですか？『空ける』ですか？", vi: "Là “mở” hay “để trống”?", id: '"Membuka" atau "Mengosongkan"?', th: '"เปิด" หรือ "เว้นที่"?', ph: '"Buksan" o "Bakantehin"?', ne: '"खोल्ने" हो कि "खाली गर्ने"?' },
            { ja: "どっちですか？", vi: "Cái nào vậy?", id: 'Yang mana?', th: 'อันไหน?', ph: 'Alin po?', ne: 'कुन चाहिँ हो?' },
            { ja: "もう一度お願いします", vi: "Làm ơn nói lại lần nữa", id: 'Tolong ulangi sekali lagi', th: 'ขออีกรอบครับ/ค่ะ', ph: 'Pakiulit po', ne: 'कृपया फेरि एक पटक' }
        ],
        [
            { ja: '🔑 鍵', vi: 'Chìa khóa', id: 'Kunci', th: 'กุญแจ', ph: 'Susi', ne: 'साँचो' },
            { ja: '🚪 ドア', vi: 'Cửa', id: 'Pintu', th: 'ประตู', ph: 'Pinto', ne: 'ढोका' },
            { ja: '🪟 窓', vi: 'Cửa sổ', id: 'Jendela', th: 'หน้าต่าง', ph: 'Bintana', ne: 'झ्याल' }
        ],
        {
            q: {
                ja: '空ける',
                vi: 'Để trống / Tạo chỗ trống',
                id: 'Mengosongkan tempat',
                th: 'เว้นที่ว่าง',
                ph: 'Bakantehin',
                ne: 'खाली गर्ने'
            },
            a: '空ける'
        }
    ),
    makeDay(
        "day15",
        "指示・移動",
        "Day15：専門用語（道具・安全具）",
        "現場では道具の名前を覚えると作業が速くなる。分からない時は指さして確認する。",
        {
            vi: 'Nếu nhớ tên dụng cụ, làm việc sẽ nhanh hơn. Nếu không rõ, hãy chỉ tay và xác nhận.',
            id: 'Mengingat nama peralatan membuat pekerjaan lebih cepat. Jika tidak tahu, tunjuk dan konfirmasi.',
            th: 'หากจำชื่ออุปกรณ์ได้ จะทำงานได้เร็วขึ้น หากไม่ทราบให้ชี้ไปที่สิ่งนั้นและยืนยัน',
            ph: 'Mas mapapabilis ang trabaho kung kabisado ang pangalan ng mga kagamitan. Kung hindi sigurado, ituro ito at kumpirmahin.',
            ne: 'उपकरणहरूको नाम सम्झनाले काम छिटो हुन्छ। नबुझेमा औंल्याएर सोध्नुहोस्।'
        },
        [
            { ja: "📦 パレット", vi: "Pallet (kệ gỗ)", id: 'Palet', th: 'พาเลท', ph: 'Pallet', ne: 'प्यालेट' },
            { ja: "🛒 台車", vi: "Xe đẩy", id: 'Troli', th: 'รถเข็น', ph: 'Pushcart', ne: 'ट्राली' },
            { ja: "🪖 ヘルメット", vi: "Mũ bảo hộ", id: 'Helm', th: 'หมวกนิรภัย', ph: 'Helmet', ne: 'हेल्मेट' },
            { ja: "🧤 手袋", vi: "Găng tay", id: 'Sarung tangan', th: 'ถุงมือ', ph: 'Gloves', ne: 'पन्जा' },
            { ja: "🔧 工具", vi: "Dụng cụ", id: 'Peralatan', th: 'เครื่องมือ', ph: 'Tools', ne: 'औजारहरू' }
        ],
        [
            { ja: '🔨 ハンマー', vi: 'Búa', id: 'Palu', th: 'ค้อน', ph: 'Martilyo', ne: 'हथौडा' },
            { ja: '🪛 ドライバー', vi: 'Tua vít', id: 'Obeng', th: 'ไขควง', ph: 'Screwdriver', ne: 'पेचकस' },
            { ja: '🔧 レンチ', vi: 'Cờ lê', id: 'Kunci inggris', th: 'ประแจ', ph: 'Wrench', ne: 'रेन्च' }
        ],
        {
            q: {
                ja: '🛒 台車',
                vi: 'Xe đẩy',
                id: 'Troli',
                th: 'รถเข็น',
                ph: 'Pushcart',
                ne: 'ट्राली'
            },
            a: '🛒 台車'
        }
    ),
    makeDay(
        "day16",
        "指示・移動",
        "Day16：作業動詞①（付ける／外す）",
        "現場では『付ける』『外す』が頻出。分からない時は指さして確認する。",
        {
            vi: 'Ở hiện trường, “gắn/đeo” và “tháo” dùng rất nhiều. Nếu không rõ, hãy chỉ tay và xác nhận.',
            id: 'Di lapangan, "Memasang" dan "Melepas" sangat sering digunakan. Jika tidak tahu, tunjuk dan konfirmasi.',
            th: 'ในไซต์งาน คำว่า "ติดตั้ง" และ "ถอดออก" ถูกใช้บ่อยมาก หากไม่รู้ให้ชี้และยืนยัน',
            ph: 'Sa site, madalas gamitin ang "ikabit" at "tanggalin". Kung hindi sigurado, ituro ito at kumpirmahin.',
            ne: 'कार्यस्थलमा "जोड्ने" र "निकाल्ने" शब्दहरू धेरै प्रयोग गरिन्छ। नबुझेमा औंल्याएर सोध्नुहोस्।'
        },
        [
            { ja: "これを付けてください", vi: "Hãy gắn/đeo cái này", id: 'Tolong pasang ini', th: 'กรุณาติดสิ่งนี้', ph: 'Pakikabit nito', ne: 'यो जोड्नुहोस्' },
            { ja: "これを外してください", vi: "Hãy tháo cái này ra", id: 'Tolong lepas ini', th: 'กรุณาถอดสิ่งนี้ออก', ph: 'Pakitanggal nito', ne: 'यो निकाल्नुहोस्' },
            { ja: "ここに付けてください", vi: "Hãy gắn vào đây", id: 'Tolong pasang di sini', th: 'กรุณาติดไว้ตรงนี้', ph: 'Pakikabit dito', ne: 'यहाँ जोड्नुहोस्' },
            { ja: "ここから外してください", vi: "Hãy tháo ra khỏi đây", id: 'Tolong lepas dari sini', th: 'กรุณาถอดออกจากตรงนี้', ph: 'Pakitanggal mula rito', ne: 'यहाँबाट निकाल्नुहोस्' },
            { ja: "どこに付けますか？", vi: "Gắn ở đâu ạ?", id: 'Dipasang di mana?', th: 'ติดตั้งที่ไหนคะ/ครับ?', ph: 'Saan ikakabit?', ne: 'कहाँ जोड्ने हो?' }
        ],
        [
            { ja: '螺子 🔩 ネジ', vi: 'Ốc vít', id: 'Sekrup', th: 'สกรู', ph: 'Screw', ne: 'पेच' },
            { ja: '⛓️ チェーン', vi: 'Dây xích', id: 'Rantai', th: 'โซ่', ph: 'Chain', ne: 'चेन (साङ्लो)' },
            { ja: '🪢 ロープ', vi: 'Dây thừng', id: 'Tali', th: 'เชือก', ph: 'Rope', ne: 'डोरी' }
        ],
        {
            q: {
                ja: 'これを外してください',
                vi: 'Hãy tháo cái này ra',
                id: 'Tolong lepas ini',
                th: 'กรุณาถอดสิ่งนี้ออก',
                ph: 'Pakitanggal nito',
                ne: 'यो निकाल्नुहोस्'
            },
            a: 'これを外してください'
        }
    ),
    makeDay(
        "day17",
        "指示・移動",
        "Day17：作業動詞②（閉める／締める）",
        "『閉める（ドア）』と『締める（ネジ・ベルト）』は意味が違う。迷ったら聞き返す。",
        {
            vi: '“Đóng” (cửa) and “siết/chặt” (ốc/vai) khác nghĩa. Nếu không chắc, hãy hỏi lại.',
            id: '"Menutup" (pintu) dan "Mengencangkan" (sekrup/sabuk) berbeda artinya. Jika ragu, tanyakan kembali.',
            th: '"ปิด" (ประตู) และ "ขัน" (สกรู/เข็มขัด) มีความหมายต่างกัน หากสงสัยให้ถามกลับ',
            ph: 'Magkaiba ang kahulugan ng "isara" (pinto) at "higpitan" (screw/belt). Kung nag-aalinlangan, magtanong muli.'
        },
        [
            { ja: "ドアを閉めてください", vi: "Hãy đóng cửa", id: 'Tolong tutup pintunya', th: 'กรุณาปิดประตู', ph: 'Pakisara ang pinto', ne: 'ढोका बन्द गर्नुहोस्' },
            { ja: "ネジを締めてください", vi: "Hãy siết ốc lại", id: 'Tolong kencangkan sekrupnya', th: 'กรุณาขันสกรู', ph: 'Pakihigpitan ang screw', ne: 'पेच कस्नुहोस्' },
            { ja: "ベルトを締めてください", vi: "Hãy thắt/chặt dây lại", id: 'Tolong kencangkan ikat pinggangnya', th: 'กรุณาคาดเข็มขัด', ph: 'Pakihigpitan ang belt', ne: 'पेटी कस्नुहोस्' },
            { ja: "『閉める』ですか？『締める』ですか？", vi: "Là “đóng” hay “siết chặt”?", id: '"Menutup" atau "Mengencangkan"?', th: '"ปิด" หรือ "ขัน"?', ph: '"Isara" o "Higpitan"?', ne: '"बन्द गर्ने" हो कि "कस्ने"?' },
            { ja: "ねじを回してください", vi: "Hãy vặn ốc vít", id: 'Tolong putar sekrupnya', th: 'กรุณาหมุนสกรู', ph: 'Pakipaikot ang screw', ne: 'पेच घुमाउनुहोस्' }
        ],
        [
            { ja: '🧴 接着剤', vi: 'Keo dán', id: 'Lem', th: 'กาว', ph: 'Glue', ne: 'ग्लु (टाँस्ने टाँसो)' },
            { ja: '🩹 テープ', vi: 'Băng dính', id: 'Lakban/Selotip', th: 'เทป', ph: 'Tape', ne: 'टेप' },
            { ja: '✂️ カッター', vi: 'Dao rọc giấy', id: 'Cutter', th: 'คัตเตอร์', ph: 'Cutter', ne: 'कटर' }
        ],
        {
            q: {
                ja: '締める',
                vi: 'Siết chặt (ốc, vít)',
                id: 'Mengencangkan (sekrup)',
                th: 'ขัน (สกรู) ให้แน่น',
                ph: 'Higpitan (screw)',
                ne: 'पेच कस्नुहोस्'
            },
            a: '締める'
        }
    ),
    makeDay(
        "day18",
        "指示・移動",
        "Day18：数量・回数（もう一つ／あと2回）",
        "数量や回数はミスにつながる。分からない時は復唱して確認する。",
        {
            vi: 'Số lượng/lần làm dễ gây nhầm. Nếu không rõ, hãy nhắc lại để xác nhận.',
            id: 'Jumlah dan frekuensi dapat menyebabkan kesalahan. Jika tidak tahu, ulangi untuk mengonfirmasi.',
            th: 'จำนวนและครั้งอาจนำไปสู่ความผิดพลาด หากไม่ทราบให้ทวนซ้ำเพื่อยืนยัน',
            ph: 'Maaaring magdulot ng pagkakamali ang dami at dalas. Kung hindi sigurado, ulitin ito para kumpirmahin.',
            ne: 'संख्या वा कति पटक हो भन्ने कुराले गल्ती निम्त्याउन सक्छ। नबुझेमा दोहोर्याएर पुष्टि गर्नुहोस्।'
        },
        [
            { ja: "もう一つください", vi: "Cho tôi thêm một cái nữa", id: 'Minta satu lagi', th: 'ขออีกอันหนึ่ง', ph: 'Isa pa po', ne: 'थप एक दिनुहोस्' },
            { ja: "あと二つお願いします", vi: "Làm ơn thêm hai cái nữa", id: 'Tolong dua lagi', th: 'ขออีกสองอัน', ph: 'Dalawa pa po', ne: 'थप दुईवटा दिनुहोस्' },
            { ja: "もう一回お願いします", vi: "Làm ơn một lần nữa", id: 'Tolong satu kali lagi', th: 'ขออีกรอบหนึ่ง', ph: 'Isa pang beses po', ne: 'फेरि एक पटक' },
            { ja: "あと二回ですか？", vi: "Còn hai lần đúng không?", id: 'Dua kali lagi?', th: 'อีกสองครั้งใช่ไหม?', ph: 'Dalawa pang beses po ba?', ne: 'थप दुई पटक हो?' },
            { ja: "これで全部ですか？", vi: "Thế này là hết chưa?", id: 'Apakah ini sudah semuanya?', th: 'หมดนี่เลยใช่ไหม?', ph: 'Ito na po ba lahat?', ne: 'यो सबै हो?' }
        ],
        [
            { ja: '📏 メジャー', vi: 'Thước dây', id: 'Meteran', th: 'ตลับเมตร', ph: 'Tape measure', ne: 'मेजरिङ टेप (फिता)' },
            { ja: '📐 定規', vi: 'Thước kẻ', id: 'Penggaris', th: 'ไม้บรรทัด', ph: 'Ruler', ne: 'स्केल (रुलर)' },
            { ja: '✏️ 鉛筆', vi: 'Bút chì', id: 'Pensil', th: 'ดินสอ', ph: 'Pencil', ne: 'पेन्सिल' }
        ],
        {
            q: {
                ja: 'もう一回お願いします',
                vi: 'Làm ơn một lần nữa',
                id: 'Tolong satu kali lagi',
                th: 'ขออีกรอบหนึ่ง',
                ph: 'Isa pang beses po',
                ne: 'फेरि एक पटक'
            },
            a: 'もう一回お願いします'
        }
    ),
    makeDay(
        "day19",
        "指示・移動",
        "Day19：トラブル報告（壊れた／動かない）",
        "異常に気づいたらすぐ報告する。無理に続けない。",
        {
            vi: 'Nếu thấy bất thường hãy báo ngay. Đừng cố làm tiếp.',
            id: 'Segera lapor jika ada kelainan. Jangan dipaksa lanjut.',
            th: 'หากพบสิ่งผิดปกติให้รายงานทันที อย่าฝืนทำต่อ',
            ph: 'Iulat agad kapag may napansing mali. Huwag ipilit na ituloy.',
            ne: 'यदि कुनै गडबडी छ भने तुरुन्तै रिपोर्ट गर्नुहोस्। जबरजस्ती जारी नराख्नुहोस्।'
        },
        [
            { ja: "壊れました", vi: "Bị hỏng rồi", id: 'Rusak', th: 'พังแล้ว', ph: 'Nasira po', ne: 'बिग्रियो' },
            { ja: "動きません", vi: "Không hoạt động", id: 'Tidak mau jalan', th: 'ไม่ทำงาน', ph: 'Hindi gumagana', ne: 'चल्दैन' },
            { ja: "止めます", vi: "Tôi sẽ dừng lại", id: 'Saya hentikan', th: 'จะหยุดแล้ว', ph: 'Ititigil ko po', ne: 'रोक्छु' },
            { ja: "助けてください", vi: "Hãy giúp tôi", id: 'Tolong bantu saya', th: 'ช่วยด้วย', ph: 'Saklolo / Tulong po', ne: 'कृपया मद्दत गर्नुहोस्' },
            { ja: "確認します", vi: "Tôi sẽ kiểm tra", id: 'Saya akan cek', th: 'จะตรวจสอบให้', ph: 'I-check ko po', ne: 'पुष्टि गर्छु' }
        ],
        [
            { ja: '🔋 電池', vi: 'Pin', id: 'Baterai', th: 'ถ่าน', ph: 'Battery', ne: 'ब्याट्री' },
            { ja: '🔦 懐中電灯', vi: 'Đèn pin', id: 'Senter', th: 'ไฟฉาย', ph: 'Flashlight', ne: 'टर्चलाइट' },
            { ja: '📻 ラジオ', vi: 'Đài radio', id: 'Radio', th: 'วิทยु', ph: 'Radio', ne: 'रेडियो' }
        ],
        {
            q: {
                ja: '動きません',
                vi: 'Không hoạt động',
                id: 'Tidak mau jalan',
                th: 'ไม่ทำงาน',
                ph: 'Hindi gumagana',
                ne: 'चल्दैन'
            },
            a: '動きません'
        }
    ),
    makeDay(
        "day20",
        "指示・移動",
        "Day20：復習（指示語＋安全＋報告）",
        "分からない時は止めて確認する。『どれですか？』『もう一度お願いします』を必ず使う。",
        {
            vi: 'Khi không rõ, hãy dừng lại và xác nhận. Hãy dùng “Cái nào?” và “Xin nói lại”.',
            id: 'Jika tidak tahu, berhenti dan konfirmasi. Pastikan gunakan "Yang mana?" dan "Tolong ulangi".',
            th: 'เมื่อไม่ทราบ ให้หยุดและยืนยัน ต้องใช้ "อันไหน?" และ "ขออีกรอบ" เสมอ',
            ph: 'Kapag hindi sigurado, huminto at kumpirmahin. Gamitin ang "alin po?" at "pakiulit po".',
            ne: 'नबुझेको खण्डमा काम रोकेर पुष्टि गर्नुहोस्। "कुन हो?" र "फेरि एक पटक भन्नुहोस्" भन्ने शब्दहरू सधैं प्रयोग गर्नुहोस्।'
        },
        [
            { ja: "どれですか？", vi: "Cái nào vậy?", id: 'Yang mana?', th: 'อันไหน?', ph: 'Alin po?', ne: 'कुन हो?' },
            { ja: "もう一度お願いします", vi: "Làm ơn nói lại lần nữa", id: 'Tolong ulangi sekali lagi', th: 'ขออีกรอบ', ph: 'Pakiulit po', ne: 'कृपया फेरि एक पटक' },
            { ja: "危ないです", vi: "Nguy hiểm", id: 'Berbahaya', th: 'อันตราย', ph: 'Mapanganib po', ne: 'खतरा छ' },
            { ja: "止まってください", vi: "Dừng lại", id: 'Tolong berhenti', th: 'กรุณアหยุด', ph: 'Paki-hinto po', ne: 'कृपया रोक्नुहोस्' },
            { ja: "動きません", vi: "Không hoạt động", id: 'Tidak mau jalan', th: 'ไม่ทำงาน', ph: 'Hindi gumagana', ne: 'चल्दैन' }
        ],
        [
            { ja: '🚜 重機', vi: 'Máy móc hạng nặng', id: 'Alat berat', th: 'เครื่องจักรกลหนัก', ph: 'Heavy equipment', ne: 'ठूला मेसिनरी' },
            { ja: '🚛 トラック', vi: 'Xe tải', id: 'Truk', th: 'รถบรรทุก', ph: 'Truck', ne: 'ट्रक' },
            { ja: '🏗️ クレーン', vi: 'Cần cẩu', id: 'Derek / Crane', th: 'เครน', ph: 'Crane', ne: 'क्रेन' }
        ],
        {
            q: {
                ja: 'どれですか？',
                vi: 'Yang mana? / Cái nào?',
                id: 'Yang mana?',
                th: 'อันไหน?',
                ph: 'Alin po?',
                ne: 'कुन हो?'
            },
            a: 'どれですか？'
        }
    ),
    makeDay(
        "day21",
        "作業・現場ルール",
        "Day21：作業動詞③（寄せる／戻す）",
        "現場では『寄せる』『戻す』が頻出。分からない時は『どこに？』と確認する。",
        {
            vi: 'Ở hiện trường, “kéo sát/lùi lại” và “để lại chỗ cũ” dùng rất nhiều. Nếu không rõ, hãy hỏi “ở đâu?”.',
            id: 'Di lapangan, sering digunakan kata "Menepikan" und "Mengembalikan". Jika tidak tahu, konfirmasi "Di mana?".',
            th: 'ในไซต์งาน มักจะสั่งว่า "ชิด" และ "คืน" หากไม่รู้ให้ยืนยันว่า "ที่ไหน?"',
            ph: 'Sa site, madalas gamitin ang "isantabi" and "ibalik". Kung hindi sigurado, kumpirmahin kung "saan?".',
            ne: 'कार्यस्थलमा "नजिक ल्याउनुहोस्" र "फिर्ता राख्नुहोस्" शब्दहरू धेरै प्रयोग गरिन्छ। नबुझेमा "कहाँ?" भनेर सोध्नुहोस्।'
        },
        [
            { ja: "右に寄せてください", vi: "Hãy kéo sát sang phải", id: 'Tolong tepikan ke kanan', th: 'กรุณาชิดขวา', ph: 'Paki-usog sa kanan', ne: 'दायाँ तिर सार्नुहोस्' },
            { ja: "左に寄せてください", vi: "Hãy kéo sát sang trái", id: 'Tolong tepikan ke kiri', th: 'กรุณาชิดซ้าย', ph: 'Paki-usog sa kaliwa', ne: 'बायाँ तिर सार्नुहोस्' },
            { ja: "元に戻してください", vi: "Hãy để lại chỗ cũ", id: 'Tolong kembalikan ke tempat semula', th: 'กรุณานำกลับที่เดิม', ph: 'Pakibalik sa dati', ne: 'पहिलेकै ठाउँमा फिर्ता राख्नुहोस्' },
            { ja: "どこに戻しますか？", vi: "Để lại ở đâu ạ?", id: 'Dikembalikan ke mana?', th: 'คืนที่ไหนคะ/ครับ?', ph: 'Saan po ibabalik?', ne: 'कहाँ फिर्ता राख्ने हो?' },
            { ja: "ここでいいですか？", vi: "Ở đây được không?", id: 'Boleh di sini?', th: 'ตรงนี้โอเคไหม?', ph: 'Dito po ba?', ne: 'यहाँ ठीक छ?' }
        ],
        [
            { ja: '🧹 ほうき', vi: 'Chổi', id: 'Sapu', th: 'ไม้กวาด', ph: 'Walis', ne: 'कुचो' },
            { ja: '🧺 ちりとり', vi: 'Hốt rác', id: 'Pengki', th: 'ที่ตักผง', ph: 'Dustpan', ne: 'धुलो उठाउने भाँडो' },
            { ja: '🪣 バケツ', vi: 'Xô', id: 'Ember', th: 'ถังน้ำ', ph: 'Balde', ne: 'बाल्टिन' }
        ],
        {
            q: {
                ja: '元に戻してください',
                vi: 'Hãy để lại chỗ cũ',
                id: 'Tolong kembalikan ke tempat semula',
                th: 'กรุณานำกลับที่เดิม',
                ph: 'Pakibalik sa dati',
                ne: 'पहिलेकै ठाउँमा फिर्ता राख्नुहोस्'
            },
            a: '元に戻してください'
        }
    ),
    makeDay(
        "day22",
        "作業・現場ルール",
        "Day22：上下・手前奥（上／下／奥／手前）",
        "上下や手前奥の指示は安全に直結する。分からなければ必ず確認する。",
        {
            vi: 'Chỉ dẫn lên/xuống/trong/ngoài liên quan an toàn. Nếu không rõ, hãy xác nhận.',
            id: 'Instruksi atas/bawah and depan/belakang berkaitan langsung dengan keselamatan. Jika tidak tahu, pastikan konfirmasi.',
            th: 'คำสั่งขึ้น/ลง และ หน้า/หลัง เกี่ยวข้องกับความปลอดภัยโดยตรง หากไม่รู้ต้องยืนยันเสมอ',
            ph: 'Ang mga utos sa taas/ibaba and harap/likod ay direktang may kinalaman sa kaligtasan. Kung hindi sigurado, siguraduhing kumpirmahin.',
            ne: 'माथि/तल र अगाडि/पछाडिका निर्देशनहरू सुरक्षासँग प्रत्यक्ष सम्बन्धित हुन्छन्। नबुझेमा सधैं सोध्नुहोस्।'
        },
        [
            { ja: "うえに置いてください", vi: "Hãy đặt lên trên", id: 'Tolong letakkan di atas', th: 'กรุณาวางไว้ข้างบน', ph: 'Pakilagay sa itaas', ne: 'माथि राख्नुहोस्' },
            { ja: "下に置いてください", vi: "Hãy đặt xuống dưới", id: 'Tolong letakkan di bawah', th: 'กรุณาวางไว้ข้างล่าง', ph: 'Pakilagay sa ibaba', ne: 'तल राख्नुहोस्' },
            { ja: "奥に入れてください", vi: "Hãy đưa vào sâu bên trong", id: 'Tolong masukkan ke dalam', th: 'กรุณาใส่ไว้ข้างใน(ลึกๆ)', ph: 'Pakipasok sa loob', ne: 'भित्र गहिराइमा राख्नुहोस्' },
            { ja: "手前に出してください", vi: "Hãy đưa ra phía trước", id: 'Tolong keluarkan ke depan', th: 'กรุณานำมาวางข้างหน้า', ph: 'Pakilabas sa harap', ne: 'अगाडि ल्याउनुहोस्' },
            { ja: "どっちですか？", vi: "Bên nào vậy?", id: 'Yang mana?', th: 'ด้านไหน?', ph: 'Alin po?', ne: 'कुन हो?' }
        ],
        [
            { ja: '🤏 少し', vi: 'Một chút', id: 'Sedikit', th: 'นิดหน่อย', ph: 'Kaunti po', ne: 'अलिकति' },
            { ja: '👐 全部', vi: 'Tất cả', id: 'Semuanya', th: 'ทั้งหมด', ph: 'Lahat po', ne: 'सबै' },
            { ja: '🥣 袋', vi: 'Túi', id: 'Kantong / Karung', th: 'ถุง', ph: 'Supot', ne: 'झोला' }
        ],
        {
            q: {
                ja: '手前に出してください',
                vi: 'Hãy đưa ra phía trước',
                id: 'Tolong keluarkan ke depan',
                th: 'กรุณานำมาวางข้างหน้า',
                ph: 'Pakilabas sa harap',
                ne: 'अगाडि ल्याउनुहोस्'
            },
            a: '手前に出してください'
        }
    ),
    makeDay(
        "day23",
        "作業・現場ルール",
        "Day23：急ぎ・優先（今すぐ／先に／あとで）",
        "『今すぐ』『先に』『あとで』は作業の優先度を決める言葉。聞き取れなければ聞き返す。",
        {
            vi: '“Ngay bây giờ/trước/sau” quyết định ưu tiên công việc. Nếu không nghe rõ, hãy hỏi lại.',
            id: '"Sekarang juga", "Duluan", "Nanti" adalah kata-kata untuk menentukan skala prioritas. Jika tidak terdengar, tanyakan kembali.',
            th: '"ตอนนี้" "ก่อน" "ทีหลัง" เป็นคำกำหนดลำดับความสำคัญของงาน หากฟังไม่ชัดให้ถามกลับ',
            ph: 'Ang "ngayon din", "una", และ "mamaya" ay mga salitang nagtatakda ng prayoridad. Kung hindi narinig, magtanong muli.',
            ne: '"अहिले नै", "पहिले" र "पछि" शब्दहरूले कामको प्राथमिकता निर्धारण गर्दछ। नसुनेमा फेरि सोध्नुहोस्।'
        },
        [
            { ja: "今すぐお願いします", vi: "Làm ngay bây giờ giúp tôi", id: 'Tolong sekarang juga', th: 'กรุณาทำตอนนี้เลย', ph: 'Pakigawa na po ngayon din', ne: 'अहिले नै गरिदिनुहोस्' },
            { ja: "先にこれをしてください", vi: "Hãy làm cái này trước", id: 'Tolong kerjakan ini dulu', th: 'กรุณาทำสิ่งนี้ก่อน', ph: 'Pakigawa po ito muna', ne: 'पहिले यो गर्नुहोस्' },
            { ja: "あとでやります", vi: "Tôi sẽ làm sau", id: 'Akan saya kerjakan nanti', th: 'เดี๋ยวทำทีหลัง', ph: 'Gagawin ko po mamaya', ne: 'पछि गर्छु' },
            { ja: "急いでください", vi: "Hãy nhanh lên", id: 'Tolong cepat', th: 'กรุณารีบหน่อย', ph: 'Pakibilisan po', ne: 'कृपया छिटो गर्नुहोस्' },
            { ja: "今ですか？あとですか？", vi: "Là bây giờ hay sau?", id: 'Sekarang? 或者ทีหลัง?', ph: 'Ngayon po ba? O mamaya?', ne: 'अहिले हो कि पछि?' }
        ],
        [
            { ja: '⏱️ 時計', vi: 'Đồng hồ', id: 'Jam', th: 'นาฬิกา', ph: 'Orasan', ne: 'घडी' },
            { ja: '📅 カレンダー', vi: 'Lịch', id: 'Kalender', th: 'ปฏิทิน', ph: 'Kalendaryo', ne: 'पात्रो (क्यालेन्डर)' },
            { ja: '🔔 ベル', vi: 'Chuông', id: 'Bel', th: 'กระดิ่ง', ph: 'Bell', ne: 'घन्टी' }
        ],
        {
            q: {
                ja: '先にこれをしてください',
                vi: 'Hãy làm cái này trước',
                id: 'Tolong kerjakan ini dulu',
                th: 'กรุณาทำสิ่งนี้ก่อน',
                ph: 'Pakigawa po ito muna',
                ne: 'पहिले यो गर्नुहोस्'
            },
            a: '先にこれをしてください'
        }
    ),
    makeDay(
        "day24",
        "作業・現場ルール",
        "Day24：完了・確認（終わりました／OKですか？）",
        "作業が終わったら『終わりました』で報告する。次の指示が必要か確認する。",
        {
            vi: 'Khi xong việc hãy báo “Đã xong”. Sau đó xác nhận việc tiếp theo.',
            id: 'Setelah selesai, lapor "Sudah selesai". Konfirmasi apakah perlu instruksi berikutnya.',
            th: 'เมื่อเสร็จงานให้รายงานว่า "เสร็จแล้ว" แล้วยืนยันว่าต้องทำอะไรต่อ',
            ph: 'Kapag tapos na ang trabaho, iulat ang "tapos na". Kumpirmahin kung kailangan ng susunod na utos.',
            ne: 'काम सकिएपछि "सकियो" भनेर रिपोर्ट गर्नुहोस्। अर्को के गर्ने हो भनेर सोध्नुहोस्।'
        },
        [
            { ja: "終わりました", vi: "Xong rồi", id: 'Sudah selesai', th: 'เสร็จแล้ว', ph: 'Tapos na po', ne: 'सकियो' },
            { ja: "できました", vi: "Làm xong rồi", id: 'Sudah dilakukan', th: 'ทำได้แล้ว', ph: 'Nagawa na po', ne: 'भयो' },
            { ja: "次は何をしますか？", vi: "Tiếp theo làm gì ạ?", id: 'Berikutnya apa?', th: 'ต่อไปทำอะไรดีคะ/ครับ?', ph: 'Ano na po ang susunod na gagawin?', ne: 'अब के गर्ने हो?' },
            { ja: "これでOKですか？", vi: "Thế này OK chưa?", id: 'Apa ini sudah OK?', th: 'แบบนี้โอเคไหม?', ph: 'OK na po ba ito?', ne: 'यो ठीक छ?' },
            { ja: "確認お願いします", vi: "Nhờ anh/chị kiểm tra giúp", id: 'Mohon konfirmasinya', th: 'กรุณาตรวจสอบด้วย', ph: 'Pakitingnan naman po', ne: 'कृपया जाँच गरिदिनुहोस्' }
        ],
        [
            { ja: '⭕ OKマーク', vi: 'Dấu OK', id: 'Tanda OK', th: 'เครื่องหมาย OK', ph: 'OK mark', ne: 'ठीक छ (OK)' },
            { ja: '❌ ダメ', vi: 'Không được', id: 'Tidak boleh', th: 'ไม่ได้', ph: 'Bawal / Hindi maaari', ne: 'हुदैन' },
            { ja: '🚩 旗', vi: 'Cờ', id: 'Bendera', th: 'ธง', ph: 'Flag', ne: 'झन्डा' }
        ],
        {
            q: {
                ja: '終わりました',
                vi: 'Xong rồi',
                id: 'Sudah selesai',
                th: 'เสร็จแล้ว',
                ph: 'Tapos na po',
                ne: 'सकियो'
            },
            a: '終わりました'
        }
    ),
    makeDay(
        "day25",
        "作業・現場ルール",
        "Day25：省略・口語（やっといて／しといて）",
        "現場では短く省略して言われることが多い。意味が分からなければ『もう一度お願いします』と言う。",
        {
            vi: 'Ở hiện trường hay nói tắt. Nếu không hiểu, hãy nói “Xin nói lại”.',
            id: 'Di lapangan sering kali disingkat. Jika tidak mengerti, katakan "Tolong ulangi sekali lagi".',
            th: 'ในไซต์งานมักจะพูดแบบย่อๆ หากไม่เข้าใจความหมาย ให้พูดว่า "ขออีกรอบครับ/ค่ะ"',
            ph: 'Madalas ang pinaikling salita sa site. Kung hindi naintindihan, sabihin ang "pakiulit po".',
            ne: 'कार्यस्थलमा शब्दहरू छोटा र छोटकरीमा भनिने गरिन्छ। नबुझेमा "फेरि एक पटक भन्नुहोस्" भन्नुहोस्।'
        },
        [
            { ja: "これ、やっといてください", vi: "Làm cái này giúp tôi nhé", id: 'Tolong kerjakan ini ya', th: 'ช่วยทำอันนี้หน่อย', ph: 'Paki-gawa ito', ne: 'यो गरिराख्नुहोस्' },
            { ja: "ここ、しといてください", vi: "Xử lý chỗ này giúp tôi nhé", id: 'Tolong bereskan ini ya', th: 'ตรงนี้ช่วยจัดการให้ที', ph: 'Pakiasikaso ito', ne: 'यो ठाउँ मिलाइराख्नुहोस्' },
            { ja: "あとでいいですか？", vi: "Làm sau được không ạ?", id: 'Boleh nanti saja?', th: 'ทีหลังได้ไหม?', ph: 'Puwede po bang mamaya na?', ne: 'पछि गर्दा हुन्छ?' },
            { ja: "何をしますか？", vi: "Tôi làm gì ạ?", id: 'Saya harus apa?', th: 'ให้ทำอะไรคะ/ครับ?', ph: 'Ano pong gagawin ko?', ne: 'अब के गर्ने?' },
            { ja: "もう一度お願いします", vi: "Làm ơn nói lại lần nữa", id: 'Tolong ulangi sekali lagi', th: 'ขออีกรอบ', ph: 'Pakiulit po', ne: 'फेरि अको पटक' }
        ],
        [
            { ja: '🧤 ゴム手袋', vi: 'Găng tay cao su', id: 'Sarung tangan karet', th: 'ถุงมือยาง', ph: 'Rubber gloves', ne: 'रबरको पन्जा' },
            { ja: '🥽 ゴーグル', vi: 'Kính bảo hộ', id: 'Kacamata pelindung', th: 'แว่นตานิรภัย', ph: 'Safety goggles', ne: 'चश्मा (सुरक्षा)' },
            { ja: '😷 マスク', vi: 'Khẩu trang', id: 'Masker', th: 'หน้ากากอนามัย', ph: 'Face mask', ne: 'मास्क' }
        ],
        {
            q: {
                ja: 'やっといてください',
                vi: 'Làm giúp tôi nhé (nói tắt)',
                id: 'Tolong kerjakan ini ya (singkatan)',
                th: 'ช่วยทำอันนี้หน่อย (ภาษาพูด)',
                ph: 'Paki-gawa ito (pinaikli)',
                ne: 'यो गरिराख्नुहोस्'
            },
            a: 'やっといてください'
        }
    ),
    makeDay(
        "day26",
        "作業・現場ルール",
        "Day26：緊急停止・注意（ストップ／手元／足元）",
        "危険な時は短く強く伝える。『ストップ！』と注意内容を組み合わせる。",
        {
            vi: 'Khi nguy hiểm, hãy nói ngắn and mạnh. Kết hợp “STOP” với nội dung cần chú ý.',
            id: 'Sampaikan dengan singkat and tegas saat bahaya. Gunakan kata "STOP!" and area yang harus diwaspadai.',
            th: 'เมื่อมีอันตราย ให้บอกสั้นๆ and หนักแน่น ผสมคำว่า "STOP!" กับสิ่งที่ต้องระวัง',
            ph: 'Kapag mapanganib, magsalita nang maikli and matigas. Pagsamahin ang "STOP!" and ang bagay na dapat bantayan.',
            ne: 'खतरा भएको बेला, छोटो र जोडले भन्नुहोस्। "STOP!" (रोक्नुहोस्) सँगै के कुरामा ध्यान दिने हो सो मिलाएर भन्नुहोस्।'
        },
        [
            { ja: "ストップ！", vi: "STOP!", id: 'STOP!', th: 'หยุด!', ph: 'STOP!', ne: 'रोक्नुहोस् (STOP!)' },
            { ja: "ストップ！危ない！", vi: "STOP! Nguy hiểm!", id: 'STOP! Bahaya!', th: 'หยุด! อันตราย!', ph: 'STOP! Panganib!', ne: 'रोक्नुहोस्! खतरा!' },
            { ja: "手元注意", vi: "Cẩn thận tay", id: 'Awas tangan', th: 'ระวังมือ', ph: 'Ingat sa kamay', ne: 'हातमा ध्यान दिनुहोस्' },
            { ja: "足元注意", vi: "Cẩn thận chân", id: 'Awas kaki', th: 'ระวังเท้า', ph: 'Ingat sa paa', ne: 'खुट्टामा ध्यान दिनुहोस्' },
            { ja: "頭上注意", vi: "Cẩn thận phía trên", id: 'Awas kepala / di atas', th: 'ระวังศีรษะ', ph: 'Ingat sa itaas ng ulo', ne: 'टाउको माथि ध्यान दिनुहोस्' }
        ],
        [
            { ja: '🚧 バリケード', vi: 'Rào chắn', id: 'Barikade', th: 'เครื่องกีดขวาง', ph: 'Barricade', ne: 'ब्यारिकेड' },
            { ja: '🏮 赤ランプ', vi: 'Đèn đỏ', id: 'Lampu merah', th: 'ไฟแดง', ph: 'Red light', ne: 'रातो बत्ती' },
            { ja: '📢 スピーカー', vi: 'Loa', id: 'Speaker/Pengeras suara', th: 'ลำโพง', ph: 'Speaker', ne: 'स्पिकर' }
        ],
        {
            q: {
                ja: 'ストップ！',
                vi: 'STOP!',
                id: 'STOP!',
                th: 'หยุด!',
                ph: 'STOP!',
                ne: 'रोक्नुहोस् (STOP!)'
            },
            a: 'ストップ！'
        }
    ),
    makeDay(
        "day27",
        "作業・現場ルール",
        "Day27：安全掲示①（停止・禁止）",
        "現場には必ず安全掲示がある。意味を理解して行動する。",
        {
            vi: 'Trong công trường luôn có bảng an toàn. Hãy hiểu and làm theo.',
            id: 'Selalu ada papan informasi keselamatan di lapangan. Pahami artinya and ikuti.',
            th: 'ในไซต์งานต้องมีป้ายความปลอดภัยเสมอ ทำความเข้าใจความหมาย and ปฏิบัติตาม',
            ph: 'Laging may safety signs sa site. Unawain ang kahulugan and sundin.',
            ne: 'कार्यस्थलमा सधैं सुरक्षा चिन्हहरू हुन्छन्। तिनीहरूको अर्थ बुझ्नुहोस् र पालना गर्नुहोस्।'
        },
        [
            { ja: "一時停止", vi: "Dừng tạm thời", id: 'Berhenti sejenak', th: 'หยุดชั่วคราว', ph: 'Huminto sandali', ne: 'केही बेर रोकिनुहोस्' },
            { ja: "立入禁止", vi: "Cấm vào", id: 'Dilarang masuk', th: 'ห้ามเข้า', ph: 'Bawal pumasok', ne: 'प्रवेश निषेध' },
            { ja: "関係者以外立入禁止", vi: "Cấm người không liên quan", id: 'Selain petugas dilarang masuk', th: 'ห้ามเข้าก่อนได้รับอนุญาต', ph: 'Bawal pumasok ang walang kinalaman', ne: 'सम्बन्धित व्यक्ति बाहेक प्रवेश निषेध' },
            { ja: "危険", vi: "Nguy hiểm", id: 'Bahaya', th: 'อันตราย', ph: 'Panganib / Dangerous', ne: 'खतरा' },
            { ja: "注意", vi: "Chú ý", id: 'Peringatan / Awas', th: 'ระวัง', ph: 'Babala / Caution', ne: 'सावधान' }
        ],
        [
            { ja: '🚭 禁煙', vi: 'Cấm hút thuốc', id: 'Dilarang merokok', th: 'ห้ามสูบบุหรี่', ph: 'No smoking', ne: 'धुम्रपान निषेध' },
            { ja: '📵 スマホ禁止', vi: 'Cấm điện thoại', id: 'Dilarang menggunakan HP', th: 'ห้ามใช้โทรศัพท์', ph: 'No phones', ne: 'मोबाइल फोन निषेध' },
            { ja: '🚫 火気厳禁', vi: 'Cấm lửa', id: 'Dilarang menyalakan api', th: 'ห้ามก่อไฟ', ph: 'No open flames', ne: 'आगो बाल्न निषेध' }
        ],
        {
            q: {
                ja: '一度止まる',
                vi: 'Dừng lại một lần',
                id: 'Berhenti sekali',
                th: 'หยุดหนึ่งครั้ง',
                ph: 'Huminto ng isang beses',
                ne: 'एक पटक रोकिनुहोस्'
            },
            a: '一度止まる'
        }
    ),
    makeDay(
        "day28",
        "作業・現場ルール",
        "Day28：安全掲示②（電気・機械）",
        "電気や機械の掲示は特に危険。必ず守る。",
        {
            vi: 'Bảng liên quan đến điện and máy móc rất nguy hiểm. Phải tuân thủ.',
            id: 'Informasi tentang listrik and mesin sangat berbahaya. Wajib dipatuhi.',
            th: 'ป้ายเตือนไฟฟ้า and เครื่องจักรมีอันตรายมาก ต้องปฏิบัติตามอย่างเคร่งครัด',
            ph: 'Ang mga safety signs sa kuryente and makina ay napakamapanganib. Dapat itong sundin.',
            ne: 'बिजुली र मेसिनसम्बन्धी चिन्हहरू विशेष गरी खतरनाक हुन्छन्। तिनीहरूलाई सधैं पालना गर्नुहोस्।'
        },
        [
            { ja: "感電注意", vi: "Cẩn thận điện giật", id: 'Awas tersengat listrik', th: 'ระวังไฟฟ้าดูด', ph: 'Ingat sa kuryente', ne: 'करेन्ट लाग्न सक्छ, सावधान' },
            { ja: "高電圧", vi: "Điện áp cao", id: 'Tegangan tinggi', th: 'แรงดันไฟฟ้าสูง', ph: 'High voltage', ne: 'उच्च भोल्टेज' },
            { ja: "機械作動中", vi: "Máy đang hoạt động", id: 'Máy đang hoạt động', th: 'เครื่องจักรกำลังทำงาน', ph: 'Gumagana ang makina', ne: 'मेसिन चलिरहेको छ' },
            { ja: "触るな", vi: "Đừng chạm vào", id: 'Jangan disentuh', th: 'ห้ามสัมผัส', ph: 'Huwag hawakan', ne: 'नछुनुहोस्' },
            { ja: "電源を切る", vi: "Tắt nguồn điện", id: 'Matikan aliran listrik', th: 'ปิดสวิตช์ไฟ', ph: 'Patayin ang kuryente', ne: 'पावर बन्द गर्नुहोस्' }
        ],
        [
            { ja: '⚡ 高圧電流', vi: 'Điện cao áp', id: 'Listrik tegangan tinggi', th: 'ไฟฟ้าแรงสูง', ph: 'High voltage electricity', ne: 'उच्च भोल्टेज बिजुली' },
            { ja: '🔌 プラグ', vi: 'Phích cắm', id: 'Steker / Colokan', th: 'ปลั๊กไฟ', ph: 'Plug', ne: 'प्लग' },
            { ja: '🧯 消火器', vi: 'Bình chữa cháy', id: 'Alat Pemadam Api Ringan (APAR)', th: 'ถังดับเพลิง', ph: 'Fire extinguisher', ne: 'अग्नि नियन्त्रक' }
        ],
        {
            q: {
                ja: '感電注意',
                vi: 'Cẩn thận điện giật',
                id: 'Awas tersengat listrik',
                th: 'ระวังไฟฟ้าดูด',
                ph: 'Ingat sa kuryente',
                ne: 'करेन्ट लाग्न सक्छ, सावधान'
            },
            a: '感電注意'
        }
    ),
    makeDay(
        "day29",
        "作業・現場ルール",
        "Day29：非常時・避難",
        "非常時は、表示と指示を先に見ます。迷わず行動する。",
        {
            vi: 'Khi khẩn cấp, hãy ưu tiên biển báo and chỉ dẫn.',
            id: 'Segera ikuti instruksi and tanda saat kondisi darurat. Bertindaklah tanpa ragu.',
            th: 'ในยามฉุกเฉิน ให้ยึดตามป้าย and คำสั่งเป็นหลัก ลงมือทำโดยไม่ลังเล',
            ph: 'Sa oras ng emergency, unahin ang mga signs and utos. Kumilos agad.',
            ne: 'संकटको समयमा, पहिले संकेत र निर्देशनहरू हेर्नुहोस् र ढिला नगरी कदम चाल्नुहोस्।'
        },
        [
            { ja: "非常口", vi: "Lối thoát hiểm", id: 'Pintu darurat', th: 'ทางออกฉุกเฉิน', ph: 'Emergency exit', ne: 'आपतकालीन निकास' },
            { ja: "非常停止", vi: "Dừng khẩn cấp", id: 'Henti darurat', th: 'หยุดฉุกเฉิน', ph: 'Emergency stop', ne: 'आपतकालीन रोक' },
            { ja: "避難経路", vi: "Lối thoát nạn", id: 'Jalur evakuasi', th: 'เส้นทางหนีไฟ', ph: 'Evacuation route', ne: 'निकास मार्ग' },
            { ja: "消火器", vi: "Bình chữa cháy", id: 'Alat Pemadam Api', th: 'ถังดับเพลิง', ph: 'Fire extinguisher', ne: 'अग्नि नियन्त्रक' },
            { ja: "非常ボタン", vi: "Nút khẩn cấp", id: 'Tombol darurat', th: 'ปุ่มฉุกเฉิน', ph: 'Emergency button', ne: 'आपतकालीन बटन' }
        ],
        [
            { ja: '🚪 非常口', vi: 'Lối thoát hiểm', id: 'Pintu keluar darurat', th: 'ทางออกฉุกเฉิน', ph: 'Emergency exit', ne: 'आपतकालीन निकास' },
            { ja: '🚨 サイレン', vi: 'Còi hú', id: 'Sirine', th: 'ไซเรน', ph: 'Siren', ne: 'साइरन' },
            { ja: '🗺️ 避難マップ', vi: 'Sơ đồ thoát hiểm', id: 'Peta evakuasi', th: 'แผนผังหนีไฟ', ph: 'Evacuation map', ne: 'निकास नक्सा' }
        ],
        {
            q: {
                ja: '非常停止',
                vi: 'Dừng khẩn cấp',
                id: 'Henti darurat',
                th: 'หยุดฉุกเฉิน',
                ph: 'Emergency stop',
                ne: 'आपतकालीन रोक'
            },
            a: '非常停止'
        }
    ),
    makeDay(
        "day30",
        "作業・現場ルール",
        "Day30：総復習（最重要安全ワード）",
        "分からない時は止めて確認する。安全が最優先。",
        {
            vi: 'Khi không rõ, hãy dừng lại and xác nhận. An toàn là trên hết.',
            id: 'Jika tidak mengerti, berhenti and konfirmasi. Keselamatan adalah prioritas utama.',
            th: 'เมื่อไม่ทราบ ให้หยุด and ยืนยัน ความปลอดภัยต้องมาก่อนเสมอ',
            ph: 'Kapag hindi sigurado, huminto and kumpirmahin. Kaligtasan ang prayoridad.',
            ne: 'नबुझेको खण्डमा काम रोकेर पुष्टि गर्नुहोस्। सुरक्षा नै पहिलो प्राथमिकता हो।'
        },
        [
            { ja: "ストップ！", vi: "STOP!", id: 'STOP!', th: 'หยุด!', ph: 'STOP!', ne: 'रोक्नुहोस् (STOP!)' },
            { ja: "手元注意", vi: "Cẩn thận tay", id: 'Awas tangan', th: 'ระวังมือ', ph: 'Ingat sa kamay', ne: 'हातमा ध्यान दिनुहोस्' },
            { ja: "足元注意", vi: "Cẩn thận chân", id: 'Awas kaki', th: 'ระวังเท้า', ph: 'Ingat sa paa', ne: 'खुट्टामा ध्यान दिनुहोस्' },
            { ja: "立入禁止", vi: "Cấm vào", id: 'Dilarang masuk', th: 'ห้ามเข้า', ph: 'Bawal pumasok', ne: 'प्रवेश निषेध' },
            { ja: "感電注意", vi: "Cẩn thận điện giật", id: 'Awas tersengat listrik', th: 'ระวังไฟฟ้าดูด', ph: 'Ingat sa kuryente', ne: 'करेन्ट लाग्न सक्छ, सावधान' }
        ],
        [
            { ja: '🤝 挨拶', vi: 'Chào hỏi', id: 'Salam', th: 'ทักทาย', ph: 'Pagbati', ne: 'अभिवादन' },
            { ja: '👷 同僚', vi: 'Đồng nghiệp', id: 'Rekan kerja', th: 'เพื่อนร่วมงาน', ph: 'Kasamahan sa trabaho', ne: 'सहकर्मी' },
            { ja: '🫱‍🫲 協力', vi: 'Hợp tác', id: 'Kerja sama', th: 'ความร่วมมือ', ph: 'Pagtutulungan', ne: 'सहयोग' }
        ],
        {
            q: {
                ja: '安全第一',
                vi: 'An toàn là trên hết',
                id: 'Utamakan keselamatan',
                th: 'ปลอดภัยไว้ก่อน',
                ph: 'Safety first',
                ne: 'सुरक्षा नै पहिलो हो'
            },
            a: '安全第一'
        }
    ),
];
