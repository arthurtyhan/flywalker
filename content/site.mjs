// =====================================================================
//  網站內容（中英雙語）— 平常更新只要改這個檔案
//  Site content (bilingual). Edit this file to update the website.
//  每個雙語欄位寫成 { zh: '中文', en: 'English' }
// =====================================================================

export const updated = '2026-11'; // 最後更新年月，顯示於頁尾

export const profile = {
  name: { zh: '韓端勇', en: 'Tuan-Yung Han' },
  title: { zh: '國立臺東專科學校 電機工程科 教授', en: 'Professor, Department of Electrical Engineering, National Taitung Junior College' },
  role: { zh: '現任教務主任', en: 'Currently Dean of Academic Affairs' },
  greeting: { zh: '嗨！我是韓老師 👋', en: "Hi! I'm Professor Han 👋" },
  tagline: {
    zh: '用生成式 AI 讓學習更有溫度，用天線設計連結無線世界。',
    en: 'Making learning warmer with generative AI, and connecting the wireless world through antenna design.',
  },
  keywords: [
    { zh: '生成式 AI 教育應用', en: 'Generative AI in Education' },
    { zh: '天線設計', en: 'Antenna Design' },
    { zh: '翻轉教室', en: 'Flipped Classroom' },
    { zh: 'AIoT 物聯網', en: 'AIoT' },
    { zh: '演化式最佳化', en: 'Evolutionary Optimization' },
  ],
  photo: 'assets/photo.jpg', // 上傳照片後放在 src/assets/photo.jpg
  email: 'tyhan@gm.ntc.edu.tw',
  phone: '089-226389 #7050',
  office: {
    zh: '臺東市正氣北路 911 號（誠樸校區）綜合教學樓 5 樓 C01560 研究室',
    en: 'Room C01560, 5F, General Teaching Building, No. 911, Zhengqi N. Rd., Taitung City, Taiwan',
  },
  officeHours: {
    zh: '歡迎先寄 Email 約時間，我很樂意和你聊聊！',
    en: "Drop me an email to set up a time — I'm always happy to chat!",
  },
  links: [
    { label: 'Google Scholar', url: '' }, // 填入網址後才會顯示
    { label: 'ORCID', url: 'https://orcid.org/0000-0002-8551-2245' },
    { label: { zh: '數位學習平台', en: 'E-Learning Platform' }, url: 'http://elearning.ntc.edu.tw/' },
  ],
};

export const toStudents = {
  zh: '對生成式 AI、智慧影像辨識、智慧物聯網、自走車競賽或天線設計有興趣嗎？不管你是想做專題、參加競賽，還是只是對某個問題好奇，都歡迎來研究室找我聊聊。我相信每位同學都能在動手做的過程中找到自己的亮點 ✨',
  en: "Curious about generative AI, smart image recognition, AIoT, robot-car competitions or antenna design? Whether you want to do a capstone project, join a competition, or just have a question on your mind, come by my office and let's talk. I believe every student finds their own spark by building things ✨",
};

export const news = [
  { date: '2026-11', zh: '指導學生榮獲 2026 全國智慧型自走車競賽 迷宮競速賽大專組第一名 🥇、循跡競速賽大專組第三名！', en: 'Students won 1st Place in the Maze race and 3rd Place in the Line-Following race (College division) at the 2026 National Smart Robot Car Contest! 🥇' },
  { date: '2026-08', zh: '取得 TQC+ GenAI 輔助資料擷取與分析認證。', en: 'Earned the TQC+ GenAI-Assisted Data Extraction and Analysis certification.' },
  { date: '2026-08', zh: '教育部教學實踐研究計畫「結合正念調節與學習遊戲化翻轉策略…」開始執行。', en: 'New MOE Teaching Practice Research project on mindfulness and gamified flipped learning started.' },
  { date: '2026-07', zh: '主持教育部「人工智慧物聯網跨域應用課程師資設備精進計畫」。', en: 'Leading the MOE project to upgrade AIoT cross-disciplinary course facilities.' },
  { date: '2026-04', zh: '指導學生獲 2026 第二屆毫米波雷達 AI 創意應用賽決賽佳作兩件 🎉', en: 'Students won two Honorable Mentions at the 2nd mmWave Radar AI Creative Application Contest finals 🎉' },
  { date: '2025-08', zh: '接任國立臺東專科學校教務主任。', en: 'Appointed Dean of Academic Affairs, National Taitung Junior College.' },
  { date: '2024-02', zh: '翻轉教室研究論文刊登於 IEEE Transactions on Education。', en: 'Flipped-classroom study published in IEEE Transactions on Education.' },
];

export const researchThemes = [
  {
    icon: '🤖',
    title: { zh: '生成式 AI 與教學創新', en: 'Generative AI & Teaching Innovation' },
    desc: {
      zh: '把生成式 AI、聊天機器人、翻轉教室與遊戲化策略帶進工程課堂，研究如何提升學生的學習成效、反思能力與學習韌性。',
      en: 'Bringing generative AI, chatbots, flipped classrooms and gamification into engineering courses, and studying how they improve learning outcomes, reflection and resilience.',
    },
  },
  {
    icon: '📡',
    title: { zh: '天線設計', en: 'Antenna Design' },
    desc: {
      zh: '圓極化、可重置、超寬頻與毫米波陣列天線，應用於 GNSS、無人機、WLAN／Wi-Fi 6E 與 5G 行動裝置；從最佳化演算法到生成式人工智慧進行天線協同設計。',
      en: 'Circularly polarized, reconfigurable, UWB and mmWave array antennas for GNSS, UAVs, WLAN/Wi-Fi 6E and 5G devices, with antenna co-design that spans optimization algorithms to generative AI.',
    },
  },
  {
    icon: '🔌',
    title: { zh: 'AIoT 物聯網應用', en: 'AIoT Applications' },
    desc: {
      zh: '嵌入式系統、感測器與智慧自走車，從實驗室延伸到植株病蟲害辨識、智慧行車等實際應用。',
      en: 'Embedded systems, sensors and smart robot cars, extended to real applications such as plant-pest recognition and intelligent driving.',
    },
  },
];

// ---------------- 學經歷 ----------------
export const education = [
  { zh: '國立中興大學 應用數學研究所資訊組 博士', en: 'Ph.D., Institute of Applied Mathematics (Computer Science Div.), National Chung Hsing University' },
  { zh: '國立臺灣科技大學 電子工程研究所計算機組 碩士', en: 'M.S., Graduate Institute of Electronic Engineering (Computer Div.), National Taiwan University of Science and Technology' },
  { zh: '國立臺灣工業技術學院 電子工程技術系 學士', en: 'B.S., Department of Electronic Engineering, National Taiwan Institute of Technology' },
];

export const experience = [
  { period: '', zh: '國立臺東專科學校 電機工程科 教授', en: 'Professor, Dept. of Electrical Engineering, National Taitung Junior College' },
  { period: '2025/08 –', zh: '教務主任（兼任）', en: 'Dean of Academic Affairs (concurrent)' },
  { period: '2019/02 – 2021/01', zh: '電機工程科主任（兼任）', en: 'Chair, Dept. of Electrical Engineering (concurrent)' },
  { period: '2015/08 – 2017/07', zh: '電機工程科主任（兼任）', en: 'Chair, Dept. of Electrical Engineering (concurrent)' },
  { period: '2015/02 – 2015/07', zh: '教務主任（兼任）', en: 'Dean of Academic Affairs (concurrent)' },
  { period: '2012/08 – 2015/01', zh: '圖書資訊中心主任（兼任）', en: 'Director, Library and Information Center (concurrent)' },
  { period: '2017 –', zh: '教育部校園職業安全衛生知能提升暨教育訓練推動計畫 專業種子師資', en: 'Seed Instructor, MOE Campus Occupational Safety and Health Training Program' },
  { period: '', zh: '勞動部技能檢定中心 工業電子職類丙級、數位電子職類甲乙級 術科測試監評人員', en: 'Practical Test Examiner, Industrial Electronics (Level C) and Digital Electronics (Levels A/B), Workforce Development Agency, Ministry of Labor' },
  { period: '2009 – 2017', zh: '台灣感性資訊學會 監事', en: 'Supervisor, Taiwan Association of Kansei Information' },
  { period: '', zh: '逢甲大學天線暨微波電路創新研究中心 訪問學者', en: 'Visiting Scholar, Antenna and Microwave Circuit Innovation Research Center, Feng Chia University' },
  { period: '', zh: '中華民國大專院校合氣道 C 級教練', en: 'Level-C Aikido Coach, Chinese Taipei University Aikido' },
];

export const certifications = [
  { date: '2026/08', zh: '電腦技能基金會 TQC+ GenAI 輔助資料擷取與分析', en: 'TQC+ GenAI-Assisted Data Extraction and Analysis (CSF)', id: '212260800002140' },
  { date: '2026/04', zh: '資訊工業策進會「生成式 AI 能力」認證', en: 'Generative AI Competency Certification (III)', id: 'RA02260419011' },
  { date: '2025/02', zh: 'NVIDIA 運用 LLM 打造 RAG 智能代理', en: 'NVIDIA Building RAG Agents with LLMs', id: 'I_AHcV83QRa-5ZIuPh7JYQ' },
  { date: '', zh: 'OpenVINO Application Certified Engineer', en: 'OpenVINO Application Certified Engineer', id: 'No.24D0124' },
  { date: '', zh: 'TQC-DK 物聯網智慧應用及技術（專業級）', en: 'TQC-DK IoT Smart Applications and Technology (Professional)', id: '112160200011730' },
  { date: '2017/07', zh: 'Arduino IoT 工程師認證', en: 'Arduino IoT Engineer Certification', id: '' },
  { date: '', zh: '教育部校園職業安全衛生專業種子師資證書', en: 'MOE Campus Occupational Safety and Health Seed Instructor Certificate', id: '' },
  { date: '', zh: 'Oracle Database 11g: Administration Workshop', en: 'Oracle Database 11g: Administration Workshop', id: 'Enrollment 6851528' },
  { date: '2011/05', zh: 'TQC+ Android 行動裝置應用程式設計（專業級）', en: 'TQC+ Android Mobile App Development (Professional)', id: 'NPGD110500009' },
  { date: '', zh: '經濟部 ITE 網路通訊專業人員能力鑑定', en: 'MOEA ITE Network Communications Professional', id: 'NC-ITE-02851-63' },
  { date: '', zh: '勞動部 儀表電子乙級技術士', en: 'Level-B Technician, Instrument Electronics (Ministry of Labor)', id: '115-000192' },
];

