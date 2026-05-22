# Mauli Kitchen Trolly & Fabricators — Website

Premium, mobile-first business showcase website.

---

## Tech Stack
- **React 18** — UI framework
- **Vite** — Build tool (fast HMR, optimized builds)
- **Tailwind CSS** — Utility-first CSS
- **Framer Motion** — Smooth animations

---

## Quick Start

### 1. Install Node.js
Download from https://nodejs.org (v18 or higher recommended)

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### 4. Build for production
```bash
npm run build
```
Output goes to the `dist/` folder.

### 5. Preview production build
```bash
npm run preview
```

---

## Project Structure

```
mauli-kitchen/
├── index.html                    ← Entry HTML
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
│
└── src/
    ├── main.jsx                  ← App entry point
    ├── App.jsx                   ← Root component
    ├── index.css                 ← Global styles & CSS variables
    │
    ├── components/
    │   ├── AmbientBackground.jsx ← Animated light orbs
    │   ├── Navbar.jsx            ← Top navigation bar
    │   ├── FloatingButtons.jsx   ← WhatsApp + Instagram floats
    │   ├── GalleryGrid.jsx       ← Reusable image gallery
    │   └── ImageModal.jsx        ← Fullscreen image preview
    │
    ├── sections/
    │   ├── Hero.jsx              ← Landing hero section
    │   ├── Stats.jsx             ← 500+ projects, 8+ years, etc.
    │   ├── Services.jsx          ← Kitchen Trolly + Fabrication cards
    │   ├── KitchenGallery.jsx    ← Kitchen photos gallery
    │   ├── FabricationGallery.jsx← Fabrication photos gallery
    │   ├── About.jsx             ← Owners + address + contact
    │   └── Footer.jsx            ← Bottom footer
    │
    └── assets/
        ├── imageData.js          ← ⭐ ADD YOUR PHOTOS HERE
        └── images/
            ├── kitchen/          ← Put kitchen trolly photos here
            └── fabrication/      ← Put fabrication photos here
```

---

## ⭐ How to Add Your Photos

### Step 1 — Copy your photos
Put kitchen photos in: `src/assets/images/kitchen/`
Put fabrication photos in: `src/assets/images/fabrication/`

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### Step 2 — Open imageData.js
File location: `src/assets/imageData.js`

### Step 3 — Add your imports at the top
```js
import kitchen1 from './images/kitchen/kitchen-1.jpg'
import kitchen2 from './images/kitchen/kitchen-2.jpg'
import kitchen3 from './images/kitchen/kitchen-3.jpg'

import fab1 from './images/fabrication/fab-1.jpg'
import fab2 from './images/fabrication/fab-2.jpg'
```

### Step 4 — Add to arrays
```js
export const kitchenImages = [
  { src: kitchen1, alt: 'Modern steel kitchen trolley' },
  { src: kitchen2, alt: 'Custom kitchen trolley with shelves' },
  { src: kitchen3, alt: 'Compact kitchen trolley' },
]

export const fabricationImages = [
  { src: fab1, alt: 'Custom steel gate' },
  { src: fab2, alt: 'Steel grille fabrication' },
]
```

That's it! The gallery will automatically show your photos with tap-to-enlarge support.

---

## Deployment

### Option A: Netlify (Recommended — Free)
1. Build: `npm run build`
2. Go to https://netlify.com
3. Drag and drop the `dist/` folder
4. Done! Your site is live.

### Option B: Vercel (Free)
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repo
4. It auto-detects Vite and deploys

### Option C: GitHub Pages (Free)
1. Install plugin: `npm install gh-pages --save-dev`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Build and deploy: `npm run build && npm run deploy`

---

## Customization

### Change colors
Edit `src/index.css` — look for CSS variables at the top:
```css
:root {
  --steel-600: #2a3d52;  ← Main accent color
  --gold: #b8935a;        ← Gold accent color
}
```

### Change contact links
Edit `src/components/FloatingButtons.jsx`:
```js
const WHATSAPP_URL = 'https://wa.me/919921932038'
const INSTAGRAM_URL = 'https://www.instagram.com/...'
```

### Change business name / tagline
Edit `src/sections/Hero.jsx`

### Change owner names / address
Edit `src/sections/About.jsx`

---

## Performance Tips
- Use WebP format for photos (smaller file size)
- Keep individual photo size under 500KB
- Images are lazy-loaded automatically
- Animations use GPU-accelerated transforms only

---

Built with ❤️ for Mauli Kitchen Trolly and Fabricators, Pune.
