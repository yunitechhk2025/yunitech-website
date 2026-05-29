// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    
    // 语言切换功能
    let currentLanguage = 'zh-tw';
    
    // 初始化语言
    function initLanguage() {
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'zh-tw';
        switchLanguage(savedLanguage);
    }
    
    // 切换语言函数
    function switchLanguage(language) {
        currentLanguage = language;
        localStorage.setItem('selectedLanguage', language);
        
        // 更新按钮状态
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === language) {
                btn.classList.add('active');
            }
        });
        
        // 更新页面文本
        updatePageText(language);
    }
    
    // 更新页面文本
    function updatePageText(language) {
        const data = languageData[language];
        if (!data) return;
        
        // 更新所有带有 data-lang-key 属性的元素
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
        
        // 更新页面标题
        const titles = {
            'zh-cn': 'YUNI TECH LIMITED - 企业AI转型服务商',
            'zh-tw': 'YUNI TECH LIMITED - 企業AI轉型服務商',
            'en': 'YUNI TECH LIMITED - Enterprise AI Transformation Services'
        };
        document.title = titles[language] || titles['zh-cn'];
        
        // 更新HTML lang属性
        document.documentElement.lang = language;
    }
    
    // 语言切换按钮事件
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            switchLanguage(language);
        });
    });
    
    // 初始化语言设置
    initLanguage();
    
    // 移动端菜单切换
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // 点击菜单项时关闭移动端菜单
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // 跳过空的hash或只有#的链接
            if (href === '#' || href === '') {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70; // 考虑导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 滚动时添加动画效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    document.querySelectorAll('.service-card, .feature-item, .contact-item, .stat-item').forEach(el => {
        observer.observe(el);
    });
    
    // 数字动画效果
    function animateNumber(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, 16);
    }
    
    // 当统计数字进入视窗时开始动画
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('h4');
                const finalNumber = parseInt(statNumber.textContent);
                animateNumber(statNumber, 0, finalNumber, 2000);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // 表单提交处理 - 使用Formspree
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // 显示提交中消息
            showNotification('正在发送消息，请稍候...', 'info');
        });
    }
    
    // 检查URL参数，显示成功消息
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showNotification('消息发送成功！我们会尽快与您联系。', 'success');
        // 清理URL参数
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // 通知消息函数
    function showNotification(message, type = 'info') {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // 添加样式
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // 显示动画
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // 关闭按钮事件
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            hideNotification(notification);
        });
        
        // 自动关闭
        setTimeout(() => {
            hideNotification(notification);
        }, 5000);
    }
    
    function hideNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
    
    // 服务卡片悬停效果增强
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // CTA按钮点击效果 - 已移除，允许正常跳转到外部链接
    
    // 导航高亮效果
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // 页面加载动画
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // 为主要元素添加加载动画
        const elementsToAnimate = document.querySelectorAll('.hero-content, .hero-visual');
        elementsToAnimate.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, index * 200);
        });
    });
    
    // 鼠标跟随效果（可选）
    let mouseX = 0, mouseY = 0;
    let ballX = 0, ballY = 0;
    let speed = 0.1;
    
    function animate() {
        let distX = mouseX - ballX;
        let distY = mouseY - ballY;
        
        ballX += distX * speed;
        ballY += distY * speed;
        
        requestAnimationFrame(animate);
    }
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    animate();
    
    // 键盘导航支持
    document.addEventListener('keydown', function(e) {
        // ESC键关闭移动端菜单
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // 性能优化：防抖滚动事件
    let ticking = false;
    
    function updateOnScroll() {
        // 这里可以添加需要在滚动时执行的代码
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
    
    // 表单验证功能
    function initFormValidation() {
        const form = document.querySelector('.contact-form form');
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('input[required], textarea[required]');
            let hasErrors = false;
            
            // 清除之前的错误状态
            document.querySelectorAll('.form-error').forEach(error => error.remove());
            document.querySelectorAll('.form-group.error').forEach(group => group.classList.remove('error'));
            
            requiredFields.forEach(field => {
                const formGroup = field.closest('.form-group');
                
                if (!field.value.trim()) {
                    hasErrors = true;
                    formGroup.classList.add('error');
                    
                    // 添加错误提示
                    const errorMsg = document.createElement('div');
                    errorMsg.className = 'form-error';
                    errorMsg.textContent = getErrorMessage(field);
                    formGroup.appendChild(errorMsg);
                }
            });
            
            if (hasErrors) {
                e.preventDefault();
                // 滚动到第一个错误字段
                const firstError = document.querySelector('.form-group.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
        
        // 实时验证
        form.addEventListener('input', function(e) {
            if (e.target.hasAttribute('required')) {
                const formGroup = e.target.closest('.form-group');
                const existingError = formGroup.querySelector('.form-error');
                
                if (e.target.value.trim()) {
                    formGroup.classList.remove('error');
                    if (existingError) {
                        existingError.remove();
                    }
                }
            }
        });
    }
    
    // 获取错误消息
    function getErrorMessage(field) {
        const messages = {
            'zh-cn': {
                'name': '请填写您的姓名',
                'email': '请填写邮箱地址',
                'company': '请填写公司名称',
                'message': '请描述您的需求'
            },
            'zh-tw': {
                'name': '請填寫您的姓名',
                'email': '請填寫郵箱地址',
                'company': '請填寫公司名稱',
                'message': '請描述您的需求'
            },
            'en': {
                'name': 'Please enter your name',
                'email': 'Please enter your email',
                'company': 'Please enter company name',
                'message': 'Please describe your requirements'
            }
        };
        
        return messages[currentLanguage][field.name] || '请填写此字段';
    }
    
    // 初始化表单验证
    initFormValidation();

    // ══════════════════════════════════
    //  最新资讯渲染
    // ══════════════════════════════════
    let localNews = (typeof newsData !== 'undefined') ? [...newsData] : [];

    function renderNews(language) {
        const grid = document.getElementById('newsGrid');
        if (!grid) return;
        const lang = language || currentLanguage;
        const data = languageData[lang] || languageData['zh-tw'];
        const pinnedLabel = data['news-pinned'] || '置顶';
        const emptyText   = data['news-empty']   || '暂无资讯';
        const isAdmin     = document.body.classList.contains('admin-mode');

        const sorted = [...localNews].sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            return new Date(b.date) - new Date(a.date);
        });

        const cards = sorted.length === 0
            ? `<p class="news-empty">${emptyText}</p>`
            : sorted.map(item => {
                const title   = item.title[lang]   || item.title['zh-tw'] || '';
                const content = item.content[lang] || item.content['zh-tw'] || '';
                const badge   = item.pinned ? `<span class="news-card-pinned">${pinnedLabel}</span>` : '';
                const img     = item.image ? `<img src="${item.image}" class="news-card-img" alt="">` : '';
                const actions = isAdmin ? `
                    <div class="news-card-actions">
                        <button class="nc-btn nc-btn-edit" onclick="newsAdmin.openEdit('${item.id}')">编辑</button>
                        <button class="nc-btn nc-btn-del"  onclick="newsAdmin.del('${item.id}')">删除</button>
                    </div>` : '';
                return `<div class="news-card" data-news-id="${item.id}">
                    ${actions}${img}
                    <div class="news-card-meta">
                        <span class="news-card-date">${item.date}</span>${badge}
                    </div>
                    <h3>${title}</h3><p>${content}</p>
                </div>`;
            }).join('');

        grid.innerHTML = cards + (isAdmin ? `<div class="news-card-add" onclick="newsAdmin.openEdit(null)">＋ 添加资讯</div>` : '');
    }

    // 语言切换时同步更新资讯
    const _origSwitch = switchLanguage;
    switchLanguage = function(language) {
        _origSwitch(language);
        renderNews(language);
    };

    renderNews(currentLanguage);

    // ══════════════════════════════════
    //  管理模式（URL 含 ?edit=yuni-news-2026）
    // ══════════════════════════════════
    const ADMIN_EDIT_KEY = 'yuni-news-2026';
    const GH_REPO   = 'yunitechhk2025/yunitech-website';
    const GH_BRANCH = 'main';
    const GH_FILE   = 'news-data.js';

    if (urlParams.get('edit') === ADMIN_EDIT_KEY) initAdminMode();

    function initAdminMode() {
        document.body.classList.add('admin-mode');
        const savedToken = localStorage.getItem('yuni_gh_token') || '';
        const hasToken = !!savedToken;

        const bar = document.createElement('div');
        bar.className = 'admin-topbar';
        bar.innerHTML = `
            <div class="atb-left">
                <span class="atb-badge">管理模式</span>
                <span style="color:#a0aec0">编辑资讯后点击「发布」更新官网</span>
            </div>
            <div class="atb-right">
                <span id="atbTokenStatus" style="font-size:0.82rem;color:${hasToken?'#68d391':'#fc8181'}">${hasToken?'✅ 已连接':'⚠️ 未配置'}</span>
                <button class="btn-atb-exit" style="font-size:0.8rem;padding:5px 10px" onclick="newsAdmin.openTokenSetup()" title="设置Token">⚙️</button>
                <input id="atbToken" type="hidden" value="${savedToken}" />
                <button class="btn-atb-save" id="atbSaveBtn" onclick="newsAdmin.publish()">发布到官网</button>
                <button class="btn-atb-exit" onclick="newsAdmin.exit()">退出</button>
            </div>`;
        document.body.prepend(bar);
        if (!hasToken) setTimeout(() => newsAdmin.openTokenSetup(), 400);

        const overlay = document.createElement('div');
        overlay.className = 'news-edit-overlay';
        overlay.id = 'newsEditOverlay';
        overlay.innerHTML = `
            <div class="news-edit-box">
                <div class="neb-title" id="nebTitle">编辑资讯</div>
                <div class="neb-field"><label>日期</label><input type="date" id="nebDate" /></div>
                <div class="neb-field">
                    <label>图片（选填）</label>
                    <div id="nebImgPreviewWrap" style="display:none;margin-bottom:0.6rem;">
                        <img id="nebImgPreview" src="" alt="" style="width:100%;max-height:180px;object-fit:cover;border-radius:8px;border:1px solid #eee;">
                        <button onclick="newsAdmin.removeImage()" style="margin-top:0.4rem;background:#fff5f5;border:1px solid #fcc;color:#e53e3e;padding:4px 12px;border-radius:6px;font-size:0.8rem;cursor:pointer;">移除图片</button>
                    </div>
                    <label id="nebUploadLabel" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:1rem;border:2px dashed #c3cef7;border-radius:10px;cursor:pointer;color:#667eea;font-size:0.9rem;background:#f8f9ff;" onmouseover="this.style.background='#eef0ff'" onmouseout="this.style.background='#f8f9ff'">
                        📷 点击上传图片
                        <input type="file" id="nebImgFile" accept="image/*" style="display:none;" onchange="newsAdmin.previewImage(this)" />
                    </label>
                    <input type="hidden" id="nebImage" />
                </div>
                <div class="neb-pin-row"><input type="checkbox" id="nebPinned" /><label for="nebPinned">置顶</label></div>
                <div class="neb-lang-tabs">
                    <button class="neb-lang-tab on" onclick="nebSwitchLang('zh-tw',this)">繁</button>
                    <button class="neb-lang-tab" onclick="nebSwitchLang('zh-cn',this)">简</button>
                    <button class="neb-lang-tab" onclick="nebSwitchLang('en',this)">EN</button>
                </div>
                <div class="neb-lf on" id="neb-lf-zh-tw">
                    <div class="neb-field"><label>標題（繁）</label><input type="text" id="neb-t-zh-tw" /></div>
                    <div class="neb-field"><label>內容（繁）</label><textarea id="neb-c-zh-tw" rows="3"></textarea></div>
                </div>
                <div class="neb-lf" id="neb-lf-zh-cn">
                    <div class="neb-field"><label>标题（简）</label><input type="text" id="neb-t-zh-cn" /></div>
                    <div class="neb-field"><label>内容（简）</label><textarea id="neb-c-zh-cn" rows="3"></textarea></div>
                </div>
                <div class="neb-lf" id="neb-lf-en">
                    <div class="neb-field"><label>Title (EN)</label><input type="text" id="neb-t-en" /></div>
                    <div class="neb-field"><label>Content (EN)</label><textarea id="neb-c-en" rows="3"></textarea></div>
                </div>
                <div class="neb-actions">
                    <button class="neb-btn-save" onclick="newsAdmin.saveEdit()">保存</button>
                    <button class="neb-btn-cancel" onclick="newsAdmin.closeEdit()">取消</button>
                </div>
            </div>`;
        document.body.appendChild(overlay);

        const toast = document.createElement('div');
        toast.className = 'admin-toast';
        toast.id = 'adminToast';
        document.body.appendChild(toast);

        renderNews(currentLanguage);
    }

    window.nebSwitchLang = function(lang, btn) {
        document.querySelectorAll('.neb-lang-tab').forEach(b => b.classList.remove('on'));
        document.querySelectorAll('.neb-lf').forEach(f => f.classList.remove('on'));
        btn.classList.add('on');
        document.getElementById('neb-lf-' + lang).classList.add('on');
    };

    window.newsAdmin = {
        editingId: null,
        _pendingFile: null,

        openEdit(id) {
            this.editingId = id;
            this._pendingFile = null;
            document.getElementById('nebTitle').textContent = id ? '编辑资讯' : '添加资讯';
            document.querySelectorAll('.neb-lang-tab').forEach((b,i) => b.classList.toggle('on', i===0));
            document.querySelectorAll('.neb-lf').forEach((f,i) => f.classList.toggle('on', i===0));
            if (id) {
                const item = localNews.find(n => n.id === id);
                if (!item) return;
                document.getElementById('nebDate').value     = item.date || '';
                document.getElementById('nebImage').value    = item.image || '';
                document.getElementById('nebPinned').checked = !!item.pinned;
                if (item.image) {
                    document.getElementById('nebImgPreview').src = item.image;
                    document.getElementById('nebImgPreviewWrap').style.display = 'block';
                    document.getElementById('nebUploadLabel').style.display = 'none';
                } else {
                    document.getElementById('nebImgPreviewWrap').style.display = 'none';
                    document.getElementById('nebUploadLabel').style.display = 'flex';
                }
                ['zh-tw','zh-cn','en'].forEach(l => {
                    document.getElementById('neb-t-'+l).value = item.title[l]   || '';
                    document.getElementById('neb-c-'+l).value = item.content[l] || '';
                });
            } else {
                document.getElementById('nebDate').value     = new Date().toISOString().slice(0,10);
                document.getElementById('nebImage').value    = '';
                document.getElementById('nebPinned').checked = false;
                document.getElementById('nebImgPreviewWrap').style.display = 'none';
                document.getElementById('nebUploadLabel').style.display = 'flex';
                ['zh-tw','zh-cn','en'].forEach(l => {
                    document.getElementById('neb-t-'+l).value = '';
                    document.getElementById('neb-c-'+l).value = '';
                });
            }
            document.getElementById('newsEditOverlay').classList.add('open');
        },

        closeEdit() { document.getElementById('newsEditOverlay').classList.remove('open'); },

        saveEdit() {
            const date   = document.getElementById('nebDate').value;
            const pinned = document.getElementById('nebPinned').checked;
            const tTw = document.getElementById('neb-t-zh-tw').value.trim();
            const tCn = document.getElementById('neb-t-zh-cn').value.trim();
            const tEn = document.getElementById('neb-t-en').value.trim();
            const cTw = document.getElementById('neb-c-zh-tw').value.trim();
            const cCn = document.getElementById('neb-c-zh-cn').value.trim();
            const cEn = document.getElementById('neb-c-en').value.trim();
            if (!tTw && !tCn && !tEn) { adminToast('请至少填写一种语言的标题','err'); return; }
            if (!date) { adminToast('请选择日期','err'); return; }
            const existingImg = document.getElementById('nebImage').value.trim();

            const applyItem = (imageUrl) => {
                if (this.editingId) {
                    const item = localNews.find(n => n.id === this.editingId);
                    if (item) {
                        item.date = date; item.pinned = pinned;
                        if (imageUrl !== null) item.image = imageUrl;
                        item.title   = {'zh-tw':tTw||tCn||tEn,'zh-cn':tCn||tTw||tEn,'en':tEn||tTw||tCn};
                        item.content = {'zh-tw':cTw||cCn||cEn,'zh-cn':cCn||cTw||cEn,'en':cEn||cTw||cCn};
                    }
                } else {
                    localNews.unshift({ id:'n'+Date.now(), date, pinned, image: imageUrl||'',
                        title:   {'zh-tw':tTw||tCn||tEn,'zh-cn':tCn||tTw||tEn,'en':tEn||tTw||tCn},
                        content: {'zh-tw':cTw||cCn||cEn,'zh-cn':cCn||cTw||cEn,'en':cEn||cTw||cCn}
                    });
                }
                this.closeEdit();
                renderNews(currentLanguage);
            };

            if (this._pendingFile) {
                const token = localStorage.getItem('yuni_gh_token') || '';
                if (!token) { this.openTokenSetup(); return; }
                adminToast('<span class="admin-spinner"></span>正在上传图片…','');
                this.uploadImageToGitHub(token)
                    .then(url => { this._pendingFile = null; applyItem(url); adminToast('图片已上传，点「发布到官网」保存','ok'); })
                    .catch(e => adminToast('图片上传失败：'+e.message,'err'));
            } else {
                applyItem(existingImg || null);
                adminToast('已更新，点「发布到官网」保存','ok');
            }
        },

        del(id) {
            if (!confirm('确定删除？')) return;
            localNews = localNews.filter(n => n.id !== id);
            renderNews(currentLanguage);
            adminToast('已删除，点「发布到官网」保存','ok');
        },

        async publish() {
            const token = localStorage.getItem('yuni_gh_token') || '';
            if (!token) { this.openTokenSetup(); return; }
            const btn = document.getElementById('atbSaveBtn');
            btn.disabled = true;
            adminToast('<span class="admin-spinner"></span>正在发布…','');
            try {
                const r1 = await fetch(`https://api.github.com/repos/${GH_REPO}/contents/${GH_FILE}?ref=${GH_BRANCH}`,
                    {headers:{'Authorization':'token '+token,'Accept':'application/vnd.github.v3+json'}});
                if (!r1.ok) throw new Error('获取文件失败 '+r1.status);
                const info = await r1.json();
                const content = `const newsData = ${JSON.stringify(localNews,null,4)};\n`;
                const encoded = btoa(unescape(encodeURIComponent(content)));
                const r2 = await fetch(`https://api.github.com/repos/${GH_REPO}/contents/${GH_FILE}`,
                    {method:'PUT', headers:{'Authorization':'token '+token,'Content-Type':'application/json','Accept':'application/vnd.github.v3+json'},
                     body: JSON.stringify({message:'update news via inline admin',content:encoded,sha:info.sha,branch:GH_BRANCH})});
                if (!r2.ok) { const e=await r2.json(); throw new Error(e.message); }
                adminToast('✅ 发布成功！官网约 1 分钟后更新','ok');
            } catch(e) { adminToast('失败：'+e.message,'err'); }
            btn.disabled = false;
        },

        previewImage(input) {
            const file = input.files[0];
            if (!file) return;
            this._pendingFile = file;
            const reader = new FileReader();
            reader.onload = e => {
                document.getElementById('nebImgPreview').src = e.target.result;
                document.getElementById('nebImgPreviewWrap').style.display = 'block';
                document.getElementById('nebUploadLabel').style.display = 'none';
            };
            reader.readAsDataURL(file);
        },

        removeImage() {
            this._pendingFile = null;
            document.getElementById('nebImage').value = '';
            document.getElementById('nebImgPreview').src = '';
            document.getElementById('nebImgPreviewWrap').style.display = 'none';
            document.getElementById('nebUploadLabel').style.display = 'flex';
            document.getElementById('nebImgFile').value = '';
        },

        async uploadImageToGitHub(token) {
            if (!this._pendingFile) return null;
            const file = this._pendingFile;
            const ext  = file.name.split('.').pop().toLowerCase();
            const path = 'images/news/news-' + Date.now() + '.' + ext;
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = async e => {
                    const b64 = e.target.result.split(',')[1];
                    try {
                        const resp = await fetch(`https://api.github.com/repos/${GH_REPO}/contents/${path}`,
                            {method:'PUT', headers:{'Authorization':'token '+token,'Content-Type':'application/json','Accept':'application/vnd.github.v3+json'},
                             body: JSON.stringify({message:'upload news image',content:b64,branch:GH_BRANCH})});
                        if (!resp.ok) { const err=await resp.json(); throw new Error(err.message); }
                        resolve('https://yunitechhk.com/'+path);
                    } catch(e) { reject(e); }
                };
                reader.readAsDataURL(file);
            });
        },

        openTokenSetup() {
            if (document.getElementById('tokenSetupOverlay')) return;
            const existing = localStorage.getItem('yuni_gh_token') || '';
            const box = document.createElement('div');
            box.id = 'tokenSetupOverlay';
            box.style.cssText = 'position:fixed;inset:0;z-index:20000;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;padding:1rem;';
            box.innerHTML = `
                <div style="background:#fff;border-radius:18px;padding:2rem;max-width:480px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.25);">
                    <div style="font-size:1.1rem;font-weight:700;margin-bottom:0.5rem;">🔑 一次性设置</div>
                    <p style="color:#666;font-size:0.88rem;line-height:1.6;margin-bottom:1.2rem;">
                        需要一个 GitHub Personal Access Token 来保存更改。<br>
                        <b>设置后记在本机，之后无需再输入。</b>
                    </p>
                    <input id="tokenSetupInput" type="password"
                        style="width:100%;padding:10px 14px;border:1.5px solid #e2e8f0;border-radius:8px;font-size:0.95rem;outline:none;margin-bottom:0.7rem;font-family:monospace;"
                        placeholder="ghp_xxxxxxxxxxxx" value="${existing}" />
                    <div style="font-size:0.78rem;color:#aaa;margin-bottom:1.2rem;">
                        需要 repo 权限。
                        <a href="https://github.com/settings/tokens/new?scopes=repo" target="_blank" style="color:#667eea;">点此生成 →</a>
                    </div>
                    <div style="display:flex;gap:0.8rem;">
                        <button onclick="newsAdmin.saveToken()" style="flex:1;padding:11px;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;border-radius:9px;font-size:0.95rem;font-weight:600;cursor:pointer;">保存到本机</button>
                        <button onclick="document.getElementById('tokenSetupOverlay').remove()" style="padding:11px 18px;border:1.5px solid #e2e8f0;border-radius:9px;background:#f8f9fa;cursor:pointer;">稍后</button>
                    </div>
                </div>`;
            document.body.appendChild(box);
            setTimeout(() => document.getElementById('tokenSetupInput').focus(), 100);
        },

        saveToken() {
            const t = document.getElementById('tokenSetupInput').value.trim();
            if (!t) { adminToast('请输入 Token','err'); return; }
            localStorage.setItem('yuni_gh_token', t);
            document.getElementById('atbToken').value = t;
            const status = document.getElementById('atbTokenStatus');
            if (status) { status.style.color='#68d391'; status.textContent='✅ 已连接'; }
            document.getElementById('tokenSetupOverlay').remove();
            adminToast('Token 已保存，以后无需再输入','ok');
        },

        exit() { window.location.href = window.location.pathname; }
    };

    function adminToast(msg, type) {
        const el = document.getElementById('adminToast');
        if (!el) return;
        el.innerHTML = msg;
        el.className = 'admin-toast show' + (type ? ' '+type : '');
        clearTimeout(window._adminToastTimer);
        window._adminToastTimer = setTimeout(() => el.classList.remove('show'), 3500);
    }

    // 初始化企业微信二维码按钮
    initWeChatButton();
    
    console.log('YUNI TECH 网站已加载完成！');
});