export const honors = [
  { year: '2023', zh: '國立臺東專科學校 111 學年度績優導師', en: 'Outstanding Mentor, AY2022, National Taitung Junior College' },
  { year: '2022', zh: '國立臺東專科學校 110 學年度績優導師', en: 'Outstanding Mentor, AY2021, National Taitung Junior College' },
  { year: '2020', zh: '教育部 109 年度績優教學實踐研究計畫', en: 'MOE Outstanding Teaching Practice Research Project (2020)' },
  { year: '2019', zh: '教育部 108 年度績優教學實踐研究計畫', en: 'MOE Outstanding Teaching Practice Research Project (2019)' },
  { year: '2019', zh: '國立臺東專科學校 教學傑出教師', en: 'Distinguished Teaching Award, National Taitung Junior College' },
  { year: '2015–2019', zh: '國立臺東專科學校 104、106、107 學年度教學績優教師', en: 'Teaching Excellence Award, AY2015, AY2017, AY2018' },
  { year: '2017', zh: '第 28 屆馬來西亞 ITEX 國際發明創新科技展 銀牌（植株病蟲害辨識與預警系統）', en: 'Silver Medal, 28th ITEX Malaysia (Automatic Plant Pest Detection and Identification System)' },
  { year: '2015', zh: '第 26 屆馬來西亞 ITEX 國際發明創新科技展 銅牌（智慧運輸系統）', en: 'Bronze Medal, 26th ITEX Malaysia (Intelligent Transportation Systems)' },
  { year: '2009', zh: '建國科技大學 97 學年度論文研究特優教師', en: 'Outstanding Research Award, Chienkuo Technology University, AY2008' },
  { year: '', zh: '國防部 陸軍一星寶星獎章；陸總部「優秀義務役官兵」表揚', en: 'Army One-Star Pao-Hsing Medal (MND); commended as Outstanding Conscript by Army HQ' },
];

export const life = {
  intro: {
    zh: '喜歡運動、閱讀、音樂與電影，最愛的是旅行！也是合氣道三段，平常會在研究室或健身房。',
    en: 'I love sports, reading, music and movies — and above all, travelling! I also hold a 3rd-dan in Aikido, and I usually spend my time in the lab or at the gym.',
  },
  travel: [
    { zh: '美國 奧蘭多', en: 'Orlando, USA' },
    { zh: '歐洲', en: 'Europe' },
    { zh: '澳洲 布里斯班・雪梨・墨爾本', en: 'Brisbane · Sydney · Melbourne' },
    { zh: '紐西蘭 奧克蘭・皇后鎮・基督城', en: 'Auckland · Queenstown · Christchurch' },
    { zh: '香港', en: 'Hong Kong' },
    { zh: '澳門', en: 'Macau' },
    { zh: '新加坡', en: 'Singapore' },
    { zh: '馬來西亞 吉隆坡・檳城', en: 'Kuala Lumpur · Penang' },
    { zh: '泰國 曼谷・清邁・芭達雅・大城', en: 'Bangkok · Chiang Mai · Pattaya · Ayutthaya' },
    { zh: '印尼 峇里島・巴淡島', en: 'Bali · Batam' },
    { zh: '中國大陸 廬山・九寨溝・宜昌・武漢・成都・上海・蘇杭・南京・北京・海南島・濟南・天津・青海', en: 'China: Lushan · Jiuzhaigou · Yichang · Wuhan · Chengdu · Shanghai · Suzhou & Hangzhou · Nanjing · Beijing · Hainan · Jinan · Tianjin · Qinghai' },
  ],
};

