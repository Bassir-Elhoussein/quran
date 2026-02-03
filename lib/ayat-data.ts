export type Emotion = "anxious" | "happy" | "lost" | "heartbroken";

export interface Ayah {
  id: string;
  emotion: Emotion;
  surahName: string;
  surahNameArabic: string;
  ayahNumber: number;
  arabicText: string;
  translation: string;
}

export const ayatData: Ayah[] = [
  // Anxious
  {
    id: "anxious-1",
    emotion: "anxious",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 286,
    arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ",
    translation: "Allah does not burden a soul beyond that it can bear. It will have what it has earned and against it what it has committed."
  },
  {
    id: "anxious-2",
    emotion: "anxious",
    surahName: "Ash-Sharh",
    surahNameArabic: "الشرح",
    ayahNumber: 6,
    arabicText: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease."
  },
  {
    id: "anxious-3",
    emotion: "anxious",
    surahName: "At-Talaq",
    surahNameArabic: "الطلاق",
    ayahNumber: 3,
    arabicText: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    translation: "And whoever relies upon Allah – then He is sufficient for him."
  },
  {
    id: "anxious-4",
    emotion: "anxious",
    surahName: "Yunus",
    surahNameArabic: "يونس",
    ayahNumber: 62,
    arabicText: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    translation: "Unquestionably, for the allies of Allah there will be no fear concerning them, nor will they grieve."
  },
  {
    id: "anxious-5",
    emotion: "anxious",
    surahName: "Al-Imran",
    surahNameArabic: "آل عمران",
    ayahNumber: 139,
    arabicText: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ",
    translation: "So do not weaken and do not grieve, and you will be superior if you are believers."
  }, {
    id: "aanxious-1",
    emotion: "anxious",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 286,
    arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    translation: "Allah does not burden a soul beyond that it can bear."
  },
  {
    id: "aanxious-2",
    emotion: "anxious",
    surahName: "Ash-Sharh",
    surahNameArabic: "الشرح",
    ayahNumber: 6,
    arabicText: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease."
  },
  {
    id: "aanxious-3",
    emotion: "anxious",
    surahName: "Ar-Ra'd",
    surahNameArabic: "الرعد",
    ayahNumber: 28,
    arabicText: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    translation: "Surely in the remembrance of Allah do hearts find rest."
  },
  {
    id: "aanxious-4",
    emotion: "anxious",
    surahName: "At-Talaq",
    surahNameArabic: "الطلاق",
    ayahNumber: 3,
    arabicText: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    translation: "Whoever relies upon Allah – He is sufficient for him."
  },
  {
    id: "aanxious-5",
    emotion: "anxious",
    surahName: "Yunus",
    surahNameArabic: "يونس",
    ayahNumber: 62,
    arabicText: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ",
    translation: "Unquestionably, the allies of Allah will have no fear."
  },
  {
    id: "anxious-6",
    emotion: "anxious",
    surahName: "Al-Imran",
    surahNameArabic: "آل عمران",
    ayahNumber: 139,
    arabicText: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا",
    translation: "Do not weaken and do not grieve."
  },
  {
    id: "anxious-7",
    emotion: "anxious",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 153,
    arabicText: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with the patient."
  },
  {
    id: "anxious-8",
    emotion: "anxious",
    surahName: "Az-Zumar",
    surahNameArabic: "الزمر",
    ayahNumber: 36,
    arabicText: "أَلَيْسَ اللَّهُ بِكَافٍ عَبْدَهُ",
    translation: "Is Allah not sufficient for His servant?"
  },
  {
    id: "anxious-9",
    emotion: "anxious",
    surahName: "Al-Anfal",
    surahNameArabic: "الأنفال",
    ayahNumber: 30,
    arabicText: "وَاللَّهُ خَيْرُ الْمَاكِرِينَ",
    translation: "And Allah is the best of planners."
  },
  {
    id: "anxious-10",
    emotion: "anxious",
    surahName: "Al-Inshiqaq",
    surahNameArabic: "الانشقاق",
    ayahNumber: 6,
    arabicText: "إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا فَمُلَاقِيهِ",
    translation: "You are striving toward your Lord and will meet Him."
  },

  {
    id: "anxious-11",
    emotion: "anxious",
    surahName: "Hud",
    surahNameArabic: "هود",
    ayahNumber: 56,
    arabicText: "إِنِّي تَوَكَّلْتُ عَلَى اللَّهِ رَبِّي وَرَبِّكُم",
    translation: "I have relied upon Allah, my Lord and your Lord."
  },
  {
    id: "anxious-12",
    emotion: "anxious",
    surahName: "At-Tawbah",
    surahNameArabic: "التوبة",
    ayahNumber: 51,
    arabicText: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا",
    translation: "Nothing will happen to us except what Allah has decreed."
  },
  {
    id: "anxious-13",
    emotion: "anxious",
    surahName: "Al-Hadid",
    surahNameArabic: "الحديد",
    ayahNumber: 4,
    arabicText: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ",
    translation: "And He is with you wherever you are."
  },
  {
    id: "anxious-14",
    emotion: "anxious",
    surahName: "An-Nisa",
    surahNameArabic: "النساء",
    ayahNumber: 79,
    arabicText: "وَكَفَىٰ بِاللَّهِ حَفِيظًا",
    translation: "And Allah is sufficient as a Guardian."
  },
  {
    id: "anxious-15",
    emotion: "anxious",
    surahName: "Al-Ahzab",
    surahNameArabic: "الأحزاب",
    ayahNumber: 3,
    arabicText: "وَتَوَكَّلْ عَلَى اللَّهِ",
    translation: "And rely upon Allah."
  },

  {
    id: "anxious-16",
    emotion: "anxious",
    surahName: "Al-Fajr",
    surahNameArabic: "الفجر",
    ayahNumber: 27,
    arabicText: "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ",
    translation: "O reassured soul."
  },
  {
    id: "anxious-17",
    emotion: "anxious",
    surahName: "Qaf",
    surahNameArabic: "ق",
    ayahNumber: 16,
    arabicText: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
    translation: "We are closer to him than his jugular vein."
  },
  {
    id: "anxious-18",
    emotion: "anxious",
    surahName: "Al-Anbiya",
    surahNameArabic: "الأنبياء",
    ayahNumber: 87,
    arabicText: "لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ",
    translation: "There is no deity except You; exalted are You."
  },
  {
    id: "anxious-19",
    emotion: "anxious",
    surahName: "Ash-Shura",
    surahNameArabic: "الشورى",
    ayahNumber: 30,
    arabicText: "وَيَعْفُو عَن كَثِيرٍ",
    translation: "And He pardons much."
  },
  {
    id: "anxious-20",
    emotion: "anxious",
    surahName: "Al-Isra",
    surahNameArabic: "الإسراء",
    ayahNumber: 82,
    arabicText: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ",
    translation: "We send down of the Qur’an that which is healing."
  },

  {
    id: "anxious-21",
    emotion: "anxious",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 214,
    arabicText: "أَلَا إِنَّ نَصْرَ اللَّهِ قَرِيبٌ",
    translation: "Unquestionably, the help of Allah is near."
  },
  {
    id: "anxious-22",
    emotion: "anxious",
    surahName: "Al-Ma'idah",
    surahNameArabic: "المائدة",
    ayahNumber: 7,
    arabicText: "وَاتَّقُوا اللَّهَ",
    translation: "And fear Allah."
  },
  {
    id: "anxious-23",
    emotion: "anxious",
    surahName: "Al-Hujurat",
    surahNameArabic: "الحجرات",
    ayahNumber: 10,
    arabicText: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ",
    translation: "The believers are but brothers."
  },
  {
    id: "anxious-24",
    emotion: "anxious",
    surahName: "Al-Buruj",
    surahNameArabic: "البروج",
    ayahNumber: 20,
    arabicText: "وَاللَّهُ مِن وَرَائِهِم مُّحِيطٌ",
    translation: "And Allah encompasses them from behind."
  },
  {
    id: "anxious-25",
    emotion: "anxious",
    surahName: "Al-Kahf",
    surahNameArabic: "الكهف",
    ayahNumber: 10,
    arabicText: "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً",
    translation: "Our Lord, grant us mercy from Yourself."
  },

  {
    id: "anxious-26",
    emotion: "anxious",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 45,
    arabicText: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    translation: "Seek help through patience and prayer."
  },
  {
    id: "anxious-27",
    emotion: "anxious",
    surahName: "An-Nahl",
    surahNameArabic: "النحل",
    ayahNumber: 97,
    arabicText: "فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
    translation: "We will grant him a good life."
  },
  {
    id: "anxious-28",
    emotion: "anxious",
    surahName: "Al-An'am",
    surahNameArabic: "الأنعام",
    ayahNumber: 59,
    arabicText: "وَمَا تَسْقُطُ مِن وَرَقَةٍ إِلَّا يَعْلَمُهَا",
    translation: "Not a leaf falls but that He knows it."
  },
  {
    id: "anxious-29",
    emotion: "anxious",
    surahName: "Al-Mulk",
    surahNameArabic: "الملك",
    ayahNumber: 15,
    arabicText: "وَإِلَيْهِ النُّشُورُ",
    translation: "And to Him is the resurrection."
  },
  {
    id: "anxious-30",
    emotion: "anxious",
    surahName: "Al-Layl",
    surahNameArabic: "الليل",
    ayahNumber: 7,
    arabicText: "فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ",
    translation: "We will ease him toward ease."
  },

  {
    id: "anxious-31",
    emotion: "anxious",
    surahName: "Al-Inshirah",
    surahNameArabic: "الشرح",
    ayahNumber: 1,
    arabicText: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
    translation: "Did We not expand your chest for you?"
  },
  {
    id: "anxious-32",
    emotion: "anxious",
    surahName: "Al-Qasas",
    surahNameArabic: "القصص",
    ayahNumber: 24,
    arabicText: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    translation: "My Lord, I am in need of whatever good You send down to me."
  },
  {
    id: "anxious-33",
    emotion: "anxious",
    surahName: "Al-A'raf",
    surahNameArabic: "الأعراف",
    ayahNumber: 196,
    arabicText: "إِنَّ وَلِيِّيَ اللَّهُ",
    translation: "Indeed, my protector is Allah."
  },
  {
    id: "anxious-34",
    emotion: "anxious",
    surahName: "An-Najm",
    surahNameArabic: "النجم",
    ayahNumber: 42,
    arabicText: "وَأَنَّ إِلَىٰ رَبِّكَ الْمُنتَهَىٰ",
    translation: "And to your Lord is the final destination."
  },
  {
    id: "anxious-35",
    emotion: "anxious",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 257,
    arabicText: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا",
    translation: "Allah is the Protector of those who believe."
  },

  {
    id: "anxious-36",
    emotion: "anxious",
    surahName: "Al-Mujadila",
    surahNameArabic: "المجادلة",
    ayahNumber: 11,
    arabicText: "وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ",
    translation: "Allah is All-Aware of what you do."
  },
  {
    id: "anxious-37",
    emotion: "anxious",
    surahName: "At-Tin",
    surahNameArabic: "التين",
    ayahNumber: 4,
    arabicText: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
    translation: "We created man in the best form."
  },
  {
    id: "anxious-38",
    emotion: "anxious",
    surahName: "Al-Fil",
    surahNameArabic: "الفيل",
    ayahNumber: 5,
    arabicText: "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ",
    translation: "And He made them like eaten straw."
  },
  {
    id: "anxious-39",
    emotion: "anxious",
    surahName: "Al-Ikhlas",
    surahNameArabic: "الإخلاص",
    ayahNumber: 1,
    arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    translation: "Say: He is Allah, One."
  },
  {
    id: "anxious-40",
    emotion: "anxious",
    surahName: "Al-Falaq",
    surahNameArabic: "الفلق",
    ayahNumber: 1,
    arabicText: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
    translation: "Say: I seek refuge in the Lord of daybreak."
  },

  // Happy
  {
    id: "happyy-1",
    emotion: "happy",
    surahName: "Ad-Duha",
    surahNameArabic: "الضحى",
    ayahNumber: 11,
    arabicText: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
    translation: "And as for the blessing of your Lord, proclaim it."
  },
  {
    id: "happyy-2",
    emotion: "happy",
    surahName: "Ibrahim",
    surahNameArabic: "إبراهيم",
    ayahNumber: 7,
    arabicText: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
    translation: "If you are grateful, I will surely increase you in favor."
  },
  {
    id: "happyy-3",
    emotion: "happy",
    surahName: "Ar-Rahman",
    surahNameArabic: "الرحمن",
    ayahNumber: 13,
    arabicText: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    translation: "So which of the favors of your Lord would you deny?"
  },
  {
    id: "happyy-4",
    emotion: "happy",
    surahName: "An-Nahl",
    surahNameArabic: "النحل",
    ayahNumber: 18,
    arabicText: "وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا",
    translation: "And if you should count the favors of Allah, you could not enumerate them."
  },
  {
    id: "happyy-5",
    emotion: "happy",
    surahName: "Ar-Rum",
    surahNameArabic: "الروم",
    ayahNumber: 4,
    arabicText: "وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ بِنَصْرِ اللَّهِ",
    translation: "And that day the believers will rejoice in the victory of Allah."
  },
{
    id: "happy-1",
    emotion: "happy",
    surahName: "Ad-Duha",
    surahNameArabic: "الضحى",
    ayahNumber: 11,
    arabicText: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
    translation: "And as for the blessing of your Lord, proclaim it."
  },
  {
    id: "happy-2",
    emotion: "happy",
    surahName: "Ibrahim",
    surahNameArabic: "إبراهيم",
    ayahNumber: 7,
    arabicText: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
    translation: "If you are grateful, I will surely increase you."
  },
  {
    id: "happy-3",
    emotion: "happy",
    surahName: "Ar-Rahman",
    surahNameArabic: "الرحمن",
    ayahNumber: 13,
    arabicText: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    translation: "So which of the favors of your Lord would you deny?"
  },
  {
    id: "happy-4",
    emotion: "happy",
    surahName: "An-Nahl",
    surahNameArabic: "النحل",
    ayahNumber: 18,
    arabicText: "وَإِن تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا",
    translation: "If you count Allah’s blessings, you cannot enumerate them."
  },
  {
    id: "happy-5",
    emotion: "happy",
    surahName: "Ar-Rum",
    surahNameArabic: "الروم",
    ayahNumber: 4,
    arabicText: "وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ بِنَصْرِ اللَّهِ",
    translation: "On that day the believers will rejoice in Allah’s victory."
  },

  {
    id: "happy-6",
    emotion: "happy",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 152,
    arabicText: "فَاذْكُرُونِي أَذْكُرْكُمْ",
    translation: "Remember Me; I will remember you."
  },
  {
    id: "happy-7",
    emotion: "happy",
    surahName: "Yunus",
    surahNameArabic: "يونس",
    ayahNumber: 58,
    arabicText: "فَبِذَٰلِكَ فَلْيَفْرَحُوا",
    translation: "In that let them rejoice."
  },
  {
    id: "happy-8",
    emotion: "happy",
    surahName: "Al-Ma'idah",
    surahNameArabic: "المائدة",
    ayahNumber: 3,
    arabicText: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ",
    translation: "Today I have perfected your religion for you."
  },
  {
    id: "happy-9",
    emotion: "happy",
    surahName: "Az-Zukhruf",
    surahNameArabic: "الزخرف",
    ayahNumber: 32,
    arabicText: "وَرَفَعْنَا بَعْضَهُمْ فَوْقَ بَعْضٍ دَرَجَاتٍ",
    translation: "We raised some of them above others in rank."
  },
  {
    id: "happy-10",
    emotion: "happy",
    surahName: "Al-Qasas",
    surahNameArabic: "القصص",
    ayahNumber: 77,
    arabicText: "وَأَحْسِن كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ",
    translation: "And do good as Allah has done good to you."
  },

  {
    id: "happy-11",
    emotion: "happy",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 25,
    arabicText: "وَبَشِّرِ الَّذِينَ آمَنُوا",
    translation: "Give good tidings to those who believe."
  },
  {
    id: "happy-12",
    emotion: "happy",
    surahName: "Ash-Sharh",
    surahNameArabic: "الشرح",
    ayahNumber: 8,
    arabicText: "وَإِلَىٰ رَبِّكَ فَارْغَب",
    translation: "And to your Lord direct your longing."
  },
  {
    id: "happy-13",
    emotion: "happy",
    surahName: "Al-A'la",
    surahNameArabic: "الأعلى",
    ayahNumber: 17,
    arabicText: "وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ",
    translation: "The Hereafter is better and everlasting."
  },
  {
    id: "happy-14",
    emotion: "happy",
    surahName: "Al-Hajj",
    surahNameArabic: "الحج",
    ayahNumber: 77,
    arabicText: "وَافْعَلُوا الْخَيْرَ",
    translation: "And do good."
  },
  {
    id: "happy-15",
    emotion: "happy",
    surahName: "Al-Fath",
    surahNameArabic: "الفتح",
    ayahNumber: 4,
    arabicText: "لِيَزْدَادُوا إِيمَانًا مَّعَ إِيمَانِهِمْ",
    translation: "That they may increase in faith upon faith."
  },

  {
    id: "happy-16",
    emotion: "happy",
    surahName: "At-Tawbah",
    surahNameArabic: "التوبة",
    ayahNumber: 72,
    arabicText: "وَرِضْوَانٌ مِّنَ اللَّهِ أَكْبَرُ",
    translation: "And Allah’s pleasure is greater."
  },
  {
    id: "happy-17",
    emotion: "happy",
    surahName: "Al-Insan",
    surahNameArabic: "الإنسان",
    ayahNumber: 11,
    arabicText: "وَلَقَّاهُمْ نَضْرَةً وَسُرُورًا",
    translation: "He will give them radiance and joy."
  },
  {
    id: "happy-18",
    emotion: "happy",
    surahName: "Al-Layl",
    surahNameArabic: "الليل",
    ayahNumber: 21,
    arabicText: "وَلَسَوْفَ يَرْضَىٰ",
    translation: "And he will surely be satisfied."
  },
  {
    id: "happy-19",
    emotion: "happy",
    surahName: "Al-Ahzab",
    surahNameArabic: "الأحزاب",
    ayahNumber: 47,
    arabicText: "وَبَشِّرِ الْمُؤْمِنِينَ",
    translation: "Give glad tidings to the believers."
  },
  {
    id: "happy-20",
    emotion: "happy",
    surahName: "Al-Kahf",
    surahNameArabic: "الكهف",
    ayahNumber: 46,
    arabicText: "وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ",
    translation: "Enduring good deeds are better."
  },

  {
    id: "happy-21",
    emotion: "happy",
    surahName: "Al-Fajr",
    surahNameArabic: "الفجر",
    ayahNumber: 28,
    arabicText: "رَاضِيَةً مَّرْضِيَّةً",
    translation: "Well-pleased and pleasing."
  },
  {
    id: "happy-22",
    emotion: "happy",
    surahName: "Al-Qamar",
    surahNameArabic: "القمر",
    ayahNumber: 55,
    arabicText: "فِي مَقْعَدِ صِدْقٍ",
    translation: "In a seat of honor."
  },
  {
    id: "happy-23",
    emotion: "happy",
    surahName: "An-Nur",
    surahNameArabic: "النور",
    ayahNumber: 38,
    arabicText: "لِيَجْزِيَهُمُ اللَّهُ أَحْسَنَ مَا عَمِلُوا",
    translation: "That Allah may reward them for the best of what they did."
  },
  {
    id: "happy-24",
    emotion: "happy",
    surahName: "Al-Buruj",
    surahNameArabic: "البروج",
    ayahNumber: 11,
    arabicText: "ذَٰلِكَ الْفَوْزُ الْكَبِيرُ",
    translation: "That is the great success."
  },
  {
    id: "happy-25",
    emotion: "happy",
    surahName: "Al-Hijr",
    surahNameArabic: "الحجر",
    ayahNumber: 99,
    arabicText: "وَاعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ الْيَقِينُ",
    translation: "Worship your Lord until certainty comes."
  },

  {
    id: "happy-26",
    emotion: "happy",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 38,
    arabicText: "فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    translation: "They will have no fear, nor will they grieve."
  },
  {
    id: "happy-27",
    emotion: "happy",
    surahName: "Al-Anfal",
    surahNameArabic: "الأنفال",
    ayahNumber: 29,
    arabicText: "يَجْعَل لَّكُمْ نُورًا",
    translation: "He will grant you light."
  },
  {
    id: "happy-28",
    emotion: "happy",
    surahName: "Al-A'raf",
    surahNameArabic: "الأعراف",
    ayahNumber: 96,
    arabicText: "لَفَتَحْنَا عَلَيْهِم بَرَكَاتٍ",
    translation: "We would have opened blessings for them."
  },
  {
    id: "happy-29",
    emotion: "happy",
    surahName: "Al-Inshiqaq",
    surahNameArabic: "الانشقاق",
    ayahNumber: 9,
    arabicText: "وَيَنقَلِبُ إِلَىٰ أَهْلِهِ مَسْرُورًا",
    translation: "He will return to his people joyful."
  },
  {
    id: "happy-30",
    emotion: "happy",
    surahName: "At-Tur",
    surahNameArabic: "الطور",
    ayahNumber: 18,
    arabicText: "فَاكِهِينَ بِمَا آتَاهُمْ رَبُّهُمْ",
    translation: "Enjoying what their Lord has given them."
  },

  {
    id: "happy-31",
    emotion: "happy",
    surahName: "Al-Muzzammil",
    surahNameArabic: "المزمل",
    ayahNumber: 20,
    arabicText: "وَاذْكُرُوا اسْمَ اللَّهِ",
    translation: "Remember the name of Allah."
  },
  {
    id: "happy-32",
    emotion: "happy",
    surahName: "Al-Qasas",
    surahNameArabic: "القصص",
    ayahNumber: 84,
    arabicText: "مَن جَاءَ بِالْحَسَنَةِ فَلَهُ خَيْرٌ",
    translation: "Whoever comes with good will have better."
  },
  {
    id: "happy-33",
    emotion: "happy",
    surahName: "Al-Mu'minun",
    surahNameArabic: "المؤمنون",
    ayahNumber: 1,
    arabicText: "قَدْ أَفْلَحَ الْمُؤْمِنُونَ",
    translation: "The believers have succeeded."
  },
  {
    id: "happy-34",
    emotion: "happy",
    surahName: "An-Naba",
    surahNameArabic: "النبأ",
    ayahNumber: 31,
    arabicText: "إِنَّ لِلْمُتَّقِينَ مَفَازًا",
    translation: "Indeed, for the righteous is success."
  },
  {
    id: "happy-35",
    emotion: "happy",
    surahName: "Al-Hadid",
    surahNameArabic: "الحديد",
    ayahNumber: 21,
    arabicText: "سَابِقُوا إِلَىٰ مَغْفِرَةٍ",
    translation: "Race toward forgiveness."
  },

  {
    id: "happy-36",
    emotion: "happy",
    surahName: "Al-Mulk",
    surahNameArabic: "الملك",
    ayahNumber: 12,
    arabicText: "لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ",
    translation: "For them is forgiveness and great reward."
  },
  {
    id: "happy-37",
    emotion: "happy",
    surahName: "Al-Ahzab",
    surahNameArabic: "الأحزاب",
    ayahNumber: 71,
    arabicText: "وَيُدْخِلْكُمْ جَنَّاتٍ",
    translation: "He will admit you into gardens."
  },
  {
    id: "happy-38",
    emotion: "happy",
    surahName: "At-Tin",
    surahNameArabic: "التين",
    ayahNumber: 6,
    arabicText: "فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
    translation: "They will have an unfailing reward."
  },
  {
    id: "happy-39",
    emotion: "happy",
    surahName: "Al-Qadr",
    surahNameArabic: "القدر",
    ayahNumber: 5,
    arabicText: "سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
    translation: "Peace it is until dawn."
  },
  {
    id: "happy-40",
    emotion: "happy",
    surahName: "An-Nasr",
    surahNameArabic: "النصر",
    ayahNumber: 3,
    arabicText: "فَسَبِّحْ بِحَمْدِ رَبِّكَ",
    translation: "So glorify your Lord with praise."
  },
  // Lost
  {
    id: "lostt-1",
    emotion: "lost",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 186,
    arabicText: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    translation: "And when My servants ask you concerning Me – indeed I am near. I respond to the invocation of the supplicant when he calls upon Me."
  },
  {
    id: "lostt-2",
    emotion: "lost",
    surahName: "Ad-Duha",
    surahNameArabic: "الضحى",
    ayahNumber: 7,
    arabicText: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ",
    translation: "And He found you lost and guided you."
  },
  {
    id: "lostt-3",
    emotion: "lost",
    surahName: "Al-Ankabut",
    surahNameArabic: "العنكبوت",
    ayahNumber: 69,
    arabicText: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
    translation: "And those who strive for Us – We will surely guide them to Our ways."
  },
  {
    id: "lostt-4",
    emotion: "lost",
    surahName: "At-Tawbah",
    surahNameArabic: "التوبة",
    ayahNumber: 51,
    arabicText: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا",
    translation: "Say, 'Never will we be struck except by what Allah has decreed for us; He is our protector.'"
  },
  {
    id: "lostt-5",
    emotion: "lost",
    surahName: "Al-Furqan",
    surahNameArabic: "الفرقان",
    ayahNumber: 70,
    arabicText: "إِلَّا مَن تَابَ وَآمَنَ وَعَمِلَ عَمَلًا صَالِحًا فَأُولَٰئِكَ يُبَدِّلُ اللَّهُ سَيِّئَاتِهِمْ حَسَنَاتٍ",
    translation: "Except for those who repent, believe and do righteous work. For them Allah will replace their evil deeds with good."
  },
{
    id: "lost-1",
    emotion: "lost",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 186,
    arabicText: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    translation: "And when My servants ask you concerning Me – indeed I am near. I respond to the invocation of the supplicant when he calls upon Me."
  },
  {
    id: "lost-2",
    emotion: "lost",
    surahName: "Ad-Duha",
    surahNameArabic: "الضحى",
    ayahNumber: 7,
    arabicText: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ",
    translation: "And He found you lost and guided you."
  },
  {
    id: "lost-3",
    emotion: "lost",
    surahName: "Al-Ankabut",
    surahNameArabic: "العنكبوت",
    ayahNumber: 69,
    arabicText: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
    translation: "And those who strive for Us – We will surely guide them to Our ways."
  },
  {
    id: "lost-4",
    emotion: "lost",
    surahName: "At-Tawbah",
    surahNameArabic: "التوبة",
    ayahNumber: 51,
    arabicText: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا",
    translation: "Say, 'Never will we be struck except by what Allah has decreed for us; He is our protector.'"
  },
  {
    id: "lost-5",
    emotion: "lost",
    surahName: "Al-Furqan",
    surahNameArabic: "الفرقان",
    ayahNumber: 70,
    arabicText: "إِلَّا مَن تَابَ وَآمَنَ وَعَمِلَ عَمَلًا صَالِحًا فَأُولَٰئِكَ يُبَدِّلُ اللَّهُ سَيِّئَاتِهِمْ حَسَنَاتٍ",
    translation: "Except for those who repent, believe and do righteous work. For them Allah will replace their evil deeds with good."
  },

  {
    id: "lost-6",
    emotion: "lost",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 45,
    arabicText: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    translation: "Seek help through patience and prayer."
  },
  {
    id: "lost-7",
    emotion: "lost",
    surahName: "Al-Imran",
    surahNameArabic: "آل عمران",
    ayahNumber: 159,
    arabicText: "فَاعْفُ عَنْهُمْ وَاسْتَغْفِرْ لَهُمْ وَشَاوِرْهُمْ",
    translation: "So pardon them, ask forgiveness for them, and consult them in affairs."
  },
  {
    id: "lost-8",
    emotion: "lost",
    surahName: "Al-Isra",
    surahNameArabic: "الإسراء",
    ayahNumber: 9,
    arabicText: "إِنَّ رَبَّكَ يَسْتَخْلِفُ مَنْ يَشَاءُ",
    translation: "Indeed, your Lord will give succession to whomever He wills."
  },
  {
    id: "lost-9",
    emotion: "lost",
    surahName: "Ash-Shu'ara",
    surahNameArabic: "الشعراء",
    ayahNumber: 80,
    arabicText: "فَاصْبِرْ صَبْرًا جَمِيلًا",
    translation: "So be patient with a beautiful patience."
  },
  {
    id: "lost-10",
    emotion: "lost",
    surahName: "Al-An'am",
    surahNameArabic: "الأنعام",
    ayahNumber: 17,
    arabicText: "وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    translation: "And He is over all things competent."
  },

  {
    id: "lost-11",
    emotion: "lost",
    surahName: "Al-A'raf",
    surahNameArabic: "الأعراف",
    ayahNumber: 55,
    arabicText: "وَادْعُونِي أَسْتَجِبْ لَكُمْ",
    translation: "Call upon Me; I will respond to you."
  },
  {
    id: "lost-12",
    emotion: "lost",
    surahName: "Hud",
    surahNameArabic: "هود",
    ayahNumber: 88,
    arabicText: "إِنَّ رَبِّي وَسِعَ كُلَّ شَيْءٍ عِلْمًا",
    translation: "Indeed, my Lord encompasses all things in knowledge."
  },
  {
    id: "lost-13",
    emotion: "lost",
    surahName: "Al-Kahf",
    surahNameArabic: "الكهف",
    ayahNumber: 10,
    arabicText: "وَرَبُّكَ يَحْفَظُكُمْ",
    translation: "And your Lord will protect you."
  },
  {
    id: "lost-14",
    emotion: "lost",
    surahName: "Ash-Shura",
    surahNameArabic: "الشورى",
    ayahNumber: 43,
    arabicText: "وَتَوَكَّلْ عَلَى اللَّهِ",
    translation: "And rely upon Allah."
  },
  {
    id: "lost-15",
    emotion: "lost",
    surahName: "Al-Mumtahanah",
    surahNameArabic: "الممتحنة",
    ayahNumber: 13,
    arabicText: "وَاللَّهُ كَانَ عَلَيْكُمْ رَقِيبًا",
    translation: "And Allah is ever watchful over you."
  },

  {
    id: "lost-16",
    emotion: "lost",
    surahName: "At-Talaq",
    surahNameArabic: "الطلاق",
    ayahNumber: 2,
    arabicText: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَهُ مَخْرَجًا",
    translation: "And whoever fears Allah, He will make for him a way out."
  },
  {
    id: "lost-17",
    emotion: "lost",
    surahName: "Az-Zumar",
    surahNameArabic: "الزمر",
    ayahNumber: 53,
    arabicText: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا",
    translation: "Say, 'O My servants who have transgressed, do not despair.'"
  },
  {
    id: "lost-18",
    emotion: "lost",
    surahName: "Al-Hadid",
    surahNameArabic: "الحديد",
    ayahNumber: 21,
    arabicText: "فَاسْتَبِقُوا الْخَيْرَاتِ",
    translation: "So compete in good deeds."
  },
  {
    id: "lost-19",
    emotion: "lost",
    surahName: "Ash-Sharh",
    surahNameArabic: "الشرح",
    ayahNumber: 5,
    arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease."
  },
  {
    id: "lost-20",
    emotion: "lost",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 216,
    arabicText: "وَعَسَى أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ",
    translation: "Perhaps you dislike a thing and it is good for you."
  },

  {
    id: "lost-21",
    emotion: "lost",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 153,
    arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    translation: "O you who believe, seek help through patience and prayer."
  },
  {
    id: "lost-22",
    emotion: "lost",
    surahName: "Al-Imran",
    surahNameArabic: "آل عمران",
    ayahNumber: 200,
    arabicText: "وَاصْبِرُوا وَصَابِرُوا",
    translation: "Be patient and endure patiently."
  },
  {
    id: "lost-23",
    emotion: "lost",
    surahName: "Al-Anfal",
    surahNameArabic: "الأنفال",
    ayahNumber: 46,
    arabicText: "وَتَوَكَّلُوا عَلَى اللَّهِ",
    translation: "And rely upon Allah."
  },
  {
    id: "lost-24",
    emotion: "lost",
    surahName: "Al-Kahf",
    surahNameArabic: "الكهف",
    ayahNumber: 10,
    arabicText: "إِنَّ رَبَّكَ هُوَ الْحَكِيمُ الْعَلِيمُ",
    translation: "Indeed, your Lord is the Wise, All-Knowing."
  },
  {
    id: "lost-25",
    emotion: "lost",
    surahName: "Al-A'raf",
    surahNameArabic: "الأعراف",
    ayahNumber: 89,
    arabicText: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    translation: "And whoever relies upon Allah – He is sufficient for him."
  },

  {
    id: "lost-26",
    emotion: "lost",
    surahName: "Yunus",
    surahNameArabic: "يونس",
    ayahNumber: 107,
    arabicText: "فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ",
    translation: "So We responded to him and saved him."
  },
  {
    id: "lost-27",
    emotion: "lost",
    surahName: "Hud",
    surahNameArabic: "هود",
    ayahNumber: 6,
    arabicText: "وَمَا رَبُّكَ بِغَافِلٍ عَمَّا تَعْمَلُونَ",
    translation: "And your Lord is not unaware of what you do."
  },
  {
    id: "lost-28",
    emotion: "lost",
    surahName: "Al-Fath",
    surahNameArabic: "الفتح",
    ayahNumber: 29,
    arabicText: "مُؤْمِنُونَ وَمُسْلِمُونَ",
    translation: "Believers and submissive to Allah."
  },
  {
    id: "lost-29",
    emotion: "lost",
    surahName: "Az-Zumar",
    surahNameArabic: "الزمر",
    ayahNumber: 22,
    arabicText: "وَمَن يَتَّقِ اللَّهَ يَهْدِ قَلْبَهُ",
    translation: "And whoever fears Allah – He will guide his heart."
  },
  {
    id: "lost-30",
    emotion: "lost",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 257,
    arabicText: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا",
    translation: "Allah is the protector of those who believe."
  },

  {
    id: "lost-31",
    emotion: "lost",
    surahName: "Al-Imran",
    surahNameArabic: "آل عمران",
    ayahNumber: 173,
    arabicText: "اللَّهُ كَافٍ لَنَا",
    translation: "Allah is sufficient for us."
  },
  {
    id: "lost-32",
    emotion: "lost",
    surahName: "Al-Ankabut",
    surahNameArabic: "العنكبوت",
    ayahNumber: 45,
    arabicText: "وَسَيَعْلَمُ الَّذِينَ ظَلَمُوا أَيَّ مُنقَلَبٍ يَنقَلِبُونَ",
    translation: "And those who do wrong will know to what place they will return."
  },
  {
    id: "lost-33",
    emotion: "lost",
    surahName: "At-Tawbah",
    surahNameArabic: "التوبة",
    ayahNumber: 51,
    arabicText: "هُوَ مَوْلَانَا",
    translation: "He is our protector."
  },
  {
    id: "lost-34",
    emotion: "lost",
    surahName: "Yunus",
    surahNameArabic: "يونس",
    ayahNumber: 62,
    arabicText: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    translation: "Unquestionably, the allies of Allah will have no fear nor will they grieve."
  },
  {
    id: "lost-35",
    emotion: "lost",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 150,
    arabicText: "فَاتَّقُوا اللَّهَ",
    translation: "So fear Allah."
  },

  {
    id: "lost-36",
    emotion: "lost",
    surahName: "Al-A'raf",
    surahNameArabic: "الأعراف",
    ayahNumber: 35,
    arabicText: "فَإِنَّ رَبَّكَ غَفُورٌ رَحِيمٌ",
    translation: "Indeed, your Lord is Forgiving, Merciful."
  },
  {
    id: "lost-37",
    emotion: "lost",
    surahName: "Al-Ma'idah",
    surahNameArabic: "المائدة",
    ayahNumber: 11,
    arabicText: "فَاتَّقُوا اللَّهَ",
    translation: "So fear Allah."
  },
  {
    id: "lost-38",
    emotion: "lost",
    surahName: "Al-Hajj",
    surahNameArabic: "الحج",
    ayahNumber: 78,
    arabicText: "وَاسْتَغْفِرُوا رَبَّكُمْ",
    translation: "And ask forgiveness of your Lord."
  },
  {
    id: "lost-39",
    emotion: "lost",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 286,
    arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    translation: "Allah does not burden a soul beyond what it can bear."
  },
  {
    id: "lost-40",
    emotion: "lost",
    surahName: "Ash-Sharh",
    surahNameArabic: "الشرح",
    ayahNumber: 6,
    arabicText: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease."
  },
  // Heartbroken
  {
    id: "heartbrokenn-1",
    emotion: "heartbroken",
    surahName: "Ash-Sharh",
    surahNameArabic: "الشرح",
    ayahNumber: 5,
    arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship will be ease."
  },
  {
    id: "heartbrokenn-2",
    emotion: "heartbroken",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 216,
    arabicText: "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ",
    translation: "Perhaps you hate a thing and it is good for you."
  },
  {
    id: "heartbrokenn-3",
    emotion: "heartbroken",
    surahName: "Az-Zumar",
    surahNameArabic: "الزمر",
    ayahNumber: 53,
    arabicText: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
    translation: "Say, 'O My servants who have transgressed against themselves, do not despair of the mercy of Allah.'"
  },
  {
    id: "heartbrokenn-4",
    emotion: "heartbroken",
    surahName: "Yusuf",
    surahNameArabic: "يوسف",
    ayahNumber: 87,
    arabicText: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ ۖ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ",
    translation: "And despair not of relief from Allah. Indeed, no one despairs of relief from Allah except the disbelieving people."
  },
  {
    id: "heartbrokenn-5",
    emotion: "heartbroken",
    surahName: "Al-Hadid",
    surahNameArabic: "الحديد",
    ayahNumber: 22,
    arabicText: "مَا أَصَابَ مِن مُّصِيبَةٍ فِي الْأَرْضِ وَلَا فِي أَنفُسِكُمْ إِلَّا فِي كِتَابٍ مِّن قَبْلِ أَن نَّبْرَأَهَا",
    translation: "No disaster strikes upon the earth or among yourselves except that it is in a register before We bring it into being."
  },
  {
    id: "heartbroken-1",
    emotion: "heartbroken",
    surahName: "Ash-Sharh",
    surahNameArabic: "الشرح",
    ayahNumber: 5,
    arabicText: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship will be ease."
  },
  {
    id: "heartbroken-2",
    emotion: "heartbroken",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 216,
    arabicText: "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ",
    translation: "Perhaps you hate a thing and it is good for you."
  },
  {
    id: "heartbroken-3",
    emotion: "heartbroken",
    surahName: "Az-Zumar",
    surahNameArabic: "الزمر",
    ayahNumber: 53,
    arabicText: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
    translation: "Say, 'O My servants who have transgressed against themselves, do not despair of the mercy of Allah.'"
  },
  {
    id: "heartbroken-4",
    emotion: "heartbroken",
    surahName: "Yusuf",
    surahNameArabic: "يوسف",
    ayahNumber: 87,
    arabicText: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ ۖ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ",
    translation: "And despair not of relief from Allah. Indeed, no one despairs of relief from Allah except the disbelieving people."
  },
  {
    id: "heartbroken-5",
    emotion: "heartbroken",
    surahName: "Al-Hadid",
    surahNameArabic: "الحديد",
    ayahNumber: 22,
    arabicText: "مَا أَصَابَ مِن مُّصِيبَةٍ فِي الْأَرْضِ وَلَا فِي أَنفُسِكُمْ إِلَّا فِي كِتَابٍ مِّن قَبْلِ أَن نَّبْرَأَهَا",
    translation: "No disaster strikes upon the earth or among yourselves except that it is in a register before We bring it into being."
  },

  {
    id: "heartbroken-6",
    emotion: "heartbroken",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 286,
    arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    translation: "Allah does not burden a soul beyond that it can bear."
  },
  {
    id: "heartbroken-7",
    emotion: "heartbroken",
    surahName: "At-Tawbah",
    surahNameArabic: "التوبة",
    ayahNumber: 51,
    arabicText: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا",
    translation: "Say, 'Never will we be struck except by what Allah has decreed for us.'"
  },
  {
    id: "heartbroken-8",
    emotion: "heartbroken",
    surahName: "Al-Imran",
    surahNameArabic: "آل عمران",
    ayahNumber: 139,
    arabicText: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ",
    translation: "So do not weaken and do not grieve, and you will be superior if you are believers."
  },
  {
    id: "heartbroken-9",
    emotion: "heartbroken",
    surahName: "Al-Ankabut",
    surahNameArabic: "العنكبوت",
    ayahNumber: 69,
    arabicText: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
    translation: "And those who strive for Us – We will surely guide them to Our ways."
  },
  {
    id: "heartbroken-10",
    emotion: "heartbroken",
    surahName: "Ash-Sharh",
    surahNameArabic: "الشرح",
    ayahNumber: 6,
    arabicText: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease."
  },

  {
    id: "heartbroken-11",
    emotion: "heartbroken",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 153,
    arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    translation: "O you who believe, seek help through patience and prayer."
  },
  {
    id: "heartbroken-12",
    emotion: "heartbroken",
    surahName: "Az-Zumar",
    surahNameArabic: "الزمر",
    ayahNumber: 22,
    arabicText: "وَمَن يَتَّقِ اللَّهَ يَهْدِ قَلْبَهُ",
    translation: "And whoever fears Allah – He will guide his heart."
  },
  {
    id: "heartbroken-13",
    emotion: "heartbroken",
    surahName: "Al-Hadid",
    surahNameArabic: "الحديد",
    ayahNumber: 21,
    arabicText: "فَاسْتَبِقُوا الْخَيْرَاتِ",
    translation: "So compete in good deeds."
  },
  {
    id: "heartbroken-14",
    emotion: "heartbroken",
    surahName: "Al-A'raf",
    surahNameArabic: "الأعراف",
    ayahNumber: 55,
    arabicText: "وَادْعُونِي أَسْتَجِبْ لَكُمْ",
    translation: "Call upon Me; I will respond to you."
  },
  {
    id: "heartbroken-15",
    emotion: "heartbroken",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 45,
    arabicText: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    translation: "Seek help through patience and prayer."
  },

  {
    id: "heartbroken-16",
    emotion: "heartbroken",
    surahName: "Hud",
    surahNameArabic: "هود",
    ayahNumber: 6,
    arabicText: "وَمَا رَبُّكَ بِغَافِلٍ عَمَّا تَعْمَلُونَ",
    translation: "And your Lord is not unaware of what you do."
  },
  {
    id: "heartbroken-17",
    emotion: "heartbroken",
    surahName: "Al-Kahf",
    surahNameArabic: "الكهف",
    ayahNumber: 10,
    arabicText: "وَرَبُّكَ يَحْفَظُكُمْ",
    translation: "And your Lord will protect you."
  },
  {
    id: "heartbroken-18",
    emotion: "heartbroken",
    surahName: "Ash-Shura",
    surahNameArabic: "الشورى",
    ayahNumber: 43,
    arabicText: "وَتَوَكَّلْ عَلَى اللَّهِ",
    translation: "And rely upon Allah."
  },
  {
    id: "heartbroken-19",
    emotion: "heartbroken",
    surahName: "Al-Anfal",
    surahNameArabic: "الأنفال",
    ayahNumber: 46,
    arabicText: "وَتَوَكَّلُوا عَلَى اللَّهِ",
    translation: "And rely upon Allah."
  },
  {
    id: "heartbroken-20",
    emotion: "heartbroken",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 257,
    arabicText: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا",
    translation: "Allah is the protector of those who believe."
  },

  {
    id: "heartbroken-21",
    emotion: "heartbroken",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 150,
    arabicText: "فَاتَّقُوا اللَّهَ",
    translation: "So fear Allah."
  },
  {
    id: "heartbroken-22",
    emotion: "heartbroken",
    surahName: "Al-A'raf",
    surahNameArabic: "الأعراف",
    ayahNumber: 35,
    arabicText: "فَإِنَّ رَبَّكَ غَفُورٌ رَحِيمٌ",
    translation: "Indeed, your Lord is Forgiving, Merciful."
  },
  {
    id: "heartbroken-23",
    emotion: "heartbroken",
    surahName: "Al-Ma'idah",
    surahNameArabic: "المائدة",
    ayahNumber: 11,
    arabicText: "فَاتَّقُوا اللَّهَ",
    translation: "So fear Allah."
  },
  {
    id: "heartbroken-24",
    emotion: "heartbroken",
    surahName: "Al-Hajj",
    surahNameArabic: "الحج",
    ayahNumber: 78,
    arabicText: "وَاسْتَغْفِرُوا رَبَّكُمْ",
    translation: "And ask forgiveness of your Lord."
  },
  {
    id: "heartbroken-25",
    emotion: "heartbroken",
    surahName: "Yunus",
    surahNameArabic: "يونس",
    ayahNumber: 107,
    arabicText: "فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ",
    translation: "So We responded to him and saved him."
  },

  {
    id: "heartbroken-26",
    emotion: "heartbroken",
    surahName: "Al-Fath",
    surahNameArabic: "الفتح",
    ayahNumber: 29,
    arabicText: "مُؤْمِنُونَ وَمُسْلِمُونَ",
    translation: "Believers and submissive to Allah."
  },
  {
    id: "heartbroken-27",
    emotion: "heartbroken",
    surahName: "Az-Zumar",
    surahNameArabic: "الزمر",
    ayahNumber: 53,
    arabicText: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا لَا تَقْنَطُوا",
    translation: "Say, 'O My servants who have transgressed, do not despair.'"
  },
  {
    id: "heartbroken-28",
    emotion: "heartbroken",
    surahName: "Al-Hadid",
    surahNameArabic: "الحديد",
    ayahNumber: 21,
    arabicText: "فَاسْتَبِقُوا الْخَيْرَاتِ",
    translation: "So compete in good deeds."
  },
  {
    id: "heartbroken-29",
    emotion: "heartbroken",
    surahName: "Al-Ankabut",
    surahNameArabic: "العنكبوت",
    ayahNumber: 69,
    arabicText: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
    translation: "And those who strive for Us – We will surely guide them to Our ways."
  },
  {
    id: "heartbroken-30",
    emotion: "heartbroken",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 286,
    arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    translation: "Allah does not burden a soul beyond that it can bear."
  },

  {
    id: "heartbroken-31",
    emotion: "heartbroken",
    surahName: "Ash-Sharh",
    surahNameArabic: "الشرح",
    ayahNumber: 6,
    arabicText: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Indeed, with hardship comes ease."
  },
  {
    id: "heartbroken-32",
    emotion: "heartbroken",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 153,
    arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    translation: "O you who believe, seek help through patience and prayer."
  },
  {
    id: "heartbroken-33",
    emotion: "heartbroken",
    surahName: "Al-A'raf",
    surahNameArabic: "الأعراف",
    ayahNumber: 89,
    arabicText: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    translation: "And whoever relies upon Allah – He is sufficient for him."
  },
  {
    id: "heartbroken-34",
    emotion: "heartbroken",
    surahName: "Yunus",
    surahNameArabic: "يونس",
    ayahNumber: 62,
    arabicText: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    translation: "Unquestionably, the allies of Allah will have no fear nor will they grieve."
  },
  {
    id: "heartbroken-35",
    emotion: "heartbroken",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 150,
    arabicText: "فَاتَّقُوا اللَّهَ",
    translation: "So fear Allah."
  },
  {
    id: "heartbroken-36",
    emotion: "heartbroken",
    surahName: "Al-A'raf",
    surahNameArabic: "الأعراف",
    ayahNumber: 35,
    arabicText: "فَإِنَّ رَبَّكَ غَفُورٌ رَحِيمٌ",
    translation: "Indeed, your Lord is Forgiving, Merciful."
  },
  {
    id: "heartbroken-37",
    emotion: "heartbroken",
    surahName: "Al-Ma'idah",
    surahNameArabic: "المائدة",
    ayahNumber: 11,
    arabicText: "فَاتَّقُوا اللَّهَ",
    translation: "So fear Allah."
  },
  {
    id: "heartbroken-38",
    emotion: "heartbroken",
    surahName: "Al-Hajj",
    surahNameArabic: "الحج",
    ayahNumber: 78,
    arabicText: "وَاسْتَغْفِرُوا رَبَّكُمْ",
    translation: "And ask forgiveness of your Lord."
  },
  {
    id: "heartbroken-39",
    emotion: "heartbroken",
    surahName: "Yunus",
    surahNameArabic: "يونس",
    ayahNumber: 107,
    arabicText: "فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ",
    translation: "So We responded to him and saved him."
  },
  {
    id: "heartbroken-40",
    emotion: "heartbroken",
    surahName: "Al-Baqarah",
    surahNameArabic: "البقرة",
    ayahNumber: 286,
    arabicText: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    translation: "Allah does not burden a soul beyond what it can bear."
  }
];

export const emotionConfig: Record<Emotion, { label: string; labelArabic: string; description: string; icon: string }> = {
  anxious: {
    label: "Anxious",
    labelArabic: "قَلِق",
    description: "Find peace and tranquility",
    icon: "🌿"
  },
  happy: {
    label: "Happy",
    labelArabic: "سَعيد",
    description: "Express gratitude and joy",
    icon: "✨"
  },
  lost: {
    label: "Lost",
    labelArabic: "حَائِر",
    description: "Seek guidance and direction",
    icon: "🧭"
  },
  heartbroken: {
    label: "Heartbroken",
    labelArabic: "مُنكَسِر",
    description: "Find comfort and healing",
    icon: "💔"
  }
};

export function getAyatByEmotion(emotion: Emotion): Ayah[] {
  return ayatData.filter(ayah => ayah.emotion === emotion);
}
