import {
  Handshake,
  TrendingUp,
  Compass,
  RefreshCw,
  Building2,
  Users,
  FileCheck,
  Search,
  Banknote,
  CreditCard,
  Lock,
  BarChart3,
  Target,
  Globe,
  Scale,
  ArrowRightLeft,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

export const servicesOverview = [
  {
    id: "ma",
    title: { en: "M&A Advisory", ru: "M&A консультирование" },
    shortDescription: { en: "Strategic guidance for transformative transactions", ru: "Стратегическое сопровождение трансформационных сделок" },
    icon: Handshake,
    link: "/services#ma"
  },
  {
    id: "capital",
    title: { en: "Capital Raising", ru: "Привлечение капитала" },
    shortDescription: { en: "Access to optimal financing solutions", ru: "Доступ к оптимальным решениям финансирования" },
    icon: TrendingUp,
    link: "/services#capital"
  },
  {
    id: "strategic",
    title: { en: "Strategic Advisory", ru: "Стратегический консалтинг" },
    shortDescription: { en: "Insights to shape your business future", ru: "Инсайты для формирования будущего вашего бизнеса" },
    icon: Compass,
    link: "/services#strategic"
  },
  {
    id: "restructuring",
    title: { en: "Restructuring", ru: "Реструктуризация" },
    shortDescription: { en: "Expert navigation through complex situations", ru: "Экспертное сопровождение в сложных ситуациях" },
    icon: RefreshCw,
    link: "/services#restructuring"
  }
];

export const servicesDetailed = [
  {
    id: "ma",
    title: { en: "M&A Advisory", ru: "M&A консультирование" },
    icon: Handshake,
    description: {
      en: `Our M&A advisory practice provides comprehensive support throughout the entire transaction lifecycle. We combine deep sector expertise with rigorous analytical capabilities to deliver optimal outcomes for our clients.

Whether you are considering a strategic sale, acquisition, or merger, our team brings decades of experience from leading global institutions to every engagement. We pride ourselves on providing truly independent advice, free from the conflicts that can arise at larger institutions.`,
      ru: `Наша практика M&A консультирования обеспечивает комплексную поддержку на протяжении всего жизненного цикла сделки. Мы сочетаем глубокую отраслевую экспертизу со строгими аналитическими возможностями для достижения оптимальных результатов для наших клиентов.

Независимо от того, рассматриваете ли вы стратегическую продажу, приобретение или слияние, наша команда привносит десятилетия опыта из ведущих мировых институтов в каждый проект. Мы гордимся тем, что предоставляем по-настоящему независимые советы, свободные от конфликтов, которые могут возникнуть в более крупных организациях.`
    },
    approach: {
      en: "We believe that successful M&A transactions require more than financial analysis. Our approach integrates strategic assessment, thorough due diligence, and skilled negotiation to maximize value while managing risk. Senior professionals are involved in every aspect of your transaction.",
      ru: "Мы считаем, что успешные M&A сделки требуют большего, чем финансовый анализ. Наш подход интегрирует стратегическую оценку, тщательную проверку и умелые переговоры для максимизации стоимости при управлении рисками. Старшие специалисты участвуют в каждом аспекте вашей сделки."
    },
    subServices: [
      {
        title: { en: "Sell-side Advisory", ru: "Консультирование продавца" },
        description: { en: "Comprehensive sale process management from preparation through closing", ru: "Комплексное управление процессом продажи от подготовки до закрытия" },
        icon: Building2
      },
      {
        title: { en: "Buy-side Advisory", ru: "Консультирование покупателя" },
        description: { en: "Target identification, valuation, and acquisition execution", ru: "Поиск целей, оценка и проведение приобретения" },
        icon: Target
      },
      {
        title: { en: "Fairness Opinions", ru: "Заключения о справедливости" },
        description: { en: "Independent valuation opinions for boards and special committees", ru: "Независимые оценочные заключения для советов директоров и специальных комитетов" },
        icon: Scale
      },
      {
        title: { en: "Due Diligence Support", ru: "Поддержка Due Diligence" },
        description: { en: "Rigorous financial and commercial due diligence", ru: "Тщательная финансовая и коммерческая проверка" },
        icon: Search
      }
    ]
  },
  {
    id: "capital",
    title: { en: "Capital Raising", ru: "Привлечение капитала" },
    icon: TrendingUp,
    description: {
      en: `Our capital raising practice helps companies access the financing they need to grow, whether through equity, debt, or hybrid instruments. We leverage our extensive network of institutional investors, private equity firms, and family offices to identify the optimal capital structure for each client.

We have deep experience across the capital structure, from senior secured financing to mezzanine and equity. Our approach focuses on finding the right partners who can support your long-term vision, not just provide capital.`,
      ru: `Наша практика привлечения капитала помогает компаниям получить финансирование, необходимое для роста, будь то через акционерный капитал, долг или гибридные инструменты. Мы используем нашу обширную сеть институциональных инвесторов, фондов прямых инвестиций и семейных офисов для определения оптимальной структуры капитала для каждого клиента.

У нас есть глубокий опыт работы со всей структурой капитала, от старшего обеспеченного финансирования до мезонинного и акционерного. Наш подход фокусируется на поиске правильных партнёров, которые могут поддержать ваше долгосрочное видение, а не просто предоставить капитал.`
    },
    approach: {
      en: "Every capital raise begins with a thorough understanding of your business strategy and capital needs. We then identify and approach the most suitable investors, manage the due diligence process, and negotiate terms that protect your interests.",
      ru: "Каждое привлечение капитала начинается с глубокого понимания вашей бизнес-стратегии и потребностей в капитале. Затем мы определяем и обращаемся к наиболее подходящим инвесторам, управляем процессом due diligence и согласовываем условия, защищающие ваши интересы."
    },
    subServices: [
      {
        title: { en: "Equity Financing", ru: "Акционерное финансирование" },
        description: { en: "Private placements and growth equity from institutional investors", ru: "Частные размещения и капитал роста от институциональных инвесторов" },
        icon: BarChart3
      },
      {
        title: { en: "Debt Financing", ru: "Долговое финансирование" },
        description: { en: "Senior, mezzanine, and unitranche debt solutions", ru: "Старшие, мезонинные и юнитраншевые долговые решения" },
        icon: Banknote
      },
      {
        title: { en: "Private Placements", ru: "Частные размещения" },
        description: { en: "Targeted offerings to qualified institutional buyers", ru: "Целевые предложения квалифицированным институциональным покупателям" },
        icon: Lock
      },
      {
        title: { en: "Structured Finance", ru: "Структурное финансирование" },
        description: { en: "Customized financing solutions for complex situations", ru: "Индивидуальные финансовые решения для сложных ситуаций" },
        icon: CreditCard
      }
    ]
  },
  {
    id: "strategic",
    title: { en: "Strategic Advisory", ru: "Стратегический консалтинг" },
    icon: Compass,
    description: {
      en: `Beyond transactions, we provide strategic advisory services that help companies navigate critical decisions and inflection points. Our team brings perspectives from investment banking, management consulting, and operating experience.

We work closely with boards and management teams to evaluate strategic options, assess market opportunities, and position companies for long-term success.`,
      ru: `Помимо сделок, мы предоставляем стратегические консультационные услуги, которые помогают компаниям принимать критически важные решения в переломные моменты. Наша команда привносит перспективы из инвестиционного банкинга, управленческого консалтинга и операционного опыта.

Мы тесно работаем с советами директоров и управленческими командами для оценки стратегических вариантов, анализа рыночных возможностей и позиционирования компаний для долгосрочного успеха.`
    },
    approach: {
      en: "Our strategic advisory engagements are characterized by rigorous analysis, creative thinking, and practical recommendations. We focus on actionable insights that drive real business impact.",
      ru: "Наши стратегические консультационные проекты характеризуются строгим анализом, креативным мышлением и практическими рекомендациями. Мы фокусируемся на действенных инсайтах, которые создают реальное влияние на бизнес."
    },
    subServices: [
      {
        title: { en: "Strategic Reviews", ru: "Стратегические обзоры" },
        description: { en: "Comprehensive assessment of strategic options and alternatives", ru: "Комплексная оценка стратегических опций и альтернатив" },
        icon: Compass
      },
      {
        title: { en: "Market Entry Strategies", ru: "Стратегии выхода на рынок" },
        description: { en: "Analysis and planning for geographic or product expansion", ru: "Анализ и планирование географического или продуктового расширения" },
        icon: Globe
      },
      {
        title: { en: "Partnership Structuring", ru: "Структурирование партнёрств" },
        description: { en: "Joint venture and strategic partnership design", ru: "Проектирование совместных предприятий и стратегических партнёрств" },
        icon: Users
      },
      {
        title: { en: "Valuation Services", ru: "Оценочные услуги" },
        description: { en: "Independent valuations for planning and reporting purposes", ru: "Независимые оценки для целей планирования и отчётности" },
        icon: FileCheck
      }
    ]
  },
  {
    id: "restructuring",
    title: { en: "Restructuring & Special Situations", ru: "Реструктуризация и особые ситуации" },
    icon: RefreshCw,
    description: {
      en: `When companies face financial distress or operational challenges, experienced advice is essential. Our restructuring practice has guided numerous companies and stakeholder groups through complex situations, preserving value and positioning businesses for recovery.

We have deep experience across both debtor and creditor advisory, giving us unique insight into the perspectives and motivations of all parties in a restructuring.`,
      ru: `Когда компании сталкиваются с финансовыми трудностями или операционными проблемами, опытные советы незаменимы. Наша практика реструктуризации провела многочисленные компании и группы заинтересованных сторон через сложные ситуации, сохраняя стоимость и позиционируя бизнес для восстановления.

У нас есть глубокий опыт как в консультировании должников, так и кредиторов, что даёт нам уникальное понимание перспектив и мотивации всех сторон в реструктуризации.`
    },
    approach: {
      en: "We approach each situation with urgency and discretion. Our team moves quickly to assess options, develop solutions, and engage with stakeholders. We are skilled negotiators who focus on achieving the best possible outcome for our clients.",
      ru: "Мы подходим к каждой ситуации со срочностью и осмотрительностью. Наша команда быстро действует для оценки вариантов, разработки решений и взаимодействия с заинтересованными сторонами. Мы опытные переговорщики, фокусирующиеся на достижении наилучшего возможного результата для наших клиентов."
    },
    subServices: [
      {
        title: { en: "Financial Restructuring", ru: "Финансовая реструктуризация" },
        description: { en: "Balance sheet optimization and liability management", ru: "Оптимизация баланса и управление обязательствами" },
        icon: ArrowRightLeft
      },
      {
        title: { en: "Distressed M&A", ru: "M&A в сложных ситуациях" },
        description: { en: "Sale or acquisition of companies in challenging situations", ru: "Продажа или приобретение компаний в сложных ситуациях" },
        icon: ShieldCheck
      },
      {
        title: { en: "Stakeholder Negotiations", ru: "Переговоры со стейкхолдерами" },
        description: { en: "Mediation and negotiation with creditors and other parties", ru: "Медиация и переговоры с кредиторами и другими сторонами" },
        icon: Handshake
      },
      {
        title: { en: "Turnaround Advisory", ru: "Консалтинг по оздоровлению" },
        description: { en: "Operational and financial improvement strategies", ru: "Стратегии операционного и финансового улучшения" },
        icon: Briefcase
      }
    ]
  }
];

export const whyChooseUs = [
  {
    title: { en: "Independent Advice", ru: "Независимые советы" },
    description: { en: "As a boutique firm, we have no conflicts of interest. Our only priority is achieving the best outcome for our clients.", ru: "Как бутиковая фирма, мы не имеем конфликтов интересов. Наш единственный приоритет — достижение лучшего результата для наших клиентов." },
    icon: "Scale"
  },
  {
    title: { en: "Senior Attention", ru: "Внимание старших специалистов" },
    description: { en: "Partners and directors work directly on every engagement. Your transaction will never be delegated to junior staff.", ru: "Партнёры и директора работают непосредственно над каждым проектом. Ваша сделка никогда не будет делегирована младшим сотрудникам." },
    icon: "Users"
  },
  {
    title: { en: "Global Reach", ru: "Глобальный охват" },
    description: { en: "Through our network of partner firms and relationships, we access opportunities and buyers across all major markets.", ru: "Через нашу сеть партнёрских фирм и связей мы получаем доступ к возможностям и покупателям на всех основных рынках." },
    icon: "Globe"
  }
];