// ---------------- 著作 ----------------
// type: journal | intl | domestic | book ; topic: edu | antenna | other
export const publications = [
  // 期刊論文
  { type: 'journal', topic: 'edu', year: 2024, text: 'T.-Y. Han* and H.-R. Chen, "A Digital Logic Flipped Classroom for Promoting Students’ Preclass Preparation and Participation in Classroom Activities Using a Guided Reflective Thinking Mechanism," <i>IEEE Transactions on Education</i>, vol. 67, no. 1, pp. 121–130, Feb. 2024. (SCIE)', doi: '10.1109/TE.2023.3330417' },
  { type: 'journal', topic: 'antenna', year: 2023, text: 'J.-S. Row*, T.-Y. Han, J.-Y. Chen, "A dual-polarized array based on a novel strip-typed antenna," <i>Microwave and Optical Technology Letters</i>, vol. 65, no. 1, pp. 176–182, Jan. 2023. (SCIE)', doi: '10.1002/mop.33448' },
  { type: 'journal', topic: 'antenna', year: 2022, text: 'T.-Y. Han*, C.-Y.-D. Sim, C.-Y. Chen, "A circularly polarized meander loop antenna for unmanned aerial vehicle satellite navigation system," <i>International Journal of RF and Microwave Computer-Aided Engineering</i>, vol. 32, no. 5, May 2022. (SCIE)', doi: '10.1002/mmce.23102' },
  { type: 'journal', topic: 'antenna', year: 2021, text: 'T.-Y. Han*, C.-Y.-D. Sim, C.-Y. Chen, "A Circularly Polarized Meander Loop Antenna Design for GNSS Application," <i>IEEE Antennas and Wireless Propagation Letters</i>, vol. 20, no. 12, pp. 2235–2239, Dec. 2021. (SCIE)', doi: '10.1109/LAWP.2021.3104350' },
  { type: 'journal', topic: 'edu', year: 2021, text: 'T.-Y. Han, H.-R. Chen*, H.-C. K. Lin, "Using Flipped Classroom to Improve the Learning Effectiveness of Digital Logic Courses," <i>Electronics</i>, vol. 10, no. 13, 1602, 2021. (SCIE)', doi: '10.3390/electronics10131602' },
  { type: 'journal', topic: 'antenna', year: 2014, text: 'C.-Y.-D. Sim*, T.-Y. Han, Y.-J. Liao, "A frequency reconfigurable half annular ring slot antenna design," <i>IEEE Transactions on Antennas and Propagation</i>, vol. 62, no. 6, pp. 3428–3431, 2014. (SCIE)', doi: '10.1109/TAP.2014.2314314' },
  { type: 'journal', topic: 'antenna', year: 2014, text: 'T.-Y. Han, C.-Y.-D. Sim*, Y.-N. Lai, "Dual-band quasi-self-complementary antenna for wireless local network operation," <i>International Journal of RF and Microwave Computer-Aided Engineering</i>, vol. 24, no. 3, pp. 298–305, May 2014. (SCIE)', doi: '10.1002/mmce.20761' },
  { type: 'journal', topic: 'antenna', year: 2014, text: 'C.-Y.-D. Sim*, T.-Y. Han, C.-J. Chi, B.-Y. Chen, "A 2 × 2 Array Antenna with Circular Polarization and Conical Beam Radiation," <i>International Journal of RF and Microwave Computer-Aided Engineering</i>, vol. 24, no. 2, pp. 223–228, Mar. 2014. (SCIE)', doi: '10.1002/mmce.20752' },
  { type: 'journal', topic: 'antenna', year: 2013, text: 'T.-Y. Han, C. J. S. Chuang, J.-S. Row*, "Polarization reconfigurable microstrip patch antenna," <i>Microwave and Optical Technology Letters</i>, vol. 55, no. 3, pp. 471–474, Mar. 2013. (SCIE)', doi: '10.1002/mop.27374' },
  { type: 'journal', topic: 'antenna', year: 2013, text: 'C.-Y.-D. Sim*, T.-Y. Han, B.-H. Yang, "A microstrip antenna design with multi-slots embedded into the ground plane for circular polarization," <i>International Journal of RF and Microwave Computer-Aided Engineering</i>, vol. 23, no. 1, pp. 13–19, 2013. (SCIE)', doi: '10.1002/mmce.20629' },
  { type: 'journal', topic: 'antenna', year: 2012, text: 'T.-Y. Han*, "Series-Fed Microstrip Array Antenna with Circular Polarization," <i>International Journal of Antennas and Propagation</i>, vol. 2012, Article ID 681431, 5 pages, 2012. (SCIE)', doi: '10.1155/2012/681431' },
  { type: 'journal', topic: 'antenna', year: 2010, text: 'L.-Y. Tseng* and T.-Y. Han, "An Evolutionary Design Method Using Genetic Local Search Algorithm to Obtain Broad/Dual-band Characteristics for Circular Polarization Slot Antennas," <i>IEEE Transactions on Antennas and Propagation</i>, vol. 58, no. 5, pp. 1449–1456, 2010. (SCIE)', doi: '10.1109/TAP.2010.2044312' },
  { type: 'journal', topic: 'antenna', year: 2010, text: 'T.-Y. Han* and C.-T. Huang, "Reconfigurable Monopolar Patch Antenna," <i>Electronics Letters</i>, vol. 46, no. 3, pp. 199–200, 2010. (SCIE)', doi: '10.1049/el.2010.3242' },
  { type: 'journal', topic: 'antenna', year: 2009, text: 'T.-Y. Han*, C.-Y.-D. Sim, W.-C. Wu, "Planar Multilateral Disc Monopole Antenna with Variable Band-Notch Function for Bluetooth/UWB Applications," <i>Journal of Electromagnetic Waves and Applications</i>, vol. 23, no. 17/18, pp. 2289–2299, 2009. (SCIE)', doi: '10.1163/156939309790416035' },
  { type: 'journal', topic: 'antenna', year: 2009, text: 'T.-Y. Han* and C.-Y.-D. Sim, "Shorted Planar Triangular Patch Antenna with Dual-Frequency Operation," <i>AEÜ – International Journal of Electronics and Communications</i>, vol. 63, no. 2, pp. 103–107, 2009. (SCIE)', doi: '10.1016/j.aeue.2007.11.001' },
  { type: 'journal', topic: 'antenna', year: 2009, text: 'C.-H. Lai, T.-Y. Han*, T.-R. Chen, "Circularly-Polarized Reconfigurable Microstrip Antenna," <i>Journal of Electromagnetic Waves and Applications</i>, vol. 23, no. 2/3, pp. 195–201, 2009. (SCIE)', doi: '10.1163/156939309787604373' },
  { type: 'journal', topic: 'antenna', year: 2009, text: 'T.-Y. Han and L.-Y. Tseng, "Reconfigurable Circularly Polarized Microstrip Antenna with Dual-Frequency Operation," <i>Microwave and Optical Technology Letters</i>, vol. 51, no. 1, pp. 29–32, 2009. (SCIE)', doi: '10.1002/mop.23987' },
  { type: 'journal', topic: 'antenna', year: 2008, text: 'C.-H. Lai, T.-Y. Han*, T.-R. Chen, "Broadband Aperture-Coupled Microstrip Antennas with Low Cross Polarization and Back Radiation," <i>Progress In Electromagnetics Research Letters</i>, vol. 5, pp. 187–197, 2008. (ESCI)', doi: '10.2528/PIERL08111805' },
  { type: 'journal', topic: 'antenna', year: 2008, text: 'L.-Y. Tseng* and T.-Y. Han, "Circular Polarization Square-Slot Antenna for Dual-Band Operation," <i>Microwave and Optical Technology Letters</i>, vol. 50, no. 9, pp. 2307–2309, 2008. (SCIE)', doi: '10.1002/mop.23633' },
  { type: 'journal', topic: 'antenna', year: 2008, text: 'T.-Y. Han, Y.-Y. Chu, L.-Y. Tseng, J.-S. Row, "Unidirectional Circularly-Polarized Slot Antennas with Broadband Operation," <i>IEEE Transactions on Antennas and Propagation</i>, vol. 56, no. 6, pp. 1777–1780, 2008. (SCIE)', doi: '10.1109/TAP.2008.923380' },
  { type: 'journal', topic: 'antenna', year: 2008, text: 'T.-Y. Han* and C.-Y.-D. Sim, "Reconfigurable Monopolar Circular Patch Antenna for Wireless Communication Systems," <i>Journal of Electromagnetic Waves and Applications</i>, vol. 22, no. 5, pp. 635–642, 2008. (SCIE)', doi: '10.1163/156939308784159426' },
  { type: 'journal', topic: 'antenna', year: 2008, text: 'T.-Y. Han*, "Broadband Circularly Polarized Square-Slot Antenna," <i>Journal of Electromagnetic Waves and Applications</i>, vol. 22, no. 4, pp. 549–554, 2008. (SCIE)', doi: '10.1163/156939308784150236' },
  { type: 'journal', topic: 'antenna', year: 2008, text: 'L.-Y. Tseng* and T.-Y. Han, "Microstrip-Fed Circular Slot Antenna for Circular Polarization," <i>Microwave and Optical Technology Letters</i>, vol. 50, no. 4, pp. 1056–1058, 2008. (SCIE)', doi: '10.1002/mop.23290' },
  { type: 'journal', topic: 'antenna', year: 2008, text: 'C.-Y.-D. Sim* and T.-Y. Han, "GPS Antenna Design with Slotted Ground Plane," <i>Microwave and Optical Technology Letters</i>, vol. 50, no. 3, pp. 818–821, Mar. 2008. (SCIE)', doi: '10.1002/mop.23215' },
  { type: 'journal', topic: 'antenna', year: 2007, text: 'C.-Y.-D. Sim and T.-Y. Han, "Compact Designs of a Shorted Triangular Patch Antenna with a V Slot," <i>Microwave and Optical Technology Letters</i>, vol. 49, no. 1, pp. 34–37, Jan. 2007. (SCIE)', doi: '10.1002/mop.22061' },
  { type: 'journal', topic: 'antenna', year: 2007, text: 'T.-Y. Han* and C.-Y.-D. Sim, "Probe-Feed Circularly Polarized Square-Ring Microstrip Antennas with Thick Substrate," <i>Journal of Electromagnetic Waves and Applications</i>, vol. 21, no. 1, pp. 71–80, 2007. (SCIE)', doi: '10.1163/156939307779391803' },
  { type: 'journal', topic: 'antenna', year: 2006, text: 'Y.-Y. Liou, J.-S. Row, T.-Y. Han, "Broadband Shorted Patch Antenna with Monopole-Like Radiation Patterns," <i>Microwave and Optical Technology Letters</i>, vol. 48, no. 9, pp. 1704–1707, Sep. 2006. (SCIE)', doi: '10.1002/mop.21753' },
  { type: 'journal', topic: 'antenna', year: 2005, text: 'F.-P. Chuo, T.-Y. Han, T.-R. Chen, "Compact Slot-Coupled Microstrip Antennas with Circular Polarization," <i>Microwave and Optical Technology Letters</i>, vol. 47, no. 1, pp. 57–59, Oct. 2005. (SCIE)', doi: '10.1002/mop.21080' },

  // 國際會議論文
  { type: 'intl', topic: 'antenna', year: 2021, text: 'J. Kulkarni, T.-Y. Han, J.-S. Row, C.-Y.-D. Sim, "Multiband 4-Port DGS MIMO Antenna with DR Isolating Element for Wireless Applications," <i>2021 IEEE APS/URSI</i>, Singapore, pp. 1021–1022.', doi: '10.1109/APS/URSI47566.2021.9704610' },
  { type: 'intl', topic: 'antenna', year: 2021, text: 'T.-Y. Han, Z.-K. Hsieh, J. Lo, C.-Y.-D. Sim, "A Pattern Reconfigurable Antenna Design for 5G Communication System," <i>2021 International Symposium on Antennas and Propagation (ISAP)</i>, Taipei.', doi: '10.23919/ISAP47258.2021.9614435' },
  { type: 'intl', topic: 'antenna', year: 2021, text: 'T.-Y. Han, W.-T. Hsieh, K.-H. Jheng, S.-H. Wang, C.-Y.-D. Sim, "Design of Laptop Antenna for WLAN and Wi-Fi 6E Applications," <i>2021 ISAP</i>, Taipei.', doi: '10.23919/ISAP47258.2021.9614571' },
  { type: 'intl', topic: 'antenna', year: 2018, text: 'C.-Y.-D. Sim, B.-Y. Chen, C.-H. Lin, H.-L. Su, T.-Y. Han, G.-L. Huang, "A Simple Aperture Coupled Circular Patch Antenna with CP Radiation and Frequency Agility," <i>2018 IEEE APS/URSI</i>, Boston, MA, USA, pp. 329–330.', doi: '10.1109/APUSNCURSINRSM.2018.8608546' },
  { type: 'intl', topic: 'antenna', year: 2017, text: 'C.-Y.-D. Sim, S.-Y. Liang, C.-K. Hsieh, T.-Y. Han, "A circularly polarized slits loaded UHF RFID antenna with parasitic element," <i>2017 IEEE ICCEM</i>, Kumamoto, Japan, pp. 349–351.', doi: '10.1109/COMPEM.2017.7912741' },
  { type: 'intl', topic: 'antenna', year: 2016, text: 'C.-Y.-D. Sim, M.-H. Chang, T.-Y. Han, H.-D. Chen, J.-S. Row, "An annular-ring slot antenna with CP radiation and harmonic suppression," <i>2016 IEEE APSURSI</i>, Fajardo, PR, USA, pp. 1321–1322.', doi: '10.1109/APS.2016.7696368' },
  { type: 'intl', topic: 'antenna', year: 2015, text: 'C.-Y.-D. Sim, C. Ku, H.-D. Chen, T.-Y. Han, H.-M. Chen, "Compact size annular-ring slot antenna with broad circularly polarized bandwidth," <i>2015 IEEE APS/URSI</i>, Vancouver, Canada, pp. 578–579.', doi: '10.1109/APS.2015.7304675' },
  { type: 'intl', topic: 'antenna', year: 2014, text: 'C.-Y.-D. Sim, M.-H. Chang, H.-D. Chen, T.-Y. Han, J.-S. Row, "Circularly polarized annular-ring slot antenna for WiMAX 2.3 GHz and WLAN 2.4 GHz applications," <i>2014 IEEE APSURSI</i>, Memphis, TN, USA, pp. 1051–1052.', doi: '10.1109/APS.2014.6904852' },
  { type: 'intl', topic: 'antenna', year: 2013, text: 'C.-Y.-D. Sim, B.-Y. Chen, H.-D. Chen, T.-Y. Han, J.-S. Row, "Circularly polarized array antenna with conical beam radiation," <i>2013 IEEE APSURSI</i>, Orlando, FL, USA, pp. 1580–1581.', doi: '10.1109/APS.2013.6711449' },
  { type: 'intl', topic: 'antenna', year: 2012, text: 'C.-Y.-D. Sim*, Y.-N. Lai, H.-D. Chen, J.-S. Row, T.-Y. Han, "Compact Size Antenna on Thin Flexible Substrate for WLAN Applications," <i>2012 IEEE APS/URSI</i>, Chicago, IL, USA. (EI)' },
  { type: 'intl', topic: 'antenna', year: 2010, text: 'J.-S. Row, T.-Y. Han, Y.-T. Cheng, C.-Y.-D. Sim, "Multi-band PIFA Design for WLAN/Satellite Communication," <i>2010 IEEE APS/URSI</i>, Toronto, Canada. (EI)' },
  { type: 'intl', topic: 'antenna', year: 2009, text: 'W. Wu, J. Row, T. Han, C. Sim, "An aperture-coupled microstrip antenna with frequency agility and polarization diversity," <i>2009 Asia-Pacific Microwave Conference</i>, Singapore. (EI)' },
  { type: 'intl', topic: 'antenna', year: 2009, text: 'T.-Y. Han and L.-Y. Tseng, "Design of a Broad/Dual-band Circularly Polarized Square Slot Antenna Using Genetic Local Search Algorithms," <i>2009 WRI World Congress on Computer Science and Information Engineering (CSIE)</i>, Los Angeles, USA. (EI)' },
  { type: 'intl', topic: 'antenna', year: 2009, text: 'C.-Y.-D. Sim, J.-S. Row, T.-Y. Han, "Dual-Feed Hybrid Antenna with Low Isolation and Cross Polarization," <i>2009 IEEE AP-S International Symposium</i>, Charleston, SC, USA. (EI)' },
  { type: 'intl', topic: 'other', year: 2007, text: 'L.-Y. Tseng and T.-Y. Han, "A genetic local search algorithm for the floorplan problem with boundary constraints," <i>International Conference on Genetic and Evolutionary Methods (GEM’07)</i>, Las Vegas, NV, USA.' },

  // 國內會議論文
  { type: 'domestic', topic: 'antenna', year: 2022, text: '韓端勇、王士華、賴薈之、蘇鈺茹、黃閔煜、潘本元，〈應用在筆記型電腦金屬背蓋上於 WLAN 與 WIFI 6E 頻帶之天線設計〉，2022 全國電信研討會，臺北。' },
  { type: 'domestic', topic: 'antenna', year: 2015, text: '林傳為、陳柏劭、韓端勇、沈昭元，〈操作於 UHF RFID 圓極化標籤貼片天線設計〉，2015 全國電信研討會，桃園。' },
  { type: 'domestic', topic: 'antenna', year: 2014, text: '林亨倫、李沅龍、韓端勇、沈昭元，〈應用於行動裝置之 LTE 多頻小型化單平面天線設計〉，2014 全國電信研討會，雲林。' },
  { type: 'domestic', topic: 'antenna', year: 2013, text: '李哲宇、韓端勇、沈昭元，〈應用於 LTE 多頻之單平面倒 F 型平板電腦天線〉，2013 全國電信研討會，彰化。' },
  { type: 'domestic', topic: 'antenna', year: 2013, text: '陳彥樺、劉昱麟、曾文正、韓端勇，〈具高增益特性之寬頻方型槽孔圓極化天線設計〉，2013 全國電信研討會，彰化。' },
  { type: 'domestic', topic: 'antenna', year: 2012, text: '許溢文、韓端勇、趙君恒、沈昭元，〈應用在 WLAN 頻段的微帶線雙頻槽孔天線〉，2012 全國電磁相容技術與實務暨展示會，臺中。' },
  { type: 'domestic', topic: 'antenna', year: 2011, text: '韓端勇、陳彥樺、劉昱麟，〈具有頻寬增強之印刷式三角形寬槽孔圓極化天線設計〉，2011 全國電信研討會，花蓮。' },
  { type: 'domestic', topic: 'antenna', year: 2011, text: '陳睦翊、韓端勇、羅鈞壎，〈具極化切換之單饋入可重置圓極化天線設計〉，2011 全國電信研討會，花蓮。' },
  { type: 'domestic', topic: 'antenna', year: 2011, text: '賴昱、韓端勇、沈昭元，〈具有 WLAN 頻帶的類互補式筆記型天線〉，2011 全國電信研討會，花蓮。' },
  { type: 'domestic', topic: 'antenna', year: 2010, text: '曾智偉、韓端勇、沈昭元，〈小型化超寬頻槽孔天線設計〉，2010 全國電信研討會，桃園。' },
  { type: 'domestic', topic: 'antenna', year: 2009, text: '楊博樺、韓端勇、賴昱念、沈昭元，〈具有接地面槽孔之 GPS 微帶天線設計〉，2009 全國電信研討會，高雄。' },
  { type: 'domestic', topic: 'antenna', year: 2009, text: '吳文欽、陳克任、韓端勇、羅鈞壎，〈整合藍芽頻帶之帶拒平面多角形超寬頻單極天線設計〉，2009 全國電信研討會，高雄。' },
  { type: 'domestic', topic: 'antenna', year: 2008, text: '韓端勇、陳克任、沈昭元，"Dual-Band CPW-Fed Monopole Antenna with Asymmetrical Ground Plane"，2008 全國電信研討會，雲林。' },
  { type: 'domestic', topic: 'antenna', year: 2008, text: '謝宗勳、韓端勇、羅鈞壎，〈具有頻率重置的雙頻 GPS 天線〉，2008 全國電信研討會，雲林。' },
  { type: 'domestic', topic: 'antenna', year: 2008, text: '詹明哲、羅鈞壎、韓端勇，〈具有頻率切換特性之全向性天線〉，2008 全國電信研討會，雲林。' },
  { type: 'domestic', topic: 'other', year: 2008, text: '韓端勇、沈孟呈，〈油電混合動力車電力管理嵌入式系統設計〉，第一屆技專校院資通訊產學研究論壇暨成果發表會，雲林。' },
  { type: 'domestic', topic: 'antenna', year: 2007, text: '韓端勇、林冠成，〈使用基因區域搜尋演算法設計之寬頻圓極化方形槽孔天線〉，2007 全國電信研討會，臺北。' },

  // 書籍及技術報告
  { type: 'book', topic: 'other', year: 2024, text: '林仁勇、梁廷宇、陳怡良、張志標、韓端勇，《計算機概論》第五版（第六至十一章），ISBN 978-626-97931-8-1，2024 年 4 月。' },
  { type: 'book', topic: 'other', year: 2003, text: '吳家榮、陳彥佑、韓端勇、謝德鑫，《電腦網際網路》（第五至六章），ISBN 986-7497-05-8，2003 年 2 月。' },
];

