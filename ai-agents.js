// AI Agent 落地页：多语言文案 + 页面交互
(function () {
    const agentText = {
        'zh-cn': {
            'ag-page-title': 'YUNI AI Agent - AI获客与AI客服 | 获客成本仅为传统方式五分之一',
            'ag-hero-badge': 'yuniagent.ai · AI 员工',
            'ag-hero-title': '让 AI 替你<span class="gradient-text">获客</span>，<br>也替你<span class="gradient-text">服务客户</span>',
            'ag-hero-desc': '来自 yuniagent.ai 的两位 AI 员工：获客 Agent 主动寻找并跟进潜在客户，客服 Agent 7×24 小时即时回应每一次咨询。更低成本、更快响应，从获客到服务一气呵成。',
            'ag-hero-cta1': '预约免费演示',
            'ag-hero-cta2': '了解获客 Agent',
            'ag-stat1': '传统获客成本',
            'ag-stat2': '全天候在线客服',
            'ag-stat3-num': '秒级',
            'ag-stat3': '咨询响应速度',
            'ag-chat-name': '客服 Agent',
            'ag-chat-online': '在线',
            'ag-chat-q': '你好，请问你们的服务怎么收费？',
            'ag-chat-a': '您好！我们提供按月订阅和按需定制两种方案，我先为您简单介绍，也可以帮您预约顾问免费演示 😊',
            'ag-chat-q2': '好的，帮我预约下周二',
            'ag-chip-title': '新增高意向线索 +1',
            'ag-chip-desc': '已自动同步给销售跟进',

            'ag-lead-tag': '获客 Agent',
            'ag-lead-title': 'AI 获客，成本仅为传统方式的<span class="gradient-text">五分之一</span>',
            'ag-lead-desc': '传统获客依赖广告投放、地推与大量销售人力，成本高、周期长、线索质量参差不齐。获客 Agent 就像一位懂产品的虚拟销售，自动寻找、触达并筛选潜在客户，把优质线索直接交到您的销售团队手上。',
            'ag-cmp-title': '获客成本对比',
            'ag-cmp-trad': '传统获客（广告投放 + 人工销售）',
            'ag-cmp-ai': 'YUNI 获客 Agent',
            'ag-cmp-save': '获客成本直降八成',
            'ag-cmp-note': '* 以获取同等规模潜在客户的综合成本对比',
            'ag-lead-f1-t': '精准画像，主动挖客',
            'ag-lead-f1-d': '根据您的产品与理想客户画像，自动从公开渠道筛选高匹配度的潜在客户，告别盲目撒网。',
            'ag-lead-f2-t': '个性化多渠道触达',
            'ag-lead-f2-d': '为每位客户生成个性化开场白与推荐话术，通过 WhatsApp、电邮、社交媒体等渠道自动触达。',
            'ag-lead-f3-t': '智能跟进，线索打分',
            'ag-lead-f3-d': '持续自动跟进，识别客户意向并为线索评分，高意向客户第一时间转交销售，不漏一单。',
            'ag-lead-f4-t': '话术持续优化',
            'ag-lead-f4-d': '基于真实互动数据不断迭代话术与策略，转化率越用越高。',
            'ag-lead-demo': '体验获客 Agent Demo',

            'ag-cs-tag': '客服 Agent',
            'ag-cs-title': '7×24 小时在线，每一位客户都被即时回应',
            'ag-cs-desc': '客服 Agent 基于企业专属知识库，秒级解答客户咨询，承接大量重复问题，显著降低客服人力成本，让团队专注于更有价值的服务。',
            'ag-cs-f1-t': '7×24 秒级响应',
            'ag-cs-f1-d': '全年无休，深夜与节假日也能即时回复，不再因等待而流失客户。',
            'ag-cs-f2-t': '粤普英多语言',
            'ag-cs-f2-d': '支持粤语、普通话、英语及繁简中文，轻松服务香港、大湾区及海外客户。',
            'ag-cs-f3-t': '专属知识库，回答可控',
            'ag-cs-f3-d': '基于企业产品资料与 FAQ 作答，答案有据可依、口径统一，资料更新即时生效。',
            'ag-cs-f4-t': '全渠道统一接入',
            'ag-cs-f4-d': '网站、WhatsApp、微信、Facebook 等渠道统一接入，一个 AI 服务所有客户入口。',
            'ag-cs-f5-t': '情绪识别，无缝转人工',
            'ag-cs-f5-d': '识别客户情绪与复杂问题，自动转接人工并附上对话摘要，客户无需重复描述。',
            'ag-cs-f6-t': '数据洞察，发现商机',
            'ag-cs-f6-d': '自动统计热门问题与客户诉求，识别购买意向并转化为销售线索。',
            'ag-cs-demo': '体验客服 Agent Demo',

            'ag-loop-title': '获客 + 客服，打造完整客户闭环',
            'ag-loop-sub': '两个 Agent 数据互通，从第一次接触到成交后服务，全程自动化',
            'ag-loop1-t': '主动获客',
            'ag-loop1-d': '获客 Agent 精准找到并触达潜在客户',
            'ag-loop2-t': '即时解答',
            'ag-loop2-d': '客服 Agent 秒级回应客户的每一个疑问',
            'ag-loop3-t': '促成转化',
            'ag-loop3-d': '识别购买意向，高质量线索交给销售成交',
            'ag-loop4-t': '持续服务',
            'ag-loop4-d': '成交后持续服务，带来复购与转介绍',

            'ag-steps-title': '三步快速上线',
            'ag-steps-sub': '无需技术团队，我们全程陪跑',
            'ag-step1-t': '需求诊断',
            'ag-step1-d': '了解您的业务、目标客户与服务场景，制定专属方案。',
            'ag-step2-t': '定制配置',
            'ag-step2-d': '导入产品资料与知识库，配置获客画像、触达渠道与服务话术。',
            'ag-step3-t': '上线优化',
            'ag-step3-d': '快速上线运行，并根据真实数据持续优化效果。',

            'ag-contact-title': '立即预约免费演示',
            'ag-contact-sub': '留下您的联系方式，顾问将为您定制专属的获客与客服方案',
            'ag-opt-both': '获客 + 客服 Agent',
            'ag-opt-lead': '获客 Agent',
            'ag-opt-cs': '客服 Agent',
            'ag-form-message': '请简单描述您的行业与需求...',
            'ag-form-submit': '预约演示'
        },

        'zh-tw': {
            'ag-page-title': 'YUNI AI Agent - AI獲客與AI客服 | 獲客成本僅為傳統方式五分之一',
            'ag-hero-badge': 'yuniagent.ai · AI 員工',
            'ag-hero-title': '讓 AI 替你<span class="gradient-text">獲客</span>，<br>也替你<span class="gradient-text">服務客戶</span>',
            'ag-hero-desc': '來自 yuniagent.ai 的兩位 AI 員工：獲客 Agent 主動尋找並跟進潛在客戶，客服 Agent 7×24 小時即時回應每一次查詢。更低成本、更快回應，從獲客到服務一氣呵成。',
            'ag-hero-cta1': '預約免費演示',
            'ag-hero-cta2': '了解獲客 Agent',
            'ag-stat1': '傳統獲客成本',
            'ag-stat2': '全天候在線客服',
            'ag-stat3-num': '秒級',
            'ag-stat3': '查詢回應速度',
            'ag-chat-name': '客服 Agent',
            'ag-chat-online': '在線',
            'ag-chat-q': '你好，請問你哋服務點收費？',
            'ag-chat-a': '您好！我們提供按月訂閱及按需定制兩種方案，我先為您簡單介紹，亦可以幫您預約顧問免費演示 😊',
            'ag-chat-q2': '好呀，幫我約下星期二',
            'ag-chip-title': '新增高意向線索 +1',
            'ag-chip-desc': '已自動同步給銷售跟進',

            'ag-lead-tag': '獲客 Agent',
            'ag-lead-title': 'AI 獲客，成本僅為傳統方式的<span class="gradient-text">五分之一</span>',
            'ag-lead-desc': '傳統獲客依賴廣告投放、街頭推廣與大量銷售人手，成本高、週期長、線索質素參差。獲客 Agent 就像一位懂產品的虛擬銷售，自動尋找、觸達並篩選潛在客戶，把優質線索直接交到您的銷售團隊手上。',
            'ag-cmp-title': '獲客成本對比',
            'ag-cmp-trad': '傳統獲客（廣告投放 + 人手銷售）',
            'ag-cmp-ai': 'YUNI 獲客 Agent',
            'ag-cmp-save': '獲客成本直降八成',
            'ag-cmp-note': '* 以獲取同等規模潛在客戶的綜合成本對比',
            'ag-lead-f1-t': '精準畫像，主動挖客',
            'ag-lead-f1-d': '根據您的產品與理想客戶畫像，自動從公開渠道篩選高匹配度的潛在客戶，告別盲目撒網。',
            'ag-lead-f2-t': '個人化多渠道觸達',
            'ag-lead-f2-d': '為每位客戶生成個人化開場白與推薦話術，透過 WhatsApp、電郵、社交媒體等渠道自動觸達。',
            'ag-lead-f3-t': '智能跟進，線索評分',
            'ag-lead-f3-d': '持續自動跟進，識別客戶意向並為線索評分，高意向客戶第一時間轉交銷售，不漏一單。',
            'ag-lead-f4-t': '話術持續優化',
            'ag-lead-f4-d': '基於真實互動數據不斷迭代話術與策略，轉化率越用越高。',
            'ag-lead-demo': '體驗獲客 Agent Demo',

            'ag-cs-tag': '客服 Agent',
            'ag-cs-title': '7×24 小時在線，每一位客戶都被即時回應',
            'ag-cs-desc': '客服 Agent 基於企業專屬知識庫，秒級解答客戶查詢，承接大量重複問題，大幅降低客服人手成本，讓團隊專注於更有價值的服務。',
            'ag-cs-f1-t': '7×24 秒級回應',
            'ag-cs-f1-d': '全年無休，深夜與假期都能即時回覆，不再因等待而流失客戶。',
            'ag-cs-f2-t': '粵普英多語言',
            'ag-cs-f2-d': '支援粵語、普通話、英語及繁簡中文，輕鬆服務香港、大灣區及海外客戶。',
            'ag-cs-f3-t': '專屬知識庫，回答可控',
            'ag-cs-f3-d': '基於企業產品資料與 FAQ 作答，答案有據可依、口徑統一，資料更新即時生效。',
            'ag-cs-f4-t': '全渠道統一接入',
            'ag-cs-f4-d': '網站、WhatsApp、微信、Facebook 等渠道統一接入，一個 AI 服務所有客戶入口。',
            'ag-cs-f5-t': '情緒識別，無縫轉人工',
            'ag-cs-f5-d': '識別客戶情緒與複雜問題，自動轉接真人客服並附上對話摘要，客戶無需重複描述。',
            'ag-cs-f6-t': '數據洞察，發掘商機',
            'ag-cs-f6-d': '自動統計熱門問題與客戶訴求，識別購買意向並轉化為銷售線索。',
            'ag-cs-demo': '體驗客服 Agent Demo',

            'ag-loop-title': '獲客 + 客服，打造完整客戶閉環',
            'ag-loop-sub': '兩個 Agent 數據互通，由第一次接觸到成交後服務，全程自動化',
            'ag-loop1-t': '主動獲客',
            'ag-loop1-d': '獲客 Agent 精準找到並觸達潛在客戶',
            'ag-loop2-t': '即時解答',
            'ag-loop2-d': '客服 Agent 秒級回應客戶的每一個疑問',
            'ag-loop3-t': '促成轉化',
            'ag-loop3-d': '識別購買意向，高質素線索交給銷售成交',
            'ag-loop4-t': '持續服務',
            'ag-loop4-d': '成交後持續服務，帶來回購與轉介紹',

            'ag-steps-title': '三步快速上線',
            'ag-steps-sub': '無需技術團隊，我們全程陪跑',
            'ag-step1-t': '需求診斷',
            'ag-step1-d': '了解您的業務、目標客戶與服務場景，制定專屬方案。',
            'ag-step2-t': '定制配置',
            'ag-step2-d': '導入產品資料與知識庫，配置獲客畫像、觸達渠道與服務話術。',
            'ag-step3-t': '上線優化',
            'ag-step3-d': '快速上線運行，並根據真實數據持續優化效果。',

            'ag-contact-title': '立即預約免費演示',
            'ag-contact-sub': '留下您的聯絡方式，顧問將為您定制專屬的獲客與客服方案',
            'ag-opt-both': '獲客 + 客服 Agent',
            'ag-opt-lead': '獲客 Agent',
            'ag-opt-cs': '客服 Agent',
            'ag-form-message': '請簡單描述您的行業與需求...',
            'ag-form-submit': '預約演示'
        },

        'en': {
            'ag-page-title': 'YUNI AI Agents - AI Lead Generation & AI Customer Service',
            'ag-hero-badge': 'yuniagent.ai · AI Workforce',
            'ag-hero-title': 'Let AI <span class="gradient-text">win customers</span><br>and <span class="gradient-text">serve them</span> for you',
            'ag-hero-desc': 'Two AI employees from yuniagent.ai: the Lead Generation Agent finds and follows up with prospects, while the Customer Service Agent answers every enquiry instantly, 24/7. Lower cost, faster response, one seamless journey.',
            'ag-hero-cta1': 'Book a Free Demo',
            'ag-hero-cta2': 'Explore Lead Gen Agent',
            'ag-stat1': 'of traditional acquisition cost',
            'ag-stat2': 'always-on support',
            'ag-stat3-num': '< 1s',
            'ag-stat3': 'response time',
            'ag-chat-name': 'Service Agent',
            'ag-chat-online': 'Online',
            'ag-chat-q': 'Hi, how much does your service cost?',
            'ag-chat-a': 'Hello! We offer monthly subscription and custom plans. I can walk you through them, or book a free demo with our consultant 😊',
            'ag-chat-q2': 'Great, book me for next Tuesday',
            'ag-chip-title': 'New hot lead +1',
            'ag-chip-desc': 'Synced to sales automatically',

            'ag-lead-tag': 'Lead Generation Agent',
            'ag-lead-title': 'AI lead generation at <span class="gradient-text">one-fifth</span> of the traditional cost',
            'ag-lead-desc': 'Traditional acquisition relies on ads, street promotion and large sales teams: expensive, slow and inconsistent in lead quality. The Lead Generation Agent works like a virtual salesperson who knows your product, finding, reaching and qualifying prospects automatically, then handing the best leads to your sales team.',
            'ag-cmp-title': 'Acquisition Cost Comparison',
            'ag-cmp-trad': 'Traditional (ads + sales staff)',
            'ag-cmp-ai': 'YUNI Lead Generation Agent',
            'ag-cmp-save': 'lower acquisition cost',
            'ag-cmp-note': '* Based on total cost of acquiring the same volume of prospects',
            'ag-lead-f1-t': 'Precise targeting',
            'ag-lead-f1-d': 'Automatically identifies high-fit prospects from public channels based on your product and ideal customer profile.',
            'ag-lead-f2-t': 'Personalised multi-channel outreach',
            'ag-lead-f2-d': 'Generates tailored openers and recommendations for each prospect, delivered via WhatsApp, email and social media.',
            'ag-lead-f3-t': 'Smart follow-up & lead scoring',
            'ag-lead-f3-d': 'Keeps following up, detects buying intent and scores every lead, so hot prospects reach your sales team right away.',
            'ag-lead-f4-t': 'Self-improving scripts',
            'ag-lead-f4-d': 'Continuously refines messaging using real interaction data, so conversion keeps improving.',
            'ag-lead-demo': 'Try the Lead Gen Agent Demo',

            'ag-cs-tag': 'Customer Service Agent',
            'ag-cs-title': 'Online 24/7, every customer answered instantly',
            'ag-cs-desc': 'Powered by your own knowledge base, the Customer Service Agent answers enquiries in seconds and handles repetitive questions, cutting support costs and freeing your team for higher-value work.',
            'ag-cs-f1-t': 'Instant replies, 24/7',
            'ag-cs-f1-d': 'No off-hours: late nights and public holidays included, so no customer is lost to waiting.',
            'ag-cs-f2-t': 'Cantonese, Mandarin & English',
            'ag-cs-f2-d': 'Serves customers in Cantonese, Mandarin, English, and Traditional or Simplified Chinese across Hong Kong, the GBA and beyond.',
            'ag-cs-f3-t': 'Your knowledge base, controlled answers',
            'ag-cs-f3-d': 'Answers are grounded in your product documents and FAQs, consistent and on-brand, with updates taking effect immediately.',
            'ag-cs-f4-t': 'Omnichannel',
            'ag-cs-f4-d': 'One AI across your website, WhatsApp, WeChat, Facebook and more.',
            'ag-cs-f5-t': 'Sentiment-aware human handoff',
            'ag-cs-f5-d': 'Detects frustration or complex issues and hands over to a human agent with a conversation summary.',
            'ag-cs-f6-t': 'Insights that find revenue',
            'ag-cs-f6-d': 'Tracks top questions and customer needs, and flags buying intent as new sales leads.',
            'ag-cs-demo': 'Try the Customer Service Agent Demo',

            'ag-loop-title': 'Lead Gen + Customer Service: a complete customer loop',
            'ag-loop-sub': 'Both agents share data, automating everything from first touch to after-sales care',
            'ag-loop1-t': 'Acquire',
            'ag-loop1-d': 'Lead Gen Agent finds and reaches the right prospects',
            'ag-loop2-t': 'Answer',
            'ag-loop2-d': 'Customer Service Agent answers every question in seconds',
            'ag-loop3-t': 'Convert',
            'ag-loop3-d': 'Buying intent is detected and qualified leads go to sales',
            'ag-loop4-t': 'Retain',
            'ag-loop4-d': 'Ongoing service drives repeat purchases and referrals',

            'ag-steps-title': 'Live in three steps',
            'ag-steps-sub': 'No tech team needed, we support you all the way',
            'ag-step1-t': 'Discovery',
            'ag-step1-d': 'We learn your business, target customers and service scenarios.',
            'ag-step2-t': 'Configuration',
            'ag-step2-d': 'Import product materials and knowledge base; set up targeting, channels and scripts.',
            'ag-step3-t': 'Launch & optimise',
            'ag-step3-d': 'Go live quickly and keep improving results based on real data.',

            'ag-contact-title': 'Book a Free Demo',
            'ag-contact-sub': 'Leave your details and our consultant will tailor a lead generation and customer service plan for you',
            'ag-opt-both': 'Lead Gen + Customer Service',
            'ag-opt-lead': 'Lead Generation Agent',
            'ag-opt-cs': 'Customer Service Agent',
            'ag-form-message': 'Briefly describe your industry and needs...',
            'ag-form-submit': 'Book Demo'
        }
    };

    Object.keys(agentText).forEach(lang => {
        if (languageData[lang]) Object.assign(languageData[lang], agentText[lang]);
    });

    function updateTitle() {
        const lang = localStorage.getItem('selectedLanguage') || 'zh-tw';
        const data = languageData[lang] || languageData['zh-tw'];
        if (data['ag-page-title']) document.title = data['ag-page-title'];
    }

    document.addEventListener('DOMContentLoaded', function () {
        // script.js 在切换语言时会覆盖 document.title，需在其之后再设置
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => setTimeout(updateTitle, 0));
        });
        setTimeout(updateTitle, 0);

        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('ag-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.ag-reveal').forEach(el => revealObserver.observe(el));
    });
})();
