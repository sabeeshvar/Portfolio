# Sabeeshvar M. — Digital Engineering Lab & Portfolio

An ultra-modern, highly interactive personal portfolio web application built for **Sabeeshvar M.**, an Electronics & Communication Engineering (ECE) undergraduate at VSB Engineering College, AI & Embedded Systems builder, and future technology entrepreneur.

---

## 🚀 Overview & Concept

Designed with a **Futuristic Digital Engineering Lab** visual identity, this web application merges hardware circuit aesthetics with high-performance modern web technologies. It features an interactive HTML5 circuit canvas background, real-time node dependency visualization, animated project pipelines, interactive mission logs, and deep-dive technical specification modals.

---

## ✨ Features

- **Interactive Circuit Canvas**: Real-time canvas rendering digital circuit traces, data packets, and cursor-reactive energy pulses.
- **Hero & Command Console**: Custom headline, role badges, interactive metrics, and direct action triggers.
- **Interactive Tech Constellation**: Interactive skills matrix mapping dependencies between Programming, AI & Data, Electronics, Web Development, and Innovation.
- **AgroPulse Flagship Project Pipeline**: Interactive visual pipeline (`FARM` → `SENSORS` → `CLOUD DATA` → `AI ENGINE` → `SMART DECISION` → `FARMER DASHBOARD`) with live telemetry simulation.
- **System Architecture Deep-Dive Modals**: Comprehensive technical modal views detailing Problem, Solution, Features, Tech Stack, My Role, and Future Development Roadmaps for projects.
- **Futuristic Vertical Academic Timeline**: Glowing nodes highlighting B.E. ECE (8.0 CGPA), Class 12 (81.33%), and Class 10 (81.33%).
- **Entrepreneurial "Idea Core"**: Central reactor core visualizing the convergence of Electronics, AI, IoT, Embedded Systems, Smart Agriculture, and Entrepreneurship.
- **Transmission Contact Console**: Encrypted-style communication form with live telemetry feedback and interactive celebration effects.
- **Resume CV Viewer & Print System**: Formatted modal for reviewing, printing, or exporting full CV details.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism & Cyber CSS Modules
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Keyframe Scanners, HTML5 Canvas 60 FPS Particle Systems, and Canvas Confetti
- **Typography**: Google Fonts (*Orbitron*, *Space Grotesk*, *Fira Code*, *Inter*)

---

## 📂 Project Structure

```text
c:/PORTFOLIO/
├── public/                 # Static public assets & favicons
├── src/
│   ├── assets/             # Images and design media
│   ├── components/         # Modular UI Components
│   │   ├── AboutMe.jsx             # "The Engineer Behind The Ideas" Section
│   │   ├── Certifications.jsx      # Certificate Verification Cards
│   │   ├── CircuitCanvas.jsx       # Interactive Background Circuit Canvas
│   │   ├── Contact.jsx             # Transmission Contact Console
│   │   ├── CurrentlyExploring.jsx  # Active Research Radar Cards
│   │   ├── Education.jsx           # Vertical Academic Timeline
│   │   ├── Entrepreneurship.jsx    # "Building Beyond Code" Idea Core
│   │   ├── Experience.jsx          # Industrial Internships & Training
│   │   ├── Footer.jsx              # Minimal Futuristic Footer
│   │   ├── Hero.jsx                # Main Hero & Call-To-Action Console
│   │   ├── LoadingScreen.jsx       # Custom System Initialization Loader
│   │   ├── MissionLog.jsx          # Hackathons & Achievements Log
│   │   ├── Navbar.jsx              # Floating Glass Navigation Bar
│   │   ├── ProjectModal.jsx        # Technical Deep-Dive Modal Window
│   │   ├── Projects.jsx            # Flagship AgroPulse & Projects Showcase
│   │   ├── ResumeModal.jsx         # Interactive CV Viewer & Print Modal
│   │   ├── SocialIcons.jsx         # Custom SVG Brand Icons
│   │   └── TechConstellation.jsx   # Interactive Skills Dependency Graph
│   ├── App.jsx             # Main Application Root & Section Tracker
│   ├── index.css           # Design Tokens, Glassmorphism, & Animations
│   └── main.jsx            # Application Entrypoint
├── index.html              # Main HTML Document & Google Fonts
├── package.json            # Project Dependencies & Scripts
├── vite.config.js          # Vite & Tailwind Plugin Configuration
└── README.md               # Project Documentation
```

---

## 💻 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sabeeshvar/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Launch local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173/`

---

## 🔨 How to Build for Production

To compile the production-ready optimized build:

```bash
npm run build
```

The output dist bundle will be generated in the `/dist` directory. You can preview the production build locally with:

```bash
npm run preview
```

---

## 🌐 Deployment Information

This project is structured for zero-configuration deployment on platforms like:
- **Vercel**: Import the GitHub repository `sabeeshvar/Portfolio` with default Vite settings.
- **Netlify**: Connect repository with build command `npm run build` and publish directory `dist`.
- **GitHub Pages**: Build output can be deployed using `gh-pages` or GitHub Actions.

---

## 📄 License & Attribution

Created by **Sabeeshvar M.** © 2026. All rights reserved.
