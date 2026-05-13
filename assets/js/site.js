const playlist = [
            { title: 'Jodi Kotha Dao Bondhu', src: encodeURI('assets/audio/jodi-kotha-dao-bondhu.mp3') + '?v=' + (window.bbdMahbubCvCacheVersion || Math.floor(Date.now() / (2 * 60 * 60 * 1000))) },
            { title: 'Rasuler Simahin Valobasha', src: encodeURI('assets/audio/rasuler-simahin-valobasha.mp3') + '?v=' + (window.bbdMahbubCvCacheVersion || Math.floor(Date.now() / (2 * 60 * 60 * 1000))) },
            { title: 'Khadijar Moto Jibon Goro', src: encodeURI('assets/audio/khadijar-moto-jibon-goro.mp3') + '?v=' + (window.bbdMahbubCvCacheVersion || Math.floor(Date.now() / (2 * 60 * 60 * 1000))) }
        ];
        const MUSIC_VOLUME = 0.05;
        const AUTOPLAY_DELAY_MS = 10000;
        const MUSIC_PAUSED_STORAGE_KEY = 'bbdMahbubMusicPaused';
        const LANGUAGE_STORAGE_KEY = 'bbdMahbubLanguage';
        const audioPlayer = new Audio();
        const musicTranslations = {
            en: {
                musicLabel: 'Background Music',
                preparingPlaylist: 'Preparing playlist...',
                volume: 'Volume',
                volumeAria: 'Music volume',
                play: 'Play',
                pause: 'Pause',
                next: 'Next Song',
                collapse: 'Collapse music controls',
                expand: 'Expand music controls',
                nowPlaying: (title) => `Now playing: ${title}`,
                blocked: 'Autoplay was blocked. Tap Play to start the music.',
                scheduled: (percent) => `Music will start automatically after 10 seconds at ${percent}% volume.`,
                paused: (title) => `Paused: ${title}`,
                pausedBeforeReload: 'Music was paused before reload. Press Play to start again.'
            },
            ar: {
                musicLabel: 'الموسيقى الخلفية',
                preparingPlaylist: 'يتم تجهيز قائمة التشغيل...',
                volume: 'الصوت',
                volumeAria: 'مستوى صوت الموسيقى',
                play: 'تشغيل',
                pause: 'إيقاف',
                next: 'الأغنية التالية',
                collapse: 'طي عناصر التحكم بالموسيقى',
                expand: 'إظهار عناصر التحكم بالموسيقى',
                nowPlaying: (title) => `يعمل الآن: ${title}`,
                blocked: 'تم حظر التشغيل التلقائي. اضغط تشغيل لبدء الموسيقى.',
                scheduled: (percent) => `ستبدأ الموسيقى تلقائياً بعد 10 ثوانٍ عند مستوى ${percent}٪.`,
                paused: (title) => `متوقف: ${title}`,
                pausedBeforeReload: 'تم إيقاف الموسيقى قبل إعادة التحميل. اضغط تشغيل للبدء من جديد.'
            },
            bn: {
                musicLabel: 'ব্যাকগ্রাউন্ড মিউজিক',
                preparingPlaylist: 'প্লেলিস্ট প্রস্তুত হচ্ছে...',
                volume: 'ভলিউম',
                volumeAria: 'মিউজিকের ভলিউম',
                play: 'চালু',
                pause: 'বিরতি',
                next: 'পরের গান',
                collapse: 'মিউজিক কন্ট্রোল লুকান',
                expand: 'মিউজিক কন্ট্রোল দেখান',
                nowPlaying: (title) => `এখন চলছে: ${title}`,
                blocked: 'অটোপ্লে ব্লক করা হয়েছে। মিউজিক শুরু করতে চালু চাপুন।',
                scheduled: (percent) => `১০ সেকেন্ড পরে ${percent}% ভলিউমে মিউজিক স্বয়ংক্রিয়ভাবে চালু হবে।`,
                paused: (title) => `বিরতি: ${title}`,
                pausedBeforeReload: 'রিফ্রেশের আগে মিউজিক বন্ধ ছিল। আবার শুরু করতে চালু চাপুন।'
            }
        };
        const iconBook = String.fromCodePoint(0x1F4D6);
        const iconMosque = String.fromCodePoint(0x1F54C);
        const iconPrayerHands = String.fromCodePoint(0x1F932);
        const iconHeart = String.fromCodePoint(0x2764, 0xFE0F);
        const iconTwoHearts = String.fromCodePoint(0x1F49E);
        const iconSparkles = String.fromCodePoint(0x2728);
        const iconBlossom = String.fromCodePoint(0x1F338);
        const iconRose = String.fromCodePoint(0x1F339);
        const iconHibiscus = String.fromCodePoint(0x1F33A);
        const iconTulip = String.fromCodePoint(0x1F337);
        const iconSunflower = String.fromCodePoint(0x1F33C);

        const sideIcons = [
            iconBook,
            iconMosque,
            iconPrayerHands,
            iconHeart,
            iconTwoHearts,
            iconSparkles,
            iconBlossom,
            iconRose,
            iconHibiscus,
            iconTulip,
            iconSunflower
        ];
        const loveIcons = [iconHeart, iconTwoHearts];
        const flowerIcons = [iconBlossom, iconRose, iconHibiscus, iconTulip, iconSunflower];
        const hujurIcons = [iconBook, iconMosque, iconPrayerHands];
        let bubbleZIndex = 1000;
        let currentTrackIndex = 0;
        let autoplayTimerId = null;
        let bubbleIntervalId = null;
        let hasActivatedBiodataExperience = false;
        let isMusicPlayerInitialized = false;
        let isMusicPanelCollapsed = false;
        let hasAutoCollapsedMusicPanel = false;
        let currentLanguage = getInitialLanguage();
        let musicStatusMode = 'preparing';
        let scrollTickAudioContext = null;
        let lastScrollTickAt = 0;
        let lastScrollTickY = window.scrollY || 0;
        const arabicIndicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

        function getInitialLanguage() {
            try {
                const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
                if (storedLanguage && musicTranslations[storedLanguage]) {
                    return storedLanguage;
                }
            } catch (error) {
                // Ignore storage failures and fall back to browser language.
            }

            const browserLanguage = (navigator.language || '').toLowerCase();
            if (browserLanguage.startsWith('ar')) return 'ar';
            if (browserLanguage.startsWith('bn')) return 'bn';
            return 'en';
        }

        function getMusicCopy() {
            return musicTranslations[currentLanguage] || musicTranslations.en;
        }

        function formatLocalizedPercent(value) {
            if (currentLanguage === 'ar') {
                return String(value).replace(/\d/g, (digit) => arabicIndicDigits[Number(digit)]);
            }

            if (currentLanguage === 'bn') {
                return new Intl.NumberFormat('bn-BD').format(value);
            }

            return String(value);
        }

        function getCurrentTrackTitle() {
            return playlist[currentTrackIndex].title;
        }

        function getMusicStatusText() {
            const copy = getMusicCopy();
            const percent = formatLocalizedPercent(getVolumePercent());

            switch (musicStatusMode) {
                case 'playing':
                    return copy.nowPlaying(getCurrentTrackTitle());
                case 'blocked':
                    return copy.blocked;
                case 'scheduled':
                    return copy.scheduled(percent);
                case 'paused':
                    return copy.paused(getCurrentTrackTitle());
                case 'pausedBeforeReload':
                    return copy.pausedBeforeReload;
                default:
                    return copy.preparingPlaylist;
            }
        }

        function setMusicStatusMode(mode) {
            musicStatusMode = mode;
            updateMusicStatus(getMusicStatusText());
        }

        function applyMusicLanguage() {
            const copy = getMusicCopy();
            const labelElement = document.querySelector('.music-player-label');
            const trackElement = document.getElementById('music-track-name');
            const volumeLabelElement = document.querySelector('.music-player-volume-row span');
            const nextButton = document.getElementById('music-next');

            if (labelElement) {
                labelElement.textContent = copy.musicLabel;
            }

            if (trackElement && !audioPlayer.src) {
                trackElement.textContent = copy.preparingPlaylist;
            }

            if (volumeLabelElement) {
                volumeLabelElement.textContent = copy.volume;
            }

            if (nextButton) {
                nextButton.textContent = copy.next;
            }

            updateVolumeControl();
            updateToggleLabel();
            updateMusicPanelState();
            updateMusicStatus(getMusicStatusText());
        }

        function getVolumePercent() {
            return Math.round(audioPlayer.volume * 100);
        }

        function updateVolumeControl() {
            const volumePercent = getVolumePercent();
            document.getElementById('music-volume').value = String(volumePercent);
            document.getElementById('music-volume').setAttribute('aria-label', getMusicCopy().volumeAria);
            document.getElementById('music-volume-value').textContent = `${formatLocalizedPercent(volumePercent)}${currentLanguage === 'ar' ? '٪' : '%'}`;
        }

        function updateMenuOffset() {
            const menu = document.querySelector('.top-menu');
            if (!menu) {
                requestAnimationFrame(updateMenuOffset);
                return;
            }

            const stickyTop = parseFloat(window.getComputedStyle(menu).top) || 0;
            document.documentElement.style.setProperty('--menu-offset', `${menu.offsetHeight + stickyTop}px`);
        }

        function loadTrack(index) {
            currentTrackIndex = index;
            audioPlayer.src = playlist[currentTrackIndex].src;
            document.getElementById('music-track-name').textContent = getCurrentTrackTitle();
        }

        function updateMusicStatus(message) {
            document.getElementById('music-status').textContent = message;
        }

        function updateToggleLabel() {
            const copy = getMusicCopy();
            document.getElementById('music-toggle').textContent = audioPlayer.paused ? copy.play : copy.pause;
        }

        function updateMusicPanelState() {
            const player = document.getElementById('music-player');
            const panelToggle = document.getElementById('music-panel-toggle');
            const panelToggleIcon = document.getElementById('music-panel-toggle-icon');
            if (!player || !panelToggle || !panelToggleIcon) return;

            const isRtlLayout = document.body.classList.contains('is-rtl-language');
            const expandedIconClass = isRtlLayout ? 'fa-chevron-left' : 'fa-chevron-right';
            const collapsedIconClass = isRtlLayout ? 'fa-chevron-right' : 'fa-chevron-left';

            player.classList.toggle('is-collapsed', isMusicPanelCollapsed);
            panelToggle.setAttribute('aria-expanded', String(!isMusicPanelCollapsed));
            panelToggle.setAttribute('aria-label', isMusicPanelCollapsed ? getMusicCopy().expand : getMusicCopy().collapse);
            panelToggleIcon.classList.remove('fa-chevron-right', 'fa-chevron-left');
            panelToggleIcon.classList.add(isMusicPanelCollapsed ? collapsedIconClass : expandedIconClass);
        }

        function autoCollapseMusicPanel() {
            if (hasAutoCollapsedMusicPanel) return;
            hasAutoCollapsedMusicPanel = true;
            isMusicPanelCollapsed = true;
            updateMusicPanelState();
            window.removeEventListener('scroll', handleMusicPanelAutoCollapseByScroll);
            document.removeEventListener('click', handleMusicPanelAutoCollapseByClick);
        }

        function handleMusicPanelAutoCollapseByClick() {
            autoCollapseMusicPanel();
        }

        function handleMusicPanelAutoCollapseByScroll() {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollableHeight <= 0) return;

            if (window.scrollY >= scrollableHeight * 0.1) {
                autoCollapseMusicPanel();
            }
        }

        function armMusicPanelAutoCollapse() {
            window.addEventListener('scroll', handleMusicPanelAutoCollapseByScroll, { passive: true });
            document.addEventListener('click', handleMusicPanelAutoCollapseByClick);
        }

        function getScrollTickAudioContext() {
            const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextConstructor) return null;

            if (!scrollTickAudioContext) {
                scrollTickAudioContext = new AudioContextConstructor();
            }

            if (scrollTickAudioContext.state === 'suspended') {
                scrollTickAudioContext.resume().catch(() => {
                    // Browser audio policies can block the first tick; keep scrolling smooth.
                });
            }

            return scrollTickAudioContext;
        }

        function playScrollTickSound(scrollDirection) {
            const audioContext = getScrollTickAudioContext();
            if (!audioContext) return;

            const now = audioContext.currentTime;
            const oscillator = audioContext.createOscillator();
            const gain = audioContext.createGain();
            const filter = audioContext.createBiquadFilter();
            const baseFrequency = scrollDirection >= 0 ? 1180 : 940;

            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(baseFrequency, now);
            oscillator.frequency.exponentialRampToValueAtTime(baseFrequency * 0.72, now + 0.035);

            filter.type = 'highpass';
            filter.frequency.setValueAtTime(640, now);

            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.exponentialRampToValueAtTime(0.004, now + 0.004);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

            oscillator.connect(filter);
            filter.connect(gain);
            gain.connect(audioContext.destination);
            oscillator.start(now);
            oscillator.stop(now + 0.05);
        }

        function handleScrollTickSound() {
            const currentY = window.scrollY || 0;
            const distance = Math.abs(currentY - lastScrollTickY);
            const now = Date.now();

            if (distance < 28 || now - lastScrollTickAt < 85) return;

            const direction = currentY >= lastScrollTickY ? 1 : -1;
            lastScrollTickY = currentY;
            lastScrollTickAt = now;
            playScrollTickSound(direction);
        }

        function armScrollTickSound() {
            lastScrollTickY = window.scrollY || 0;
            window.addEventListener('scroll', handleScrollTickSound, { passive: true });
        }

        function getStoredManualPause() {
            try {
                return window.localStorage.getItem(MUSIC_PAUSED_STORAGE_KEY) === 'true';
            } catch (error) {
                return false;
            }
        }

        function setStoredManualPause(isPaused) {
            try {
                window.localStorage.setItem(MUSIC_PAUSED_STORAGE_KEY, isPaused ? 'true' : 'false');
            } catch (error) {
                // Ignore storage failures and keep playback working.
            }
        }

        async function playCurrentTrack() {
            try {
                await audioPlayer.play();
                setStoredManualPause(false);
                setMusicStatusMode('playing');
                updateToggleLabel();
                return true;
            } catch (error) {
                setMusicStatusMode('blocked');
                updateToggleLabel();
                return false;
            }
        }

        function goToTrack(index) {
            loadTrack(index);
            return playCurrentTrack();
        }

        function clearScheduledAutoplay() {
            if (autoplayTimerId !== null) {
                clearTimeout(autoplayTimerId);
                autoplayTimerId = null;
            }
        }

        function bindAutoplayRetry() {
            const retryPlayback = async () => {
                if (!audioPlayer.paused) return;
                const started = await playCurrentTrack();
                if (started) {
                    window.removeEventListener('click', retryPlayback);
                    window.removeEventListener('keydown', retryPlayback);
                    window.removeEventListener('touchstart', retryPlayback);
                }
            };

            window.addEventListener('click', retryPlayback, { once: true });
            window.addEventListener('keydown', retryPlayback, { once: true });
            window.addEventListener('touchstart', retryPlayback, { once: true });
        }

        function scheduleAutoplay() {
            clearScheduledAutoplay();
            setMusicStatusMode('scheduled');

            autoplayTimerId = window.setTimeout(() => {
                autoplayTimerId = null;
                playCurrentTrack().then((started) => {
                    if (!started) {
                        bindAutoplayRetry();
                    }
                });
            }, AUTOPLAY_DELAY_MS);
        }

        function setupMusicPlayer() {
            if (isMusicPlayerInitialized) return;
            isMusicPlayerInitialized = true;
            audioPlayer.volume = MUSIC_VOLUME;
            audioPlayer.preload = 'auto';
            loadTrack(0);
            applyMusicLanguage();

            audioPlayer.addEventListener('ended', () => {
                goToTrack((currentTrackIndex + 1) % playlist.length);
            });

            document.getElementById('music-toggle').addEventListener('click', async () => {
                clearScheduledAutoplay();

                if (audioPlayer.paused) {
                    setStoredManualPause(false);
                    await playCurrentTrack();
                    return;
                }

                audioPlayer.pause();
                setStoredManualPause(true);
                setMusicStatusMode('paused');
                updateToggleLabel();
            });

            document.getElementById('music-next').addEventListener('click', async () => {
                clearScheduledAutoplay();
                setStoredManualPause(false);
                await goToTrack((currentTrackIndex + 1) % playlist.length);
            });

            document.getElementById('music-volume').addEventListener('input', (event) => {
                audioPlayer.volume = Number(event.target.value) / 100;
                updateVolumeControl();

                if (!audioPlayer.paused) {
                    setMusicStatusMode('playing');
                    return;
                }

                if (autoplayTimerId !== null) {
                    setMusicStatusMode('scheduled');
                }
            });

            document.getElementById('music-panel-toggle').addEventListener('click', () => {
                isMusicPanelCollapsed = !isMusicPanelCollapsed;
                updateMusicPanelState();
            });

            if (getStoredManualPause()) {
                setMusicStatusMode('pausedBeforeReload');
                updateToggleLabel();
                return;
            }

            scheduleAutoplay();
        }

        function startBiodataExperience() {
            if (hasActivatedBiodataExperience) return;
            hasActivatedBiodataExperience = true;

            armMusicPanelAutoCollapse();
            armScrollTickSound();
            setupMusicPlayer();
            createBubbleBurst();
            bubbleIntervalId = window.setInterval(createBubbleBurst, 22000);
        }

        function makeBubbleDraggable(bubble) {
            let pointerOffsetX = 0;
            let pointerOffsetY = 0;
            let dragging = false;

            function onPointerMove(event) {
                if (!dragging) return;
                const x = event.clientX - pointerOffsetX;
                const y = event.clientY - pointerOffsetY;
                bubble.style.left = `${Math.max(0, Math.min(x, window.innerWidth - bubble.offsetWidth))}px`;
                bubble.style.top = `${Math.max(0, Math.min(y, window.innerHeight - bubble.offsetHeight))}px`;
            }

            function onPointerUp(event) {
                if (!dragging) return;
                dragging = false;
                bubble.releasePointerCapture(event.pointerId);
                bubble.style.cursor = 'grab';
                bubble.style.animationPlayState = 'running';
                document.removeEventListener('pointermove', onPointerMove);
                document.removeEventListener('pointerup', onPointerUp);
            }

            bubble.addEventListener('pointerdown', (event) => {
                event.preventDefault();
                dragging = true;
                bubble.setPointerCapture(event.pointerId);
                bubble.style.cursor = 'grabbing';
                bubble.style.animationPlayState = 'paused';
                const rect = bubble.getBoundingClientRect();
                pointerOffsetX = event.clientX - rect.left;
                pointerOffsetY = event.clientY - rect.top;
                document.addEventListener('pointermove', onPointerMove);
                document.addEventListener('pointerup', onPointerUp);
            });
        }

        function createBubble() {
            const bubble = document.createElement('div');
            const icon = sideIcons[Math.floor(Math.random() * sideIcons.length)];
            bubble.className = 'bubble-icon';
            bubble.textContent = icon;

            if (loveIcons.includes(icon)) {
                bubble.classList.add('love');
            } else if (flowerIcons.includes(icon)) {
                bubble.classList.add('flower');
            } else if (hujurIcons.includes(icon)) {
                bubble.classList.add('hujur');
            } else {
                bubble.classList.add('faith');
            }

            const size = Math.floor(Math.random() * 5) + 28;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.fontSize = `${Math.floor(size * 0.43)}px`;

            const xOffset = Math.random() * (window.innerWidth - size);
            const yOffset = window.innerHeight - size - (Math.random() * 15 + 10);
            bubble.style.left = `${xOffset}px`;
            bubble.style.top = `${yOffset}px`;
            bubble.style.zIndex = `${++bubbleZIndex}`;
            const animationDuration = 14 + Math.random() * 4;
            bubble.style.animation = `bubble-fullscreen ${animationDuration}s ease-in-out forwards`;

            makeBubbleDraggable(bubble);
            document.body.appendChild(bubble);
            setTimeout(() => bubble.remove(), (animationDuration * 1000) + 500);
        }

        function createBubbleBurst() {
            const count = Math.floor(Math.random() * 2) + 1;
            for (let i = 0; i < count; i += 1) {
                setTimeout(() => createBubble(), Math.random() * 14000);
            }
        }

        window.addEventListener('bbdMahbub:languagechange', (event) => {
            currentLanguage = event.detail && event.detail.language ? event.detail.language : getInitialLanguage();
            applyMusicLanguage();
        });

        document.addEventListener('DOMContentLoaded', () => {
            applyMusicLanguage();
            updateMenuOffset();
            updateMusicPanelState();
            if ('ResizeObserver' in window) {
                const menu = document.querySelector('.top-menu');
                if (menu) {
                    const menuResizeObserver = new ResizeObserver(() => {
                        updateMenuOffset();
                    });
                    menuResizeObserver.observe(menu);
                }
            }
            window.addEventListener('resize', () => {
                updateMenuOffset();
                updateMusicPanelState();
            });
            window.addEventListener('bbdMahbub:menu-resize', updateMenuOffset);
            window.addEventListener('load', updateMenuOffset, { once: true });

            window.addEventListener('bbdMahbub:enter-biodata', startBiodataExperience, { once: true });
            if (document.body.classList.contains('has-entered-biodata')) {
                startBiodataExperience();
            }
        });