// ---------------- 計畫 ----------------
// kind: tpr (教學實踐) | research | industry | other
export const projects = [
  { kind: 'other', period: '2026/07 – 2027/09', role: 'pi', zh: '人工智慧物聯網跨域應用課程師資設備精進計畫', en: 'Upgrading Faculty and Facilities for AIoT Cross-Disciplinary Courses', agency: { zh: '教育部 實作場域設備精進計畫', en: 'MOE Hands-on Facility Upgrade Program' } },
  { kind: 'tpr', period: '2026/08 – 2027/07', role: 'pi', zh: '結合正念調節與學習遊戲化翻轉策略促進數位邏輯課程學生學習韌性與情緒健康教學實踐研究', en: 'Combining Mindfulness Regulation and Gamified Flipped Learning to Foster Resilience and Emotional Well-being in a Digital Logic Course', agency: { zh: '教育部教學實踐研究計畫', en: 'MOE Teaching Practice Research Program' }, id: 'MOE-115-TPREH-0222-003Y1' },
  { kind: 'tpr', period: '2025/08 – 2026/07', role: 'pi', zh: '生成式人工智慧融入擬題－場景導向學習以促進視窗程式設計課程學生之學習成效', en: 'Integrating Generative AI into Problem-Posing and Scenario-Based Learning to Improve Outcomes in a Windows Programming Course', agency: { zh: '教育部教學實踐研究計畫', en: 'MOE Teaching Practice Research Program' }, id: 'MOE-114-TPREE-0222-001Y1' },
  { kind: 'research', period: '2025/08 – 2026/07', role: 'copi', zh: '應用於 5G 智慧型手機之寬頻帶毫米波陣列天線', en: 'Wideband mmWave Array Antennas for 5G Smartphones', agency: { zh: '國科會 一般專題研究計畫', en: 'NSTC Research Project' }, id: '114-2221-E-035-043-' },
  { kind: 'tpr', period: '2024/08 – 2025/07', role: 'pi', zh: '在數位邏輯翻轉教學中應用 WSQ 和 Chatbot 策略提升學習成效與批判性思維', en: 'Applying WSQ and Chatbot Strategies in a Flipped Digital Logic Course to Improve Learning and Critical Thinking', agency: { zh: '教育部教學實踐研究計畫', en: 'MOE Teaching Practice Research Program' }, id: 'MOE-113-TPREE-0222-001Y1' },
  { kind: 'tpr', period: '2023/08 – 2024/07', role: 'pi', zh: '將工程設計過程融入 STEM 專案式學習對工科學生學習成就和技術探究能力的影響－以電子電路課程為例', en: 'Effects of Engineering-Design-Based STEM Project Learning on Achievement and Technical Inquiry: An Electronic Circuits Course', agency: { zh: '教育部教學實踐研究計畫', en: 'MOE Teaching Practice Research Program' }, id: 'PEE1121300' },
  { kind: 'tpr', period: '2022/08 – 2023/07', role: 'pi', zh: '以引導促進方法改善翻轉課程中學生的學習成效、反思能力與認知負荷', en: 'Using Guided Facilitation to Improve Learning, Reflection and Cognitive Load in Flipped Courses', agency: { zh: '教育部教學實踐研究計畫', en: 'MOE Teaching Practice Research Program' }, id: 'PEE1110438' },
  { kind: 'tpr', period: '2021/08 – 2022/07', role: 'pi', zh: '應用 STEM-6E 教學模式於工業電子與實習課程之專科學生學習動機、學業情緒與學習成效評估', en: 'Applying the STEM-6E Model in an Industrial Electronics Lab: Motivation, Academic Emotion and Learning Outcomes', agency: { zh: '教育部教學實踐研究計畫', en: 'MOE Teaching Practice Research Program' }, id: 'PEE1101015' },
  { kind: 'tpr', period: '2020/08 – 2021/07', role: 'pi', award: true, zh: '應用 BTS－學思達教學法於數位邏輯課程之翻轉教室實踐研究', en: 'Applying the BTS (ShiShiDa) Method in a Flipped Digital Logic Classroom', agency: { zh: '教育部教學實踐研究計畫', en: 'MOE Teaching Practice Research Program' }, id: 'PEE1090644' },
  { kind: 'tpr', period: '2019/08 – 2020/07', role: 'pi', award: true, zh: '翻轉教室教學設計實踐：以工專數位邏輯課程為例', en: 'Flipped Classroom Design in Practice: A Junior-College Digital Logic Course', agency: { zh: '教育部教學實踐研究計畫', en: 'MOE Teaching Practice Research Program' }, id: 'PEE1080239' },
  { kind: 'other', period: '2017/06 – 2018/03', role: 'pi', zh: '技專校院教學創新先導計畫－電機工程科子計畫', en: 'Teaching Innovation Pilot Program – EE Department Sub-project', agency: { zh: '教育部', en: 'Ministry of Education' } },
  { kind: 'research', period: '2012/08 – 2013/07', role: 'pi', zh: '具極化切換可重置天線設計與其系統化設計方法研究', en: 'Polarization-Switchable Reconfigurable Antennas and a Systematic Design Method', agency: { zh: '國科會 專題研究計畫', en: 'NSC Research Project' }, id: 'NSC 101-2221-E-270-008' },
  { kind: 'industry', period: '2011/04 – 2011/12', role: 'pi', zh: '學會投審稿管理系統製作', en: 'Paper Submission and Review System for the Association', agency: { zh: '台灣感性資訊學會', en: 'Taiwan Association of Kansei Information' } },
  { kind: 'research', period: '2010/11 – 2011/10', role: 'pi', zh: '串聯饋入圓極化微帶陣列天線設計', en: 'Series-Fed Circularly Polarized Microstrip Array Antenna', agency: { zh: '建國科技大學專題研究計畫', en: 'Chienkuo Technology University Research Project' }, id: 'CTU-100-RP-CM-001-025' },
  { kind: 'research', period: '2010/08 – 2011/07', role: 'copi', zh: '小型化超寬頻天線設計', en: 'Compact Ultra-Wideband Antenna Design', agency: { zh: '國科會 一般型研究計畫', en: 'NSC Research Project' }, id: 'NSC 99-2221-E-035-023' },
  { kind: 'industry', period: '2010/08 – 2010/12', role: 'pi', zh: '協同設計與展示系統建置分析與規劃', en: 'Collaborative Design and Display System Planning', agency: { zh: '經濟部 學界協助中小企業科技關懷計畫', en: 'MOEA Academic Assistance to SMEs Program' } },
  { kind: 'industry', period: '2010/03 – 2010/07', role: 'pi', zh: '學會網頁與期刊投稿管理系統製作', en: 'Association Website and Journal Submission System', agency: { zh: '台灣感性資訊學會', en: 'Taiwan Association of Kansei Information' } },
  { kind: 'other', period: '2010/02 – 2011/01', role: '', zh: '資通訊重點領域課程推廣計畫－嵌入式系統實習', en: 'ICT Key-Area Curriculum Program – Embedded Systems Lab', agency: { zh: '教育部', en: 'Ministry of Education' } },
  { kind: 'research', period: '2009/11 – 2010/10', role: 'pi', zh: '多頻操作可重置單極微帶天線設計', en: 'Multi-Band Reconfigurable Monopolar Microstrip Antenna', agency: { zh: '建國科技大學專題研究計畫', en: 'Chienkuo Technology University Research Project' }, id: 'CTU-99-RP-CM-001-034' },
  { kind: 'industry', period: '2009/10 – 2010/05', role: 'pi', zh: '嵌入式電力品質分析儀人機介面開發', en: 'HMI for an Embedded Power-Quality Analyzer', agency: { zh: '超立電機股份有限公司', en: 'Industry partner' } },
  { kind: 'industry', period: '2009/03 – 2009/08', role: 'pi', zh: '車用嵌入式系統規劃與設計（二）', en: 'Automotive Embedded System Design (II)', agency: { zh: '一品半導體股份有限公司', en: 'Industry partner' } },
  { kind: 'research', period: '2008/11 – 2009/10', role: 'pi', zh: '利用基因區域搜尋演算法進行超寬頻單極平面天線設計', en: 'UWB Planar Monopole Antenna Design Using Genetic Local Search', agency: { zh: '建國科技大學專題研究計畫', en: 'Chienkuo Technology University Research Project' }, id: 'CTU-98-RP-CM-002-038' },
  { kind: 'industry', period: '2008/09 – 2009/02', role: 'pi', zh: '車用嵌入式系統規劃與設計（一）', en: 'Automotive Embedded System Design (I)', agency: { zh: '一品半導體股份有限公司', en: 'Industry partner' } },
  { kind: 'other', period: '2008/08 – 2009/07', role: '', zh: '擴充圖書館藏及強化數位化資源計畫', en: 'Library Collection and Digital Resources Enhancement Program', agency: { zh: '', en: '' } },
  { kind: 'research', period: '2007/11 – 2008/10', role: 'pi', zh: '用於無線通訊系統之可重置單偶極圓形金屬片微帶天線設計', en: 'Reconfigurable Monopolar/Dipolar Circular Patch Antenna for Wireless Systems', agency: { zh: '建國科技大學專題研究計畫', en: 'Chienkuo Technology University Research Project' }, id: 'CTU-97-RP-CM-002-037' },
  { kind: 'research', period: '2005/11 – 2006/10', role: 'pi', zh: '以二階段基因演算法解決帶有邊界限制之平面規劃最佳化問題', en: 'Two-Stage Genetic Algorithm for Floorplanning with Boundary Constraints', agency: { zh: '建國科技大學專題研究計畫', en: 'Chienkuo Technology University Research Project' }, id: 'CTU-95-RP-CM-001-031' },
];

