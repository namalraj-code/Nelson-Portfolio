export const profile = {
  name: "Nelson Amalraj",
  firstName: "Nelson",
  role: "Director of Program & Project Management",
  tagline: "I turn stalled, nine-figure technology programs into shipped products.",
  subline:
    "20+ years leading AI/ML, cloud migration, and digital transformation programs inside Fortune 100 healthcare, banking, and telecom organizations. PMP · CSM · SAFe.",
  location: "Prosper, Texas",
  availability: "Open to Director / Sr. Director program leadership roles",
  email: "amalraj@hotmail.com",
  phone: "+1 (763) 291-8408",
  phoneHref: "tel:+17632918408",
  linkedin: "https://www.linkedin.com/in/nelson-amalraj-39a86a21",
  linkedinLabel: "linkedin.com/in/nelson-amalraj-39a86a21",
};

export const heroStats = [
  { value: 60, prefix: "$", suffix: "M+", label: "Largest portfolio owned" },
  { value: 20, suffix: "+", label: "Years leading delivery" },
  { value: 14, prefix: "$", suffix: "M+", label: "Verified savings delivered" },
  { value: 40, suffix: "+", label: "People led at peak" },
];

export const trustedBy = [
  "Bank of America",
  "Verizon",
  "UnitedHealth Group",
  "State of Texas",
  "Citi",
  "CNA Surety",
];

export const about = {
  lead:
    "Companies bring me in when a program has stalled, when engineering, compliance, and the business are reading from three different plans, or when leadership needs a roadmap turned into something a steering committee will actually fund.",
  paragraphs: [
    "I started as a programmer analyst at Citi, which means engineering teams get a program leader who can follow the architecture diagram and push back on an estimate with specifics. Over two decades I have grown from managing single releases to owning $60M+ portfolios, leading organizations of 40 people, and sitting across data scientists, vendors, and Managing Directors to make sure what ships is what the business needs.",
    "My recent work centers on AI/ML delivery in regulated environments: generative-AI complaint resolution and real-time fraud detection at Bank of America, ML pipelines inside a $34M cloud modernization at Verizon, and an NLP-driven IVR at UnitedHealth. The domain changes; the discipline does not. Honest RAID logs, dependency maps that survive contact with reality, and weekly status a VP can act on in ninety seconds.",
  ],
  principles: [
    {
      title: "Governance that earns trust",
      body: "100% audit compliance across 12 concurrent projects by making EPMO standards a working habit rather than a checklist.",
    },
    {
      title: "Numbers before narratives",
      body: "Budget variance held under 3% on a $9.5M program through weekly financial tracking that leadership actually read.",
    },
    {
      title: "Engineers get a partner, not a spreadsheet",
      body: "Transitioned six waterfall teams to two-week sprints, then coached 60+ practitioners on Scrum and SAFe.",
    },
  ],
};

