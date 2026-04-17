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
            const duaArabicLines = [
                '\u0631\u064e\u0628\u064e\u0651\u0646\u064e\u0627 \u0647\u064e\u0628\u0652 \u0644\u064e\u0646\u064e\u0627 \u0645\u0650\u0646\u0652 \u0623\u064e\u0632\u0652\u0648\u064e\u0627\u062c\u0650\u0646\u064e\u0627 \u0648\u064e\u0630\u064f\u0631\u0650\u0651\u064a\u064e\u0651\u0627\u062a\u0650\u0646\u064e\u0627 \u0642\u064f\u0631\u064e\u0651\u0629\u064e \u0623\u064e\u0639\u0652\u064a\u064f\u0646\u064d \u0648\u064e\u0627\u062c\u0652\u0639\u064e\u0644\u0652\u0646\u064e\u0627 \u0644\u0650\u0644\u0652\u0645\u064f\u062a\u064e\u0651\u0642\u0650\u064a\u0646\u064e \u0625\u0650\u0645\u064e\u0627\u0645\u064b\u0627',
                '\u0631\u064e\u0628\u0650\u0651 \u0647\u064e\u0628\u0652 \u0644\u0650\u064a \u0645\u0650\u0646\u064e \u0627\u0644\u0635\u064e\u0651\u0627\u0644\u0650\u062d\u0650\u064a\u0646\u064e',
                '\u0631\u064e\u0628\u064e\u0651\u0646\u064e\u0627 \u0622\u062a\u0650\u0646\u064e\u0627 \u0645\u0650\u0646\u0652 \u0644\u064e\u062f\u064f\u0646\u0643\u064e \u0631\u064e\u062d\u0652\u0645\u064e\u0629\u064b \u0648\u064e\u0647\u064e\u064a\u0650\u0651\u0626\u0652 \u0644\u064e\u0646\u064e\u0627 \u0645\u0650\u0646\u0652 \u0623\u064e\u0645\u0652\u0631\u0650\u0646\u064e\u0627 \u0631\u064e\u0634\u064e\u062f\u064b\u0627'
            ];
            const introDuaMeaning = "Our Rabb (Allah), grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.";
            const introInstructions = [
                "Begin reading with respect and a sincere intention.",
                "Use the top menu to move quickly between each section.",
                "If this biodata feels suitable, contact through the shared details.",
                "Please maintain privacy while reviewing this profile."
            ];
            const introVoiceHint = 'Tap the mic once to start Bismillah voice verification.';
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

            const sectionIcons = {
                personal: iconProfile,
                family: iconFamily,
                education: iconEducation,
                work: iconWork
            };

            const menuItems = [
                ["profile-top", "Profile"],
                ["gallery-section", "Gallery"],
                ["personal-section", "Personal"],
                ["family-section", "Family"],
                ["work-section", "Work"],
                ["lifestyle-section", "Lifestyle"],
                ["language-section", "Language"],
                ["education-section", "Education"],
                ["training-section", "Training"],
                ["activities-section", "Activities"],
                ["hobbies-section", "Hobbies"],
                ["expectation-section", "Expectation"],
                ["contact-section", "Contact"],
                ["dua-section", "Dua"]
            ];

            const [activeSection, setActiveSection] = React.useState(() => {
                const hashId = window.location.hash.replace('#', '');
                return menuItems.some(([id]) => id === hashId) ? hashId : menuItems[0][0];
            });
            const [isIntroPopupOpen, setIsIntroPopupOpen] = React.useState(true);
            const [isVoiceListening, setIsVoiceListening] = React.useState(false);
            const [voiceUiState, setVoiceUiState] = React.useState('idle');
            const [microphonePermissionState, setMicrophonePermissionState] = React.useState('unknown');
            const [voicePrompt, setVoicePrompt] = React.useState(introVoiceHint);
            const [isMenuDragging, setIsMenuDragging] = React.useState(false);
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
            
            const detailGroups = {
                personal: [
                    { label: "Full Name", value: "Md. Mahbubur Rahman", iconClass: "fas fa-user" },
                    { label: "Nickname", value: "Nasir Uddin", iconClass: "fas fa-signature" },
                    { label: "Date of Birth", value: "20 December 1997", iconClass: "fas fa-calendar-days" },
                    { label: "Age", value: "27 Years", iconClass: "fas fa-hourglass-half" },
                    { label: "Religion", value: "Islam (Practicing Muslim)", iconClass: "fas fa-mosque" },
                    { label: "Marital Status", value: "Unmarried", iconClass: "fas fa-ring" },
                    { label: "Complexion", value: "Medium Dark", iconClass: "fas fa-palette" },
                    { label: "Height & Weight", value: "About 5' 3\" & 72 KGs", iconClass: "fas fa-ruler-combined" },
                    { label: "Blood Group", value: "A+", iconClass: "fas fa-droplet" },
                    { label: "Health Status", value: "Healthy, non-smoker, no addiction", iconClass: "fas fa-heart-pulse" },
                ],
                family: [
                    ["Father", "Late Abdul Kader Howlader (Village Doctor and Primary Teacher)"],
                    ["Mother", "Farida Begum - Housewife"],
                    ["Siblings", "4 Brothers and 3 Sisters"],
                    ["Permanent Address", "Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat"],
                    ["District", "Bagerhat"],
                ],
                work: [
                    ["Procurement & Servicing Lead", "Earthface IT, Dhaka | 27 Nov 2021 - Present"],
                    ["IT Support Assistant (Part-time)", "Dept. of Arabic Language and Literature, IU, Kushtia | 23 Mar 2017 - 20 Oct 2021"],
                    ["IT Executive (Part-time)", "Khondokar Telecom, Gazipur | 7 Jul 2014 - 12 Dec 2015"],
                ]
            };

            const workData = [
                {
                    title: "Procurement & Servicing Lead",
                    organization: "Earthface IT, Dhaka",
                    duration: "27 Nov 2021 - Present",
                    iconClass: "fas fa-briefcase"
                },
                {
                    title: "IT Support Assistant (Part-time)",
                    organization: "Dept. of Arabic Language and Literature, IU, Kushtia",
                    duration: "23 Mar 2017 - 20 Oct 2021",
                    iconClass: "fas fa-headset"
                },
                {
                    title: "IT Executive (Part-time)",
                    organization: "Khondokar Telecom, Gazipur",
                    duration: "7 Jul 2014 - 12 Dec 2015",
                    iconClass: "fas fa-desktop"
                }
            ];

            const galleryPhotos = [
                {
                    src: "assets/images/mahbub-portrait-1.jpg",
                    alt: "Md Mahbubur Rahman portrait 1",
                    label: "Portrait 01",
                    featured: true
                },
                {
                    src: "assets/images/mahbub-portrait-2.jpg",
                    alt: "Md Mahbubur Rahman portrait 2",
                    label: "Portrait 02",
                    featured: false
                }
            ];

            const languageData = [
                {
                    title: "English",
                    level: "Good",
                    percent: 66.66
                },
                {
                    title: "Arabic",
                    level: "Good",
                    percent: 66.66
                },
                {
                    title: "Bangla",
                    level: "Excellent",
                    percent: 100
                }
            ];

            const educationData = [
                {
                    title: "M.A. (Arabic Language & Literature)",
                    institution: "Islamic University, Kushtia",
                    institutionHref: "https://iu.ac.bd",
                    scoreLabel: "CGPA",
                    score: "3.58/4",
                    session: "2022"
                },
                {
                    title: "B.A. Honors (Arabic Language & Literature)",
                    institution: "Islamic University, Kushtia",
                    institutionHref: "https://iu.ac.bd",
                    scoreLabel: "CGPA",
                    score: "3.58/4",
                    session: "2020"
                },
                {
                    title: "Alim (HSC)",
                    institution: "Ta'mirul Millat Kamil Madrasah, Tongi, Gazipur",
                    institutionHref: "https://www.tmt.edu.bd",
                    scoreLabel: "GPA",
                    score: "5.00/5",
                    session: "2014"
                },
                {
                    title: "Dakhil (SSC)",
                    institution: "Ta'limul Millat Rahmatial Kamil Madrasah, Sonadanga, Khulna",
                    scoreLabel: "GPA",
                    score: "5.00/5",
                    session: "2012"
                },
            ];

            const familySiblings = [
                ["1st Sister", "Shahanaj Shanti, Housewife with 4 Children. Morrelganj."],
                ["2nd Brother", "Alauddin, was a worker in UAE, Business (Dhaka). 2 Children. Morrelganj."],
                ["3rd Brother", "Giash Uddin, Driver, Bananja PCL, Chattagram, BD Navy. 2 Children, Morrelganj."],
                ["4th Sister", "Zerin Salma Beby, Housewife with 3 children. Morrelganj."],
                ["5th Brother", "Mohiuddin, Driver, Doctor Couple's, Chattagram. 4 Children, Chattagram."],
                ["6th Sister", "Nazma Sultana, Housewife with 2 children. Khulna."],
                ["7th", "Youngest son, self."]
            ];

            const siblingStatusData = {
                "1st Sister": { text: "Married", className: "married" },
                "2nd Brother": { text: "Married", className: "married" },
                "3rd Brother": { text: "Married", className: "married" },
                "4th Sister": { text: "Married", className: "married" },
                "5th Brother": { text: "Married", className: "married" },
                "6th Sister": { text: "Married", className: "married" },
                "7th": { text: "Unmarried", className: "unmarried" }
            };

            const activityData = [
                {
                    title: "Volunteering",
                    period: "7th July 2014 - 12th Dec 2015",
                    items: [
                        {
                            text: "Former CR of the class for 2 years, Islamic University, Kushtia.",
                            iconClass: "fas fa-users",
                            href: "https://iu.ac.bd",
                            linkLabel: "Visit"
                        },
                        {
                            text: "Former Director of Betikrom Shahitya Shangskritik Jote, IU.",
                            iconClass: "fas fa-masks-theater",
                            href: "https://web.facebook.com/betikrom87",
                            linkLabel: "Visit"
                        },
                        {
                            text: "Former Central Member of Bangladesh Islamic Chhatra Shibir",
                            iconClass: "fas fa-shield-halved",
                            href: "https://shibir.org.bd",
                            linkLabel: "Visit"
                        }
                    ]
                },
                {
                    title: "Singing",
                    items: [
                        {
                            text: "Performed song on SATV, ETV, Channel 9",
                            iconClass: "fas fa-music"
                        }
                    ]
                },
                {
                    title: "Acting",
                    period: "2018",
                    items: [
                        {
                            text: "Acted in a drama, was placed 2nd Nationally.",
                            iconClass: "fas fa-film"
                        }
                    ]
                },
                {
                    title: "Award",
                    period: "2012",
                    items: [
                        {
                            text: "Awarded on Poetry Recitation Placed 2nd Nationally",
                            iconClass: "fas fa-award"
                        }
                    ]
                }
            ];

            const hobbiesData = [
                ["fas fa-masks-theater", "Cultural Awareness (Singing, Acting, Lyrics etc.)"],
                ["fas fa-lightbulb", "Optimizing Idea."],
                ["fas fa-laptop-medical", "Helping others as a tech savvy."]
            ];

            const lifestyleData = [
                { label: "Character", value: "Humble, Religious, Trustworthy", iconClass: "fas fa-user-shield" },
                { label: "Future Goal", value: "Build a family based on Deen and mutual respect", iconClass: "fas fa-bullseye" },
                { label: "Interests", value: "Islamic lectures, reading, travelling, learning technology", iconClass: "fas fa-book-open" },
                { label: "Food Habit", value: "Prefers home-made halal food", iconClass: "fas fa-utensils" },
                { label: "Additional", value: "Punctual, reserved by nature, socially well-behaved", iconClass: "fas fa-check-double" }
            ];

            const permanentAddressValue = "Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat";
            const permanentAddressMapHref = "https://maps.app.goo.gl/hvcHqxMvhF9cGFbM6";

            const renderDetailValue = (label, value) => {
                if (label === 'Permanent Address' && typeof value === 'string' && value === permanentAddressValue) {
                    return (
                        <>
                            {value}
                            <div className="address-actions">
                                <a className="map-link-button" href={permanentAddressMapHref} target="_blank" rel="noreferrer">
                                    <i className="fas fa-location-arrow" aria-hidden="true"></i>
                                    View on Google Maps
                                </a>
                            </div>
                        </>
                    );
                }

                if (typeof value !== 'string' || !value.startsWith('Late ')) {
                    return value;
                }

                return (
                    <>
                        <span className="detail-inline-badge late-inline-badge">Late</span>
                        {' '}
                        {value.slice(5)}
                    </>
                );
            };

            const centerMenuLink = (id, behavior = 'smooth') => {
                const menuLinks = menuLinksRef.current;
                if (!menuLinks) return;

                const targetLink = menuLinks.querySelector(`[data-menu-id="${id}"]`);
                if (!targetLink) return;

                const targetLeft = targetLink.offsetLeft - ((menuLinks.clientWidth - targetLink.offsetWidth) / 2);
                menuLinks.scrollTo({
                    left: Math.max(0, Math.round(targetLeft)),
                    behavior
                });
            };

            React.useEffect(() => {
                centerMenuLink(activeSection, hasCenteredMenuRef.current ? 'smooth' : 'auto');
                hasCenteredMenuRef.current = true;
            }, [activeSection]);

            React.useEffect(() => () => {
                if (menuClickResetTimeoutRef.current) {
                    window.clearTimeout(menuClickResetTimeoutRef.current);
                }
            }, []);

            React.useEffect(() => {
                let ticking = false;

                const updateActiveSection = () => {
                    const menu = document.querySelector('.top-menu');
                    const menuHeight = menu ? menu.getBoundingClientRect().height : 0;
                    const scrollReference = window.scrollY + menuHeight + 96;
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
                menuLinks.scrollLeft = dragState.startScrollLeft - deltaX;
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
                document.body.classList.add('has-entered-biodata');
                setIsIntroPopupOpen(false);
                window.dispatchEvent(new Event('bbdMahbub:enter-biodata'));
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

                if (microphonePermissionState === 'granted') {
                    return true;
                }

                if (microphonePermissionState === 'denied') {
                    setVoiceUiState('error');
                    setVoicePrompt('Microphone permission is blocked. Allow it in your browser settings, then tap the mic again.');
                    return false;
                }

                setVoiceUiState('permission');
                setVoicePrompt('Browser microphone permission is required. Tap Allow in the popup.');

                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    stream.getTracks().forEach((track) => track.stop());
                    setMicrophonePermissionState('granted');
                    setVoiceUiState('idle');
                    setVoicePrompt('Microphone permission allowed. Tap the mic once more to start voice verification.');
                } catch (error) {
                    setVoiceUiState('error');

                    if (error && (error.name === 'NotAllowedError' || error.name === 'SecurityError')) {
                        setMicrophonePermissionState('denied');
                        setVoicePrompt('Microphone permission was denied. Allow it in browser settings, then tap the mic again.');
                    } else if (error && error.name === 'NotFoundError') {
                        setVoicePrompt('No microphone was found. Connect a microphone and try again.');
                    } else {
                        setVoicePrompt('Microphone permission could not be confirmed. Please try again.');
                    }
                }

                return false;
            };

            const startBismillahVoiceCheck = () => {
                const StandardSpeechRecognition = window.SpeechRecognition;
                const SpeechRecognition = StandardSpeechRecognition || window.webkitSpeechRecognition;

                if (!SpeechRecognition) {
                    setVoiceUiState('error');
                    setVoicePrompt('This browser does not provide web speech recognition for this site. Check browser support or use a supported browser/device.');
                    return;
                }

                if (isVoiceListening || speechRecognitionRef.current || isPreparingVoiceRef.current) return;

                isPreparingVoiceRef.current = true;
                setVoiceUiState('preparing');
                setVoicePrompt('Starting microphone. If your browser asks, tap Allow microphone permission.');

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
                    setVoicePrompt('Microphone is active. Say "Bismillah" once and wait for verification.');
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
                        setVoicePrompt(`Detected: "${transcript.trim()}". Opening biodata...`);
                        window.setTimeout(() => {
                            handleEnterBiodata();
                        }, 320);
                        return;
                    }

                    setVoicePrompt(`Heard: "${transcript.trim()}". Tap the mic and say "Bismillah" again.`);
                };

                recognition.onerror = (event) => {
                    clearRecognitionTimer();
                    isPreparingVoiceRef.current = false;
                    voiceStopReasonRef.current = 'error';
                    setIsVoiceListening(false);
                    setVoiceUiState('error');
                    const errorMessages = {
                        'not-allowed': 'Microphone access was blocked. Please allow microphone permission and try again.',
                        'service-not-allowed': 'Speech recognition is blocked on this browser. Check browser support and microphone permission, then try again.',
                        'aborted': 'Voice recording stopped before it could start. Tap the mic again.',
                        'audio-capture': 'No microphone was found. Connect a microphone and try again.',
                        'no-speech': 'No speech was detected. Tap the mic again and say "Bismillah".',
                        'language-not-supported': 'This browser does not support the selected speech language for web speech recognition.',
                        'network': 'Your browser could not reach its speech service. Please check your connection and browser settings, then try again.'
                    };

                    setVoicePrompt(errorMessages[event.error] || 'Voice recognition did not start properly. If a browser popup appears, tap Allow microphone permission and try again.');
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
                        setVoicePrompt('Listening timed out. Tap the mic and say "Bismillah" again.');
                    } else if (voiceStopReasonRef.current === 'listening' && !voiceMatchedRef.current) {
                        setVoicePrompt('I could not verify "Bismillah". Tap the mic and say it again.');
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
                    setVoicePrompt('Microphone could not start right now. If the browser asks, allow microphone permission, then tap the mic again.');
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
                const menu = document.querySelector('.top-menu');
                if (!target || !menu) return;

                const menuHeight = menu.getBoundingClientRect().height + 18;
                const targetTop = target.getBoundingClientRect().top + window.scrollY - menuHeight;

                setActiveSection(id);
                centerMenuLink(id);

                window.scrollTo({
                    top: Math.max(0, Math.round(targetTop)),
                    behavior: 'smooth'
                });

                window.history.replaceState(null, '', `#${id}`);
            };

            return (
                <>
                {isIntroPopupOpen ? (
                    <div
                        className="intro-popup"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="intro-popup-title"
                    >
                        <div className="intro-popup-panel">
                            <div className="intro-popup-inner">
                                <div className="intro-popup-bismillah">{popupBismillah}</div>
                                <div className="intro-popup-darud">{popupDarud}</div>
                                <div className="intro-popup-kicker">{iconPrayerHands} Dua & Instruction</div>
                                <h2 className="intro-popup-title" id="intro-popup-title">Please Read Before Exploring</h2>

                                <div className="intro-popup-dua">
                                    <div className="intro-popup-dua-arabic">{duaArabicLines[0]}</div>
                                    <div className="intro-popup-dua-meaning">{introDuaMeaning}</div>
                                </div>

                                <div className="intro-popup-instruction">
                                    <div className="intro-popup-section-title">Instruction</div>
                                    <ul className="intro-popup-list">
                                        {introInstructions.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={`intro-popup-voice-status${voiceUiState === 'error' ? ' is-error' : voiceUiState === 'permission' || voiceUiState === 'preparing' ? ' is-preparing' : isVoiceListening ? ' is-listening' : ''}`}>
                                    <i className={`fas ${voiceUiState === 'error' ? 'fa-triangle-exclamation' : voiceUiState === 'permission' || voiceUiState === 'preparing' ? 'fa-spinner fa-spin' : isVoiceListening ? 'fa-wave-square' : 'fa-microphone-lines'}`} aria-hidden="true"></i>
                                    <span>{voicePrompt}</span>
                                </div>

                                <div className="intro-popup-voice-gate">
                                    <button
                                        type="button"
                                        className={`intro-popup-mic-button${voiceUiState === 'error' ? ' is-error' : voiceUiState === 'permission' || voiceUiState === 'preparing' ? ' is-preparing' : isVoiceListening ? ' is-listening' : ''}`}
                                        onClick={handleVoiceButtonClick}
                                        onContextMenu={(event) => event.preventDefault()}
                                        aria-label={voiceUiState === 'permission' || voiceUiState === 'preparing' ? 'Microphone permission is being requested' : voiceUiState === 'error' ? 'Retry voice recognition' : isVoiceListening ? 'Stop voice recognition' : 'Start voice recognition and say Bismillah'}
                                    >
                                        <i className={`fas ${voiceUiState === 'error' ? 'fa-microphone-slash' : voiceUiState === 'permission' || voiceUiState === 'preparing' ? 'fa-spinner fa-spin' : isVoiceListening ? 'fa-microphone-lines' : 'fa-microphone'}`} aria-hidden="true"></i>
                                    </button>
                                    <div className="intro-popup-support-note">
                                        {voiceUiState === 'permission'
                                            ? 'A browser popup should appear now. Tap Allow microphone permission. After that, tap the mic again.'
                                            : voiceUiState === 'preparing'
                                                ? 'Microphone is starting now. Please wait a moment.'
                                            : voiceUiState === 'error'
                                                ? microphonePermissionState === 'denied'
                                                    ? 'Microphone permission is blocked in browser settings. Allow it for this site, then tap the mic again.'
                                                    : 'If no popup appears, check this site\'s microphone permission and whether your browser supports web speech recognition.'
                                            : isVoiceListening
                                                ? 'Recording is active now. Speak once, then wait a moment for verification.'
                                                : microphonePermissionState === 'granted'
                                                    ? 'Microphone permission is ready. Tap the mic to start voice verification.'
                                                    : 'Tap the mic. If a browser popup appears, tap Allow microphone permission.'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
                <div className="container">
                    <nav className="top-menu" aria-label="Page sections">
                        <div className="top-menu-label">Quick Jump</div>
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
                        <h1>{iconHeartSparkle}Md Mahbubur Rahman{iconHeartSparkle}</h1>
                        <div className="subtitle">IT Professional</div>
                    </div>

                    <div style={{marginBottom: '30px'}}>
                        <div className="stats">
                            <div className="stat-box">
                                <div className="stat-value">27</div>
                                <div className="stat-label">YEARS OLD</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-value">{iconEducation}</div>
                                <div className="stat-label">HIGHLY EDUCATED</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-value">{iconWork}</div>
                                <div className="stat-label">WELL ESTABLISHED</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-value">{iconMosque}</div>
                                <div className="stat-label">PRACTICING MUSLIM</div>
                            </div>
                        </div>
                    </div>

                    <div className="card section-anchor" id="gallery-section">
                        <div className="section-header">
                            <span className="section-icon"><i className="fas fa-images" aria-hidden="true"></i></span>
                            Photo Gallery
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
                                {group.charAt(0).toUpperCase() + group.slice(1)} Information
                            </div>
                            {group === 'family' && (
                                <div className="family-summary">
                                    <div className="family-summary-label">
                                        <i className="fas fa-shield-halved" aria-hidden="true"></i>
                                        Family Background
                                    </div>
                                    <div className="family-summary-title">A respectable, middle-class family grounded in education and religious values.</div>
                                    <div className="family-summary-tags">
                                        {['Respectable', 'Middle-Class', 'Educated', 'Religious'].map((tag) => (
                                            <span className="family-summary-tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="card-content">
                                {group === 'work' ? (
                                    workData.map(({ title, organization, duration, iconClass }, idx) => (
                                        <div className="detail-row work-row" key={idx}>
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

                                        return (
                                        <div className="detail-row" key={idx}>
                                            <div className="detail-label">
                                                {iconClass ? (
                                                    <span className="detail-label-icon">
                                                        <i className={iconClass} aria-hidden="true"></i>
                                                    </span>
                                                ) : null}
                                                <span>{label}</span>
                                            </div>
                                            <div className="detail-value">{renderDetailValue(label, value)}</div>
                                        </div>
                                        );
                                    })
                                )}
                                {group === 'family' && (
                                    <>
                                        <div className="subsection-title">Sibling Details</div>
                                        {familySiblings.map(([label, value], idx) => (
                                            <div className="sub-detail-row" key={idx}>
                                                <div className="detail-label sibling-label">
                                                    <span>{label}</span>
                                                </div>
                                                <div className="detail-value">{value}</div>
                                                <div className={`badge sibling-status sibling-status-cell ${siblingStatusData[label]?.className || ''}`}>
                                                    {siblingStatusData[label]?.text || ''}
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="card section-anchor" id="lifestyle-section">
                        <div className="section-header">
                            <i className="fas fa-seedling section-icon" aria-hidden="true"></i>
                            Personality & Lifestyle
                        </div>
                        <div className="card-content">
                            {lifestyleData.map(({ label, value, iconClass }, idx) => (
                                <div className="detail-row" key={idx}>
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

                    <div className="card section-anchor" id="language-section">
                        <div className="section-header">
                            <span className="section-icon">{iconLanguage}</span>
                            Language Proficiency
                        </div>
                        <div className="card-content">
                            {languageData.map(({ title, level, percent }, idx) => (
                                <div className="detail-row language-row" key={idx}>
                                    <div className="language-header">
                                        <div className="language-title">{title}</div>
                                        <span className="badge language-level-badge">{level}</span>
                                    </div>
                                    <div
                                        className="language-progress-track"
                                        role="progressbar"
                                        aria-label={`${title} proficiency`}
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

                    <div className="card section-anchor" id="education-section">
                        <div className="section-header">
                            <span className="section-icon">{iconBooks}</span>
                            Educational Information
                        </div>
                        <div className="card-content">
                            {educationData.map(({ title, institution, institutionHref, scoreLabel, score, session }, idx) => (
                                <div className="detail-row education-row" key={idx}>
                                    <div className="education-header">
                                        <div className="education-title-row">
                                            <div className="education-subtitle">{title}</div>
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
                                                Visit
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card section-anchor" id="training-section">
                        <div className="section-header">
                            <span className="section-icon">{iconEducation}</span>
                            Training and Development
                        </div>
                        <div className="card-content">
                            {[
                                {
                                    text: 'Corporate Management Bootcamp - 2023 (10 Days, BYLC, Bangladesh.)',
                                    href: 'https://bylc.org',
                                    linkLabel: 'Visit'
                                },
                                {
                                    text: 'Professional Digital Content Management (PDCM), (3 Months, SEIP, Finance Ministry of BD)',
                                    href: 'https://lms.seip-fd.gov.bd',
                                    linkLabel: 'Visit'
                                },
                                {
                                    text: 'Web Design & Development (200 Hours, LEDP, ICT Division of Bangladesh.)',
                                    href: 'https://ictd.gov.bd',
                                    linkLabel: 'Visit'
                                },
                                {
                                    text: 'Computer & Its Applications (1 Year, Islamic University, Kushtia)',
                                    href: 'https://iu.ac.bd',
                                    linkLabel: 'Visit'
                                },
                                {
                                    text: 'Troubleshooting in Computer Security (ICT Division, a2i).',
                                    href: 'https://a2i.gov.bd',
                                    linkLabel: 'Visit'
                                },
                                {
                                    text: 'Microsoft Word Basics (a2i, Muktapath).',
                                    href: 'https://a2i.gov.bd',
                                    linkLabel: 'Visit'
                                },
                                {
                                    text: 'Video Production (Human Development Media, a2i)',
                                    href: 'https://a2i.gov.bd',
                                    linkLabel: 'Visit'
                                },
                                {
                                    text: 'Digital Security Essentials (Digital Security Agency, a2i).',
                                    href: 'https://a2i.gov.bd',
                                    linkLabel: 'Visit'
                                },
                                {
                                    text: 'Idea Innovation Workshop for Mobile Games & Apps Development (ICT Division, Digital Bangladesh.)',
                                    href: 'https://a2i.gov.bd',
                                    linkLabel: 'Visit'
                                }
                            ].map((item, idx) => {
                                const isLinkItem = typeof item === 'object' && item !== null;

                                return (
                                <div className="detail-row training-row" key={isLinkItem ? item.text : item}>
                                    <div className="detail-label">
                                        <span className="training-bullet">
                                            <i
                                                className={[
                                                    'fas fa-medal',
                                                    'fas fa-briefcase',
                                                    'fas fa-laptop-code',
                                                    'fas fa-desktop',
                                                    'fas fa-shield-halved',
                                                    'fas fa-file-word',
                                                    'fas fa-video',
                                                    'fas fa-lock',
                                                    'fas fa-lightbulb'
                                                ][idx]}
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

                    <div className="card section-anchor" id="activities-section">
                        <div className="section-header">
                            <span className="section-icon"><i className="fas fa-star" aria-hidden="true"></i></span>
                            Extra Curricular Activities
                        </div>
                        <div className="card-content">
                            <div className="activity-list">
                                {activityData.map(({ title, period, items }, idx) => (
                                    <div className="activity-item" key={idx}>
                                        <div className="activity-header">
                                            <div className="activity-title">{title}</div>
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
                            Hobbies and Interests
                        </div>
                        <div className="card-content">
                            <div className="hobby-list">
                                {hobbiesData.map(([iconClass, text], idx) => (
                                    <div className="hobby-item" key={idx}>
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
                            Expectation from Bride
                        </div>
                        <div className="card-content">
                            <div className="expectation-list">
                                <div className="expectation-item">
                                    <span className="expectation-item-icon"><i className="fas fa-mosque" aria-hidden="true"></i></span>
                                    <div className="expectation-item-content">
                                        <div className="expectation-item-title">Religious Practice</div>
                                        <div className="expectation-item-text">Practicing Muslimah with hijab and niqab, aware of maintaining mahram.</div>
                                    </div>
                                </div>
                                <div className="expectation-item">
                                    <span className="expectation-item-icon"><i className="fas fa-user-shield" aria-hidden="true"></i></span>
                                    <div className="expectation-item-content">
                                        <div className="expectation-item-title">Character</div>
                                        <div className="expectation-item-text">Educated and modest in behavior.</div>
                                    </div>
                                </div>
                                <div className="expectation-item">
                                    <span className="expectation-item-icon"><i className="fas fa-house" aria-hidden="true"></i></span>
                                    <div className="expectation-item-content">
                                        <div className="expectation-item-title">Family Role</div>
                                        <div className="expectation-item-text">Aware of family responsibilities.</div>
                                    </div>
                                </div>
                                <div className="expectation-item">
                                    <span className="expectation-item-icon"><i className="fas fa-heart" aria-hidden="true"></i></span>
                                    <div className="expectation-item-content">
                                        <div className="expectation-item-title">Lifestyle</div>
                                        <div className="expectation-item-text">Focused on family and Islamic lifestyle.</div>
                                    </div>
                                </div>
                                <div className="expectation-item">
                                    <span className="expectation-item-icon"><i className="fas fa-palette" aria-hidden="true"></i></span>
                                    <div className="expectation-item-content">
                                        <div className="expectation-item-title">Preferred Complexion</div>
                                        <div className="expectation-item-text">Medium/Fair (flexible).</div>
                                    </div>
                                </div>
                                <div className="expectation-item">
                                    <span className="expectation-item-icon"><i className="fas fa-briefcase" aria-hidden="true"></i></span>
                                    <div className="expectation-item-content">
                                        <div className="expectation-item-title">Profession</div>
                                        <div className="expectation-item-text">A profession is not mandatory; a family-oriented Islamic lifestyle is preferred.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card section-anchor" id="contact-section">
                        <div className="section-header">
                            <span className="section-icon">{iconMapPin}</span>
                            Contact & Location
                        </div>
                        <div className="card-content">
                            <div className="contact-section">
                                <div style={{marginBottom: '20px'}}>
                                    <div className="icon-text">
                                        <i className="fas fa-user"></i>
                                        Name
                                    </div>
                                    <div className="address-box">
                                        Md. Mahbubur Rahman
                                    </div>
                                </div>

                                <div style={{marginBottom: '20px'}}>
                                    <div className="icon-text">
                                        <i className="fas fa-envelope"></i>
                                        Email
                                    </div>
                                    <div className="address-box">
                                        <a className="contact-action-link" href="mailto:bbdmahbub@gmail.com">bbdmahbub@gmail.com</a>
                                    </div>
                                </div>

                                <div style={{marginBottom: '20px'}}>
                                    <div className="icon-text">
                                        <i className="fab fa-whatsapp"></i>
                                        WhatsApp
                                    </div>
                                    <div className="address-box">
                                        <a className="contact-action-link" href="https://wa.me/8801917267607" target="_blank" rel="noreferrer">+8801917267607</a>
                                    </div>
                                </div>

                                <div style={{marginBottom: '20px'}}>
                                    <div className="icon-text">
                                        <i className="fas fa-home"></i>
                                        Current Address
                                    </div>
                                    <div className="address-box">
                                        Hatir Jheel, Dhaka, Bangladesh
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="icon-text">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Permanent Address
                                    </div>
                                    <div className="address-box">
                                        Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat
                                    </div>
                                    <div className="address-actions">
                                        <a
                                            className="map-link-button"
                                            href="https://maps.app.goo.gl/hvcHqxMvhF9cGFbM6"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <i className="fas fa-location-arrow" aria-hidden="true"></i>
                                            View on Google Maps
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card section-anchor" id="dua-section">
                        <div className="section-header">
                            <span className="section-icon">{iconKaaba}</span>
                            Final Words & Dua
                        </div>
                        <div className="card-content final-dua">
                            <div className="dua-entry">
                                <div className="dua-block">
                                    <div className="dua-arabic">
                                {duaArabicLines[0]}
                            </div>
                                </div>
                                <div className="dua-block">
                                    <div className="dua-english">
                                "Our Rabb (Allah), grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous."
                                    </div>
                                </div>
                            </div>
                            <div className="dua-entry">
                                <div className="dua-block">
                                    <div className="dua-arabic">
                                {duaArabicLines[1]}
                            </div>
                                </div>
                                <div className="dua-block">
                                    <div className="dua-english">
                                "Ya Rabb (Allah)! Bestow upon me one of the righteous."
                                    </div>
                                </div>
                            </div>
                            <div className="dua-entry">
                                <div className="dua-block">
                                    <div className="dua-arabic">
                                {duaArabicLines[2]}
                            </div>
                                </div>
                                <div className="dua-block">
                                    <div className="dua-english">
                                "Our Rabb (Allah), grant us from Yourself mercy and prepare for us from our affair right guidance."
                                    </div>
                                </div>
                            </div>
                            <div className="dua-closing">
                                <span className="dua-closing-icon" aria-hidden="true">{iconPrayerHands}</span>
                                <span>- Ameen ya Rabbal Alameen.</span>
                            </div>
                        </div>
                    </div>

                    <div style={{textAlign: 'center', margin: '40px 0', color: '#0d7377', fontSize: '18px', fontWeight: '600'}}>
                        {iconHeartSparkle} {iconMosque} A faithful Muslim seeking a loving and pious life partner {iconMosque} {iconHeartSparkle}
                    </div>
                    
                    <div style={{textAlign: 'center', marginTop: '60px', paddingTop: '20px', borderTop: '2px solid rgba(13, 115, 119, 0.1)', color: '#0d7377', fontSize: '24px', letterSpacing: '8px'}}>
                        {dividerOrnament}
                    </div>
                </div>
                </>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<BioDataComponent />);

        const normalizeProfileHeading = () => {
            document.querySelectorAll('#profile-top h1').forEach((heading) => {
                if (heading.classList.contains('profile-name')) return;

                heading.classList.add('profile-name');
                heading.textContent = '';

                const leftIcon = document.createElement('span');
                leftIcon.className = 'profile-name-icon';
                leftIcon.setAttribute('aria-hidden', 'true');
                leftIcon.textContent = String.fromCodePoint(0x1F495);

                const nameText = document.createElement('span');
                nameText.className = 'profile-name-text';
                nameText.textContent = 'Md Mahbubur Rahman';

                const rightIcon = document.createElement('span');
                rightIcon.className = 'profile-name-icon';
                rightIcon.setAttribute('aria-hidden', 'true');
                rightIcon.textContent = String.fromCodePoint(0x1F495);

                heading.append(leftIcon, nameText, rightIcon);
            });
        };

        requestAnimationFrame(normalizeProfileHeading);