export const studentProjects = [
  { period: '2011/07 – 2012/02', zh: '具高增益特性之寬頻方型槽孔圓極化天線設計', en: 'High-Gain Wideband Square-Slot CP Antenna', id: '101-2815-C-270-005-E' },
  { period: '2011/07 – 2012/02', zh: '應用於無線區域網路 2.4/5.2/5.8 GHz 的新型寬頻印刷類互補式天線設計', en: 'Novel Wideband Printed Quasi-Complementary Antenna for 2.4/5.2/5.8 GHz WLAN', id: '100-2815-C-270-006-E' },
];

export const patents = [
  { kind: { zh: '發明專利', en: 'Invention Patent' }, no: 'I476987', zh: '圓極化槽孔天線的演化式設計方法', en: 'Evolutionary Design Method for Circularly Polarized Slot Antennas' },
  { kind: { zh: '新型專利', en: 'Utility Model' }, no: 'M528579', zh: '用於行列植株之病蟲害辨識系統', en: 'Pest and Disease Recognition System for Row Crops' },
  { kind: { zh: '新型專利', en: 'Utility Model' }, no: 'M508083', zh: '智慧行車系統', en: 'Intelligent Driving System' },
];

// ---------------- 實驗室 ----------------
export const lab = {
  name: { zh: '數位電路（物聯網）實驗室', en: 'Digital Circuits (IoT) Lab' },
  intro: {
    zh: '一間可以讓 24 位同學同時動手做的實驗室！從數位邏輯、嵌入式系統到物聯網與自走車，都在這裡完成；也是勞動部「乙級數位電子」與「丙級工業電子」術科檢定合格場地。',
    en: 'A hands-on lab with seats for 24 students — from digital logic and embedded systems to IoT and robot cars. It is also a certified test site for the Ministry of Labor Level-B Digital Electronics and Level-C Industrial Electronics practical exams.',
  },
  courses: [
    { zh: '工業電子與實習', en: 'Industrial Electronics & Lab', hrs: 4 },
    { zh: '嵌入式系統概論與實習', en: 'Intro to Embedded Systems & Lab', hrs: 4 },
    { zh: '數位電子與實習', en: 'Digital Electronics & Lab', hrs: 4 },
    { zh: '感測器與實習', en: 'Sensors & Lab', hrs: 4 },
    { zh: '物聯網應用實務', en: 'IoT Applications in Practice', hrs: 3 },
    { zh: '數位邏輯實習', en: 'Digital Logic Lab', hrs: 4 },
    { zh: 'FPGA 應用與實習', en: 'FPGA Applications & Lab', hrs: 4 },
  ],
  equipment: [
    { icon: '💻', qty: 24, zh: '個人電腦', en: 'Desktop PCs', model: 'ASUSPRO M840MB' },
    { icon: '📈', qty: 24, zh: '儲存式示波器', en: 'Digital Storage Oscilloscopes', model: 'GW INSTEK GDS-1072-U' },
    { icon: '〰️', qty: 24, zh: '函數波產生器', en: 'Function Generators', model: 'GW INSTEK SFG-2100' },
    { icon: '🔋', qty: 24, zh: '3 通道電源供應器', en: '3-Channel Power Supplies', model: 'GW INSTEK GPD-3303D' },
    { icon: '🔍', qty: 21, zh: '邏輯分析儀（PC Base）', en: 'PC-Based Logic Analyzers' },
    { icon: '🧩', qty: 21, zh: '數位邏輯平台實驗器', en: 'Digital Logic Trainers' },
    { icon: '🛠️', qty: 21, zh: '嵌入式電腦控制發展系統（含感測器模組）', en: 'Embedded Control Kits (with sensor modules)' },
    { icon: '🏠', qty: 10, zh: '智慧家庭雲端感測控制系統', en: 'Smart-Home Cloud Sensing & Control Kits' },
    { icon: '⚙️', qty: 1, zh: '全自動換刀電路板雕刻機', en: 'Automatic Tool-Change PCB Engraving Machine' },
    { icon: '🖥️', qty: null, zh: 'Altium Designer 17 電路板設計軟體', en: 'Altium Designer 17 PCB Design Software' },
    { icon: '🎨', qty: 21, zh: '互動設計應用系統', en: 'Interactive Design Kits' },
    { icon: '🏭', qty: 9, zh: 'IEC 可程式控制器與人機介面', en: 'IEC PLCs with HMIs' },
  ],
};

