# Celebria

An interactive, multi-stage greeting web application built with vanilla JavaScript, CSS, and HTML. The project serves dynamic view changes, audio cues, dynamic starburst rendering, and an evasive button algorithm that responds to pointer and touch coordinates.

---

## Overview

Sending static e-cards often feels impersonal and flat. This project turns a simple greeting into an engaging multi-screen flow. It manages user choices, handles audio playback constraints imposed by web browsers, and adds a bit of playful friction with an evasive choice button that dodges interactions across touch and desktop pointers.

---

## How It Works

1. **Stateful View Management:** Hidden and visible page state cycles seamlessly based on user triggers without requiring page reloads or external routing libraries.
2. **Audio Unlocking Strategy:** Browsers block autoplay by default. The script hooks into the initial user click event to start background music playback smoothly.
3. **Evasive Target Logic:** On mouseover or touchstart, the target button recalculates its coordinate bounds relative to the current viewport dimensions, dynamically updating its position styling to escape user interaction.
4. **Dynamic Canvas Particle Rendering:** On script load, JavaScript creates individual dynamic element nodes assigned randomized coordinates, colors, sizes, and animation delay offsets for twinkling effects.

---

## Key Features

* **Multi-Stage Navigation:** Simple state-driven view transitions using class updates.
* **Evasive Interaction Engine:** Viewport-aware boundary checks prevent target buttons from disappearing off-screen.
* **Mobile & Touch Compatibility:** Handles both mouseover events and `touchstart` touch events for full touch device support.
* **Procedural Sparkle Generator:** Auto-generates randomized floating sparkle elements directly into the DOM on initialization.
* **Fluid Layout:** Designed using dynamic viewport units (`vw`, `vh`, `dvh`) and CSS `clamp()` functions to prevent overflow issues on small mobile displays.

---

## Tech Stack Breakdown

* **HTML5:** Semantic structure, audio element integration, and modal layout containers.
* **CSS3:** Custom layout system utilizing backdrop filters, keyframe animations, CSS clip-paths, and viewport-adaptive typography (`clamp()`).
* **JavaScript (ES6):** Vanilla event handling, conditional logic, DOM element creation, and dynamic style calculations.

---

## Prerequisites & Web-Based Quick Start

You don't need to install local tools or configure build toolchains to run or edit this project.

### Option 1: Run in GitHub Codespaces (Browser Only)
1. Press `.` on your keyboard while viewing this repository, or click the **Code** button and select **Open with Codespaces**.
2. Once the editor loads, open `index.html`.
3. Right-click inside `index.html` and preview it using any standard web preview extension or simple live server extension within VS Code Web.

### Option 2: Run Locally
1. Clone or download the repository files.
2. Ensure you have your media assets (`Assets/Bg.jpg` and `Assets/BGM.mp3`) in the `Assets` directory.
3. Open `index.html` in any modern web browser.

---

## Project Structure

```text
dynamic-greeting-card/
├── Assets/
│   ├── Bg.jpg              # Background image file
│   └── BGM.mp3             # Background audio track
├── .gitignore              # Ignores system junk and build clutter
├── index.html              # Core application entry and markup structure
├── script.js               # Application logic, audio trigger, and evasive button code
└── style.css               # Application visual styles, keyframes, and layout system
```

## Roadmap

[ ] Add customizable config options for card text directly via URL parameters.

[ ] Implement smooth CSS view transitions between active card stages.

[ ] Add sound effect triggers when the user interacts with buttons.

[ ] Expand dynamic background particle options (confetti, heart floating effects).