export type CaseStudy = {
  slug: string;
  tag: string;
  company: string;
  period: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  accent: "brass" | "sky" | "emerald";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-claims-complaint-capture",
    tag: "AI / ML Program",
    company: "Bank of America",
    period: "2023 – Present",
    title: "Generative-AI Claims Complaint Capture and Real-Time Fraud Detection",
    summary:
      "Took two AI initiatives from idea to production inside a regulated consumer-credit organization, owning a $14M annual budget and a 35-person delivery org of data scientists and engineers.",
    challenge:
      "Complaint categorization was manual and slow, fraud reviews were drowning investigators in false positives, and AI investment had no single owner accountable to the VP-level steering committee.",
    approach: [
      "Structured five loosely connected workstreams into one integrated program plan with a shared RAID log and cross-workstream dependency tracking.",
      "Paired data scientists with fraud investigators early so model thresholds were tuned against real review capacity, not lab accuracy.",
      "Ran quarterly steering reviews on AI/ML spend and weekly executive status to 15+ stakeholders across Business, Risk, and Technology.",
      "Coordinated four implementation partners (Deloitte, TCS, Infosys, Cognizant) against a single milestone calendar.",
    ],
    outcome:
      "Generative AI now categorizes complaints and supports resolution decisioning; a deep-learning anomaly model flags fraudulent claims before payout. Twelve critical-path risks were caught before they touched a milestone.",
    metrics: [
      { value: "65%", label: "faster complaint categorization" },
      { value: "3 days", label: "cut from resolution turnaround" },
      { value: "25%", label: "fewer fraud false positives" },
      { value: "$14M", label: "annual budget owned" },
    ],
    stack: ["Generative AI", "NLP", "Anomaly Detection", "Predictive Analytics", "Jira", "AWS"],
    accent: "brass",
  },
  {
    slug: "verizon-cloud-modernization",
    tag: "Cloud Modernization",
    company: "Verizon",
    period: "2022 – 2023",
    title: "$34M Legacy-to-Cloud and Data Engineering Portfolio",
    summary:
      "Delivered seven interdependent modernization projects, retired on-prem data centers, and stood up an ML pipeline on the migrated data, all while moving six waterfall teams to Agile.",
    challenge:
      "Cloud migration, data migration, and data engineering were funded as separate projects with tangled dependencies and a 50-person organization that had never worked in sprints.",
    approach: [
      "Mapped every cross-project dependency and managed the critical path as one portfolio rather than seven schedules.",
      "Moved six legacy teams onto a two-week cadence, authored the Agile playbooks, and coached 60+ practitioners on Scrum and SAFe.",
      "Produced weekly financial tracking for 12 stakeholders on the $9.5M core program to keep variance visible before it became a problem.",
      "Sponsored a TensorFlow and LLM-based pipeline that automated data analysis on the newly migrated platform.",
    ],
    outcome:
      "The portfolio shipped with a 94% on-time rate, legacy data centers were retired, and enterprise adoption of AI-driven analytics began on the modernized stack.",
    metrics: [
      { value: "94%", label: "on-time delivery across 7 projects" },
      { value: "$2M", label: "annual infrastructure spend eliminated" },
      { value: "<3%", label: "budget variance on $9.5M program" },
      { value: "30%", label: "reduction in model training time" },
    ],
    stack: ["AWS", "Data Migration", "TensorFlow", "LLM Pipelines", "SAFe", "EPMO"],
    accent: "sky",
  },
  {
    slug: "texas-dshs-modernization",
    tag: "Public Sector Modernization",
    company: "Texas Health & Human Services",
    period: "2020 – 2022",
    title: "$11M Medicare / Medicaid and Statewide Immunization Registry Modernization",
    summary:
      "Directed a portfolio of regulatory compliance releases for the Texas Department of State Health Services, including the ImmTrac2 registry upgrade that improved statewide vaccine forecasting.",
    challenge:
      "Four regulatory releases with fixed compliance dates, 20+ agency stakeholders with competing priorities, and a registry platform that had to be upgraded without interrupting provider reporting.",
    approach: [
      "Defined scope with 20+ agency stakeholders and decomposed it into 120+ functional requirements with clear acceptance criteria.",
      "Led three teams of 22 state employees, contractors, and solution architects through the Java 8 / WebLogic / Oracle 19c platform upgrade and an ArcGIS geospatial refresh.",
      "Replaced ad-hoc updates with weekly status dashboards for 10+ agency directors, cutting time-to-decision on blockers in half.",
    ],
    outcome:
      "Every regulatory milestone landed on time, and the IPRM/IFMS modernization gave the agency faster, more accurate vaccine inventory forecasting and distribution across Texas.",
    metrics: [
      { value: "100%", label: "on-time regulatory milestones" },
      { value: "50%", label: "faster blocker decisions" },
      { value: "120+", label: "requirements defined" },
      { value: "4", label: "compliance releases delivered" },
    ],
    stack: ["Java 8", "WebLogic", "Oracle 19c", "ArcGIS", "Jira", "EPMO"],
    accent: "emerald",
  },
];

