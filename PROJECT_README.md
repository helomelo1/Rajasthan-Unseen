# Rajasthan: Unseen, Unheard, Unlived

An interactive, scroll-based web experience showcasing the lesser-known cultural, ecological, and artisanal practices of Rajasthan. Built as a Neal.fun-style educational project.

## 🚀 Quick Start

### Prerequisites

- Node.js (v20.19.0 or >=v22.12.0 recommended, v21.5.0 currently in use with warnings)
- npm or yarn

### Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Navigation.tsx    # Top navigation bar
│   ├── SvgPlaceholder.tsx # Base SVG placeholder component
│   ├── page1/           # Daily Life components
│   ├── page2/           # Endangered Crafts components
│   ├── page3/           # Desert Survival components
│   ├── page4/           # Sound Experience components
│   └── page5/           # Rabari Migration components
├── pages/               # Main page components
│   ├── HomePage.tsx
│   ├── DailyLifePage.tsx
│   ├── EndangeredCraftsPage.tsx
│   ├── DesertSurvivalPage.tsx
│   ├── SoundExperiencePage.tsx
│   └── RabariMigrationPage.tsx
├── assets/
│   └── svg-placeholders/ # SVG placeholder components (REPLACE THESE)
│       ├── page1-daily-life.tsx
│       ├── page2-crafts.tsx
│       ├── page3-survival.tsx
│       ├── page4-soundscapes.tsx
│       └── page5-migration.tsx
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
└── index.css            # Global styles + Tailwind

```

## 🎨 Features Implemented

### Page 1: Daily Life Interactions

- ✅ Village Well (drag rope to pull water)
- ✅ Bajra Roti Maker (click to transform dough)
- ✅ Turban Typology (cycle through 6 turban styles)
- ✅ Desert Night Soundscape (hover for sound layers)

### Page 2: Endangered Crafts Mini-Games

- ✅ Blue Pottery Color Mixer (drag-and-drop color mixing)
- ✅ Thewa Gold-Fusion Game (place gold fragments)
- ✅ Kagzi Paper Pulper (timing-based minigame)
- ✅ Mojari Stitching (click-to-stitch pattern)

### Page 3: Desert Survival Simulator

- ✅ Stepwell Builder (stack stones for stability)
- ✅ Khadin Farm Simulator (draw trench for water diversion)
- ✅ Johad Water Recharge Puzzle (place johads on terrain)
- ✅ Desert Wind Pattern Explorer (rotate house for cooling)

### Page 4: Sound Experience

- ✅ Layered Soundscape Timeline (scroll through day)
- ✅ Market Sound Mixer (adjust volume sliders)
- ✅ Rural Kitchen Ambience (hover for tool sounds)

### Page 5: Rabari Migration Map

- ✅ Interactive Migration Route (drag caravan along path)
- ✅ Livestock Care Game (feed animals to maintain speed)
- ✅ Seasonal Changes Visualizer (switch seasons)

## 🔧 Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: TailwindCSS 3.4
- **Routing**: React Router DOM 7
- **Animations**: Framer Motion + GSAP (installed but minimal usage - native CSS animations preferred)
- **Build Tool**: Vite 7

## 🖼️ SVG Placeholders

All SVG assets are currently **placeholder components** with TODO comments. They are located in `src/assets/svg-placeholders/`.

### How to Replace SVGs

1. Open the relevant placeholder file (e.g., `page1-daily-life.tsx`)
2. Find the component you want to replace (e.g., `RopeAndBucket`)
3. Replace the placeholder `<div>` with actual SVG code
4. Maintain the same component structure and props

**Example Replacement:**

```tsx
// Before (Placeholder)
export function RopeAndBucket({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`w-16 h-48 border-dashed border-2 border-gray-300 ${className}`}
    >
      Rope+Bucket
    </div>
  );
}

// After (Real SVG)
export function RopeAndBucket({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="64" height="192" viewBox="0 0 64 192">
      {/* Your SVG paths here */}
    </svg>
  );
}
```

### SVG Placeholder Files:

- `page1-daily-life.tsx` - 15 placeholders (rope, well, dough states, turbans, night sky)
- `page2-crafts.tsx` - 10 placeholders (pottery, gold patterns, paper pulper, mojari)
- `page3-survival.tsx` - 8 placeholders (stones, stepwell, fields, johads, house)
- `page4-soundscapes.tsx` - 10 placeholders (timeline, market tools, kitchen items)
- `page5-migration.tsx` - 9 placeholders (caravan, villages, livestock, weather)

**Total: 52 SVG placeholders to replace**

## 📋 Assumptions Made

1. **Audio Implementation**: Web Audio API integration is mocked with placeholder text. Actual audio files and gainNode implementations need to be added.

2. **GSAP/Framer Motion**: While installed, most animations use native CSS for simplicity. GSAP ScrollTrigger and Framer Motion can be integrated for more advanced effects.

3. **Responsive Design**: Mobile-responsive layouts implemented with Tailwind breakpoints, but may need fine-tuning for specific devices.

4. **SVG Complexity**: Placeholder SVGs are simple boxes. Real implementations should match the cultural authenticity described in `req.md`.

5. **Performance**: No image optimization or lazy loading implemented yet. Consider adding for production.

6. **Accessibility**: Basic ARIA labels included, but full a11y audit recommended.

7. **Data Persistence**: No state persistence (localStorage/backend). Games reset on page reload.

8. **Browser Support**: Tested on modern browsers. May need polyfills for older browsers.

9. **Content Accuracy**: Cultural information is educational but should be verified by domain experts.

## 🎯 Next Steps

1. **Replace SVG placeholders** with authentic Rajasthani cultural imagery
2. **Implement audio** - Add sound files and Web Audio API integration
3. **Enhance animations** - Use GSAP ScrollTrigger for scroll-based reveals
4. **Add content** - Expand educational info panels with more cultural details
5. **Optimize assets** - Compress images and implement lazy loading
6. **Testing** - Add unit tests for interactive components
7. **Accessibility** - Full keyboard navigation and screen reader support

## 🐛 Known Issues

- Some lint warnings for React 19 hooks (useEffect dependencies) - these are safe to ignore for this project scope
- Node version warnings for Vite 7 - app runs fine on Node v21.5.0 despite warnings

## 📝 License

Educational project - IIT Jodhpur Humanities Assignment SEM5

## 👥 Credits

Built per requirements in `req.md`

- All 5 pages implemented with interactive components
- Modular component structure
- SVG placeholder system for easy replacement
