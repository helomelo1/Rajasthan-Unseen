Below is a **clear, implementation-ready requirements file** that _combines all five ideas into one cohesive interactive website_ about under-represented Rajasthan culture—formatted professionally and directly.

---

# **📄 PROJECT REQUIREMENTS DOCUMENT**

**Title:** _Rajasthan: Unseen, Unheard, Unlived_
**Type:** Interactive Web Experience (Neal.fun style)

---

# **1. PROJECT OVERVIEW**

An interactive, scroll-based web experience showcasing the lesser-known cultural, ecological, and artisanal practices of Rajasthan. Combines:

- Everyday life interactions
- Endangered crafts (mini-games)
- Desert survival systems (water engineering)
- Soundscape storytelling
- Pastoral migration mapping

---

# **2. TARGET LENGTH**

**2–4 pages/screens**, depending on group size.

---

# **3. TECH STACK**

| Component  | Choice                                             |
| ---------- | -------------------------------------------------- |
| Framework  | React or Vanilla JS                                |
| UI         | Tailwind CSS                                       |
| Animations | GSAP / Framer Motion                               |
| SVGs       | Inline SVGs for interactive elements               |
| Audio      | Web Audio API                                      |
| Mapping    | Simple SVG path animation (no heavy map libraries) |

---

# **4. CORE FEATURES (MERGED)**

---

## **4.1 Interactive Rajasthan Daily Life Scroll (Page 1)**

### **Feature 1: Village Well Interaction**

**Actions:**

- User drags a rope (SVG rope) to pull up a bucket.
- Water level increases as you pull.
- Small tooltips reveal cultural facts.

**Implementation Notes:**

- Implement rope with draggable div + transform animation.
- Water level animation via SVG mask scaling.
- Tooltip on scroll/drag end.

---

### **Feature 2: Bajra Roti Maker**

**Actions:**

- Click to flatten dough.
- Second click inflates puffed roti.
- Each stage triggers info popups.

**Implementation:**

- Dough as morphing SVG path.
- State machine: raw → flattened → puffed.
- Use GSAP MorphSVG.

---

### **Feature 3: Turban Typology Switcher**

**Actions:**

- User toggles between 6 turban styles.

**Implementation:**

- Turban SVG layered on head silhouette SVG.
- Buttons cycle through turban types; swap SVGs.

---

### **Feature 4: Desert Night Soundscape**

**Actions:**

- Hover reveals different layers of audio (wind, bells, insects).
- Night sky gently animates.

**Implementation:**

- AudioContext: layered gain nodes for fading.
- Stars = animated SVG circles with CSS opacity oscillation.

---

---

## **4.2 Endangered Crafts Mini-Games (Page 2)**

### **Feature 1: Blue Pottery Color Mixer**

**Actions:**

- Drag color droplets into a bowl.
- Correct ratio triggers pottery spin animation.

**Implementation:**

- Drag-drop API.
- Color ratio evaluation with JS.
- SVG pot rotates on success.

---

### **Feature 2: Thewa Gold-Fusion Game**

**Actions:**

- Place gold sheet fragments onto a glass base.
- User aligns patterns.

**Implementation:**

- Snap-to-grid interaction.
- Layered SVG patterns with blend modes.

---

### **Feature 3: Kagzi Paper Pulper**

**Actions:**

- Tap to run a rotating drum.
- Lift the mesh at correct timing to reveal a paper sheet.

**Implementation:**

- Timing-based minigame: reaction window 300–500ms.
- Paper sheet appears only on "perfect timing."

---

### **Feature 4: Mojari Stitching**

**Actions:**

- Click to stitch along a dotted path on a mojari outline.
- Completes a pattern.

**Implementation:**

- SVG path with “draw-on-click” animation.
- Pointer events create progressive stroke-dashoffset.

---

---

## **4.3 Desert Survival Simulator (Page 3)**

### **Feature 1: Stepwell Builder**

**Actions:**

- Stack stones block by block; if aligned well → stability meter increases.

**Implementation:**

- Physics-lite stacking (simple bounding-box collision).
- SVG blocks with snapping.

