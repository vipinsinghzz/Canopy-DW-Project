# Canopy – Digital Wellness Resource Hub

> An independent digital wellness resource hub curated for college students. Discover, compare, and learn about tools to manage screen time, break autopilot scrolling habits, and protect deep focus.

---

## 🌿 Overview

College life brings endless digital stimulation—group chats, course portals, notifications, and social feeds all compete for attention on the same devices. **Canopy** provides a neutral, fact-checked directory and comparison engine that helps students:
- **Discover researched wellness tools** across mindful pausing, strict blockers, habit trackers, and built-in screen-time managers.
- **Compare tools side-by-side** on platform support, true pricing models, privacy policies, and verified limitations.
- **Follow step-by-step setup walkthroughs** to configure built-in Digital Wellbeing, lock websites with Cold Turkey, or run gamified study sessions with Forest.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **UI & Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript 5

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx         # Root layout with fonts, metadata & hydration guards
│   ├── page.tsx           # Canopy homepage & curated showcase
│   ├── resources/         # Directory & detail pages for 12+ wellness tools
│   ├── compare/           # Side-by-side interactive comparison matrix
│   ├── guides/            # Step-by-step student setup guides
│   └── about/             # Mission statement, values & FAQ
├── components/            # Reusable UI components (Navbar, Footer, Cards, Filters)
├── data/                  # Verified datasets for categories and resources
└── public/                # Static assets and botanical illustrations
```

---

## 📄 License & Disclaimer

Canopy is an independent academic project and is not affiliated with, sponsored by, or endorsed by any featured application. All trademarks belong to their respective owners.
