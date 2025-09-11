// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    
    // 语言切换功能
    let currentLanguage = 'zh-cn';
    
    // 初始化语言
    function initLanguage() {
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
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
            'zh-cn': 'YUNI TECH LIMITED - AI科技解决方案专家',
            'zh-tw': 'YUNI TECH LIMITED - AI科技解決方案專家',
            'en': 'YUNI TECH LIMITED - AI Technology Solutions Expert'
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
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
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
    
    // CTA按钮点击效果
    document.querySelectorAll('.cta-card .btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('YUNI AI 自由职业市集 即将上线', 'info');
        });
    });
    
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
    
    console.log('YUNI TECH 网站已加载完成！');
});