// 指導學生競賽獲獎（學生姓名保留原文）
export const studentAwards = [
  { year: 2026, zh: '全國智慧型自走車競賽 迷宮競速賽 大專組第一名（林○威、范○佑、林○安、李○銨） 🥇', en: 'National Smart Robot Car Contest, Maze (College) — 1st Place 🥇' },
  { year: 2026, zh: '全國智慧型自走車競賽 循跡競速賽 大專組第三名（林○威、范○佑、林○安、李○銨）', en: 'National Smart Robot Car Contest, Line-Following (College) — 3rd Place' },
  { year: 2026, zh: '第二屆毫米波雷達 AI 創意應用賽決賽－佳作（黃○齊）、佳作（陳○騰）', en: '2nd mmWave Radar AI Creative Application Contest (Finals) — Honorable Mention ×2' },
  { year: 2024, zh: '全國機器人互動競賽 自走車循跡互動競速賽 大專組第二名（林○博、邱○傑、許○傑）、佳作（劉○濂、李○德、曾○瑋）', en: 'National Robot Interaction Contest, Line-Following (College) — 2nd Place; Honorable Mention' },
  { year: 2023, zh: '全國智慧型自走車競賽 迷宮競速賽 大專組第三名（陳○佑、林○廷、趙○誠）', en: 'National Smart Robot Car Contest, Maze (College) — 3rd Place' },
  { year: 2023, zh: '全國機器人互動競賽 自走車循跡互動競速賽 大專組佳作（陳○佑、林○廷、趙○誠）', en: 'National Robot Interaction Contest, Line-Following (College) — Honorable Mention' },
  { year: 2023, zh: '全國智慧型自走車競賽 循跡競速賽 大專組佳作兩隊（趙○賢、楊○勛、陳○皓）（趙○誠、林○廷、陳○佑）', en: 'National Smart Robot Car Contest, Line-Following (College) — Honorable Mention ×2 teams' },
  { year: 2022, zh: '智能科技創新應用競賽 循跡競速組 銅牌（王○安、吳○翰、王○峯）、佳作（劉○邦、高○杰、林○舜）', en: 'Intelligent Technology Innovation Contest, Line-Following — Bronze; Honorable Mention' },
  { year: 2022, zh: '全國智慧型自走車競賽 迷宮競速賽、循跡競速賽 大專組佳作（劉○邦、林○舜、高○杰、吳○翰）', en: 'National Smart Robot Car Contest, Maze & Line-Following (College) — Honorable Mentions' },
  { year: 2021, zh: '智能科技創新應用競賽 迷宮競速組 銀牌（黃○誠、吳○叡）、銅牌（吳○叡、蔡○任）；循跡競速組 銅牌（王○、張○恩、陳○賢）', en: 'Intelligent Technology Innovation Contest — Maze: Silver & Bronze; Line-Following: Bronze' },
  { year: 2021, zh: '全國智慧型自走車競賽 循跡競速賽 大專組第二名（王○、陳○賢、張○恩）', en: 'National Smart Robot Car Contest, Line-Following (College) — 2nd Place' },
  { year: 2020, zh: '智能科技創新應用競賽 迷宮競速組 銅牌（林○埕）、佳作（林○峻）、優選（蕭○廷）', en: 'Intelligent Technology Innovation Contest, Maze — Bronze, Honorable Mention, Merit' },
  { year: 2019, zh: '城市盃智慧型自走車競賽 迷宮競速賽、循跡競速賽 大專組第三名（羅○詠、彭○清）、佳作（施○森）', en: 'City Cup Smart Robot Car Contest (College) — 3rd Place in Maze and Line-Following; Honorable Mention' },
  { year: 2019, zh: '南臺盃智能科技創新應用競賽 迷宮競速組 金牌（施○森）；循跡競速組 銅牌（彭○清）', en: 'STUST Cup Intelligent Technology Contest — Maze: Gold; Line-Following: Bronze' },
  { year: 2019, zh: '科技生活微電腦應用競賽 機器自走車迷宮競速賽 大專組第三名（彭○清）、佳作兩件', en: 'Microcomputer Application Contest, Robot-Car Maze (College) — 3rd Place; 2 Honorable Mentions' },
  { year: 2018, zh: '城市盃智慧型自走車競賽 迷宮競速賽 大專組第三名（許○亦、盧○崛）', en: 'City Cup Smart Robot Car Contest, Maze (College) — 3rd Place' },
  { year: 2018, zh: '科技生活微電腦應用競賽 機器自走車迷宮競速賽 大專組佳作（王○文、湯○瑜、葛○辰）', en: 'Microcomputer Application Contest, Robot-Car Maze (College) — Honorable Mention' },
  { year: 2017, zh: '城市盃智慧型自走車競賽 迷宮競速賽 大專組第一名（林○豪）、第二名（賴○坤）、第三名（張○唯）', en: 'City Cup Smart Robot Car Contest, Maze (College) — 1st, 2nd and 3rd Place 🏆' },
  { year: 2017, zh: 'ITEX 馬來西亞國際發明展 銀牌－植株病蟲害辨識與預警系統（韓端勇、吳○輝、李○樟、黃○玉）', en: 'ITEX Malaysia — Silver Medal, Plant Pest Recognition and Early-Warning System (with students)' },
  { year: 2017, zh: '科技生活微電腦應用競賽 機器自走車迷宮競速賽 第三名（賴○坤）、佳作（林○豪、張○維）', en: 'Microcomputer Application Contest, Robot-Car Maze — 3rd Place; Honorable Mentions' },
  { year: 2016, zh: '國際智慧型人形機器人競賽 無動力雙足機器人一般組 佳作（莊○諺、喬○恩、金○奕）', en: 'International Humanoid Robot Contest, Passive Biped — Honorable Mention' },
  { year: 2016, zh: '科技生活微電腦應用競賽 機器自走車迷宮競速賽 佳作三件（蔡○祐、許○亦、吳○輝）', en: 'Microcomputer Application Contest, Robot-Car Maze — 3 Honorable Mentions' },
  { year: 2015, zh: 'ITEX 馬來西亞國際發明展 銅牌－智慧運輸系統：動態行程規劃、自動駕駛與得來速（韓端勇、張○豪、金○維、黃○佑）', en: 'ITEX Malaysia — Bronze Medal, Intelligent Transportation System (with students)' },
  { year: 2015, zh: '國際智慧型人形機器人競賽 無動力雙足機器人 第二名（莊○宇、梁○鈞、陳○諭、楊○保）', en: 'International Humanoid Robot Contest, Passive Biped — 2nd Place' },
  { year: 2015, zh: '科技生活微電腦應用競賽 機器自走車迷宮競速賽 優勝（楊○保、黃○佑、梁○鈞、莊○宇）', en: 'Microcomputer Application Contest, Robot-Car Maze — Winner' },
];

// ---------------- 教學資源 ----------------
export const teachingResources = [
  { icon: '🎓', title: { zh: '國立臺東專科學校 數位學習平台', en: 'NTC E-Learning Platform' }, desc: { zh: '各學期課程綱要與數位教材', en: 'Syllabi and course materials for each semester' }, url: 'http://elearning.ntc.edu.tw/' },
  { icon: '🏁', title: { zh: '115-1 數位邏輯 小組計分賽成績公告', en: '115-1 Digital Logic Team Scoreboard' }, desc: { zh: '依組別公告（Google 試算表）', en: 'Posted by team (Google Sheets)' }, url: 'https://drive.google.com/file/d/14jnkpf83FwTJniJmxV9loYgssK6nyNde/view' },
];

