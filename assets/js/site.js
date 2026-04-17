const playlist = [
            { title: 'Jodi Kotha Dao Bondhu', src: encodeURI('assets/audio/jodi-kotha-dao-bondhu.mp3') },
            { title: 'Rasuler Simahin Valobasha', src: encodeURI('assets/audio/rasuler-simahin-valobasha.mp3') },
            { title: 'Khadijar Moto Jibon Goro', src: encodeURI('assets/audio/khadijar-moto-jibon-goro.mp3') }
        ];
        const MUSIC_VOLUME = 0.15;
        const AUTOPLAY_DELAY_MS = 10000;
        const MUSIC_PAUSED_STORAGE_KEY = 'bbdMahbubMusicPaused';
        const audioPlayer = new Audio();
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

        function getVolumePercent() {
            return Math.round(audioPlayer.volume * 100);
        }

        function updateVolumeControl() {
            const volumePercent = getVolumePercent();
            document.getElementById('music-volume').value = String(volumePercent);
            document.getElementById('music-volume-value').textContent = `${volumePercent}%`;
        }

        function updateMenuOffset() {
            const menu = document.querySelector('.top-menu');
            if (!menu) {
                requestAnimationFrame(updateMenuOffset);
                return;
            }

            document.documentElement.style.setProperty('--menu-offset', `${menu.offsetHeight}px`);
        }

        function loadTrack(index) {
            currentTrackIndex = index;
            audioPlayer.src = playlist[currentTrackIndex].src;
            document.getElementById('music-track-name').textContent = playlist[currentTrackIndex].title;
        }

        function updateMusicStatus(message) {
            document.getElementById('music-status').textContent = message;
        }

        function updateToggleLabel() {
            document.getElementById('music-toggle').textContent = audioPlayer.paused ? 'Play' : 'Pause';
        }

        function updateMusicPanelState() {
            const player = document.getElementById('music-player');
            const panelToggle = document.getElementById('music-panel-toggle');
            const panelToggleIcon = document.getElementById('music-panel-toggle-icon');
            if (!player || !panelToggle || !panelToggleIcon) return;

            player.classList.toggle('is-collapsed', isMusicPanelCollapsed);
            panelToggle.setAttribute('aria-expanded', String(!isMusicPanelCollapsed));
            panelToggle.setAttribute('aria-label', isMusicPanelCollapsed ? 'Expand music controls' : 'Collapse music controls');
            panelToggleIcon.classList.toggle('fa-chevron-right', !isMusicPanelCollapsed);
            panelToggleIcon.classList.toggle('fa-chevron-left', isMusicPanelCollapsed);
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
                updateMusicStatus(`Now playing: ${playlist[currentTrackIndex].title} at ${getVolumePercent()}% volume`);
                updateToggleLabel();
                return true;
            } catch (error) {
                updateMusicStatus('Autoplay was blocked. Tap Play to start the music.');
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
            updateMusicStatus(`Music will start automatically after 10 seconds at ${getVolumePercent()}% volume.`);

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
            updateVolumeControl();
            updateToggleLabel();

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
                updateMusicStatus(`Paused: ${playlist[currentTrackIndex].title}`);
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
                    updateMusicStatus(`Now playing: ${playlist[currentTrackIndex].title} at ${getVolumePercent()}% volume`);
                    return;
                }

                if (autoplayTimerId !== null) {
                    updateMusicStatus(`Music will start automatically after 10 seconds at ${getVolumePercent()}% volume.`);
                }
            });

            document.getElementById('music-panel-toggle').addEventListener('click', () => {
                isMusicPanelCollapsed = !isMusicPanelCollapsed;
                updateMusicPanelState();
            });

            if (getStoredManualPause()) {
                updateMusicStatus('Music was paused before reload. Press Play to start again.');
                updateToggleLabel();
                return;
            }

            scheduleAutoplay();
        }

        function startBiodataExperience() {
            if (hasActivatedBiodataExperience) return;
            hasActivatedBiodataExperience = true;

            armMusicPanelAutoCollapse();
            setupMusicPlayer();
            createBubbleBurst();
            bubbleIntervalId = window.setInterval(createBubbleBurst, 1800);
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

            const size = Math.floor(Math.random() * 16) + 42;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.fontSize = `${Math.floor(size * 0.45)}px`;

            const xOffset = Math.random() * (window.innerWidth - size);
            const yOffset = window.innerHeight - size - (Math.random() * 20 + 10);
            bubble.style.left = `${xOffset}px`;
            bubble.style.top = `${yOffset}px`;
            bubble.style.zIndex = `${++bubbleZIndex}`;
            bubble.style.animation = `bubble-fullscreen ${5.5 + Math.random() * 1.5}s ease-in-out forwards`;

            makeBubbleDraggable(bubble);
            document.body.appendChild(bubble);
            setTimeout(() => bubble.remove(), 7200);
        }

        function createBubbleBurst() {
            const count = Math.floor(Math.random() * 3) + 2;
            for (let i = 0; i < count; i += 1) {
                setTimeout(() => createBubble(), Math.random() * 220);
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            updateMenuOffset();
            updateMusicPanelState();
            window.addEventListener('resize', () => {
                updateMenuOffset();
                updateMusicPanelState();
            });
            window.addEventListener('load', updateMenuOffset, { once: true });

            window.addEventListener('bbdMahbub:enter-biodata', startBiodataExperience, { once: true });
        });
