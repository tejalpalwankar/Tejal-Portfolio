<a name="readme-top"></a>

# Tejal Palwankar | AI Engineer Portfolio

![Tejal Palwankar Portfolio](/.github/images/img_main.png "Tejal Palwankar | AI Engineer & Data Professional")

[![Portfolio](https://flat.badgen.net/static/Portfolio/Live?icon=github&color=purple&scale=1.01)](https://tejalpalwankar.com "Portfolio")
[![LinkedIn](https://flat.badgen.net/static/LinkedIn/Connect?icon=github&color=black&scale=1.01)](https://www.linkedin.com/in/tejal-palwankar/ "LinkedIn")
[![GitHub](https://flat.badgen.net/static/GitHub/Follow?icon=github&color=black&scale=1.01)](https://github.com/tejalpalwankar "GitHub")

A modern, space-themed 3D portfolio built with Next.js 14, Three.js, and Framer Motion — featuring an AI-powered chatbot that answers questions about me, an AI Agents showcase page, and a full work experience timeline.

---

## 🚀 Features

- **AI Chatbot** — Powered by OpenAI GPT-4o-mini, reads my resume and LinkedIn PDF to answer questions about me in real time. Records interested users' emails via Pushover notifications.
- **AI Agents Page** — Dedicated page showcasing 7 production-ready multi-agent systems built with CrewAI, OpenAI Agents SDK, and GPT-4o.
- **Work Experience Timeline** — Animated alternating timeline of all work history.
- **Skills Section** — 5 rows of tech icons with hover labels covering AI/ML, BI, Cloud, and more.
- **Projects Grid** — 8 projects displayed in 2 clean rows of 4.
- **Space Theme** — 3D blackhole animation, star background, and neural network video backgrounds.
- **Fully Responsive** — Works on mobile, tablet, and desktop.

---

## 🗂️ Folder Structure

```bash
tejal-portfolio/
  |- app/
    |-- ai-agents/
        |--- page.tsx
    |-- api/
        |--- chat/
            |---- route.tsx
    |-- favicon.ico
    |-- globals.css
    |-- layout.tsx
    |-- page.tsx
  |- components/
    |-- main/
        |--- ai-agents-preview.tsx
        |--- chatbot.tsx
        |--- experience.tsx
        |--- footer.tsx
        |--- hero.tsx
        |--- navbar.tsx
        |--- projects.tsx
        |--- skills.tsx
        |--- star-background.tsx
    |-- sub/
        |--- hero-content.tsx
        |--- project-card.tsx
        |--- skill-data-provider.tsx
        |--- skill-text.tsx
  |- config/
    |-- index.ts
  |- constants/
    |-- index.ts
  |- me/
    |-- summary.txt
    |-- Tejal_resume.txt
    |-- Tejal_Linkedin.txt
  |- public/
    |-- projects/
    |-- skills/
    |-- videos/
  |- .env.local
  |- next.config.js
  |- package.json
  |- tailwind.config.ts
  |- tsconfig.json
```

---

## 🧰 Getting Started

1. Make sure **Git** and **NodeJS** are installed.

2. Clone this repository:
```bash
git clone https://github.com/tejalpalwankar/tejal-portfolio.git
cd tejal-portfolio
```

3. Install dependencies:
```bash
npm install --legacy-peer-deps
```

4. Create a `.env.local` file in the root:
```bash
OPENAI_API_KEY=your_openai_api_key
PUSHOVER_TOKEN=your_pushover_token
PUSHOVER_USER=your_pushover_user
```

5. Add your personal files to the `me/` folder:
- `summary.txt` — a short personal bio
- `Tejal_resume.txt` — extracted text from your resume PDF
- `Tejal_Linkedin.txt` — extracted text from your LinkedIn PDF

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 14, React 18, TypeScript |
| 3D & Animation | Three.js, Framer Motion |
| Styling | Tailwind CSS |
| AI Chatbot | OpenAI GPT-4o-mini, OpenAI Agents SDK |
| Notifications | Pushover API |
| Icons | React Icons, Heroicons |
| Deployment | Vercel |

---

## 🤖 AI Chatbot

The chatbot is powered by **OpenAI GPT-4o-mini** and acts as me — answering questions about my experience, projects, and skills. It reads my actual resume and LinkedIn profile to give accurate answers.

**Features:**
- Answers questions about experience, skills, and projects
- Records unknown questions via Pushover so I can improve over time
- Asks interested users for their email and records it via Pushover
- Auto-opens on page load so visitors notice it immediately

---

## 🧠 AI Agent Projects

| Project | Tech Stack |
|---------|-----------|
| SignalForge | GPT-4o, Firecrawl, Streamlit, Agno |
| Deep Research Agent | OpenAI Agents SDK, Gradio, AsyncIO, SendGrid |
| Engineering Team Agent | CrewAI, Gradio, Python |
| Financial Researcher Agent | CrewAI, OpenAI |
| Stock Picker Agent | CrewAI, OpenAI |
| Debate Agent | CrewAI, OpenAI |
| Coder Agent | CrewAI, OpenAI |

---

## 💼 Work Experience

- **Oregon Medical Board** — AI Engineer / AI Product Analyst (Oct 2025 – Present)
- **Syracuse University iSchool** — AI Research Analyst (Jul 2025 – Oct 2025)
- **Hapag-Lloyd** — Business Analyst, Inland (Jun 2024 – Aug 2024)
- **iConsult Collaborative** — AI & Data Engineer (Sep 2023 – May 2024)
- **Kiya.ai** — ML-Integrated Business Analyst, AML & Financial Crime (Jun 2022 – Jul 2023)

---

## 🎓 Education

- **MS Information Systems** — Syracuse University iSchool (May 2025)
- **BE Computer Engineering** — University of Mumbai (May 2022)

---

## 📃 Deploy on Vercel

The easiest way to deploy this Next.js app is via [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import the repo on Vercel
3. Add your environment variables (`OPENAI_API_KEY`, `PUSHOVER_TOKEN`, `PUSHOVER_USER`)
4. Click Deploy

---

## 🔗 Connect

- **LinkedIn:** [linkedin.com/in/tejal-palwankar](https://www.linkedin.com/in/tejal-palwankar/)
- **GitHub:** [github.com/tejalpalwankar](https://github.com/tejalpalwankar)
- **Email:** tpalwank@syr.edu

<p align="right">(<a href="#readme-top">back to top</a>)</p>