import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export type SkillIcon = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

export const SKILL_DATA = [
  { skill_name: "Python", image: "python.png", width: 80, height: 80 },
  { skill_name: "SQL", image: "sql.png", width: 80, height: 80 },
  { skill_name: "R", image: "r.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "NumPy", image: "numpy.png", width: 80, height: 80 },
  { skill_name: "Pandas", image: "pandas.png", width: 80, height: 80 },
  { skill_name: "PyTorch", image: "pytorch.png", width: 80, height: 80 },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/tejal-palwankar/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/tejalpalwankar",
  },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "OpenAI", image: "openai.png", width: 80, height: 80 },
  { skill_name: "Claude", image: "claude.png", width: 80, height: 80 },
  { skill_name: "CrewAI", image: "crewai.png", width: 80, height: 80 },
  { skill_name: "LangGraph", image: "langgraph.png", width: 80, height: 80 },
  { skill_name: "MCP", image: "mcp.png", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Power BI", image: "powerbi.png", width: 80, height: 80 },
  { skill_name: "Streamlit", image: "streamlit.png", width: 80, height: 80 },
  { skill_name: "Excel", image: "excel.png", width: 80, height: 80 },
  { skill_name: "AWS", image: "aws.png", width: 80, height: 80 },
  { skill_name: "Azure", image: "azure.png", width: 80, height: 80 },
  { skill_name: "GCP", image: "gcp.png", width: 80, height: 80 },
  { skill_name: "Databricks", image: "databricks.png", width: 80, height: 80 },
  { skill_name: "Snowflake", image: "snowflake.png", width: 80, height: 80 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "Jira", image: "jira.png", width: 80, height: 80 },
  { skill_name: "Confluence", image: "confluence.png", width: 80, height: 80 },
  { skill_name: "Postman", image: "postman.png", width: 80, height: 80 },
  { skill_name: "Git", image: "git.png", width: 80, height: 80 },
  { skill_name: "Docker", image: "docker.png", width: 80, height: 80 },
] as const;

export const OTHER_SKILL: readonly SkillIcon[] = [];

export const PROJECTS = [
  {
    title: "MergerMetrics Lakehouse Pipeline",
    description:
      "End-to-end lakehouse pipeline simulating a real-world acquisition. Built Bronze → Silver → Gold medallion architecture in Databricks on AWS S3, consolidating two companies' messy data into a unified analytics layer with Tableau dashboards.",
    image: "/projects/mergermetrics.png",
    link: "https://github.com/tejalpalwankar/MergerMetrics-Lakehouse-Pipeline",
  },
  {
    title: "Fraud Detection on Financial Transactions",
    description:
      "Engineered 20+ transaction risk features in BigQuery (amount velocity, geographic outliers). Deployed supervised (XGBoost) and unsupervised (Isolation Forest) models on GCP, achieving 90% recall on test data.",
    image: "/projects/fraud.png",
    link: "https://github.com/tejalpalwankar",
  },
  {
    title: "Diabetic Retinopathy Detection",
    description:
      "Machine learning model to detect diabetic retinopathy from retinal images. Built a classification pipeline to identify disease severity, supporting early diagnosis in healthcare settings.",
    image: "/projects/retinopathy.png",
    link: "https://github.com/tejalpalwankar/Diabetic-Retinopathy-Detection",
  },
  {
    title: "Smart Manufacturing AI",
    description:
      "Proposed integration of Neurala AI Vision Inspection Automation into Floyd Furniture's manufacturing pipeline. Designed a phased implementation roadmap to reduce defects, automate QA, and integrate with Salesforce CRM.",
    image: "/projects/manufacturing.png",
    link: "https://github.com/tejalpalwankar/smart-manufacturing-ai",
  },
  {
    title: "Snowflake Strategic Planning for Innovation",
    description:
      "Applied the Sense → Seize → Transform innovation framework to propose a 12-month roadmap for Snowflake across real-time analytics, AI/ML platform expansion, and a decentralized data marketplace.",
    image: "/projects/snowflake.png",
    link: "https://github.com/tejalpalwankar/Snowflake-Strategic-Planning-for-Innovation-",
  },
  {
    title: "Airbnb New Jersey Data Analysis",
    description:
      "Exploratory data analysis on Airbnb listings across New Jersey. Uncovered pricing patterns, availability trends, and host behavior using Python and visualization libraries.",
    image: "/projects/airbnb.png",
    link: "https://github.com/tejalpalwankar/Airbnb-New-Jersey-Data-analysis",
  },
  {
    title: "Automated File Processing — Docker & AWS S3",
    description:
      "Built an automated pipeline to process files and display results on the web using Docker containers and AWS S3, demonstrating cloud-native file orchestration.",
    image: "/projects/docker-aws.png",
    link: "https://github.com/tejalpalwankar/Automated-File-Processing-and-Web-Display-with-Docker-AWS-S3",
  },
  {
    title: "GDP, Internet & Employment Analysis",
    description:
      "Statistical analysis exploring the relationship between GDP, internet penetration, and employment rates across countries using Python, pandas, and inferential statistics.",
    image: "/projects/gdp.png",
    link: "https://github.com/tejalpalwankar/GDP_Internet_emp",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/tejal-palwankar/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/tejalpalwankar",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:tpalwank@syr.edu",
      },
      {
        name: "Resume",
        icon: null,
        link: "#",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  { title: "About me", link: "/#about-me" },
  { title: "Experience", link: "/#experience" },
  { title: "Skills", link: "/#skills" },
  { title: "Projects", link: "/#projects" },
  { title: "AI Agents", link: "/ai-agents" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/tejalpalwankar",
};