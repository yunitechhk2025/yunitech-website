document.addEventListener('DOMContentLoaded', function() {
    let currentLanguage = localStorage.getItem('selectedLanguage') || 'zh-tw';
    const newsId = new URLSearchParams(window.location.search).get('id');

    function getLangData() {
        return languageData[currentLanguage] || languageData['zh-tw'];
    }

    function updateStaticText() {
        const data = getLangData();
        if (!data) return;

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (data[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = data[key];
                } else {
                    element.innerHTML = data[key];
                }
            }
        });

        document.documentElement.lang = currentLanguage;
    }

    function formatDate(dateStr, lang) {
        const date = new Date(dateStr + 'T00:00:00');
        const locales = { 'zh-cn': 'zh-CN', 'zh-tw': 'zh-TW', 'en': 'en-US' };
        return date.toLocaleDateString(locales[lang] || 'zh-TW', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function renderNewsDetail() {
        const container = document.getElementById('newsDetail');
        if (!container || typeof newsData === 'undefined') return;

        const data = getLangData();
        const lang = currentLanguage;

        if (!newsId) {
            container.innerHTML = `
                <div class="news-detail-not-found">
                    <i class="fas fa-newspaper"></i>
                    <p>${data['news-not-found'] || ''}</p>
                    <a href="index.html#news" class="btn btn-primary">${data['news-not-found-link'] || ''}</a>
                </div>`;
            document.title = data['news-not-found'] || 'News';
            return;
        }

        const item = newsData.find(n => n.id === newsId);
        if (!item) {
            container.innerHTML = `
                <div class="news-detail-not-found">
                    <i class="fas fa-newspaper"></i>
                    <p>${data['news-not-found'] || ''}</p>
                    <a href="index.html#news" class="btn btn-primary">${data['news-not-found-link'] || ''}</a>
                </div>`;
            document.title = data['news-not-found'] || 'News';
            return;
        }

        const title = item.title[lang] || item.title['zh-tw'] || '';
        const paragraphs = (item.body && (item.body[lang] || item.body['zh-tw'])) ||
                           [item.content[lang] || item.content['zh-tw'] || ''];
        const formattedDate = formatDate(item.date, lang);

        const heroImg = item.image
            ? `<div class="news-detail-hero"><img src="${item.image}" alt="${title}"></div>`
            : '';

        const bodyHtml = paragraphs.map(p => `<p>${p}</p>`).join('');

        container.innerHTML = `
            ${heroImg}
            <div class="news-detail-content">
                <time class="news-detail-date" datetime="${item.date}">${formattedDate}</time>
                <h1 class="news-detail-title">${title}</h1>
                <div class="news-detail-body">${bodyHtml}</div>
            </div>`;

        document.title = `${title} - YUNI TECH LIMITED`;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = item.content[lang] || item.content['zh-tw'] || '';
        }
    }

    function switchDetailLanguage(language) {
        currentLanguage = language;
        localStorage.setItem('selectedLanguage', language);

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === language);
        });

        updateStaticText();
        renderNewsDetail();
    }

    switchDetailLanguage(currentLanguage);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchDetailLanguage(this.getAttribute('data-lang'));
        });
    });
});
