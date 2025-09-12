// 多语言数据
const languageData = {
    'zh-cn': {
        // 导航栏
        'nav-home': '首页',
        'nav-about': '关于我们',
        'nav-services': '服务项目',
        'nav-marketplace': '芋泥 AI 自由职业市集',
        'nav-contact': '联系我们',
        
        // 主页横幅
        'hero-subtitle': '专业的AI科技解决方案提供商',
        'hero-description': '为企业提供全方位AI解决方案，包括技术咨询、人才招聘、专业培训，通过芋泥 AI自由职业市集连接企业与AI技术专家',
        'btn-learn-services': '了解服务',
        'btn-try-marketplace': '体验市集',
        
        // 关于我们
        'about-title': '关于 YUNI TECH',
        'about-subtitle': '致力于推动AI技术在各行业的创新应用',
        'mission-title': '我们的使命',
        'mission-description': 'YUNI TECH LIMITED 是一家专注于人工智能技术的创新科技公司。我们致力于为企业提供最前沿的AI解决方案，帮助企业实现数字化转型，提升运营效率，创造更大的商业价值。',
        
        // 服务项目
        'services-title': '我们的服务',
        'services-subtitle': '全方位AI解决方案，满足企业不同需求',
        'service1-title': 'AI解决方案',
        'service1-desc': '为企业量身定制AI技术解决方案，包括大语言模型、计算机视觉等前沿技术在不同行业的应用实施。',
        'service2-title': 'AI咨询服务',
        'service2-desc': '提供专业的AI战略咨询服务，帮助企业制定AI转型路线图，评估技术可行性，优化投资回报。',
        'service3-title': 'AI人才招聘',
        'service3-desc': '专业的AI人才猎头服务，为企业寻找和匹配最适合的AI技术专家和数据科学家人才。',
        'service4-title': 'AI培训教育',
        'service4-desc': '提供系统性的AI技能培训课程，面向企业员工、学生以及社会人士，提升个人和团队技术能力。',
        
        // 市集
        'marketplace-title': '芋泥 AI 自由职业市集',
        'marketplace-subtitle': '以自由职业为主体，连接企业需求与AI技术专家的专业市集',
        'marketplace-advantages': '市集优势',
        'feature1-title': '精准匹配',
        'feature1-desc': '智能算法匹配企业需求与专家技能，确保最佳合作效果',
        'feature2-title': '安全保障',
        'feature2-desc': '完善的信用体系和交易保障机制，确保合作安全可靠',
        'feature3-title': '高效便捷',
        'feature3-desc': '简化的流程设计，快速完成项目对接和交付',
        'feature4-title': '专业品质',
        'feature4-desc': '严格筛选的AI专家团队，保证项目质量和专业水准',
        'enterprise-user': '企业用户',
        'enterprise-desc': '发布AI项目需求，找到最适合的技术专家',
        'btn-publish-project': '发布项目',
        'ai-expert': 'AI专家',
        'ai-expert-desc': '展示您的技能，获得优质项目机会',
        'btn-join-marketplace': '加入市集',
        
        // 联系我们
        'contact-title': '联系我们',
        'contact-subtitle': '让我们一起探讨AI技术如何为您的企业创造价值',
        'email': '邮箱',
        'phone': '电话',
        'address': '地址',
        'address-detail': '香港上环干诺道西20号 中英大厦 1403室',
        'form-name': '您的姓名',
        'form-email': '邮箱地址',
        'form-company': '公司名称',
        'form-message': '请描述您的需求...',
        'btn-send': '发送消息',
        
        // 页脚
        'footer-services': '服务项目',
        'footer-services-ai-solutions': 'AI解决方案',
        'footer-services-ai-consulting': 'AI咨询',
        'footer-services-talent-recruitment': '人才招聘',
        'footer-services-training-education': '培训教育',
        'footer-marketplace-services': '市集服务',
        'footer-marketplace-enterprise-publish': '企业发布项目',
        'footer-marketplace-expert-register': '专家注册',
        'footer-contact-info': '联系方式',
        'footer-email': '邮箱: info@yunitechhk.com',
        'footer-phone': '电话: +852 34800306',
        'footer-address': '地址: 香港上环干诺道西20号 中英大厦 1403室',
        'company-name': '曰宇科技有限公司',
        'footer-copyright': '© 2025 曰宇科技有限公司。保留所有权利。'
    },
    
    'zh-tw': {
        // 導航欄
        'nav-home': '首頁',
        'nav-about': '關於我們',
        'nav-services': '服務項目',
        'nav-marketplace': '芋泥 AI 自由職業市集',
        'nav-contact': '聯繫我們',
        
        // 主頁橫幅
        'hero-subtitle': '專業的AI科技解決方案提供商',
        'hero-description': '為企業提供全方位AI解決方案，包括技術諮詢、人才招聘、專業培訓，通過芋泥 AI自由職業市集連接企業與AI技術專家',
        'btn-learn-services': '了解服務',
        'btn-try-marketplace': '體驗市集',
        
        // 關於我們
        'about-title': '關於 YUNI TECH',
        'about-subtitle': '致力於推動AI技術在各行業的創新應用',
        'mission-title': '我們的使命',
        'mission-description': 'YUNI TECH LIMITED 是一家專注於人工智能技術的創新科技公司。我們致力於為企業提供最前沿的AI解決方案，幫助企業實現數字化轉型，提升運營效率，創造更大的商業價值。',
        
        // 服務項目
        'services-title': '我們的服務',
        'services-subtitle': '全方位AI解決方案，滿足企業不同需求',
        'service1-title': 'AI解決方案',
        'service1-desc': '為企業量身定制AI技術解決方案，包括大語言模型、電腦視覺等前沿技術在不同行業的應用實施。',
        'service2-title': 'AI諮詢服務',
        'service2-desc': '提供專業的AI戰略諮詢服務，幫助企業制定AI轉型路線圖，評估技術可行性，優化投資回報。',
        'service3-title': 'AI人才招聘',
        'service3-desc': '專業的AI人才獵頭服務，為企業尋找和匹配最適合的AI技術專家和數據科學家人才。',
        'service4-title': 'AI培訓教育',
        'service4-desc': '提供系統性的AI技能培訓課程，面向企業員工、學生以及社會人士，提升個人和團隊技術能力。',
        
        // 市集
        'marketplace-title': '芋泥 AI 自由職業市集',
        'marketplace-subtitle': '以自由職業為主體，連接企業需求與AI技術專家的專業市集',
        'marketplace-advantages': '市集優勢',
        'feature1-title': '精準匹配',
        'feature1-desc': '智能算法匹配企業需求與專家技能，確保最佳合作效果',
        'feature2-title': '安全保障',
        'feature2-desc': '完善的信用體系和交易保障機制，確保合作安全可靠',
        'feature3-title': '高效便捷',
        'feature3-desc': '簡化的流程設計，快速完成項目對接和交付',
        'feature4-title': '專業品質',
        'feature4-desc': '嚴格篩選的AI專家團隊，保證項目質量和專業水準',
        'enterprise-user': '企業用戶',
        'enterprise-desc': '發佈AI項目需求，找到最適合的技術專家',
        'btn-publish-project': '發佈項目',
        'ai-expert': 'AI專家',
        'ai-expert-desc': '展示您的技能，獲得優質項目機會',
        'btn-join-marketplace': '加入市集',
        
        // 聯繫我們
        'contact-title': '聯繫我們',
        'contact-subtitle': '讓我們一起探討AI技術如何為您的企業創造價值',
        'email': '郵箱',
        'phone': '電話',
        'address': '地址',
        'address-detail': '香港上環干諾道西20號 中英大廈 1403室',
        'form-name': '您的姓名',
        'form-email': '郵箱地址',
        'form-company': '公司名稱',
        'form-message': '請描述您的需求...',
        'btn-send': '發送消息',
        
        // 頁腳
        'footer-services': '服務項目',
        'footer-services-ai-solutions': 'AI解決方案',
        'footer-services-ai-consulting': 'AI諮詢',
        'footer-services-talent-recruitment': '人才招聘',
        'footer-services-training-education': '培訓教育',
        'footer-marketplace-services': '市集服務',
        'footer-marketplace-enterprise-publish': '企業發布項目',
        'footer-marketplace-expert-register': '專家註冊',
        'footer-contact-info': '聯繫方式',
        'footer-email': '郵箱: info@yunitechhk.com',
        'footer-phone': '電話: +852 34800306',
        'footer-address': '地址: 香港上環干諾道西20號 中英大廈 1403室',
        'company-name': '曰宇科技有限公司',
        'footer-copyright': '© 2025 曰宇科技有限公司。保留所有權利。'
    },
    
    'en': {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-services': 'Services',
        'nav-marketplace': 'YUNI AI Freelance Marketplace',
        'nav-contact': 'Contact Us',
        
        // Hero Section
        'hero-subtitle': 'Professional AI Technology<br>Solutions Provider',
        'hero-description': 'Providing comprehensive AI solutions for enterprises, including technical consulting, talent recruitment, and professional training. Connect enterprises with AI technology experts through the YUNI AI freelance marketplace.',
        'btn-learn-services': 'Learn More',
        'btn-try-marketplace': 'Try Marketplace',
        
        // About Us
        'about-title': 'About YUNI TECH',
        'about-subtitle': 'Committed to promoting innovative applications of AI technology across industries',
        'mission-title': 'Our Mission',
        'mission-description': 'YUNI TECH LIMITED is an innovative technology company focused on artificial intelligence technology. We are committed to providing enterprises with cutting-edge AI solutions, helping enterprises achieve digital transformation, improve operational efficiency, and create greater business value.',
        
        // Services
        'services-title': 'Our Services',
        'services-subtitle': 'Comprehensive AI solutions to meet diverse enterprise needs',
        'service1-title': 'AI Solutions',
        'service1-desc': 'Customized AI technology solutions for enterprises, including large language models and computer vision across different industries.',
        'service2-title': 'AI Consulting Services',
        'service2-desc': 'Professional AI strategic consulting services to help enterprises develop transformation roadmaps and optimize investment returns.',
        'service3-title': 'AI Talent Recruitment',
        'service3-desc': 'Professional AI talent headhunting services to find and match suitable AI experts and data scientists for enterprises.',
        'service4-title': 'AI Training & Education',
        'service4-desc': 'Systematic AI skills training courses for enterprise employees, students, and professionals to improve technical capabilities.',
        
        // Marketplace
        'marketplace-title': 'YUNI AI Freelance Marketplace',
        'marketplace-subtitle': 'A freelance-focused professional marketplace connecting enterprise needs with AI technology experts',
        'marketplace-advantages': 'Marketplace Advantages',
        'feature1-title': 'Precise Matching',
        'feature1-desc': 'Intelligent algorithms match enterprise needs with expert skills to ensure optimal collaboration',
        'feature2-title': 'Security Assurance',
        'feature2-desc': 'Comprehensive credit system and transaction guarantee mechanisms ensure safe and reliable cooperation',
        'feature3-title': 'Efficient & Convenient',
        'feature3-desc': 'Simplified process design for quick project matching and delivery',
        'feature4-title': 'Professional Quality',
        'feature4-desc': 'Strictly screened AI expert teams guarantee project quality and professional standards',
        'enterprise-user': 'Enterprise Users',
        'enterprise-desc': 'Publish AI project requirements and find the most suitable technical experts',
        'btn-publish-project': 'Publish Project',
        'ai-expert': 'AI Experts',
        'ai-expert-desc': 'Showcase your skills and get quality project opportunities',
        'btn-join-marketplace': 'Join Marketplace',
        
        // Contact Us
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Let\'s explore how AI technology can create value for your enterprise',
        'email': 'Email',
        'phone': 'Phone',
        'address': 'Address',
        'address-detail': 'RM 1403, CHUNG YING BUILDING,<br/>20 CONNAUGHT RD WEST,<br/>SHEUNG WAN, HONG KONG',
        'form-name': 'Your Name',
        'form-email': 'Email Address',
        'form-company': 'Company Name',
        'form-message': 'Please describe your requirements...',
        'btn-send': 'Send Message',
        
        // Footer
        'footer-services': 'Services',
        'footer-services-ai-solutions': 'AI Solutions',
        'footer-services-ai-consulting': 'AI Consulting',
        'footer-services-talent-recruitment': 'Talent Recruitment',
        'footer-services-training-education': 'Training & Education',
        'footer-marketplace-services': 'Marketplace Services',
        'footer-marketplace-enterprise-publish': 'Enterprise Publish Projects',
        'footer-marketplace-expert-register': 'Expert Registration',
        'footer-contact-info': 'Contact Information',
        'footer-email': 'Email: info@yunitechhk.com',
        'footer-phone': 'Phone: +852 34800306',
        'footer-address': 'Address: RM 1403, Chung Ying Building, 20 Connaught Rd West, Sheung Wan, Hong Kong',
        'company-name': 'YUNI TECH LIMITED',
        'footer-copyright': '© 2025 YUNI TECH LIMITED. All rights reserved.'
    }
};
