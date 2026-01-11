export const company = {
  name: "Udacha Capital",
  tagline: "Advisory Excellence. Trusted Partnership.",
  founded: 2015,

  stats: [
    { value: "$2.5B+", label: "Completed Transactions" },
    { value: "50+", label: "Years Combined Experience" },
    { value: "75+", label: "Successful Deals" },
    { value: "15+", label: "Countries of Operation" }
  ],

  contact: {
    address: {
      line1: "Tower Financial Center",
      line2: "15th Floor, Suite 1500",
      city: "Moscow",
      country: "Russia",
      zip: "123112"
    },
    phone: "+7 (495) 123-4567",
    email: "info@udachacapital.com",
    hours: "Monday - Friday: 9:00 AM - 7:00 PM"
  },

  social: {
    linkedin: "https://linkedin.com/company/udachacapital",
    twitter: "https://twitter.com/udachacapital"
  },

  founder: {
    name: "Alexander Volkov",
    title: "Managing Partner & Founder",
    quote: "We founded Udacha Capital with a simple belief: that clients deserve truly independent advice from experienced professionals who are personally invested in their success. Every engagement receives the attention and expertise that only a focused, senior team can provide."
  },

  principles: [
    {
      title: "Integrity",
      description: "Honest counsel in every recommendation",
      icon: "Shield"
    },
    {
      title: "Excellence",
      description: "Only the highest quality solutions",
      icon: "Award"
    },
    {
      title: "Discretion",
      description: "Absolute confidentiality guaranteed",
      icon: "Lock"
    },
    {
      title: "Partnership",
      description: "Your success is our success",
      icon: "Handshake"
    }
  ],

  process: [
    {
      step: 1,
      title: "Understanding",
      description: "Deep dive into your business, objectives, and constraints"
    },
    {
      step: 2,
      title: "Analysis",
      description: "Rigorous evaluation of options and opportunities"
    },
    {
      step: 3,
      title: "Execution",
      description: "Disciplined process management and negotiation"
    },
    {
      step: 4,
      title: "Success",
      description: "Achieving optimal outcomes for stakeholders"
    }
  ],

  about: {
    mission: `Udacha Capital is a boutique investment bank providing independent advisory services to companies, shareholders, and investors across a range of industries and transaction types.

Founded by experienced professionals from leading global investment banks, we combine institutional-quality capabilities with the personalized attention and flexibility of a focused advisory firm.

Our clients include public and private companies, private equity firms, family offices, and high-net-worth individuals seeking trusted advice on their most important financial decisions.`,

    philosophy: `We believe that the best advice comes from experienced professionals who understand both the strategic and financial dimensions of complex transactions. Our team brings decades of combined experience from institutions including Goldman Sachs, Morgan Stanley, Lazard, and McKinsey.

What distinguishes us is our commitment to personal service. Senior professionals work directly on every engagement, ensuring that clients receive the expertise and attention their transactions deserve. We deliberately limit the number of assignments we accept to maintain this standard of service.

Independence is central to our value proposition. As an advisory-only firm, we have no conflicts with trading, lending, or asset management activities. Our sole focus is achieving the best outcome for our clients.`
  },

  legal: {
    disclaimer: "This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities or financial instruments. Past performance is not indicative of future results.",
    copyright: `© ${new Date().getFullYear()} Udacha Capital. All rights reserved.`
  }
};

export const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Track Record", href: "/track-record" },
  { name: "Team", href: "/team" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" }
];

export const inquiryTypes = [
  { value: "", label: "Nature of inquiry" },
  { value: "ma", label: "M&A Advisory" },
  { value: "capital", label: "Capital Raising" },
  { value: "strategic", label: "Strategic Advisory" },
  { value: "restructuring", label: "Restructuring" },
  { value: "general", label: "General Inquiry" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" }
];
