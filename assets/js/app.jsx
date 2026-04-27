const BioDataComponent = () => {
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
            const dividerOrnament = '\u2726 \u25C6 \u2726';
            const popupBismillah = '\u0628\u0633\u0645\u0020\u0627\u0644\u0644\u0647\u0020\u0627\u0644\u0631\u062D\u0645\u0646\u0020\u0627\u0644\u0631\u062D\u064A\u0645';
            const popupDarud = '\u0627\u0644\u0644\u0647\u0645\u0020\u0635\u0644\u0020\u0648\u0633\u0644\u0645\u0020\u0639\u0644\u0649\u0020\u0633\u064A\u062F\u0646\u0627\u0020\u0645\u062D\u0645\u062F\u0020\ufdfa';
            const popupTaawuz = '\u0623\u064e\u0639\u064f\u0648\u0630\u064f\u0020\u0628\u0650\u0627\u0644\u0644\u064e\u0651\u0647\u0650\u0020\u0645\u0650\u0646\u064e\u0020\u0627\u0644\u0634\u064e\u0651\u064a\u0652\u0637\u064e\u0627\u0646\u0650\u0020\u0627\u0644\u0631\u064e\u0651\u062c\u0650\u064a\u0645\u0650';
            const duaArabicLines = [
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
            const permanentAddressMapHref = 'https://maps.app.goo.gl/hvcHqxMvhF9cGFbM6';
            const microphonePermissionStorageKey = 'bbdMahbubMicPermissionGranted';
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
                        title: 'Marriage Biodata - Md. Mahbubur Rahman',
                        description: 'Marriage biodata of Md. Mahbubur Rahman with personal, family, education, work, and contact details.'
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
                        duaMeaning: 'Our Rabb, grant us mercy from Yourself and prepare for us right guidance in our affairs.',
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
                        browserNoSupport: 'This browser does not include live speech recognition. Use Continue below to open the biodata.',
                        permissionBlocked: 'Microphone permission is blocked. Allow it in your browser settings, then tap the mic again.',
                        permissionRequired: 'Browser microphone permission is required. Tap Allow in the popup.',
                        permissionAllowed: 'Microphone permission allowed. Voice verification is starting.',
                        permissionDenied: 'Microphone permission was denied. Allow it in browser settings, then tap the mic again.',
                        noMicrophone: 'No microphone was found. Connect a microphone and try again.',
                        permissionUnknown: 'Microphone permission could not be confirmed. Please try again.',
                        starting: 'Starting microphone. If your browser asks, tap Allow microphone permission.',
                        listening: 'Microphone is active. Say "Bismillah" once and wait for verification.',
                        detected: (transcript) => `Detected: "${transcript}". Opening biodata...`,
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
                        supportPermission: 'A browser popup should appear now. Tap Allow microphone permission. After that, tap the mic again.',
                        supportPreparing: 'Microphone is starting now. Please wait a moment.',
                        supportErrorDenied: 'Microphone permission is blocked in browser settings. Allow it for this site, then tap the mic again.',
                        supportErrorGeneral: 'If no popup appears, check this site\'s microphone permission and whether your browser supports web speech recognition.',
                        supportListening: 'Recording is active now. Speak once, then wait a moment for verification.',
                        supportReady: 'Microphone permission is ready. Tap the mic to start voice verification.',
                        supportIdle: 'Tap the mic. If a browser popup appears, tap Allow microphone permission.',
                        micAriaPermission: 'Microphone permission is being requested',
                        micAriaRetry: 'Retry voice recognition',
                        micAriaStop: 'Stop voice recognition',
                        micAriaStart: 'Start voice recognition and say Bismillah',
                        continueWithoutVoice: 'Continue Without Voice',
                        continueInBrowser: 'Continue In This Browser'
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
                        tagline: 'A faithful Muslim seeking a loving and pious life partner',
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
                            { src: 'assets/images/mahbub-portrait-1.jpg', alt: 'Md Mahbubur Rahman portrait 1', label: 'Portrait 01', featured: true },
                            { src: 'assets/images/mahbub-portrait-2.jpg', alt: 'Md Mahbubur Rahman portrait 2', label: 'Portrait 02', featured: false }
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
                        { label: 'Age', value: '27 Years', iconClass: 'fas fa-hourglass-half' },
                        { label: 'Religion', value: 'Islam (Practicing Muslim)', iconClass: 'fas fa-mosque' },
                        { label: 'Marital Status', value: 'Unmarried', iconClass: 'fas fa-ring' },
                        { label: 'Complexion', value: 'Medium Dark', iconClass: 'fas fa-palette' },
                        { label: 'Height & Weight', value: '5\' 3" & 72 KGs', iconClass: 'fas fa-ruler-combined' },
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
                            { title: 'Dakhil (SSC)', institution: 'Ta\'limul Millat Rahmatial Kamil Madrasah, Sonadanga, Khulna', scoreLabel: 'GPA', score: '5.00/5', session: '2012' }
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
                                period: '7th July 2014 - 12th Dec 2015',
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
                            '"Our Rabb (Allah), grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous."',
                            '"Ya Rabb (Allah)! Bestow upon me one of the righteous."',
                            '"Our Rabb (Allah), grant us from Yourself mercy and prepare for us from our affair right guidance."'
                        ],
                        closing: 'Ameen ya Rabbal Alameen.'
                    }
                },
                ar: {
                    locale: 'ar',
                    dir: 'rtl',
                    meta: {
                        title: 'السيرة الزوجية - Md. Mahbubur Rahman',
                        description: 'السيرة الزوجية لـ Md. Mahbubur Rahman وتشمل المعلومات الشخصية والأسرية والتعليمية والمهنية ووسائل التواصل.'
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
                        browserNoSupport: 'هذا المتصفح لا يدعم التعرف الصوتي المباشر. استخدم زر المتابعة أدناه لفتح السيرة.',
                        permissionBlocked: 'تم حظر إذن الميكروفون. فعّله من إعدادات المتصفح ثم اضغط على الميكروفون مرة أخرى.',
                        permissionRequired: 'مطلوب إذن الميكروفون من المتصفح. اضغط سماح في النافذة المنبثقة.',
                        permissionAllowed: 'تم السماح بالميكروفون. سيبدأ التحقق الصوتي الآن.',
                        permissionDenied: 'تم رفض إذن الميكروفون. فعّله من إعدادات المتصفح ثم حاول مرة أخرى.',
                        noMicrophone: 'لم يتم العثور على ميكروفون. قم بتوصيله ثم حاول مرة أخرى.',
                        permissionUnknown: 'تعذر تأكيد إذن الميكروفون حالياً. حاول مرة أخرى.',
                        starting: 'يتم تشغيل الميكروفون الآن. إذا ظهرت نافذة من المتصفح فاضغط سماح.',
                        listening: 'الميكروفون يعمل الآن. قل "بسم الله" مرة واحدة وانتظر التحقق.',
                        detected: (transcript) => `تم التقاط: "${transcript}". يتم فتح السيرة الآن...`,
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
                        supportPermission: 'يفترض أن تظهر نافذة منبثقة الآن. اضغط سماح للميكروفون ثم اضغط على الميكروفون مرة أخرى.',
                        supportPreparing: 'يتم تشغيل الميكروفون الآن. يرجى الانتظار قليلاً.',
                        supportErrorDenied: 'إذن الميكروفون محظور في إعدادات المتصفح. فعّله لهذا الموقع ثم اضغط على الميكروفون مرة أخرى.',
                        supportErrorGeneral: 'إذا لم تظهر نافذة، فتحقق من إذن الميكروفون لهذا الموقع ومن دعم المتصفح للتعرف الصوتي.',
                        supportListening: 'التسجيل يعمل الآن. تحدث مرة واحدة ثم انتظر لحظة للتحقق.',
                        supportReady: 'إذن الميكروفون جاهز. اضغط على الميكروفون لبدء التحقق الصوتي.',
                        supportIdle: 'اضغط على الميكروفون. إذا ظهرت نافذة من المتصفح فاضغط سماح.',
                        micAriaPermission: 'يتم طلب إذن الميكروفون',
                        micAriaRetry: 'إعادة محاولة التعرف الصوتي',
                        micAriaStop: 'إيقاف التعرف الصوتي',
                        micAriaStart: 'ابدأ التعرف الصوتي وقل بسم الله',
                        continueWithoutVoice: 'المتابعة بدون صوت',
                        continueInBrowser: 'المتابعة في هذا المتصفح'
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
                        tagline: 'مسلم ملتزم يبحث عن شريكة حياة صالحة ومحبّة',
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
                            { src: 'assets/images/mahbub-portrait-1.jpg', alt: 'الصورة الشخصية الأولى لـ محمد محبوب الرحمن', label: 'الصورة 01', featured: true },
                            { src: 'assets/images/mahbub-portrait-2.jpg', alt: 'الصورة الشخصية الثانية لـ محمد محبوب الرحمن', label: 'الصورة 02', featured: false }
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
                        ['العنوان الدائم', 'Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat'],
                        ['المنطقة', 'Bagerhat']
                    ],
                    familySummary: {
                        label: 'خلفية الأسرة',
                        title: 'أسرة محترمة من الطبقة المتوسطة تقوم على التعليم والقيم الدينية.',
                        tags: ['محترمة', 'متوسطة الحال', 'متعلمة', 'متدينة']
                    },
                    familySiblingsTitle: 'تفاصيل الإخوة والأخوات',
                    familySiblings: [
                        ['الأخت الأولى', 'Shahanaj Shanti، ربة منزل ولديها 4 أطفال. Morrelganj.'],
                        ['الأخ الثاني', 'Alauddin، كان عاملاً في الإمارات ويعمل الآن في التجارة (Dhaka). لديه طفلان. Morrelganj.'],
                        ['الأخ الثالث', 'Giash Uddin، سائق في Bananja PCL، Chattagram، البحرية البنغلاديشية. لديه طفلان. Morrelganj.'],
                        ['الأخت الرابعة', 'Zerin Salma Beby، ربة منزل ولديها 3 أطفال. Morrelganj.'],
                        ['الأخ الخامس', 'Mohiuddin، سائق لدى زوجين من الأطباء في Chattagram. لديه 4 أطفال. Chattagram.'],
                        ['الأخت السادسة', 'Nazma Sultana، ربة منزل ولديها طفلان. Khulna.'],
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
                            { title: 'مسؤول المشتريات والخدمات', organization: 'Earthface IT, Dhaka', duration: '27 نوفمبر 2021 - حتى الآن', iconClass: 'fas fa-briefcase' },
                            { title: 'مساعد دعم تقني (دوام جزئي)', organization: 'قسم اللغة العربية وآدابها، IU, Kushtia', duration: '23 مارس 2017 - 20 أكتوبر 2021', iconClass: 'fas fa-headset' },
                            { title: 'تنفيذي تقنية معلومات (دوام جزئي)', organization: 'Khondokar Telecom, Gazipur', duration: '7 يوليو 2014 - 12 ديسمبر 2015', iconClass: 'fas fa-desktop' }
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
                            { title: 'ماجستير في اللغة العربية وآدابها', institution: 'Islamic University, Kushtia', institutionHref: 'https://iu.ac.bd', scoreLabel: 'المعدل', score: '3.58/4', session: '2022' },
                            { title: 'بكالوريوس شرف في اللغة العربية وآدابها', institution: 'Islamic University, Kushtia', institutionHref: 'https://iu.ac.bd', scoreLabel: 'المعدل', score: '3.58/4', session: '2020' },
                            { title: 'Alim (الثانوية العليا)', institution: 'Ta\'mirul Millat Kamil Madrasah, Tongi, Gazipur', institutionHref: 'https://www.tmt.edu.bd', scoreLabel: 'الدرجة', score: '5.00/5', session: '2014' },
                            { title: 'Dakhil (الثانوية)', institution: 'Ta\'limul Millat Rahmatial Kamil Madrasah, Sonadanga, Khulna', scoreLabel: 'الدرجة', score: '5.00/5', session: '2012' }
                        ]
                    },
                    training: {
                        title: 'التدريب والتطوير',
                        items: [
                            { text: 'معسكر إدارة الشركات - 2023 (10 أيام، BYLC، بنغلاديش)', href: 'https://bylc.org', linkLabel: 'زيارة' },
                            { text: 'الإدارة الاحترافية للمحتوى الرقمي (PDCM) - 3 أشهر، SEIP، وزارة المالية', href: 'https://lms.seip-fd.gov.bd', linkLabel: 'زيارة' },
                            { text: 'تصميم وتطوير الويب - 200 ساعة، LEDP، قسم ICT في بنغلاديش', href: 'https://ictd.gov.bd', linkLabel: 'زيارة' },
                            { text: 'الحاسوب وتطبيقاته - سنة واحدة، Islamic University, Kushtia', href: 'https://iu.ac.bd', linkLabel: 'زيارة' },
                            { text: 'استكشاف الأعطال في أمن الحاسوب (ICT Division, a2i)', href: 'https://a2i.gov.bd', linkLabel: 'زيارة' },
                            { text: 'أساسيات Microsoft Word (a2i, Muktapath)', href: 'https://a2i.gov.bd', linkLabel: 'زيارة' },
                            { text: 'إنتاج الفيديو (Human Development Media, a2i)', href: 'https://a2i.gov.bd', linkLabel: 'زيارة' },
                            { text: 'أساسيات الأمن الرقمي (Digital Security Agency, a2i)', href: 'https://a2i.gov.bd', linkLabel: 'زيارة' },
                            { text: 'ورشة ابتكار الأفكار لتطوير ألعاب وتطبيقات الجوال (ICT Division, Digital Bangladesh)', href: 'https://a2i.gov.bd', linkLabel: 'زيارة' }
                        ]
                    },
                    activities: {
                        title: 'الأنشطة اللامنهجية',
                        items: [
                            {
                                title: 'العمل التطوعي',
                                period: '7 يوليو 2014 - 12 ديسمبر 2015',
                                items: [
                                    { text: 'كان ممثل الصف لمدة عامين في Islamic University, Kushtia.', iconClass: 'fas fa-users', href: 'https://iu.ac.bd', linkLabel: 'زيارة' },
                                    { text: 'كان مديراً في Betikrom Shahitya Shangskritik Jote، IU.', iconClass: 'fas fa-masks-theater', href: 'https://web.facebook.com/betikrom87', linkLabel: 'زيارة' },
                                    { text: 'عضو مركزي سابق في Bangladesh Islamic Chhatra Shibir', iconClass: 'fas fa-shield-halved', href: 'https://shibir.org.bd', linkLabel: 'زيارة' }
                                ]
                            },
                            { title: 'الإنشاد', items: [{ text: 'قدم أناشيد أو أغاني في SATV وETV وChannel 9', iconClass: 'fas fa-music' }] },
                            { title: 'التمثيل', period: '2018', items: [{ text: 'شارك في عمل درامي وحصل على المركز الثاني على المستوى الوطني.', iconClass: 'fas fa-film' }] },
                            { title: 'الجوائز', period: '2012', items: [{ text: 'نال جائزة في إلقاء الشعر وحصل على المركز الثاني على المستوى الوطني.', iconClass: 'fas fa-award' }] }
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
                        mapButton: 'عرض على خرائط Google',
                        permanentAddressValue: 'Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat',
                        blocks: [
                            { iconClass: 'fas fa-user', label: 'الاسم', value: 'Md. Mahbubur Rahman' },
                            { iconClass: 'fas fa-envelope', label: 'البريد الإلكتروني', value: 'bbdmahbub@gmail.com', href: 'mailto:bbdmahbub@gmail.com' },
                            { iconClass: 'fab fa-whatsapp', label: 'واتساب', value: '+8801917267607', href: 'https://wa.me/8801917267607' },
                            { iconClass: 'fas fa-home', label: 'العنوان الحالي', value: 'Hatir Jheel, Dhaka, Bangladesh' },
                            { iconClass: 'fas fa-map-marker-alt', label: 'العنوان الدائم', value: 'Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat', mapHref: permanentAddressMapHref }
                        ]
                    },
                    dua: {
                        title: 'كلمات ختامية ودعاء',
                        meanings: [
                            'ربنا هب لنا من أزواجنا وذرياتنا قرة أعين واجعلنا للمتقين إماماً.',
                            'يا رب هب لي من الصالحين.',
                            'ربنا آتنا من لدنك رحمة وهيئ لنا من أمرنا رشداً.'
                        ],
                        closing: 'آمين يا رب العالمين.'
                    }
                },
                bn: {
                    locale: 'bn',
                    dir: 'ltr',
                    meta: {
                        title: 'বিয়ে বায়োডাটা - মো. মাহবুবুর রহমান',
                        description: 'মো. মাহবুবুর রহমানের ব্যক্তিগত, পারিবারিক, শিক্ষাগত, পেশাগত ও যোগাযোগ তথ্যসহ বিয়ে বায়োডাটা।'
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
                        duaMeaning: 'হে আমাদের রব, আপনার পক্ষ থেকে আমাদেরকে রহমত দান করুন এবং আমাদের কাজের জন্য সঠিক পথ নির্ধারণ করে দিন।',
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
                        browserNoSupport: 'এই ব্রাউজারে লাইভ স্পিচ রিকগনিশন নেই। নিচের বোতাম ব্যবহার করে বায়োডাটা খুলুন।',
                        permissionBlocked: 'মাইক্রোফোন অনুমতি ব্লক করা আছে। ব্রাউজার সেটিংস থেকে অনুমতি দিয়ে আবার মাইকে চাপ দিন।',
                        permissionRequired: 'ব্রাউজারের মাইক্রোফোন অনুমতি প্রয়োজন। পপআপ এলে Allow চাপুন।',
                        permissionAllowed: 'মাইক্রোফোন অনুমতি পাওয়া গেছে। ভয়েস যাচাই এখন শুরু হচ্ছে।',
                        permissionDenied: 'মাইক্রোফোন অনুমতি দেওয়া হয়নি। ব্রাউজার সেটিংস থেকে অনুমতি দিয়ে আবার চেষ্টা করুন।',
                        noMicrophone: 'কোনো মাইক্রোফোন পাওয়া যায়নি। মাইক্রোফোন যুক্ত করে আবার চেষ্টা করুন।',
                        permissionUnknown: 'মাইক্রোফোন অনুমতি নিশ্চিত করা যায়নি। আবার চেষ্টা করুন।',
                        starting: 'মাইক্রোফোন চালু হচ্ছে। ব্রাউজার যদি অনুমতি চায় তাহলে Allow চাপুন।',
                        listening: 'মাইক্রোফোন চালু আছে। একবার "বিসমিল্লাহ" বলুন এবং যাচাইয়ের জন্য অপেক্ষা করুন।',
                        detected: (transcript) => `শোনা গেছে: "${transcript}"। বায়োডাটা খোলা হচ্ছে...`,
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
                        supportPermission: 'এখন ব্রাউজারের একটি পপআপ দেখা উচিত। সেখানে মাইক্রোফোনের জন্য Allow চাপুন, তারপর আবার মাইকে চাপ দিন।',
                        supportPreparing: 'মাইক্রোফোন চালু হচ্ছে। একটু অপেক্ষা করুন।',
                        supportErrorDenied: 'ব্রাউজার সেটিংসে মাইক্রোফোন অনুমতি ব্লক আছে। এই সাইটের জন্য অনুমতি দিয়ে আবার মাইকে চাপ দিন।',
                        supportErrorGeneral: 'যদি কোনো পপআপ না আসে, তাহলে সাইটের মাইক্রোফোন অনুমতি ও ব্রাউজারের স্পিচ রিকগনিশন সাপোর্ট পরীক্ষা করুন।',
                        supportListening: 'রেকর্ডিং চলছে। একবার বলুন, তারপর যাচাইয়ের জন্য একটু অপেক্ষা করুন।',
                        supportReady: 'মাইক্রোফোন অনুমতি প্রস্তুত। ভয়েস যাচাই শুরু করতে মাইকে চাপ দিন।',
                        supportIdle: 'মাইকে চাপ দিন। ব্রাউজার পপআপ এলে Allow চাপুন।',
                        micAriaPermission: 'মাইক্রোফোন অনুমতি চাওয়া হচ্ছে',
                        micAriaRetry: 'ভয়েস রিকগনিশন আবার চেষ্টা করুন',
                        micAriaStop: 'ভয়েস রিকগনিশন বন্ধ করুন',
                        micAriaStart: 'ভয়েস রিকগনিশন শুরু করুন এবং বিসমিল্লাহ বলুন',
                        continueWithoutVoice: 'ভয়েস ছাড়া এগিয়ে যান',
                        continueInBrowser: 'এই ব্রাউজারেই এগিয়ে যান'
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
                        tagline: 'একজন দ্বীনদার মুসলিম, ভালোবাসাময়ী ও পরহেজগার জীবনসঙ্গী খুঁজছেন',
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
                            { src: 'assets/images/mahbub-portrait-1.jpg', alt: 'Md Mahbubur Rahman-এর পোর্ট্রেট ১', label: 'ছবি ০১', featured: true },
                            { src: 'assets/images/mahbub-portrait-2.jpg', alt: 'Md Mahbubur Rahman-এর পোর্ট্রেট ২', label: 'ছবি ০২', featured: false }
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
                        ['৫ম ভাই', 'মহিউদ্দিন, গাড়ি চালক, ডাক্তার দম্পত্তির , চট্টগ্রাম। ৪ সন্তানের জনক। চট্টগ্রাম'],
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
                            { title: 'প্রকিউরমেন্ট ও সার্ভিসিং লিড', organization: 'আর্থফেস আইটি, ঢাকা', duration: '২৭ নভেম্বর ২০২১ - বর্তমান', iconClass: 'fas fa-briefcase' },
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
                                period: '৭ জুলাই ২০১৪ - ১২ ডিসেম্বর ২০১৫',
                                items: [
                                    { text: 'সাবেক নির্বাচিত ক্লাস সিআর, ২বছর, ইসলামী বিশ্ববিদ্যালয়, কুষ্টিয়া।', iconClass: 'fas fa-users', href: 'https://iu.ac.bd', linkLabel: 'ভিজিট' },
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
                            { iconClass: 'fab fa-whatsapp', label: 'হোয়াটসঅ্যাপ', value: '+8801917267607', href: 'https://wa.me/8801917267607' },
                            { iconClass: 'fas fa-home', label: 'বর্তমান ঠিকানা', value: 'হাতিরঝিল, ঢাকা, বাংলাদেশ' },
                            { iconClass: 'fas fa-map-marker-alt', label: 'স্থায়ী ঠিকানা', value: 'উত্তর সুতালড়ী, জোমাদ্দারপাড়া, মোরেলগঞ্জ, বাগেরহাট', mapHref: permanentAddressMapHref }
                        ]
                    },
                    dua: {
                        title: 'শেষ কথা ও দোআ',
                        meanings: [
                            'হে আমাদের রব, আমাদের স্ত্রী ও সন্তানদেরকে আমাদের চোখের শীতলতা দান করুন এবং আমাদেরকে মুত্তাকীদের জন্য আদর্শ বানান।',
                            'হে রব, আমাকে নেককারদের একজন দান করুন।',
                            'হে আমাদের রব, আপনি আমাদেরকে আপনার পক্ষ থেকে রহমত দিন এবং আমাদের কাজের জন্য সঠিক পথ নির্ধারণ করে দিন।'
                        ],
                        closing: 'আমীন ইয়া রব্বাল আলামিন।'
                    }
                }
            };
            const hasSpeechRecognitionSupport = typeof window !== 'undefined'
                && (typeof window.SpeechRecognition === 'function' || typeof window.webkitSpeechRecognition === 'function');
            const isChromeBrowser = typeof window !== 'undefined' && (() => {
                const userAgent = window.navigator.userAgent || '';
                return /Chrome\//.test(userAgent)
                    && !/Edg\//.test(userAgent)
                    && !/OPR\//.test(userAgent)
                    && !/SamsungBrowser\//.test(userAgent);
            })();
            const chromeOnlyAlertMessage = 'শুধুমাত্র Chrome ব্রাউজার ব্যবহার করুন।';
            const hasStoredMicrophonePermissionGrant = () => {
                try {
                    return window.localStorage.getItem(microphonePermissionStorageKey) === 'true';
                } catch (error) {
                    return false;
                }
            };
            const setStoredMicrophonePermissionGrant = (isGranted) => {
                try {
                    if (isGranted) {
                        window.localStorage.setItem(microphonePermissionStorageKey, 'true');
                    } else {
                        window.localStorage.removeItem(microphonePermissionStorageKey);
                    }
                } catch (error) {
                    // Ignore storage failures and keep the access flow working.
                }
            };
            const touchVoiceVerificationTimestamp = () => {
                try {
                    window.localStorage.setItem(voiceVerificationStorageKey, String(Date.now()));
                } catch (error) {
                    // Ignore storage failures and keep the access flow working.
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
                .replace(/\d/g, (digit) => arabicIndicDigits[Number(digit)])
                .replace(/(?<=\d)\.(?=\d)/g, '٫')
                .replace(/(?<=\d),(?=\d)/g, '٬')
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
                ['family-section', copy.menu.family],
                ['work-section', copy.menu.work],
                ['lifestyle-section', copy.menu.lifestyle],
                ['language-section', copy.menu.language],
                ['education-section', copy.menu.education],
                ['training-section', copy.menu.training],
                ['activities-section', copy.menu.activities],
                ['hobbies-section', copy.menu.hobbies],
                ['expectation-section', copy.menu.expectation],
                ['contact-section', copy.menu.contact],
                ['dua-section', copy.menu.dua]
            ];

            const [activeSection, setActiveSection] = React.useState(() => {
                const hashId = window.location.hash.replace('#', '');
                return menuItems.some(([id]) => id === hashId) ? hashId : menuItems[0][0];
            });
            const [isIntroPopupOpen, setIsIntroPopupOpen] = React.useState(() => !hasRecentVoiceVerification());
            const [isVoiceListening, setIsVoiceListening] = React.useState(false);
            const [voiceUiState, setVoiceUiState] = React.useState('idle');
            const [microphonePermissionState, setMicrophonePermissionState] = React.useState('unknown');
            const [voicePrompt, setVoicePrompt] = React.useState(introVoiceHint);
            const [isMenuDragging, setIsMenuDragging] = React.useState(false);
            const [isLanguageRowCollapsed, setIsLanguageRowCollapsed] = React.useState(true);
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
            const languageRowHideTimeoutRef = React.useRef(null);
            const lastVoiceVerificationTouchRef = React.useRef(0);

            const detailGroups = {
                personal: copy.personalDetails,
                family: copy.familyDetails,
                work: copy.workSection.items
            };
            const workData = copy.workSection.items;
            const galleryPhotos = copy.gallery.photos;
            const languageData = copy.languages.items;
            const educationData = copy.education.items;
            const familySiblings = copy.familySiblings;
            const siblingStatusData = copy.siblingStatusData;
            const activityData = copy.activities.items;
            const hobbiesData = copy.hobbies.items;
            const lifestyleData = copy.lifestyle.items;
            const trainingItems = copy.training.items;
            const expectationItems = copy.expectation.items;
            const contactBlocks = copy.contact.blocks;
            const permanentAddressValue = copy.contact.permanentAddressValue;
            const showDuaMeanings = language !== 'ar';
            const voiceCopy = copy.voice;
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
            const familyDetailIconClass = 'fas fa-people-roof';
            const siblingDetailIconClass = 'fas fa-user-group';
            const languageDetailIconClass = 'fas fa-language';
            const educationDetailIconClass = 'fas fa-graduation-cap';
            const activityDetailIconClass = 'fas fa-star';
            const availableLanguageOptions = languageOptions.filter(({ code }) => code !== language);

            const renderDetailValue = (value) => {
                if (typeof value === 'string' && value === permanentAddressValue) {
                    return (
                        <>
                            {value}
                            <div className="address-actions">
                                <a className="map-link-button" href={permanentAddressMapHref} target="_blank" rel="noreferrer">
                                    <i className="fas fa-location-arrow" aria-hidden="true"></i>
                                    {copy.contact.mapButton}
                                </a>
                            </div>
                        </>
                    );
                }

                if (typeof value !== 'string' || !value.startsWith(copy.common.latePrefix)) {
                    return value;
                }

                return (
                    <>
                        <span className="detail-inline-badge late-inline-badge">{copy.common.lateBadge}</span>
                        {' '}
                        {value.slice(copy.common.latePrefix.length)}
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

            React.useEffect(() => {
                centerMenuLink(activeSection, hasCenteredMenuRef.current ? 'smooth' : 'auto');
                hasCenteredMenuRef.current = true;
            }, [activeSection, language]);

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

                hasBootstrappedSavedVerificationRef.current = true;

                if (!document.body.classList.contains('has-entered-biodata')) {
                    document.body.classList.add('has-entered-biodata');
                    window.dispatchEvent(new Event('bbdMahbub:enter-biodata'));
                }
            }, [isIntroPopupOpen]);

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
                let ticking = false;

                const updateActiveSection = () => {
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
                document.body.classList.toggle('is-popup-open', isIntroPopupOpen);

                return () => {
                    document.body.classList.remove('is-popup-open');
                };
            }, [isIntroPopupOpen]);

            React.useEffect(() => () => {
                clearSpeechRecognition();
            }, []);

            React.useEffect(() => {
                if (!navigator.permissions || typeof navigator.permissions.query !== 'function') {
                    return undefined;
                }

                let permissionStatus = null;
                let isDisposed = false;

                const handlePermissionChange = () => {
                    if (!permissionStatus || isDisposed) return;
                    setMicrophonePermissionState(permissionStatus.state);
                    setStoredMicrophonePermissionGrant(permissionStatus.state === 'granted');
                };

                navigator.permissions.query({ name: 'microphone' }).then((status) => {
                    if (isDisposed) return;

                    permissionStatus = status;
                    handlePermissionChange();

                    if (typeof status.addEventListener === 'function') {
                        status.addEventListener('change', handlePermissionChange);
                    } else {
                        status.onchange = handlePermissionChange;
                    }
                }).catch(() => {
                    // Ignore browsers that do not expose microphone permission state.
                });

                return () => {
                    isDisposed = true;

                    if (!permissionStatus) return;

                    if (typeof permissionStatus.removeEventListener === 'function') {
                        permissionStatus.removeEventListener('change', handlePermissionChange);
                    } else {
                        permissionStatus.onchange = null;
                    }
                };
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
                clearSpeechRecognition();
                voiceMatchedRef.current = true;
                voiceStopReasonRef.current = 'matched';
                setIsVoiceListening(false);
                setVoiceUiState('idle');
                lastVoiceVerificationTouchRef.current = Date.now();
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

            const getPreferredRecognitionLangs = () => {
                const browserLang = (navigator.language || '').toLowerCase();
                const orderedLangs = [];

                if (browserLang.startsWith('bn')) {
                    orderedLangs.push('bn-BD');
                } else if (browserLang.startsWith('ar')) {
                    orderedLangs.push('ar-SA');
                } else {
                    orderedLangs.push('en-US');
                }

                orderedLangs.push('en-US', 'ar-SA', 'bn-BD');
                return [...new Set(orderedLangs)];
            };

            const configureRecognitionBias = (recognition) => {
                if (!('phrases' in recognition) || typeof window.SpeechRecognitionPhrase !== 'function') {
                    return;
                }

                try {
                    recognition.phrases = acceptedBismillahPhrases
                        .slice(0, 8)
                        .map((phrase) => new window.SpeechRecognitionPhrase(phrase, 5.0));
                } catch (error) {
                    // Ignore unsupported contextual biasing implementations.
                }
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

            const ensureMicrophonePermission = async () => {
                if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
                    return true;
                }

                if (microphonePermissionState === 'granted' || hasStoredMicrophonePermissionGrant()) {
                    return true;
                }

                if (microphonePermissionState === 'denied') {
                    setVoiceUiState('error');
                    setVoicePrompt(voiceCopy.permissionBlocked);
                    return false;
                }

                setVoiceUiState('permission');
                setVoicePrompt(voiceCopy.permissionRequired);

                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    stream.getTracks().forEach((track) => track.stop());
                    setMicrophonePermissionState('granted');
                    setStoredMicrophonePermissionGrant(true);
                    setVoiceUiState('idle');
                    setVoicePrompt(voiceCopy.permissionAllowed);
                    return true;
                } catch (error) {
                    setVoiceUiState('error');

                    if (error && (error.name === 'NotAllowedError' || error.name === 'SecurityError')) {
                        setMicrophonePermissionState('denied');
                        setStoredMicrophonePermissionGrant(false);
                        setVoicePrompt(voiceCopy.permissionDenied);
                    } else if (error && error.name === 'NotFoundError') {
                        setVoicePrompt(voiceCopy.noMicrophone);
                    } else {
                        setVoicePrompt(voiceCopy.permissionUnknown);
                    }
                }

                return false;
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
                const recognitionLang = getPreferredRecognitionLangs()[0];

                speechRecognitionRef.current = recognition;
                voiceMatchedRef.current = false;
                voiceStopReasonRef.current = 'listening';
                recognition.lang = recognitionLang;
                recognition.interimResults = true;
                recognition.maxAlternatives = 10;
                recognition.continuous = false;
                configureRecognitionBias(recognition);

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
                        window.setTimeout(() => {
                            handleEnterBiodata();
                        }, 320);
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

            const handleVoiceButtonClick = async () => {
                if (isPreparingVoiceRef.current || voiceUiState === 'permission') {
                    return;
                }

                if (isVoiceListening || speechRecognitionRef.current) {
                    stopBismillahVoiceCheck();
                    return;
                }

                const permissionReady = await ensureMicrophonePermission();
                if (!permissionReady) {
                    return;
                }

                startBismillahVoiceCheck();
            };

            const handleMenuClick = (event, id) => {
                if (suppressMenuClickRef.current) {
                    event.preventDefault();
                    return;
                }

                event.preventDefault();

                const target = document.getElementById(id);
                if (!target) return;

                setActiveSection(id);
                centerMenuLink(id);

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                window.history.replaceState(null, '', `#${id}`);
            };

            const isVoiceError = hasSpeechRecognitionSupport && voiceUiState === 'error';
            const isVoicePreparing = hasSpeechRecognitionSupport && (voiceUiState === 'permission' || voiceUiState === 'preparing');
            const showVoiceMicButton = hasSpeechRecognitionSupport;
            const voiceStatusIconClass = !hasSpeechRecognitionSupport
                ? 'fa-circle-info'
                : isVoiceError
                    ? 'fa-triangle-exclamation'
                    : isVoicePreparing
                        ? 'fa-spinner fa-spin'
                        : isVoiceListening
                            ? 'fa-wave-square'
                            : 'fa-microphone-lines';
            const voiceSupportNote = !hasSpeechRecognitionSupport
                ? voiceCopy.supportNoSupport
                : voiceUiState === 'permission'
                    ? voiceCopy.supportPermission
                    : voiceUiState === 'preparing'
                        ? voiceCopy.supportPreparing
                        : voiceUiState === 'error'
                            ? microphonePermissionState === 'denied'
                                ? voiceCopy.supportErrorDenied
                                : voiceCopy.supportErrorGeneral
                            : isVoiceListening
                                ? voiceCopy.supportListening
                                : microphonePermissionState === 'granted'
                                    ? voiceCopy.supportReady
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
                <div className={`app-shell${isRtl ? ' is-rtl' : ''}`}>
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
                                        <div className="intro-popup-taawuz" dir="rtl">
                                            <span className="intro-popup-taawuz-mark" aria-hidden="true">۞</span>
                                            <span className="intro-popup-taawuz-text">{popupTaawuz}</span>
                                            <span className="intro-popup-taawuz-mark" aria-hidden="true">۞</span>
                                        </div>
                                        <div className="intro-popup-dua-arabic">{duaArabicLines[2]}</div>
                                        <div className="intro-popup-dua-reference">{copy.intro.duaReference}</div>
                                        {language !== 'ar' ? (
                                            <div className="intro-popup-dua-meaning">{copy.intro.duaMeaning}</div>
                                        ) : null}
                                    </div>

                                    <div className="intro-popup-instruction">
                                        <div className="intro-popup-section-title">{copy.intro.instructionsTitle}</div>
                                        <ul className="intro-popup-list">
                                            {copy.intro.instructions.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {!isChromeBrowser ? (
                                        <div className="intro-popup-voice-status is-error">
                                            <i className="fas fa-triangle-exclamation" aria-hidden="true"></i>
                                            <span>{chromeOnlyAlertMessage}</span>
                                        </div>
                                    ) : null}

                                    <div className={`intro-popup-voice-status${isVoiceError ? ' is-error' : isVoicePreparing ? ' is-preparing' : isVoiceListening ? ' is-listening' : ''}`}>
                                        <i className={`fas ${voiceStatusIconClass}`} aria-hidden="true"></i>
                                        <span>{voicePrompt}</span>
                                    </div>

                                    <div className="intro-popup-voice-gate">
                                        {showVoiceMicButton ? (
                                            <button
                                                type="button"
                                                className={`intro-popup-mic-button${voiceUiState === 'error' ? ' is-error' : voiceUiState === 'permission' || voiceUiState === 'preparing' ? ' is-preparing' : isVoiceListening ? ' is-listening' : ''}`}
                                                onClick={handleVoiceButtonClick}
                                                onContextMenu={(event) => event.preventDefault()}
                                                aria-label={voiceUiState === 'permission' || voiceUiState === 'preparing' ? voiceCopy.micAriaPermission : voiceUiState === 'error' ? voiceCopy.micAriaRetry : isVoiceListening ? voiceCopy.micAriaStop : voiceCopy.micAriaStart}
                                            >
                                                <i className={`fas ${voiceUiState === 'error' ? 'fa-microphone-slash' : voiceUiState === 'permission' || voiceUiState === 'preparing' ? 'fa-spinner fa-spin' : isVoiceListening ? 'fa-microphone-lines' : 'fa-microphone'}`} aria-hidden="true"></i>
                                            </button>
                                        ) : null}
                                        <div className="intro-popup-support-note">{voiceSupportNote}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    <div className="container">
                    <nav className="top-menu" aria-label={copy.navigation.sectionsAria}>
                        <div className="top-menu-language-row">
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
                            <span className="profile-name-icon" aria-hidden="true">{iconHeartSparkle}</span>
                            <span className="profile-name-text">{copy.profile.name}</span>
                            <span className="profile-name-icon" aria-hidden="true">{iconHeartSparkle}</span>
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
                                {galleryPhotos.map(({ src, alt, label, featured }) => (
                                    <figure className={`photo-frame${featured ? ' photo-frame-featured' : ''}`} key={src}>
                                        <div className="photo-frame-inner">
                                            <img className="photo-gallery-image" src={src} alt={alt} loading="lazy" />
                                        </div>
                                        <figcaption className="photo-gallery-caption">
                                            <span>{label}</span>
                                            <span className="photo-gallery-caption-icon">{String.fromCodePoint(0x1F495)}</span>
                                        </figcaption>
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
                            {group === 'family' && (
                                <div className="family-summary">
                                    <div className="family-summary-label">
                                        <i className="fas fa-shield-halved" aria-hidden="true"></i>
                                        {copy.familySummary.label}
                                    </div>
                                    <div className="family-summary-title">{copy.familySummary.title}</div>
                                    <div className="family-summary-tags">
                                        {copy.familySummary.tags.map((tag) => (
                                            <span className="family-summary-tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
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
                                                    <div className="work-title">{title}</div>
                                                </div>
                                                <span className="badge work-duration">{duration}</span>
                                            </div>
                                            <div className="work-org">{organization}</div>
                                        </div>
                                    ))
                                ) : (
                                    details.map((detail, idx) => {
                                        const isObjectDetail = !Array.isArray(detail);
                                        const label = isObjectDetail ? detail.label : detail[0];
                                        const value = isObjectDetail ? detail.value : detail[1];
                                        const iconClass = isObjectDetail ? detail.iconClass : null;
                                        const resolvedIconClass = iconClass || (group === 'family' ? familyDetailIconClass : null);

                                        return (
                                        <div className="detail-row section-card-item" key={idx}>
                                            <div className="detail-label">
                                                {resolvedIconClass ? (
                                                    <span className="detail-label-icon">
                                                        <i className={resolvedIconClass} aria-hidden="true"></i>
                                                    </span>
                                                ) : null}
                                                <span>{label}</span>
                                            </div>
                                            <div className="detail-value">{renderDetailValue(value)}</div>
                                        </div>
                                        );
                                    })
                                )}
                                </div>
                                {group === 'family' && (
                                    <>
                                        <div className="subsection-title">{copy.familySiblingsTitle}</div>
                                        <div className="section-item-list section-item-list-compact">
                                        {familySiblings.map(([label, value], idx) => (
                                            <div className="sub-detail-row section-card-item" key={idx}>
                                                <div className="detail-label sibling-label">
                                                    <span className="detail-label-icon">
                                                        <i className={siblingDetailIconClass} aria-hidden="true"></i>
                                                    </span>
                                                    <span>{label}</span>
                                                </div>
                                                <div className="detail-value">{value}</div>
                                                <div className={`badge sibling-status sibling-status-cell ${siblingStatusData[label]?.className || ''}`}>
                                                    {siblingStatusData[label]?.text || ''}
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="card section-anchor" id="lifestyle-section">
                        <div className="section-header">
                            <i className="fas fa-seedling section-icon" aria-hidden="true"></i>
                            {copy.lifestyle.title}
                        </div>
                        <div className="card-content">
                            <div className="section-item-list">
                            {lifestyleData.map(({ label, value, iconClass }, idx) => (
                                <div className="detail-row section-card-item" key={idx}>
                                    <div className="detail-label">
                                        <span className="detail-label-icon">
                                            <i className={iconClass} aria-hidden="true"></i>
                                        </span>
                                        <span>{label}</span>
                                    </div>
                                    <div className="detail-value">{value}</div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>

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
                                            <div className="language-title">{title}</div>
                                        </div>
                                        <span className="badge language-level-badge">{level}</span>
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
                                                <div className="education-subtitle">{title}</div>
                                            </div>
                                            <span className="badge education-score-badge">{scoreLabel} {score}</span>
                                        </div>
                                        <span className="badge education-year-badge">{session}</span>
                                    </div>
                                    <div className="education-meta">
                                        {institution}
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
                                                {item.text}
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
                                            item
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
                                                <div className="activity-title">{title}</div>
                                            </div>
                                            {period ? <span className="badge activity-period">{period}</span> : null}
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
                                                            {item.text}
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
                            <i className="fas fa-heart section-icon" aria-hidden="true"></i>
                            {copy.hobbies.title}
                        </div>
                        <div className="card-content">
                            <div className="hobby-list">
                                {hobbiesData.map(([iconClass, text], idx) => (
                                    <div className="hobby-item section-card-item" key={idx}>
                                        <span className="hobby-icon">
                                            <i className={iconClass} aria-hidden="true"></i>
                                        </span>
                                        <div className="hobby-text">{text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card section-anchor" id="expectation-section">
                        <div className="section-header">
                            <span className="section-icon"><i className="fas fa-ring" aria-hidden="true"></i></span>
                            {copy.expectation.title}
                        </div>
                        <div className="card-content">
                            <div className="expectation-list">
                                {expectationItems.map(({ iconClass, title, text }) => (
                                    <div className="expectation-item section-card-item" key={title}>
                                        <span className="expectation-item-icon"><i className={iconClass} aria-hidden="true"></i></span>
                                        <div className="expectation-item-content">
                                            <div className="expectation-item-title">{title}</div>
                                            <div className="expectation-item-text">{text}</div>
                                        </div>
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
                                            <span>{label}</span>
                                        </div>
                                        <div className="address-box">
                                            {href ? (
                                                <a className="contact-action-link" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{value}</a>
                                            ) : (
                                                value
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
                            <span className="section-icon">{iconKaaba}</span>
                            {copy.dua.title}
                        </div>
                        <div className="card-content final-dua">
                            <div className="dua-entry">
                                <div className="dua-block">
                                    <div className="dua-arabic">
                                        {duaArabicLines[0]}
                                    </div>
                                </div>
                                {showDuaMeanings ? (
                                    <div className="dua-block">
                                        <div className="dua-english">
                                            {copy.dua.meanings[0]}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                            <div className="dua-entry">
                                <div className="dua-block">
                                    <div className="dua-arabic">
                                        {duaArabicLines[1]}
                                    </div>
                                </div>
                                {showDuaMeanings ? (
                                    <div className="dua-block">
                                        <div className="dua-english">
                                            {copy.dua.meanings[1]}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                            <div className="dua-entry">
                                <div className="dua-block">
                                    <div className="dua-arabic">
                                        {duaArabicLines[2]}
                                    </div>
                                </div>
                                {showDuaMeanings ? (
                                    <div className="dua-block">
                                        <div className="dua-english">
                                            {copy.dua.meanings[2]}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                            <div className="dua-closing">
                                <span className="dua-closing-icon" aria-hidden="true">{iconPrayerHands}</span>
                                <span>- {copy.dua.closing}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{textAlign: 'center', margin: '40px 0', color: '#0d7377', fontSize: '18px', fontWeight: '600'}}>
                        {iconHeartSparkle} {iconMosque} {copy.profile.tagline} {iconMosque} {iconHeartSparkle}
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
