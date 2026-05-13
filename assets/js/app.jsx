const BioDataComponent = () => {
            const cvCacheVersion = (typeof window !== 'undefined' && window.bbdMahbubCvCacheVersion)
                ? window.bbdMahbubCvCacheVersion
                : Math.floor(Date.now() / (2 * 60 * 60 * 1000));
            const withCvCacheVersion = (src) => `${src}${src.includes('?') ? '&' : '?'}v=${cvCacheVersion}`;
            const iconProfile = String.fromCodePoint(0x1F464);
            const iconFamily = String.fromCodePoint(0x1F46A);
            const iconEducation = String.fromCodePoint(0x1F393);
            const iconWork = String.fromCodePoint(0x1F4BC);
            const iconLanguage = String.fromCodePoint(0x1F310);
            const iconBooks = String.fromCodePoint(0x1F4DA);
            const iconMosque = String.fromCodePoint(0x1F54C);
            const iconHeartSparkle = String.fromCodePoint(0x1F495);
            const iconKaaba = String.fromCodePoint(0x1F54B);
            const iconPrayerHands = String.fromCodePoint(0x1F932);
            const iconMapPin = String.fromCodePoint(0x1F4CD);
            const iconIslamicBride = String.fromCodePoint(0x1F9D5);
            const dividerOrnament = '\u2726 \u25C6 \u2726';
            const popupBismillah = '\u0628\u0633\u0645\u0020\u0627\u0644\u0644\u0647\u0020\u0627\u0644\u0631\u062D\u0645\u0646\u0020\u0627\u0644\u0631\u062D\u064A\u0645';
            const popupDarud = '\u0627\u0644\u0644\u0647\u0645\u0020\u0635\u0644\u0020\u0648\u0633\u0644\u0645\u0020\u0639\u0644\u0649\u0020\u0633\u064A\u062F\u0646\u0627\u0020\u0645\u062D\u0645\u062F\u0020\ufdfa';
            const popupTaawuz = '\u0623\u064e\u0639\u064f\u0648\u0630\u064f\u0020\u0628\u0650\u0627\u0644\u0644\u064e\u0651\u0647\u0650\u0020\u0645\u0650\u0646\u064e\u0020\u0627\u0644\u0634\u064e\u0651\u064a\u0652\u0637\u064e\u0627\u0646\u0650\u0020\u0627\u0644\u0631\u064e\u0651\u062c\u0650\u064a\u0645\u0650';
            const duaArabicLines = [
                'وَأَنكِحُوا الْأَيَامَىٰ مِنكُمْ وَالصَّالِحِينَ مِنْ عِبَادِكُمْ وَإِمَائِكُمْ ۚ إِن يَكُونُوا فُقَرَاءَ يُغْنِهِمُ اللَّهُ مِن فَضْلِهِ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ',
                '\u0631\u064e\u0628\u064e\u0651\u0646\u064e\u0627 \u0647\u064e\u0628\u0652 \u0644\u064e\u0646\u064e\u0627 \u0645\u0650\u0646\u0652 \u0623\u064e\u0632\u0652\u0648\u064e\u0627\u062c\u0650\u0646\u064e\u0627 \u0648\u064e\u0630\u064f\u0631\u0650\u0651\u064a\u064e\u0651\u0627\u062a\u0650\u0646\u064e\u0627 \u0642\u064f\u0631\u064e\u0651\u0629\u064e \u0623\u064e\u0639\u0652\u064a\u064f\u0646\u064d \u0648\u064e\u0627\u062c\u0652\u0639\u064e\u0644\u0652\u0646\u064e\u0627 \u0644\u0650\u0644\u0652\u0645\u064f\u062a\u064e\u0651\u0642\u0650\u064a\u0646\u064e \u0625\u0650\u0645\u064e\u0627\u0645\u064b\u0627',
                '\u0631\u064e\u0628\u0650\u0651 \u0647\u064e\u0628\u0652 \u0644\u0650\u064a \u0645\u0650\u0646\u064e \u0627\u0644\u0635\u064e\u0651\u0627\u0644\u0650\u062d\u0650\u064a\u0646\u064e',
                '\u0631\u064e\u0628\u064e\u0651\u0646\u064e\u0627 \u0622\u062a\u0650\u0646\u064e\u0627 \u0645\u0650\u0646\u0652 \u0644\u064e\u062f\u064f\u0646\u0643\u064e \u0631\u064e\u062d\u0652\u0645\u064e\u0629\u064b \u0648\u064e\u0647\u064e\u064a\u0650\u0651\u0626\u0652 \u0644\u064e\u0646\u064e\u0627 \u0645\u0650\u0646\u0652 \u0623\u064e\u0645\u0652\u0631\u0650\u0646\u064e\u0627 \u0631\u064e\u0634\u064e\u062f\u064b\u0627'
            ];
            const acceptedBismillahPhrases = [
                'bismillah',
                'bismillahirrahmanirrahim',
                'bismillahir rohmanir rohim',
                'bismillahir rahmanir rahim',
                'bismillahir rahmanir raheem',
                'bismillah hir rahman nir rahim',
                'bismillahirrahmanirrahim',
                'বিসমিল্লাহ',
                'বিসমিল্লাহিররহমানিররহিম',
                'বিসমিল্লাহিররাহমানিররাহিম',
                'বিসমিল্লাহির রহমানির রহিম',
                'বিসমিল্লাহির রাহমানির রাহিম',
                'بسمالله',
                'بسماللَّه',
                'بسم الله',
                'بسم الله الرحمن الرحيم',
                'بسماللهالرحمنالرحيم'
            ];
            const bismillahPuzzleSets = {
                en: {
                    title: 'MATCH BISMILLAH CORRECTLY',
                    sourceLabel: 'PUZZLE CHARACTERS',
                    answerLabel: 'SELECTED CHARACTERS',
                    success: 'BISMILLAH COMPLETE. OPENING BIODATA...',
                    reset: 'RESET PUZZLE',
                    pieces: ['H', 'B', 'MI', 'A', 'S', 'LL', 'I'],
                    answer: ['B', 'I', 'S', 'MI', 'LL', 'A', 'H'],
                    soundText: 'بسم الله',
                    soundLang: 'ar-SA'
                },
                bn: {
                    title: 'সঠিকভাবে বিসমিল্লাহ্ মিলান',
                    sourceLabel: 'পাজলের অক্ষর',
                    answerLabel: 'সাজানো অক্ষর',
                    success: 'বিসমিল্লাহ সম্পূর্ণ হয়েছে। বায়োডাটা খোলা হচ্ছে...',
                    reset: 'পাজল আবার শুরু করুন',
                    pieces: ['হ্', 'বি', 'ল্লা', 'স', 'মি'],
                    answer: ['বি', 'স', 'মি', 'ল্লা', 'হ্'],
                    soundText: 'بسم الله',
                    soundLang: 'ar-SA'
                },
                ar: {
                    title: 'رَتِّبْ بِسْمِ اللَّهِ بِشَكْلٍ صَحِيحٍ',
                    sourceLabel: 'أحرف اللغز',
                    answerLabel: 'الأحرف المختارة',
                    success: 'اكتمل بسم الله. يتم فتح السيرة...',
                    reset: 'إعادة اللغز',
                    pieces: ['ه', 'ب', 'ل', 'س', 'ال', 'م'],
                    answer: ['ب', 'س', 'م', 'ال', 'ل', 'ه'],
                    soundText: 'بسم الله',
                    soundLang: 'ar-SA'
                }
            };
            const permanentAddressMapHref = 'https://maps.app.goo.gl/hvcHqxMvhF9cGFbM6';
            const bismillahToneSrc = withCvCacheVersion('assets/tone/Bismillah.mp3');
            const bismillahIntroSeenStorageKey = 'bbdMahbubBismillahIntroSeen';
            const activeSectionStorageKey = 'bbdMahbubActiveSection';
            const voiceVerificationStorageKey = 'bbdMahbubVoiceVerifiedAt';
            const voiceVerificationGracePeriodMs = 30 * 60 * 1000;
            const languageOptions = [
                { code: 'ar', shortLabel: 'AR', nativeLabel: 'العربية' },
                { code: 'en', shortLabel: 'EN', nativeLabel: 'English' },
                { code: 'bn', shortLabel: 'BN', nativeLabel: 'বাংলা' }
            ];
            const translations = {
                en: {
                    locale: 'en',
                    dir: 'ltr',
                    meta: {
                        title: 'CV - Md. Mahbubur Rahman',
                        description: 'CV of Md. Mahbubur Rahman with personal, education, work, training, activities, and contact details.'
                    },
                    navigation: {
                        // quickJump: 'Quick Jump',
                        sectionsAria: 'Page sections',
                        languageSwitcherLabel: 'Language versions',
                        languagePanelHint: 'Change the page language at any time.',
                        languagePanelCollapse: 'Collapse language controls',
                        languagePanelExpand: 'Expand language controls'
                    },
                    common: {
                        visit: 'Visit',
                        lateBadge: 'Late',
                        latePrefix: 'Late '
                    },
                    intro: {
                        kicker: 'Dua & Instruction',
                        title: 'Please Read Before Exploring',
                        duaMeaning: 'Our Rabb, grant us mercy from Yourself\nand prepare for us right guidance in our affairs.',
                        duaReference: 'Sura Al-Kahf, Aya 10',
                        instructionsTitle: 'Instruction',
                        instructions: [
                            'Begin with respect, sincerity, and trust in Allah.',
                            'Use the top menu to move quickly between each section.',
                            'Please maintain privacy while reviewing this profile.'
                        ]
                    },
                    voice: {
                        tapToStart: 'Tap the mic once to start Bismillah voice verification.',
                        browserNoSupport: 'This browser does not include live speech recognition. Use Continue below to open the CV.',
                        starting: 'Starting microphone. If your browser asks, tap Allow microphone permission.',
                        listening: 'Microphone is active. Say "Bismillah" once and wait for verification.',
                        detected: (transcript) => `Detected: "${transcript}". Opening CV...`,
                        heard: (transcript) => `Heard: "${transcript}". Tap the mic and say "Bismillah" again.`,
                        errors: {
                            'not-allowed': 'Microphone access was blocked. Please allow microphone permission and try again.',
                            'service-not-allowed': 'Speech recognition is blocked on this browser. Check browser support and microphone permission, then try again.',
                            aborted: 'Voice recording stopped before it could start. Tap the mic again.',
                            'audio-capture': 'No microphone was found. Connect a microphone and try again.',
                            'no-speech': 'No speech was detected. Tap the mic again and say "Bismillah".',
                            'language-not-supported': 'This browser does not support the selected speech language for web speech recognition.',
                            network: 'Your browser could not reach its speech service. Please check your connection and browser settings, then try again.'
                        },
                        defaultError: 'Voice recognition did not start properly. If a browser popup appears, tap Allow microphone permission and try again.',
                        timeout: 'Listening timed out. Tap the mic and say "Bismillah" again.',
                        notVerified: 'I could not verify "Bismillah". Tap the mic and say it again.',
                        couldNotStart: 'Microphone could not start right now. If the browser asks, allow microphone permission, then tap the mic again.',
                        supportNoSupport: 'Live speech recognition is not built into this browser, so the page now falls back to the Continue button below.',
                        supportPreparing: 'Microphone is starting now. Please wait a moment.',
                        supportErrorGeneral: 'If no popup appears, check this site\'s microphone permission and whether your browser supports web speech recognition.',
                        supportListening: 'Recording is active now. Speak once, then wait a moment for verification.',
                        supportIdle: 'Tap the mic. If a browser popup appears, tap Allow microphone permission.',
                        micAriaRetry: 'Retry voice recognition',
                        micAriaStop: 'Stop voice recognition',
                        micAriaStart: 'Start voice recognition and say Bismillah'
                    },
                    menu: {
                        profile: 'Profile',
                        gallery: 'Gallery',
                        personal: 'Personal',
                        family: 'Family',
                        work: 'Work',
                        lifestyle: 'Lifestyle',
                        language: 'Language',
                        education: 'Education',
                        training: 'Training',
                        activities: 'Activities',
                        hobbies: 'Hobbies',
                        expectation: 'Expectation',
                        contact: 'Contact',
                        dua: 'Dua'
                    },
                    profile: {
                        name: 'Md Mahbubur Rahman',
                        subtitle: 'IT Professional',
                        tagline: 'IT professional focused on reliable systems, practical support, and continuous learning',
                        stats: {
                            age: 'YEARS OLD',
                            education: 'HIGHLY EDUCATED',
                            work: 'WELL ESTABLISHED',
                            faith: 'PRACTICING MUSLIM'
                        }
                    },
                    gallery: {
                        title: 'Photo Gallery',
                        photos: [
                            { src: withCvCacheVersion('assets/images/mahbub-portrait-1.jpg'), alt: 'Md Mahbubur Rahman portrait 1', label: 'Portrait 01', featured: true },
                            { src: withCvCacheVersion('assets/images/mahbub-portrait-2.jpg'), alt: 'Md Mahbubur Rahman portrait 2', label: 'Portrait 02', featured: false }
                        ]
                    },
                    sectionHeaders: {
                        personal: 'Personal Information',
                        family: 'Family Information',
                        work: 'Professional Information'
                    },
                    personalDetails: [
                        { label: 'Full Name', value: 'Md. Mahbubur Rahman', iconClass: 'fas fa-user' },
                        { label: 'Nickname', value: 'Nasir Uddin', iconClass: 'fas fa-signature' },
                        { label: 'Date of Birth', value: '20 December 1997', iconClass: 'fas fa-calendar-days' },
                        { label: 'Age', value: '28 Years', iconClass: 'fas fa-hourglass-half' },
                        { label: 'Religion', value: 'Islam (Practicing Muslim)', iconClass: 'fas fa-mosque' },
                        { label: 'Marital Status', value: 'Unmarried', iconClass: 'fas fa-ring' },
                        { label: 'Complexion', value: 'Medium Dark', iconClass: 'fas fa-palette' },
                        { label: 'Height & Weight', value: '5\' 3" & 70 KGs', iconClass: 'fas fa-ruler-combined' },
                        { label: 'Blood Group', value: 'A+', iconClass: 'fas fa-droplet' },
                        { label: 'Health Status', value: 'Healthy, non-smoker, no addiction', iconClass: 'fas fa-heart-pulse' }
                    ],
                    familyDetails: [
                        ['Father', 'Late Abdul Kader Howlader (Village Doctor and Primary Teacher)'],
                        ['Mother', 'Farida Begum - Housewife'],
                        ['Siblings', '4 Brothers and 3 Sisters'],
                        ['Permanent Address', 'Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat'],
                        ['District', 'Bagerhat']
                    ],
                    familySummary: {
                        label: 'Family Background',
                        title: 'A respectable, middle-class family grounded in education and religious values.',
                        tags: ['Respectable', 'Middle-Class', 'Educated', 'Religious']
                    },
                    familySiblingsTitle: 'Sibling Details',
                    familySiblings: [
                        ['1st Sister', 'Shahanaj Shanti, Housewife with 4 Children. Morrelganj.'],
                        ['2nd Brother', 'Alauddin, was a worker in UAE, Business (Dhaka). 2 Children. Morrelganj.'],
                        ['3rd Brother', 'Giash Uddin, Driver, Bananja PCL, Chattagram, BD Navy. 2 Children, Morrelganj.'],
                        ['4th Sister', 'Zerin Salma Beby, Housewife with 3 children. Morrelganj.'],
                        ['5th Brother', 'Mohiuddin, Driver, Doctor Couple\'s, Chattagram. 4 Children, Chattagram.'],
                        ['6th Sister', 'Nazma Sultana, Housewife with 2 children. Khulna.'],
                        ['7th', 'Youngest son, self.']
                    ],
                    siblingStatusData: {
                        '1st Sister': { text: 'Married', className: 'married' },
                        '2nd Brother': { text: 'Married', className: 'married' },
                        '3rd Brother': { text: 'Married', className: 'married' },
                        '4th Sister': { text: 'Married', className: 'married' },
                        '5th Brother': { text: 'Married', className: 'married' },
                        '6th Sister': { text: 'Married', className: 'married' },
                        '7th': { text: 'Unmarried', className: 'unmarried' }
                    },
                    workSection: {
                        items: [
                            { title: 'Procurement & Servicing Lead', organization: 'Earthface IT, Dhaka', duration: '27 Nov 2021 - Present', iconClass: 'fas fa-briefcase' },
                            { title: 'IT Support Assistant (Part-time)', organization: 'Dept. of Arabic Language and Literature, IU, Kushtia', duration: '23 Mar 2017 - 20 Oct 2021', iconClass: 'fas fa-headset' },
                            { title: 'IT Executive (Part-time)', organization: 'Khondokar Telecom, Gazipur', duration: '7 Jul 2014 - 12 Dec 2015', iconClass: 'fas fa-desktop' }
                        ]
                    },
                    lifestyle: {
                        title: 'Personality & Lifestyle',
                        items: [
                            { label: 'Character', value: 'Humble, Religious, Trustworthy', iconClass: 'fas fa-user-shield' },
                            { label: 'Future Goal', value: 'Build a family based on Deen and mutual respect', iconClass: 'fas fa-bullseye' },
                            { label: 'Interests', value: 'Islamic lectures, reading, travelling, learning technology', iconClass: 'fas fa-book-open' },
                            { label: 'Food Habit', value: 'Prefers home-made halal food', iconClass: 'fas fa-utensils' },
                            { label: 'Additional', value: 'Punctual, reserved by nature, socially well-behaved', iconClass: 'fas fa-check-double' }
                        ]
                    },
                    languages: {
                        title: 'Language Proficiency',
                        proficiencyAria: (title) => `${title} proficiency`,
                        items: [
                            { title: 'English', level: 'Good', percent: 66.66 },
                            { title: 'Arabic', level: 'Good', percent: 66.66 },
                            { title: 'Bangla', level: 'Excellent', percent: 100 }
                        ]
                    },
                    education: {
                        title: 'Educational Information',
                        items: [
                            { title: 'M.A. (Arabic Language & Literature)', institution: 'Islamic University, Kushtia', institutionHref: 'https://iu.ac.bd', scoreLabel: 'CGPA', score: '3.58/4', session: '2022' },
                            { title: 'B.A. Honors (Arabic Language & Literature)', institution: 'Islamic University, Kushtia', institutionHref: 'https://iu.ac.bd', scoreLabel: 'CGPA', score: '3.58/4', session: '2020' },
                            { title: 'Alim (HSC)', institution: 'Ta\'mirul Millat Kamil Madrasah, Tongi, Gazipur', institutionHref: 'https://www.tmt.edu.bd', scoreLabel: 'GPA', score: '5.00/5', session: '2014' },
                            { title: 'Dakhil (SSC)', institution: 'Ta\'limul Millat Rahmatia Kamil Madrasah, Sonadanga, Khulna', scoreLabel: 'GPA', score: '5.00/5', session: '2012' }
                        ]
                    },
                    training: {
                        title: 'Training and Development',
                        items: [
                            { text: 'Corporate Management Bootcamp - 2023 (10 Days, BYLC, Bangladesh.)', href: 'https://bylc.org', linkLabel: 'Visit' },
                            { text: 'Professional Digital Content Management (PDCM), (3 Months, SEIP, Finance Ministry of BD)', href: 'https://lms.seip-fd.gov.bd', linkLabel: 'Visit' },
                            { text: 'Web Design & Development (200 Hours, LEDP, ICT Division of Bangladesh.)', href: 'https://ictd.gov.bd', linkLabel: 'Visit' },
                            { text: 'Computer & Its Applications (1 Year, Islamic University, Kushtia)', href: 'https://iu.ac.bd', linkLabel: 'Visit' },
                            { text: 'Troubleshooting in Computer Security (ICT Division, a2i).', href: 'https://a2i.gov.bd', linkLabel: 'Visit' },
                            { text: 'Microsoft Word Basics (a2i, Muktapath).', href: 'https://a2i.gov.bd', linkLabel: 'Visit' },
                            { text: 'Video Production (Human Development Media, a2i)', href: 'https://a2i.gov.bd', linkLabel: 'Visit' },
                            { text: 'Digital Security Essentials (Digital Security Agency, a2i).', href: 'https://a2i.gov.bd', linkLabel: 'Visit' },
                            { text: 'Idea Innovation Workshop for Mobile Games & Apps Development (ICT Division, Digital Bangladesh.)', href: 'https://a2i.gov.bd', linkLabel: 'Visit' }
                        ]
                    },
                    activities: {
                        title: 'Extra Curricular Activities',
                        items: [
                            {
                                title: 'Volunteering',
                                items: [
                                    { text: 'Former Elected CR of the class for 2 years, Islamic University, Kushtia.', iconClass: 'fas fa-users', href: 'https://iu.ac.bd', linkLabel: 'Visit' },
                                    { text: 'Former Director of Betikrom Shahitya Shangskritik Jote, IU.', iconClass: 'fas fa-masks-theater', href: 'https://web.facebook.com/betikrom87', linkLabel: 'Visit' },
                                    { text: 'Former Central Member of Bangladesh Islamic Chhatra Shibir', iconClass: 'fas fa-shield-halved', href: 'https://shibir.org.bd', linkLabel: 'Visit' }
                                ]
                            },
                            { title: 'Singing', items: [{ text: 'Performed song on SATV, ETV, Channel 9', iconClass: 'fas fa-music' }] },
                            { title: 'Acting', period: '2018', items: [{ text: 'Acted in a drama, was placed 2nd Nationally.', iconClass: 'fas fa-film' }] },
                            { title: 'Award', period: '2012', items: [{ text: 'Awarded on Poetry Recitation Placed 2nd Nationally', iconClass: 'fas fa-award' }] }
                        ]
                    },
                    hobbies: {
                        title: 'Hobbies and Interests',
                        items: [
                            ['fas fa-masks-theater', 'Cultural Awareness (Singing, Acting, Lyrics etc.)'],
                            ['fas fa-lightbulb', 'Optimizing Idea.'],
                            ['fas fa-laptop-medical', 'Helping others as a tech savvy.']
                        ]
                    },
                    expectation: {
                        title: 'Expectation from Bride',
                        items: [
                            { iconClass: 'fas fa-mosque', title: 'Religious Practice', text: 'Practicing Muslimah with hijab and niqab, aware of maintaining mahram.' },
                            { iconClass: 'fas fa-user-shield', title: 'Character', text: 'Educated and modest in behavior.' },
                            { iconClass: 'fas fa-house', title: 'Family Role', text: 'Aware of family responsibilities.' },
                            { iconClass: 'fas fa-heart', title: 'Lifestyle', text: 'Focused on family and Islamic lifestyle.' },
                            { iconClass: 'fas fa-palette', title: 'Preferred Complexion', text: 'Medium/Fair (flexible).' },
                            { iconClass: 'fas fa-briefcase', title: 'Profession', text: 'A profession is not mandatory; a family-oriented Islamic lifestyle is preferred.' }
                        ]
                    },
                    contact: {
                        title: 'Contact & Location',
                        mapButton: 'View on Google Maps',
                        permanentAddressValue: 'Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat',
                        blocks: [
                            { iconClass: 'fas fa-user', label: 'Name', value: 'Md. Mahbubur Rahman' },
                            { iconClass: 'fas fa-envelope', label: 'Email', value: 'bbdmahbub@gmail.com', href: 'mailto:bbdmahbub@gmail.com' },
                            { iconClass: 'fab fa-whatsapp', label: 'WhatsApp', value: '+8801917267607', href: 'https://wa.me/8801917267607' },
                            { iconClass: 'fas fa-home', label: 'Current Address', value: 'Hatir Jheel, Dhaka, Bangladesh' },
                            { iconClass: 'fas fa-map-marker-alt', label: 'Permanent Address', value: 'Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat', mapHref: permanentAddressMapHref }
                        ]
                    },
                    dua: {
                        title: 'Final Words & Dua',
                        meanings: [
                            '"And marry the unmarried among you and the righteous among your male servants and female servants. If they are poor, Allah will enrich them from His bounty, and Allah is All-Encompassing and Knowing."',
                            '"Our Rabb (Allah), grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous."',
                            '"Ya Rabb (Allah)! Bestow upon me one of the righteous."',
                            '"Our Rabb (Allah), grant us from Yourself mercy and prepare for us from our affair right guidance."'
                        ],
                        references: [
                            '-Surah An-Nur, Ayah 32',
                            '-Surah Al-Furqan, Ayah 74',
                            '-Surah As-Saffat, Ayah 100',
                            '-Surah Al-Kahf, Ayah 10'
                        ],
                        closing: 'Ameen ya Rabbal Alameen.'
                    }
                },
                ar: {
                    locale: 'ar',
                    dir: 'rtl',
                    meta: {
                        title: 'السيرة الذاتية - محمد محبوب الرحمن',
                        description: 'السيرة الذاتية لـ محمد محبوب الرحمن وتشمل المعلومات الشخصية والتعليمية والمهنية والتدريبية والأنشطة ووسائل التواصل.'
                    },
                    navigation: {
                        // quickJump: 'انتقال سريع'
                        sectionsAria: 'أقسام الصفحة',
                        languageSwitcherLabel: 'إصدارات اللغة',
                        languagePanelHint: 'يمكنك تغيير لغة الصفحة في أي وقت.',
                        languagePanelCollapse: 'طي عناصر التحكم باللغة',
                        languagePanelExpand: 'إظهار عناصر التحكم باللغة'
                    },
                    common: {
                        visit: 'زيارة',
                        lateBadge: 'المرحوم',
                        latePrefix: 'المرحوم '
                    },
                    intro: {
                        kicker: 'دعاء وتعليمات',
                        title: 'يرجى القراءة قبل التصفح',
                        duaMeaning: 'ربنا آتنا من لدنك رحمة وهيئ لنا من أمرنا رشداً.',
                        duaReference: 'سورة الكهف، آية ١٠',
                        instructionsTitle: 'التعليمات',
                        instructions: [
                            'ابدأ باحترام وإخلاص مع التوكل على الله.',
                            'استخدم القائمة العلوية للانتقال السريع بين الأقسام.',
                            'يرجى الحفاظ على الخصوصية أثناء مراجعة هذا الملف.'
                        ]
                    },
                    voice: {
                        tapToStart: 'اضغط على الميكروفون مرة واحدة لبدء التحقق الصوتي بقول بسم الله.',
                        browserNoSupport: 'هذا المتصفح لا يدعم التعرف الصوتي المباشر. استخدم زر المتابعة أدناه لفتح السيرة الذاتية.',
                        starting: 'يتم تشغيل الميكروفون الآن. إذا ظهرت نافذة من المتصفح فاضغط سماح.',
                        listening: 'الميكروفون يعمل الآن. قل "بسم الله" مرة واحدة وانتظر التحقق.',
                        detected: (transcript) => `تم التقاط: "${transcript}". يتم فتح السيرة الذاتية الآن...`,
                        heard: (transcript) => `تم سماع: "${transcript}". اضغط على الميكروفون وقل "بسم الله" مرة أخرى.`,
                        errors: {
                            'not-allowed': 'تم حظر الوصول إلى الميكروفون. يرجى السماح بالإذن ثم حاول مرة أخرى.',
                            'service-not-allowed': 'خدمة التعرف الصوتي محظورة في هذا المتصفح. تحقق من الدعم والإذن ثم حاول مرة أخرى.',
                            aborted: 'توقف التسجيل الصوتي قبل أن يبدأ. اضغط على الميكروفون مرة أخرى.',
                            'audio-capture': 'لم يتم العثور على ميكروفون. قم بتوصيله ثم حاول مرة أخرى.',
                            'no-speech': 'لم يتم اكتشاف أي كلام. اضغط على الميكروفون وقل "بسم الله".',
                            'language-not-supported': 'هذا المتصفح لا يدعم لغة التعرف الصوتي المحددة.',
                            network: 'تعذر على المتصفح الوصول إلى خدمة التعرف الصوتي. تحقق من الاتصال ثم حاول مرة أخرى.'
                        },
                        defaultError: 'لم يبدأ التعرف الصوتي بشكل صحيح. إذا ظهرت نافذة من المتصفح فاضغط سماح ثم حاول مرة أخرى.',
                        timeout: 'انتهت مهلة الاستماع. اضغط على الميكروفون وقل "بسم الله" مرة أخرى.',
                        notVerified: 'تعذر التحقق من "بسم الله". اضغط على الميكروفون وكررها مرة أخرى.',
                        couldNotStart: 'تعذر تشغيل الميكروفون الآن. إذا طلب المتصفح الإذن فاسمح به ثم حاول مرة أخرى.',
                        supportNoSupport: 'ميزة التعرف الصوتي المباشر غير متوفرة في هذا المتصفح، لذلك ستجد زر متابعة بدلاً منها أدناه.',
                        supportPreparing: 'يتم تشغيل الميكروفون الآن. يرجى الانتظار قليلاً.',
                        supportErrorGeneral: 'إذا لم تظهر نافذة، فتحقق من إذن الميكروفون لهذا الموقع ومن دعم المتصفح للتعرف الصوتي.',
                        supportListening: 'التسجيل يعمل الآن. تحدث مرة واحدة ثم انتظر لحظة للتحقق.',
                        supportIdle: 'اضغط على الميكروفون. إذا ظهرت نافذة من المتصفح فاضغط سماح.',
                        micAriaRetry: 'إعادة محاولة التعرف الصوتي',
                        micAriaStop: 'إيقاف التعرف الصوتي',
                        micAriaStart: 'ابدأ التعرف الصوتي وقل بسم الله'
                    },
                    menu: {
                        profile: 'الملف الشخصي',
                        gallery: 'المعرض',
                        personal: 'الشخصية',
                        family: 'الأسرة',
                        work: 'العمل',
                        lifestyle: 'نمط الحياة',
                        language: 'اللغة',
                        education: 'التعليم',
                        training: 'التدريب',
                        activities: 'الأنشطة',
                        hobbies: 'الهوايات',
                        expectation: 'التوقعات',
                        contact: 'التواصل',
                        dua: 'الدعاء'
                    },
                    profile: {
                        name: 'محمد محبوب الرحمن',
                        subtitle: 'محترف تقنية معلومات',
                        tagline: 'محترف تقنية معلومات يركز على الأنظمة الموثوقة والدعم العملي والتعلم المستمر',
                        stats: {
                            age: '28 عاماً',
                            education: 'تعليم عالٍ',
                            work: 'مستقر مهنياً',
                            faith: 'ملتزم دينياً'
                        }
                    },
                    gallery: {
                        title: 'معرض الصور',
                        photos: [
                            { src: withCvCacheVersion('assets/images/mahbub-portrait-1.jpg'), alt: 'الصورة الشخصية الأولى لـ محمد محبوب الرحمن', label: 'الصورة 01', featured: true },
                            { src: withCvCacheVersion('assets/images/mahbub-portrait-2.jpg'), alt: 'الصورة الشخصية الثانية لـ محمد محبوب الرحمن', label: 'الصورة 02', featured: false }
                        ]
                    },
                    sectionHeaders: {
                        personal: 'المعلومات الشخصية',
                        family: 'المعلومات الأسرية',
                        work: 'المعلومات المهنية'
                    },
                    personalDetails: [
                        { label: 'الاسم الكامل', value: 'محمد محبوب الرحمن', iconClass: 'fas fa-user' },
                        { label: 'الاسم المختصر', value: 'ناصر الدين', iconClass: 'fas fa-signature' },
                        { label: 'تاريخ الميلاد', value: ' ٢٠ ديسمبر ١٩٩٧', iconClass: 'fas fa-calendar-days' },
                        { label: 'العمر', value: '28 سنة', iconClass: 'fas fa-hourglass-half' },
                        { label: 'الديانة', value: 'الإسلام (ملتزم)', iconClass: 'fas fa-mosque' },
                        { label: 'الحالة الاجتماعية', value: 'أعزب', iconClass: 'fas fa-ring' },
                        { label: 'لون البشرة', value: 'قمحي مائل للداكن', iconClass: 'fas fa-palette' },
                        { label: 'الطول والوزن', value: '5\' 3" و٧٠ كجم', iconClass: 'fas fa-ruler-combined' },
                        { label: 'فصيلة الدم', value: 'A+', iconClass: 'fas fa-droplet' },
                        { label: 'الحالة الصحية', value: 'بصحة جيدة، غير مدخن، بلا إدمان', iconClass: 'fas fa-heart-pulse' }
                    ],
                    familyDetails: [
                        ['الأب', 'عبد القادر هولادر (دكتور عبد القادر)- كان طبيب قروي ومعلم ابتدائي '],
                        ['الأم', 'فريدة بيغم - ربة منزل'],
                        ['الإخوة والأخوات', '4 إخوة و3 أخوات'],
                        ['العنوان الدائم', 'أتار شوتالار, زمادر بارا, مورلفانز, باغرهات'],
                        ['المنطقة', 'باغرهات']
                    ],
                    familySummary: {
                        label: 'خلفية الأسرة',
                        title: 'أسرة محترمة من الطبقة المتوسطة تقوم على التعليم والقيم الدينية.',
                        tags: ['محترمة', 'متوسطة الحال', 'متعلمة', 'متدينة']
                    },
                    familySiblingsTitle: 'تفاصيل الإخوة والأخوات',
                    familySiblings: [
                        ['الأخت الأولى', 'شاهاناز شانتي، ربة منزل ولديها 4 أطفال. مورلفانز.'],
                        ['الأخ الثاني', 'علاء الدين، كان عاملاً في الإمارات ويعمل الآن في التجارة (داكا). لديه طفلان. مورلفانز.'],
                        ['الأخ الثالث', 'غياثُ الدِّين، سائق في بانانجا بي سي إل، شاتّوغرام، البحرية البنغلاديشية. لديه طفلان. مورلفانز.'],
                        ['الأخت الرابعة', 'زيرين سلمى بيبي، ربة منزل ولديها ٣ أطفال. مورلفانز.'],
                        ['الأخ الخامس', 'محيي الدين، سائق لدى زوجين من الأطباء في شاتّوغرام. لديه 4 أطفال. شاتّوغرام.'],
                        ['الأخت السادسة', 'نَظْمَة سُلْطَانَة، ربة منزل ولديها طفلان. خولنا.'],
                        ['السابع', 'الابن الأصغر، أنا.']
                    ],
                    siblingStatusData: {
                        'الأخت الأولى': { text: 'متزوجة', className: 'married' },
                        'الأخ الثاني': { text: 'متزوج', className: 'married' },
                        'الأخ الثالث': { text: 'متزوج', className: 'married' },
                        'الأخت الرابعة': { text: 'متزوجة', className: 'married' },
                        'الأخ الخامس': { text: 'متزوج', className: 'married' },
                        'الأخت السادسة': { text: 'متزوجة', className: 'married' },
                        'السابع': { text: 'غير متزوج', className: 'unmarried' }
                    },
                    workSection: {
                        items: [
                            { title: 'مسؤول المشتريات والخدمات', organization: 'إيرثفيس آي تي، دكا', duration: '٢٧ نوفمبر ٢٠٢١ - حتى الآن', iconClass: 'fas fa-briefcase' },
                            { title: 'مساعد دعم تقني (دوام جزئي)', organization: 'قسم اللغة العربية وآدابها، الجامعة الإسلامية، كوشتيا', duration: '٢٣ مارس ٢٠١٧ - ٢٠ أكتوبر ٢٠٢١', iconClass: 'fas fa-headset' },
                            { title: 'تنفيذي تقنية معلومات (دوام جزئي)', organization: 'خُندُكار تِلِكوم, غازيبور', duration: '٧ يوليو ٢٠١٤ - ١٢ ديسمبر ٢٠١٥', iconClass: 'fas fa-desktop' }
                        ]
                    },
                    lifestyle: {
                        title: 'الشخصية ونمط الحياة',
                        items: [
                            { label: 'الشخصية', value: 'متواضع، متدين، وجدير بالثقة', iconClass: 'fas fa-user-shield' },
                            { label: 'الهدف المستقبلي', value: 'بناء أسرة قائمة على الدين والاحترام المتبادل', iconClass: 'fas fa-bullseye' },
                            { label: 'الاهتمامات', value: 'الدروس الإسلامية، القراءة، السفر، وتعلم التقنية', iconClass: 'fas fa-book-open' },
                            { label: 'العادات الغذائية', value: 'يفضل الطعام الحلال المنزلي', iconClass: 'fas fa-utensils' },
                            { label: 'إضافي', value: 'منضبط في الوقت، هادئ الطبع، وحسن السلوك اجتماعياً', iconClass: 'fas fa-check-double' }
                        ]
                    },
                    languages: {
                        title: 'إجادة اللغات',
                        proficiencyAria: (title) => `مستوى ${title}`,
                        items: [
                            { title: 'الإنجليزية', level: 'جيد', percent: 66.66 },
                            { title: 'العربية', level: 'جيد', percent: 66.66 },
                            { title: 'البنغالية', level: 'ممتاز', percent: 100 }
                        ]
                    },
                    education: {
                        title: 'المعلومات التعليمية',
                        items: [
                            { title: 'ماجستير في اللغة العربية وآدابها', institution: 'الجامعة الإسلامية، كوشتيا', institutionHref: 'https://iu.ac.bd', scoreLabel: 'المعدل', score: '3.58/4', session: '٢٠٢٢' },
                            { title: 'بكالوريوس شرف في اللغة العربية وآدابها', institution: 'الجامعة الإسلامية، كوشتيا', institutionHref: 'https://iu.ac.bd', scoreLabel: 'المعدل', score: '3.58/4', session: '٢٠٢٠' },
                            { title: 'Alim (الثانوية العليا)', institution: 'تعمير الملة كامل مدرسة، تونغي، غازيبور', institutionHref: 'https://www.tmt.edu.bd', scoreLabel: 'الدرجة', score: '٥.٠٠/٥', session: '٢٠١٤' },
                            { title: 'Dakhil (الثانوية)', institution: 'تعليم الملة رحمتِية كامل مدرسة، سونادانغا، خولنا ', scoreLabel: 'الدرجة', score: '٥.٠٠/٥', session: '٢٠١٢' }
                        ]
                    },
                    training: {
                        title: 'التدريب والتطوير',
                        items: [
                            { text: 'معسكر إدارة الشركات - 2023 (١٠ أيام، بي واي إل سي، بنغلاديش)', href: 'https://bylc.org', linkLabel: 'زيارة' },
                            { text: 'الإدارة الاحترافية للمحتوى الرقمي (بي دي سي إم) - 3 أشهر، إس إي آي بي، وزارة المالية', href: 'https://lms.seip-fd.gov.bd', linkLabel: 'زيارة' },
                            { text: 'تصميم وتطوير الويب -٢٠٠ ساعة، إل إي دي بي، قسم آي سي تي, في بنغلاديش', href: 'https://ictd.gov.bd', linkLabel: 'زيارة' },
                            { text: 'الحاسوب وتطبيقاته - سنة واحدة، الجامعة الإسلامية، كوشتيا', href: 'https://iu.ac.bd', linkLabel: 'زيارة' },
                            { text: 'استكشاف الأعطال في أمن الحاسوب (قسم تكنولوجيا المعلومات والاتصالات، إي تو آي)', href: 'https://a2i.gov.bd', linkLabel: 'زيارة' },
                            { text: 'أساسيات مايكروسوفت وورد (إي تو آي، مُكتَباث)', href: 'https://a2i.gov.bd', linkLabel: 'زيارة' },
                            { text: 'إنتاج الفيديو (وسائل الإعلام للتنمية البشرية، إي تو آي)', href: 'https://a2i.gov.bd', linkLabel: 'زيارة' },
                            { text: 'أساسيات الأمن الرقمي (وكالة الأمن الرقمي، إي تو آي)', href: 'https://a2i.gov.bd', linkLabel: 'زيارة' },
                            { text: 'ورشة ابتكار الأفكار لتطوير ألعاب وتطبيقات الجوال (قسم تكنولوجيا المعلومات والاتصالات، بنغلاديش الرقمية)', href: 'https://a2i.gov.bd', linkLabel: 'زيارة' }
                        ]
                    },
                    activities: {
                        title: 'الأنشطة اللامنهجية',
                        items: [
                            {
                                title: 'العمل التطوعي',
                                period: '٧ يوليو ٢٠١٤ - ١٢ ديسمبر ٢٠١٥',
                                items: [
                                    { text: 'ممثل الصف المنتخب سابقًا لمدة سنتين، الجامعة الإسلامية', iconClass: 'fas fa-users', href: 'https://iu.ac.bd', linkLabel: 'زيارة' },
                                    { text: 'المدير السابق لـ بيتكرم شاهيتيا شانغسكريتيك جوتي، الجامعة الإسلامية', iconClass: 'fas fa-masks-theater', href: 'https://web.facebook.com/betikrom87', linkLabel: 'زيارة' },
                                    { text: 'عضو مركزي سابق في شاترا شيبير الإسلامية في بنغلاديش', iconClass: 'fas fa-shield-halved', href: 'https://shibir.org.bd', linkLabel: 'زيارة' }
                                ]
                            },
                            { title: 'الإنشاد', items: [{ text: 'أدّى أغاني على ساتي في، إي تي في، وقناة ٩', iconClass: 'fas fa-music' }] },
                            { title: 'التمثيل', period: '٢٠١٨', items: [{ text: 'شارك في عمل درامي وحصل على المركز الثاني على المستوى الوطني.', iconClass: 'fas fa-film' }] },
                            { title: 'الجوائز', period: '٢٠١٢', items: [{ text: 'نال جائزة في إلقاء الشعر وحصل على المركز الثاني على المستوى الوطني.', iconClass: 'fas fa-award' }] }
                        ]
                    },
                    hobbies: {
                        title: 'الهوايات والاهتمامات',
                        items: [
                            ['fas fa-masks-theater', 'الوعي الثقافي (الإنشاد، التمثيل، كتابة الكلمات وغيرها).'],
                            ['fas fa-lightbulb', 'تطوير الأفكار وتحسينها.'],
                            ['fas fa-laptop-medical', 'مساعدة الآخرين من خلال الخبرة التقنية.']
                        ]
                    },
                    expectation: {
                        title: 'التوقعات من الزوجة',
                        items: [
                            { iconClass: 'fas fa-mosque', title: 'الالتزام الديني', text: 'مسلمة ملتزمة بالحجاب والنقاب، وتراعي أحكام المحارم.' },
                            { iconClass: 'fas fa-user-shield', title: 'الخلق', text: 'متعلّمة ومتواضعة في السلوك.' },
                            { iconClass: 'fas fa-house', title: 'الدور الأسري', text: 'مدركة لمسؤوليات الأسرة.' },
                            { iconClass: 'fas fa-heart', title: 'نمط الحياة', text: 'تركز على الأسرة والحياة الإسلامية.' },
                            { iconClass: 'fas fa-palette', title: 'لون البشرة المفضل', text: 'قمحي أو فاتح (بمرونة).' },
                            { iconClass: 'fas fa-briefcase', title: 'المهنة', text: 'المهنة ليست شرطاً أساسياً؛ الأولوية لحياة أسرية ذات طابع إسلامي.' }
                        ]
                    },
                    contact: {
                        title: 'التواصل والموقع',
                        mapButton: 'عرض على خرائط جوجل',
                        permanentAddressValue: 'أوتار سوتالوري، جومعدار بارا، موريلغانج، باغرهات',
                        blocks: [
                            { iconClass: 'fas fa-user', label: 'الاسم', value: 'محمد محبوب الرحمن' },
                            { iconClass: 'fas fa-envelope', label: 'البريد الإلكتروني', value: 'bbdmahbub@gmail.com', href: 'mailto:bbdmahbub@gmail.com' },
                            { iconClass: 'fab fa-whatsapp', label: 'واتساب', value: '+٨٨٠١٩١٧٢٦٧٦٠٧', href: 'https://wa.me/8801917267607' },
                            { iconClass: 'fas fa-home', label: 'العنوان الحالي', value: 'هاتير جيل، دكا، بنغلاديش' },
                            { iconClass: 'fas fa-map-marker-alt', label: 'العنوان الدائم', value: 'أوتار سوتالوري، جومعدار بارا، موريلغانج، باغرهات', mapHref: permanentAddressMapHref }
                        ]
                    },
                    dua: {
                        title: 'كلمات ختامية ودعاء',
                        meanings: [
                            '',
                            '',
                            '',
                            ''
                        ],
                        references: [
                            '-سورة النور، آية ٣٢',
                            '-سورة الفرقان، آية ٧٤',
                            '-سورة الصافات، آية ١٠٠',
                            '-سورة الكهف، آية ١٠'
                        ],
                        closing: 'آمين يا رب العالمين.'
                    }
                },
                bn: {
                    locale: 'bn',
                    dir: 'ltr',
                    meta: {
                        title: 'সিভি - মো. মাহবুবুর রহমান',
                        description: 'মো. মাহবুবুর রহমানের ব্যক্তিগত, শিক্ষাগত, পেশাগত, প্রশিক্ষণ, কার্যক্রম ও যোগাযোগ তথ্যসহ সিভি।'
                    },
                    navigation: {
                        // quickJump: 'দ্রুত নেভিগেশন',
                        sectionsAria: 'পেজ সেকশনসমূহ',
                        languageSwitcherLabel: 'ভাষা সংস্করণ',
                        languagePanelHint: 'যেকোনো সময় পেজের ভাষা বদলান।',
                        languagePanelCollapse: 'ভাষা কন্ট্রোল লুকান',
                        languagePanelExpand: 'ভাষা কন্ট্রোল দেখান'
                    },
                    common: {
                        visit: 'ভিজিট',
                        lateBadge: 'মরহুম',
                        latePrefix: 'মরহুম '
                    },
                    intro: {
                        kicker: 'দোআ ও নির্দেশনা',
                        title: 'দয়া করে দেখার আগে পড়ে নিন',
                        duaMeaning: 'হে আমাদের রব, আপনার পক্ষ থেকে আমাদেরকে রহমত দান করুন\nএবং আমাদের কাজের জন্য সঠিক পথ নির্ধারণ করে দিন।',
                        duaReference: 'সূরা কাহফ্ : আয়াত - ১০',
                        instructionsTitle: 'নির্দেশনা',
                        instructions: [
                            'সম্মান ও আন্তরিকতার সাথে আল্লাহর উপর ভরসা করে শুরু করুন।',
                            'প্রতিটি সেকশনে দ্রুত যেতে উপরের মেনু ব্যবহার করুন।',
                            'দয়া করে এই প্রোফাইল দেখার সময় গোপনীয়তা বজায় রাখুন।'
                        ]
                    },
                    voice: {
                        tapToStart: 'বিসমিল্লাহ ভয়েস যাচাই শুরু করতে একবার মাইকে চাপ দিন।',
                        browserNoSupport: 'এই ব্রাউজারে লাইভ স্পিচ রিকগনিশন নেই। নিচের বোতাম ব্যবহার করে সিভি খুলুন।',
                        starting: 'মাইক্রোফোন চালু হচ্ছে। ব্রাউজার যদি অনুমতি চায় তাহলে Allow চাপুন।',
                        listening: 'মাইক্রোফোন চালু আছে। একবার "বিসমিল্লাহ" বলুন এবং যাচাইয়ের জন্য অপেক্ষা করুন।',
                        detected: (transcript) => `শোনা গেছে: "${transcript}"। সিভি খোলা হচ্ছে...`,
                        heard: (transcript) => `শোনা গেছে: "${transcript}"। আবার মাইকে চাপ দিয়ে "বিসমিল্লাহ" বলুন।`,
                        errors: {
                            'not-allowed': 'মাইক্রোফোন ব্যবহারের অনুমতি ব্লক করা হয়েছে। অনুগ্রহ করে অনুমতি দিয়ে আবার চেষ্টা করুন।',
                            'service-not-allowed': 'এই ব্রাউজারে স্পিচ রিকগনিশন সেবা ব্লক আছে। ব্রাউজার সাপোর্ট ও মাইক্রোফোন অনুমতি পরীক্ষা করুন।',
                            aborted: 'ভয়েস রেকর্ডিং শুরুর আগেই বন্ধ হয়ে গেছে। আবার মাইকে চাপ দিন।',
                            'audio-capture': 'কোনো মাইক্রোফোন পাওয়া যায়নি। মাইক্রোফোন যুক্ত করে আবার চেষ্টা করুন।',
                            'no-speech': 'কোনো কথা ধরা পড়েনি। আবার মাইকে চাপ দিয়ে "বিসমিল্লাহ" বলুন।',
                            'language-not-supported': 'এই ব্রাউজারে নির্বাচিত ভাষার স্পিচ রিকগনিশন সমর্থিত নয়।',
                            network: 'ব্রাউজার স্পিচ সার্ভিসে পৌঁছাতে পারেনি। সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।'
                        },
                        defaultError: 'ভয়েস রিকগনিশন ঠিকভাবে শুরু হয়নি। পপআপ এলে Allow চাপুন এবং আবার চেষ্টা করুন।',
                        timeout: 'শোনার সময় শেষ হয়েছে। আবার মাইকে চাপ দিয়ে "বিসমিল্লাহ" বলুন।',
                        notVerified: '"বিসমিল্লাহ" যাচাই করা যায়নি। আবার মাইকে চাপ দিয়ে বলুন।',
                        couldNotStart: 'এই মুহূর্তে মাইক্রোফোন চালু করা যায়নি। ব্রাউজার অনুমতি চাইলে Allow দিয়ে আবার চেষ্টা করুন।',
                        supportNoSupport: 'এই ব্রাউজারে লাইভ স্পিচ রিকগনিশন নেই, তাই নিচে Continue বাটন দেখানো হচ্ছে।',
                        supportPreparing: 'মাইক্রোফোন চালু হচ্ছে। একটু অপেক্ষা করুন।',
                        supportErrorGeneral: 'যদি কোনো পপআপ না আসে, তাহলে সাইটের মাইক্রোফোন অনুমতি ও ব্রাউজারের স্পিচ রিকগনিশন সাপোর্ট পরীক্ষা করুন।',
                        supportListening: 'রেকর্ডিং চলছে। একবার বলুন, তারপর যাচাইয়ের জন্য একটু অপেক্ষা করুন।',
                        supportIdle: 'মাইকে চাপ দিন। ব্রাউজার পপআপ এলে Allow চাপুন।',
                        micAriaRetry: 'ভয়েস রিকগনিশন আবার চেষ্টা করুন',
                        micAriaStop: 'ভয়েস রিকগনিশন বন্ধ করুন',
                        micAriaStart: 'ভয়েস রিকগনিশন শুরু করুন এবং বিসমিল্লাহ বলুন'
                    },
                    menu: {
                        profile: 'প্রোফাইল',
                        gallery: 'গ্যালারি',
                        personal: 'ব্যক্তিগত',
                        family: 'পরিবার',
                        work: 'কাজ',
                        lifestyle: 'জীবনধারা',
                        language: 'ভাষা',
                        education: 'শিক্ষা',
                        training: 'প্রশিক্ষণ',
                        activities: 'কার্যক্রম',
                        hobbies: 'শখ',
                        expectation: 'প্রত্যাশা',
                        contact: 'যোগাযোগ',
                        dua: 'দোআ'
                    },
                    profile: {
                        name: 'মো. মাহবুবুর রহমান',
                        subtitle: 'তথ্যপ্রযুক্তি পেশাজীবী',
                        tagline: 'নির্ভরযোগ্য সিস্টেম, কার্যকর সহায়তা ও ধারাবাহিক শেখায় মনোযোগী তথ্যপ্রযুক্তি পেশাজীবী',
                        stats: {
                            age: '২৮ বছর',
                            education: 'উচ্চশিক্ষিত',
                            work: 'সুপ্রতিষ্ঠিত',
                            faith: 'দ্বীনদার মুসলিম'
                        }
                    },
                    gallery: {
                        title: 'ছবি গ্যালারি',
                        photos: [
                            { src: withCvCacheVersion('assets/images/mahbub-portrait-1.jpg'), alt: 'Md Mahbubur Rahman-এর পোর্ট্রেট ১', label: 'ছবি ০১', featured: true },
                            { src: withCvCacheVersion('assets/images/mahbub-portrait-2.jpg'), alt: 'Md Mahbubur Rahman-এর পোর্ট্রেট ২', label: 'ছবি ০২', featured: false }
                        ]
                    },
                    sectionHeaders: {
                        personal: 'ব্যক্তিগত তথ্য',
                        family: 'পারিবারিক তথ্য',
                        work: 'পেশাগত তথ্য'
                    },
                    personalDetails: [
                        { label: 'পূর্ণ নাম', value: 'মো. মাহবুবুর রহমান', iconClass: 'fas fa-user' },
                        { label: 'ডাকনাম', value: 'নাসির উদ্দিন', iconClass: 'fas fa-signature' },
                        { label: 'জন্ম তারিখ', value: '২০ ডিসেম্বর ১৯৯৭', iconClass: 'fas fa-calendar-days' },
                        { label: 'বয়স', value: '২৮ বছর', iconClass: 'fas fa-hourglass-half' },
                        { label: 'ধর্ম', value: 'ইসলাম (প্র্যাকটিসিং মুসলিম)', iconClass: 'fas fa-mosque' },
                        { label: 'বৈবাহিক অবস্থা', value: 'অবিবাহিত', iconClass: 'fas fa-ring' },
                        { label: 'গায়ের রং', value: 'মাঝারি শ্যামলা', iconClass: 'fas fa-palette' },
                        { label: 'উচ্চতা ও ওজন', value: '৫\' ৩" ও ৭০ কেজি', iconClass: 'fas fa-ruler-combined' },
                        { label: 'রক্তের গ্রুপ', value: 'এ+', iconClass: 'fas fa-droplet' },
                        { label: 'স্বাস্থ্য অবস্থা', value: 'সুস্থ, ধূমপানমুক্ত, কোনো নেশা নেই', iconClass: 'fas fa-heart-pulse' }
                    ],
                    familyDetails: [
                        ['পিতা', 'মরহুম আব্দুল কাদের হাওলাদার (গ্রাম্য ডাক্তার ও প্রাথমিক শিক্ষক ছিলেন)'],
                        ['মাতা', 'ফরিদা বেগম - গৃহিণী'],
                        ['ভাইবোন', '৪ ভাই ও ৩ বোন'],
                        ['স্থায়ী ঠিকানা', 'উত্তর সুতালরি, জোমাদ্দার পাড়া, মোরেলগঞ্জ, বাগেরহাট'],
                        ['জেলা', 'বাগেরহাট']
                    ],
                    familySummary: {
                        label: 'পারিবারিক পটভূমি',
                        title: 'শিক্ষা ও ধর্মীয় মূল্যবোধে গড়া একটি সম্মানিত মধ্যবিত্ত পরিবার।',
                        tags: ['সম্মানিত', 'মধ্যবিত্ত', 'শিক্ষিত', 'ধর্মীয় অনুশাসনে বিশ্বাসী']
                    },
                    familySiblingsTitle: 'ভাইবোনের বিস্তারিত',
                    familySiblings: [
                        ['১ম বোন', 'শাহনাজ শান্তি, ৪ সন্তানের জননী, গৃহিণী। মোরেলগঞ্জ।'],
                        ['২য় ভাই', 'আলাউদ্দিন, আগে আবুধাবিতে কর্মরত ছিলেন, বর্তমানে ব্যবসা (ঢাকা)। ২ সন্তানের জনক। মোরেলগঞ্জ।'],
                        ['৩য় ভাই', 'গিয়াস উদ্দিন, গাড়ি চালক, বানঞ্জা পিএলসি, চট্টগ্রাম, বাংলাদেশ নৌবাহীন সদর। ২ সন্তানের জনক। মোরেলগঞ্জ।'],
                        ['৪র্থ বোন', 'জেরিন সালমা বেবি, ৩ সন্তানের জননী, গৃহিণী। মোরেলগঞ্জ।'],
                        ['৫ম ভাই', 'মহিউদ্দিন, গাড়ি চালক, (ডাক্তার দম্পত্তির) , চট্টগ্রাম। ৪ সন্তানের জনক। চট্টগ্রাম'],
                        ['৬ষ্ঠ বোন', 'নাজমা সুলতানা, ২ সন্তানের জননী, গৃহিণী। খুলনা।'],
                        ['৭ম', 'সবার ছোট ছেলে, নিজে।']
                    ],
                    siblingStatusData: {
                        '১ম বোন': { text: 'বিবাহিত', className: 'married' },
                        '২য় ভাই': { text: 'বিবাহিত', className: 'married' },
                        '৩য় ভাই': { text: 'বিবাহিত', className: 'married' },
                        '৪র্থ বোন': { text: 'বিবাহিত', className: 'married' },
                        '৫ম ভাই': { text: 'বিবাহিত', className: 'married' },
                        '৬ষ্ঠ বোন': { text: 'বিবাহিত', className: 'married' },
                        '৭ম': { text: 'অবিবাহিত', className: 'unmarried' }
                    },
                    workSection: {
                        items: [
                            { title: 'প্রকিউরমেন্ট অ্যান্ড সার্ভিসিং লিড', organization: 'আর্থফেস আইটি, ঢাকা', duration: '২৭ নভেম্বর ২০২১ - বর্তমান', iconClass: 'fas fa-briefcase' },
                            { title: 'আইটি সাপোর্ট অ্যাসিস্ট্যান্ট (খণ্ডকালীন)', organization: 'আরবি ভাষা ও সাহিত্য বিভাগ, ইসলামী বিশ্ববিদ্যালয়, কুষ্টিয়া', duration: '২৩ মার্চ ২০১৭ - ২০ অক্টোবর ২০২১', iconClass: 'fas fa-headset' },
                            { title: 'আইটি এক্সিকিউটিভ (খণ্ডকালীন)', organization: 'খন্দকার টেলিকম, টঙ্গি, গাজীপুর।', duration: '৭ জুলাই ২০১৪ - ১২ ডিসেম্বর ২০১৫', iconClass: 'fas fa-desktop' }
                        ]
                    },
                    lifestyle: {
                        title: 'ব্যক্তিত্ব ও জীবনধারা',
                        items: [
                            { label: 'চরিত্র', value: 'নম্র, ধর্মপরায়ণ, বিশ্বস্ত', iconClass: 'fas fa-user-shield' },
                            { label: 'ভবিষ্যৎ লক্ষ্য', value: 'দ্বীন ও পারস্পরিক সম্মানের ভিত্তিতে পরিবার গঠন', iconClass: 'fas fa-bullseye' },
                            { label: 'আগ্রহ', value: 'ইসলামিক লেকচার, পড়াশোনা, ভ্রমণ, প্রযুক্তি শেখা', iconClass: 'fas fa-book-open' },
                            { label: 'খাদ্যাভ্যাস', value: 'ঘরে তৈরি হালাল খাবার পছন্দ', iconClass: 'fas fa-utensils' },
                            { label: 'অতিরিক্ত', value: 'সময়নিষ্ঠ, স্বভাবে সংযত, সামাজিক, ভদ্র', iconClass: 'fas fa-check-double' }
                        ]
                    },
                    languages: {
                        title: 'ভাষাগত দক্ষতা',
                        proficiencyAria: (title) => `${title} ভাষার দক্ষতা`,
                        items: [
                            { title: 'ইংরেজি', level: 'ভালো', percent: 66.66 },
                            { title: 'আরবি', level: 'ভালো', percent: 66.66 },
                            { title: 'বাংলা', level: 'চমৎকার', percent: 100 }
                        ]
                    },
                    education: {
                        title: 'শিক্ষাগত তথ্য',
                        items: [
                            { title: 'এম.এ. (আরবি ভাষা ও সাহিত্য)', institution: 'ইসলামী বিশ্ববিদ্যালয়, কুষ্টিয়া।', institutionHref: 'https://iu.ac.bd', scoreLabel: 'সিজিপিএ', score: '৩.৫৮/৪', session: '২০২২' },
                            { title: 'বি.এ. অনার্স (আরবি ভাষা ও সাহিত্য)', institution: 'ইসলামী বিশ্ববিদ্যালয়, কুষ্টিয়া।', institutionHref: 'https://iu.ac.bd', scoreLabel: 'সিজিপিএ', score: '৩.৫৮/৪', session: '২০২০' },
                            { title: 'আলিম (এইচএসসি)', institution: 'তামিরুল মিল্লাত কামিল মাদরাসা, টঙ্গি, গাজীপুর', institutionHref: 'https://www.tmt.edu.bd', scoreLabel: 'জিপিএ', score: '৫.০০/৫', session: '২০১৪' },
                            { title: 'দাখিল (এসএসসি)', institution: 'তালিমুল মিল্লাত রহমতিয়া ফাযিল মাদরাসা, সোনাডঙ্গা, খুলনা', scoreLabel: 'জিপিএ', score: '৫.০০/৫', session: '২০১২' }
                        ]
                    },
                    training: {
                        title: 'প্রশিক্ষণ ও উন্নয়ন',
                        items: [
                            { text: 'করপোরেট ম্যানেজমেন্ট বুটক্যাম্প - ২০২৩ (১০ দিনব্যাপী, বিওয়াইএলসি, বাংলাদেশ.)', href: 'https://bylc.org', linkLabel: 'ভিজিট' },
                            { text: 'প্রফেশনাল ডিজিটাল কন্টেন্ট ম্যানেজমেন্ট (পিডিসিএম), (৩ মাস, সেইপ, অর্থ মন্ত্রণালয়, বাংলাদেশ)', href: 'https://lms.seip-fd.gov.bd', linkLabel: 'ভিজিট' },
                            { text: 'ওয়েব ডিজাইন এন্ড ডেভলপমেন্ট (২০০ ঘণ্টা, এলইডিপি, আইসিটি বিভাগ, বাংলাদেশ।)', href: 'https://ictd.gov.bd', linkLabel: 'ভিজিট' },
                            { text: 'কম্পিউটার এন্ড ইটস্ অ্যাপ্লিকেশনস (১ বছর, ইসলামী বিশ্ববিদ্যালয়, কুষ্টিয়া।)', href: 'https://iu.ac.bd', linkLabel: 'ভিজিট' },
                            { text: 'ট্রাবলশুটিং ইন কম্পিউটার সিকিউরিটি (আইসিটি বিভাগ, এটুআই)', href: 'https://a2i.gov.bd', linkLabel: 'ভিজিট' },
                            { text: 'মাইক্রোসফট ওয়ার্ড ব্যাসিক ( মুক্তপাঠ, এটুআই)', href: 'https://a2i.gov.bd', linkLabel: 'ভিজিট' },
                            { text: 'ভিডিও প্রোডাক্টশন (হিউম্যান ডেভলপমেন্ট মিডিয়া, এটুআই)', href: 'https://a2i.gov.bd', linkLabel: 'ভিজিট' },
                            { text: 'ডিজিটাল সিকিউরিটি অ্যাসেনস্যাল ( ডিজিটাল সিকিউরিটি এজেন্সি, এটুআই)', href: 'https://a2i.gov.bd', linkLabel: 'ভিজিট' },
                            { text: 'আইডিয়া ইনোভেশন ওয়ার্কশপ ফর মোবাইল গেমস অ্যান্ড অ্যাপস ডেভলপমেন্ট (আইসিটি বিভাগ, ডিজিটাল বাংলাদেশ)', href: 'https://a2i.gov.bd', linkLabel: 'ভিজিট' }
                        ]
                    },
                    activities: {
                        title: 'সহশিক্ষা কার্যক্রম',
                        items: [
                            {
                                title: 'স্বেচ্ছাসেবামূলক কাজ',
                                period: '',
                                items: [
                                    { text: 'সাবেক নির্বাচিত সিআর, ২বছর, ইসলামী বিশ্ববিদ্যালয়, কুষ্টিয়া।', iconClass: 'fas fa-users', href: 'https://iu.ac.bd', linkLabel: 'ভিজিট' },
                                    { text: 'সাবেক পরিচালক, ব্যতিক্রম সাহিত্য সাংস্কৃতিক জোট, ইবি।', iconClass: 'fas fa-masks-theater', href: 'https://web.facebook.com/betikrom87', linkLabel: 'ভিজিট' },
                                    { text: 'সাবেক কেন্দ্রীয় সদস্য, বাংলাদেশ ইসলামী ছাত্রশিবির, ঢাকা।', iconClass: 'fas fa-shield-halved', href: 'https://shibir.org.bd', linkLabel: 'ভিজিট' }
                                ]
                            },
                            { title: 'গান', items: [{ text: 'SATV, ETV, Channel 9-এ গান পরিবেশন করেছেন', iconClass: 'fas fa-music' }] },
                            { title: 'অভিনয়', period: '2018', items: [{ text: 'একটি নাটকে অভিনয় করেছেন এবং জাতীয় পর্যায়ে ২য় হয়েছেন।', iconClass: 'fas fa-film' }] },
                            { title: 'পুরস্কার', period: '2012', items: [{ text: 'কবিতা আবৃত্তিতে জাতীয় পর্যায়ে ২য় স্থান অর্জন করেছেন।', iconClass: 'fas fa-award' }] }
                        ]
                    },
                    hobbies: {
                        title: 'শখ ও আগ্রহ',
                        items: [
                            ['fas fa-masks-theater', 'সাংস্কৃতিক সচেতনতা (গান, অভিনয়, গীতরচনা ইত্যাদি)।'],
                            ['fas fa-lightbulb', 'আইডিয়া উন্নয়ন ও অপ্টিমাইজেশন।'],
                            ['fas fa-laptop-medical', 'প্রযুক্তিগত দক্ষতা দিয়ে অন্যকে সহায়তা করা।']
                        ]
                    },
                    expectation: {
                        title: 'পাত্রীর কাছে প্রত্যাশা',
                        items: [
                            { iconClass: 'fas fa-mosque', title: 'ধর্মীয় অনুশীলন', text: 'হিজাব ও নিকাব পালনকারী, মাহরাম-নন মাহরাম সম্পর্কে সচেতন একজন প্র্যাকটিসিং মুসলিমাহ।' },
                            { iconClass: 'fas fa-user-shield', title: 'চরিত্র', text: 'শিক্ষিত ও আচার-আচরণে মার্জিত।' },
                            { iconClass: 'fas fa-house', title: 'পারিবারিক ভূমিকা', text: 'পারিবারিক দায়িত্ব সম্পর্কে সচেতন।' },
                            { iconClass: 'fas fa-heart', title: 'জীবনধারা', text: 'পরিবার ও ইসলামিক জীবনধারায় মনোযোগী।' },
                            { iconClass: 'fas fa-palette', title: 'পছন্দের গায়ের রং', text: 'মাঝারি/ফর্সা (নমনীয়)।' },
                            { iconClass: 'fas fa-briefcase', title: 'পেশা', text: 'পেশা বাধ্যতামূলক নয়; পরিবারমুখী ইসলামিক জীবনধারাকে অগ্রাধিকার দেওয়া হবে।' }
                        ]
                    },
                    contact: {
                        title: 'যোগাযোগ ও অবস্থান',
                        mapButton: 'Google Maps-এ দেখুন',
                        permanentAddressValue: 'Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat',
                        blocks: [
                            { iconClass: 'fas fa-user', label: 'নাম', value: 'মো মাহবুবুর রহমান' },
                            { iconClass: 'fas fa-envelope', label: 'ইমেইল', value: 'bbdmahbub@gmail.com', href: 'mailto:bbdmahbub@gmail.com' },
                            { iconClass: 'fab fa-whatsapp', label: 'হোয়াটসঅ্যাপ', value: '+৮৮০১৯১৭২৬৭৬০৭', href: 'https://wa.me/8801917267607' },
                            { iconClass: 'fas fa-home', label: 'বর্তমান ঠিকানা', value: 'হাতিরঝিল, ঢাকা, বাংলাদেশ' },
                            { iconClass: 'fas fa-map-marker-alt', label: 'স্থায়ী ঠিকানা', value: 'উত্তর সুতালড়ী, জোমাদ্দারপাড়া, মোরেলগঞ্জ, বাগেরহাট', mapHref: permanentAddressMapHref }
                        ]
                    },
                    dua: {
                        title: 'শেষ কথা ও দোআ',
                        meanings: [
                            'তোমাদের মধ্যে যারা অবিবাহিত এবং তোমাদের দাস-দাসীদের মধ্যে যারা সৎকর্মপরায়ণ, তাদের বিবাহ দাও। তারা অভাবী হলে আল্লাহ নিজ অনুগ্রহে তাদেরকে অভাবমুক্ত করবেন। আল্লাহ প্রাচুর্যময়, সর্বজ্ঞ।',
                            'হে আমাদের রব, আমাদের স্ত্রী ও সন্তানদেরকে আমাদের চোখের শীতলতা দান করুন এবং আমাদেরকে মুত্তাকীদের জন্য আদর্শ বানান।',
                            'হে রব, আমাকে নেককারদের একজন দান করুন।',
                            'হে আমাদের রব, আপনি আমাদেরকে আপনার পক্ষ থেকে রহমত দিন এবং আমাদের কাজের জন্য সঠিক পথ নির্ধারণ করে দিন।'
                        ],
                        references: [
                            '-সূরা নূর : আয়াত - ৩২',
                            '-সূরা আল-ফুরকান : আয়াত - ৭৪',
                            '-সূরা আস-সাফফাত : আয়াত - ১০০',
                            '-সূরা কাহফ্ : আয়াত - ১০'
                        ],
                        closing: 'আমীন ইয়া রব্বাল আলামিন।'
                    }
                }
            };
            const hasSpeechRecognitionSupport = typeof window !== 'undefined'
                && (typeof window.SpeechRecognition === 'function' || typeof window.webkitSpeechRecognition === 'function');
            const touchVoiceVerificationTimestamp = () => {
                try {
                    window.localStorage.setItem(voiceVerificationStorageKey, String(Date.now()));
                } catch (error) {
                    // Ignore storage failures and keep the access flow working.
                }
            };
            const markBismillahIntroSeen = () => {
                try {
                    window.localStorage.setItem(bismillahIntroSeenStorageKey, 'true');
                } catch (error) {
                    // Ignore storage failures and keep the access flow working.
                }
            };
            const hasSeenBismillahIntro = () => {
                try {
                    return window.localStorage.getItem(bismillahIntroSeenStorageKey) === 'true';
                } catch (error) {
                    return false;
                }
            };
            const hasRecentVoiceVerification = () => {
                try {
                    const storedValue = window.localStorage.getItem(voiceVerificationStorageKey);
                    if (!storedValue) return false;

                    const verifiedAt = Number(storedValue);
                    if (!Number.isFinite(verifiedAt) || verifiedAt <= 0) return false;

                    return Date.now() - verifiedAt < voiceVerificationGracePeriodMs;
                } catch (error) {
                    return false;
                }
            };
            const warmCvAssetCache = () => {
                if (typeof document === 'undefined') return;

                const photoAssets = Object.values(translations).flatMap((translation) => (
                    translation.gallery.photos.map(({ src }) => src)
                ));
                const audioAssets = [
                    bismillahToneSrc,
                    withCvCacheVersion(encodeURI('assets/audio/jodi-kotha-dao-bondhu.mp3')),
                    withCvCacheVersion(encodeURI('assets/audio/rasuler-simahin-valobasha.mp3')),
                    withCvCacheVersion(encodeURI('assets/audio/khadijar-moto-jibon-goro.mp3'))
                ];
                const preloadAssets = [
                    ...photoAssets.map((href) => ({ href, as: 'image' })),
                    ...audioAssets.map((href) => ({ href, as: 'audio' }))
                ];

                preloadAssets.forEach(({ href, as }) => {
                    if (document.querySelector(`link[data-cv-preload="${href}"]`)) return;

                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.href = href;
                    link.as = as;
                    link.setAttribute('data-cv-preload', href);
                    if (as === 'audio') {
                        link.type = 'audio/mpeg';
                    }
                    document.head.appendChild(link);
                });

                Array.from(new Set(photoAssets)).forEach((src) => {
                    const image = new Image();
                    image.decoding = 'async';
                    image.src = src;
                });

                if (typeof window !== 'undefined' && typeof window.Audio === 'function') {
                    Array.from(new Set(audioAssets)).forEach((src) => {
                        try {
                            const audio = new window.Audio();
                            audio.preload = 'auto';
                            audio.src = src;
                            audio.load();
                        } catch (error) {
                            // Ignore browser autoplay or preload restrictions.
                        }
                    });
                }
            };
            const getInitialLanguage = () => {
                try {
                    const storedLanguage = window.localStorage.getItem('bbdMahbubLanguage');
                    if (storedLanguage && translations[storedLanguage]) {
                        return storedLanguage;
                    }
                } catch (error) {
                    // Ignore storage failures and fall back to browser language.
                }

                return 'bn';
            };
            const arabicIndicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
            const arabicNumberSkipKeys = new Set([
                'src',
                'href',
                'institutionHref',
                'mapHref',
                'iconClass',
                'className',
                'code',
                'shortLabel',
                'locale',
                'dir'
            ]);
            const localizeArabicDigits = (value) => value
                .replace(/(\d)\.(\d)/g, '$1٫$2')
                .replace(/(\d),(\d)/g, '$1٬$2')
                .replace(/\d/g, (digit) => arabicIndicDigits[Number(digit)])
                .replace(/%/g, '٪');
            const localizeArabicDisplayValue = (value, key = '') => {
                if (typeof value === 'string') {
                    return arabicNumberSkipKeys.has(key) ? value : localizeArabicDigits(value);
                }

                if (typeof value === 'function') {
                    return (...args) => {
                        const result = value(...args);
                        return typeof result === 'string' ? localizeArabicDigits(result) : result;
                    };
                }

                if (Array.isArray(value)) {
                    return value.map((item) => localizeArabicDisplayValue(item));
                }

                if (value && typeof value === 'object') {
                    return Object.fromEntries(
                        Object.entries(value).map(([entryKey, entryValue]) => (
                            [entryKey, localizeArabicDisplayValue(entryValue, entryKey)]
                        ))
                    );
                }

                return value;
            };
            const ltrNumberRunPattern = /[+\-]?[0-9٠-٩]+(?:[\s.,٫٬/:()'"%-]*[0-9٠-٩]+)*(?:\s*(?:٪|%|KGs?|kg|years?|Years?))?/g;
            const [language, setLanguage] = React.useState(getInitialLanguage);
            const selectedTranslation = translations[language] || translations.en;
            const copy = language === 'ar'
                ? localizeArabicDisplayValue(selectedTranslation)
                : selectedTranslation;
            const isRtl = selectedTranslation.dir === 'rtl';
            const introVoiceHint = hasSpeechRecognitionSupport
                ? copy.voice.tapToStart
                : copy.voice.browserNoSupport;

            const sectionIcons = {
                personal: iconProfile,
                family: iconFamily,
                education: iconEducation,
                work: iconWork
            };

            const menuItems = [
                ['profile-top', copy.menu.profile],
                ['gallery-section', copy.menu.gallery],
                ['personal-section', copy.menu.personal],
                ['work-section', copy.menu.work],
                ['language-section', copy.menu.language],
                ['education-section', copy.menu.education],
                ['training-section', copy.menu.training],
                ['activities-section', copy.menu.activities],
                ['hobbies-section', copy.menu.hobbies],
                ['contact-section', copy.menu.contact],
                ['dua-section', copy.menu.dua]
            ];
            const isKnownSectionId = (sectionId) => menuItems.some(([id]) => id === sectionId);
            const getSavedActiveSection = () => {
                const hashId = window.location.hash.replace('#', '');
                if (isKnownSectionId(hashId)) return hashId;

                try {
                    const storedSection = window.localStorage.getItem(activeSectionStorageKey);
                    if (isKnownSectionId(storedSection)) return storedSection;
                } catch (error) {
                    // Ignore storage failures and start from the top section.
                }

                return menuItems[0][0];
            };

            const [activeSection, setActiveSection] = React.useState(() => {
                return getSavedActiveSection();
            });
            const [isIntroPopupOpen, setIsIntroPopupOpen] = React.useState(false);
            const [isBismillahLoadingOpen, setIsBismillahLoadingOpen] = React.useState(() => !hasSeenBismillahIntro());
            const [isVoiceListening, setIsVoiceListening] = React.useState(false);
            const [voiceUiState, setVoiceUiState] = React.useState('idle');
            const [voicePrompt, setVoicePrompt] = React.useState(introVoiceHint);
            const [selectedPuzzleIndexes, setSelectedPuzzleIndexes] = React.useState([]);
            const [isPuzzleSolved, setIsPuzzleSolved] = React.useState(false);
            const [isMenuDragging, setIsMenuDragging] = React.useState(false);
            const [isLanguageRowCollapsed, setIsLanguageRowCollapsed] = React.useState(true);
            const [zoomedPhoto, setZoomedPhoto] = React.useState(null);
            const [photoViewerTransform, setPhotoViewerTransform] = React.useState({ scale: 1, x: 0, y: 0 });
            const menuLinksRef = React.useRef(null);
            const hasCenteredMenuRef = React.useRef(false);
            const speechRecognitionRef = React.useRef(null);
            const recognitionTimerRef = React.useRef(null);
            const isPreparingVoiceRef = React.useRef(false);
            const voiceStopReasonRef = React.useRef('idle');
            const voiceMatchedRef = React.useRef(false);
            const menuDragStateRef = React.useRef({
                pointerId: null,
                startX: 0,
                startScrollLeft: 0,
                moved: false
            });
            const suppressMenuClickRef = React.useRef(false);
            const menuClickResetTimeoutRef = React.useRef(null);
            const hasBootstrappedSavedVerificationRef = React.useRef(false);
            const hasShownLanguageRowHintRef = React.useRef(false);
            const hasRestoredActiveSectionRef = React.useRef(false);
            const languageRowHideTimeoutRef = React.useRef(null);
            const lastVoiceVerificationTouchRef = React.useRef(0);
            const isEnteringBiodataRef = React.useRef(false);
            const isBismillahSuccessInProgressRef = React.useRef(false);
            const isBismillahLoadingClickInProgressRef = React.useRef(false);
            const hasPreloadedCvAssetsRef = React.useRef(false);
            const photoPointerCacheRef = React.useRef(new Map());
            const photoGestureRef = React.useRef(null);

            const detailGroups = {
                personal: copy.personalDetails.filter(({ iconClass }) => ![
                    'fas fa-ring',
                    'fas fa-palette',
                    'fas fa-ruler-combined'
                ].includes(iconClass)),
                work: copy.workSection.items
            };
            const workData = copy.workSection.items;
            const languageData = copy.languages.items;
            const educationData = copy.education.items;
            const activityData = copy.activities.items;
            const hobbiesData = copy.hobbies.items;
            const trainingItems = copy.training.items;
            const contactBlocks = copy.contact.blocks;
            const permanentAddressValue = copy.contact.permanentAddressValue;
            const voiceCopy = copy.voice;
            const activePuzzleSet = bismillahPuzzleSets[language] || bismillahPuzzleSets.en;
            const voicePuzzleSeparatorText = language === 'bn' ? 'অথবা' : language === 'ar' ? 'أو' : 'OR';
            const selectedPuzzlePieces = selectedPuzzleIndexes.map((pieceIndex) => ({
                index: pieceIndex,
                text: activePuzzleSet.pieces[pieceIndex]
            }));
            const availablePuzzlePieces = activePuzzleSet.pieces
                .map((text, index) => ({ text, index }))
                .filter(({ index }) => !selectedPuzzleIndexes.includes(index));
            const trainingIconClasses = [
                'fas fa-medal',
                'fas fa-briefcase',
                'fas fa-laptop-code',
                'fas fa-desktop',
                'fas fa-shield-halved',
                'fas fa-file-word',
                'fas fa-video',
                'fas fa-lock',
                'fas fa-lightbulb'
            ];
            const languageDetailIconClass = 'fas fa-language';
            const educationDetailIconClass = 'fas fa-graduation-cap';
            const activityDetailIconClass = 'fas fa-star';
            const availableLanguageOptions = languageOptions.filter(({ code }) => code !== language);
            const renderPuzzleTitle = () => {
                if (language === 'en') {
                    return (
                        <>
                            MATCH <span className="intro-popup-puzzle-title-mark">BISMILLAH</span> CORRECTLY
                        </>
                    );
                }

                if (language === 'bn') {
                    return (
                        <>
                            সঠিকভাবে <span className="intro-popup-puzzle-title-mark">বিসমিল্লাহ্</span> মিলান
                        </>
                    );
                }

                if (language === 'ar') {
                    return (
                        <>
                            رَتِّبْ <span className="intro-popup-puzzle-title-mark">بِسْمِ اللَّهِ</span> بِشَكْلٍ صَحِيحٍ
                        </>
                    );
                }

                return activePuzzleSet.title;
            };

            const renderTextWithLtrNumbers = (text) => {
                if (!isRtl || typeof text !== 'string') return text;

                const parts = [];
                let lastIndex = 0;

                text.replace(ltrNumberRunPattern, (match, offset) => {
                    if (offset > lastIndex) {
                        parts.push(text.slice(lastIndex, offset));
                    }

                    parts.push(
                        <bdi className="bidi-ltr-number" dir="ltr" key={`${match}-${offset}`}>
                            {match}
                        </bdi>
                    );
                    lastIndex = offset + match.length;
                    return match;
                });

                if (lastIndex < text.length) {
                    parts.push(text.slice(lastIndex));
                }

                return parts.length ? parts : text;
            };

            const renderDetailValue = (value) => {
                if (typeof value === 'string' && value === permanentAddressValue) {
                    return (
                        <>
                            {renderTextWithLtrNumbers(value)}
                            <div className="address-actions">
                                <a className="map-link-button" href={permanentAddressMapHref} target="_blank" rel="noreferrer">
                                    <i className="fas fa-location-arrow" aria-hidden="true"></i>
                                    {copy.contact.mapButton}
                                </a>
                            </div>
                        </>
                    );
                }

                if (typeof value !== 'string') {
                    return value;
                }

                if (!value.startsWith(copy.common.latePrefix)) {
                    return renderTextWithLtrNumbers(value);
                }

                return (
                    <>
                        <span className="detail-inline-badge late-inline-badge">{copy.common.lateBadge}</span>
                        {' '}
                        {renderTextWithLtrNumbers(value.slice(copy.common.latePrefix.length))}
                    </>
                );
            };

            const centerMenuLink = (id, behavior = 'smooth') => {
                const menuLinks = menuLinksRef.current;
                if (!menuLinks) return;

                const targetLink = menuLinks.querySelector(`[data-menu-id="${id}"]`);
                if (!targetLink) return;

                targetLink.scrollIntoView({
                    behavior,
                    block: 'nearest',
                    inline: 'center'
                });
            };
            const clampPhotoScale = (scale) => Math.min(4, Math.max(1, scale));
            const getPhotoPointerDistance = (firstPointer, secondPointer) => Math.hypot(
                secondPointer.x - firstPointer.x,
                secondPointer.y - firstPointer.y
            );
            const getPhotoPointerCenter = (firstPointer, secondPointer) => ({
                x: (firstPointer.x + secondPointer.x) / 2,
                y: (firstPointer.y + secondPointer.y) / 2
            });
            const openPhotoViewer = (photo) => {
                setZoomedPhoto(photo);
                setPhotoViewerTransform({ scale: 1, x: 0, y: 0 });
                photoPointerCacheRef.current.clear();
                photoGestureRef.current = null;
            };
            const closePhotoViewer = () => {
                setZoomedPhoto(null);
                setPhotoViewerTransform({ scale: 1, x: 0, y: 0 });
                photoPointerCacheRef.current.clear();
                photoGestureRef.current = null;
            };
            const handlePhotoBackdropClick = (event) => {
                if (event.target === event.currentTarget) {
                    closePhotoViewer();
                }
            };
            const handlePhotoViewerDoubleClick = () => {
                setPhotoViewerTransform((currentTransform) => (
                    currentTransform.scale > 1
                        ? { scale: 1, x: 0, y: 0 }
                        : { scale: 2.4, x: 0, y: 0 }
                ));
            };
            const handlePhotoPointerDown = (event) => {
                event.preventDefault();

                event.currentTarget.setPointerCapture(event.pointerId);
                photoPointerCacheRef.current.set(event.pointerId, {
                    x: event.clientX,
                    y: event.clientY
                });

                const pointers = Array.from(photoPointerCacheRef.current.values());
                if (pointers.length >= 2) {
                    photoGestureRef.current = {
                        type: 'pinch',
                        startDistance: getPhotoPointerDistance(pointers[0], pointers[1]) || 1,
                        startCenter: getPhotoPointerCenter(pointers[0], pointers[1]),
                        startTransform: photoViewerTransform
                    };
                    return;
                }

                photoGestureRef.current = {
                    type: 'pan',
                    startPointer: { x: event.clientX, y: event.clientY },
                    startTransform: photoViewerTransform
                };
            };
            const handlePhotoPointerMove = (event) => {
                if (!photoPointerCacheRef.current.has(event.pointerId)) return;

                event.preventDefault();
                photoPointerCacheRef.current.set(event.pointerId, {
                    x: event.clientX,
                    y: event.clientY
                });

                const pointers = Array.from(photoPointerCacheRef.current.values());
                const gesture = photoGestureRef.current;
                if (!gesture) return;

                if (pointers.length >= 2 && gesture.type === 'pinch') {
                    const distance = getPhotoPointerDistance(pointers[0], pointers[1]) || 1;
                    const center = getPhotoPointerCenter(pointers[0], pointers[1]);
                    const nextScale = clampPhotoScale(gesture.startTransform.scale * (distance / gesture.startDistance));

                    setPhotoViewerTransform({
                        scale: nextScale,
                        x: gesture.startTransform.x + (center.x - gesture.startCenter.x),
                        y: gesture.startTransform.y + (center.y - gesture.startCenter.y)
                    });
                    return;
                }

                if (pointers.length === 1 && gesture.type === 'pan') {
                    if (gesture.startTransform.scale <= 1) return;

                    setPhotoViewerTransform({
                        scale: gesture.startTransform.scale,
                        x: gesture.startTransform.x + (event.clientX - gesture.startPointer.x),
                        y: gesture.startTransform.y + (event.clientY - gesture.startPointer.y)
                    });
                }
            };
            const finishPhotoPointer = (event) => {
                if (photoPointerCacheRef.current.has(event.pointerId)) {
                    photoPointerCacheRef.current.delete(event.pointerId);
                }

                const pointers = Array.from(photoPointerCacheRef.current.values());
                if (pointers.length === 1) {
                    photoGestureRef.current = {
                        type: 'pan',
                        startPointer: pointers[0],
                        startTransform: photoViewerTransform
                    };
                    return;
                }

                photoGestureRef.current = null;
            };

            React.useEffect(() => {
                centerMenuLink(activeSection, hasCenteredMenuRef.current ? 'smooth' : 'auto');
                hasCenteredMenuRef.current = true;
            }, [activeSection, language]);

            React.useEffect(() => {
                if (isIntroPopupOpen || isBismillahLoadingOpen) return;
                if (hasRestoredActiveSectionRef.current) return;

                window.requestAnimationFrame(() => {
                    const target = document.getElementById(activeSection);
                    hasRestoredActiveSectionRef.current = true;
                    if (!target) return;

                    target.scrollIntoView({
                        behavior: 'auto',
                        block: 'start'
                    });
                });
            }, [activeSection, isIntroPopupOpen, isBismillahLoadingOpen]);

            React.useEffect(() => {
                if (!hasRestoredActiveSectionRef.current) return;

                try {
                    window.localStorage.setItem(activeSectionStorageKey, activeSection);
                } catch (error) {
                    // Ignore storage failures; section tracking remains in-memory.
                }
            }, [activeSection]);

            React.useEffect(() => () => {
                if (menuClickResetTimeoutRef.current) {
                    window.clearTimeout(menuClickResetTimeoutRef.current);
                }
                if (languageRowHideTimeoutRef.current) {
                    window.clearTimeout(languageRowHideTimeoutRef.current);
                }
            }, []);

            React.useEffect(() => {
                if (hasBootstrappedSavedVerificationRef.current) return;
                if (isIntroPopupOpen) return;
                if (isBismillahLoadingOpen) return;

                hasBootstrappedSavedVerificationRef.current = true;

                if (!document.body.classList.contains('has-entered-biodata')) {
                    document.body.classList.add('has-entered-biodata');
                    window.dispatchEvent(new Event('bbdMahbub:enter-biodata'));
                }
            }, [isIntroPopupOpen, isBismillahLoadingOpen]);

            React.useEffect(() => {
                if (isIntroPopupOpen) return undefined;
                if (!hasRecentVoiceVerification()) return undefined;

                const refreshVerificationActivity = () => {
                    const now = Date.now();
                    if (now - lastVoiceVerificationTouchRef.current < 60000) return;

                    lastVoiceVerificationTouchRef.current = now;
                    touchVoiceVerificationTimestamp();
                };

                const activityEvents = ['pointerdown', 'keydown', 'scroll', 'touchstart'];
                activityEvents.forEach((eventName) => {
                    window.addEventListener(eventName, refreshVerificationActivity, { passive: true });
                });

                return () => {
                    activityEvents.forEach((eventName) => {
                        window.removeEventListener(eventName, refreshVerificationActivity);
                    });
                };
            }, [isIntroPopupOpen]);

            React.useEffect(() => {
                const selectedCopy = translations[language] || translations.en;

                try {
                    window.localStorage.setItem('bbdMahbubLanguage', language);
                } catch (error) {
                    // Ignore storage failures and keep language switching functional.
                }

                document.documentElement.lang = selectedCopy.locale;
                document.documentElement.dir = selectedCopy.dir;
                document.body.classList.toggle('is-rtl-language', isRtl);
                document.title = selectedCopy.meta.title;

                const updateMetaContent = (selector, value) => {
                    const element = document.querySelector(selector);
                    if (element) {
                        element.setAttribute('content', value);
                    }
                };

                updateMetaContent('meta[name="description"]', selectedCopy.meta.description);
                updateMetaContent('meta[property="og:title"]', selectedCopy.meta.title);
                updateMetaContent('meta[property="og:description"]', selectedCopy.meta.description);
                updateMetaContent('meta[name="twitter:title"]', selectedCopy.meta.title);
                updateMetaContent('meta[name="twitter:description"]', selectedCopy.meta.description);

                window.dispatchEvent(new CustomEvent('bbdMahbub:languagechange', {
                    detail: {
                        language,
                        dir: selectedCopy.dir
                    }
                }));
            }, [isRtl, language]);

            React.useEffect(() => {
                if (isVoiceListening || speechRecognitionRef.current) return;
                setVoicePrompt(introVoiceHint);
            }, [introVoiceHint, isVoiceListening]);

            React.useEffect(() => {
                setSelectedPuzzleIndexes([]);
                setIsPuzzleSolved(false);
            }, [language]);

            React.useEffect(() => {
                const syncMenuLayout = () => {
                    const menu = document.querySelector('.top-menu');
                    if (menu) {
                        const stickyTop = parseFloat(window.getComputedStyle(menu).top) || 0;
                        document.documentElement.style.setProperty('--menu-offset', `${menu.offsetHeight + stickyTop}px`);
                    }

                    window.dispatchEvent(new Event('bbdMahbub:menu-resize'));

                    if (isIntroPopupOpen || isBismillahLoadingOpen) return;
                    if (!hasRestoredActiveSectionRef.current) return;

                    const target = document.getElementById(activeSection);
                    if (!target) return;

                    target.scrollIntoView({
                        behavior: 'auto',
                        block: 'start'
                    });
                };

                window.requestAnimationFrame(syncMenuLayout);
                const midResizeTimer = window.setTimeout(syncMenuLayout, 80);
                const finalResizeTimer = window.setTimeout(syncMenuLayout, 280);

                return () => {
                    window.clearTimeout(midResizeTimer);
                    window.clearTimeout(finalResizeTimer);
                };
            }, [isBismillahLoadingOpen, isIntroPopupOpen, isLanguageRowCollapsed, language]);

            React.useEffect(() => {
                let ticking = false;

                const updateActiveSection = () => {
                    if (!hasRestoredActiveSectionRef.current) {
                        ticking = false;
                        return;
                    }

                    const menu = document.querySelector('.top-menu');
                    const menuHeight = menu ? menu.getBoundingClientRect().height : 0;
                    const menuTop = menu ? (parseFloat(window.getComputedStyle(menu).top) || 0) : 0;
                    const scrollReference = window.scrollY + menuTop + menuHeight + 96;
                    let nextActiveSection = menuItems[0][0];

                    for (const [id] of menuItems) {
                        const section = document.getElementById(id);
                        if (!section) continue;

                        if (section.offsetTop <= scrollReference) {
                            nextActiveSection = id;
                            continue;
                        }

                        break;
                    }

                    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24) {
                        nextActiveSection = menuItems[menuItems.length - 1][0];
                    }

                    setActiveSection((currentActiveSection) => (
                        currentActiveSection === nextActiveSection ? currentActiveSection : nextActiveSection
                    ));
                    ticking = false;
                };

                const scheduleActiveSectionUpdate = () => {
                    if (ticking) return;
                    ticking = true;
                    window.requestAnimationFrame(updateActiveSection);
                };

                updateActiveSection();
                window.addEventListener('scroll', scheduleActiveSectionUpdate, { passive: true });
                window.addEventListener('resize', scheduleActiveSectionUpdate);
                window.addEventListener('hashchange', scheduleActiveSectionUpdate);

                return () => {
                    window.removeEventListener('scroll', scheduleActiveSectionUpdate);
                    window.removeEventListener('resize', scheduleActiveSectionUpdate);
                    window.removeEventListener('hashchange', scheduleActiveSectionUpdate);
                };
            }, []);

            React.useEffect(() => {
                const showLanguageRowHint = () => {
                    if (hasShownLanguageRowHintRef.current) return;

                    hasShownLanguageRowHintRef.current = true;
                    setIsLanguageRowCollapsed(false);

                    if (languageRowHideTimeoutRef.current) {
                        window.clearTimeout(languageRowHideTimeoutRef.current);
                    }

                    languageRowHideTimeoutRef.current = window.setTimeout(() => {
                        setIsLanguageRowCollapsed(true);
                        languageRowHideTimeoutRef.current = null;
                    }, 3000);
                };

                const handleFirstPointerDown = () => {
                    showLanguageRowHint();
                };

                const handleFirstPointerMove = (event) => {
                    if (event.pointerType !== 'mouse') return;
                    showLanguageRowHint();
                };

                window.addEventListener('pointerdown', handleFirstPointerDown, { passive: true });
                window.addEventListener('pointermove', handleFirstPointerMove, { passive: true });

                return () => {
                    window.removeEventListener('pointerdown', handleFirstPointerDown);
                    window.removeEventListener('pointermove', handleFirstPointerMove);
                };
            }, []);

            const handleMenuPointerDown = (event) => {
                if (event.pointerType === 'mouse' && event.button !== 0) return;
                if (event.pointerType === 'touch') return;

                const menuLinks = menuLinksRef.current;
                if (!menuLinks) return;

                if (menuClickResetTimeoutRef.current) {
                    window.clearTimeout(menuClickResetTimeoutRef.current);
                    menuClickResetTimeoutRef.current = null;
                }

                suppressMenuClickRef.current = false;
                menuDragStateRef.current = {
                    pointerId: event.pointerId,
                    startX: event.clientX,
                    startScrollLeft: menuLinks.scrollLeft,
                    moved: false
                };
                setIsMenuDragging(true);
            };

            const handleMenuPointerMove = (event) => {
                const menuLinks = menuLinksRef.current;
                const dragState = menuDragStateRef.current;

                if (!menuLinks || dragState.pointerId !== event.pointerId) return;

                const deltaX = event.clientX - dragState.startX;

                if (!dragState.moved && Math.abs(deltaX) > 6) {
                    dragState.moved = true;
                    suppressMenuClickRef.current = true;
                }

                if (!dragState.moved) return;

                event.preventDefault();
                menuLinks.scrollLeft = dragState.startScrollLeft + (isRtl ? deltaX : -deltaX);
            };

            const finishMenuDrag = (event) => {
                const menuLinks = menuLinksRef.current;
                const dragState = menuDragStateRef.current;

                if (!menuLinks || dragState.pointerId !== event.pointerId) return;

                menuDragStateRef.current = {
                    pointerId: null,
                    startX: 0,
                    startScrollLeft: 0,
                    moved: false
                };
                setIsMenuDragging(false);

                if (!suppressMenuClickRef.current) return;

                menuClickResetTimeoutRef.current = window.setTimeout(() => {
                    suppressMenuClickRef.current = false;
                    menuClickResetTimeoutRef.current = null;
                }, 0);
            };

            React.useEffect(() => {
                if (!isMenuDragging) return undefined;

                const handleWindowPointerMove = (event) => {
                    handleMenuPointerMove(event);
                };

                const handleWindowPointerEnd = (event) => {
                    finishMenuDrag(event);
                };

                window.addEventListener('pointermove', handleWindowPointerMove);
                window.addEventListener('pointerup', handleWindowPointerEnd);
                window.addEventListener('pointercancel', handleWindowPointerEnd);

                return () => {
                    window.removeEventListener('pointermove', handleWindowPointerMove);
                    window.removeEventListener('pointerup', handleWindowPointerEnd);
                    window.removeEventListener('pointercancel', handleWindowPointerEnd);
                };
            }, [isMenuDragging]);

            React.useEffect(() => {
                document.body.classList.toggle('is-popup-open', isIntroPopupOpen || isBismillahLoadingOpen || Boolean(zoomedPhoto));

                return () => {
                    document.body.classList.remove('is-popup-open');
                };
            }, [isIntroPopupOpen, isBismillahLoadingOpen, zoomedPhoto]);

            React.useEffect(() => {
                if (!zoomedPhoto) return undefined;

                const handlePhotoViewerKeyDown = (event) => {
                    if (event.key === 'Escape') {
                        closePhotoViewer();
                    }
                };

                window.addEventListener('keydown', handlePhotoViewerKeyDown);
                return () => {
                    window.removeEventListener('keydown', handlePhotoViewerKeyDown);
                };
            }, [zoomedPhoto]);

            React.useEffect(() => {
                if (!isBismillahLoadingOpen) return undefined;
                if (hasPreloadedCvAssetsRef.current) return undefined;

                hasPreloadedCvAssetsRef.current = true;

                if (typeof window.requestIdleCallback === 'function') {
                    const idleCallbackId = window.requestIdleCallback(warmCvAssetCache, { timeout: 1200 });
                    return () => {
                        window.cancelIdleCallback(idleCallbackId);
                    };
                }

                const preloadTimerId = window.setTimeout(warmCvAssetCache, 250);
                return () => {
                    window.clearTimeout(preloadTimerId);
                };
            }, [isBismillahLoadingOpen]);

            React.useEffect(() => () => {
                clearSpeechRecognition();
            }, []);

            const clearRecognitionTimer = () => {
                if (recognitionTimerRef.current !== null) {
                    window.clearTimeout(recognitionTimerRef.current);
                    recognitionTimerRef.current = null;
                }
            };

            const clearSpeechRecognition = () => {
                clearRecognitionTimer();
                const recognition = speechRecognitionRef.current;
                if (recognition) {
                    recognition.onresult = null;
                    recognition.onerror = null;
                    recognition.onend = null;
                    try {
                        recognition.stop();
                    } catch (error) {
                        // Ignore shutdown race conditions from the browser recognizer.
                    }
                    speechRecognitionRef.current = null;
                }
            };

            const handleEnterBiodata = () => {
                if (isEnteringBiodataRef.current) return;

                isEnteringBiodataRef.current = true;
                clearSpeechRecognition();
                voiceMatchedRef.current = true;
                voiceStopReasonRef.current = 'matched';
                setIsVoiceListening(false);
                setVoiceUiState('idle');
                lastVoiceVerificationTouchRef.current = Date.now();
                markBismillahIntroSeen();
                touchVoiceVerificationTimestamp();
                document.body.classList.add('has-entered-biodata');
                setIsIntroPopupOpen(false);
                window.dispatchEvent(new Event('bbdMahbub:enter-biodata'));
            };

            const handleLanguageSelection = (nextLanguage) => {
                setLanguage(nextLanguage);
                setIsLanguageRowCollapsed(true);
            };

            const handleLanguageRowToggle = () => {
                hasShownLanguageRowHintRef.current = true;

                if (languageRowHideTimeoutRef.current) {
                    window.clearTimeout(languageRowHideTimeoutRef.current);
                    languageRowHideTimeoutRef.current = null;
                }

                setIsLanguageRowCollapsed((currentState) => !currentState);
            };

            const normalizeVoiceTranscript = (value) => value
                .toLowerCase()
                .replace(/[\u064B-\u065F\u0670]/g, '')
                .replace(/[\s.,/#!$%^&*;:{}=\-_`~()"'?؟،]+/g, '');

            const matchesBismillahPhrase = (value) => {
                const normalizedValue = normalizeVoiceTranscript(value);
                if (!normalizedValue) return false;

                const fallbackFragments = [
                    'bismil',
                    'bismilla',
                    'bismillah',
                    'bismillahir',
                    'besmillah',
                    'bisimillah',
                    'বিসমিল',
                    'بسمالله',
                    'بسماللهالرحمن'
                ];

                return acceptedBismillahPhrases.some((phrase) => (
                    normalizedValue.includes(normalizeVoiceTranscript(phrase))
                )) || fallbackFragments.some((fragment) => (
                    normalizedValue.includes(normalizeVoiceTranscript(fragment))
                ));
            };

            const stopBismillahVoiceCheck = () => {
                const recognition = speechRecognitionRef.current;
                if (!recognition) return;

                if (voiceStopReasonRef.current === 'listening') {
                    voiceStopReasonRef.current = 'cancelled';
                }

                clearRecognitionTimer();

                try {
                    recognition.stop();
                } catch (error) {
                    // Ignore duplicate stop calls from pointer interactions.
                }
            };

            const startBismillahVoiceCheck = () => {
                const StandardSpeechRecognition = window.SpeechRecognition;
                const SpeechRecognition = StandardSpeechRecognition || window.webkitSpeechRecognition;

                if (!SpeechRecognition) {
                    setVoiceUiState('idle');
                    setVoicePrompt(voiceCopy.browserNoSupport);
                    return;
                }

                if (isVoiceListening || speechRecognitionRef.current || isPreparingVoiceRef.current) return;

                isPreparingVoiceRef.current = true;
                setVoiceUiState('preparing');
                setVoicePrompt(voiceCopy.starting);

                const recognition = new SpeechRecognition();

                speechRecognitionRef.current = recognition;
                voiceMatchedRef.current = false;
                voiceStopReasonRef.current = 'listening';
                recognition.lang = 'en-US';
                recognition.interimResults = true;
                recognition.maxAlternatives = 5;
                recognition.continuous = false;

                recognition.onstart = () => {
                    if (speechRecognitionRef.current !== recognition) return;

                    isPreparingVoiceRef.current = false;
                    setIsVoiceListening(true);
                    setVoiceUiState('listening');
                    setVoicePrompt(voiceCopy.listening);
                    recognitionTimerRef.current = window.setTimeout(() => {
                        if (speechRecognitionRef.current !== recognition || voiceMatchedRef.current) {
                            return;
                        }

                        voiceStopReasonRef.current = 'timeout';
                        try {
                            recognition.stop();
                        } catch (error) {
                            // Ignore shutdown races when the browser ends recognition itself.
                        }
                    }, 6500);
                };

                recognition.onresult = (event) => {
                    clearRecognitionTimer();
                    const transcriptParts = [];

                    Array.from(event.results).forEach((result) => {
                        Array.from(result).forEach((alternative) => {
                            transcriptParts.push(alternative.transcript);
                        });
                    });

                    const transcript = transcriptParts.join(' ');

                    const matchedBismillah = matchesBismillahPhrase(transcript);

                    if (matchedBismillah) {
                        voiceMatchedRef.current = true;
                        voiceStopReasonRef.current = 'matched';
                        setVoicePrompt(voiceCopy.detected(transcript.trim()));
                        clearSpeechRecognition();
                        completeBismillahPuzzle({ shouldPlaySound: false });
                        return;
                    }

                    setVoicePrompt(voiceCopy.heard(transcript.trim()));
                };

                recognition.onerror = (event) => {
                    clearRecognitionTimer();
                    isPreparingVoiceRef.current = false;
                    voiceStopReasonRef.current = 'error';
                    setIsVoiceListening(false);
                    setVoiceUiState('error');
                    setVoicePrompt(voiceCopy.errors[event.error] || voiceCopy.defaultError);
                };

                recognition.onend = () => {
                    clearRecognitionTimer();
                    isPreparingVoiceRef.current = false;
                    if (speechRecognitionRef.current === recognition) {
                        speechRecognitionRef.current = null;
                    }

                    setIsVoiceListening(false);
                    setVoiceUiState(voiceStopReasonRef.current === 'error' ? 'error' : 'idle');

                    if (voiceStopReasonRef.current === 'cancelled' && !voiceMatchedRef.current) {
                        setVoicePrompt(introVoiceHint);
                    } else if (voiceStopReasonRef.current === 'timeout' && !voiceMatchedRef.current) {
                        setVoicePrompt(voiceCopy.timeout);
                    } else if (voiceStopReasonRef.current === 'listening' && !voiceMatchedRef.current) {
                        setVoicePrompt(voiceCopy.notVerified);
                    }

                    if (voiceStopReasonRef.current !== 'matched') {
                        voiceStopReasonRef.current = 'idle';
                    }
                };

                try {
                    recognition.start();
                } catch (error) {
                    speechRecognitionRef.current = null;
                    clearRecognitionTimer();
                    isPreparingVoiceRef.current = false;
                    voiceStopReasonRef.current = 'error';
                    setIsVoiceListening(false);
                    setVoiceUiState('error');
                    setVoicePrompt(voiceCopy.couldNotStart);
                }
            };

            const handleVoiceButtonClick = () => {
                if (isPreparingVoiceRef.current) {
                    return;
                }

                if (isVoiceListening || speechRecognitionRef.current) {
                    stopBismillahVoiceCheck();
                    return;
                }

                startBismillahVoiceCheck();
            };

            const playBismillahSound = () => {
                if (typeof window === 'undefined' || typeof window.Audio !== 'function') {
                    return Promise.resolve(false);
                }

                return new Promise((resolve) => {
                    try {
                        const audio = new window.Audio(bismillahToneSrc);
                        let hasResolved = false;
                        const fallbackTimer = window.setTimeout(finish, 6500);

                        function finish() {
                            if (hasResolved) return;

                            hasResolved = true;
                            window.clearTimeout(fallbackTimer);
                            audio.removeEventListener('ended', finish);
                            audio.removeEventListener('error', finish);
                            resolve(true);
                        }

                        audio.volume = 0.3;
                        audio.currentTime = 0;
                        audio.addEventListener('ended', finish, { once: true });
                        audio.addEventListener('error', finish, { once: true });

                        const playPromise = audio.play();

                        if (playPromise && typeof playPromise.catch === 'function') {
                            playPromise.catch(() => {
                                if (hasResolved) return;

                                hasResolved = true;
                                window.clearTimeout(fallbackTimer);
                                audio.removeEventListener('ended', finish);
                                audio.removeEventListener('error', finish);
                                resolve(false);
                            });
                        }
                    } catch (error) {
                        resolve(false);
                    }
                });
            };

            const completeBismillahPuzzle = ({ shouldPlaySound = true } = {}) => {
                if (isPuzzleSolved || isBismillahSuccessInProgressRef.current) return;

                isBismillahSuccessInProgressRef.current = true;
                setIsPuzzleSolved(true);
                setVoiceUiState('idle');
                setVoicePrompt(activePuzzleSet.success);
                const successSound = shouldPlaySound ? playBismillahSound() : Promise.resolve();
                successSound.then(() => {
                    handleEnterBiodata();
                });
            };

            const handleBismillahLanguageOpen = (nextLanguage) => {
                if (!isBismillahLoadingOpen) return;
                if (isBismillahLoadingClickInProgressRef.current) return;

                isBismillahLoadingClickInProgressRef.current = true;
                setLanguage(nextLanguage);
                setIsLanguageRowCollapsed(true);
                handleEnterBiodata();
                setIsBismillahLoadingOpen(false);
            };

            const handlePuzzlePieceSelect = (pieceIndex) => {
                if (isPuzzleSolved || selectedPuzzleIndexes.includes(pieceIndex)) return;

                const nextIndexes = [...selectedPuzzleIndexes, pieceIndex];
                setSelectedPuzzleIndexes(nextIndexes);

                if (nextIndexes.length !== activePuzzleSet.answer.length) return;

                const answerText = nextIndexes
                    .map((index) => activePuzzleSet.pieces[index])
                    .join('');
                const targetText = activePuzzleSet.answer.join('');

                if (answerText === targetText) {
                    completeBismillahPuzzle();
                    return;
                }

                setVoiceUiState('error');
                setVoicePrompt(voiceCopy.notVerified);
            };

            const handlePuzzlePieceRemove = (pieceIndex) => {
                if (isPuzzleSolved) return;

                setSelectedPuzzleIndexes((currentIndexes) => (
                    currentIndexes.filter((index) => index !== pieceIndex)
                ));
                setVoiceUiState('idle');
                setVoicePrompt(introVoiceHint);
            };

            const handlePuzzleReset = () => {
                if (isPuzzleSolved) return;

                setSelectedPuzzleIndexes([]);
                setVoiceUiState('idle');
                setVoicePrompt(introVoiceHint);
            };

            const handleMenuClick = (event, id) => {
                if (suppressMenuClickRef.current) {
                    event.preventDefault();
                    return;
                }

                event.preventDefault();

                const target = document.getElementById(id);
                if (!target) return;

                hasRestoredActiveSectionRef.current = true;
                setActiveSection(id);
                centerMenuLink(id);

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                window.history.replaceState(null, '', `#${id}`);
            };

            const isVoiceError = hasSpeechRecognitionSupport && voiceUiState === 'error';
            const isVoicePreparing = hasSpeechRecognitionSupport && voiceUiState === 'preparing';
            const showVoiceMicButton = hasSpeechRecognitionSupport;
            const voiceStatusIconClass = !hasSpeechRecognitionSupport
                ? 'fa-circle-info'
                : isVoiceError
                    ? 'fa-triangle-exclamation'
                    : isVoicePreparing
                        ? 'fa-microphone-lines'
                        : isVoiceListening
                            ? 'fa-wave-square'
                            : 'fa-microphone-lines';
            const voiceSupportNote = !hasSpeechRecognitionSupport
                ? voiceCopy.supportNoSupport
                : voiceUiState === 'preparing'
                    ? voiceCopy.supportPreparing
                    : voiceUiState === 'error'
                        ? voiceCopy.supportErrorGeneral
                        : isVoiceListening
                            ? voiceCopy.supportListening
                            : voiceCopy.supportIdle;
            const renderLanguageMenu = (rowId) => (
                <div
                    className={`top-menu-language-shell${isLanguageRowCollapsed ? ' is-collapsed' : ''}`}
                >
                    <div
                        className="top-menu-language-row"
                        id={rowId}
                    >
                        <div className="music-player-language" role="group" aria-label={copy.navigation.languageSwitcherLabel}>
                            {availableLanguageOptions.map((option) => (
                                <button
                                    type="button"
                                    key={option.code}
                                    className="music-player-language-option"
                                    onClick={() => handleLanguageSelection(option.code)}
                                >
                                    {option.nativeLabel}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        type="button"
                        className={`top-menu-language-toggle${isLanguageRowCollapsed ? ' is-collapsed' : ''}`}
                        aria-controls={rowId}
                        aria-expanded={isLanguageRowCollapsed ? 'false' : 'true'}
                        aria-label={copy.navigation.languageSwitcherLabel}
                        onClick={handleLanguageRowToggle}
                    >
                        <i className={`fas ${isLanguageRowCollapsed ? 'fa-chevron-down' : 'fa-chevron-up'}`} aria-hidden="true"></i>
                    </button>
                </div>
            );

            return (
                <div className={`app-shell language-${language}${isRtl ? ' is-rtl' : ''}`}>
                    {isBismillahLoadingOpen ? (
                        <div
                            className="bismillah-loading-popup"
                            role="status"
                            aria-live="polite"
                        >
                            <div className="bismillah-loading-panel" dir="rtl">
                                <div className="bismillah-loading-mark" data-text={popupBismillah}>{popupBismillah}</div>
                                <div className="bismillah-loading-language-row" dir="ltr">
                                    <button
                                        type="button"
                                        className="bismillah-loading-start is-bn"
                                        onClick={() => handleBismillahLanguageOpen('bn')}
                                    >
                                        বাংলা
                                    </button>
                                    <button
                                        type="button"
                                        className="bismillah-loading-start is-en"
                                        onClick={() => handleBismillahLanguageOpen('en')}
                                    >
                                        English
                                    </button>
                                    <button
                                        type="button"
                                        className="bismillah-loading-start is-ar"
                                        onClick={() => handleBismillahLanguageOpen('ar')}
                                    >
                                        العربية
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    {isIntroPopupOpen ? (
                        <div
                            className="intro-popup"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="intro-popup-title"
                        >
                            <div className="intro-popup-top-language">
                                {renderLanguageMenu('intro-popup-language-row')}
                            </div>
                            <div className="intro-popup-panel">
                                <div className="intro-popup-inner">
                                    <div className="intro-popup-bismillah">{popupBismillah}</div>
                                    <div className="intro-popup-darud">{popupDarud}</div>
                                    <div className="intro-popup-kicker">{iconPrayerHands} {copy.intro.kicker}</div>
                                    <h2 className="intro-popup-title" id="intro-popup-title">{copy.intro.title}</h2>

                                    <div className="intro-popup-dua">
                                        <div className="intro-popup-dua-item intro-popup-dua-arabic-item">
                                            <div className="intro-popup-taawuz" dir="rtl">
                                                <span className="intro-popup-taawuz-mark" aria-hidden="true">۞</span>
                                                <span className="intro-popup-taawuz-text">{popupTaawuz}</span>
                                                <span className="intro-popup-taawuz-mark" aria-hidden="true">۞</span>
                                            </div>
                                            <div className="intro-popup-dua-arabic">{duaArabicLines[3]}</div>
                                        </div>
                                        {language !== 'ar' ? (
                                            <div className="intro-popup-dua-item intro-popup-dua-meaning-item">
                                                <div className="intro-popup-dua-meaning">{copy.intro.duaMeaning}</div>
                                                <div className="intro-popup-dua-reference">{copy.intro.duaReference}</div>
                                            </div>
                                        ) : (
                                            <div className="intro-popup-dua-reference">{copy.intro.duaReference}</div>
                                        )}
                                    </div>

                                    <div className="intro-popup-instruction">
                                        <div className="intro-popup-section-title">{copy.intro.instructionsTitle}</div>
                                        <ul className="intro-popup-list">
                                            {copy.intro.instructions.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="intro-popup-voice-gate">
                                        <div className="intro-popup-voice-card">
                                            <div className={`intro-popup-voice-status${isVoiceError ? ' is-error' : isVoicePreparing ? ' is-preparing' : isVoiceListening ? ' is-listening' : ''}`}>
                                                <i className={`fas ${voiceStatusIconClass}`} aria-hidden="true"></i>
                                                <span>{voicePrompt}</span>
                                            </div>
                                            {showVoiceMicButton ? (
                                                <button
                                                    type="button"
                                                    className={`intro-popup-mic-button${voiceUiState === 'error' ? ' is-error' : voiceUiState === 'preparing' ? ' is-preparing' : isVoiceListening ? ' is-listening' : ''}`}
                                                    onClick={handleVoiceButtonClick}
                                                    onContextMenu={(event) => event.preventDefault()}
                                                    aria-label={voiceUiState === 'error' ? voiceCopy.micAriaRetry : isVoiceListening ? voiceCopy.micAriaStop : voiceCopy.micAriaStart}
                                                >
                                                    <i className={`fas ${voiceUiState === 'error' ? 'fa-microphone-slash' : voiceUiState === 'preparing' ? 'fa-spinner fa-spin' : isVoiceListening ? 'fa-microphone-lines' : 'fa-microphone'}`} aria-hidden="true"></i>
                                                </button>
                                            ) : null}
                                            <div className="intro-popup-support-note">{voiceSupportNote}</div>
                                        </div>
                                        <div className="intro-popup-choice-separator">{voicePuzzleSeparatorText}</div>
                                        <div className={`intro-popup-puzzle${language === 'en' ? ' is-english' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
                                            <div className="intro-popup-puzzle-title">{renderPuzzleTitle()}</div>
                                            <div className="intro-popup-puzzle-row">
                                                <div className="intro-popup-puzzle-track" aria-label={activePuzzleSet.sourceLabel}>
                                                    {availablePuzzlePieces.map(({ text, index }) => (
                                                        <button
                                                            type="button"
                                                            className="intro-popup-puzzle-piece"
                                                            key={`source-${index}`}
                                                            onClick={() => handlePuzzlePieceSelect(index)}
                                                            disabled={isPuzzleSolved}
                                                        >
                                                            {text}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="intro-popup-puzzle-row">
                                                <div className={`intro-popup-puzzle-track is-answer${isPuzzleSolved ? ' is-complete' : ''}`} aria-label={activePuzzleSet.answerLabel}>
                                                    {selectedPuzzlePieces.map(({ text, index }) => (
                                                        <button
                                                            type="button"
                                                            className="intro-popup-puzzle-piece is-selected"
                                                            key={`answer-${index}`}
                                                            onClick={() => handlePuzzlePieceRemove(index)}
                                                            disabled={isPuzzleSolved}
                                                        >
                                                            {text}
                                                        </button>
                                                    ))}
                                                    {Array.from({ length: activePuzzleSet.answer.length - selectedPuzzlePieces.length }).map((_, index) => (
                                                        <span
                                                            className="intro-popup-puzzle-slot"
                                                            key={`slot-${index}`}
                                                            aria-hidden="true"
                                                        ></span>
                                                    ))}
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                className="intro-popup-puzzle-reset"
                                                onClick={handlePuzzleReset}
                                                disabled={isPuzzleSolved || selectedPuzzleIndexes.length === 0}
                                            >
                                                <i className="fas fa-rotate-right" aria-hidden="true"></i>
                                                <span>{activePuzzleSet.reset}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    {zoomedPhoto ? (
                        <div
                            className="photo-viewer"
                            role="dialog"
                            aria-modal="true"
                            aria-label={zoomedPhoto.label}
                            onClick={handlePhotoBackdropClick}
                        >
                            <button
                                type="button"
                                className="photo-viewer-close"
                                aria-label="Close photo viewer"
                                onClick={closePhotoViewer}
                            >
                                <i className="fas fa-xmark" aria-hidden="true"></i>
                            </button>
                            <div className="photo-viewer-stage">
                                <div
                                    className={`photo-viewer-gesture${photoViewerTransform.scale > 1 ? ' is-zoomed' : ''}`}
                                    onPointerDown={handlePhotoPointerDown}
                                    onPointerMove={handlePhotoPointerMove}
                                    onPointerUp={finishPhotoPointer}
                                    onPointerCancel={finishPhotoPointer}
                                    onDoubleClick={handlePhotoViewerDoubleClick}
                                >
                                    <img
                                        className="photo-viewer-image"
                                        src={zoomedPhoto.src}
                                        alt={zoomedPhoto.alt}
                                        draggable="false"
                                        style={{
                                            transform: `translate3d(${photoViewerTransform.x}px, ${photoViewerTransform.y}px, 0) scale(${photoViewerTransform.scale})`
                                        }}
                                    />
                                </div>
                                <div className="photo-viewer-caption">
                                    <i className="fas fa-magnifying-glass-plus" aria-hidden="true"></i>
                                    <span>{zoomedPhoto.label}</span>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    <div className="container">
                    <nav className="top-menu" aria-label={copy.navigation.sectionsAria}>
                        <div className="top-menu-language-slot">
                            {renderLanguageMenu('top-menu-language-row')}
                        </div>
                        <div className="top-menu-head">
                            <div className="top-menu-label">{copy.navigation.quickJump}</div>
                        </div>
                        <div
                            className={`top-menu-links${isMenuDragging ? ' is-dragging' : ''}`}
                            ref={menuLinksRef}
                            onPointerDown={handleMenuPointerDown}
                        >
                            {menuItems.map(([id, label]) => (
                                <a
                                    className={`top-menu-link${activeSection === id ? ' is-active' : ''}`}
                                    href={`#${id}`}
                                    key={id}
                                    data-menu-id={id}
                                    aria-current={activeSection === id ? 'page' : undefined}
                                    onClick={(event) => handleMenuClick(event, id)}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </nav>

                    <div className="header-banner section-anchor" id="profile-top">
                        <h1 className="profile-name">
                            <span className="profile-name-text">{copy.profile.name}</span>
                        </h1>
                        <div className="subtitle">{copy.profile.subtitle}</div>
                    </div>

                    <div style={{marginBottom: '30px'}}>
                        <div className="stats">
                            <div className="stat-box">
                                <div className="stat-value">{iconEducation}</div>
                                <div className="stat-label">{copy.profile.stats.education}</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-value">{iconMosque}</div>
                                <div className="stat-label">{copy.profile.stats.faith}</div>
                            </div>
                        </div>
                    </div>

                    <div className="card section-anchor" id="gallery-section">
                        <div className="section-header">
                            <span className="section-icon"><i className="fas fa-images" aria-hidden="true"></i></span>
                            {copy.gallery.title}
                        </div>
                        <div className="card-content">
                            <div className="photo-gallery-grid">
                                {copy.gallery.photos.map(({ src, alt, label, featured }, idx) => (
                                    <figure
                                        className={`photo-frame${featured ? ' photo-frame-featured' : ''}`}
                                        key={`${src}-${idx}`}
                                    >
                                        <div className="photo-frame-inner">
                                            <img
                                                className="photo-gallery-image"
                                                src={src}
                                                alt={alt}
                                                loading={featured ? 'eager' : 'lazy'}
                                            />
                                            <button
                                                type="button"
                                                className="photo-zoom-trigger"
                                                aria-label={`Open ${label}`}
                                                onClick={() => openPhotoViewer({ src, alt, label })}
                                            >
                                                <i className="fas fa-magnifying-glass-plus" aria-hidden="true"></i>
                                            </button>
                                            <figcaption className="photo-gallery-caption">
                                                <span className="photo-gallery-caption-icon">
                                                    <i className="fas fa-camera" aria-hidden="true"></i>
                                                </span>
                                                {label}
                                            </figcaption>
                                        </div>
                                    </figure>
                                ))}
                            </div>
                        </div>
                    </div>

                    {Object.entries(detailGroups).map(([group, details]) => (
                        <div className="card section-anchor" id={`${group}-section`} key={group}>
                            <div className="section-header">
                                <span className="section-icon">{sectionIcons[group]}</span>
                                {copy.sectionHeaders[group]}
                            </div>
                            <div className="card-content">
                                <div className="section-item-list">
                                {group === 'work' ? (
                                    workData.map(({ title, organization, duration, iconClass }, idx) => (
                                        <div className="detail-row work-row section-card-item" key={idx}>
                                            <div className="work-header">
                                                <div className="work-title-wrap">
                                                    <span className="work-title-icon">
                                                        <i className={iconClass} aria-hidden="true"></i>
                                                    </span>
                                                    <div className="work-title">{renderTextWithLtrNumbers(title)}</div>
                                                </div>
                                                {duration ? <span className="badge work-duration">{renderTextWithLtrNumbers(duration)}</span> : null}
                                            </div>
                                            <div className="work-org">{renderTextWithLtrNumbers(organization)}</div>
                                        </div>
                                    ))
                                ) : (
                                    details.map((detail, idx) => {
                                        const isObjectDetail = !Array.isArray(detail);
                                        const label = isObjectDetail ? detail.label : detail[0];
                                        const value = isObjectDetail ? detail.value : detail[1];
                                        const iconClass = isObjectDetail ? detail.iconClass : null;
                                        const resolvedIconClass = iconClass || null;

                                        return (
                                        <div className="detail-row section-card-item" key={idx}>
                                            <div className="detail-label">
                                                {resolvedIconClass ? (
                                                    <span className="detail-label-icon">
                                                        <i className={resolvedIconClass} aria-hidden="true"></i>
                                                    </span>
                                                ) : null}
                                                <span>{renderTextWithLtrNumbers(label)}</span>
                                            </div>
                                            <div className="detail-value">{renderDetailValue(value)}</div>
                                        </div>
                                        );
                                    })
                                )}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="card section-anchor" id="language-section">
                        <div className="section-header">
                            <span className="section-icon">{iconLanguage}</span>
                            {copy.languages.title}
                        </div>
                        <div className="card-content">
                            <div className="section-item-list">
                            {languageData.map(({ title, level, percent }, idx) => (
                                <div className="detail-row language-row section-card-item" key={idx}>
                                    <div className="language-header">
                                        <div className="language-title-wrap">
                                            <span className="language-title-icon">
                                                <i className={languageDetailIconClass} aria-hidden="true"></i>
                                            </span>
                                            <div className="language-title">{renderTextWithLtrNumbers(title)}</div>
                                        </div>
                                        <span className="badge language-level-badge">{renderTextWithLtrNumbers(level)}</span>
                                    </div>
                                    <div
                                        className="language-progress-track"
                                        role="progressbar"
                                        aria-label={copy.languages.proficiencyAria(title)}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        aria-valuenow={percent}
                                    >
                                        <div
                                            className="language-progress-fill"
                                            style={{ width: `${percent}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>

                    <div className="card section-anchor" id="education-section">
                        <div className="section-header">
                            <span className="section-icon">{iconBooks}</span>
                            {copy.education.title}
                        </div>
                        <div className="card-content">
                            <div className="section-item-list">
                            {educationData.map(({ title, institution, institutionHref, scoreLabel, score, session }, idx) => (
                                <div className="detail-row education-row section-card-item" key={idx}>
                                    <div className="education-header">
                                        <div className="education-title-row">
                                            <div className="education-title-wrap">
                                                <span className="education-title-icon">
                                                    <i className={educationDetailIconClass} aria-hidden="true"></i>
                                                </span>
                                                <div className="education-subtitle">{renderTextWithLtrNumbers(title)}</div>
                                            </div>
                                            <span className="badge education-score-badge">{renderTextWithLtrNumbers(`${scoreLabel} ${score}`)}</span>
                                        </div>
                                        <span className="badge education-year-badge">{renderTextWithLtrNumbers(session)}</span>
                                    </div>
                                    <div className="education-meta">
                                        {renderTextWithLtrNumbers(institution)}
                                        {institutionHref ? (
                                            <a
                                                className="activity-link-button"
                                                href={institutionHref}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {copy.common.visit}
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>

                    <div className="card section-anchor" id="training-section">
                        <div className="section-header">
                            <span className="section-icon">{iconEducation}</span>
                            {copy.training.title}
                        </div>
                        <div className="card-content">
                            <div className="section-item-list">
                            {trainingItems.map((item, idx) => {
                                const isLinkItem = typeof item === 'object' && item !== null;

                                return (
                                <div className="detail-row training-row section-card-item" key={isLinkItem ? item.text : item}>
                                    <div className="detail-label">
                                        <span className="training-bullet">
                                            <i
                                                className={trainingIconClasses[idx]}
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </div>
                                    <div className="detail-value">
                                                {isLinkItem ? (
                                            <>
                                                {renderTextWithLtrNumbers(item.text)}
                                                <a
                                                    className="activity-link-button"
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {item.linkLabel}
                                                </a>
                                            </>
                                        ) : (
                                            renderTextWithLtrNumbers(item)
                                        )}
                                    </div>
                                </div>
                                );
                            })}
                            </div>
                        </div>
                    </div>

                    <div className="card section-anchor" id="activities-section">
                        <div className="section-header">
                            <span className="section-icon"><i className="fas fa-star" aria-hidden="true"></i></span>
                            {copy.activities.title}
                        </div>
                        <div className="card-content">
                            <div className="activity-list">
                                {activityData.map(({ title, period, items }, idx) => (
                                    <div className="activity-item section-card-item" key={idx}>
                                        <div className="activity-header">
                                            <div className="activity-title-wrap">
                                                <span className="activity-title-icon">
                                                    <i className={activityDetailIconClass} aria-hidden="true"></i>
                                                </span>
                                                <div className="activity-title">{renderTextWithLtrNumbers(title)}</div>
                                            </div>
                                            {period ? <span className="badge activity-period">{renderTextWithLtrNumbers(period)}</span> : null}
                                        </div>
                                        <ul className="activity-points">
                                            {items.map((item) => {
                                                const key = item.text;

                                                return (
                                                    <li key={key}>
                                                        <span className="activity-point-icon">
                                                            <i className={item.iconClass} aria-hidden="true"></i>
                                                        </span>
                                                        <span className="activity-point-text">
                                                            {renderTextWithLtrNumbers(item.text)}
                                                            {item.href ? (
                                                                <a
                                                                    className="activity-link-button"
                                                                    href={item.href}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    {item.linkLabel}
                                                                </a>
                                                            ) : null}
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card section-anchor" id="hobbies-section">
                        <div className="section-header">
                            <span className="section-icon"><i className="fas fa-heart" aria-hidden="true"></i></span>
                            {copy.hobbies.title}
                        </div>
                        <div className="card-content">
                            <div className="hobby-list">
                                {hobbiesData.map(([iconClass, text], idx) => (
                                    <div className="hobby-item section-card-item" key={idx}>
                                        <span className="hobby-icon">
                                            <i className={iconClass} aria-hidden="true"></i>
                                        </span>
                                        <div className="hobby-text">{renderTextWithLtrNumbers(text)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card section-anchor" id="contact-section">
                        <div className="section-header">
                            <span className="section-icon">{iconMapPin}</span>
                            {copy.contact.title}
                        </div>
                        <div className="card-content">
                            <div className="contact-list">
                                {contactBlocks.map(({ iconClass, label, value, href, mapHref }, idx) => (
                                    <div className="contact-block section-card-item" key={`${label}-${value}`}>
                                        <div className="icon-text">
                                            <span className="contact-title-icon">
                                                <i className={iconClass} aria-hidden="true"></i>
                                            </span>
                                            <span>{renderTextWithLtrNumbers(label)}</span>
                                        </div>
                                        <div className="address-box">
                                            {href ? (
                                                <a className="contact-action-link" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{renderTextWithLtrNumbers(value)}</a>
                                            ) : (
                                                renderTextWithLtrNumbers(value)
                                            )}
                                        </div>
                                        {mapHref ? (
                                            <div className="address-actions">
                                                <a
                                                    className="map-link-button"
                                                    href={mapHref}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <i className="fas fa-location-arrow" aria-hidden="true"></i>
                                                    {copy.contact.mapButton}
                                                </a>
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card section-anchor" id="dua-section">
                        <div className="section-header">
                            <span className="section-icon">{iconPrayerHands}</span>
                            {copy.dua.title}
                        </div>
                        <div className="card-content">
                            <div className="final-dua">
                                {duaArabicLines.map((arabicLine, idx) => (
                                    <div className="dua-entry" key={arabicLine}>
                                        <div className="dua-block">
                                            <div className={`dua-arabic${idx === 1 ? ' dua-arabic-furqan' : ''}${idx === 3 ? ' dua-arabic-green' : ''}`}>
                                                {arabicLine}
                                            </div>
                                            {copy.dua.meanings[idx] ? (
                                                <div className="dua-english">{copy.dua.meanings[idx]}</div>
                                            ) : null}
                                            <div className="dua-reference">{copy.dua.references[idx]}</div>
                                        </div>
                                    </div>
                                ))}
                                <div className="dua-closing">
                                    <span>{copy.dua.closing}</span>
                                    <span className="dua-closing-icon" aria-hidden="true">{iconKaaba}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-tagline-note">
                        {iconEducation} {copy.profile.tagline} {iconWork}
                    </div>
                    
                    <div style={{textAlign: 'center', marginTop: '60px', paddingTop: '20px', borderTop: '2px solid rgba(13, 115, 119, 0.1)', color: '#0d7377', fontSize: '24px', letterSpacing: '8px'}}>
                        {dividerOrnament}
                    </div>
                </div>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<BioDataComponent />);