// 初始化企业微信按钮
function initWeChatButton() {
    // 联系我们部分的企业微信按钮
    const wechatButton = document.getElementById('wechatButton');
    if (wechatButton) {
        wechatButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.showWeChatQR();
            console.log('联系我们区域企业微信按钮被点击');
        });
        console.log('联系我们区域企业微信按钮事件监听器已添加');
    } else {
        console.error('找不到联系我们区域企业微信按钮元素');
    }
    
    // 页脚的企业微信按钮
    const footerWechatButton = document.getElementById('footerWechatButton');
    if (footerWechatButton) {
        footerWechatButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.showWeChatQR();
            console.log('页脚企业微信按钮被点击');
        });
        console.log('页脚企业微信按钮事件监听器已添加');
    } else {
        console.error('找不到页脚企业微信按钮元素');
    }
}

// 企业微信二维码模态窗口函数 - 全局函数
window.showWeChatQR = function() {
    console.log('showWeChatQR 函数被调用');
    const modal = document.getElementById('wechatModal');
    console.log('模态窗口元素:', modal);
    
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 防止背景滚动
        console.log('显示企业微信二维码 - 模态窗口应该已显示');
        
        // 额外检查确保样式被应用
        setTimeout(() => {
            console.log('模态窗口当前display状态:', modal.style.display);
            console.log('模态窗口计算样式:', window.getComputedStyle(modal).display);
        }, 100);
    } else {
        console.error('找不到wechatModal元素');
        // 列出所有可能的模态元素
        const allModals = document.querySelectorAll('.modal');
        console.log('页面中所有.modal元素:', allModals);
    }
}

window.closeWeChatQR = function() {
    const modal = document.getElementById('wechatModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // 恢复滚动
        console.log('关闭企业微信二维码'); // 调试信息
    }
}

// 点击模态窗口外部关闭
window.addEventListener('click', function(event) {
    const modal = document.getElementById('wechatModal');
    if (modal && event.target === modal) {
        window.closeWeChatQR();
    }
});

// ESC键关闭模态窗口
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        window.closeWeChatQR();
    }
});

