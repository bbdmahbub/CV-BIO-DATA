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

    document.getElementById('print-toolbar-title').textContent = copy.title;
    document.querySelector('#print-back span').textContent = copy.back;
    document.querySelector('#print-download span').textContent = copy.save;
    emptyState.querySelector('strong').textContent = copy.empty;
    emptyState.querySelector('a').textContent = copy.returnLink;

    document.getElementById('print-back').addEventListener('click', () => {
        if (window.history.length > 1) {
            window.close();
            window.setTimeout(() => window.history.back(), 80);
            return;
        }
        window.location.href = 'index.html';
    });
    document.getElementById('print-download').addEventListener('click', () => window.print());

    let payload = null;
    try {
        payload = JSON.parse(window.sessionStorage.getItem(payloadKey) || 'null');
    } catch (error) {
        payload = null;
    }

    if (!payload || !payload.markup) {
        documentRoot.hidden = true;
        emptyState.hidden = false;
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
    }

    if (profileHeader && featuredPhoto) {
        const profilePhoto = featuredPhoto.cloneNode(true);
        profilePhoto.className = 'print-profile-photo';
        profilePhoto.removeAttribute('style');
        profileHeader.classList.add('has-print-photo');
        profileHeader.appendChild(profilePhoto);
        gallerySection.remove();
    }

    if (profileStats) {
        const statsContainer = profileStats.parentElement;
        if (statsContainer && statsContainer.parentElement === source) statsContainer.remove();
        else profileStats.remove();
    }

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

    const chooseSplitIndex = (nodes) => {
        const heights = nodes.map((node) => node.getBoundingClientRect().height + 10);
        const total = heights.reduce((sum, height) => sum + height, 0);
        let running = 0;
        let bestIndex = Math.max(1, Math.floor(nodes.length / 2));
        let bestDifference = Number.POSITIVE_INFINITY;

        for (let index = 1; index < nodes.length; index += 1) {
            running += heights[index - 1];
            const difference = Math.abs(running - (total - running));
            if (difference < bestDifference) {
                bestDifference = difference;
                bestIndex = index;
            }
        }
        return bestIndex;
    };

    const fitPage = (inner) => {
        const viewport = inner.parentElement;
        let low = 0.72;
        let high = 1;

        for (let step = 0; step < 14; step += 1) {
            const scale = (low + high) / 2;
            inner.style.width = `${100 / scale}%`;
            inner.style.transform = `scale(${scale})`;
            const fits = inner.scrollHeight * scale <= viewport.clientHeight;
            if (fits) low = scale;
            else high = scale;
        }

        const finalScale = Math.min(1, low);
        inner.style.width = `${100 / finalScale}%`;
        inner.style.transform = `scale(${finalScale})`;
    };

    const renderPages = () => {
        const measuredItems = Array.from(measureRoot.children);
        const splitIndex = chooseSplitIndex(measuredItems);
        measuredItems.slice(0, splitIndex).forEach((item) => pageOne.appendChild(item));
        measuredItems.slice(splitIndex).forEach((item) => pageTwo.appendChild(item));
        fitPage(pageOne);
        fitPage(pageTwo);
        measureRoot.remove();
    };

    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.race([
        Promise.all([fontsReady, waitForImages()]),
        new Promise((resolve) => window.setTimeout(resolve, 2500))
    ]).then(() => window.requestAnimationFrame(renderPages));
}());
