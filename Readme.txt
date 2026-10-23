# CAT & MOUSE — THE DARK MAZE (Pixathon Edition)

A retro pixel-art arcade horror browser game.

## Game Concept & Twist
- **Phase 1 (2D Arcade):** Top-down maze runner. Control the cat, navigate corridors, collect glowing orbs, and evade roaming giant rats.
- **The Twist (50% Orbs):** As soon as **50% of the dots** are collected, reality collapses into **First-Person 3D Survival Horror**. The rats become colossal predators towering in the dark corridors.
- **Phase 2 (3D Horror):** First-person navigation using Three.js, real-time minimap radar, torchlight flickering, proximity threat detector, and remaining dot collection to escape.

## Controls
- **2D Mode:** `W, A, S, D` or `Arrow Keys` to move.
- **3D Mode:**
  - `W, A, S, D` or `Arrow Keys`: Move through corridors.
  - `Q / E` or `Mouse Movement` (click game canvas for Pointer Lock): Look around / rotate camera.
  - `ESC`: Pause game / release cursor.

## Project Structure
- `index.html` — Self-contained entry point integrating Google Stitch UI screens, 2D Canvas engine, Three.js 3D horror engine, Minimap radar, and game overlays.
- `audio/` — Audio assets (`theme song main menu.mp3`, `footsteps.mp3`, `view change cat scared.mp3`, `if cat is eaten by mouse.mp3`).
- `Design-template/` — Original Google Stitch screen exports.
- `Sound Effects/` — Original raw sound assets.

## How to Run
Open `index.html` in any modern web browser or serve it with any local HTTP server:
```bash
npx serve .
# or
python -m http.server 8000
```
Open `http://localhost:8000` (or open `index.html` directly).