export const wordTips = [
  { zh: '定位點設定', en: 'Tab stops', url: 'https://rookiesavior.net/2020/03/07/word-know-the-anchor-point-typesetting-is-ok/' },
  { zh: '如何使用樣式', en: 'Using styles', url: 'https://aries.dyu.edu.tw/~lhuang/class/office/word-styles.htm' },
  { zh: '如何製作目錄', en: 'Table of contents', url: 'https://aries.dyu.edu.tw/~lhuang/class/office/word-directory.htm' },
  { zh: '圖表目錄與內文交互參照', en: 'Figure lists & cross-references', url: 'https://aries.dyu.edu.tw/~lhuang/class/office/word-gt-directory.htm' },
  { zh: '前後格式不同的頁碼', en: 'Different page-number formats', url: 'https://aries.dyu.edu.tw/~lhuang/class/office/word-pagenum.htm' },
];

// ---------------- 服務 ----------------
export const adminRoles = [
  { period: '2025/08 –', zh: '教務主任', en: 'Dean of Academic Affairs' },
  { period: '2019/02 – 2021/01', zh: '電機工程科主任（任內通過 109 學年度大專校院教學品保評鑑，五年效期）', en: 'Department Chair (department passed the AY2020 teaching quality assurance review, valid for 5 years)' },
  { period: '2015/08 – 2017/07', zh: '電機工程科主任（任內獲教育部 105 學年度專科學校綜合評鑑一等）', en: 'Department Chair (department rated First Class in the MOE AY2016 junior-college evaluation)' },
  { period: '2015/02 – 2015/07', zh: '教務主任', en: 'Dean of Academic Affairs' },
  { period: '2012/08 – 2015/01', zh: '圖書資訊中心主任', en: 'Director, Library and Information Center' },
];

// 委員會名稱對照（中文 → 英文）
const C = {
  '校(科)教師評審委員會委員': 'Faculty Evaluation Committee (School/Dept.)',
  '校務會議代表': 'School Council Representative',
  '校教務會議委員': 'Academic Affairs Council',
  '校學務會議委員': 'Student Affairs Council',
  '校學生事務會議委員': 'Student Affairs Council',
  '校總務會議代表': 'General Affairs Council',
  '第三屆勞資會議代表': 'Labor-Management Meeting (3rd term)',
  '圖書資訊中心諮詢委員': 'Library & Information Center Advisory Committee',
  '圖書資訊中心諮詢委員會委員': 'Library & Information Center Advisory Committee',
  '校課程委員會委員': 'Curriculum Committee',
  '校課程委員會': 'Curriculum Committee',
  '校務發展委員會委員': 'School Development Committee',
  '學生校外實習委員會委員': 'Student Internship Committee',
  '校外實習委員會委員': 'Student Internship Committee',
  '學生獎懲委員會委員': 'Student Rewards & Discipline Committee',
  '校學生獎懲委員會委員': 'Student Rewards & Discipline Committee',
  '學生輔導工作委員會委員': 'Student Counseling Committee',
  '特殊教育推行委員會委員': 'Special Education Committee',
  '校特殊教育推行委員會委員': 'Special Education Committee',
  '資訊安全暨個人資料保護推動委員會委員': 'Information Security & Personal Data Protection Committee',
  '職員人事甄審暨考績委員': 'Staff Recruitment & Performance Committee',
  '約用人員評審委員會委員': 'Contract Staff Review Committee',
  '校契約進用人員評審委員會委員': 'Contract Staff Review Committee',
  '校務研究發展推動委員會委員': 'Institutional Research Committee',
  '法規委員會委員': 'Regulations Committee',
  '校法規委員會委員': 'Regulations Committee',
  '彈性薪資及學術獎勵委員會委員': 'Flexible Salary & Academic Awards Committee',
  '性別平等教育委員會委員': 'Gender Equity Education Committee',
  '校性別平等教育委員會委員': 'Gender Equity Education Committee',
  '完善就學協助機制審議委員會委員': 'Student Financial Assistance Committee',
  '完善就學機制學生勵學金審查會委員': 'Student Financial Assistance Scholarship Committee',
  '交通安全委員會委員': 'Traffic Safety Committee',
  '自我評鑑委員會委員': 'Self-Evaluation Committee',
  '校自我評鑑委員會委員': 'Self-Evaluation Committee',
  '校(科)自我評鑑委員會': 'Self-Evaluation Committee (School/Dept.)',
  '校務自我評鑑內部委員': 'Internal Reviewer, Institutional Self-Evaluation',
  '第七屆校務基金投資管理小組委員': 'Endowment Investment Committee (7th term)',
  '校就學獎助學金審查委員會委員': 'Scholarship Review Committee',
  '學生獎助學金審查委員會委員': 'Scholarship Review Committee',
  '校本位課程發展委員會委員': 'School-Based Curriculum Development Committee',
  '校務會議代表(校程序委員會委員)': 'School Council Representative (Procedures Committee)',
  '教師申訴評議委員會委員': 'Teacher Grievance Committee',
  '校內部控制稽核小組委員': 'Internal Control Audit Team',
  '校獎助補助師生參加校外專業競賽審查委員會委員': 'Competition Funding Review Committee',
  '校推廣教育審查小組委員': 'Continuing Education Review Team',
  '通識教育中心教育委員會委員': 'General Education Committee',
  '通識教育委員會委員': 'General Education Committee',
  '校史資料編審暨發展委員會委員': 'School History Committee',
  '校內部控制小組委員': 'Internal Control Team',
  '校內部控制專案小組委員': 'Internal Control Project Team',
  '校計畫推動與管考小組成員': 'Project Management & Review Team',
  '校職員申訴評議委員會委員': 'Staff Grievance Committee',
  '校園規劃及興建委員會委員': 'Campus Planning & Construction Committee',
  '校傑出校友遴選審查委員': 'Distinguished Alumni Selection Committee',
  '電機工程科選課輔導教師': 'Course Selection Advisor, EE Dept.',
};
const yearsCommittees = {
  114: ['校(科)教師評審委員會委員', '校務會議代表', '校教務會議委員', '校學務會議委員', '校總務會議代表', '第三屆勞資會議代表', '圖書資訊中心諮詢委員', '校課程委員會委員', '校務發展委員會委員', '學生校外實習委員會委員', '學生獎懲委員會委員', '學生輔導工作委員會委員', '特殊教育推行委員會委員', '資訊安全暨個人資料保護推動委員會委員', '職員人事甄審暨考績委員', '約用人員評審委員會委員', '校務研究發展推動委員會委員', '法規委員會委員', '彈性薪資及學術獎勵委員會委員', '性別平等教育委員會委員', '完善就學協助機制審議委員會委員', '交通安全委員會委員', '自我評鑑委員會委員', '第七屆校務基金投資管理小組委員'],
  113: ['校(科)教師評審委員會委員', '校教務會議委員'],
  112: ['校(科)教師評審委員會委員', '校就學獎助學金審查委員會委員'],
  111: ['校(科)教師評審委員會委員', '校就學獎助學金審查委員會委員'],
  110: ['校(科)教師評審委員會委員', '校教務會議委員', '完善就學機制學生勵學金審查會委員', '特殊教育推行委員會委員'],
  109: ['校(科)教師評審委員會委員', '校教務會議委員', '校課程委員會委員', '校本位課程發展委員會委員', '校(科)自我評鑑委員會', '校務會議代表(校程序委員會委員)', '校學生事務會議委員', '校學生獎懲委員會委員', '校就學獎助學金審查委員會委員', '校務自我評鑑內部委員'],
  108: ['校教務會議委員', '校課程委員會', '校本位課程發展委員會委員', '校(科)自我評鑑委員會', '校法規委員會委員', '校學生事務會議委員', '校學生獎懲委員會委員'],
  107: ['教師申訴評議委員會委員', '校教務會議委員', '校課程委員會', '校學生獎懲委員會委員', '校內部控制稽核小組委員'],
  106: ['教師申訴評議委員會委員', '校教務會議委員', '校課程委員會', '校學生獎懲委員會委員', '校內部控制稽核小組委員', '校特殊教育推行委員會委員'],
  105: ['校教務會議委員', '校課程委員會', '校學生獎懲委員會委員', '校(科)自我評鑑委員會', '校外實習委員會委員', '校獎助補助師生參加校外專業競賽審查委員會委員', '校內部控制稽核小組委員', '校推廣教育審查小組委員', '通識教育中心教育委員會委員'],
  104: ['校教務會議委員', '校課程委員會委員', '通識教育委員會委員', '校外實習委員會委員', '校獎助補助師生參加校外專業競賽審查委員會委員', '校史資料編審暨發展委員會委員', '校自我評鑑委員會委員'],
  103: ['校(科)教師評審委員會委員', '校務發展委員會委員', '校史資料編審暨發展委員會委員', '校務會議代表', '校教務會議委員', '校性別平等教育委員會委員', '圖書資訊中心諮詢委員會委員', '校內部控制小組委員', '校內部控制專案小組委員', '校計畫推動與管考小組成員', '校職員申訴評議委員會委員', '校契約進用人員評審委員會委員', '校園規劃及興建委員會委員', '學生獎助學金審查委員會委員', '校傑出校友遴選審查委員'],
  102: ['校(科)教師評審委員會委員', '圖書資訊中心諮詢委員會委員', '校內部控制專案小組委員', '校職員申訴評議委員會委員', '校教務會議委員', '學生獎懲委員會委員', '學生獎助學金審查委員會委員'],
  101: ['校(科)教師評審委員會委員', '校務會議代表', '校內部控制小組委員', '學生獎懲委員會委員', '圖書資訊中心諮詢委員會委員', '校園規劃及興建委員會委員', '電機工程科選課輔導教師'],
};
export const committees = Object.entries(yearsCommittees)
  .sort((a, b) => b[0] - a[0])
  .map(([y, items]) => ({ ay: +y, items: items.map((z) => ({ zh: z.replace(/\(/g, '（').replace(/\)/g, '）'), en: C[z] || z })) }));

