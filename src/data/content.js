export const profile = {
  name: 'Omotola Kekere-Ekun',
  firstName: 'Omotola',
  role: 'Data Analyst & Analytics Instructor',
  location: 'Lagos, Nigeria',
  email: 'tolanikekereekun@gmail.com',
  phone: '+234 808 493 7582',
  linkedin: 'https://www.linkedin.com/in/tolani-kekere-ekun991a98177/',
  medium: 'https://medium.com/@tolanikekereekun',
  github: 'https://github.com/Tolanikeks',
  tagline: 'I turn raw data into stories that drive decisions.',
  intro:
    'Data Analyst and Analytics Instructor with 3+ years of experience transforming complex datasets into clear, actionable insights — and teaching others to do the same.',
}

export const stats = [
  { value: 3, suffix: '+', label: 'Years working with data' },
  { value: 300, suffix: '+', label: 'Learners trained & supervised' },
  { value: 4, suffix: '', label: 'Core tools mastered' },
  { value: 100, suffix: '%', label: 'Curiosity, always' },
]

export const story = [
  {
    chapter: '01',
    title: 'Every dataset hides a story.',
    body: 'Most people see rows and columns. I see questions waiting to be asked — why did revenue dip in Q3, which leads actually convert, what the numbers are trying to say. My job is to listen.',
  },
  {
    chapter: '02',
    title: 'From politics to patterns.',
    body: 'I started in Political Science at the University of Lagos — a discipline built on analyzing human behavior at scale. The pivot to data was natural: same curiosity, sharper tools. A Master’s in Data Science Management at Rome Business School made it rigorous.',
  },
  {
    chapter: '03',
    title: 'Insight is only useful if it’s understood.',
    body: 'At TechStudio Academy I teach aspiring analysts to clean, explore, visualize and report — using real business and sales datasets, not toy examples. Teaching forced me to make data simple. That discipline shows up in every dashboard I build.',
  },
]

export const skills = [
  {
    name: 'Excel',
    level: 92,
    note: 'Pivot mastery, dashboarding, forecasting',
  },
  {
    name: 'Power BI',
    level: 90,
    note: 'Interactive KPI dashboards, DAX, data modeling',
  },
  {
    name: 'SQL',
    level: 88,
    note: 'Querying, joins, aggregation, reporting layers',
  },
  {
    name: 'Python',
    level: 82,
    note: 'Pandas, EDA, visualization, automation',
  },
  {
    name: 'Data Storytelling',
    level: 90,
    note: 'Turning analysis into decisions',
  },
  {
    name: 'HTML / CSS / JS · Figma',
    level: 75,
    note: 'Frontend & product design background',
  },
]

export const experience = [
  {
    period: 'Jul 2023 — Present',
    role: 'Data Analyst / Data Science Tutor',
    org: 'TechStudio Academy',
    points: [
      'Designed hands-on projects on real business and sales datasets — revenue trends, lead conversion, target performance.',
      'Taught and supervised interactive dashboards in Excel, Power BI and SQL for KPI tracking and decision-making.',
      'Trained learners in data cleaning, visualization and forecasting to solve practical business problems.',
      'Coordinated and evaluated analytics projects, exposing students to real industry challenges.',
    ],
  },
  {
    period: 'Jan 2023 — Jul 2023',
    role: 'Front-End Developer / UI-UX Intern',
    org: '8thGear / Eggling Community',
    points: [
      'Conducted user research to design engaging user experiences.',
      'Ran client meetings to align delivery with actual needs.',
      'Implemented and maintained websites and applications.',
    ],
  },
  {
    period: 'Oct 2020 — Apr 2022',
    role: 'Virtual / Executive Assistant',
    org: 'TEEOF Media / Simone Oasis',
    points: [
      'Managed company communications and production schedules.',
      'Secured guest appearances for Africa Business Radio podcast.',
    ],
  },
  {
    period: 'Sep 2019 — Jun 2020',
    role: 'Graduate Assistant / Admin Officer',
    org: 'Crescent University — Political Science Dept.',
    points: [
      'Ran a focus-group study on the impact of internet use on academics.',
      'Coordinated examinations for 300+ students, online and offline.',
    ],
  },
]

export const education = [
  {
    school: 'Rome Business School / University of Valencia',
    degree: 'M.Sc. Data Science Management',
    year: 'In view',
  },
  {
    school: 'University of Lagos',
    degree: 'B.Sc. Political Science',
    year: '2018',
  },
  {
    school: 'Innkeeper Academy',
    degree: 'Career Certification, Data Analytics',
    year: '2023',
  },
  {
    school: 'Innkeeper Academy',
    degree: 'Career Certification, Frontend Web Development',
    year: '2022',
  },
  {
    school: 'Zuri School of Design',
    degree: 'Certification, Product Design',
    year: '2022',
  },
]

// Placeholder case studies — swap with real projects when ready.
export const projects = [
  {
    id: 'sales-dashboard',
    tag: 'Power BI · SQL',
    title: 'Retail Sales Performance Dashboard',
    question: 'Why are we missing revenue targets, and where?',
    approach:
      'Modeled 18 months of sales data in SQL, built a Power BI dashboard tracking revenue trends, regional performance and target attainment with drill-through by product line.',
    insight:
      'Two regions drove 70% of the shortfall — driven by stockouts, not demand. Reallocation recommendations recovered the trend within a quarter.',
    metrics: [
      { value: '18mo', label: 'of sales data modeled' },
      { value: '70%', label: 'of shortfall isolated' },
    ],
  },
  {
    id: 'lead-conversion',
    tag: 'Excel · Power BI',
    title: 'Lead Conversion Funnel Analysis',
    question: 'Where do leads leak out of the funnel?',
    approach:
      'Cleaned and segmented CRM exports in Excel, built conversion-rate models by source and stage, visualized the funnel in Power BI with cohort comparisons.',
    insight:
      'Leads from referral channels converted 3× better than paid — but got the slowest follow-up. A response-time SLA became the top recommendation.',
    metrics: [
      { value: '3×', label: 'conversion gap found' },
      { value: '5', label: 'funnel stages mapped' },
    ],
  },
  {
    id: 'churn-eda',
    tag: 'Python · Pandas',
    title: 'Customer Churn Exploratory Analysis',
    question: 'Who leaves, and what do they have in common?',
    approach:
      'Exploratory data analysis in Python on a telco-style customer dataset: distributions, correlations, cohort views and churn-driver visualizations with Matplotlib/Seaborn.',
    insight:
      'Month-to-month contracts with electronic-check payments churned at nearly double the baseline — a clear, targetable retention segment.',
    metrics: [
      { value: '2×', label: 'churn in key segment' },
      { value: '20+', label: 'features explored' },
    ],
  },
  {
    id: 'training-analytics',
    tag: 'Excel · SQL · Teaching',
    title: 'Student Outcomes Tracker',
    question: 'Are learners actually getting job-ready?',
    approach:
      'Designed the assessment and project-evaluation pipeline at TechStudio Academy: rubric data captured per cohort, queried in SQL, reported in a live Excel dashboard.',
    insight:
      'Project-based assessments predicted completion far better than quiz scores — the curriculum was rebalanced toward applied work.',
    metrics: [
      { value: '300+', label: 'learners tracked' },
      { value: '4', label: 'cohorts analyzed' },
    ],
  },
]
