# Premium Digital Agency Website

Based on Next.js 16 (App Router), React 19, and Framer Motion.
Designed with a "Stark Luxury" glassmorphism aesthetic.

## 🚀 Features

- **Next.js App Router**: Server Components, Layouts, and Streaming.
- **Glassmorphism UI**: Custom CSS variables for frosted glass effects.
- **Animations**: Powered by Framer Motion for smooth transitions.
- **Dynamic Routing**: Service and Blog pages are generated dynamically.
- **SEO Optimized**: Metadata, semantic HTML, and fast performance.
- **No Tailwind Dependency**: Pure CSS Modules and CSS Variables.
- **Fully Responsive**: Mobile-first design approach.

## 🛠️ Installation

1.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd agency-website
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the development server**:

    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Navigate to `http://localhost:3000` in your browser.

## 📦 Deployment (Vercel)

This project is optimized for deployment on Vercel.

1.  Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2.  Import the project in [Vercel](https://vercel.com).
3.  Vercel will automatically detect Next.js.
4.  Click **Deploy**.

## 🎨 Design System

### Color Palette

- **Primary Background (`--bg-primary`)**: `#0a0a0f` (Deep Space Blue) - Creates a premium, infinite depth.
- **Glass Surface (`--glass-bg`)**: Low opacity white with blur.
- **Accent Primary (`--accent-primary`)**: `#6366f1` (Indigo 500) - For primary actions and brand highlights.
- **Accent Secondary (`--accent-secondary`)**: `#06b6d4` (Cyan 500) - For gradients and technological feel.

### Typography

- **Headings**: `Outfit` (Modern, geometric sans-serif).
- **Body**: `Inter` (Clean, highly readable sans-serif).

### Animations

- **Entrance**: Staggered fade-ins and slide-ups using Framer Motion.
- **Interaction**: Hover scaling, glow effects, and smooth scroll.

## 📁 Folder Structure

```
src/
├── app/                 # App Router pages and layouts
│   ├── blogs/           # Blog listing and dynamic detail pages
│   ├── services/        # Service template pages
│   ├── globals.css      # Design system variables & utilities
│   ├── layout.tsx       # Root layout with Header/Footer
│   └── page.tsx         # Home page assembly
├── components/          # Reusable UI components
│   ├── home/            # Homepage specific sections (Hero, Stats, etc.)
│   ├── Header.tsx       # Main navigation
│   └── Footer.tsx       # Site footer
├── data/                # Static data (Services, Blogs)
├── lib/                 # Utilities and constants
└── styles/              # CSS Modules
```
