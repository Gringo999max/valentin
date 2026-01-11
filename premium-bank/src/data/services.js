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
    title: "M&A Advisory",
    shortDescription: "Strategic guidance for transformative transactions",
    icon: Handshake,
    link: "/services#ma"
  },
  {
    id: "capital",
    title: "Capital Raising",
    shortDescription: "Access to optimal financing solutions",
    icon: TrendingUp,
    link: "/services#capital"
  },
  {
    id: "strategic",
    title: "Strategic Advisory",
    shortDescription: "Insights to shape your business future",
    icon: Compass,
    link: "/services#strategic"
  },
  {
    id: "restructuring",
    title: "Restructuring",
    shortDescription: "Expert navigation through complex situations",
    icon: RefreshCw,
    link: "/services#restructuring"
  }
];

export const servicesDetailed = [
  {
    id: "ma",
    title: "M&A Advisory",
    icon: Handshake,
    description: `Our M&A advisory practice provides comprehensive support throughout the entire transaction lifecycle. We combine deep sector expertise with rigorous analytical capabilities to deliver optimal outcomes for our clients.

Whether you are considering a strategic sale, acquisition, or merger, our team brings decades of experience from leading global institutions to every engagement. We pride ourselves on providing truly independent advice, free from the conflicts that can arise at larger institutions.`,
    approach: "We believe that successful M&A transactions require more than financial analysis. Our approach integrates strategic assessment, thorough due diligence, and skilled negotiation to maximize value while managing risk. Senior professionals are involved in every aspect of your transaction.",
    subServices: [
      {
        title: "Sell-side Advisory",
        description: "Comprehensive sale process management from preparation through closing",
        icon: Building2
      },
      {
        title: "Buy-side Advisory",
        description: "Target identification, valuation, and acquisition execution",
        icon: Target
      },
      {
        title: "Fairness Opinions",
        description: "Independent valuation opinions for boards and special committees",
        icon: Scale
      },
      {
        title: "Due Diligence Support",
        description: "Rigorous financial and commercial due diligence",
        icon: Search
      }
    ]
  },
  {
    id: "capital",
    title: "Capital Raising",
    icon: TrendingUp,
    description: `Our capital raising practice helps companies access the financing they need to grow, whether through equity, debt, or hybrid instruments. We leverage our extensive network of institutional investors, private equity firms, and family offices to identify the optimal capital structure for each client.

We have deep experience across the capital structure, from senior secured financing to mezzanine and equity. Our approach focuses on finding the right partners who can support your long-term vision, not just provide capital.`,
    approach: "Every capital raise begins with a thorough understanding of your business strategy and capital needs. We then identify and approach the most suitable investors, manage the due diligence process, and negotiate terms that protect your interests.",
    subServices: [
      {
        title: "Equity Financing",
        description: "Private placements and growth equity from institutional investors",
        icon: BarChart3
      },
      {
        title: "Debt Financing",
        description: "Senior, mezzanine, and unitranche debt solutions",
        icon: Banknote
      },
      {
        title: "Private Placements",
        description: "Targeted offerings to qualified institutional buyers",
        icon: Lock
      },
      {
        title: "Structured Finance",
        description: "Customized financing solutions for complex situations",
        icon: CreditCard
      }
    ]
  },
  {
    id: "strategic",
    title: "Strategic Advisory",
    icon: Compass,
    description: `Beyond transactions, we provide strategic advisory services that help companies navigate critical decisions and inflection points. Our team brings perspectives from investment banking, management consulting, and operating experience.

We work closely with boards and management teams to evaluate strategic options, assess market opportunities, and position companies for long-term success.`,
    approach: "Our strategic advisory engagements are characterized by rigorous analysis, creative thinking, and practical recommendations. We focus on actionable insights that drive real business impact.",
    subServices: [
      {
        title: "Strategic Reviews",
        description: "Comprehensive assessment of strategic options and alternatives",
        icon: Compass
      },
      {
        title: "Market Entry Strategies",
        description: "Analysis and planning for geographic or product expansion",
        icon: Globe
      },
      {
        title: "Partnership Structuring",
        description: "Joint venture and strategic partnership design",
        icon: Users
      },
      {
        title: "Valuation Services",
        description: "Independent valuations for planning and reporting purposes",
        icon: FileCheck
      }
    ]
  },
  {
    id: "restructuring",
    title: "Restructuring & Special Situations",
    icon: RefreshCw,
    description: `When companies face financial distress or operational challenges, experienced advice is essential. Our restructuring practice has guided numerous companies and stakeholder groups through complex situations, preserving value and positioning businesses for recovery.

We have deep experience across both debtor and creditor advisory, giving us unique insight into the perspectives and motivations of all parties in a restructuring.`,
    approach: "We approach each situation with urgency and discretion. Our team moves quickly to assess options, develop solutions, and engage with stakeholders. We are skilled negotiators who focus on achieving the best possible outcome for our clients.",
    subServices: [
      {
        title: "Financial Restructuring",
        description: "Balance sheet optimization and liability management",
        icon: ArrowRightLeft
      },
      {
        title: "Distressed M&A",
        description: "Sale or acquisition of companies in challenging situations",
        icon: ShieldCheck
      },
      {
        title: "Stakeholder Negotiations",
        description: "Mediation and negotiation with creditors and other parties",
        icon: Handshake
      },
      {
        title: "Turnaround Advisory",
        description: "Operational and financial improvement strategies",
        icon: Briefcase
      }
    ]
  }
];

export const whyChooseUs = [
  {
    title: "Independent Advice",
    description: "As a boutique firm, we have no conflicts of interest. Our only priority is achieving the best outcome for our clients.",
    icon: Scale
  },
  {
    title: "Senior Attention",
    description: "Partners and directors work directly on every engagement. Your transaction will never be delegated to junior staff.",
    icon: Users
  },
  {
    title: "Global Reach",
    description: "Through our network of partner firms and relationships, we access opportunities and buyers across all major markets.",
    icon: Globe
  }
];
