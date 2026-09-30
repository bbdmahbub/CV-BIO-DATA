(function () {
    'use strict';

    const payloadKey = 'bbdMahbubPrintPayload';
    const labels = {
        en: { title: 'A4 Biodata', documentTitle: 'BIO-DATA (CV)', back: 'Back', save: 'Download PDF', empty: 'Print data was not found.', returnLink: 'Return to the biodata' },
        bn: { title: 'A4 বায়োডাটা', documentTitle: 'বায়োডাটা (CV)', back: 'ফিরুন', save: 'PDF ডাউনলোড', empty: 'প্রিন্টের তথ্য পাওয়া যায়নি।', returnLink: 'বায়োডাটায় ফিরে যান' },
        ar: { title: 'السيرة الذاتية A4', documentTitle: 'السيرة الذاتية (CV)', back: 'رجوع', save: 'تنزيل PDF', empty: 'لم يتم العثور على بيانات الطباعة.', returnLink: 'العودة إلى السيرة الذاتية' }
    };

    const params = new URLSearchParams(window.location.search);
    const requestedLanguage = params.get('lang') || 'bn';
    const copy = labels[requestedLanguage] || labels.bn;
    const documentRoot = document.getElementById('print-document');
    const emptyState = document.getElementById('print-empty');
    const pageOne = document.getElementById('print-page-one');
    const pageTwo = document.getElementById('print-page-two');
    const measureRoot = document.getElementById('print-measure');
    const languageSwitcher = document.querySelector('.print-language-switcher');
    const languageButtons = Array.from(document.querySelectorAll('.print-language-button'));

    document.getElementById('print-toolbar-title').textContent = copy.title;
    document.querySelector('#print-back span').textContent = copy.back;
    document.querySelector('#print-download span').textContent = copy.save;
    emptyState.querySelector('strong').textContent = copy.empty;
    emptyState.querySelector('a').textContent = copy.returnLink;

    languageButtons.forEach((button) => {
        const buttonLanguage = button.dataset.language;
        button.classList.toggle('is-active', buttonLanguage === requestedLanguage);
        button.setAttribute('aria-pressed', buttonLanguage === requestedLanguage ? 'true' : 'false');
        button.addEventListener('click', () => {
            if (buttonLanguage === requestedLanguage) return;

            if (window.opener && !window.opener.closed) {
                languageSwitcher.classList.add('is-loading');
                languageButtons.forEach((languageButton) => {
                    languageButton.disabled = true;
                });
                window.opener.postMessage({
                    type: 'bbdMahbub:request-print-language',
                    language: buttonLanguage
                }, window.location.origin);
                window.setTimeout(() => {
                    languageSwitcher.classList.remove('is-loading');
                    languageButtons.forEach((languageButton) => {
                        languageButton.disabled = false;
                    });
                }, 3500);
                return;
            }

            try {
                window.localStorage.setItem('bbdMahbubLanguage', buttonLanguage);
            } catch (error) {
                // Continue to the main page even if storage is unavailable.
            }
            window.location.href = 'index.html';
        });
    });

    document.getElementById('print-back').addEventListener('click', () => {
        if (window.opener && !window.opener.closed) {
            window.opener.focus();
            window.close();
            window.setTimeout(() => {
                if (!window.closed) window.location.href = `index.html?return=print&lang=${requestedLanguage}`;
            }, 150);
            return;
        }

        const returnUrl = new URL('index.html', window.location.href);
        returnUrl.searchParams.set('return', 'print');
        returnUrl.searchParams.set('lang', requestedLanguage);
        window.location.href = returnUrl.href;
    });
    document.getElementById('print-download').addEventListener('click', () => window.print());

    let payload = null;
    try {
        payload = JSON.parse(window.sessionStorage.getItem(payloadKey) || 'null');
    } catch (error) {
        payload = null;
    }

    if (!payload || !payload.markup) {
        const fallbackUrl = new URL('index.html', window.location.href);
        fallbackUrl.searchParams.set('print', '1');
        fallbackUrl.searchParams.set('lang', requestedLanguage);
        fallbackUrl.searchParams.set('v', params.get('v') || '');
        window.location.replace(fallbackUrl.href);
        return;
    }

    document.documentElement.lang = payload.language || requestedLanguage;
    document.documentElement.dir = payload.dir || 'ltr';
    document.title = `${payload.title || copy.title} - A4`;
    document.getElementById('print-name-one').textContent = payload.title || copy.title;
    document.getElementById('print-name-two').textContent = payload.title || copy.title;

    const source = document.createElement('div');
    source.innerHTML = payload.markup;
    source.querySelectorAll('.top-menu, script, .photo-gallery-thumbs-wrap, .photo-zoom-trigger, .photo-frame-overlay, .family-summary').forEach((node) => node.remove());
    source.querySelectorAll('[id$="-section"]').forEach((section) => {
        section.classList.add(`print-${section.id}`);
    });

    const profileHeader = source.querySelector('#profile-top');
    const gallerySection = source.querySelector('#gallery-section');
    const profileStats = source.querySelector('.stats');
    const featuredPhoto = gallerySection ? gallerySection.querySelector('.photo-frame-featured .photo-gallery-image') : null;
    if (profileHeader) {
        const documentHeading = document.createElement('div');
        documentHeading.className = 'print-document-heading';
        documentHeading.textContent = copy.documentTitle;
        profileHeader.prepend(documentHeading);
        const headingVine = document.createElement('span');
        headingVine.className = 'print-heading-vine';
        headingVine.setAttribute('aria-hidden', 'true');
        ['fa-leaf', 'fa-leaf', 'fa-spa', 'fa-leaf', 'fa-spa', 'fa-leaf', 'fa-leaf'].forEach((iconName) => {
            const icon = document.createElement('i');
            icon.className = `fas ${iconName}`;
            headingVine.appendChild(icon);
        });
        profileHeader.appendChild(headingVine);
    }

    if (profileHeader && featuredPhoto) {
        const profilePhoto = featuredPhoto.cloneNode(true);
        profilePhoto.className = 'print-profile-photo';
        profilePhoto.removeAttribute('style');
        const profileFrame = document.createElement('figure');
        profileFrame.className = 'print-profile-frame';
        profileFrame.appendChild(profilePhoto);
        const addPhotoVine = (position, icons) => {
            const vine = document.createElement('span');
            vine.className = `print-photo-vine print-photo-vine-${position}`;
            vine.setAttribute('aria-hidden', 'true');
            icons.forEach((iconName) => {
                const icon = document.createElement('i');
                icon.className = `fas ${iconName}`;
                vine.appendChild(icon);
            });
            profileFrame.appendChild(vine);
        };

        addPhotoVine('top', ['fa-leaf', 'fa-spa', 'fa-leaf', 'fa-spa', 'fa-leaf']);
        addPhotoVine('right', ['fa-leaf', 'fa-spa', 'fa-leaf']);
        addPhotoVine('bottom', ['fa-leaf', 'fa-spa', 'fa-leaf', 'fa-spa', 'fa-leaf']);
        addPhotoVine('left', ['fa-leaf', 'fa-spa', 'fa-leaf']);
        profileHeader.classList.add('has-print-photo');
        profileHeader.appendChild(profileFrame);
        gallerySection.remove();
    }

    if (profileStats) {
        const statsContainer = profileStats.parentElement;
        if (statsContainer && statsContainer.parentElement === source) statsContainer.remove();
        else profileStats.remove();
    }

    const flowSectionRowsForPrint = (sectionId) => {
        const section = source.querySelector(`#${sectionId}`);
        const list = section?.querySelector('.section-item-list, .section-item-list-compact');
        if (!section || !list || list.children.length < 2) return;

        const rows = Array.from(list.children);
        const sectionHeader = section.querySelector(':scope > .section-header');
        const fragments = rows.map((row, index) => {
            const fragment = section.cloneNode(false);
            fragment.classList.add('print-flow-fragment');
            if (index === 0 && sectionHeader) fragment.appendChild(sectionHeader.cloneNode(true));

            const content = document.createElement('div');
            content.className = 'card-content';
            const rowList = list.cloneNode(false);
            rowList.appendChild(row.cloneNode(true));
            content.appendChild(rowList);
            fragment.appendChild(content);
            return fragment;
        });

        section.replaceWith(...fragments);
    };

    // Let the training lines flow across the page boundary instead of moving
    // the complete section away and leaving unused space on page one.
    flowSectionRowsForPrint('training-section');

    source.querySelectorAll('[id]').forEach((node) => node.removeAttribute('id'));
    source.querySelectorAll('button').forEach((button) => {
        if (!button.closest('.photo-frame-inner')) button.remove();
    });

    const items = Array.from(source.children).filter((node) => !node.classList.contains('top-menu'));
    if (!items.length) {
        documentRoot.hidden = true;
        emptyState.hidden = false;
        return;
    }

    items.forEach((item) => measureRoot.appendChild(item));

    const waitForImages = () => {
        const images = Array.from(measureRoot.querySelectorAll('img'));
        return Promise.all(images.map((img) => {
            if (img.complete) return Promise.resolve();
            return new Promise((resolve) => {
                img.addEventListener('load', resolve, { once: true });
                img.addEventListener('error', resolve, { once: true });
            });
        }));
    };

    const setPageScale = (inner, scale) => {
        inner.style.width = `${100 / scale}%`;
        inner.style.transform = `scale(${scale})`;
    };

    const layoutAtScale = (nodes, scale) => {
        const pageHeight = pageOne.parentElement.clientHeight;
        pageOne.replaceChildren();
        pageTwo.replaceChildren();
        setPageScale(pageOne, scale);
        setPageScale(pageTwo, scale);

        let splitIndex = 0;
        for (let index = 0; index < nodes.length; index += 1) {
            const node = nodes[index];
            pageOne.appendChild(node);

            if (index > 0 && pageOne.scrollHeight * scale > pageHeight) {
                pageOne.removeChild(node);
                break;
            }
            splitIndex = index + 1;
        }

        nodes.slice(splitIndex).forEach((node) => pageTwo.appendChild(node));
        return {
            fits: pageTwo.scrollHeight * scale <= pageHeight,
            splitIndex
        };
    };

    const renderPages = () => {
        const measuredItems = Array.from(measureRoot.children);
        // Preserve every item inside the two A4 pages before accepting a
        // larger type scale that would crop the document content.
        const minimumScale = 0.58;
        let low = minimumScale;
        let high = 1;
        let bestScale = minimumScale;

        if (layoutAtScale(measuredItems, minimumScale).fits) {
            for (let step = 0; step < 12; step += 1) {
                const scale = (low + high) / 2;
                if (layoutAtScale(measuredItems, scale).fits) {
                    bestScale = scale;
                    low = scale;
                } else {
                    high = scale;
                }
            }
        }

        layoutAtScale(measuredItems, bestScale);
        measureRoot.remove();
    };

    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.race([
        Promise.all([fontsReady, waitForImages()]),
        new Promise((resolve) => window.setTimeout(resolve, 2500))
    ]).then(() => window.requestAnimationFrame(renderPages));
}());