export const otherWork = [
  {
    title: "Family Banking Portal",
    company: "Bank of America",
    result: "New digital banking product taken from concept to launch and scaled to 1.2M+ active online and mobile customers.",
  },
  {
    title: "Home Loans Origination to AWS",
    company: "Bank of America",
    result: "Migrated the origination platform off on-prem Oracle onto AWS without disrupting a regulated lending pipeline.",
  },
  {
    title: "Clinical Cloud Migration & Mobile",
    company: "UnitedHealth Group",
    result: "Moved external-facing clinical apps to AWS and shipped myUHC and Health4Me to 2.5M+ members; deployments went from two weeks to three days.",
  },
  {
    title: "EPMO Financial Single Source of Truth",
    company: "UnitedHealth Group",
    result: "Standardized reporting across a $60M+ portfolio and delivered $10M+ in cumulative savings over five years.",
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "Bank of America",
    title: "Sr. Program / Project Manager, Consumer Credit Technology",
    period: "Sep 2023 – Present",
    location: "Dallas, TX",
    summary:
      "Own a $17M portfolio across Regulatory, Claims Complaint Capture, Wholesale Credit Risk, ATM, and Data Engineering workstreams.",
    highlights: [
      "Lead 10+ direct reports with oversight of a 35-person delivery organization including data scientists and engineers.",
      "Align $15M+ in investments with five Managing Directors and Senior VPs on a biweekly cadence.",
      "Delivered NLP ticket automation that cut Consumer Credit response time 20% and Family Banking support costs 14%.",
      "Run Scrum for three teams (25 people) managing 300+ stories and epics in Jira; 100% audit compliance across 12 projects.",
    ],
  },
  {
    company: "Verizon",
    title: "Sr. Program / Project Manager",
    period: "Apr 2022 – Aug 2023",
    location: "Dallas, TX",
    summary:
      "Delivered a $34M cloud, data migration, and data engineering portfolio with a matrixed team of 30+ engineers, analysts, and vendors.",
    highlights: [
      "94% on-time delivery across seven interdependent projects.",
      "Retired legacy data centers, saving $2M annually.",
      "Transitioned six waterfall teams to Agile and coached 60+ practitioners.",
    ],
  },
  {
    company: "State of Texas, Health & Human Services",
    title: "Sr. Program / Project Manager",
    period: "Sep 2020 – Apr 2022",
    location: "Austin, TX",
    summary:
      "Directed an $11M Medicare/Medicaid modernization portfolio for DSHS with a flawless regulatory milestone record.",
    highlights: [
      "Primary liaison between DSHS business units and the EPMO for status, risk, and resourcing.",
      "Led the ImmTrac2 registry and statewide ArcGIS upgrades.",
    ],
  },
  {
    company: "Gerent LLC",
    title: "Management Consultant, Program Delivery",
    period: "Jan 2020 – May 2020",
    location: "Remote",
    summary:
      "Ran eight concurrent Salesforce implementations ($3.5M) and co-founded the PM Center of Excellence.",
    highlights: [
      "95%+ CSAT across eight enterprise accounts; formal closure on 12 implementations.",
      "Migrated the firm's on-prem data center to AWS, improving scalability and disaster recovery.",
    ],
  },
  {
    company: "UnitedHealth Group",
    title: "Sr. Director of Project Management, Clinical",
    period: "Sep 2016 – Jun 2019",
    location: "McKinney, TX",
    summary:
      "Led ~$45M in global clinical healthcare programs and mentored a team of program and project managers.",
    highlights: [
      "Spearheaded AWS migration of external-facing clinical applications.",
      "Delivered an AI/ML-powered IVR using NLP; Health4Me voted best mobile healthcare app.",
      "Cut deployment cycles from two weeks to three days via microservices and CI/CD.",
    ],
  },
  {
    company: "UnitedHealth Group",
    title: "Director of Project Management, EPMO, Medicare & Retirement",
    period: "Sep 2011 – Sep 2016",
    location: "Plymouth, MN",
    summary:
      "Single point of escalation for a $60M+ portfolio; led a team of 40 with seven direct reports.",
    highlights: [
      "$10M+ cumulative savings across platform, provider tiering, and content management programs.",
      "EDI (837/835/270) integrations connecting 50+ hospital networks and trading partners.",
      "Built a single financial reporting system that replaced ad-hoc division reports.",
    ],
  },
  {
    company: "UnitedHealth Group",
    title: "Sr. Program / Project Manager, Medicare & Retirement",
    period: "Sep 2007 – Oct 2011",
    location: "Plymouth, MN",
    summary:
      "Delivered $10M programs with a 20-person team, including Adaptive Authentication on myUHC.com.",
    highlights: [
      "Presented monthly to the executive steering committee across six release tracks.",
      "Managed third-party vendor contracts and release management across platform programs.",
    ],
  },
  {
    company: "CNA Surety",
    title: "Program / Project Manager",
    period: "Jan 2005 – Sep 2007",
    location: "Sioux Falls, SD",
    summary:
      "Raised transactional reliability 25% across 200+ financial institution terminal endpoints.",
    highlights: [
      "Authored a corporate PM methodology adopted by four IT departments.",
      "$1.75M in savings across data warehouse, data mart, and WebLogic-to-WebSphere programs.",
    ],
  },
  {
    company: "Citi",
    title: "Project / Development Manager · Senior Programmer Analyst",
    period: "Jun 1997 – Jan 2005",
    location: "Sioux Falls, SD",
    summary:
      "Started as a developer, then led development teams for card-services platforms, the foundation for a career translating between engineering and the business.",
    highlights: [],
  },
];

