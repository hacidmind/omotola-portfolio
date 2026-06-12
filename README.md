# Omotola Kekere-Ekun — Portfolio

Story-driven data analyst portfolio. Dark glassmorphism theme, Three.js animated data-field background, GSAP ScrollTrigger animations.

## Stack

React 19 · Vite 6 · GSAP (`@gsap/react`) · Three.js

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Edit content

All copy lives in `src/data/content.js` — profile, story chapters, skills, experience, education, and project case studies. The four projects are realistic placeholders; replace them with real work by editing that one file. No component changes needed.

## Structure

```
src/
  data/content.js          ← all text content
  components/
    ThreeBackground.jsx    ← 3D particle data-field
    Nav.jsx  Hero.jsx  Story.jsx  Skills.jsx
    Experience.jsx  Projects.jsx  Contact.jsx
  styles.css               ← glassmorphism design system
```

## Deploy

Output of `npm run build` is static — deploy `dist/` to Netlify, Vercel, or GitHub Pages.
