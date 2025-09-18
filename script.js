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
    
    // 初始化企业微信二维码按钮
    initWeChatButton();
    
    console.log('YUNI TECH 网站已加载完成！');
});

// 初始化企业微信按钮
function initWeChatButton() {
    const wechatButton = document.getElementById('wechatButton');
    if (wechatButton) {
        wechatButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.showWeChatQR();
            console.log('企业微信按钮被点击');
        });
        console.log('企业微信按钮事件监听器已添加');
    } else {
        console.error('找不到企业微信按钮元素');
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
