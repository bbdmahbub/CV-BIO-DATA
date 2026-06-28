(() => {
  const BioDataComponent = () => {
    const cvCacheVersion = typeof window !== "undefined" && window.bbdMahbubCvCacheVersion ? window.bbdMahbubCvCacheVersion : Date.now();
    const withCvCacheVersion = (src) => `${src}${src.includes("?") ? "&" : "?"}v=${cvCacheVersion}`;
    const iconProfile = String.fromCodePoint(128100);
    const iconFamily = String.fromCodePoint(128106);
    const iconEducation = String.fromCodePoint(127891);
    const iconWork = String.fromCodePoint(128188);
    const iconLanguage = String.fromCodePoint(127760);
    const iconBooks = String.fromCodePoint(128218);
    const iconMosque = String.fromCodePoint(128332);
    const iconHeartSparkle = String.fromCodePoint(128149);
    const iconKaaba = String.fromCodePoint(128331);
    const iconPrayerHands = String.fromCodePoint(129330);
    const iconMapPin = String.fromCodePoint(128205);
    const iconIslamicBride = String.fromCodePoint(129493);
    const dividerOrnament = "\u2726 \u25C6 \u2726";
    const popupBismillah = "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062D\u0645\u0646 \u0627\u0644\u0631\u062D\u064A\u0645";
    const popupDarud = "\u0627\u0644\u0644\u0647\u0645 \u0635\u0644 \u0648\u0633\u0644\u0645 \u0639\u0644\u0649 \u0633\u064A\u062F\u0646\u0627 \u0645\u062D\u0645\u062F \uFDFA";
    const popupTaawuz = "\u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0627\u0644\u0644\u064E\u0651\u0647\u0650 \u0645\u0650\u0646\u064E \u0627\u0644\u0634\u064E\u0651\u064A\u0652\u0637\u064E\u0627\u0646\u0650 \u0627\u0644\u0631\u064E\u0651\u062C\u0650\u064A\u0645\u0650";
    const duaArabicLines = [
      "\u0648\u064E\u0623\u064E\u0646\u0643\u0650\u062D\u064F\u0648\u0627 \u0627\u0644\u0652\u0623\u064E\u064A\u064E\u0627\u0645\u064E\u0649\u0670 \u0645\u0650\u0646\u0643\u064F\u0645\u0652 \u0648\u064E\u0627\u0644\u0635\u064E\u0651\u0627\u0644\u0650\u062D\u0650\u064A\u0646\u064E \u0645\u0650\u0646\u0652 \u0639\u0650\u0628\u064E\u0627\u062F\u0650\u0643\u064F\u0645\u0652 \u0648\u064E\u0625\u0650\u0645\u064E\u0627\u0626\u0650\u0643\u064F\u0645\u0652 \u06DA \u0625\u0650\u0646 \u064A\u064E\u0643\u064F\u0648\u0646\u064F\u0648\u0627 \u0641\u064F\u0642\u064E\u0631\u064E\u0627\u0621\u064E \u064A\u064F\u063A\u0652\u0646\u0650\u0647\u0650\u0645\u064F \u0627\u0644\u0644\u064E\u0651\u0647\u064F \u0645\u0650\u0646 \u0641\u064E\u0636\u0652\u0644\u0650\u0647\u0650 \u06D7 \u0648\u064E\u0627\u0644\u0644\u064E\u0651\u0647\u064F \u0648\u064E\u0627\u0633\u0650\u0639\u064C \u0639\u064E\u0644\u0650\u064A\u0645\u064C",
      "\u0631\u064E\u0628\u064E\u0651\u0646\u064E\u0627 \u0647\u064E\u0628\u0652 \u0644\u064E\u0646\u064E\u0627 \u0645\u0650\u0646\u0652 \u0623\u064E\u0632\u0652\u0648\u064E\u0627\u062C\u0650\u0646\u064E\u0627 \u0648\u064E\u0630\u064F\u0631\u0650\u0651\u064A\u064E\u0651\u0627\u062A\u0650\u0646\u064E\u0627 \u0642\u064F\u0631\u064E\u0651\u0629\u064E \u0623\u064E\u0639\u0652\u064A\u064F\u0646\u064D \u0648\u064E\u0627\u062C\u0652\u0639\u064E\u0644\u0652\u0646\u064E\u0627 \u0644\u0650\u0644\u0652\u0645\u064F\u062A\u064E\u0651\u0642\u0650\u064A\u0646\u064E \u0625\u0650\u0645\u064E\u0627\u0645\u064B\u0627",
      "\u0631\u064E\u0628\u0650\u0651 \u0647\u064E\u0628\u0652 \u0644\u0650\u064A \u0645\u0650\u0646\u064E \u0627\u0644\u0635\u064E\u0651\u0627\u0644\u0650\u062D\u0650\u064A\u0646\u064E",
      "\u0631\u064E\u0628\u064E\u0651\u0646\u064E\u0627 \u0622\u062A\u0650\u0646\u064E\u0627 \u0645\u0650\u0646\u0652 \u0644\u064E\u062F\u064F\u0646\u0643\u064E \u0631\u064E\u062D\u0652\u0645\u064E\u0629\u064B \u0648\u064E\u0647\u064E\u064A\u0650\u0651\u0626\u0652 \u0644\u064E\u0646\u064E\u0627 \u0645\u0650\u0646\u0652 \u0623\u064E\u0645\u0652\u0631\u0650\u0646\u064E\u0627 \u0631\u064E\u0634\u064E\u062F\u064B\u0627"
    ];
    const acceptedBismillahPhrases = [
      "bismillah",
      "bismillahirrahmanirrahim",
      "bismillahir rohmanir rohim",
      "bismillahir rahmanir rahim",
      "bismillahir rahmanir raheem",
      "bismillah hir rahman nir rahim",
      "bismillahirrahmanirrahim",
      "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9",
      "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9\u09BF\u09B0\u09B0\u09B9\u09AE\u09BE\u09A8\u09BF\u09B0\u09B0\u09B9\u09BF\u09AE",
      "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9\u09BF\u09B0\u09B0\u09BE\u09B9\u09AE\u09BE\u09A8\u09BF\u09B0\u09B0\u09BE\u09B9\u09BF\u09AE",
      "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9\u09BF\u09B0 \u09B0\u09B9\u09AE\u09BE\u09A8\u09BF\u09B0 \u09B0\u09B9\u09BF\u09AE",
      "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9\u09BF\u09B0 \u09B0\u09BE\u09B9\u09AE\u09BE\u09A8\u09BF\u09B0 \u09B0\u09BE\u09B9\u09BF\u09AE",
      "\u0628\u0633\u0645\u0627\u0644\u0644\u0647",
      "\u0628\u0633\u0645\u0627\u0644\u0644\u0651\u064E\u0647",
      "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647",
      "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062D\u0645\u0646 \u0627\u0644\u0631\u062D\u064A\u0645",
      "\u0628\u0633\u0645\u0627\u0644\u0644\u0647\u0627\u0644\u0631\u062D\u0645\u0646\u0627\u0644\u0631\u062D\u064A\u0645"
    ];
    const bismillahPuzzleSets = {
      en: {
        title: "MATCH BISMILLAH CORRECTLY",
        sourceLabel: "PUZZLE CHARACTERS",
        answerLabel: "SELECTED CHARACTERS",
        success: "BISMILLAH COMPLETE. OPENING BIODATA...",
        reset: "RESET PUZZLE",
        pieces: ["H", "B", "MI", "A", "S", "LL", "I"],
        answer: ["B", "I", "S", "MI", "LL", "A", "H"],
        soundText: "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647",
        soundLang: "ar-SA"
      },
      bn: {
        title: "\u09B8\u09A0\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9\u09CD \u09AE\u09BF\u09B2\u09BE\u09A8",
        sourceLabel: "\u09AA\u09BE\u099C\u09B2\u09C7\u09B0 \u0985\u0995\u09CD\u09B7\u09B0",
        answerLabel: "\u09B8\u09BE\u099C\u09BE\u09A8\u09CB \u0985\u0995\u09CD\u09B7\u09B0",
        success: "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u09AC\u09BE\u09DF\u09CB\u09A1\u09BE\u099F\u09BE \u0996\u09CB\u09B2\u09BE \u09B9\u099A\u09CD\u099B\u09C7...",
        reset: "\u09AA\u09BE\u099C\u09B2 \u0986\u09AC\u09BE\u09B0 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8",
        pieces: ["\u09B9\u09CD", "\u09AC\u09BF", "\u09B2\u09CD\u09B2\u09BE", "\u09B8", "\u09AE\u09BF"],
        answer: ["\u09AC\u09BF", "\u09B8", "\u09AE\u09BF", "\u09B2\u09CD\u09B2\u09BE", "\u09B9\u09CD"],
        soundText: "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647",
        soundLang: "ar-SA"
      },
      ar: {
        title: "\u0631\u064E\u062A\u0651\u0650\u0628\u0652 \u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064E\u0647\u0650 \u0628\u0650\u0634\u064E\u0643\u0652\u0644\u064D \u0635\u064E\u062D\u0650\u064A\u062D\u064D",
        sourceLabel: "\u0623\u062D\u0631\u0641 \u0627\u0644\u0644\u063A\u0632",
        answerLabel: "\u0627\u0644\u0623\u062D\u0631\u0641 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629",
        success: "\u0627\u0643\u062A\u0645\u0644 \u0628\u0633\u0645 \u0627\u0644\u0644\u0647. \u064A\u062A\u0645 \u0641\u062A\u062D \u0627\u0644\u0633\u064A\u0631\u0629...",
        reset: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0644\u063A\u0632",
        pieces: ["\u0647", "\u0628", "\u0644", "\u0633", "\u0627\u0644", "\u0645"],
        answer: ["\u0628", "\u0633", "\u0645", "\u0627\u0644", "\u0644", "\u0647"],
        soundText: "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647",
        soundLang: "ar-SA"
      }
    };
    const permanentAddressMapHref = "https://maps.app.goo.gl/hvcHqxMvhF9cGFbM6";
    const bismillahToneSrc = withCvCacheVersion("assets/tone/Bismillah.mp3");
    const bismillahIntroSeenStorageKey = "bbdMahbubBismillahIntroSeen";
    const activeSectionStorageKey = "bbdMahbubActiveSection";
    const voiceVerificationStorageKey = "bbdMahbubVoiceVerifiedAt";
    const voiceVerificationGracePeriodMs = 30 * 60 * 1e3;
    const languageOptions = [
      { code: "ar", shortLabel: "AR", nativeLabel: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" },
      { code: "en", shortLabel: "EN", nativeLabel: "English" },
      { code: "bn", shortLabel: "BN", nativeLabel: "\u09AC\u09BE\u0982\u09B2\u09BE" }
    ];
    const bismillahLanguageOptions = ["bn", "en", "ar"].map((code) => languageOptions.find((option) => option.code === code)).filter(Boolean);
    const translations = {
      en: {
        locale: "en",
        dir: "ltr",
        meta: {
          title: "CV - Md. Mahbubur Rahman",
          description: "CV of Md. Mahbubur Rahman with personal, education, work, training, activities, and contact details."
        },
        navigation: {
          // quickJump: 'Quick Jump',
          sectionsAria: "Page sections",
          languageSwitcherLabel: "Language versions",
          languagePanelHint: "Change the page language at any time.",
          languagePanelCollapse: "Collapse language controls",
          languagePanelExpand: "Expand language controls"
        },
        common: {
          visit: "Visit",
          lateBadge: "Late",
          latePrefix: "Late "
        },
        intro: {
          kicker: "Dua & Instruction",
          title: "Please Read Before Exploring",
          duaMeaning: "Our Rabb, grant us mercy from Yourself\nand prepare for us right guidance in our affairs.",
          duaReference: "Sura Al-Kahf, Aya 10",
          instructionsTitle: "Instruction",
          instructions: [
            "Begin with respect, sincerity, and trust in Allah.",
            "Use the top menu to move quickly between each section.",
            "Please maintain privacy while reviewing this profile."
          ]
        },
        bismillahIntro: {
          ayahReference: "Surah An-Nur, Ayah 32",
          ayahMeaning: "And marry the unmarried among you and the righteous among your male servants and female servants. If they are poor, Allah will enrich them from His bounty. And Allah is All-Encompassing, All-Knowing.",
          viewButton: "VIEW BIO-DATA"
        },
        voice: {
          tapToStart: "Tap the mic once to start Bismillah voice verification.",
          browserNoSupport: "This browser does not include live speech recognition. Use Continue below to open the CV.",
          starting: "Starting microphone. If your browser asks, tap Allow microphone permission.",
          listening: 'Microphone is active. Say "Bismillah" once and wait for verification.',
          detected: (transcript) => `Detected: "${transcript}". Opening CV...`,
          heard: (transcript) => `Heard: "${transcript}". Tap the mic and say "Bismillah" again.`,
          errors: {
            "not-allowed": "Microphone access was blocked. Please allow microphone permission and try again.",
            "service-not-allowed": "Speech recognition is blocked on this browser. Check browser support and microphone permission, then try again.",
            aborted: "Voice recording stopped before it could start. Tap the mic again.",
            "audio-capture": "No microphone was found. Connect a microphone and try again.",
            "no-speech": 'No speech was detected. Tap the mic again and say "Bismillah".',
            "language-not-supported": "This browser does not support the selected speech language for web speech recognition.",
            network: "Your browser could not reach its speech service. Please check your connection and browser settings, then try again."
          },
          defaultError: "Voice recognition did not start properly. If a browser popup appears, tap Allow microphone permission and try again.",
          timeout: 'Listening timed out. Tap the mic and say "Bismillah" again.',
          notVerified: 'I could not verify "Bismillah". Tap the mic and say it again.',
          couldNotStart: "Microphone could not start right now. If the browser asks, allow microphone permission, then tap the mic again.",
          supportNoSupport: "Live speech recognition is not built into this browser, so the page now falls back to the Continue button below.",
          supportPreparing: "Microphone is starting now. Please wait a moment.",
          supportErrorGeneral: "If no popup appears, check this site's microphone permission and whether your browser supports web speech recognition.",
          supportListening: "Recording is active now. Speak once, then wait a moment for verification.",
          supportIdle: "Tap the mic. If a browser popup appears, tap Allow microphone permission.",
          micAriaRetry: "Retry voice recognition",
          micAriaStop: "Stop voice recognition",
          micAriaStart: "Start voice recognition and say Bismillah"
        },
        menu: {
          profile: "Profile",
          gallery: "Gallery",
          personal: "Personal",
          family: "Family",
          work: "Work",
          lifestyle: "Lifestyle",
          language: "Language",
          education: "Education",
          training: "Training",
          activities: "Activities",
          hobbies: "Hobbies",
          expectation: "Expectation",
          contact: "Contact",
          dua: "Dua"
        },
        profile: {
          name: "Md Mahbubur Rahman",
          subtitle: "IT Professional",
          tagline: "A Muslim young man is seeking a Muslimah companion who will be the coolness of his eyes in this world and the Hereafter!",
          stats: {
            age: "YEARS OLD",
            education: "HIGHLY EDUCATED",
            work: "WELL ESTABLISHED",
            faith: "PRACTICING MUSLIM"
          }
        },
        gallery: {
          title: "Photo Gallery",
          photos: [
            { src: withCvCacheVersion("assets/images/mahbub-portrait-1.jpg"), alt: "Md Mahbubur Rahman portrait 1", label: "Portrait 01", featured: true },
            { src: withCvCacheVersion("assets/images/mahbub-portrait-2.jpg"), alt: "Md Mahbubur Rahman portrait 2", label: "Portrait 02", featured: false }
          ]
        },
        sectionHeaders: {
          personal: "Personal Information",
          family: "Family Information",
          work: "Professional Information"
        },
        personalDetails: [
          { label: "Full Name", value: "Md. Mahbubur Rahman", iconClass: "fas fa-user" },
          { label: "Nickname", value: "Nasir Uddin", iconClass: "fas fa-signature" },
          { label: "Date of Birth", value: "20 December 1997", iconClass: "fas fa-calendar-days" },
          { label: "Age", value: "28 Years", iconClass: "fas fa-hourglass-half" },
          { label: "Religion", value: "Islam (Practicing Muslim)", iconClass: "fas fa-mosque" },
          { label: "Marital Status", value: "Unmarried", iconClass: "fas fa-ring" },
          { label: "Complexion", value: "Medium Dark", iconClass: "fas fa-palette" },
          { label: "Height & Weight", value: `5' 3" & 70 KGs`, iconClass: "fas fa-ruler-combined" },
          { label: "Blood Group", value: "A+", iconClass: "fas fa-droplet" },
          { label: "Health Status", value: "Healthy, non-smoker, no addiction", iconClass: "fas fa-heart-pulse" }
        ],
        familyDetails: [
          ["Father", "Late Abdul Kader Howlader (Village Doctor and Primary Teacher)"],
          ["Mother", "Farida Begum - Housewife"],
          ["Siblings", "4 Brothers and 3 Sisters"],
          ["Permanent Address", "Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat"],
          ["District", "Bagerhat"]
        ],
        familySummary: {
          label: "Family Background",
          title: "A respectable, middle-class family grounded in education and religious values.",
          tags: ["Respectable", "Middle-Class", "Educated", "Religious"]
        },
        familySiblingsTitle: "Sibling Details",
        familySiblings: [
          ["1st Sister", "Shahanaj Shanti, Housewife with 4 Children. Morrelganj."],
          ["2nd Brother", "Alauddin, was a worker in UAE, Business (Dhaka). 2 Children. Morrelganj."],
          ["3rd Brother", "Giash Uddin, Driver, Bananja PCL, Chattagram, BD Navy. 2 Children, Morrelganj."],
          ["4th Sister", "Zerin Salma Beby, Housewife with 3 children. Morrelganj."],
          ["5th Brother", "Mohiuddin, Driver, Doctor Couple's, Chattagram. 4 Children, Chattagram."],
          ["6th Sister", "Nazma Sultana, Housewife with 2 children. Khulna."],
          ["7th", "Youngest son, self."]
        ],
        siblingStatusData: {
          "1st Sister": { text: "Married", className: "married" },
          "2nd Brother": { text: "Married", className: "married" },
          "3rd Brother": { text: "Married", className: "married" },
          "4th Sister": { text: "Married", className: "married" },
          "5th Brother": { text: "Married", className: "married" },
          "6th Sister": { text: "Married", className: "married" },
          "7th": { text: "Unmarried", className: "unmarried" }
        },
        workSection: {
          items: [
            { title: "Procurement & Servicing Lead", organization: "Earthface IT, Dhaka", duration: "27 Nov 2021 - Present", iconClass: "fas fa-briefcase" },
            { title: "IT Support Assistant (Part-time)", organization: "Dept. of Arabic Language and Literature, IU, Kushtia", duration: "23 Mar 2017 - 20 Oct 2021", iconClass: "fas fa-headset" },
            { title: "IT Executive (Part-time)", organization: "Khondokar Telecom, Gazipur", duration: "7 Jul 2014 - 12 Dec 2015", iconClass: "fas fa-desktop" }
          ]
        },
        lifestyle: {
          title: "Personality & Lifestyle",
          items: [
            { label: "Character", value: "Humble, Religious, Trustworthy", iconClass: "fas fa-user-shield" },
            { label: "Future Goal", value: "Build a family based on Deen and mutual respect", iconClass: "fas fa-bullseye" },
            { label: "Interests", value: "Islamic lectures, reading, travelling, learning technology", iconClass: "fas fa-book-open" },
            { label: "Food Habit", value: "Prefers home-made halal food", iconClass: "fas fa-utensils" },
            { label: "Additional", value: "Punctual, reserved by nature, socially well-behaved", iconClass: "fas fa-check-double" }
          ]
        },
        languages: {
          title: "Language Proficiency",
          proficiencyAria: (title) => `${title} proficiency`,
          items: [
            { title: "English", level: "Good", percent: 66.66 },
            { title: "Arabic", level: "Good", percent: 66.66 },
            { title: "Bangla", level: "Excellent", percent: 100 }
          ]
        },
        education: {
          title: "Educational Information",
          items: [
            { title: "M.A. (Arabic Language & Literature)", institution: "Islamic University, Kushtia", institutionHref: "https://iu.ac.bd", scoreLabel: "CGPA", score: "3.58/4", session: "2022" },
            { title: "B.A. Honors (Arabic Language & Literature)", institution: "Islamic University, Kushtia", institutionHref: "https://iu.ac.bd", scoreLabel: "CGPA", score: "3.58/4", session: "2020" },
            { title: "Alim (HSC)", institution: "Ta'mirul Millat Kamil Madrasah, Tongi, Gazipur", institutionHref: "https://www.tmt.edu.bd", scoreLabel: "GPA", score: "5.00/5", session: "2014" },
            { title: "Dakhil (SSC)", institution: "Ta'limul Millat Rahmatia Kamil Madrasah, Sonadanga, Khulna", scoreLabel: "GPA", score: "5.00/5", session: "2012" }
          ]
        },
        training: {
          title: "Training and Development",
          items: [
            { text: "Corporate Management Bootcamp - 2023 (10 Days, BYLC, Bangladesh.)", href: "https://bylc.org", linkLabel: "Visit" },
            { text: "Professional Digital Content Management (PDCM), (3 Months, SEIP, Finance Ministry of BD)", href: "https://lms.seip-fd.gov.bd", linkLabel: "Visit" },
            { text: "Web Design & Development (200 Hours, LEDP, ICT Division of Bangladesh.)", href: "https://ictd.gov.bd", linkLabel: "Visit" },
            { text: "Computer & Its Applications (1 Year, Islamic University, Kushtia)", href: "https://iu.ac.bd", linkLabel: "Visit" },
            { text: "Troubleshooting in Computer Security (ICT Division, a2i).", href: "https://a2i.gov.bd", linkLabel: "Visit" },
            { text: "Microsoft Word Basics (a2i, Muktapath).", href: "https://a2i.gov.bd", linkLabel: "Visit" },
            { text: "Video Production (Human Development Media, a2i)", href: "https://a2i.gov.bd", linkLabel: "Visit" },
            { text: "Digital Security Essentials (Digital Security Agency, a2i).", href: "https://a2i.gov.bd", linkLabel: "Visit" },
            { text: "Idea Innovation Workshop for Mobile Games & Apps Development (ICT Division, Digital Bangladesh.)", href: "https://a2i.gov.bd", linkLabel: "Visit" }
          ]
        },
        activities: {
          title: "Extra Curricular Activities",
          items: [
            {
              title: "Volunteering",
              items: [
                { text: "Former Elected CR of the class for 2 years, Islamic University, Kushtia.", iconClass: "fas fa-users", href: "https://iu.ac.bd", linkLabel: "Visit" },
                { text: "Former Director of Betikrom Shahitya Shangskritik Jote, IU.", iconClass: "fas fa-masks-theater", href: "https://web.facebook.com/betikrom87", linkLabel: "Visit" },
                { text: "Former Central Member of Bangladesh Islamic Chhatra Shibir", iconClass: "fas fa-shield-halved", href: "https://shibir.org.bd", linkLabel: "Visit" }
              ]
            },
            { title: "Singing", items: [{ text: "Performed song on SATV, ETV, Channel 9", iconClass: "fas fa-music" }] },
            { title: "Acting", period: "2018", items: [{ text: "Acted in a drama, was placed 2nd Nationally.", iconClass: "fas fa-film" }] },
            { title: "Award", period: "2012", items: [{ text: "Awarded on Poetry Recitation Placed 2nd Nationally", iconClass: "fas fa-award" }] }
          ]
        },
        hobbies: {
          title: "Hobbies and Interests",
          items: [
            ["fas fa-masks-theater", "Cultural Awareness (Singing, Acting, Lyrics etc.)"],
            ["fas fa-lightbulb", "Optimizing Idea."],
            ["fas fa-laptop-medical", "Helping others as a tech savvy."]
          ]
        },
        expectation: {
          title: "Expectation from Bride",
          items: [
            { iconClass: "fas fa-mosque", title: "Religious Practice", text: "Practicing Muslimah with hijab and niqab, aware of maintaining mahram." },
            { iconClass: "fas fa-user-shield", title: "Character", text: "Educated and modest in behavior." },
            { iconClass: "fas fa-house", title: "Family Role", text: "Aware of family responsibilities." },
            { iconClass: "fas fa-heart", title: "Lifestyle", text: "Focused on family and Islamic lifestyle." },
            { iconClass: "fas fa-palette", title: "Preferred Complexion", text: "Medium/Fair (flexible)." },
            { iconClass: "fas fa-briefcase", title: "Profession", text: "A profession is not mandatory; a family-oriented Islamic lifestyle is preferred." }
          ]
        },
        contact: {
          title: "Contact & Location",
          mapButton: "View on Google Maps",
          permanentAddressValue: "Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat",
          blocks: [
            { iconClass: "fas fa-user", label: "Name", value: "Md. Mahbubur Rahman" },
            { iconClass: "fas fa-envelope", label: "Email", value: "bbdmahbub@gmail.com", href: "mailto:bbdmahbub@gmail.com" },
            { iconClass: "fab fa-whatsapp", label: "WhatsApp", value: "+8801917267607", href: "https://wa.me/8801917267607" },
            { iconClass: "fas fa-home", label: "Current Address", value: "Hatir Jheel, Dhaka, Bangladesh" },
            { iconClass: "fas fa-map-marker-alt", label: "Permanent Address", value: "Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat", mapHref: permanentAddressMapHref }
          ]
        },
        dua: {
          title: "Final Words & Dua",
          meanings: [
            '"And marry the unmarried among you and the righteous among your male servants and female servants. If they are poor, Allah will enrich them from His bounty, and Allah is All-Encompassing and Knowing."',
            '"Our Rabb (Allah), grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous."',
            '"Ya Rabb (Allah)! Bestow upon me one of the righteous."',
            '"Our Rabb (Allah), grant us from Yourself mercy and prepare for us from our affair right guidance."'
          ],
          references: [
            "-Surah An-Nur, Ayah 32",
            "-Surah Al-Furqan, Ayah 74",
            "-Surah As-Saffat, Ayah 100",
            "-Surah Al-Kahf, Ayah 10"
          ],
          closing: "Ameen ya Rabbal Alameen."
        }
      },
      ar: {
        locale: "ar",
        dir: "rtl",
        meta: {
          title: "\u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629 - \u0645\u062D\u0645\u062F \u0645\u062D\u0628\u0648\u0628 \u0627\u0644\u0631\u062D\u0645\u0646",
          description: "\u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629 \u0644\u0640 \u0645\u062D\u0645\u062F \u0645\u062D\u0628\u0648\u0628 \u0627\u0644\u0631\u062D\u0645\u0646 \u0648\u062A\u0634\u0645\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629 \u0648\u0627\u0644\u0645\u0647\u0646\u064A\u0629 \u0648\u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629 \u0648\u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0648\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644."
        },
        navigation: {
          // quickJump: 'انتقال سريع'
          sectionsAria: "\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0635\u0641\u062D\u0629",
          languageSwitcherLabel: "\u0625\u0635\u062F\u0627\u0631\u0627\u062A \u0627\u0644\u0644\u063A\u0629",
          languagePanelHint: "\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631 \u0644\u063A\u0629 \u0627\u0644\u0635\u0641\u062D\u0629 \u0641\u064A \u0623\u064A \u0648\u0642\u062A.",
          languagePanelCollapse: "\u0637\u064A \u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u0627\u0644\u0644\u063A\u0629",
          languagePanelExpand: "\u0625\u0638\u0647\u0627\u0631 \u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u0627\u0644\u0644\u063A\u0629"
        },
        common: {
          visit: "\u0632\u064A\u0627\u0631\u0629",
          lateBadge: "\u0627\u0644\u0645\u0631\u062D\u0648\u0645",
          latePrefix: "\u0627\u0644\u0645\u0631\u062D\u0648\u0645 "
        },
        intro: {
          kicker: "\u062F\u0639\u0627\u0621 \u0648\u062A\u0639\u0644\u064A\u0645\u0627\u062A",
          title: "\u064A\u0631\u062C\u0649 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0642\u0628\u0644 \u0627\u0644\u062A\u0635\u0641\u062D",
          duaMeaning: "\u0631\u0628\u0646\u0627 \u0622\u062A\u0646\u0627 \u0645\u0646 \u0644\u062F\u0646\u0643 \u0631\u062D\u0645\u0629 \u0648\u0647\u064A\u0626 \u0644\u0646\u0627 \u0645\u0646 \u0623\u0645\u0631\u0646\u0627 \u0631\u0634\u062F\u0627\u064B.",
          duaReference: "\u0633\u0648\u0631\u0629 \u0627\u0644\u0643\u0647\u0641\u060C \u0622\u064A\u0629 \u0661\u0660",
          instructionsTitle: "\u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A",
          instructions: [
            "\u0627\u0628\u062F\u0623 \u0628\u0627\u062D\u062A\u0631\u0627\u0645 \u0648\u0625\u062E\u0644\u0627\u0635 \u0645\u0639 \u0627\u0644\u062A\u0648\u0643\u0644 \u0639\u0644\u0649 \u0627\u0644\u0644\u0647.",
            "\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0639\u0644\u0648\u064A\u0629 \u0644\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0627\u0644\u0633\u0631\u064A\u0639 \u0628\u064A\u0646 \u0627\u0644\u0623\u0642\u0633\u0627\u0645.",
            "\u064A\u0631\u062C\u0649 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u0631\u0627\u062C\u0639\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641."
          ]
        },
        bismillahIntro: {
          ayahReference: "\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u0648\u0631\u060C \u0622\u064A\u0629 \u0663\u0662",
          ayahMeaning: "\u0623\u064A: \u0632\u0648\u0651\u062C\u0648\u0627 \u063A\u064A\u0631 \u0627\u0644\u0645\u062A\u0632\u0648\u062C\u064A\u0646 \u0645\u0646\u0643\u0645 \u0648\u0627\u0644\u0635\u0627\u0644\u062D\u064A\u0646 \u0645\u0646 \u0639\u0628\u0627\u062F\u0643\u0645 \u0648\u0625\u0645\u0627\u0626\u0643\u0645\u060C \u0641\u0625\u0646 \u0643\u0627\u0646\u0648\u0627 \u0641\u0642\u0631\u0627\u0621 \u0623\u063A\u0646\u0627\u0647\u0645 \u0627\u0644\u0644\u0647 \u0645\u0646 \u0641\u0636\u0644\u0647\u060C \u0648\u0627\u0644\u0644\u0647 \u0648\u0627\u0633\u0639 \u0627\u0644\u0641\u0636\u0644 \u0639\u0644\u064A\u0645 \u0628\u0623\u062D\u0648\u0627\u0644 \u0639\u0628\u0627\u062F\u0647.",
          viewButton: "\u0639\u0631\u0636 \u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629"
        },
        voice: {
          tapToStart: "\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0644\u0628\u062F\u0621 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0635\u0648\u062A\u064A \u0628\u0642\u0648\u0644 \u0628\u0633\u0645 \u0627\u0644\u0644\u0647.",
          browserNoSupport: "\u0647\u0630\u0627 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0644\u0627 \u064A\u062F\u0639\u0645 \u0627\u0644\u062A\u0639\u0631\u0641 \u0627\u0644\u0635\u0648\u062A\u064A \u0627\u0644\u0645\u0628\u0627\u0634\u0631. \u0627\u0633\u062A\u062E\u062F\u0645 \u0632\u0631 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0623\u062F\u0646\u0627\u0647 \u0644\u0641\u062A\u062D \u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629.",
          starting: "\u064A\u062A\u0645 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0627\u0644\u0622\u0646. \u0625\u0630\u0627 \u0638\u0647\u0631\u062A \u0646\u0627\u0641\u0630\u0629 \u0645\u0646 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0641\u0627\u0636\u063A\u0637 \u0633\u0645\u0627\u062D.",
          listening: '\u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u064A\u0639\u0645\u0644 \u0627\u0644\u0622\u0646. \u0642\u0644 "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647" \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u0648\u0627\u0646\u062A\u0638\u0631 \u0627\u0644\u062A\u062D\u0642\u0642.',
          detected: (transcript) => `\u062A\u0645 \u0627\u0644\u062A\u0642\u0627\u0637: "${transcript}". \u064A\u062A\u0645 \u0641\u062A\u062D \u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629 \u0627\u0644\u0622\u0646...`,
          heard: (transcript) => `\u062A\u0645 \u0633\u0645\u0627\u0639: "${transcript}". \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0648\u0642\u0644 "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647" \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.`,
          errors: {
            "not-allowed": "\u062A\u0645 \u062D\u0638\u0631 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646. \u064A\u0631\u062C\u0649 \u0627\u0644\u0633\u0645\u0627\u062D \u0628\u0627\u0644\u0625\u0630\u0646 \u062B\u0645 \u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.",
            "service-not-allowed": "\u062E\u062F\u0645\u0629 \u0627\u0644\u062A\u0639\u0631\u0641 \u0627\u0644\u0635\u0648\u062A\u064A \u0645\u062D\u0638\u0648\u0631\u0629 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u062A\u0635\u0641\u062D. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062F\u0639\u0645 \u0648\u0627\u0644\u0625\u0630\u0646 \u062B\u0645 \u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.",
            aborted: "\u062A\u0648\u0642\u0641 \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0635\u0648\u062A\u064A \u0642\u0628\u0644 \u0623\u0646 \u064A\u0628\u062F\u0623. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.",
            "audio-capture": "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646. \u0642\u0645 \u0628\u062A\u0648\u0635\u064A\u0644\u0647 \u062B\u0645 \u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.",
            "no-speech": '\u0644\u0645 \u064A\u062A\u0645 \u0627\u0643\u062A\u0634\u0627\u0641 \u0623\u064A \u0643\u0644\u0627\u0645. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0648\u0642\u0644 "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647".',
            "language-not-supported": "\u0647\u0630\u0627 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0644\u0627 \u064A\u062F\u0639\u0645 \u0644\u063A\u0629 \u0627\u0644\u062A\u0639\u0631\u0641 \u0627\u0644\u0635\u0648\u062A\u064A \u0627\u0644\u0645\u062D\u062F\u062F\u0629.",
            network: "\u062A\u0639\u0630\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u062E\u062F\u0645\u0629 \u0627\u0644\u062A\u0639\u0631\u0641 \u0627\u0644\u0635\u0648\u062A\u064A. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u062B\u0645 \u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649."
          },
          defaultError: "\u0644\u0645 \u064A\u0628\u062F\u0623 \u0627\u0644\u062A\u0639\u0631\u0641 \u0627\u0644\u0635\u0648\u062A\u064A \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D. \u0625\u0630\u0627 \u0638\u0647\u0631\u062A \u0646\u0627\u0641\u0630\u0629 \u0645\u0646 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0641\u0627\u0636\u063A\u0637 \u0633\u0645\u0627\u062D \u062B\u0645 \u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.",
          timeout: '\u0627\u0646\u062A\u0647\u062A \u0645\u0647\u0644\u0629 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0639. \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0648\u0642\u0644 "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647" \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.',
          notVerified: '\u062A\u0639\u0630\u0631 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 "\u0628\u0633\u0645 \u0627\u0644\u0644\u0647". \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0648\u0643\u0631\u0631\u0647\u0627 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.',
          couldNotStart: "\u062A\u0639\u0630\u0631 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0627\u0644\u0622\u0646. \u0625\u0630\u0627 \u0637\u0644\u0628 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0627\u0644\u0625\u0630\u0646 \u0641\u0627\u0633\u0645\u062D \u0628\u0647 \u062B\u0645 \u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.",
          supportNoSupport: "\u0645\u064A\u0632\u0629 \u0627\u0644\u062A\u0639\u0631\u0641 \u0627\u0644\u0635\u0648\u062A\u064A \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631\u0629 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u062A\u0635\u0641\u062D\u060C \u0644\u0630\u0644\u0643 \u0633\u062A\u062C\u062F \u0632\u0631 \u0645\u062A\u0627\u0628\u0639\u0629 \u0628\u062F\u0644\u0627\u064B \u0645\u0646\u0647\u0627 \u0623\u062F\u0646\u0627\u0647.",
          supportPreparing: "\u064A\u062A\u0645 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0627\u0644\u0622\u0646. \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631 \u0642\u0644\u064A\u0644\u0627\u064B.",
          supportErrorGeneral: "\u0625\u0630\u0627 \u0644\u0645 \u062A\u0638\u0647\u0631 \u0646\u0627\u0641\u0630\u0629\u060C \u0641\u062A\u062D\u0642\u0642 \u0645\u0646 \u0625\u0630\u0646 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0645\u0646 \u062F\u0639\u0645 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0644\u0644\u062A\u0639\u0631\u0641 \u0627\u0644\u0635\u0648\u062A\u064A.",
          supportListening: "\u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u064A\u0639\u0645\u0644 \u0627\u0644\u0622\u0646. \u062A\u062D\u062F\u062B \u0645\u0631\u0629 \u0648\u0627\u062D\u062F\u0629 \u062B\u0645 \u0627\u0646\u062A\u0638\u0631 \u0644\u062D\u0638\u0629 \u0644\u0644\u062A\u062D\u0642\u0642.",
          supportIdle: "\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0645\u064A\u0643\u0631\u0648\u0641\u0648\u0646. \u0625\u0630\u0627 \u0638\u0647\u0631\u062A \u0646\u0627\u0641\u0630\u0629 \u0645\u0646 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0641\u0627\u0636\u063A\u0637 \u0633\u0645\u0627\u062D.",
          micAriaRetry: "\u0625\u0639\u0627\u062F\u0629 \u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u062A\u0639\u0631\u0641 \u0627\u0644\u0635\u0648\u062A\u064A",
          micAriaStop: "\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u062A\u0639\u0631\u0641 \u0627\u0644\u0635\u0648\u062A\u064A",
          micAriaStart: "\u0627\u0628\u062F\u0623 \u0627\u0644\u062A\u0639\u0631\u0641 \u0627\u0644\u0635\u0648\u062A\u064A \u0648\u0642\u0644 \u0628\u0633\u0645 \u0627\u0644\u0644\u0647"
        },
        menu: {
          profile: "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A",
          gallery: "\u0627\u0644\u0645\u0639\u0631\u0636",
          personal: "\u0627\u0644\u0634\u062E\u0635\u064A\u0629",
          family: "\u0627\u0644\u0623\u0633\u0631\u0629",
          work: "\u0627\u0644\u0639\u0645\u0644",
          lifestyle: "\u0646\u0645\u0637 \u0627\u0644\u062D\u064A\u0627\u0629",
          language: "\u0627\u0644\u0644\u063A\u0629",
          education: "\u0627\u0644\u062A\u0639\u0644\u064A\u0645",
          training: "\u0627\u0644\u062A\u062F\u0631\u064A\u0628",
          activities: "\u0627\u0644\u0623\u0646\u0634\u0637\u0629",
          hobbies: "\u0627\u0644\u0647\u0648\u0627\u064A\u0627\u062A",
          expectation: "\u0627\u0644\u062A\u0648\u0642\u0639\u0627\u062A",
          contact: "\u0627\u0644\u062A\u0648\u0627\u0635\u0644",
          dua: "\u0627\u0644\u062F\u0639\u0627\u0621"
        },
        profile: {
          name: "\u0645\u062D\u0645\u062F \u0645\u062D\u0628\u0648\u0628 \u0627\u0644\u0631\u062D\u0645\u0646",
          subtitle: "\u0645\u062D\u062A\u0631\u0641 \u062A\u0642\u0646\u064A\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062A",
          tagline: "\u0634\u0627\u0628 \u0645\u0633\u0644\u0645 \u064A\u0628\u062D\u062B \u0639\u0646 \u0631\u0641\u064A\u0642\u0629 \u0645\u0633\u0644\u0645\u0629 \u062A\u0643\u0648\u0646 \u0642\u0631\u0629 \u0639\u064A\u0646\u0647 \u0641\u064A \u0627\u0644\u062F\u0646\u064A\u0627 \u0648\u0627\u0644\u0622\u062E\u0631\u0629!",
          stats: {
            age: "28 \u0639\u0627\u0645\u0627\u064B",
            education: "\u062A\u0639\u0644\u064A\u0645 \u0639\u0627\u0644\u064D",
            work: "\u0645\u0633\u062A\u0642\u0631 \u0645\u0647\u0646\u064A\u0627\u064B",
            faith: "\u0645\u0644\u062A\u0632\u0645 \u062F\u064A\u0646\u064A\u0627\u064B"
          }
        },
        gallery: {
          title: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631",
          photos: [
            { src: withCvCacheVersion("assets/images/mahbub-portrait-1.jpg"), alt: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0644\u0640 \u0645\u062D\u0645\u062F \u0645\u062D\u0628\u0648\u0628 \u0627\u0644\u0631\u062D\u0645\u0646", label: "\u0627\u0644\u0635\u0648\u0631\u0629 01", featured: true },
            { src: withCvCacheVersion("assets/images/mahbub-portrait-2.jpg"), alt: "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0627\u0644\u062B\u0627\u0646\u064A\u0629 \u0644\u0640 \u0645\u062D\u0645\u062F \u0645\u062D\u0628\u0648\u0628 \u0627\u0644\u0631\u062D\u0645\u0646", label: "\u0627\u0644\u0635\u0648\u0631\u0629 02", featured: false }
          ]
        },
        sectionHeaders: {
          personal: "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629",
          family: "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0623\u0633\u0631\u064A\u0629",
          work: "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0647\u0646\u064A\u0629"
        },
        personalDetails: [
          { label: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644", value: "\u0645\u062D\u0645\u062F \u0645\u062D\u0628\u0648\u0628 \u0627\u0644\u0631\u062D\u0645\u0646", iconClass: "fas fa-user" },
          { label: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0645\u062E\u062A\u0635\u0631", value: "\u0646\u0627\u0635\u0631 \u0627\u0644\u062F\u064A\u0646", iconClass: "fas fa-signature" },
          { label: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F", value: " \u0662\u0660 \u062F\u064A\u0633\u0645\u0628\u0631 \u0661\u0669\u0669\u0667", iconClass: "fas fa-calendar-days" },
          { label: "\u0627\u0644\u0639\u0645\u0631", value: "28 \u0633\u0646\u0629", iconClass: "fas fa-hourglass-half" },
          { label: "\u0627\u0644\u062F\u064A\u0627\u0646\u0629", value: "\u0627\u0644\u0625\u0633\u0644\u0627\u0645 (\u0645\u0644\u062A\u0632\u0645)", iconClass: "fas fa-mosque" },
          { label: "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629", value: "\u0623\u0639\u0632\u0628", iconClass: "fas fa-ring" },
          { label: "\u0644\u0648\u0646 \u0627\u0644\u0628\u0634\u0631\u0629", value: "\u0642\u0645\u062D\u064A \u0645\u0627\u0626\u0644 \u0644\u0644\u062F\u0627\u0643\u0646", iconClass: "fas fa-palette" },
          { label: "\u0627\u0644\u0637\u0648\u0644 \u0648\u0627\u0644\u0648\u0632\u0646", value: `5' 3" \u0648\u0667\u0660 \u0643\u062C\u0645`, iconClass: "fas fa-ruler-combined" },
          { label: "\u0641\u0635\u064A\u0644\u0629 \u0627\u0644\u062F\u0645", value: "A+", iconClass: "fas fa-droplet" },
          { label: "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0635\u062D\u064A\u0629", value: "\u0628\u0635\u062D\u0629 \u062C\u064A\u062F\u0629\u060C \u063A\u064A\u0631 \u0645\u062F\u062E\u0646\u060C \u0628\u0644\u0627 \u0625\u062F\u0645\u0627\u0646", iconClass: "fas fa-heart-pulse" }
        ],
        familyDetails: [
          ["\u0627\u0644\u0623\u0628", "\u0639\u0628\u062F \u0627\u0644\u0642\u0627\u062F\u0631 \u0647\u0648\u0644\u0627\u062F\u0631 (\u062F\u0643\u062A\u0648\u0631 \u0639\u0628\u062F \u0627\u0644\u0642\u0627\u062F\u0631)- \u0643\u0627\u0646 \u0637\u0628\u064A\u0628 \u0642\u0631\u0648\u064A \u0648\u0645\u0639\u0644\u0645 \u0627\u0628\u062A\u062F\u0627\u0626\u064A "],
          ["\u0627\u0644\u0623\u0645", "\u0641\u0631\u064A\u062F\u0629 \u0628\u064A\u063A\u0645 - \u0631\u0628\u0629 \u0645\u0646\u0632\u0644"],
          ["\u0627\u0644\u0625\u062E\u0648\u0629 \u0648\u0627\u0644\u0623\u062E\u0648\u0627\u062A", "4 \u0625\u062E\u0648\u0629 \u06483 \u0623\u062E\u0648\u0627\u062A"],
          ["\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062F\u0627\u0626\u0645", "\u0623\u062A\u0627\u0631 \u0634\u0648\u062A\u0627\u0644\u0627\u0631, \u0632\u0645\u0627\u062F\u0631 \u0628\u0627\u0631\u0627, \u0645\u0648\u0631\u0644\u0641\u0627\u0646\u0632, \u0628\u0627\u063A\u0631\u0647\u0627\u062A"],
          ["\u0627\u0644\u0645\u0646\u0637\u0642\u0629", "\u0628\u0627\u063A\u0631\u0647\u0627\u062A"]
        ],
        familySummary: {
          label: "\u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0623\u0633\u0631\u0629",
          title: "\u0623\u0633\u0631\u0629 \u0645\u062D\u062A\u0631\u0645\u0629 \u0645\u0646 \u0627\u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u0645\u062A\u0648\u0633\u0637\u0629 \u062A\u0642\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u062A\u0639\u0644\u064A\u0645 \u0648\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u062F\u064A\u0646\u064A\u0629.",
          tags: ["\u0645\u062D\u062A\u0631\u0645\u0629", "\u0645\u062A\u0648\u0633\u0637\u0629 \u0627\u0644\u062D\u0627\u0644", "\u0645\u062A\u0639\u0644\u0645\u0629", "\u0645\u062A\u062F\u064A\u0646\u0629"]
        },
        familySiblingsTitle: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0625\u062E\u0648\u0629 \u0648\u0627\u0644\u0623\u062E\u0648\u0627\u062A",
        familySiblings: [
          ["\u0627\u0644\u0623\u062E\u062A \u0627\u0644\u0623\u0648\u0644\u0649", "\u0634\u0627\u0647\u0627\u0646\u0627\u0632 \u0634\u0627\u0646\u062A\u064A\u060C \u0631\u0628\u0629 \u0645\u0646\u0632\u0644 \u0648\u0644\u062F\u064A\u0647\u0627 4 \u0623\u0637\u0641\u0627\u0644. \u0645\u0648\u0631\u0644\u0641\u0627\u0646\u0632."],
          ["\u0627\u0644\u0623\u062E \u0627\u0644\u062B\u0627\u0646\u064A", "\u0639\u0644\u0627\u0621 \u0627\u0644\u062F\u064A\u0646\u060C \u0643\u0627\u0646 \u0639\u0627\u0645\u0644\u0627\u064B \u0641\u064A \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0648\u064A\u0639\u0645\u0644 \u0627\u0644\u0622\u0646 \u0641\u064A \u0627\u0644\u062A\u062C\u0627\u0631\u0629 (\u062F\u0627\u0643\u0627). \u0644\u062F\u064A\u0647 \u0637\u0641\u0644\u0627\u0646. \u0645\u0648\u0631\u0644\u0641\u0627\u0646\u0632."],
          ["\u0627\u0644\u0623\u062E \u0627\u0644\u062B\u0627\u0644\u062B", "\u063A\u064A\u0627\u062B\u064F \u0627\u0644\u062F\u0651\u0650\u064A\u0646\u060C \u0633\u0627\u0626\u0642 \u0641\u064A \u0628\u0627\u0646\u0627\u0646\u062C\u0627 \u0628\u064A \u0633\u064A \u0625\u0644\u060C \u0634\u0627\u062A\u0651\u0648\u063A\u0631\u0627\u0645\u060C \u0627\u0644\u0628\u062D\u0631\u064A\u0629 \u0627\u0644\u0628\u0646\u063A\u0644\u0627\u062F\u064A\u0634\u064A\u0629. \u0644\u062F\u064A\u0647 \u0637\u0641\u0644\u0627\u0646. \u0645\u0648\u0631\u0644\u0641\u0627\u0646\u0632."],
          ["\u0627\u0644\u0623\u062E\u062A \u0627\u0644\u0631\u0627\u0628\u0639\u0629", "\u0632\u064A\u0631\u064A\u0646 \u0633\u0644\u0645\u0649 \u0628\u064A\u0628\u064A\u060C \u0631\u0628\u0629 \u0645\u0646\u0632\u0644 \u0648\u0644\u062F\u064A\u0647\u0627 \u0663 \u0623\u0637\u0641\u0627\u0644. \u0645\u0648\u0631\u0644\u0641\u0627\u0646\u0632."],
          ["\u0627\u0644\u0623\u062E \u0627\u0644\u062E\u0627\u0645\u0633", "\u0645\u062D\u064A\u064A \u0627\u0644\u062F\u064A\u0646\u060C \u0633\u0627\u0626\u0642 \u0644\u062F\u0649 \u0632\u0648\u062C\u064A\u0646 \u0645\u0646 \u0627\u0644\u0623\u0637\u0628\u0627\u0621 \u0641\u064A \u0634\u0627\u062A\u0651\u0648\u063A\u0631\u0627\u0645. \u0644\u062F\u064A\u0647 4 \u0623\u0637\u0641\u0627\u0644. \u0634\u0627\u062A\u0651\u0648\u063A\u0631\u0627\u0645."],
          ["\u0627\u0644\u0623\u062E\u062A \u0627\u0644\u0633\u0627\u062F\u0633\u0629", "\u0646\u064E\u0638\u0652\u0645\u064E\u0629 \u0633\u064F\u0644\u0652\u0637\u064E\u0627\u0646\u064E\u0629\u060C \u0631\u0628\u0629 \u0645\u0646\u0632\u0644 \u0648\u0644\u062F\u064A\u0647\u0627 \u0637\u0641\u0644\u0627\u0646. \u062E\u0648\u0644\u0646\u0627."],
          ["\u0627\u0644\u0633\u0627\u0628\u0639", "\u0627\u0644\u0627\u0628\u0646 \u0627\u0644\u0623\u0635\u063A\u0631\u060C \u0623\u0646\u0627."]
        ],
        siblingStatusData: {
          "\u0627\u0644\u0623\u062E\u062A \u0627\u0644\u0623\u0648\u0644\u0649": { text: "\u0645\u062A\u0632\u0648\u062C\u0629", className: "married" },
          "\u0627\u0644\u0623\u062E \u0627\u0644\u062B\u0627\u0646\u064A": { text: "\u0645\u062A\u0632\u0648\u062C", className: "married" },
          "\u0627\u0644\u0623\u062E \u0627\u0644\u062B\u0627\u0644\u062B": { text: "\u0645\u062A\u0632\u0648\u062C", className: "married" },
          "\u0627\u0644\u0623\u062E\u062A \u0627\u0644\u0631\u0627\u0628\u0639\u0629": { text: "\u0645\u062A\u0632\u0648\u062C\u0629", className: "married" },
          "\u0627\u0644\u0623\u062E \u0627\u0644\u062E\u0627\u0645\u0633": { text: "\u0645\u062A\u0632\u0648\u062C", className: "married" },
          "\u0627\u0644\u0623\u062E\u062A \u0627\u0644\u0633\u0627\u062F\u0633\u0629": { text: "\u0645\u062A\u0632\u0648\u062C\u0629", className: "married" },
          "\u0627\u0644\u0633\u0627\u0628\u0639": { text: "\u063A\u064A\u0631 \u0645\u062A\u0632\u0648\u062C", className: "unmarried" }
        },
        workSection: {
          items: [
            { title: "\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A \u0648\u0627\u0644\u062E\u062F\u0645\u0627\u062A", organization: "\u0625\u064A\u0631\u062B\u0641\u064A\u0633 \u0622\u064A \u062A\u064A\u060C \u062F\u0643\u0627", duration: "\u0662\u0667 \u0646\u0648\u0641\u0645\u0628\u0631 \u0662\u0660\u0662\u0661 - \u062D\u062A\u0649 \u0627\u0644\u0622\u0646", iconClass: "fas fa-briefcase" },
            { title: "\u0645\u0633\u0627\u0639\u062F \u062F\u0639\u0645 \u062A\u0642\u0646\u064A (\u062F\u0648\u0627\u0645 \u062C\u0632\u0626\u064A)", organization: "\u0642\u0633\u0645 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0648\u0622\u062F\u0627\u0628\u0647\u0627\u060C \u0627\u0644\u062C\u0627\u0645\u0639\u0629 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629\u060C \u0643\u0648\u0634\u062A\u064A\u0627", duration: "\u0662\u0663 \u0645\u0627\u0631\u0633 \u0662\u0660\u0661\u0667 - \u0662\u0660 \u0623\u0643\u062A\u0648\u0628\u0631 \u0662\u0660\u0662\u0661", iconClass: "fas fa-headset" },
            { title: "\u062A\u0646\u0641\u064A\u0630\u064A \u062A\u0642\u0646\u064A\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062A (\u062F\u0648\u0627\u0645 \u062C\u0632\u0626\u064A)", organization: "\u062E\u064F\u0646\u062F\u064F\u0643\u0627\u0631 \u062A\u0650\u0644\u0650\u0643\u0648\u0645, \u063A\u0627\u0632\u064A\u0628\u0648\u0631", duration: "\u0667 \u064A\u0648\u0644\u064A\u0648 \u0662\u0660\u0661\u0664 - \u0661\u0662 \u062F\u064A\u0633\u0645\u0628\u0631 \u0662\u0660\u0661\u0665", iconClass: "fas fa-desktop" }
          ]
        },
        lifestyle: {
          title: "\u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0646\u0645\u0637 \u0627\u0644\u062D\u064A\u0627\u0629",
          items: [
            { label: "\u0627\u0644\u0634\u062E\u0635\u064A\u0629", value: "\u0645\u062A\u0648\u0627\u0636\u0639\u060C \u0645\u062A\u062F\u064A\u0646\u060C \u0648\u062C\u062F\u064A\u0631 \u0628\u0627\u0644\u062B\u0642\u0629", iconClass: "fas fa-user-shield" },
            { label: "\u0627\u0644\u0647\u062F\u0641 \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u064A", value: "\u0628\u0646\u0627\u0621 \u0623\u0633\u0631\u0629 \u0642\u0627\u0626\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u062F\u064A\u0646 \u0648\u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0645 \u0627\u0644\u0645\u062A\u0628\u0627\u062F\u0644", iconClass: "fas fa-bullseye" },
            { label: "\u0627\u0644\u0627\u0647\u062A\u0645\u0627\u0645\u0627\u062A", value: "\u0627\u0644\u062F\u0631\u0648\u0633 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629\u060C \u0627\u0644\u0642\u0631\u0627\u0621\u0629\u060C \u0627\u0644\u0633\u0641\u0631\u060C \u0648\u062A\u0639\u0644\u0645 \u0627\u0644\u062A\u0642\u0646\u064A\u0629", iconClass: "fas fa-book-open" },
            { label: "\u0627\u0644\u0639\u0627\u062F\u0627\u062A \u0627\u0644\u063A\u0630\u0627\u0626\u064A\u0629", value: "\u064A\u0641\u0636\u0644 \u0627\u0644\u0637\u0639\u0627\u0645 \u0627\u0644\u062D\u0644\u0627\u0644 \u0627\u0644\u0645\u0646\u0632\u0644\u064A", iconClass: "fas fa-utensils" },
            { label: "\u0625\u0636\u0627\u0641\u064A", value: "\u0645\u0646\u0636\u0628\u0637 \u0641\u064A \u0627\u0644\u0648\u0642\u062A\u060C \u0647\u0627\u062F\u0626 \u0627\u0644\u0637\u0628\u0639\u060C \u0648\u062D\u0633\u0646 \u0627\u0644\u0633\u0644\u0648\u0643 \u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0627\u064B", iconClass: "fas fa-check-double" }
          ]
        },
        languages: {
          title: "\u0625\u062C\u0627\u062F\u0629 \u0627\u0644\u0644\u063A\u0627\u062A",
          proficiencyAria: (title) => `\u0645\u0633\u062A\u0648\u0649 ${title}`,
          items: [
            { title: "\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629", level: "\u062C\u064A\u062F", percent: 66.66 },
            { title: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", level: "\u062C\u064A\u062F", percent: 66.66 },
            { title: "\u0627\u0644\u0628\u0646\u063A\u0627\u0644\u064A\u0629", level: "\u0645\u0645\u062A\u0627\u0632", percent: 100 }
          ]
        },
        education: {
          title: "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u064A\u0629",
          items: [
            { title: "\u0645\u0627\u062C\u0633\u062A\u064A\u0631 \u0641\u064A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0648\u0622\u062F\u0627\u0628\u0647\u0627", institution: "\u0627\u0644\u062C\u0627\u0645\u0639\u0629 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629\u060C \u0643\u0648\u0634\u062A\u064A\u0627", institutionHref: "https://iu.ac.bd", scoreLabel: "\u0627\u0644\u0645\u0639\u062F\u0644", score: "3.58/4", session: "\u0662\u0660\u0662\u0662" },
            { title: "\u0628\u0643\u0627\u0644\u0648\u0631\u064A\u0648\u0633 \u0634\u0631\u0641 \u0641\u064A \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0648\u0622\u062F\u0627\u0628\u0647\u0627", institution: "\u0627\u0644\u062C\u0627\u0645\u0639\u0629 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629\u060C \u0643\u0648\u0634\u062A\u064A\u0627", institutionHref: "https://iu.ac.bd", scoreLabel: "\u0627\u0644\u0645\u0639\u062F\u0644", score: "3.58/4", session: "\u0662\u0660\u0662\u0660" },
            { title: "Alim (\u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629 \u0627\u0644\u0639\u0644\u064A\u0627)", institution: "\u062A\u0639\u0645\u064A\u0631 \u0627\u0644\u0645\u0644\u0629 \u0643\u0627\u0645\u0644 \u0645\u062F\u0631\u0633\u0629\u060C \u062A\u0648\u0646\u063A\u064A\u060C \u063A\u0627\u0632\u064A\u0628\u0648\u0631", institutionHref: "https://www.tmt.edu.bd", scoreLabel: "\u0627\u0644\u062F\u0631\u062C\u0629", score: "\u0665.\u0660\u0660/\u0665", session: "\u0662\u0660\u0661\u0664" },
            { title: "Dakhil (\u0627\u0644\u062B\u0627\u0646\u0648\u064A\u0629)", institution: "\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0645\u0644\u0629 \u0631\u062D\u0645\u062A\u0650\u064A\u0629 \u0643\u0627\u0645\u0644 \u0645\u062F\u0631\u0633\u0629\u060C \u0633\u0648\u0646\u0627\u062F\u0627\u0646\u063A\u0627\u060C \u062E\u0648\u0644\u0646\u0627 ", scoreLabel: "\u0627\u0644\u062F\u0631\u062C\u0629", score: "\u0665.\u0660\u0660/\u0665", session: "\u0662\u0660\u0661\u0662" }
          ]
        },
        training: {
          title: "\u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0648\u0627\u0644\u062A\u0637\u0648\u064A\u0631",
          items: [
            { text: "\u0645\u0639\u0633\u0643\u0631 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062A - 2023 (\u0661\u0660 \u0623\u064A\u0627\u0645\u060C \u0628\u064A \u0648\u0627\u064A \u0625\u0644 \u0633\u064A\u060C \u0628\u0646\u063A\u0644\u0627\u062F\u064A\u0634)", href: "https://bylc.org", linkLabel: "\u0632\u064A\u0627\u0631\u0629" },
            { text: "\u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0629 \u0644\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0631\u0642\u0645\u064A (\u0628\u064A \u062F\u064A \u0633\u064A \u0625\u0645) - 3 \u0623\u0634\u0647\u0631\u060C \u0625\u0633 \u0625\u064A \u0622\u064A \u0628\u064A\u060C \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629", href: "https://lms.seip-fd.gov.bd", linkLabel: "\u0632\u064A\u0627\u0631\u0629" },
            { text: "\u062A\u0635\u0645\u064A\u0645 \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0648\u064A\u0628 -\u0662\u0660\u0660 \u0633\u0627\u0639\u0629\u060C \u0625\u0644 \u0625\u064A \u062F\u064A \u0628\u064A\u060C \u0642\u0633\u0645 \u0622\u064A \u0633\u064A \u062A\u064A, \u0641\u064A \u0628\u0646\u063A\u0644\u0627\u062F\u064A\u0634", href: "https://ictd.gov.bd", linkLabel: "\u0632\u064A\u0627\u0631\u0629" },
            { text: "\u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u0648\u062A\u0637\u0628\u064A\u0642\u0627\u062A\u0647 - \u0633\u0646\u0629 \u0648\u0627\u062D\u062F\u0629\u060C \u0627\u0644\u062C\u0627\u0645\u0639\u0629 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629\u060C \u0643\u0648\u0634\u062A\u064A\u0627", href: "https://iu.ac.bd", linkLabel: "\u0632\u064A\u0627\u0631\u0629" },
            { text: "\u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u0627\u0644\u0623\u0639\u0637\u0627\u0644 \u0641\u064A \u0623\u0645\u0646 \u0627\u0644\u062D\u0627\u0633\u0648\u0628 (\u0642\u0633\u0645 \u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0648\u0627\u0644\u0627\u062A\u0635\u0627\u0644\u0627\u062A\u060C \u0625\u064A \u062A\u0648 \u0622\u064A)", href: "https://a2i.gov.bd", linkLabel: "\u0632\u064A\u0627\u0631\u0629" },
            { text: "\u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0645\u0627\u064A\u0643\u0631\u0648\u0633\u0648\u0641\u062A \u0648\u0648\u0631\u062F (\u0625\u064A \u062A\u0648 \u0622\u064A\u060C \u0645\u064F\u0643\u062A\u064E\u0628\u0627\u062B)", href: "https://a2i.gov.bd", linkLabel: "\u0632\u064A\u0627\u0631\u0629" },
            { text: "\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0641\u064A\u062F\u064A\u0648 (\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u0625\u0639\u0644\u0627\u0645 \u0644\u0644\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0628\u0634\u0631\u064A\u0629\u060C \u0625\u064A \u062A\u0648 \u0622\u064A)", href: "https://a2i.gov.bd", linkLabel: "\u0632\u064A\u0627\u0631\u0629" },
            { text: "\u0623\u0633\u0627\u0633\u064A\u0627\u062A \u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0631\u0642\u0645\u064A (\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0631\u0642\u0645\u064A\u060C \u0625\u064A \u062A\u0648 \u0622\u064A)", href: "https://a2i.gov.bd", linkLabel: "\u0632\u064A\u0627\u0631\u0629" },
            { text: "\u0648\u0631\u0634\u0629 \u0627\u0628\u062A\u0643\u0627\u0631 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0644\u062A\u0637\u0648\u064A\u0631 \u0623\u0644\u0639\u0627\u0628 \u0648\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u062C\u0648\u0627\u0644 (\u0642\u0633\u0645 \u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0648\u0627\u0644\u0627\u062A\u0635\u0627\u0644\u0627\u062A\u060C \u0628\u0646\u063A\u0644\u0627\u062F\u064A\u0634 \u0627\u0644\u0631\u0642\u0645\u064A\u0629)", href: "https://a2i.gov.bd", linkLabel: "\u0632\u064A\u0627\u0631\u0629" }
          ]
        },
        activities: {
          title: "\u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u0644\u0627\u0645\u0646\u0647\u062C\u064A\u0629",
          items: [
            {
              title: "\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062A\u0637\u0648\u0639\u064A",
              period: "\u0667 \u064A\u0648\u0644\u064A\u0648 \u0662\u0660\u0661\u0664 - \u0661\u0662 \u062F\u064A\u0633\u0645\u0628\u0631 \u0662\u0660\u0661\u0665",
              items: [
                { text: "\u0645\u0645\u062B\u0644 \u0627\u0644\u0635\u0641 \u0627\u0644\u0645\u0646\u062A\u062E\u0628 \u0633\u0627\u0628\u0642\u064B\u0627 \u0644\u0645\u062F\u0629 \u0633\u0646\u062A\u064A\u0646\u060C \u0627\u0644\u062C\u0627\u0645\u0639\u0629 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629", iconClass: "fas fa-users", href: "https://iu.ac.bd", linkLabel: "\u0632\u064A\u0627\u0631\u0629" },
                { text: "\u0627\u0644\u0645\u062F\u064A\u0631 \u0627\u0644\u0633\u0627\u0628\u0642 \u0644\u0640 \u0628\u064A\u062A\u0643\u0631\u0645 \u0634\u0627\u0647\u064A\u062A\u064A\u0627 \u0634\u0627\u0646\u063A\u0633\u0643\u0631\u064A\u062A\u064A\u0643 \u062C\u0648\u062A\u064A\u060C \u0627\u0644\u062C\u0627\u0645\u0639\u0629 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629", iconClass: "fas fa-masks-theater", href: "https://web.facebook.com/betikrom87", linkLabel: "\u0632\u064A\u0627\u0631\u0629" },
                { text: "\u0639\u0636\u0648 \u0645\u0631\u0643\u0632\u064A \u0633\u0627\u0628\u0642 \u0641\u064A \u0634\u0627\u062A\u0631\u0627 \u0634\u064A\u0628\u064A\u0631 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629 \u0641\u064A \u0628\u0646\u063A\u0644\u0627\u062F\u064A\u0634", iconClass: "fas fa-shield-halved", href: "https://shibir.org.bd", linkLabel: "\u0632\u064A\u0627\u0631\u0629" }
              ]
            },
            { title: "\u0627\u0644\u0625\u0646\u0634\u0627\u062F", items: [{ text: "\u0623\u062F\u0651\u0649 \u0623\u063A\u0627\u0646\u064A \u0639\u0644\u0649 \u0633\u0627\u062A\u064A \u0641\u064A\u060C \u0625\u064A \u062A\u064A \u0641\u064A\u060C \u0648\u0642\u0646\u0627\u0629 \u0669", iconClass: "fas fa-music" }] },
            { title: "\u0627\u0644\u062A\u0645\u062B\u064A\u0644", period: "\u0662\u0660\u0661\u0668", items: [{ text: "\u0634\u0627\u0631\u0643 \u0641\u064A \u0639\u0645\u0644 \u062F\u0631\u0627\u0645\u064A \u0648\u062D\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u062B\u0627\u0646\u064A \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0648\u0637\u0646\u064A.", iconClass: "fas fa-film" }] },
            { title: "\u0627\u0644\u062C\u0648\u0627\u0626\u0632", period: "\u0662\u0660\u0661\u0662", items: [{ text: "\u0646\u0627\u0644 \u062C\u0627\u0626\u0632\u0629 \u0641\u064A \u0625\u0644\u0642\u0627\u0621 \u0627\u0644\u0634\u0639\u0631 \u0648\u062D\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u062B\u0627\u0646\u064A \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0648\u0637\u0646\u064A.", iconClass: "fas fa-award" }] }
          ]
        },
        hobbies: {
          title: "\u0627\u0644\u0647\u0648\u0627\u064A\u0627\u062A \u0648\u0627\u0644\u0627\u0647\u062A\u0645\u0627\u0645\u0627\u062A",
          items: [
            ["fas fa-masks-theater", "\u0627\u0644\u0648\u0639\u064A \u0627\u0644\u062B\u0642\u0627\u0641\u064A (\u0627\u0644\u0625\u0646\u0634\u0627\u062F\u060C \u0627\u0644\u062A\u0645\u062B\u064A\u0644\u060C \u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0643\u0644\u0645\u0627\u062A \u0648\u063A\u064A\u0631\u0647\u0627)."],
            ["fas fa-lightbulb", "\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0623\u0641\u0643\u0627\u0631 \u0648\u062A\u062D\u0633\u064A\u0646\u0647\u0627."],
            ["fas fa-laptop-medical", "\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0622\u062E\u0631\u064A\u0646 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u062E\u0628\u0631\u0629 \u0627\u0644\u062A\u0642\u0646\u064A\u0629."]
          ]
        },
        expectation: {
          title: "\u0627\u0644\u062A\u0648\u0642\u0639\u0627\u062A \u0645\u0646 \u0627\u0644\u0632\u0648\u062C\u0629",
          items: [
            { iconClass: "fas fa-mosque", title: "\u0627\u0644\u0627\u0644\u062A\u0632\u0627\u0645 \u0627\u0644\u062F\u064A\u0646\u064A", text: "\u0645\u0633\u0644\u0645\u0629 \u0645\u0644\u062A\u0632\u0645\u0629 \u0628\u0627\u0644\u062D\u062C\u0627\u0628 \u0648\u0627\u0644\u0646\u0642\u0627\u0628\u060C \u0648\u062A\u0631\u0627\u0639\u064A \u0623\u062D\u0643\u0627\u0645 \u0627\u0644\u0645\u062D\u0627\u0631\u0645." },
            { iconClass: "fas fa-user-shield", title: "\u0627\u0644\u062E\u0644\u0642", text: "\u0645\u062A\u0639\u0644\u0651\u0645\u0629 \u0648\u0645\u062A\u0648\u0627\u0636\u0639\u0629 \u0641\u064A \u0627\u0644\u0633\u0644\u0648\u0643." },
            { iconClass: "fas fa-house", title: "\u0627\u0644\u062F\u0648\u0631 \u0627\u0644\u0623\u0633\u0631\u064A", text: "\u0645\u062F\u0631\u0643\u0629 \u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0627\u062A \u0627\u0644\u0623\u0633\u0631\u0629." },
            { iconClass: "fas fa-heart", title: "\u0646\u0645\u0637 \u0627\u0644\u062D\u064A\u0627\u0629", text: "\u062A\u0631\u0643\u0632 \u0639\u0644\u0649 \u0627\u0644\u0623\u0633\u0631\u0629 \u0648\u0627\u0644\u062D\u064A\u0627\u0629 \u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064A\u0629." },
            { iconClass: "fas fa-palette", title: "\u0644\u0648\u0646 \u0627\u0644\u0628\u0634\u0631\u0629 \u0627\u0644\u0645\u0641\u0636\u0644", text: "\u0642\u0645\u062D\u064A \u0623\u0648 \u0641\u0627\u062A\u062D (\u0628\u0645\u0631\u0648\u0646\u0629)." },
            { iconClass: "fas fa-briefcase", title: "\u0627\u0644\u0645\u0647\u0646\u0629", text: "\u0627\u0644\u0645\u0647\u0646\u0629 \u0644\u064A\u0633\u062A \u0634\u0631\u0637\u0627\u064B \u0623\u0633\u0627\u0633\u064A\u0627\u064B\u061B \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629 \u0644\u062D\u064A\u0627\u0629 \u0623\u0633\u0631\u064A\u0629 \u0630\u0627\u062A \u0637\u0627\u0628\u0639 \u0625\u0633\u0644\u0627\u0645\u064A." }
          ]
        },
        contact: {
          title: "\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0648\u0627\u0644\u0645\u0648\u0642\u0639",
          mapButton: "\u0639\u0631\u0636 \u0639\u0644\u0649 \u062E\u0631\u0627\u0626\u0637 \u062C\u0648\u062C\u0644",
          permanentAddressValue: "\u0623\u0648\u062A\u0627\u0631 \u0633\u0648\u062A\u0627\u0644\u0648\u0631\u064A\u060C \u062C\u0648\u0645\u0639\u062F\u0627\u0631 \u0628\u0627\u0631\u0627\u060C \u0645\u0648\u0631\u064A\u0644\u063A\u0627\u0646\u062C\u060C \u0628\u0627\u063A\u0631\u0647\u0627\u062A",
          blocks: [
            { iconClass: "fas fa-user", label: "\u0627\u0644\u0627\u0633\u0645", value: "\u0645\u062D\u0645\u062F \u0645\u062D\u0628\u0648\u0628 \u0627\u0644\u0631\u062D\u0645\u0646" },
            { iconClass: "fas fa-envelope", label: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", value: "bbdmahbub@gmail.com", href: "mailto:bbdmahbub@gmail.com" },
            { iconClass: "fab fa-whatsapp", label: "\u0648\u0627\u062A\u0633\u0627\u0628", value: "+\u0668\u0668\u0660\u0661\u0669\u0661\u0667\u0662\u0666\u0667\u0666\u0660\u0667", href: "https://wa.me/8801917267607" },
            { iconClass: "fas fa-home", label: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062D\u0627\u0644\u064A", value: "\u0647\u0627\u062A\u064A\u0631 \u062C\u064A\u0644\u060C \u062F\u0643\u0627\u060C \u0628\u0646\u063A\u0644\u0627\u062F\u064A\u0634" },
            { iconClass: "fas fa-map-marker-alt", label: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062F\u0627\u0626\u0645", value: "\u0623\u0648\u062A\u0627\u0631 \u0633\u0648\u062A\u0627\u0644\u0648\u0631\u064A\u060C \u062C\u0648\u0645\u0639\u062F\u0627\u0631 \u0628\u0627\u0631\u0627\u060C \u0645\u0648\u0631\u064A\u0644\u063A\u0627\u0646\u062C\u060C \u0628\u0627\u063A\u0631\u0647\u0627\u062A", mapHref: permanentAddressMapHref }
          ]
        },
        dua: {
          title: "\u0643\u0644\u0645\u0627\u062A \u062E\u062A\u0627\u0645\u064A\u0629 \u0648\u062F\u0639\u0627\u0621",
          meanings: [
            "",
            "",
            "",
            ""
          ],
          references: [
            "-\u0633\u0648\u0631\u0629 \u0627\u0644\u0646\u0648\u0631\u060C \u0622\u064A\u0629 \u0663\u0662",
            "-\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0631\u0642\u0627\u0646\u060C \u0622\u064A\u0629 \u0667\u0664",
            "-\u0633\u0648\u0631\u0629 \u0627\u0644\u0635\u0627\u0641\u0627\u062A\u060C \u0622\u064A\u0629 \u0661\u0660\u0660",
            "-\u0633\u0648\u0631\u0629 \u0627\u0644\u0643\u0647\u0641\u060C \u0622\u064A\u0629 \u0661\u0660"
          ],
          closing: "\u0622\u0645\u064A\u0646 \u064A\u0627 \u0631\u0628 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0646."
        }
      },
      bn: {
        locale: "bn",
        dir: "ltr",
        meta: {
          title: "\u09B8\u09BF\u09AD\u09BF - \u09AE\u09CB. \u09AE\u09BE\u09B9\u09AC\u09C1\u09AC\u09C1\u09B0 \u09B0\u09B9\u09AE\u09BE\u09A8",
          description: "\u09AE\u09CB. \u09AE\u09BE\u09B9\u09AC\u09C1\u09AC\u09C1\u09B0 \u09B0\u09B9\u09AE\u09BE\u09A8\u09C7\u09B0 \u09AC\u09CD\u09AF\u0995\u09CD\u09A4\u09BF\u0997\u09A4, \u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u0997\u09A4, \u09AA\u09C7\u09B6\u09BE\u0997\u09A4, \u09AA\u09CD\u09B0\u09B6\u09BF\u0995\u09CD\u09B7\u09A3, \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u0993 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u09A4\u09A5\u09CD\u09AF\u09B8\u09B9 \u09B8\u09BF\u09AD\u09BF\u0964"
        },
        navigation: {
          // quickJump: 'দ্রুত নেভিগেশন',
          sectionsAria: "\u09AA\u09C7\u099C \u09B8\u09C7\u0995\u09B6\u09A8\u09B8\u09AE\u09C2\u09B9",
          languageSwitcherLabel: "\u09AD\u09BE\u09B7\u09BE \u09B8\u0982\u09B8\u09CD\u0995\u09B0\u09A3",
          languagePanelHint: "\u09AF\u09C7\u0995\u09CB\u09A8\u09CB \u09B8\u09AE\u09DF \u09AA\u09C7\u099C\u09C7\u09B0 \u09AD\u09BE\u09B7\u09BE \u09AC\u09A6\u09B2\u09BE\u09A8\u0964",
          languagePanelCollapse: "\u09AD\u09BE\u09B7\u09BE \u0995\u09A8\u09CD\u099F\u09CD\u09B0\u09CB\u09B2 \u09B2\u09C1\u0995\u09BE\u09A8",
          languagePanelExpand: "\u09AD\u09BE\u09B7\u09BE \u0995\u09A8\u09CD\u099F\u09CD\u09B0\u09CB\u09B2 \u09A6\u09C7\u0996\u09BE\u09A8"
        },
        common: {
          visit: "\u09AD\u09BF\u099C\u09BF\u099F",
          lateBadge: "\u09AE\u09B0\u09B9\u09C1\u09AE",
          latePrefix: "\u09AE\u09B0\u09B9\u09C1\u09AE "
        },
        intro: {
          kicker: "\u09A6\u09CB\u0986 \u0993 \u09A8\u09BF\u09B0\u09CD\u09A6\u09C7\u09B6\u09A8\u09BE",
          title: "\u09A6\u09DF\u09BE \u0995\u09B0\u09C7 \u09A6\u09C7\u0996\u09BE\u09B0 \u0986\u0997\u09C7 \u09AA\u09DC\u09C7 \u09A8\u09BF\u09A8",
          duaMeaning: "\u09B9\u09C7 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B0\u09AC, \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u0995\u09CD\u09B7 \u09A5\u09C7\u0995\u09C7 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0\u0995\u09C7 \u09B0\u09B9\u09AE\u09A4 \u09A6\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8\n\u098F\u09AC\u0982 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u0995\u09BE\u099C\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09B8\u09A0\u09BF\u0995 \u09AA\u09A5 \u09A8\u09BF\u09B0\u09CD\u09A7\u09BE\u09B0\u09A3 \u0995\u09B0\u09C7 \u09A6\u09BF\u09A8\u0964",
          duaReference: "\u09B8\u09C2\u09B0\u09BE \u0995\u09BE\u09B9\u09AB\u09CD : \u0986\u09DF\u09BE\u09A4 - \u09E7\u09E6",
          instructionsTitle: "\u09A8\u09BF\u09B0\u09CD\u09A6\u09C7\u09B6\u09A8\u09BE",
          instructions: [
            "\u09B8\u09AE\u09CD\u09AE\u09BE\u09A8 \u0993 \u0986\u09A8\u09CD\u09A4\u09B0\u09BF\u0995\u09A4\u09BE\u09B0 \u09B8\u09BE\u09A5\u09C7 \u0986\u09B2\u09CD\u09B2\u09BE\u09B9\u09B0 \u0989\u09AA\u09B0 \u09AD\u09B0\u09B8\u09BE \u0995\u09B0\u09C7 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8\u0964",
            "\u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09B8\u09C7\u0995\u09B6\u09A8\u09C7 \u09A6\u09CD\u09B0\u09C1\u09A4 \u09AF\u09C7\u09A4\u09C7 \u0989\u09AA\u09B0\u09C7\u09B0 \u09AE\u09C7\u09A8\u09C1 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8\u0964",
            "\u09A6\u09AF\u09BC\u09BE \u0995\u09B0\u09C7 \u098F\u0987 \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2 \u09A6\u09C7\u0996\u09BE\u09B0 \u09B8\u09AE\u09AF\u09BC \u0997\u09CB\u09AA\u09A8\u09C0\u09AF\u09BC\u09A4\u09BE \u09AC\u099C\u09BE\u09AF\u09BC \u09B0\u09BE\u0996\u09C1\u09A8\u0964"
          ]
        },
        bismillahIntro: {
          ayahReference: "\u09B8\u09C2\u09B0\u09BE \u09A8\u09C2\u09B0 : \u0986\u09DF\u09BE\u09A4 - \u09E9\u09E8",
          ayahMeaning: "\u09A4\u09CB\u09AE\u09BE\u09A6\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09AF\u09BE\u09B0\u09BE \u0985\u09AC\u09BF\u09AC\u09BE\u09B9\u09BF\u09A4 \u098F\u09AC\u0982 \u09A4\u09CB\u09AE\u09BE\u09A6\u09C7\u09B0 \u09A6\u09BE\u09B8-\u09A6\u09BE\u09B8\u09C0\u09A6\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09AF\u09BE\u09B0\u09BE \u09B8\u09CE\u0995\u09B0\u09CD\u09AE\u09AA\u09B0\u09BE\u09DF\u09A3, \u09A4\u09BE\u09A6\u09C7\u09B0 \u09AC\u09BF\u09AC\u09BE\u09B9 \u09A6\u09BE\u0993\u0964 \u09A4\u09BE\u09B0\u09BE \u0985\u09AD\u09BE\u09AC\u09C0 \u09B9\u09B2\u09C7 \u0986\u09B2\u09CD\u09B2\u09BE\u09B9 \u09A8\u09BF\u099C \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9\u09C7 \u09A4\u09BE\u09A6\u09C7\u09B0\u0995\u09C7 \u0985\u09AD\u09BE\u09AC\u09AE\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09AC\u09C7\u09A8\u0964 \u0986\u09B2\u09CD\u09B2\u09BE\u09B9 \u09AA\u09CD\u09B0\u09BE\u099A\u09C1\u09B0\u09CD\u09AF\u09AE\u09DF, \u09B8\u09B0\u09CD\u09AC\u099C\u09CD\u099E\u0964",
          viewButton: "\u09AC\u09BE\u09DF\u09CB\u09A1\u09BE\u099F\u09BE \u09A6\u09C7\u0996\u09C1\u09A8"
        },
        voice: {
          tapToStart: "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9 \u09AD\u09AF\u09BC\u09C7\u09B8 \u09AF\u09BE\u099A\u09BE\u0987 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09A4\u09C7 \u098F\u0995\u09AC\u09BE\u09B0 \u09AE\u09BE\u0987\u0995\u09C7 \u099A\u09BE\u09AA \u09A6\u09BF\u09A8\u0964",
          browserNoSupport: "\u098F\u0987 \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0\u09C7 \u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u09AA\u09BF\u099A \u09B0\u09BF\u0995\u0997\u09A8\u09BF\u09B6\u09A8 \u09A8\u09C7\u0987\u0964 \u09A8\u09BF\u099A\u09C7\u09B0 \u09AC\u09CB\u09A4\u09BE\u09AE \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09C7 \u09B8\u09BF\u09AD\u09BF \u0996\u09C1\u09B2\u09C1\u09A8\u0964",
          starting: "\u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09AB\u09CB\u09A8 \u099A\u09BE\u09B2\u09C1 \u09B9\u099A\u09CD\u099B\u09C7\u0964 \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0 \u09AF\u09A6\u09BF \u0985\u09A8\u09C1\u09AE\u09A4\u09BF \u099A\u09BE\u09DF \u09A4\u09BE\u09B9\u09B2\u09C7 Allow \u099A\u09BE\u09AA\u09C1\u09A8\u0964",
          listening: '\u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09AB\u09CB\u09A8 \u099A\u09BE\u09B2\u09C1 \u0986\u099B\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9" \u09AC\u09B2\u09C1\u09A8 \u098F\u09AC\u0982 \u09AF\u09BE\u099A\u09BE\u0987\u09DF\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8\u0964',
          detected: (transcript) => `\u09B6\u09CB\u09A8\u09BE \u0997\u09C7\u099B\u09C7: "${transcript}"\u0964 \u09B8\u09BF\u09AD\u09BF \u0996\u09CB\u09B2\u09BE \u09B9\u099A\u09CD\u099B\u09C7...`,
          heard: (transcript) => `\u09B6\u09CB\u09A8\u09BE \u0997\u09C7\u099B\u09C7: "${transcript}"\u0964 \u0986\u09AC\u09BE\u09B0 \u09AE\u09BE\u0987\u0995\u09C7 \u099A\u09BE\u09AA \u09A6\u09BF\u09DF\u09C7 "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9" \u09AC\u09B2\u09C1\u09A8\u0964`,
          errors: {
            "not-allowed": "\u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09AB\u09CB\u09A8 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u09C7\u09B0 \u0985\u09A8\u09C1\u09AE\u09A4\u09BF \u09AC\u09CD\u09B2\u0995 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09A8\u09C1\u09AE\u09A4\u09BF \u09A6\u09BF\u09DF\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
            "service-not-allowed": "\u098F\u0987 \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0\u09C7 \u09B8\u09CD\u09AA\u09BF\u099A \u09B0\u09BF\u0995\u0997\u09A8\u09BF\u09B6\u09A8 \u09B8\u09C7\u09AC\u09BE \u09AC\u09CD\u09B2\u0995 \u0986\u099B\u09C7\u0964 \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F \u0993 \u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09AB\u09CB\u09A8 \u0985\u09A8\u09C1\u09AE\u09A4\u09BF \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
            aborted: "\u09AD\u09AF\u09BC\u09C7\u09B8 \u09B0\u09C7\u0995\u09B0\u09CD\u09A1\u09BF\u0982 \u09B6\u09C1\u09B0\u09C1\u09B0 \u0986\u0997\u09C7\u0987 \u09AC\u09A8\u09CD\u09A7 \u09B9\u09DF\u09C7 \u0997\u09C7\u099B\u09C7\u0964 \u0986\u09AC\u09BE\u09B0 \u09AE\u09BE\u0987\u0995\u09C7 \u099A\u09BE\u09AA \u09A6\u09BF\u09A8\u0964",
            "audio-capture": "\u0995\u09CB\u09A8\u09CB \u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09AB\u09CB\u09A8 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964 \u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09AB\u09CB\u09A8 \u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
            "no-speech": '\u0995\u09CB\u09A8\u09CB \u0995\u09A5\u09BE \u09A7\u09B0\u09BE \u09AA\u09DC\u09C7\u09A8\u09BF\u0964 \u0986\u09AC\u09BE\u09B0 \u09AE\u09BE\u0987\u0995\u09C7 \u099A\u09BE\u09AA \u09A6\u09BF\u09DF\u09C7 "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9" \u09AC\u09B2\u09C1\u09A8\u0964',
            "language-not-supported": "\u098F\u0987 \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0\u09C7 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09BF\u09A4 \u09AD\u09BE\u09B7\u09BE\u09B0 \u09B8\u09CD\u09AA\u09BF\u099A \u09B0\u09BF\u0995\u0997\u09A8\u09BF\u09B6\u09A8 \u09B8\u09AE\u09B0\u09CD\u09A5\u09BF\u09A4 \u09A8\u09DF\u0964",
            network: "\u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0 \u09B8\u09CD\u09AA\u09BF\u099A \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8\u09C7 \u09AA\u09CC\u0981\u099B\u09BE\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u09BF\u0964 \u09B8\u0982\u09AF\u09CB\u0997 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964"
          },
          defaultError: "\u09AD\u09AF\u09BC\u09C7\u09B8 \u09B0\u09BF\u0995\u0997\u09A8\u09BF\u09B6\u09A8 \u09A0\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09B6\u09C1\u09B0\u09C1 \u09B9\u09DF\u09A8\u09BF\u0964 \u09AA\u09AA\u0986\u09AA \u098F\u09B2\u09C7 Allow \u099A\u09BE\u09AA\u09C1\u09A8 \u098F\u09AC\u0982 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
          timeout: '\u09B6\u09CB\u09A8\u09BE\u09B0 \u09B8\u09AE\u09DF \u09B6\u09C7\u09B7 \u09B9\u09DF\u09C7\u099B\u09C7\u0964 \u0986\u09AC\u09BE\u09B0 \u09AE\u09BE\u0987\u0995\u09C7 \u099A\u09BE\u09AA \u09A6\u09BF\u09DF\u09C7 "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9" \u09AC\u09B2\u09C1\u09A8\u0964',
          notVerified: '"\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9" \u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964 \u0986\u09AC\u09BE\u09B0 \u09AE\u09BE\u0987\u0995\u09C7 \u099A\u09BE\u09AA \u09A6\u09BF\u09DF\u09C7 \u09AC\u09B2\u09C1\u09A8\u0964',
          couldNotStart: "\u098F\u0987 \u09AE\u09C1\u09B9\u09C2\u09B0\u09CD\u09A4\u09C7 \u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09AB\u09CB\u09A8 \u099A\u09BE\u09B2\u09C1 \u0995\u09B0\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF\u0964 \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0 \u0985\u09A8\u09C1\u09AE\u09A4\u09BF \u099A\u09BE\u0987\u09B2\u09C7 Allow \u09A6\u09BF\u09DF\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
          supportNoSupport: "\u098F\u0987 \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0\u09C7 \u09B2\u09BE\u0987\u09AD \u09B8\u09CD\u09AA\u09BF\u099A \u09B0\u09BF\u0995\u0997\u09A8\u09BF\u09B6\u09A8 \u09A8\u09C7\u0987, \u09A4\u09BE\u0987 \u09A8\u09BF\u099A\u09C7 Continue \u09AC\u09BE\u099F\u09A8 \u09A6\u09C7\u0996\u09BE\u09A8\u09CB \u09B9\u099A\u09CD\u099B\u09C7\u0964",
          supportPreparing: "\u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09AB\u09CB\u09A8 \u099A\u09BE\u09B2\u09C1 \u09B9\u099A\u09CD\u099B\u09C7\u0964 \u098F\u0995\u099F\u09C1 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
          supportErrorGeneral: "\u09AF\u09A6\u09BF \u0995\u09CB\u09A8\u09CB \u09AA\u09AA\u0986\u09AA \u09A8\u09BE \u0986\u09B8\u09C7, \u09A4\u09BE\u09B9\u09B2\u09C7 \u09B8\u09BE\u0987\u099F\u09C7\u09B0 \u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09AB\u09CB\u09A8 \u0985\u09A8\u09C1\u09AE\u09A4\u09BF \u0993 \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0\u09C7\u09B0 \u09B8\u09CD\u09AA\u09BF\u099A \u09B0\u09BF\u0995\u0997\u09A8\u09BF\u09B6\u09A8 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
          supportListening: "\u09B0\u09C7\u0995\u09B0\u09CD\u09A1\u09BF\u0982 \u099A\u09B2\u099B\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u09AC\u09B2\u09C1\u09A8, \u09A4\u09BE\u09B0\u09AA\u09B0 \u09AF\u09BE\u099A\u09BE\u0987\u09DF\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u098F\u0995\u099F\u09C1 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
          supportIdle: "\u09AE\u09BE\u0987\u0995\u09C7 \u099A\u09BE\u09AA \u09A6\u09BF\u09A8\u0964 \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0 \u09AA\u09AA\u0986\u09AA \u098F\u09B2\u09C7 Allow \u099A\u09BE\u09AA\u09C1\u09A8\u0964",
          micAriaRetry: "\u09AD\u09AF\u09BC\u09C7\u09B8 \u09B0\u09BF\u0995\u0997\u09A8\u09BF\u09B6\u09A8 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8",
          micAriaStop: "\u09AD\u09AF\u09BC\u09C7\u09B8 \u09B0\u09BF\u0995\u0997\u09A8\u09BF\u09B6\u09A8 \u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
          micAriaStart: "\u09AD\u09AF\u09BC\u09C7\u09B8 \u09B0\u09BF\u0995\u0997\u09A8\u09BF\u09B6\u09A8 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8 \u098F\u09AC\u0982 \u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9 \u09AC\u09B2\u09C1\u09A8"
        },
        menu: {
          profile: "\u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2",
          gallery: "\u0997\u09CD\u09AF\u09BE\u09B2\u09BE\u09B0\u09BF",
          personal: "\u09AC\u09CD\u09AF\u0995\u09CD\u09A4\u09BF\u0997\u09A4",
          family: "\u09AA\u09B0\u09BF\u09AC\u09BE\u09B0",
          work: "\u0995\u09BE\u099C",
          lifestyle: "\u099C\u09C0\u09AC\u09A8\u09A7\u09BE\u09B0\u09BE",
          language: "\u09AD\u09BE\u09B7\u09BE",
          education: "\u09B6\u09BF\u0995\u09CD\u09B7\u09BE",
          training: "\u09AA\u09CD\u09B0\u09B6\u09BF\u0995\u09CD\u09B7\u09A3",
          activities: "\u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE",
          hobbies: "\u09B6\u0996",
          expectation: "\u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B6\u09BE",
          contact: "\u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997",
          dua: "\u09A6\u09CB\u0986"
        },
        profile: {
          name: "\u09AE\u09CB. \u09AE\u09BE\u09B9\u09AC\u09C1\u09AC\u09C1\u09B0 \u09B0\u09B9\u09AE\u09BE\u09A8",
          subtitle: "\u09A4\u09A5\u09CD\u09AF\u09AA\u09CD\u09B0\u09AF\u09C1\u0995\u09CD\u09A4\u09BF \u09AA\u09C7\u09B6\u09BE\u099C\u09C0\u09AC\u09C0",
          tagline: "\u098F\u0995\u099C\u09A8 \u09AE\u09C1\u09B8\u09B2\u09BF\u09AE \u09AF\u09C1\u09AC\u0995, \u09A6\u09C1\u09A8\u09BF\u09DF\u09BE \u0993 \u0986\u0996\u09C7\u09B0\u09BE\u09A4\u09C7\u09B0 \u099A\u0995\u09CD\u09B7\u09C1\u09B6\u09C0\u09A4\u09B2\u0995\u09BE\u09B0\u09BF\u09A8\u09C0 \u09AE\u09C1\u09B8\u09B2\u09BF\u09AE\u09BE\u09B9\u09CD  \u09B8\u0999\u09CD\u0997\u09C0 \u0996\u09C1\u099C\u099B\u09C7!",
          stats: {
            age: "\u09E8\u09EE \u09AC\u099B\u09B0",
            education: "\u0989\u099A\u09CD\u099A\u09B6\u09BF\u0995\u09CD\u09B7\u09BF\u09A4",
            work: "\u09B8\u09C1\u09AA\u09CD\u09B0\u09A4\u09BF\u09B7\u09CD\u09A0\u09BF\u09A4",
            faith: "\u09A6\u09CD\u09AC\u09C0\u09A8\u09A6\u09BE\u09B0 \u09AE\u09C1\u09B8\u09B2\u09BF\u09AE"
          }
        },
        gallery: {
          title: "\u099B\u09AC\u09BF \u0997\u09CD\u09AF\u09BE\u09B2\u09BE\u09B0\u09BF",
          photos: [
            { src: withCvCacheVersion("assets/images/mahbub-portrait-1.jpg"), alt: "Md Mahbubur Rahman-\u098F\u09B0 \u09AA\u09CB\u09B0\u09CD\u099F\u09CD\u09B0\u09C7\u099F \u09E7", label: "\u099B\u09AC\u09BF \u09E6\u09E7", featured: true },
            { src: withCvCacheVersion("assets/images/mahbub-portrait-2.jpg"), alt: "Md Mahbubur Rahman-\u098F\u09B0 \u09AA\u09CB\u09B0\u09CD\u099F\u09CD\u09B0\u09C7\u099F \u09E8", label: "\u099B\u09AC\u09BF \u09E6\u09E8", featured: false }
          ]
        },
        sectionHeaders: {
          personal: "\u09AC\u09CD\u09AF\u0995\u09CD\u09A4\u09BF\u0997\u09A4 \u09A4\u09A5\u09CD\u09AF",
          family: "\u09AA\u09BE\u09B0\u09BF\u09AC\u09BE\u09B0\u09BF\u0995 \u09A4\u09A5\u09CD\u09AF",
          work: "\u09AA\u09C7\u09B6\u09BE\u0997\u09A4 \u09A4\u09A5\u09CD\u09AF"
        },
        personalDetails: [
          { label: "\u09AA\u09C2\u09B0\u09CD\u09A3 \u09A8\u09BE\u09AE", value: "\u09AE\u09CB. \u09AE\u09BE\u09B9\u09AC\u09C1\u09AC\u09C1\u09B0 \u09B0\u09B9\u09AE\u09BE\u09A8", iconClass: "fas fa-user" },
          { label: "\u09A1\u09BE\u0995\u09A8\u09BE\u09AE", value: "\u09A8\u09BE\u09B8\u09BF\u09B0 \u0989\u09A6\u09CD\u09A6\u09BF\u09A8", iconClass: "fas fa-signature" },
          { label: "\u099C\u09A8\u09CD\u09AE \u09A4\u09BE\u09B0\u09BF\u0996", value: "\u09E8\u09E6 \u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0 \u09E7\u09EF\u09EF\u09ED", iconClass: "fas fa-calendar-days" },
          { label: "\u09AC\u09DF\u09B8", value: "\u09E8\u09EE \u09AC\u099B\u09B0", iconClass: "fas fa-hourglass-half" },
          { label: "\u09A7\u09B0\u09CD\u09AE", value: "\u0987\u09B8\u09B2\u09BE\u09AE (\u09AA\u09CD\u09B0\u09CD\u09AF\u09BE\u0995\u099F\u09BF\u09B8\u09BF\u0982 \u09AE\u09C1\u09B8\u09B2\u09BF\u09AE)", iconClass: "fas fa-mosque" },
          { label: "\u09AC\u09C8\u09AC\u09BE\u09B9\u09BF\u0995 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE", value: "\u0985\u09AC\u09BF\u09AC\u09BE\u09B9\u09BF\u09A4", iconClass: "fas fa-ring" },
          { label: "\u0997\u09BE\u09DF\u09C7\u09B0 \u09B0\u0982", value: "\u09AE\u09BE\u099D\u09BE\u09B0\u09BF \u09B6\u09CD\u09AF\u09BE\u09AE\u09B2\u09BE", iconClass: "fas fa-palette" },
          { label: "\u0989\u099A\u09CD\u099A\u09A4\u09BE \u0993 \u0993\u099C\u09A8", value: `\u09EB' \u09E9" \u0993 \u09ED\u09E6 \u0995\u09C7\u099C\u09BF`, iconClass: "fas fa-ruler-combined" },
          { label: "\u09B0\u0995\u09CD\u09A4\u09C7\u09B0 \u0997\u09CD\u09B0\u09C1\u09AA", value: "\u098F+", iconClass: "fas fa-droplet" },
          { label: "\u09B8\u09CD\u09AC\u09BE\u09B8\u09CD\u09A5\u09CD\u09AF \u0985\u09AC\u09B8\u09CD\u09A5\u09BE", value: "\u09B8\u09C1\u09B8\u09CD\u09A5, \u09A7\u09C2\u09AE\u09AA\u09BE\u09A8\u09AE\u09C1\u0995\u09CD\u09A4, \u0995\u09CB\u09A8\u09CB \u09A8\u09C7\u09B6\u09BE \u09A8\u09C7\u0987", iconClass: "fas fa-heart-pulse" }
        ],
        familyDetails: [
          ["\u09AA\u09BF\u09A4\u09BE", "\u09AE\u09B0\u09B9\u09C1\u09AE \u0986\u09AC\u09CD\u09A6\u09C1\u09B2 \u0995\u09BE\u09A6\u09C7\u09B0 \u09B9\u09BE\u0993\u09B2\u09BE\u09A6\u09BE\u09B0 (\u0997\u09CD\u09B0\u09BE\u09AE\u09CD\u09AF \u09A1\u09BE\u0995\u09CD\u09A4\u09BE\u09B0 \u0993 \u09AA\u09CD\u09B0\u09BE\u09A5\u09AE\u09BF\u0995 \u09B6\u09BF\u0995\u09CD\u09B7\u0995 \u099B\u09BF\u09B2\u09C7\u09A8)"],
          ["\u09AE\u09BE\u09A4\u09BE", "\u09AB\u09B0\u09BF\u09A6\u09BE \u09AC\u09C7\u0997\u09AE - \u0997\u09C3\u09B9\u09BF\u09A3\u09C0"],
          ["\u09AD\u09BE\u0987\u09AC\u09CB\u09A8", "\u09EA \u09AD\u09BE\u0987 \u0993 \u09E9 \u09AC\u09CB\u09A8"],
          ["\u09B8\u09CD\u09A5\u09BE\u09DF\u09C0 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE", "\u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09C1\u09A4\u09BE\u09B2\u09B0\u09BF, \u099C\u09CB\u09AE\u09BE\u09A6\u09CD\u09A6\u09BE\u09B0 \u09AA\u09BE\u09DC\u09BE, \u09AE\u09CB\u09B0\u09C7\u09B2\u0997\u099E\u09CD\u099C, \u09AC\u09BE\u0997\u09C7\u09B0\u09B9\u09BE\u099F"],
          ["\u099C\u09C7\u09B2\u09BE", "\u09AC\u09BE\u0997\u09C7\u09B0\u09B9\u09BE\u099F"]
        ],
        familySummary: {
          label: "\u09AA\u09BE\u09B0\u09BF\u09AC\u09BE\u09B0\u09BF\u0995 \u09AA\u099F\u09AD\u09C2\u09AE\u09BF",
          title: "\u09B6\u09BF\u0995\u09CD\u09B7\u09BE \u0993 \u09A7\u09B0\u09CD\u09AE\u09C0\u09DF \u09AE\u09C2\u09B2\u09CD\u09AF\u09AC\u09CB\u09A7\u09C7 \u0997\u09DC\u09BE \u098F\u0995\u099F\u09BF \u09B8\u09AE\u09CD\u09AE\u09BE\u09A8\u09BF\u09A4 \u09AE\u09A7\u09CD\u09AF\u09AC\u09BF\u09A4\u09CD\u09A4 \u09AA\u09B0\u09BF\u09AC\u09BE\u09B0\u0964",
          tags: ["\u09B8\u09AE\u09CD\u09AE\u09BE\u09A8\u09BF\u09A4", "\u09AE\u09A7\u09CD\u09AF\u09AC\u09BF\u09A4\u09CD\u09A4", "\u09B6\u09BF\u0995\u09CD\u09B7\u09BF\u09A4", "\u09A7\u09B0\u09CD\u09AE\u09C0\u09DF \u0985\u09A8\u09C1\u09B6\u09BE\u09B8\u09A8\u09C7 \u09AC\u09BF\u09B6\u09CD\u09AC\u09BE\u09B8\u09C0"]
        },
        familySiblingsTitle: "\u09AD\u09BE\u0987\u09AC\u09CB\u09A8\u09C7\u09B0 \u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4",
        familySiblings: [
          ["\u09E7\u09AE \u09AC\u09CB\u09A8", "\u09B6\u09BE\u09B9\u09A8\u09BE\u099C \u09B6\u09BE\u09A8\u09CD\u09A4\u09BF, \u09EA \u09B8\u09A8\u09CD\u09A4\u09BE\u09A8\u09C7\u09B0 \u099C\u09A8\u09A8\u09C0, \u0997\u09C3\u09B9\u09BF\u09A3\u09C0\u0964 \u09AE\u09CB\u09B0\u09C7\u09B2\u0997\u099E\u09CD\u099C\u0964"],
          ["\u09E8\u09DF \u09AD\u09BE\u0987", "\u0986\u09B2\u09BE\u0989\u09A6\u09CD\u09A6\u09BF\u09A8, \u0986\u0997\u09C7 \u0986\u09AC\u09C1\u09A7\u09BE\u09AC\u09BF\u09A4\u09C7 \u0995\u09B0\u09CD\u09AE\u09B0\u09A4 \u099B\u09BF\u09B2\u09C7\u09A8, \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8\u09C7 \u09AC\u09CD\u09AF\u09AC\u09B8\u09BE (\u09A2\u09BE\u0995\u09BE)\u0964 \u09E8 \u09B8\u09A8\u09CD\u09A4\u09BE\u09A8\u09C7\u09B0 \u099C\u09A8\u0995\u0964 \u09AE\u09CB\u09B0\u09C7\u09B2\u0997\u099E\u09CD\u099C\u0964"],
          ["\u09E9\u09DF \u09AD\u09BE\u0987", "\u0997\u09BF\u09DF\u09BE\u09B8 \u0989\u09A6\u09CD\u09A6\u09BF\u09A8, \u0997\u09BE\u09DC\u09BF \u099A\u09BE\u09B2\u0995, \u09AC\u09BE\u09A8\u099E\u09CD\u099C\u09BE \u09AA\u09BF\u098F\u09B2\u09B8\u09BF, \u099A\u099F\u09CD\u099F\u0997\u09CD\u09B0\u09BE\u09AE, \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u09A8\u09CC\u09AC\u09BE\u09B9\u09C0\u09A8 \u09B8\u09A6\u09B0\u0964 \u09E8 \u09B8\u09A8\u09CD\u09A4\u09BE\u09A8\u09C7\u09B0 \u099C\u09A8\u0995\u0964 \u09AE\u09CB\u09B0\u09C7\u09B2\u0997\u099E\u09CD\u099C\u0964"],
          ["\u09EA\u09B0\u09CD\u09A5 \u09AC\u09CB\u09A8", "\u099C\u09C7\u09B0\u09BF\u09A8 \u09B8\u09BE\u09B2\u09AE\u09BE \u09AC\u09C7\u09AC\u09BF, \u09E9 \u09B8\u09A8\u09CD\u09A4\u09BE\u09A8\u09C7\u09B0 \u099C\u09A8\u09A8\u09C0, \u0997\u09C3\u09B9\u09BF\u09A3\u09C0\u0964 \u09AE\u09CB\u09B0\u09C7\u09B2\u0997\u099E\u09CD\u099C\u0964"],
          ["\u09EB\u09AE \u09AD\u09BE\u0987", "\u09AE\u09B9\u09BF\u0989\u09A6\u09CD\u09A6\u09BF\u09A8, \u0997\u09BE\u09DC\u09BF \u099A\u09BE\u09B2\u0995, (\u09A1\u09BE\u0995\u09CD\u09A4\u09BE\u09B0 \u09A6\u09AE\u09CD\u09AA\u09A4\u09CD\u09A4\u09BF\u09B0) , \u099A\u099F\u09CD\u099F\u0997\u09CD\u09B0\u09BE\u09AE\u0964 \u09EA \u09B8\u09A8\u09CD\u09A4\u09BE\u09A8\u09C7\u09B0 \u099C\u09A8\u0995\u0964 \u099A\u099F\u09CD\u099F\u0997\u09CD\u09B0\u09BE\u09AE"],
          ["\u09EC\u09B7\u09CD\u09A0 \u09AC\u09CB\u09A8", "\u09A8\u09BE\u099C\u09AE\u09BE \u09B8\u09C1\u09B2\u09A4\u09BE\u09A8\u09BE, \u09E8 \u09B8\u09A8\u09CD\u09A4\u09BE\u09A8\u09C7\u09B0 \u099C\u09A8\u09A8\u09C0, \u0997\u09C3\u09B9\u09BF\u09A3\u09C0\u0964 \u0996\u09C1\u09B2\u09A8\u09BE\u0964"],
          ["\u09ED\u09AE", "\u09B8\u09AC\u09BE\u09B0 \u099B\u09CB\u099F \u099B\u09C7\u09B2\u09C7, \u09A8\u09BF\u099C\u09C7\u0964"]
        ],
        siblingStatusData: {
          "\u09E7\u09AE \u09AC\u09CB\u09A8": { text: "\u09AC\u09BF\u09AC\u09BE\u09B9\u09BF\u09A4", className: "married" },
          "\u09E8\u09DF \u09AD\u09BE\u0987": { text: "\u09AC\u09BF\u09AC\u09BE\u09B9\u09BF\u09A4", className: "married" },
          "\u09E9\u09DF \u09AD\u09BE\u0987": { text: "\u09AC\u09BF\u09AC\u09BE\u09B9\u09BF\u09A4", className: "married" },
          "\u09EA\u09B0\u09CD\u09A5 \u09AC\u09CB\u09A8": { text: "\u09AC\u09BF\u09AC\u09BE\u09B9\u09BF\u09A4", className: "married" },
          "\u09EB\u09AE \u09AD\u09BE\u0987": { text: "\u09AC\u09BF\u09AC\u09BE\u09B9\u09BF\u09A4", className: "married" },
          "\u09EC\u09B7\u09CD\u09A0 \u09AC\u09CB\u09A8": { text: "\u09AC\u09BF\u09AC\u09BE\u09B9\u09BF\u09A4", className: "married" },
          "\u09ED\u09AE": { text: "\u0985\u09AC\u09BF\u09AC\u09BE\u09B9\u09BF\u09A4", className: "unmarried" }
        },
        workSection: {
          items: [
            { title: "\u09AA\u09CD\u09B0\u0995\u09BF\u0989\u09B0\u09AE\u09C7\u09A8\u09CD\u099F \u0985\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1 \u09B8\u09BE\u09B0\u09CD\u09AD\u09BF\u09B8\u09BF\u0982 \u09B2\u09BF\u09A1", organization: "\u0986\u09B0\u09CD\u09A5\u09AB\u09C7\u09B8 \u0986\u0987\u099F\u09BF, \u09A2\u09BE\u0995\u09BE", duration: "\u09E8\u09ED \u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0 \u09E8\u09E6\u09E8\u09E7 - \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8", iconClass: "fas fa-briefcase" },
            { title: "\u0986\u0987\u099F\u09BF \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F \u0985\u09CD\u09AF\u09BE\u09B8\u09BF\u09B8\u09CD\u099F\u09CD\u09AF\u09BE\u09A8\u09CD\u099F (\u0996\u09A3\u09CD\u09A1\u0995\u09BE\u09B2\u09C0\u09A8)", organization: "\u0986\u09B0\u09AC\u09BF \u09AD\u09BE\u09B7\u09BE \u0993 \u09B8\u09BE\u09B9\u09BF\u09A4\u09CD\u09AF \u09AC\u09BF\u09AD\u09BE\u0997, \u0987\u09B8\u09B2\u09BE\u09AE\u09C0 \u09AC\u09BF\u09B6\u09CD\u09AC\u09AC\u09BF\u09A6\u09CD\u09AF\u09BE\u09B2\u09AF\u09BC, \u0995\u09C1\u09B7\u09CD\u099F\u09BF\u09AF\u09BC\u09BE", duration: "\u09E8\u09E9 \u09AE\u09BE\u09B0\u09CD\u099A \u09E8\u09E6\u09E7\u09ED - \u09E8\u09E6 \u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0 \u09E8\u09E6\u09E8\u09E7", iconClass: "fas fa-headset" },
            { title: "\u0986\u0987\u099F\u09BF \u098F\u0995\u09CD\u09B8\u09BF\u0995\u09BF\u0989\u099F\u09BF\u09AD (\u0996\u09A3\u09CD\u09A1\u0995\u09BE\u09B2\u09C0\u09A8)", organization: "\u0996\u09A8\u09CD\u09A6\u0995\u09BE\u09B0 \u099F\u09C7\u09B2\u09BF\u0995\u09AE, \u099F\u0999\u09CD\u0997\u09BF, \u0997\u09BE\u099C\u09C0\u09AA\u09C1\u09B0\u0964", duration: "\u09ED \u099C\u09C1\u09B2\u09BE\u0987 \u09E8\u09E6\u09E7\u09EA - \u09E7\u09E8 \u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0 \u09E8\u09E6\u09E7\u09EB", iconClass: "fas fa-desktop" }
          ]
        },
        lifestyle: {
          title: "\u09AC\u09CD\u09AF\u0995\u09CD\u09A4\u09BF\u09A4\u09CD\u09AC \u0993 \u099C\u09C0\u09AC\u09A8\u09A7\u09BE\u09B0\u09BE",
          items: [
            { label: "\u099A\u09B0\u09BF\u09A4\u09CD\u09B0", value: "\u09A8\u09AE\u09CD\u09B0, \u09A7\u09B0\u09CD\u09AE\u09AA\u09B0\u09BE\u09DF\u09A3, \u09AC\u09BF\u09B6\u09CD\u09AC\u09B8\u09CD\u09A4", iconClass: "fas fa-user-shield" },
            { label: "\u09AD\u09AC\u09BF\u09B7\u09CD\u09AF\u09CE \u09B2\u0995\u09CD\u09B7\u09CD\u09AF", value: "\u09A6\u09CD\u09AC\u09C0\u09A8 \u0993 \u09AA\u09BE\u09B0\u09B8\u09CD\u09AA\u09B0\u09BF\u0995 \u09B8\u09AE\u09CD\u09AE\u09BE\u09A8\u09C7\u09B0 \u09AD\u09BF\u09A4\u09CD\u09A4\u09BF\u09A4\u09C7 \u09AA\u09B0\u09BF\u09AC\u09BE\u09B0 \u0997\u09A0\u09A8", iconClass: "fas fa-bullseye" },
            { label: "\u0986\u0997\u09CD\u09B0\u09B9", value: "\u0987\u09B8\u09B2\u09BE\u09AE\u09BF\u0995 \u09B2\u09C7\u0995\u099A\u09BE\u09B0, \u09AA\u09DC\u09BE\u09B6\u09CB\u09A8\u09BE, \u09AD\u09CD\u09B0\u09AE\u09A3, \u09AA\u09CD\u09B0\u09AF\u09C1\u0995\u09CD\u09A4\u09BF \u09B6\u09C7\u0996\u09BE", iconClass: "fas fa-book-open" },
            { label: "\u0996\u09BE\u09A6\u09CD\u09AF\u09BE\u09AD\u09CD\u09AF\u09BE\u09B8", value: "\u0998\u09B0\u09C7 \u09A4\u09C8\u09B0\u09BF \u09B9\u09BE\u09B2\u09BE\u09B2 \u0996\u09BE\u09AC\u09BE\u09B0 \u09AA\u099B\u09A8\u09CD\u09A6", iconClass: "fas fa-utensils" },
            { label: "\u0985\u09A4\u09BF\u09B0\u09BF\u0995\u09CD\u09A4", value: "\u09B8\u09AE\u09DF\u09A8\u09BF\u09B7\u09CD\u09A0, \u09B8\u09CD\u09AC\u09AD\u09BE\u09AC\u09C7 \u09B8\u0982\u09AF\u09A4, \u09B8\u09BE\u09AE\u09BE\u099C\u09BF\u0995, \u09AD\u09A6\u09CD\u09B0", iconClass: "fas fa-check-double" }
          ]
        },
        languages: {
          title: "\u09AD\u09BE\u09B7\u09BE\u0997\u09A4 \u09A6\u0995\u09CD\u09B7\u09A4\u09BE",
          proficiencyAria: (title) => `${title} \u09AD\u09BE\u09B7\u09BE\u09B0 \u09A6\u0995\u09CD\u09B7\u09A4\u09BE`,
          items: [
            { title: "\u0987\u0982\u09B0\u09C7\u099C\u09BF", level: "\u09AD\u09BE\u09B2\u09CB", percent: 66.66 },
            { title: "\u0986\u09B0\u09AC\u09BF", level: "\u09AD\u09BE\u09B2\u09CB", percent: 66.66 },
            { title: "\u09AC\u09BE\u0982\u09B2\u09BE", level: "\u099A\u09AE\u09CE\u0995\u09BE\u09B0", percent: 100 }
          ]
        },
        education: {
          title: "\u09B6\u09BF\u0995\u09CD\u09B7\u09BE\u0997\u09A4 \u09A4\u09A5\u09CD\u09AF",
          items: [
            { title: "\u098F\u09AE.\u098F. (\u0986\u09B0\u09AC\u09BF \u09AD\u09BE\u09B7\u09BE \u0993 \u09B8\u09BE\u09B9\u09BF\u09A4\u09CD\u09AF)", institution: "\u0987\u09B8\u09B2\u09BE\u09AE\u09C0 \u09AC\u09BF\u09B6\u09CD\u09AC\u09AC\u09BF\u09A6\u09CD\u09AF\u09BE\u09B2\u09DF, \u0995\u09C1\u09B7\u09CD\u099F\u09BF\u09DF\u09BE\u0964", institutionHref: "https://iu.ac.bd", scoreLabel: "\u09B8\u09BF\u099C\u09BF\u09AA\u09BF\u098F", score: "\u09E9.\u09EB\u09EE/\u09EA", session: "\u09E8\u09E6\u09E8\u09E8" },
            { title: "\u09AC\u09BF.\u098F. \u0985\u09A8\u09BE\u09B0\u09CD\u09B8 (\u0986\u09B0\u09AC\u09BF \u09AD\u09BE\u09B7\u09BE \u0993 \u09B8\u09BE\u09B9\u09BF\u09A4\u09CD\u09AF)", institution: "\u0987\u09B8\u09B2\u09BE\u09AE\u09C0 \u09AC\u09BF\u09B6\u09CD\u09AC\u09AC\u09BF\u09A6\u09CD\u09AF\u09BE\u09B2\u09AF\u09BC, \u0995\u09C1\u09B7\u09CD\u099F\u09BF\u09AF\u09BC\u09BE\u0964", institutionHref: "https://iu.ac.bd", scoreLabel: "\u09B8\u09BF\u099C\u09BF\u09AA\u09BF\u098F", score: "\u09E9.\u09EB\u09EE/\u09EA", session: "\u09E8\u09E6\u09E8\u09E6" },
            { title: "\u0986\u09B2\u09BF\u09AE (\u098F\u0987\u099A\u098F\u09B8\u09B8\u09BF)", institution: "\u09A4\u09BE\u09AE\u09BF\u09B0\u09C1\u09B2 \u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09A4 \u0995\u09BE\u09AE\u09BF\u09B2 \u09AE\u09BE\u09A6\u09B0\u09BE\u09B8\u09BE, \u099F\u0999\u09CD\u0997\u09BF, \u0997\u09BE\u099C\u09C0\u09AA\u09C1\u09B0", institutionHref: "https://www.tmt.edu.bd", scoreLabel: "\u099C\u09BF\u09AA\u09BF\u098F", score: "\u09EB.\u09E6\u09E6/\u09EB", session: "\u09E8\u09E6\u09E7\u09EA" },
            { title: "\u09A6\u09BE\u0996\u09BF\u09B2 (\u098F\u09B8\u098F\u09B8\u09B8\u09BF)", institution: "\u09A4\u09BE\u09B2\u09BF\u09AE\u09C1\u09B2 \u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09A4 \u09B0\u09B9\u09AE\u09A4\u09BF\u09AF\u09BC\u09BE \u09AB\u09BE\u09AF\u09BF\u09B2 \u09AE\u09BE\u09A6\u09B0\u09BE\u09B8\u09BE, \u09B8\u09CB\u09A8\u09BE\u09A1\u0999\u09CD\u0997\u09BE, \u0996\u09C1\u09B2\u09A8\u09BE", scoreLabel: "\u099C\u09BF\u09AA\u09BF\u098F", score: "\u09EB.\u09E6\u09E6/\u09EB", session: "\u09E8\u09E6\u09E7\u09E8" }
          ]
        },
        training: {
          title: "\u09AA\u09CD\u09B0\u09B6\u09BF\u0995\u09CD\u09B7\u09A3 \u0993 \u0989\u09A8\u09CD\u09A8\u09AF\u09BC\u09A8",
          items: [
            { text: "\u0995\u09B0\u09AA\u09CB\u09B0\u09C7\u099F \u09AE\u09CD\u09AF\u09BE\u09A8\u09C7\u099C\u09AE\u09C7\u09A8\u09CD\u099F \u09AC\u09C1\u099F\u0995\u09CD\u09AF\u09BE\u09AE\u09CD\u09AA - \u09E8\u09E6\u09E8\u09E9 (\u09E7\u09E6 \u09A6\u09BF\u09A8\u09AC\u09CD\u09AF\u09BE\u09AA\u09C0, \u09AC\u09BF\u0993\u09DF\u09BE\u0987\u098F\u09B2\u09B8\u09BF, \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6.)", href: "https://bylc.org", linkLabel: "\u09AD\u09BF\u099C\u09BF\u099F" },
            { text: "\u09AA\u09CD\u09B0\u09AB\u09C7\u09B6\u09A8\u09BE\u09B2 \u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u0995\u09A8\u09CD\u099F\u09C7\u09A8\u09CD\u099F \u09AE\u09CD\u09AF\u09BE\u09A8\u09C7\u099C\u09AE\u09C7\u09A8\u09CD\u099F (\u09AA\u09BF\u09A1\u09BF\u09B8\u09BF\u098F\u09AE), (\u09E9 \u09AE\u09BE\u09B8, \u09B8\u09C7\u0987\u09AA, \u0985\u09B0\u09CD\u09A5 \u09AE\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3\u09BE\u09B2\u09AF\u09BC, \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)", href: "https://lms.seip-fd.gov.bd", linkLabel: "\u09AD\u09BF\u099C\u09BF\u099F" },
            { text: "\u0993\u09DF\u09C7\u09AC \u09A1\u09BF\u099C\u09BE\u0987\u09A8 \u098F\u09A8\u09CD\u09A1 \u09A1\u09C7\u09AD\u09B2\u09AA\u09AE\u09C7\u09A8\u09CD\u099F (\u09E8\u09E6\u09E6 \u0998\u09A3\u09CD\u099F\u09BE, \u098F\u09B2\u0987\u09A1\u09BF\u09AA\u09BF, \u0986\u0987\u09B8\u09BF\u099F\u09BF \u09AC\u09BF\u09AD\u09BE\u0997, \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6\u0964)", href: "https://ictd.gov.bd", linkLabel: "\u09AD\u09BF\u099C\u09BF\u099F" },
            { text: "\u0995\u09AE\u09CD\u09AA\u09BF\u0989\u099F\u09BE\u09B0 \u098F\u09A8\u09CD\u09A1 \u0987\u099F\u09B8\u09CD \u0985\u09CD\u09AF\u09BE\u09AA\u09CD\u09B2\u09BF\u0995\u09C7\u09B6\u09A8\u09B8 (\u09E7 \u09AC\u099B\u09B0, \u0987\u09B8\u09B2\u09BE\u09AE\u09C0 \u09AC\u09BF\u09B6\u09CD\u09AC\u09AC\u09BF\u09A6\u09CD\u09AF\u09BE\u09B2\u09DF, \u0995\u09C1\u09B7\u09CD\u099F\u09BF\u09DF\u09BE\u0964)", href: "https://iu.ac.bd", linkLabel: "\u09AD\u09BF\u099C\u09BF\u099F" },
            { text: "\u099F\u09CD\u09B0\u09BE\u09AC\u09B2\u09B6\u09C1\u099F\u09BF\u0982 \u0987\u09A8 \u0995\u09AE\u09CD\u09AA\u09BF\u0989\u099F\u09BE\u09B0 \u09B8\u09BF\u0995\u09BF\u0989\u09B0\u09BF\u099F\u09BF (\u0986\u0987\u09B8\u09BF\u099F\u09BF \u09AC\u09BF\u09AD\u09BE\u0997, \u098F\u099F\u09C1\u0986\u0987)", href: "https://a2i.gov.bd", linkLabel: "\u09AD\u09BF\u099C\u09BF\u099F" },
            { text: "\u09AE\u09BE\u0987\u0995\u09CD\u09B0\u09CB\u09B8\u09AB\u099F \u0993\u09DF\u09BE\u09B0\u09CD\u09A1 \u09AC\u09CD\u09AF\u09BE\u09B8\u09BF\u0995 ( \u09AE\u09C1\u0995\u09CD\u09A4\u09AA\u09BE\u09A0, \u098F\u099F\u09C1\u0986\u0987)", href: "https://a2i.gov.bd", linkLabel: "\u09AD\u09BF\u099C\u09BF\u099F" },
            { text: "\u09AD\u09BF\u09A1\u09BF\u0993 \u09AA\u09CD\u09B0\u09CB\u09A1\u09BE\u0995\u09CD\u099F\u09B6\u09A8 (\u09B9\u09BF\u0989\u09AE\u09CD\u09AF\u09BE\u09A8 \u09A1\u09C7\u09AD\u09B2\u09AA\u09AE\u09C7\u09A8\u09CD\u099F \u09AE\u09BF\u09A1\u09BF\u09DF\u09BE, \u098F\u099F\u09C1\u0986\u0987)", href: "https://a2i.gov.bd", linkLabel: "\u09AD\u09BF\u099C\u09BF\u099F" },
            { text: "\u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u09B8\u09BF\u0995\u09BF\u0989\u09B0\u09BF\u099F\u09BF \u0985\u09CD\u09AF\u09BE\u09B8\u09C7\u09A8\u09B8\u09CD\u09AF\u09BE\u09B2 ( \u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u09B8\u09BF\u0995\u09BF\u0989\u09B0\u09BF\u099F\u09BF \u098F\u099C\u09C7\u09A8\u09CD\u09B8\u09BF, \u098F\u099F\u09C1\u0986\u0987)", href: "https://a2i.gov.bd", linkLabel: "\u09AD\u09BF\u099C\u09BF\u099F" },
            { text: "\u0986\u0987\u09A1\u09BF\u09DF\u09BE \u0987\u09A8\u09CB\u09AD\u09C7\u09B6\u09A8 \u0993\u09DF\u09BE\u09B0\u09CD\u0995\u09B6\u09AA \u09AB\u09B0 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u0997\u09C7\u09AE\u09B8 \u0985\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1 \u0985\u09CD\u09AF\u09BE\u09AA\u09B8 \u09A1\u09C7\u09AD\u09B2\u09AA\u09AE\u09C7\u09A8\u09CD\u099F (\u0986\u0987\u09B8\u09BF\u099F\u09BF \u09AC\u09BF\u09AD\u09BE\u0997, \u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)", href: "https://a2i.gov.bd", linkLabel: "\u09AD\u09BF\u099C\u09BF\u099F" }
          ]
        },
        activities: {
          title: "\u09B8\u09B9\u09B6\u09BF\u0995\u09CD\u09B7\u09BE \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE",
          items: [
            {
              title: "\u09B8\u09CD\u09AC\u09C7\u099A\u09CD\u099B\u09BE\u09B8\u09C7\u09AC\u09BE\u09AE\u09C2\u09B2\u0995 \u0995\u09BE\u099C",
              period: "",
              items: [
                { text: "\u09B8\u09BE\u09AC\u09C7\u0995 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09BF\u09A4 \u09B8\u09BF\u0986\u09B0, \u09E8\u09AC\u099B\u09B0, \u0987\u09B8\u09B2\u09BE\u09AE\u09C0 \u09AC\u09BF\u09B6\u09CD\u09AC\u09AC\u09BF\u09A6\u09CD\u09AF\u09BE\u09B2\u09DF, \u0995\u09C1\u09B7\u09CD\u099F\u09BF\u09DF\u09BE\u0964", iconClass: "fas fa-users", href: "https://iu.ac.bd", linkLabel: "\u09AD\u09BF\u099C\u09BF\u099F" },
                { text: "\u09B8\u09BE\u09AC\u09C7\u0995 \u09AA\u09B0\u09BF\u099A\u09BE\u09B2\u0995, \u09AC\u09CD\u09AF\u09A4\u09BF\u0995\u09CD\u09B0\u09AE \u09B8\u09BE\u09B9\u09BF\u09A4\u09CD\u09AF \u09B8\u09BE\u0982\u09B8\u09CD\u0995\u09C3\u09A4\u09BF\u0995 \u099C\u09CB\u099F, \u0987\u09AC\u09BF\u0964", iconClass: "fas fa-masks-theater", href: "https://web.facebook.com/betikrom87", linkLabel: "\u09AD\u09BF\u099C\u09BF\u099F" },
                { text: "\u09B8\u09BE\u09AC\u09C7\u0995 \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0\u09C0\u09DF \u09B8\u09A6\u09B8\u09CD\u09AF, \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6 \u0987\u09B8\u09B2\u09BE\u09AE\u09C0 \u099B\u09BE\u09A4\u09CD\u09B0\u09B6\u09BF\u09AC\u09BF\u09B0, \u09A2\u09BE\u0995\u09BE\u0964", iconClass: "fas fa-shield-halved", href: "https://shibir.org.bd", linkLabel: "\u09AD\u09BF\u099C\u09BF\u099F" }
              ]
            },
            { title: "\u0997\u09BE\u09A8", items: [{ text: "SATV, ETV, Channel 9-\u098F \u0997\u09BE\u09A8 \u09AA\u09B0\u09BF\u09AC\u09C7\u09B6\u09A8 \u0995\u09B0\u09C7\u099B\u09C7\u09A8", iconClass: "fas fa-music" }] },
            { title: "\u0985\u09AD\u09BF\u09A8\u09DF", period: "2018", items: [{ text: "\u098F\u0995\u099F\u09BF \u09A8\u09BE\u099F\u0995\u09C7 \u0985\u09AD\u09BF\u09A8\u09DF \u0995\u09B0\u09C7\u099B\u09C7\u09A8 \u098F\u09AC\u0982 \u099C\u09BE\u09A4\u09C0\u09DF \u09AA\u09B0\u09CD\u09AF\u09BE\u09DF\u09C7 \u09E8\u09DF \u09B9\u09DF\u09C7\u099B\u09C7\u09A8\u0964", iconClass: "fas fa-film" }] },
            { title: "\u09AA\u09C1\u09B0\u09B8\u09CD\u0995\u09BE\u09B0", period: "2012", items: [{ text: "\u0995\u09AC\u09BF\u09A4\u09BE \u0986\u09AC\u09C3\u09A4\u09CD\u09A4\u09BF\u09A4\u09C7 \u099C\u09BE\u09A4\u09C0\u09DF \u09AA\u09B0\u09CD\u09AF\u09BE\u09DF\u09C7 \u09E8\u09DF \u09B8\u09CD\u09A5\u09BE\u09A8 \u0985\u09B0\u09CD\u099C\u09A8 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964", iconClass: "fas fa-award" }] }
          ]
        },
        hobbies: {
          title: "\u09B6\u0996 \u0993 \u0986\u0997\u09CD\u09B0\u09B9",
          items: [
            ["fas fa-masks-theater", "\u09B8\u09BE\u0982\u09B8\u09CD\u0995\u09C3\u09A4\u09BF\u0995 \u09B8\u099A\u09C7\u09A4\u09A8\u09A4\u09BE (\u0997\u09BE\u09A8, \u0985\u09AD\u09BF\u09A8\u09DF, \u0997\u09C0\u09A4\u09B0\u099A\u09A8\u09BE \u0987\u09A4\u09CD\u09AF\u09BE\u09A6\u09BF)\u0964"],
            ["fas fa-lightbulb", "\u0986\u0987\u09A1\u09BF\u09DF\u09BE \u0989\u09A8\u09CD\u09A8\u09DF\u09A8 \u0993 \u0985\u09AA\u09CD\u099F\u09BF\u09AE\u09BE\u0987\u099C\u09C7\u09B6\u09A8\u0964"],
            ["fas fa-laptop-medical", "\u09AA\u09CD\u09B0\u09AF\u09C1\u0995\u09CD\u09A4\u09BF\u0997\u09A4 \u09A6\u0995\u09CD\u09B7\u09A4\u09BE \u09A6\u09BF\u09DF\u09C7 \u0985\u09A8\u09CD\u09AF\u0995\u09C7 \u09B8\u09B9\u09BE\u09DF\u09A4\u09BE \u0995\u09B0\u09BE\u0964"]
          ]
        },
        expectation: {
          title: "\u09AA\u09BE\u09A4\u09CD\u09B0\u09C0\u09B0 \u0995\u09BE\u099B\u09C7 \u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B6\u09BE",
          items: [
            { iconClass: "fas fa-mosque", title: "\u09A7\u09B0\u09CD\u09AE\u09C0\u09DF \u0985\u09A8\u09C1\u09B6\u09C0\u09B2\u09A8", text: "\u09B9\u09BF\u099C\u09BE\u09AC \u0993 \u09A8\u09BF\u0995\u09BE\u09AC \u09AA\u09BE\u09B2\u09A8\u0995\u09BE\u09B0\u09C0, \u09AE\u09BE\u09B9\u09B0\u09BE\u09AE-\u09A8\u09A8 \u09AE\u09BE\u09B9\u09B0\u09BE\u09AE \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7 \u09B8\u099A\u09C7\u09A4\u09A8 \u098F\u0995\u099C\u09A8 \u09AA\u09CD\u09B0\u09CD\u09AF\u09BE\u0995\u099F\u09BF\u09B8\u09BF\u0982 \u09AE\u09C1\u09B8\u09B2\u09BF\u09AE\u09BE\u09B9\u0964" },
            { iconClass: "fas fa-user-shield", title: "\u099A\u09B0\u09BF\u09A4\u09CD\u09B0", text: "\u09B6\u09BF\u0995\u09CD\u09B7\u09BF\u09A4 \u0993 \u0986\u099A\u09BE\u09B0-\u0986\u099A\u09B0\u09A3\u09C7 \u09AE\u09BE\u09B0\u09CD\u099C\u09BF\u09A4\u0964" },
            { iconClass: "fas fa-house", title: "\u09AA\u09BE\u09B0\u09BF\u09AC\u09BE\u09B0\u09BF\u0995 \u09AD\u09C2\u09AE\u09BF\u0995\u09BE", text: "\u09AA\u09BE\u09B0\u09BF\u09AC\u09BE\u09B0\u09BF\u0995 \u09A6\u09BE\u09DF\u09BF\u09A4\u09CD\u09AC \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7 \u09B8\u099A\u09C7\u09A4\u09A8\u0964" },
            { iconClass: "fas fa-heart", title: "\u099C\u09C0\u09AC\u09A8\u09A7\u09BE\u09B0\u09BE", text: "\u09AA\u09B0\u09BF\u09AC\u09BE\u09B0 \u0993 \u0987\u09B8\u09B2\u09BE\u09AE\u09BF\u0995 \u099C\u09C0\u09AC\u09A8\u09A7\u09BE\u09B0\u09BE\u09DF \u09AE\u09A8\u09CB\u09AF\u09CB\u0997\u09C0\u0964" },
            { iconClass: "fas fa-palette", title: "\u09AA\u099B\u09A8\u09CD\u09A6\u09C7\u09B0 \u0997\u09BE\u09DF\u09C7\u09B0 \u09B0\u0982", text: "\u09AE\u09BE\u099D\u09BE\u09B0\u09BF/\u09AB\u09B0\u09CD\u09B8\u09BE (\u09A8\u09AE\u09A8\u09C0\u09DF)\u0964" },
            { iconClass: "fas fa-briefcase", title: "\u09AA\u09C7\u09B6\u09BE", text: "\u09AA\u09C7\u09B6\u09BE \u09AC\u09BE\u09A7\u09CD\u09AF\u09A4\u09BE\u09AE\u09C2\u09B2\u0995 \u09A8\u09DF; \u09AA\u09B0\u09BF\u09AC\u09BE\u09B0\u09AE\u09C1\u0996\u09C0 \u0987\u09B8\u09B2\u09BE\u09AE\u09BF\u0995 \u099C\u09C0\u09AC\u09A8\u09A7\u09BE\u09B0\u09BE\u0995\u09C7 \u0985\u0997\u09CD\u09B0\u09BE\u09A7\u09BF\u0995\u09BE\u09B0 \u09A6\u09C7\u0993\u09DF\u09BE \u09B9\u09AC\u09C7\u0964" }
          ]
        },
        contact: {
          title: "\u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0993 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE\u09A8",
          mapButton: "Google Maps-\u098F \u09A6\u09C7\u0996\u09C1\u09A8",
          permanentAddressValue: "Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat",
          blocks: [
            { iconClass: "fas fa-user", label: "\u09A8\u09BE\u09AE", value: "\u09AE\u09CB \u09AE\u09BE\u09B9\u09AC\u09C1\u09AC\u09C1\u09B0 \u09B0\u09B9\u09AE\u09BE\u09A8" },
            { iconClass: "fas fa-envelope", label: "\u0987\u09AE\u09C7\u0987\u09B2", value: "bbdmahbub@gmail.com", href: "mailto:bbdmahbub@gmail.com" },
            { iconClass: "fab fa-whatsapp", label: "\u09B9\u09CB\u09DF\u09BE\u099F\u09B8\u0985\u09CD\u09AF\u09BE\u09AA", value: "+\u09EE\u09EE\u09E6\u09E7\u09EF\u09E7\u09ED\u09E8\u09EC\u09ED\u09EC\u09E6\u09ED", href: "https://wa.me/8801917267607" },
            { iconClass: "fas fa-home", label: "\u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE", value: "\u09B9\u09BE\u09A4\u09BF\u09B0\u099D\u09BF\u09B2, \u09A2\u09BE\u0995\u09BE, \u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6" },
            { iconClass: "fas fa-map-marker-alt", label: "\u09B8\u09CD\u09A5\u09BE\u09AF\u09BC\u09C0 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE", value: "\u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09C1\u09A4\u09BE\u09B2\u09A1\u09BC\u09C0, \u099C\u09CB\u09AE\u09BE\u09A6\u09CD\u09A6\u09BE\u09B0\u09AA\u09BE\u09A1\u09BC\u09BE, \u09AE\u09CB\u09B0\u09C7\u09B2\u0997\u099E\u09CD\u099C, \u09AC\u09BE\u0997\u09C7\u09B0\u09B9\u09BE\u099F", mapHref: permanentAddressMapHref }
          ]
        },
        dua: {
          title: "\u09B6\u09C7\u09B7 \u0995\u09A5\u09BE \u0993 \u09A6\u09CB\u0986",
          meanings: [
            "\u09A4\u09CB\u09AE\u09BE\u09A6\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09AF\u09BE\u09B0\u09BE \u0985\u09AC\u09BF\u09AC\u09BE\u09B9\u09BF\u09A4 \u098F\u09AC\u0982 \u09A4\u09CB\u09AE\u09BE\u09A6\u09C7\u09B0 \u09A6\u09BE\u09B8-\u09A6\u09BE\u09B8\u09C0\u09A6\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u09AF\u09BE\u09B0\u09BE \u09B8\u09CE\u0995\u09B0\u09CD\u09AE\u09AA\u09B0\u09BE\u09AF\u09BC\u09A3, \u09A4\u09BE\u09A6\u09C7\u09B0 \u09AC\u09BF\u09AC\u09BE\u09B9 \u09A6\u09BE\u0993\u0964 \u09A4\u09BE\u09B0\u09BE \u0985\u09AD\u09BE\u09AC\u09C0 \u09B9\u09B2\u09C7 \u0986\u09B2\u09CD\u09B2\u09BE\u09B9 \u09A8\u09BF\u099C \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9\u09C7 \u09A4\u09BE\u09A6\u09C7\u09B0\u0995\u09C7 \u0985\u09AD\u09BE\u09AC\u09AE\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09AC\u09C7\u09A8\u0964 \u0986\u09B2\u09CD\u09B2\u09BE\u09B9 \u09AA\u09CD\u09B0\u09BE\u099A\u09C1\u09B0\u09CD\u09AF\u09AE\u09AF\u09BC, \u09B8\u09B0\u09CD\u09AC\u099C\u09CD\u099E\u0964",
            "\u09B9\u09C7 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B0\u09AC, \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B8\u09CD\u09A4\u09CD\u09B0\u09C0 \u0993 \u09B8\u09A8\u09CD\u09A4\u09BE\u09A8\u09A6\u09C7\u09B0\u0995\u09C7 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u099A\u09CB\u0996\u09C7\u09B0 \u09B6\u09C0\u09A4\u09B2\u09A4\u09BE \u09A6\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8 \u098F\u09AC\u0982 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0\u0995\u09C7 \u09AE\u09C1\u09A4\u09CD\u09A4\u09BE\u0995\u09C0\u09A6\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0986\u09A6\u09B0\u09CD\u09B6 \u09AC\u09BE\u09A8\u09BE\u09A8\u0964",
            "\u09B9\u09C7 \u09B0\u09AC, \u0986\u09AE\u09BE\u0995\u09C7 \u09A8\u09C7\u0995\u0995\u09BE\u09B0\u09A6\u09C7\u09B0 \u098F\u0995\u099C\u09A8 \u09A6\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8\u0964",
            "\u09B9\u09C7 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u09B0\u09AC, \u0986\u09AA\u09A8\u09BF \u0986\u09AE\u09BE\u09A6\u09C7\u09B0\u0995\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u0995\u09CD\u09B7 \u09A5\u09C7\u0995\u09C7 \u09B0\u09B9\u09AE\u09A4 \u09A6\u09BF\u09A8 \u098F\u09AC\u0982 \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u0995\u09BE\u099C\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09B8\u09A0\u09BF\u0995 \u09AA\u09A5 \u09A8\u09BF\u09B0\u09CD\u09A7\u09BE\u09B0\u09A3 \u0995\u09B0\u09C7 \u09A6\u09BF\u09A8\u0964"
          ],
          references: [
            "-\u09B8\u09C2\u09B0\u09BE \u09A8\u09C2\u09B0 : \u0986\u09AF\u09BC\u09BE\u09A4 - \u09E9\u09E8",
            "-\u09B8\u09C2\u09B0\u09BE \u0986\u09B2-\u09AB\u09C1\u09B0\u0995\u09BE\u09A8 : \u0986\u09DF\u09BE\u09A4 - \u09ED\u09EA",
            "-\u09B8\u09C2\u09B0\u09BE \u0986\u09B8-\u09B8\u09BE\u09AB\u09AB\u09BE\u09A4 : \u0986\u09AF\u09BC\u09BE\u09A4 - \u09E7\u09E6\u09E6",
            "-\u09B8\u09C2\u09B0\u09BE \u0995\u09BE\u09B9\u09AB\u09CD : \u0986\u09AF\u09BC\u09BE\u09A4 - \u09E7\u09E6"
          ],
          closing: "\u0986\u09AE\u09C0\u09A8 \u0987\u09DF\u09BE \u09B0\u09AC\u09CD\u09AC\u09BE\u09B2 \u0986\u09B2\u09BE\u09AE\u09BF\u09A8\u0964"
        }
      }
    };
    const hasSpeechRecognitionSupport = typeof window !== "undefined" && (typeof window.SpeechRecognition === "function" || typeof window.webkitSpeechRecognition === "function");
    const touchVoiceVerificationTimestamp = () => {
      try {
        window.localStorage.setItem(voiceVerificationStorageKey, String(Date.now()));
      } catch (error) {
      }
    };
    const markBismillahIntroSeen = () => {
      try {
        window.localStorage.setItem(bismillahIntroSeenStorageKey, "true");
      } catch (error) {
      }
    };
    const hasSeenBismillahIntro = () => {
      try {
        return window.localStorage.getItem(bismillahIntroSeenStorageKey) === "true";
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
      if (typeof document === "undefined") return;
      const photoAssets = Object.values(translations).flatMap((translation) => translation.gallery.photos.map(({ src }) => src));
      const audioAssets = [
        bismillahToneSrc,
        withCvCacheVersion(encodeURI("assets/audio/jodi-kotha-dao-bondhu.mp3")),
        withCvCacheVersion(encodeURI("assets/audio/rasuler-simahin-valobasha.mp3")),
        withCvCacheVersion(encodeURI("assets/audio/khadijar-moto-jibon-goro.mp3"))
      ];
      const preloadAssets = [
        ...photoAssets.map((href) => ({ href, as: "image" })),
        ...audioAssets.map((href) => ({ href, as: "audio" }))
      ];
      preloadAssets.forEach(({ href, as }) => {
        if (document.querySelector(`link[data-cv-preload="${href}"]`)) return;
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = href;
        link.as = as;
        link.setAttribute("data-cv-preload", href);
        if (as === "audio") {
          link.type = "audio/mpeg";
        }
        document.head.appendChild(link);
      });
      Array.from(new Set(photoAssets)).forEach((src) => {
        const image = new Image();
        image.decoding = "async";
        image.src = src;
      });
      if (typeof window !== "undefined" && typeof window.Audio === "function") {
        Array.from(new Set(audioAssets)).forEach((src) => {
          try {
            const audio = new window.Audio();
            audio.preload = "auto";
            audio.src = src;
            audio.load();
          } catch (error) {
          }
        });
      }
    };
    const getInitialLanguage = () => {
      try {
        const storedLanguage = window.localStorage.getItem("bbdMahbubLanguage");
        if (storedLanguage && translations[storedLanguage]) {
          return storedLanguage;
        }
      } catch (error) {
      }
      return "bn";
    };
    const arabicIndicDigits = ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"];
    const arabicNumberSkipKeys = /* @__PURE__ */ new Set([
      "src",
      "href",
      "institutionHref",
      "mapHref",
      "iconClass",
      "className",
      "code",
      "shortLabel",
      "locale",
      "dir"
    ]);
    const localizeArabicDigits = (value) => value.replace(/(\d)\.(\d)/g, "$1\u066B$2").replace(/(\d),(\d)/g, "$1\u066C$2").replace(/\d/g, (digit) => arabicIndicDigits[Number(digit)]).replace(/%/g, "\u066A");
    const localizeArabicDisplayValue = (value, key = "") => {
      if (typeof value === "string") {
        return arabicNumberSkipKeys.has(key) ? value : localizeArabicDigits(value);
      }
      if (typeof value === "function") {
        return (...args) => {
          const result = value(...args);
          return typeof result === "string" ? localizeArabicDigits(result) : result;
        };
      }
      if (Array.isArray(value)) {
        return value.map((item) => localizeArabicDisplayValue(item));
      }
      if (value && typeof value === "object") {
        return Object.fromEntries(
          Object.entries(value).map(([entryKey, entryValue]) => [entryKey, localizeArabicDisplayValue(entryValue, entryKey)])
        );
      }
      return value;
    };
    const ltrNumberRunPattern = /[+\-]?[0-9٠-٩]+(?:[\s.,٫٬/:()'"%-]*[0-9٠-٩]+)*(?:\s*(?:٪|%|KGs?|kg|years?|Years?))?/g;
    const [language, setLanguage] = React.useState(getInitialLanguage);
    const selectedTranslation = translations[language] || translations.en;
    const copy = language === "ar" ? localizeArabicDisplayValue(selectedTranslation) : selectedTranslation;
    const isRtl = selectedTranslation.dir === "rtl";
    const introVoiceHint = hasSpeechRecognitionSupport ? copy.voice.tapToStart : copy.voice.browserNoSupport;
    const sectionIcons = {
      personal: iconProfile,
      family: iconFamily,
      education: iconEducation,
      work: iconWork
    };
    const menuItems = [
      ["profile-top", copy.menu.profile],
      ["gallery-section", copy.menu.gallery],
      ["personal-section", copy.menu.personal],
      ["work-section", copy.menu.work],
      ["language-section", copy.menu.language],
      ["education-section", copy.menu.education],
      ["training-section", copy.menu.training],
      ["activities-section", copy.menu.activities],
      ["hobbies-section", copy.menu.hobbies],
      ["contact-section", copy.menu.contact],
      ["dua-section", copy.menu.dua]
    ];
    const isKnownSectionId = (sectionId) => menuItems.some(([id]) => id === sectionId);
    const getSavedActiveSection = () => {
      const hashId = window.location.hash.replace("#", "");
      if (isKnownSectionId(hashId)) return hashId;
      try {
        const storedSection = window.localStorage.getItem(activeSectionStorageKey);
        if (isKnownSectionId(storedSection)) return storedSection;
      } catch (error) {
      }
      return menuItems[0][0];
    };
    const [activeSection, setActiveSection] = React.useState(() => {
      return getSavedActiveSection();
    });
    const [isIntroPopupOpen, setIsIntroPopupOpen] = React.useState(false);
    const [isBismillahLoadingOpen, setIsBismillahLoadingOpen] = React.useState(true);
    const [isVoiceListening, setIsVoiceListening] = React.useState(false);
    const [voiceUiState, setVoiceUiState] = React.useState("idle");
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
    const voiceStopReasonRef = React.useRef("idle");
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
    const photoPointerCacheRef = React.useRef(/* @__PURE__ */ new Map());
    const photoGestureRef = React.useRef(null);
    const detailGroups = {
      personal: copy.personalDetails.filter(({ iconClass }) => ![
        "fas fa-ring",
        "fas fa-palette",
        "fas fa-ruler-combined"
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
    const voicePuzzleSeparatorText = language === "bn" ? "\u0985\u09A5\u09AC\u09BE" : language === "ar" ? "\u0623\u0648" : "OR";
    const selectedPuzzlePieces = selectedPuzzleIndexes.map((pieceIndex) => ({
      index: pieceIndex,
      text: activePuzzleSet.pieces[pieceIndex]
    }));
    const availablePuzzlePieces = activePuzzleSet.pieces.map((text, index) => ({ text, index })).filter(({ index }) => !selectedPuzzleIndexes.includes(index));
    const trainingIconClasses = [
      "fas fa-medal",
      "fas fa-briefcase",
      "fas fa-laptop-code",
      "fas fa-desktop",
      "fas fa-shield-halved",
      "fas fa-file-word",
      "fas fa-video",
      "fas fa-lock",
      "fas fa-lightbulb"
    ];
    const languageDetailIconClass = "fas fa-language";
    const educationDetailIconClass = "fas fa-graduation-cap";
    const activityDetailIconClass = "fas fa-star";
    const availableLanguageOptions = languageOptions.filter(({ code }) => code !== language);
    const renderPuzzleTitle = () => {
      if (language === "en") {
        return /* @__PURE__ */ React.createElement(React.Fragment, null, "MATCH ", /* @__PURE__ */ React.createElement("span", { className: "intro-popup-puzzle-title-mark" }, "BISMILLAH"), " CORRECTLY");
      }
      if (language === "bn") {
        return /* @__PURE__ */ React.createElement(React.Fragment, null, "\u09B8\u09A0\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 ", /* @__PURE__ */ React.createElement("span", { className: "intro-popup-puzzle-title-mark" }, "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2\u09CD\u09B2\u09BE\u09B9\u09CD"), " \u09AE\u09BF\u09B2\u09BE\u09A8");
      }
      if (language === "ar") {
        return /* @__PURE__ */ React.createElement(React.Fragment, null, "\u0631\u064E\u062A\u0651\u0650\u0628\u0652 ", /* @__PURE__ */ React.createElement("span", { className: "intro-popup-puzzle-title-mark" }, "\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064E\u0647\u0650"), " \u0628\u0650\u0634\u064E\u0643\u0652\u0644\u064D \u0635\u064E\u062D\u0650\u064A\u062D\u064D");
      }
      return activePuzzleSet.title;
    };
    const renderTextWithLtrNumbers = (text) => {
      if (!isRtl || typeof text !== "string") return text;
      const parts = [];
      let lastIndex = 0;
      text.replace(ltrNumberRunPattern, (match, offset) => {
        if (offset > lastIndex) {
          parts.push(text.slice(lastIndex, offset));
        }
        parts.push(
          /* @__PURE__ */ React.createElement("bdi", { className: "bidi-ltr-number", dir: "ltr", key: `${match}-${offset}` }, match)
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
      if (typeof value === "string" && value === permanentAddressValue) {
        return /* @__PURE__ */ React.createElement(React.Fragment, null, renderTextWithLtrNumbers(value), /* @__PURE__ */ React.createElement("div", { className: "address-actions" }, /* @__PURE__ */ React.createElement("a", { className: "map-link-button", href: permanentAddressMapHref, target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-location-arrow", "aria-hidden": "true" }), copy.contact.mapButton)));
      }
      if (typeof value !== "string") {
        return value;
      }
      if (!value.startsWith(copy.common.latePrefix)) {
        return renderTextWithLtrNumbers(value);
      }
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "detail-inline-badge late-inline-badge" }, copy.common.lateBadge), " ", renderTextWithLtrNumbers(value.slice(copy.common.latePrefix.length)));
    };
    const centerMenuLink = (id, behavior = "smooth") => {
      const menuLinks = menuLinksRef.current;
      if (!menuLinks) return;
      const targetLink = menuLinks.querySelector(`[data-menu-id="${id}"]`);
      if (!targetLink) return;
      targetLink.scrollIntoView({
        behavior,
        block: "nearest",
        inline: "center"
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
      setPhotoViewerTransform((currentTransform) => currentTransform.scale > 1 ? { scale: 1, x: 0, y: 0 } : { scale: 2.4, x: 0, y: 0 });
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
          type: "pinch",
          startDistance: getPhotoPointerDistance(pointers[0], pointers[1]) || 1,
          startCenter: getPhotoPointerCenter(pointers[0], pointers[1]),
          startTransform: photoViewerTransform
        };
        return;
      }
      photoGestureRef.current = {
        type: "pan",
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
      if (pointers.length >= 2 && gesture.type === "pinch") {
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
      if (pointers.length === 1 && gesture.type === "pan") {
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
          type: "pan",
          startPointer: pointers[0],
          startTransform: photoViewerTransform
        };
        return;
      }
      photoGestureRef.current = null;
    };
    React.useEffect(() => {
      centerMenuLink(activeSection, hasCenteredMenuRef.current ? "smooth" : "auto");
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
          behavior: "auto",
          block: "start"
        });
      });
    }, [activeSection, isIntroPopupOpen, isBismillahLoadingOpen]);
    React.useEffect(() => {
      if (!hasRestoredActiveSectionRef.current) return;
      try {
        window.localStorage.setItem(activeSectionStorageKey, activeSection);
      } catch (error) {
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
      if (!document.body.classList.contains("has-entered-biodata")) {
        document.body.classList.add("has-entered-biodata");
        window.dispatchEvent(new Event("bbdMahbub:enter-biodata"));
      }
    }, [isIntroPopupOpen, isBismillahLoadingOpen]);
    React.useEffect(() => {
      if (isIntroPopupOpen) return void 0;
      if (!hasRecentVoiceVerification()) return void 0;
      const refreshVerificationActivity = () => {
        const now = Date.now();
        if (now - lastVoiceVerificationTouchRef.current < 6e4) return;
        lastVoiceVerificationTouchRef.current = now;
        touchVoiceVerificationTimestamp();
      };
      const activityEvents = ["pointerdown", "keydown", "scroll", "touchstart"];
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
        window.localStorage.setItem("bbdMahbubLanguage", language);
      } catch (error) {
      }
      document.documentElement.lang = selectedCopy.locale;
      document.documentElement.dir = selectedCopy.dir;
      document.body.classList.toggle("is-rtl-language", isRtl);
      document.title = selectedCopy.meta.title;
      const updateMetaContent = (selector, value) => {
        const element = document.querySelector(selector);
        if (element) {
          element.setAttribute("content", value);
        }
      };
      updateMetaContent('meta[name="description"]', selectedCopy.meta.description);
      updateMetaContent('meta[property="og:title"]', selectedCopy.meta.title);
      updateMetaContent('meta[property="og:description"]', selectedCopy.meta.description);
      updateMetaContent('meta[name="twitter:title"]', selectedCopy.meta.title);
      updateMetaContent('meta[name="twitter:description"]', selectedCopy.meta.description);
      window.dispatchEvent(new CustomEvent("bbdMahbub:languagechange", {
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
        const menu = document.querySelector(".top-menu");
        if (menu) {
          const stickyTop = parseFloat(window.getComputedStyle(menu).top) || 0;
          document.documentElement.style.setProperty("--menu-offset", `${menu.offsetHeight + stickyTop}px`);
        }
        window.dispatchEvent(new Event("bbdMahbub:menu-resize"));
        if (isIntroPopupOpen || isBismillahLoadingOpen) return;
        if (!hasRestoredActiveSectionRef.current) return;
        const target = document.getElementById(activeSection);
        if (!target) return;
        target.scrollIntoView({
          behavior: "auto",
          block: "start"
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
        const menu = document.querySelector(".top-menu");
        const menuHeight = menu ? menu.getBoundingClientRect().height : 0;
        const menuTop = menu ? parseFloat(window.getComputedStyle(menu).top) || 0 : 0;
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
        setActiveSection((currentActiveSection) => currentActiveSection === nextActiveSection ? currentActiveSection : nextActiveSection);
        ticking = false;
      };
      const scheduleActiveSectionUpdate = () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      };
      updateActiveSection();
      window.addEventListener("scroll", scheduleActiveSectionUpdate, { passive: true });
      window.addEventListener("resize", scheduleActiveSectionUpdate);
      window.addEventListener("hashchange", scheduleActiveSectionUpdate);
      return () => {
        window.removeEventListener("scroll", scheduleActiveSectionUpdate);
        window.removeEventListener("resize", scheduleActiveSectionUpdate);
        window.removeEventListener("hashchange", scheduleActiveSectionUpdate);
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
        }, 3e3);
      };
      const handleFirstPointerDown = () => {
        showLanguageRowHint();
      };
      const handleFirstPointerMove = (event) => {
        if (event.pointerType !== "mouse") return;
        showLanguageRowHint();
      };
      window.addEventListener("pointerdown", handleFirstPointerDown, { passive: true });
      window.addEventListener("pointermove", handleFirstPointerMove, { passive: true });
      return () => {
        window.removeEventListener("pointerdown", handleFirstPointerDown);
        window.removeEventListener("pointermove", handleFirstPointerMove);
      };
    }, []);
    const handleMenuPointerDown = (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (event.pointerType === "touch") return;
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
      if (!isMenuDragging) return void 0;
      const handleWindowPointerMove = (event) => {
        handleMenuPointerMove(event);
      };
      const handleWindowPointerEnd = (event) => {
        finishMenuDrag(event);
      };
      window.addEventListener("pointermove", handleWindowPointerMove);
      window.addEventListener("pointerup", handleWindowPointerEnd);
      window.addEventListener("pointercancel", handleWindowPointerEnd);
      return () => {
        window.removeEventListener("pointermove", handleWindowPointerMove);
        window.removeEventListener("pointerup", handleWindowPointerEnd);
        window.removeEventListener("pointercancel", handleWindowPointerEnd);
      };
    }, [isMenuDragging]);
    React.useEffect(() => {
      document.body.classList.toggle("is-popup-open", isIntroPopupOpen || isBismillahLoadingOpen || Boolean(zoomedPhoto));
      return () => {
        document.body.classList.remove("is-popup-open");
      };
    }, [isIntroPopupOpen, isBismillahLoadingOpen, zoomedPhoto]);
    React.useEffect(() => {
      if (!zoomedPhoto) return void 0;
      const handlePhotoViewerKeyDown = (event) => {
        if (event.key === "Escape") {
          closePhotoViewer();
        }
      };
      window.addEventListener("keydown", handlePhotoViewerKeyDown);
      return () => {
        window.removeEventListener("keydown", handlePhotoViewerKeyDown);
      };
    }, [zoomedPhoto]);
    React.useEffect(() => {
      if (!isBismillahLoadingOpen) return void 0;
      if (hasPreloadedCvAssetsRef.current) return void 0;
      hasPreloadedCvAssetsRef.current = true;
      if (typeof window.requestIdleCallback === "function") {
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
        }
        speechRecognitionRef.current = null;
      }
    };
    const handleEnterBiodata = () => {
      if (isEnteringBiodataRef.current) return;
      isEnteringBiodataRef.current = true;
      clearSpeechRecognition();
      voiceMatchedRef.current = true;
      voiceStopReasonRef.current = "matched";
      setIsVoiceListening(false);
      setVoiceUiState("idle");
      lastVoiceVerificationTouchRef.current = Date.now();
      markBismillahIntroSeen();
      touchVoiceVerificationTimestamp();
      document.body.classList.add("has-entered-biodata");
      setIsIntroPopupOpen(false);
      window.dispatchEvent(new Event("bbdMahbub:enter-biodata"));
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
    const normalizeVoiceTranscript = (value) => value.toLowerCase().replace(/[\u064B-\u065F\u0670]/g, "").replace(/[\s.,/#!$%^&*;:{}=\-_`~()"'?؟،]+/g, "");
    const matchesBismillahPhrase = (value) => {
      const normalizedValue = normalizeVoiceTranscript(value);
      if (!normalizedValue) return false;
      const fallbackFragments = [
        "bismil",
        "bismilla",
        "bismillah",
        "bismillahir",
        "besmillah",
        "bisimillah",
        "\u09AC\u09BF\u09B8\u09AE\u09BF\u09B2",
        "\u0628\u0633\u0645\u0627\u0644\u0644\u0647",
        "\u0628\u0633\u0645\u0627\u0644\u0644\u0647\u0627\u0644\u0631\u062D\u0645\u0646"
      ];
      return acceptedBismillahPhrases.some((phrase) => normalizedValue.includes(normalizeVoiceTranscript(phrase))) || fallbackFragments.some((fragment) => normalizedValue.includes(normalizeVoiceTranscript(fragment)));
    };
    const stopBismillahVoiceCheck = () => {
      const recognition = speechRecognitionRef.current;
      if (!recognition) return;
      if (voiceStopReasonRef.current === "listening") {
        voiceStopReasonRef.current = "cancelled";
      }
      clearRecognitionTimer();
      try {
        recognition.stop();
      } catch (error) {
      }
    };
    const startBismillahVoiceCheck = () => {
      const StandardSpeechRecognition = window.SpeechRecognition;
      const SpeechRecognition = StandardSpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        setVoiceUiState("idle");
        setVoicePrompt(voiceCopy.browserNoSupport);
        return;
      }
      if (isVoiceListening || speechRecognitionRef.current || isPreparingVoiceRef.current) return;
      isPreparingVoiceRef.current = true;
      setVoiceUiState("preparing");
      setVoicePrompt(voiceCopy.starting);
      const recognition = new SpeechRecognition();
      speechRecognitionRef.current = recognition;
      voiceMatchedRef.current = false;
      voiceStopReasonRef.current = "listening";
      recognition.lang = "en-US";
      recognition.interimResults = true;
      recognition.maxAlternatives = 5;
      recognition.continuous = false;
      recognition.onstart = () => {
        if (speechRecognitionRef.current !== recognition) return;
        isPreparingVoiceRef.current = false;
        setIsVoiceListening(true);
        setVoiceUiState("listening");
        setVoicePrompt(voiceCopy.listening);
        recognitionTimerRef.current = window.setTimeout(() => {
          if (speechRecognitionRef.current !== recognition || voiceMatchedRef.current) {
            return;
          }
          voiceStopReasonRef.current = "timeout";
          try {
            recognition.stop();
          } catch (error) {
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
        const transcript = transcriptParts.join(" ");
        const matchedBismillah = matchesBismillahPhrase(transcript);
        if (matchedBismillah) {
          voiceMatchedRef.current = true;
          voiceStopReasonRef.current = "matched";
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
        voiceStopReasonRef.current = "error";
        setIsVoiceListening(false);
        setVoiceUiState("error");
        setVoicePrompt(voiceCopy.errors[event.error] || voiceCopy.defaultError);
      };
      recognition.onend = () => {
        clearRecognitionTimer();
        isPreparingVoiceRef.current = false;
        if (speechRecognitionRef.current === recognition) {
          speechRecognitionRef.current = null;
        }
        setIsVoiceListening(false);
        setVoiceUiState(voiceStopReasonRef.current === "error" ? "error" : "idle");
        if (voiceStopReasonRef.current === "cancelled" && !voiceMatchedRef.current) {
          setVoicePrompt(introVoiceHint);
        } else if (voiceStopReasonRef.current === "timeout" && !voiceMatchedRef.current) {
          setVoicePrompt(voiceCopy.timeout);
        } else if (voiceStopReasonRef.current === "listening" && !voiceMatchedRef.current) {
          setVoicePrompt(voiceCopy.notVerified);
        }
        if (voiceStopReasonRef.current !== "matched") {
          voiceStopReasonRef.current = "idle";
        }
      };
      try {
        recognition.start();
      } catch (error) {
        speechRecognitionRef.current = null;
        clearRecognitionTimer();
        isPreparingVoiceRef.current = false;
        voiceStopReasonRef.current = "error";
        setIsVoiceListening(false);
        setVoiceUiState("error");
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
      if (typeof window === "undefined" || typeof window.Audio !== "function") {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        try {
          let finish2 = function() {
            if (hasResolved) return;
            hasResolved = true;
            window.clearTimeout(fallbackTimer);
            audio.removeEventListener("ended", finish2);
            audio.removeEventListener("error", finish2);
            resolve(true);
          };
          var finish = finish2;
          const audio = new window.Audio(bismillahToneSrc);
          let hasResolved = false;
          const fallbackTimer = window.setTimeout(finish2, 6500);
          audio.volume = 0.3;
          audio.currentTime = 0;
          audio.addEventListener("ended", finish2, { once: true });
          audio.addEventListener("error", finish2, { once: true });
          const playPromise = audio.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {
              if (hasResolved) return;
              hasResolved = true;
              window.clearTimeout(fallbackTimer);
              audio.removeEventListener("ended", finish2);
              audio.removeEventListener("error", finish2);
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
      setVoiceUiState("idle");
      setVoicePrompt(activePuzzleSet.success);
      const successSound = shouldPlaySound ? playBismillahSound() : Promise.resolve();
      successSound.then(() => {
        handleEnterBiodata();
      });
    };
    const handleBismillahLanguageSelect = (nextLanguage) => {
      if (!isBismillahLoadingOpen) return;
      setLanguage(nextLanguage);
      setIsLanguageRowCollapsed(true);
    };
    const handleBismillahViewBiodata = () => {
      if (!isBismillahLoadingOpen) return;
      if (isBismillahLoadingClickInProgressRef.current) return;
      isBismillahLoadingClickInProgressRef.current = true;
      handleEnterBiodata();
      setIsBismillahLoadingOpen(false);
    };
    const handlePuzzlePieceSelect = (pieceIndex) => {
      if (isPuzzleSolved || selectedPuzzleIndexes.includes(pieceIndex)) return;
      const nextIndexes = [...selectedPuzzleIndexes, pieceIndex];
      setSelectedPuzzleIndexes(nextIndexes);
      if (nextIndexes.length !== activePuzzleSet.answer.length) return;
      const answerText = nextIndexes.map((index) => activePuzzleSet.pieces[index]).join("");
      const targetText = activePuzzleSet.answer.join("");
      if (answerText === targetText) {
        completeBismillahPuzzle();
        return;
      }
      setVoiceUiState("error");
      setVoicePrompt(voiceCopy.notVerified);
    };
    const handlePuzzlePieceRemove = (pieceIndex) => {
      if (isPuzzleSolved) return;
      setSelectedPuzzleIndexes((currentIndexes) => currentIndexes.filter((index) => index !== pieceIndex));
      setVoiceUiState("idle");
      setVoicePrompt(introVoiceHint);
    };
    const handlePuzzleReset = () => {
      if (isPuzzleSolved) return;
      setSelectedPuzzleIndexes([]);
      setVoiceUiState("idle");
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
        behavior: "smooth",
        block: "start"
      });
      window.history.replaceState(null, "", `#${id}`);
    };
    const isVoiceError = hasSpeechRecognitionSupport && voiceUiState === "error";
    const isVoicePreparing = hasSpeechRecognitionSupport && voiceUiState === "preparing";
    const showVoiceMicButton = hasSpeechRecognitionSupport;
    const voiceStatusIconClass = !hasSpeechRecognitionSupport ? "fa-circle-info" : isVoiceError ? "fa-triangle-exclamation" : isVoicePreparing ? "fa-microphone-lines" : isVoiceListening ? "fa-wave-square" : "fa-microphone-lines";
    const voiceSupportNote = !hasSpeechRecognitionSupport ? voiceCopy.supportNoSupport : voiceUiState === "preparing" ? voiceCopy.supportPreparing : voiceUiState === "error" ? voiceCopy.supportErrorGeneral : isVoiceListening ? voiceCopy.supportListening : voiceCopy.supportIdle;
    const renderLanguageMenu = (rowId) => /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `top-menu-language-shell${isLanguageRowCollapsed ? " is-collapsed" : ""}`
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "top-menu-language-row",
          id: rowId
        },
        /* @__PURE__ */ React.createElement("div", { className: "music-player-language", role: "group", "aria-label": copy.navigation.languageSwitcherLabel }, availableLanguageOptions.map((option) => /* @__PURE__ */ React.createElement(
          "button",
          {
            type: "button",
            key: option.code,
            className: "music-player-language-option",
            onClick: () => handleLanguageSelection(option.code)
          },
          option.nativeLabel
        )))
      ),
      /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: `top-menu-language-toggle${isLanguageRowCollapsed ? " is-collapsed" : ""}`,
          "aria-controls": rowId,
          "aria-expanded": isLanguageRowCollapsed ? "false" : "true",
          "aria-label": copy.navigation.languageSwitcherLabel,
          onClick: handleLanguageRowToggle
        },
        /* @__PURE__ */ React.createElement("i", { className: `fas ${isLanguageRowCollapsed ? "fa-chevron-down" : "fa-chevron-up"}`, "aria-hidden": "true" })
      )
    );
    return /* @__PURE__ */ React.createElement("div", { className: `app-shell language-${language}${isRtl ? " is-rtl" : ""}` }, isBismillahLoadingOpen ? /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "bismillah-loading-popup",
        role: "dialog",
        "aria-modal": "true"
      },
      /* @__PURE__ */ React.createElement("div", { className: "bismillah-loading-panel", dir: selectedTranslation.dir }, /* @__PURE__ */ React.createElement("div", { className: "bismillah-loading-mark", "data-text": popupBismillah, dir: "rtl" }, popupBismillah), /* @__PURE__ */ React.createElement("div", { className: "bismillah-loading-ayah" }, /* @__PURE__ */ React.createElement("div", { className: "bismillah-loading-ayah-text", dir: "rtl" }, duaArabicLines[0]), /* @__PURE__ */ React.createElement("div", { className: "bismillah-loading-ayah-meaning" }, copy.bismillahIntro.ayahMeaning), /* @__PURE__ */ React.createElement("div", { className: "bismillah-loading-ayah-reference" }, copy.bismillahIntro.ayahReference)), /* @__PURE__ */ React.createElement("div", { className: "bismillah-loading-language-row", dir: "ltr" }, bismillahLanguageOptions.map(({ code, nativeLabel }) => /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: `bismillah-loading-language-button is-${code}${language === code ? " is-active" : ""}`,
          onClick: () => handleBismillahLanguageSelect(code),
          "aria-pressed": language === code ? "true" : "false",
          key: code
        },
        nativeLabel
      ))), /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: `bismillah-loading-view-button is-${language}`,
          onClick: handleBismillahViewBiodata,
          dir: selectedTranslation.dir
        },
        /* @__PURE__ */ React.createElement("span", { className: "bismillah-loading-view-finger", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("i", { className: `fas ${isRtl ? "fa-hand-point-left" : "fa-hand-point-right"}` })),
        /* @__PURE__ */ React.createElement("span", null, copy.bismillahIntro.viewButton)
      ))
    ) : null, isIntroPopupOpen ? /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "intro-popup",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "intro-popup-title"
      },
      /* @__PURE__ */ React.createElement("div", { className: "intro-popup-top-language" }, renderLanguageMenu("intro-popup-language-row")),
      /* @__PURE__ */ React.createElement("div", { className: "intro-popup-panel" }, /* @__PURE__ */ React.createElement("div", { className: "intro-popup-inner" }, /* @__PURE__ */ React.createElement("div", { className: "intro-popup-bismillah" }, popupBismillah), /* @__PURE__ */ React.createElement("div", { className: "intro-popup-darud" }, popupDarud), /* @__PURE__ */ React.createElement("div", { className: "intro-popup-kicker" }, iconPrayerHands, " ", copy.intro.kicker), /* @__PURE__ */ React.createElement("h2", { className: "intro-popup-title", id: "intro-popup-title" }, copy.intro.title), /* @__PURE__ */ React.createElement("div", { className: "intro-popup-dua" }, /* @__PURE__ */ React.createElement("div", { className: "intro-popup-dua-item intro-popup-dua-arabic-item" }, /* @__PURE__ */ React.createElement("div", { className: "intro-popup-taawuz", dir: "rtl" }, /* @__PURE__ */ React.createElement("span", { className: "intro-popup-taawuz-mark", "aria-hidden": "true" }, "\u06DE"), /* @__PURE__ */ React.createElement("span", { className: "intro-popup-taawuz-text" }, popupTaawuz), /* @__PURE__ */ React.createElement("span", { className: "intro-popup-taawuz-mark", "aria-hidden": "true" }, "\u06DE")), /* @__PURE__ */ React.createElement("div", { className: "intro-popup-dua-arabic" }, duaArabicLines[3])), language !== "ar" ? /* @__PURE__ */ React.createElement("div", { className: "intro-popup-dua-item intro-popup-dua-meaning-item" }, /* @__PURE__ */ React.createElement("div", { className: "intro-popup-dua-meaning" }, copy.intro.duaMeaning), /* @__PURE__ */ React.createElement("div", { className: "intro-popup-dua-reference" }, copy.intro.duaReference)) : /* @__PURE__ */ React.createElement("div", { className: "intro-popup-dua-reference" }, copy.intro.duaReference)), /* @__PURE__ */ React.createElement("div", { className: "intro-popup-instruction" }, /* @__PURE__ */ React.createElement("div", { className: "intro-popup-section-title" }, copy.intro.instructionsTitle), /* @__PURE__ */ React.createElement("ul", { className: "intro-popup-list" }, copy.intro.instructions.map((item) => /* @__PURE__ */ React.createElement("li", { key: item }, item)))), /* @__PURE__ */ React.createElement("div", { className: "intro-popup-voice-gate" }, /* @__PURE__ */ React.createElement("div", { className: "intro-popup-voice-card" }, /* @__PURE__ */ React.createElement("div", { className: `intro-popup-voice-status${isVoiceError ? " is-error" : isVoicePreparing ? " is-preparing" : isVoiceListening ? " is-listening" : ""}` }, /* @__PURE__ */ React.createElement("i", { className: `fas ${voiceStatusIconClass}`, "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("span", null, voicePrompt)), showVoiceMicButton ? /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: `intro-popup-mic-button${voiceUiState === "error" ? " is-error" : voiceUiState === "preparing" ? " is-preparing" : isVoiceListening ? " is-listening" : ""}`,
          onClick: handleVoiceButtonClick,
          onContextMenu: (event) => event.preventDefault(),
          "aria-label": voiceUiState === "error" ? voiceCopy.micAriaRetry : isVoiceListening ? voiceCopy.micAriaStop : voiceCopy.micAriaStart
        },
        /* @__PURE__ */ React.createElement("i", { className: `fas ${voiceUiState === "error" ? "fa-microphone-slash" : voiceUiState === "preparing" ? "fa-spinner fa-spin" : isVoiceListening ? "fa-microphone-lines" : "fa-microphone"}`, "aria-hidden": "true" })
      ) : null, /* @__PURE__ */ React.createElement("div", { className: "intro-popup-support-note" }, voiceSupportNote)), /* @__PURE__ */ React.createElement("div", { className: "intro-popup-choice-separator" }, voicePuzzleSeparatorText), /* @__PURE__ */ React.createElement("div", { className: `intro-popup-puzzle${language === "en" ? " is-english" : ""}`, dir: language === "ar" ? "rtl" : "ltr" }, /* @__PURE__ */ React.createElement("div", { className: "intro-popup-puzzle-title" }, renderPuzzleTitle()), /* @__PURE__ */ React.createElement("div", { className: "intro-popup-puzzle-row" }, /* @__PURE__ */ React.createElement("div", { className: "intro-popup-puzzle-track", "aria-label": activePuzzleSet.sourceLabel }, availablePuzzlePieces.map(({ text, index }) => /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: "intro-popup-puzzle-piece",
          key: `source-${index}`,
          onClick: () => handlePuzzlePieceSelect(index),
          disabled: isPuzzleSolved
        },
        text
      )))), /* @__PURE__ */ React.createElement("div", { className: "intro-popup-puzzle-row" }, /* @__PURE__ */ React.createElement("div", { className: `intro-popup-puzzle-track is-answer${isPuzzleSolved ? " is-complete" : ""}`, "aria-label": activePuzzleSet.answerLabel }, selectedPuzzlePieces.map(({ text, index }) => /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: "intro-popup-puzzle-piece is-selected",
          key: `answer-${index}`,
          onClick: () => handlePuzzlePieceRemove(index),
          disabled: isPuzzleSolved
        },
        text
      )), Array.from({ length: activePuzzleSet.answer.length - selectedPuzzlePieces.length }).map((_, index) => /* @__PURE__ */ React.createElement(
        "span",
        {
          className: "intro-popup-puzzle-slot",
          key: `slot-${index}`,
          "aria-hidden": "true"
        }
      )))), /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: "intro-popup-puzzle-reset",
          onClick: handlePuzzleReset,
          disabled: isPuzzleSolved || selectedPuzzleIndexes.length === 0
        },
        /* @__PURE__ */ React.createElement("i", { className: "fas fa-rotate-right", "aria-hidden": "true" }),
        /* @__PURE__ */ React.createElement("span", null, activePuzzleSet.reset)
      )))))
    ) : null, zoomedPhoto ? /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "photo-viewer",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": zoomedPhoto.label,
        onClick: handlePhotoBackdropClick
      },
      /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: "photo-viewer-close",
          "aria-label": "Close photo viewer",
          onClick: closePhotoViewer
        },
        /* @__PURE__ */ React.createElement("i", { className: "fas fa-xmark", "aria-hidden": "true" })
      ),
      /* @__PURE__ */ React.createElement("div", { className: "photo-viewer-stage" }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `photo-viewer-gesture${photoViewerTransform.scale > 1 ? " is-zoomed" : ""}`,
          onPointerDown: handlePhotoPointerDown,
          onPointerMove: handlePhotoPointerMove,
          onPointerUp: finishPhotoPointer,
          onPointerCancel: finishPhotoPointer,
          onDoubleClick: handlePhotoViewerDoubleClick
        },
        /* @__PURE__ */ React.createElement(
          "img",
          {
            className: "photo-viewer-image",
            src: zoomedPhoto.src,
            alt: zoomedPhoto.alt,
            draggable: "false",
            style: {
              transform: `translate3d(${photoViewerTransform.x}px, ${photoViewerTransform.y}px, 0) scale(${photoViewerTransform.scale})`
            }
          }
        )
      ), /* @__PURE__ */ React.createElement("div", { className: "photo-viewer-caption" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-magnifying-glass-plus", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("span", null, zoomedPhoto.label)))
    ) : null, !isBismillahLoadingOpen && !isIntroPopupOpen ? /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("nav", { className: "top-menu", "aria-label": copy.navigation.sectionsAria }, /* @__PURE__ */ React.createElement("div", { className: "top-menu-language-slot" }, renderLanguageMenu("top-menu-language-row")), /* @__PURE__ */ React.createElement("div", { className: "top-menu-head" }, /* @__PURE__ */ React.createElement("div", { className: "top-menu-label" }, copy.navigation.quickJump)), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `top-menu-links${isMenuDragging ? " is-dragging" : ""}`,
        ref: menuLinksRef,
        onPointerDown: handleMenuPointerDown
      },
      menuItems.map(([id, label]) => /* @__PURE__ */ React.createElement(
        "a",
        {
          className: `top-menu-link${activeSection === id ? " is-active" : ""}`,
          href: `#${id}`,
          key: id,
          "data-menu-id": id,
          "aria-current": activeSection === id ? "page" : void 0,
          onClick: (event) => handleMenuClick(event, id)
        },
        label
      ))
    )), /* @__PURE__ */ React.createElement("div", { className: "header-banner section-anchor", id: "profile-top" }, /* @__PURE__ */ React.createElement("h1", { className: "profile-name" }, /* @__PURE__ */ React.createElement("span", { className: "profile-name-text" }, copy.profile.name)), /* @__PURE__ */ React.createElement("div", { className: "subtitle" }, copy.profile.subtitle)), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "30px" } }, /* @__PURE__ */ React.createElement("div", { className: "stats" }, /* @__PURE__ */ React.createElement("div", { className: "stat-box" }, /* @__PURE__ */ React.createElement("div", { className: "stat-value" }, iconEducation), /* @__PURE__ */ React.createElement("div", { className: "stat-label" }, copy.profile.stats.education)), /* @__PURE__ */ React.createElement("div", { className: "stat-box" }, /* @__PURE__ */ React.createElement("div", { className: "stat-value" }, iconMosque), /* @__PURE__ */ React.createElement("div", { className: "stat-label" }, copy.profile.stats.faith)))), /* @__PURE__ */ React.createElement("div", { className: "card section-anchor", id: "gallery-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-header" }, /* @__PURE__ */ React.createElement("span", { className: "section-icon" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-images", "aria-hidden": "true" })), copy.gallery.title), /* @__PURE__ */ React.createElement("div", { className: "card-content" }, /* @__PURE__ */ React.createElement("div", { className: "photo-gallery-grid" }, copy.gallery.photos.map(({ src, alt, label, featured }, idx) => /* @__PURE__ */ React.createElement(
      "figure",
      {
        className: `photo-frame${featured ? " photo-frame-featured" : ""}`,
        key: `${src}-${idx}`
      },
      /* @__PURE__ */ React.createElement("div", { className: "photo-frame-inner" }, /* @__PURE__ */ React.createElement(
        "img",
        {
          className: "photo-gallery-image",
          src,
          alt,
          loading: featured ? "eager" : "lazy"
        }
      ), /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: "photo-zoom-trigger",
          "aria-label": `Open ${label}`,
          onClick: () => openPhotoViewer({ src, alt, label })
        },
        /* @__PURE__ */ React.createElement("i", { className: "fas fa-magnifying-glass-plus", "aria-hidden": "true" })
      ), /* @__PURE__ */ React.createElement("figcaption", { className: "photo-gallery-caption" }, /* @__PURE__ */ React.createElement("span", { className: "photo-gallery-caption-icon" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-camera", "aria-hidden": "true" })), label))
    ))))), Object.entries(detailGroups).map(([group, details]) => /* @__PURE__ */ React.createElement("div", { className: "card section-anchor", id: `${group}-section`, key: group }, /* @__PURE__ */ React.createElement("div", { className: "section-header" }, /* @__PURE__ */ React.createElement("span", { className: "section-icon" }, sectionIcons[group]), copy.sectionHeaders[group]), /* @__PURE__ */ React.createElement("div", { className: "card-content" }, /* @__PURE__ */ React.createElement("div", { className: "section-item-list" }, group === "work" ? workData.map(({ title, organization, duration, iconClass }, idx) => /* @__PURE__ */ React.createElement("div", { className: "detail-row work-row section-card-item", key: idx }, /* @__PURE__ */ React.createElement("div", { className: "work-header" }, /* @__PURE__ */ React.createElement("div", { className: "work-title-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "work-title-icon" }, /* @__PURE__ */ React.createElement("i", { className: iconClass, "aria-hidden": "true" })), /* @__PURE__ */ React.createElement("div", { className: "work-title" }, renderTextWithLtrNumbers(title))), duration ? /* @__PURE__ */ React.createElement("span", { className: "badge work-duration" }, renderTextWithLtrNumbers(duration)) : null), /* @__PURE__ */ React.createElement("div", { className: "work-org" }, renderTextWithLtrNumbers(organization)))) : details.map((detail, idx) => {
      const isObjectDetail = !Array.isArray(detail);
      const label = isObjectDetail ? detail.label : detail[0];
      const value = isObjectDetail ? detail.value : detail[1];
      const iconClass = isObjectDetail ? detail.iconClass : null;
      const resolvedIconClass = iconClass || null;
      return /* @__PURE__ */ React.createElement("div", { className: "detail-row section-card-item", key: idx }, /* @__PURE__ */ React.createElement("div", { className: "detail-label" }, resolvedIconClass ? /* @__PURE__ */ React.createElement("span", { className: "detail-label-icon" }, /* @__PURE__ */ React.createElement("i", { className: resolvedIconClass, "aria-hidden": "true" })) : null, /* @__PURE__ */ React.createElement("span", null, renderTextWithLtrNumbers(label))), /* @__PURE__ */ React.createElement("div", { className: "detail-value" }, renderDetailValue(value)));
    }))))), /* @__PURE__ */ React.createElement("div", { className: "card section-anchor", id: "language-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-header" }, /* @__PURE__ */ React.createElement("span", { className: "section-icon" }, iconLanguage), copy.languages.title), /* @__PURE__ */ React.createElement("div", { className: "card-content" }, /* @__PURE__ */ React.createElement("div", { className: "section-item-list" }, languageData.map(({ title, level, percent }, idx) => /* @__PURE__ */ React.createElement("div", { className: "detail-row language-row section-card-item", key: idx }, /* @__PURE__ */ React.createElement("div", { className: "language-header" }, /* @__PURE__ */ React.createElement("div", { className: "language-title-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "language-title-icon" }, /* @__PURE__ */ React.createElement("i", { className: languageDetailIconClass, "aria-hidden": "true" })), /* @__PURE__ */ React.createElement("div", { className: "language-title" }, renderTextWithLtrNumbers(title))), /* @__PURE__ */ React.createElement("span", { className: "badge language-level-badge" }, renderTextWithLtrNumbers(level))), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "language-progress-track",
        role: "progressbar",
        "aria-label": copy.languages.proficiencyAria(title),
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": percent
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "language-progress-fill",
          style: { width: `${percent}%` }
        }
      )
    )))))), /* @__PURE__ */ React.createElement("div", { className: "card section-anchor", id: "education-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-header" }, /* @__PURE__ */ React.createElement("span", { className: "section-icon" }, iconBooks), copy.education.title), /* @__PURE__ */ React.createElement("div", { className: "card-content" }, /* @__PURE__ */ React.createElement("div", { className: "section-item-list" }, educationData.map(({ title, institution, institutionHref, scoreLabel, score, session }, idx) => /* @__PURE__ */ React.createElement("div", { className: "detail-row education-row section-card-item", key: idx }, /* @__PURE__ */ React.createElement("div", { className: "education-header" }, /* @__PURE__ */ React.createElement("div", { className: "education-title-row" }, /* @__PURE__ */ React.createElement("div", { className: "education-title-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "education-title-icon" }, /* @__PURE__ */ React.createElement("i", { className: educationDetailIconClass, "aria-hidden": "true" })), /* @__PURE__ */ React.createElement("div", { className: "education-subtitle" }, renderTextWithLtrNumbers(title))), /* @__PURE__ */ React.createElement("span", { className: "badge education-score-badge" }, renderTextWithLtrNumbers(`${scoreLabel} ${score}`))), /* @__PURE__ */ React.createElement("span", { className: "badge education-year-badge" }, renderTextWithLtrNumbers(session))), /* @__PURE__ */ React.createElement("div", { className: "education-meta" }, renderTextWithLtrNumbers(institution), institutionHref ? /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "activity-link-button",
        href: institutionHref,
        target: "_blank",
        rel: "noreferrer"
      },
      copy.common.visit
    ) : null)))))), /* @__PURE__ */ React.createElement("div", { className: "card section-anchor", id: "training-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-header" }, /* @__PURE__ */ React.createElement("span", { className: "section-icon" }, iconEducation), copy.training.title), /* @__PURE__ */ React.createElement("div", { className: "card-content" }, /* @__PURE__ */ React.createElement("div", { className: "section-item-list" }, trainingItems.map((item, idx) => {
      const isLinkItem = typeof item === "object" && item !== null;
      return /* @__PURE__ */ React.createElement("div", { className: "detail-row training-row section-card-item", key: isLinkItem ? item.text : item }, /* @__PURE__ */ React.createElement("div", { className: "detail-label" }, /* @__PURE__ */ React.createElement("span", { className: "training-bullet" }, /* @__PURE__ */ React.createElement(
        "i",
        {
          className: trainingIconClasses[idx],
          "aria-hidden": "true"
        }
      ))), /* @__PURE__ */ React.createElement("div", { className: "detail-value" }, isLinkItem ? /* @__PURE__ */ React.createElement(React.Fragment, null, renderTextWithLtrNumbers(item.text), /* @__PURE__ */ React.createElement(
        "a",
        {
          className: "activity-link-button",
          href: item.href,
          target: "_blank",
          rel: "noreferrer"
        },
        item.linkLabel
      )) : renderTextWithLtrNumbers(item)));
    })))), /* @__PURE__ */ React.createElement("div", { className: "card section-anchor", id: "activities-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-header" }, /* @__PURE__ */ React.createElement("span", { className: "section-icon" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-star", "aria-hidden": "true" })), copy.activities.title), /* @__PURE__ */ React.createElement("div", { className: "card-content" }, /* @__PURE__ */ React.createElement("div", { className: "activity-list" }, activityData.map(({ title, period, items }, idx) => /* @__PURE__ */ React.createElement("div", { className: "activity-item section-card-item", key: idx }, /* @__PURE__ */ React.createElement("div", { className: "activity-header" }, /* @__PURE__ */ React.createElement("div", { className: "activity-title-wrap" }, /* @__PURE__ */ React.createElement("span", { className: "activity-title-icon" }, /* @__PURE__ */ React.createElement("i", { className: activityDetailIconClass, "aria-hidden": "true" })), /* @__PURE__ */ React.createElement("div", { className: "activity-title" }, renderTextWithLtrNumbers(title))), period ? /* @__PURE__ */ React.createElement("span", { className: "badge activity-period" }, renderTextWithLtrNumbers(period)) : null), /* @__PURE__ */ React.createElement("ul", { className: "activity-points" }, items.map((item) => {
      const key = item.text;
      return /* @__PURE__ */ React.createElement("li", { key }, /* @__PURE__ */ React.createElement("span", { className: "activity-point-icon" }, /* @__PURE__ */ React.createElement("i", { className: item.iconClass, "aria-hidden": "true" })), /* @__PURE__ */ React.createElement("span", { className: "activity-point-text" }, renderTextWithLtrNumbers(item.text), item.href ? /* @__PURE__ */ React.createElement(
        "a",
        {
          className: "activity-link-button",
          href: item.href,
          target: "_blank",
          rel: "noreferrer"
        },
        item.linkLabel
      ) : null));
    }))))))), /* @__PURE__ */ React.createElement("div", { className: "card section-anchor", id: "hobbies-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-header" }, /* @__PURE__ */ React.createElement("span", { className: "section-icon" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-heart", "aria-hidden": "true" })), copy.hobbies.title), /* @__PURE__ */ React.createElement("div", { className: "card-content" }, /* @__PURE__ */ React.createElement("div", { className: "hobby-list" }, hobbiesData.map(([iconClass, text], idx) => /* @__PURE__ */ React.createElement("div", { className: "hobby-item section-card-item", key: idx }, /* @__PURE__ */ React.createElement("span", { className: "hobby-icon" }, /* @__PURE__ */ React.createElement("i", { className: iconClass, "aria-hidden": "true" })), /* @__PURE__ */ React.createElement("div", { className: "hobby-text" }, renderTextWithLtrNumbers(text))))))), /* @__PURE__ */ React.createElement("div", { className: "card section-anchor", id: "contact-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-header" }, /* @__PURE__ */ React.createElement("span", { className: "section-icon" }, iconMapPin), copy.contact.title), /* @__PURE__ */ React.createElement("div", { className: "card-content" }, /* @__PURE__ */ React.createElement("div", { className: "contact-list" }, contactBlocks.map(({ iconClass, label, value, href, mapHref }, idx) => /* @__PURE__ */ React.createElement("div", { className: "contact-block section-card-item", key: `${label}-${value}` }, /* @__PURE__ */ React.createElement("div", { className: "icon-text" }, /* @__PURE__ */ React.createElement("span", { className: "contact-title-icon" }, /* @__PURE__ */ React.createElement("i", { className: iconClass, "aria-hidden": "true" })), /* @__PURE__ */ React.createElement("span", null, renderTextWithLtrNumbers(label))), /* @__PURE__ */ React.createElement("div", { className: "address-box" }, href ? /* @__PURE__ */ React.createElement("a", { className: "contact-action-link", href, target: href.startsWith("http") ? "_blank" : void 0, rel: href.startsWith("http") ? "noreferrer" : void 0 }, renderTextWithLtrNumbers(value)) : renderTextWithLtrNumbers(value)), mapHref ? /* @__PURE__ */ React.createElement("div", { className: "address-actions" }, /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "map-link-button",
        href: mapHref,
        target: "_blank",
        rel: "noreferrer"
      },
      /* @__PURE__ */ React.createElement("i", { className: "fas fa-location-arrow", "aria-hidden": "true" }),
      copy.contact.mapButton
    )) : null))))), /* @__PURE__ */ React.createElement("div", { className: "card section-anchor", id: "dua-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-header" }, /* @__PURE__ */ React.createElement("span", { className: "section-icon" }, iconPrayerHands), copy.dua.title), /* @__PURE__ */ React.createElement("div", { className: "card-content" }, /* @__PURE__ */ React.createElement("div", { className: "final-dua" }, duaArabicLines.map((arabicLine, idx) => /* @__PURE__ */ React.createElement("div", { className: "dua-entry", key: arabicLine }, /* @__PURE__ */ React.createElement("div", { className: "dua-block" }, /* @__PURE__ */ React.createElement("div", { className: `dua-arabic${idx === 1 ? " dua-arabic-furqan" : ""}${idx === 3 ? " dua-arabic-green" : ""}` }, arabicLine), copy.dua.meanings[idx] ? /* @__PURE__ */ React.createElement("div", { className: "dua-english" }, copy.dua.meanings[idx]) : null, /* @__PURE__ */ React.createElement("div", { className: "dua-reference" }, copy.dua.references[idx])))), /* @__PURE__ */ React.createElement("div", { className: "dua-closing" }, /* @__PURE__ */ React.createElement("span", null, copy.dua.closing), /* @__PURE__ */ React.createElement("span", { className: "dua-closing-icon", "aria-hidden": "true" }, iconKaaba))))), /* @__PURE__ */ React.createElement("div", { className: "profile-tagline-note" }, iconEducation, " ", copy.profile.tagline, " ", iconWork), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginTop: "60px", paddingTop: "20px", borderTop: "2px solid rgba(13, 115, 119, 0.1)", color: "#0d7377", fontSize: "24px", letterSpacing: "8px" } }, dividerOrnament)) : null);
  };
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(/* @__PURE__ */ React.createElement(BioDataComponent, null));
})();