export const skillGroups = [
  {
    name: "Program & Portfolio Leadership",
    skills: [
      "Portfolio Ownership ($10M–$60M+)",
      "Cross-Enterprise Program Delivery",
      "Roadmapping & Investment Prioritization",
      "Multi-Vendor / SI Management",
      "Budget & Financial Tracking",
    ],
  },
  {
    name: "AI / ML & Cloud Delivery",
    skills: [
      "Generative AI & NLP Programs",
      "Fraud / Anomaly Detection Rollouts",
      "AWS Migration (On-Prem → Cloud)",
      "Data Engineering & Data Migration",
      "CI/CD & Microservices Adoption",
    ],
  },
  {
    name: "Governance & Risk",
    skills: [
      "EPMO Standards & Audit Compliance",
      "RAID / IRAAD Logs",
      "Change Control",
      "Steering Committee Reporting",
      "Regulatory Compliance Releases",
    ],
  },
  {
    name: "Delivery Methods",
    skills: ["Scrum", "SAFe", "Kanban", "Hybrid Agile / Waterfall", "Agile Transformation Coaching"],
  },
  {
    name: "Tools",
    skills: [
      "Jira",
      "Confluence",
      "Clarity PPM",
      "MS Project",
      "Smartsheet",
      "Tableau",
      "Power BI",
      "Azure DevOps",
      "Salesforce / Vlocity",
      "Microsoft Copilot",
    ],
  },
];

export const certifications = [
  "Project Management Professional (PMP)",
  "Certified ScrumMaster (CSM)",
  "Scaled Scrum Product Owner Certified",
  "SAFe Certified",
  "Six Sigma Yellow Belt",
  "Vlocity Platform Developer",
  "Google AI Essentials",
];

export const education = [
  { school: "North Dakota State University", degree: "M.S., Computer Science" },
  { school: "Karunya University", degree: "B.S., Electrical, Electronics & Communications Engineering" },
];

export const industries = ["Banking & Financial Services", "Healthcare & Life Sciences", "Telecom", "Public Sector"];
