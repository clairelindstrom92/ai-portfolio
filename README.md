# Claire Lindstrom - AI Engineer Portfolio

Production-grade portfolio website showcasing expertise in real-time AI systems, applied LLMs, and deployed infrastructure.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Diagrams:** Mermaid.js
- **Deployment:** Vercel

## Features

- Clean, modern, minimal design optimized for AI/ML/LLM recruiters
- Dark theme with technical aesthetic
- Responsive design for all devices
- Smooth animations and transitions
- Detailed project pages with architecture diagrams
- SEO optimized

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Section.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Footer.tsx
│   │   └── ArchitectureDiagram.tsx
│   ├── projects/
│   │   ├── voice-ai/
│   │   ├── manifest-alchemy/
│   │   ├── ai-assistant/
│   │   └── robotics/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to configure your project.

### Option 2: Deploy via GitHub Integration

1. Push your code to a GitHub repository.

2. Go to [vercel.com](https://vercel.com) and sign in.

3. Click "Add New Project" and import your GitHub repository.

4. Vercel will automatically detect Next.js and configure the build settings.

5. Click "Deploy" - your site will be live in minutes.

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in.

2. Click "Add New Project".

3. Import your Git repository or upload your project folder.

4. Configure build settings (usually auto-detected):
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. Click "Deploy".

## Environment Variables

No environment variables are required for basic functionality. If you add features that require API keys or external services, add them in the Vercel dashboard under Project Settings → Environment Variables.

## Customization

### Update Contact Information

Edit `app/components/Footer.tsx` to update:
- GitHub URL
- LinkedIn URL
- Email address

### Update Project Information

Edit project data in:
- `app/page.tsx` - Main projects list
- `app/projects/*/page.tsx` - Individual project pages

### Modify Colors

Update CSS variables in `app/globals.css`:
```css
:root {
  --background: #0a0a0a;
  --foreground: #e5e5e5;
  --accent: #3b82f6;
  --accent-dark: #2563eb;
}
```

### Update Personal Information

Edit the following files:
- `app/layout.tsx` - Meta tags and SEO
- `app/page.tsx` - About section
- `app/components/Hero.tsx` - Hero section content

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Performance Optimization

The site is optimized for:
- Fast page loads
- SEO
- Mobile responsiveness
- Accessibility

## License

This portfolio is private and proprietary.

## Contact

- **Name:** Claire Lindstrom
- **Title:** AI Software Engineer | Real-Time Voice AI | Applied LLM Systems
- **Location:** Frederick, MD
- **Citizenship:** U.S. Citizen | Eligible for Security Clearance
- **Email:** clairelindstrom7@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/clairelindstrom/
- **GitHub:** https://github.com/clairelindstrom92

---

Built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.