export const mentoring = [
  { ay: 113, items: [{ zh: '專科義務輔導教師', en: 'Volunteer Student Counselor' }] },
  { ay: 112, items: [{ zh: '專科義務輔導教師', en: 'Volunteer Student Counselor' }] },
  { ay: 111, items: [{ zh: '二專電機二導師（獲績優導師）', en: 'Homeroom Mentor, 2-yr EE Year 2 (Outstanding Mentor Award)' }, { zh: '資源教室學生導師', en: 'Mentor, Resource Room Students' }, { zh: '專科義務輔導教師', en: 'Volunteer Student Counselor' }] },
  { ay: 110, items: [{ zh: '二專電機一導師（獲績優導師）', en: 'Homeroom Mentor, 2-yr EE Year 1 (Outstanding Mentor Award)' }, { zh: '資源教室學生導師', en: 'Mentor, Resource Room Students' }, { zh: '專科義務輔導教師', en: 'Volunteer Student Counselor' }] },
  { ay: 109, items: [{ zh: '電機工程科學會指導老師', en: 'Advisor, EE Student Association' }] },
  { ay: 108, items: [{ zh: '電機工程科學會指導老師', en: 'Advisor, EE Student Association' }] },
  { ay: 107, items: [{ zh: '二專電機二導師', en: 'Homeroom Mentor, 2-yr EE Year 2' }, { zh: '資源教室學生輔導老師', en: 'Counselor, Resource Room Students' }] },
  { ay: 106, items: [{ zh: '二專電機一導師', en: 'Homeroom Mentor, 2-yr EE Year 1' }, { zh: '資源教室學生輔導老師', en: 'Counselor, Resource Room Students' }] },
  { ay: 105, items: [{ zh: '五專電機五導師', en: 'Homeroom Mentor, 5-yr EE Year 5' }, { zh: '資源教室學生輔導老師', en: 'Counselor, Resource Room Students' }, { zh: '電機工程科學會指導老師', en: 'Advisor, EE Student Association' }] },
  { ay: 104, items: [{ zh: '五專電機四導師', en: 'Homeroom Mentor, 5-yr EE Year 4' }, { zh: '資源教室學生輔導老師', en: 'Counselor, Resource Room Students' }] },
  { ay: 103, items: [{ zh: '五專電機三導師', en: 'Homeroom Mentor, 5-yr EE Year 3' }, { zh: '資源教室學生輔導老師', en: 'Counselor, Resource Room Students' }] },
  { ay: 102, items: [{ zh: '五專電機二導師', en: 'Homeroom Mentor, 5-yr EE Year 2' }, { zh: '資源教室學生輔導老師', en: 'Counselor, Resource Room Students' }] },
  { ay: 101, items: [{ zh: '五專電機一導師', en: 'Homeroom Mentor, 5-yr EE Year 1' }, { zh: '資源教室學生輔導老師', en: 'Counselor, Resource Room Students' }] },
];

const reviewJ = (list) => ({ zh: `擔任 ${list} 等 SCI 期刊審稿`, en: `Reviewer for SCI journals: ${list}` });
const PIER4 = 'Progress in Electromagnetics Research, Int. J. RF and Microwave Computer-Aided Engineering, Int. J. Antennas and Propagation, IEEE Antennas and Wireless Propagation Letters';
const PIER3 = 'Progress in Electromagnetics Research, Int. J. RF and Microwave Computer-Aided Engineering, Int. J. Antennas and Propagation';
const examiner = { zh: '勞動部技能檢定「工業電子」、「數位電子」術科測試監評', en: 'Practical test examiner, Industrial & Digital Electronics (Ministry of Labor)' };
const testSite = (n) => ({ zh: `辦理本校「數位電子」與「工業電子」即測即評及發證術科測試${n ? `共 ${n} 場次` : ''}`, en: `Organized on-campus instant-certification practical tests for Digital & Industrial Electronics${n ? ` (${n} sessions)` : ''}` });
const nfu = { zh: '國立虎尾科技大學電子工程所碩士班口試委員', en: "Master's thesis examiner, Electronic Engineering, National Formosa University" };
const fcu = { zh: '逢甲大學電機工程學系碩士班口試委員', en: "Master's thesis examiner, Electrical Engineering, Feng Chia University" };

export const professionalService = [
  { ay: 113, items: [nfu, fcu,
    { zh: '本校資訊管理科 113 學年度大專校院教學品質保證內部審查委員', en: 'Internal reviewer, AY2024 teaching quality assurance, Dept. of Information Management' },
    { zh: '逢甲大學資訊電機學院電機工程學系校外課程委員', en: 'External curriculum committee member, EE Dept., Feng Chia University' },
    { zh: '國立高雄科技大學教師教學諮詢服務專家', en: 'Teaching consultation expert, National Kaohsiung University of Science and Technology' },
    examiner, testSite(4)] },
  { ay: 112, items: [nfu, fcu,
    { zh: '2023 大專校院機電智慧暨電動載具創意實作競賽評審委員（澄德科技教育基金會）', en: 'Judge, 2023 Intelligent Mechatronics & Electric Vehicle Creative Contest' },
    reviewJ('Heliyon, Int. J. Antennas and Propagation, Int. J. RF and Microwave Computer-Aided Engineering, IEEE Antennas and Wireless Propagation Letters, IEEE Journal of Radio Frequency Identification'),
    examiner, testSite(4)] },
  { ay: 111, items: [nfu, fcu,
    { zh: '建國科技大學「翻轉與混成教學實踐：教學實踐研究計畫經驗分享」講者', en: 'Invited talk on flipped & blended teaching practice research, Chienkuo Technology University' },
    reviewJ(PIER4), examiner, testSite(4)] },
  { ay: 110, items: [
    { zh: '國立臺灣史前文化博物館「史前暨南島線上策展及數位學習平台建置計畫」採購案評選委員', en: 'Procurement review panel, online curation & e-learning platform, National Museum of Prehistory' },
    nfu, fcu,
    { zh: '國立高雄科技大學教師教學創新獎勵遴選會審查委員', en: 'Reviewer, Teaching Innovation Awards, National Kaohsiung University of Science and Technology' },
    reviewJ(PIER4), examiner, testSite(5)] },
  { ay: 109, items: [
    { zh: '國立臺灣史前文化博物館「數位展示看板多媒體整合系統建置」採購案評選委員', en: 'Procurement review panel, digital signage system, National Museum of Prehistory' },
    { zh: '前瞻基礎建設數位建設－強化數位教學暨學習資訊應用環境計畫 審查與諮詢訪視委員（花蓮高商、花蓮高農）', en: 'Reviewer & site visitor, Forward-looking Digital Learning Environment Program (Hualien high schools)' },
    fcu, nfu, reviewJ(PIER4), examiner, testSite()] },
  { ay: 108, items: [
    { zh: '國立臺東生活美學館「東台灣地方知識庫計畫」採購案評選委員', en: 'Procurement review panel, East Taiwan Local Knowledge Base, National Taitung Living Art Center' },
    { zh: '前瞻基礎建設數位建設－強化數位教學暨學習資訊應用環境計畫 審查與諮詢訪視委員（士林高商、新北高工、彰化高中）', en: 'Reviewer & site visitor, Forward-looking Digital Learning Environment Program (3 high schools)' },
    nfu, reviewJ(PIER4), examiner, testSite()] },
  { ay: 107, items: [
    { zh: '國立臺灣史前文化博物館「常設展廳智慧互動裝置」、「數位展示看板」、「史前暨南島線上策展」等採購案評選委員', en: 'Procurement review panels for several digital exhibition projects, National Museum of Prehistory' },
    nfu, reviewJ(PIER3), examiner, testSite(),
    { zh: '108 年改善教學環境及提升品質計畫－東部地區電力暨機專技人才培育計畫主持人，爭取 441 萬元經費', en: 'PI, Eastern Taiwan Power & Mechatronics Talent Program (NT$4.41M)' },
    { zh: '承辦教育部智慧科技與產業創新跨校教學聯盟「107 年度智慧生活在台東體驗工作坊」', en: 'Host, MOE Smart Living in Taitung Workshop (2018)' }] },
  { ay: 106, items: [
    { zh: '國立臺灣史前文化博物館「考古學主題研究數位科技紀錄暨國際工坊籌辦採購案」評選委員', en: 'Procurement review panel, archaeology digital-recording project, National Museum of Prehistory' },
    nfu, reviewJ(PIER3), examiner, testSite()] },
  { ay: 105, items: [
    { zh: '國立臺灣史前文化博物館「建構智慧型博物館」106 年計畫工作小組諮詢委員', en: 'Advisory member, Smart Museum Program, National Museum of Prehistory' },
    nfu, reviewJ(PIER3), examiner, testSite()] },
  { ay: 104, items: [
    { zh: '國立臺灣史前文化博物館「常設展廳智慧互動裝置規劃設計與製作」採購評選委員', en: 'Procurement review panel, interactive exhibition devices, National Museum of Prehistory' },
    nfu, reviewJ(PIER3), examiner] },
  { ay: 103, items: [nfu, fcu, reviewJ(PIER3), examiner] },
  { ay: 102, items: [nfu,
    { zh: '國立中興大學資訊科學與工程學系碩士班口試委員', en: "Master's thesis examiner, Computer Science & Engineering, National Chung Hsing University" },
    fcu,
    { zh: '2013 全國電磁相容技術與實務研討會議程委員', en: 'Program committee, 2013 National EMC Technology Conference' },
    reviewJ(PIER3), examiner] },
];
