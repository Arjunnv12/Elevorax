# Implementation Plan - Modularize Elevorax Institute Codebase

We will split the single-file React application (`src/App.tsx`) into a layered directory structure. This separates concerns, makes components reusable, simplifies state management, and isolates styling and configuration.

## Proposed Structure

We will refactor the project layout into the following layered directory tree:

```
src/
├── main.tsx
├── App.tsx
├── index.css
├── types/
│   └── index.ts
├── data/
│   └── levels.ts
└── components/
    ├── layout/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    ├── home/
    │   ├── HeroIntro.tsx
    │   ├── LevelSidebar.tsx
    │   └── ElevatorScene.tsx
    ├── sections/
    │   ├── About.tsx
    │   ├── Courses.tsx
    │   └── Reviews.tsx
    └── modals/
        ├── EnrollModal.tsx
        └── DemoModal.tsx
```

---

## Proposed Changes

### Layer 1: Types & Static Data

#### [NEW] [index.ts](file:///f:/elevorax-institute/src/types/index.ts)
- Define the `Level` interface for the interactive elevator path steps.

#### [NEW] [levels.ts](file:///f:/elevorax-institute/src/data/levels.ts)
- Store the static `levels` array data containing the milestones (num, title, subtitle, desc, color, glow).

---

### Layer 2: Global Styles

#### [MODIFY] [index.css](file:///f:/elevorax-institute/src/index.css)
- Move the CSS styles (typography, keyframe animations, glowing utility classes, glassmorphism card/navbar setups) out of the `dangerouslySetInnerHTML` tag inside `App.tsx` and place them directly here.
- Maintain compatibility with Tailwind v4 (`@import "tailwindcss"`).

---

### Layer 3: Reusable & Segmented Components

#### [NEW] [Navbar.tsx](file:///f:/elevorax-institute/src/components/layout/Navbar.tsx)
- Render the fixed navigation bar (desktop and mobile navigation).
- Accept `activeSection` and `triggerEnroll` as props.
- Keep mobile menu toggle state (`isMobileMenuOpen`) isolated inside the Navbar component.

#### [NEW] [Footer.tsx](file:///f:/elevorax-institute/src/components/layout/Footer.tsx)
- Render the site footer (copyright, privacy/terms links).

#### [NEW] [EnrollModal.tsx](file:///f:/elevorax-institute/src/components/modals/EnrollModal.tsx)
- Render the modal for admission/enrollment requests.
- Encapsulate the form state (`studentName`, `studentEmail`, `studentPhone`, `enrollSuccess`) and submission logic internally.
- Accept `isOpen`, `onClose`, and `selectedCourse` as props.

#### [NEW] [DemoModal.tsx](file:///f:/elevorax-institute/src/components/modals/DemoModal.tsx)
- Render the video overlay player for the workspace YouTube video showcase.
- Accept `isOpen` and `onClose` as props.

---

### Layer 4: Home Section Sub-components

#### [NEW] [HeroIntro.tsx](file:///f:/elevorax-institute/src/components/home/HeroIntro.tsx)
- Render the left column hero elements (headline, badges, CTA button anchors, placed statistics).
- Accept `triggerEnroll` and `setDemoModalOpen` as props.

#### [NEW] [LevelSidebar.tsx](file:///f:/elevorax-institute/src/components/home/LevelSidebar.tsx)
- Render the list of elevator steps that light up based on the active level index.
- Accept `activeIdx` as a prop.

#### [NEW] [ElevatorScene.tsx](file:///f:/elevorax-institute/src/components/home/ElevatorScene.tsx)
- Render the right column sticky container containing the 3D escalator SVG layers, floating code snippets, portal doorway, and animated boy character.
- Accept `progress`, `activeIdx`, and `isGreenGlow` as props.

---

### Layer 5: Main Sections

#### [NEW] [About.tsx](file:///f:/elevorax-institute/src/components/sections/About.tsx)
- Render the About section container and feature cards list.

#### [NEW] [Courses.tsx](file:///f:/elevorax-institute/src/components/sections/Courses.tsx)
- Render the Courses selection grid cards.
- Accept `triggerEnroll` as a prop.

#### [NEW] [Reviews.tsx](file:///f:/elevorax-institute/src/components/sections/Reviews.tsx)
- Render the testimonials slider/grid column.

---

### Layer 6: App Orchestration

#### [MODIFY] [App.tsx](file:///f:/elevorax-institute/src/App.tsx)
- Clear out all inline sub-sections, style blocks, and local mock data.
- Keep the main orchestration state (`activeSection`, `enrollModalOpen`, `selectedCourse`, `demoModalOpen`, `progress`).
- Maintain the scroll detection `useEffect` and GSAP ScrollTrigger timeline sequence targeting `#home` and `#boy-character-wrapper`.
- Compose the page layout cleanly using the imported child components.

---

## Verification Plan

### Automated Tests
- Run `npm run lint` (`tsc --noEmit`) to verify that TypeScript compilation passes without errors.
- Run `npm run build` to verify Vite build compiles files successfully.

### Manual Verification
- Test scroll mechanics to verify the boy character still ascends the escalator smoothly and code snippet visibilities toggle correctly based on scroll progress.
- Test menu triggers: verify mobile navbar toggle opens and closes correctly.
- Test modal functions (enrollment, YouTube player).
- Confirm all styling features (glowing shadows, fonts, transitions) remain identical to the original design.