---

### **Feature 2: Khadin Farm Simulator**

**Actions:**

- User draws a trench path to divert rainwater.
- System evaluates water distribution.

**Implementation:**

- Canvas drawing → convert to path → measure length.
- Check if path enters field zones.

---

### **Feature 3: Johad Water Recharge Puzzle**

**Actions:**

- Place johads (water pits) on terrain.
- Water flow simulation shows groundwater recharge.

**Implementation:**

- Simple grid simulation: each johad increases water level around tiles.
- Animated water spread via CSS gradient mask.

---

### **Feature 4: Desert Wind Pattern Explorer**

**Actions:**

- Drag wind direction arrows.
- House orientation changes to show heat reduction.

**Implementation:**

- Rotate SVG house.
- UI displays “Cooling Efficiency %”.

---

---

## **4.4 Rajasthan Through Sound (Page 4)**

### **Feature 1: Layered Soundscape Timeline**

**Actions:**

- Scroll timeline; each segment fades in its own sound layer.

**Implementation:**

- Use GSAP scroll triggers.
- Audio: fade in/out via gainNode automation.

---

### **Feature 2: Market Sound Mixer**

**Actions:**

- Slider toggles: camel bells, blacksmith hammer, chatter.
- Users create their own Rajasthan “mix”.

**Implementation:**

- Multiple audio tracks with gain sliders.

---

### **Feature 3: Rural Kitchen Ambience**

**Actions:**

- Hover over kitchen tools (silbatta, tawa, ladle) to hear sounds.
- Facts appear as overlays.

**Implementation:**

- On-hover play one-shot audio buffers.

---

---

## **4.5 Rabari Migration Map (Page 5)**

### **Feature 1: Interactive Migration Route**

**Actions:**

- User drags the caravan icon along a dotted path.
- Popups show info for each stop.

**Implementation:**

- SVG path follow-animation.
- Cursor-drag mapping to path length.

---

### **Feature 2: Livestock Care Game**

**Actions:**

- Feed camels/goats on a schedule.
- If missed → migration slows.

**Implementation:**

- Simple state management: hunger meter.

---

### **Feature 3: Seasonal Changes Visualizer**

**Actions:**

- Slider switches between seasons.
- Background, temperature, and grazing fields change.

**Implementation:**

- Background SVG swap + animated gradients.

---

---

# **5. REQUIRED SVG ASSETS LIST**

## **Page 1: Everyday Life**

- Rope + bucket
- Well top view
- Bajra dough 3 morphing states
- Roti puff animation frames
- Head silhouette
- 6 turban styles
- Desert dunes silhouette
- Night sky stars
- Moon icon

---

## **Page 2: Endangered Crafts**

- Blue pottery bowl
- Paint droplets
- Pot (rotating)
- Thewa art gold sheet patterns
- Glass base plate
- Kagzi paper pulper drum
- Mesh screen frame
- Paper sheet
- Mojari outline
- Stitching dotted path

---

## **Page 3: Desert Survival**

- Stepwell stone blocks
- Stepwell structure layers
- Khadin field layout
- Johad pits
- Terrain grid SVG
- House orientation model
- Wind arrows

---

## **Page 4: Soundscapes**

- Timeline with 4 nodes
- Market icons (camel bell, hammer, vendor)
- Kitchen tools: tawa, silbatta, ladle
- Fair instruments: algoza, dhol-thali

---

## **Page 5: Rabari Migration**

- Rabari caravan icon (camel + herder)
- Migration route path
- Village icons
- Goat, camel, water-container icons
- Weather overlays (heatwaves, clouds)

---

# **6. OPTIONAL ENHANCEMENTS**

- Add subtle parallax layers on scroll
- Add ambient desert wind globally
- Include a dark-mode desert night mode
- Add a “Rajasthan Fact Generator” sidebar

---

If you want, I can also create:
✅ Wireframes for all pages
✅ The React + Tailwind code scaffolding
✅ SVGs for all listed assets
Just say “generate wireframes” or “start building the website”.
