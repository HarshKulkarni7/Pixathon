# AI Log

Project: **CAT & MOUSE — PIXEL HORROR** (a.k.a. *PIXEL CAT MAZE: RAT OF THE DUNGEON*), built for the Pixathon hackathon.

---

## Tools Used

| # | Tool | How it was used |
|---|------|-----------------|
| 1 | **ElevenLabs** | AI-powered sound effects and audio generation for background music, character vocalizations, and chase sound effects. |
| 2 | **Google Antigravity** | AI-powered development environment used to build and implement the browser-based game. |
| 3 | **Stitch by Google** | AI-powered UI/UX design and prototyping tool used to design the game's home screen and user interface. |

---

## Where AI Went Wrong

### 2D Gameplay UI Design Correction

The initial AI-generated gameplay UI did not accurately match the intended 2D game design. The maze layout, object positioning, and visual structure differed from the reference image.

The UI must follow a **fixed, top-down 2D pixel-art perspective**, preserving:

- the original maze geometry
- stone walls
- collectible dots
- power pellets
- the cat character
- four enemy rats
- HUD elements (lives, score, dot counter, and level indicator)

The reference screenshot should be treated as the primary design specification. The gameplay screen must **not** use a 3D, first-person, isometric, or tilted perspective, and unnecessary UI elements must not be introduced.

The correction focuses on:

- improving visual accuracy
- maintaining consistency with the game's pixel-horror theme
- ensuring the interface can support actual gameplay mechanics rather than functioning as a static illustration

---

## Key Prompts

### 1. 3D View Prompt (Stitch by Google)

```text
Design a complete, high-quality, responsive gameplay UI for "PIXEL CAT MAZE: RAT OF THE DUNGEON", using the uploaded image as the primary visual reference.

IMPORTANT: Transform the reference into a functional-looking GAME INTERFACE, not a poster, illustration, or landing page. Preserve its visual identity and atmospheric horror aesthetic.

1. GAME CONCEPT

The player controls a small pixel-art cat trapped inside a dark dungeon maze. A terrifying giant rat is chasing the cat through the corridors. The player must collect glowing golden dots, avoid the rat, and survive.

The game begins in a 2D Pac-Man-inspired maze and later transforms into first-person survival horror.

2. PRESERVE THE REFERENCE IMAGE'S STYLE

Use the uploaded image as the source of truth for the visual direction.

Preserve:
- Dark, ancient stone-brick dungeon walls.
- Deep blue-grey shadows and black corridors.
- Red-orange torchlight illuminating the walls.
- A gigantic, frightening rat with glowing orange-red eyes and an enormous toothy grin.
- Golden glowing collectible dots scattered along the floor.
- Retro pixel-art textures combined with atmospheric 3D perspective.
- A cinematic horror atmosphere with strong contrast between light and darkness.

Do not replace the giant rat with a cute cartoon enemy. Keep it genuinely intimidating.

3. GAMEPLAY SCREEN LAYOUT

Create a widescreen 16:9 game interface suitable for desktop browsers.

A. TOP STATUS BAR

Add a compact HUD across the top of the screen.

Left section — Lives
- Small pixel-art cat icon.
- Label: LIVES
- Three small cat-head icons representing remaining lives.
- When a life is lost, one icon should visually disappear.

Centre section — Score
- Label: SCORE
- Large, readable pixel-style numerical score.
- Example: 02610.
- Use golden yellow for the number.

Right-centre section — Collectibles
- A glowing golden dot icon.
- Label: DOTS
- Counter showing 24/120.
- Cyan or gold accents.

Far-right section — Level
- Label: LEVEL 1.
- Thin red border or subtle red glow.

The HUD must remain legible against the dark environment without covering too much of the game.

4. MAIN GAME AREA

The game environment must occupy approximately 80–85% of the screen.

Use the reference image's perspective:
- Tall, solid stone walls on both sides.
- A tiled dungeon floor extending into the distance.
- Torchlight casting warm orange reflections on the floor.
- Dark passages and corners that create suspense.
- The giant rat visible at the far end of the corridor, pursuing the player.
- Golden collectible dots placed along the walkable route.

The rat should feel enormous and dangerous, but the player must still be able to see the path ahead.

Player character

The player controls a small, scared blue-and-white pixel-art cat with golden-yellow details.

The cat should match the Pixathon mascot reference:
- Cute, recognizable pixel-art proportions.
- Blue-and-white body.
- Golden-yellow accents.
- Large expressive eyes.
- Frightened expression.

Keep the cat's design consistent with the earlier 2D gameplay screen.

In the first-person gameplay mode, do not place a full-sized cat in the centre of the screen. The camera represents the cat's point of view. Instead, use subtle cat-paw silhouettes at the lower edge of the screen when running, if appropriate.

5. MINIMAP

Place a small minimap in the top-right corner beneath the HUD.

The minimap should:
- Display the dungeon corridors as thin blue lines.
- Show collected and remaining dots as small golden points.
- Show the player's position as a bright cyan cat marker.
- Show the rat as a red marker.
- Include a subtle dark translucent background and thin blue border.

Keep the minimap compact and readable.

6. GAMEPLAY ELEMENTS

Include:
- Golden collectible dots along the floor.
- A special power-up represented by a brighter golden orb.
- A subtle danger indicator when the rat approaches.
- A small progress indicator showing how many dots remain.
- A restrained visual effect around nearby collectibles.

The gameplay interface should communicate the player's objective immediately: collect the dots and escape the rat.

7. CONTROLS AND BUTTONS

Add a slim control bar along the bottom of the gameplay screen.

Display:
- WASD / ARROW KEYS — MOVE
- SHIFT — PANIC SPRINT
- ESC — PAUSE

Include a small, clearly visible PAUSE button in the lower-right corner.

Buttons should use dark translucent backgrounds, thin blue borders, and pixel-style typography. Avoid large modern rounded cards or mobile-app-style panels. The interface should feel like a real retro horror game.

8. VISUAL DESIGN SYSTEM

Use this palette:
- Near-black: #050609
- Dungeon blue: #101B2B
- Stone blue-grey: #354653
- Neon cyan: #42DDF5
- Collectible gold: #FFD34E
- Torch orange: #FF6B2C
- Danger red: #FF3030
- HUD text: #D7E3FF

Typography:
- Use a crisp, retro pixel-style font for labels and numbers.
- Use strong contrast for important information.
- Avoid tiny, unreadable text.

Effects:
- Subtle pixel grain.
- Atmospheric fog.
- Torchlight glow.
- Dark screen-edge vignette.
- Soft collectible glow.
- Subtle scanlines, used sparingly.

9. RESPONSIVE DESIGN

The game should remain usable on different screen sizes.

Desktop:
- Full widescreen gameplay.
- HUD across the top.
- Minimap in the upper-right.
- Controls along the bottom.

Smaller screens:
- Scale down the HUD without overlapping the play area.
- Keep the score, lives, and collectible counter visible.
- Make controls accessible without obscuring the maze.

10. FUNCTIONAL UI REQUIREMENTS

Design the interface as a coherent frontend game screen with reusable components.

Include:
- A live-looking score counter.
- A lives display.
- A collectible progress counter.
- A level indicator.
- A minimap.
- A pause button.
- A game-over overlay design.
- A level-complete overlay design.

The pause menu should offer Resume, Restart Level, and Main Menu.
The game-over screen should show the final score and offer Retry.
The level-complete screen should show progress and a Next Level button.

Keep these overlays hidden during normal gameplay.

If Stitch generates code, structure the UI into reusable components and use the uploaded image as visual guidance for the scene.

FINAL CREATIVE DIRECTION

The finished UI should look like a polished indie pixel-horror game that could be presented at a hackathon.

The strongest visual elements must remain:
1. The terrifying giant rat.
2. The dark, solid stone dungeon.
3. The glowing golden dots.
4. The distinctive blue-and-white cat identity.
5. The crisp retro HUD.

Do not redesign the concept into a generic maze game. Preserve the reference image's atmosphere and make the interface feel like an actual playable game.
```

---

### 2. Antigravity Prompt (Google Antigravity)

```text
# PROJECT: CAT & MOUSE — PIXEL HORROR

You are the lead game developer for our Pixathon hackathon project.

Your task is to integrate our existing Google Stitch UI designs and audio files, then build a complete, playable browser game featuring classic 2D arcade gameplay that transforms into first-person 3D survival horror.

**IMPORTANT: Build the actual game, not just a plan or prototype description. Inspect the existing project, implement the features, run the application, test it, and fix errors.**

We have a limited hackathon build window, so prioritise a polished, playable core experience over unnecessary complexity.

Do not discard existing work or replace our UI designs with generic templates.

=================
1. GAME CONCEPT
=================

The game is called CAT & MOUSE.

It is inspired by classic Pac-Man gameplay, reimagined as a pixel-art cat-and-rat horror experience.

The player controls a small, cute, pixelated cat in a 2D top-down maze.

Large, scary, pixelated rats chase the cat through the corridors.

The maze contains collectible dots. The player must collect them while avoiding the rats.

THE MAIN TWIST:

When the cat collects HALF of all the collectible dots, the game automatically transforms from a 2D top-down arcade game into a first-person 3D experience.

The camera zooms into the cat, the perspective changes, and the player suddenly sees the maze through the cat's eyes.

The rats that previously appeared as small sprites now look enormous and terrifying.

The player must navigate the same maze, collect the remaining dots, and survive the chase.

A minimap remains visible in the corner during first-person gameplay.

The visual identity remains pixelated and retro in both perspectives.

The contrast between the cute 2D game and the frightening first-person experience is the primary selling point.

=====================================
2. INSPECT THE EXISTING PROJECT FIRST
=====================================

Before writing code:

1. Inspect the existing workspace and folder structure.
2. Identify the current framework, entry point, dependencies, and existing source files.
3. Locate the exported Google Stitch designs.
4. Locate the four audio files.
5. Identify any existing game logic or assets that can be reused.
6. Preserve existing working functionality.

Do not recreate the project from scratch unless the existing implementation genuinely requires it.

Do not delete or overwrite assets without a clear reason.

If an expected asset is missing, tell me which file is missing and where it should be placed. Do not silently substitute unrelated assets.

============================
3. EXISTING GOOGLE STITCH UI
============================

We have already designed two screens using Google Stitch:

* Main Menu
* Level Selection Screen

Integrate the existing designs into the game.

Search the project for the exported HTML, CSS, JavaScript, image assets, and screenshots.

If source code is available, reuse it.

If only screenshots are available, recreate the design as closely as possible.

Preserve:

* Colour palette
* Typography
* Layout
* Illustrations
* Buttons
* Spacing
* Intended animations
* Retro pixel-art aesthetic

Do not replace our designs with generic UI.

All buttons must work.

Required navigation:

MAIN MENU
↓
PLAY
↓
LEVEL SELECTION
↓
GAMEPLAY
↓
LEVEL COMPLETED

Also support:

* Returning to the level selection screen.
* Restarting the current level.
* Continuing to the next available level if one exists.

Use the level-selection screen we already designed. Do not invent additional level designs unless necessary.

The first level must demonstrate the complete 2D-to-3D transformation.

If additional level cards exist in the design, make their states clear. Do not leave buttons that appear functional but do nothing.

======================
4. AUDIO INTEGRATION
======================

We already have four audio files:

1. footsteps.mp3
2. if cat is eaten by mouse.mp3
3. theme song main menu.mp3
4. view change cat scared.mp3

Preserve the original filenames and use these actual files.

Locate them in the workspace. If they are outside the project, ask me for their exact location.

Create a central AudioManager module to manage playback.

A. MAIN MENU MUSIC

File: theme song main menu.mp3

* Play when the main menu is active.
* Loop the music while the menu is open.
* Stop or pause it when gameplay begins.
* Resume it when the player returns to the main menu.

B. FOOTSTEPS

File: footsteps.mp3

* Play during first-person gameplay while the cat is moving.
* Pause or stop when the cat stops moving.
* Stop when the cat dies, the level ends, or gameplay is exited.
* Prevent multiple copies from playing simultaneously.
* Do not play continuous first-person footsteps during the 2D section.

C. TRANSFORMATION SOUND

File: view change cat scared.mp3

* Play when the halfway transformation begins.
* Trigger it only once during the transformation.
* Synchronise it with the camera zoom or visual transition.

D. CAT CAUGHT SOUND

File: if cat is eaten by mouse.mp3

* Play when a rat catches the cat.
* Trigger it once per death event.
* Stop inappropriate gameplay audio during the death sequence.

GENERAL AUDIO REQUIREMENTS:

* Handle browser autoplay restrictions.
* Resume audio after a valid user interaction when necessary.
* Handle missing files without crashing the game.
* Avoid overlapping copies of the same sound.
* Do not add paid audio services or external API requirements.
* Provide a mute control if the existing UI supports one, or add a small unobtrusive control if appropriate.

Do not generate replacement sounds. Our existing audio files must be used.

============================
5. SHARED MAZE ARCHITECTURE
============================

The 2D and 3D views MUST use the same underlying maze and game state.

This is a critical requirement.

Create a shared grid-based maze representation containing:

* Wall positions
* Walkable corridors
* Cat starting position
* Rat starting positions
* Collectible dot positions
* Player position and orientation
* Rat positions
* Total collectible count
* Number of collected dots
* Remaining collectible positions
* Current game state

Both the 2D renderer and 3D renderer must read from this shared state.

Do not create an unrelated 3D maze.

The 3D environment must represent the same layout that the player explored in 2D.

Collected dots must remain collected after the transformation.

The player's position must be preserved.

The rats must continue from their corresponding positions or be mapped consistently into the 3D environment.

The minimap must accurately represent the same maze.

Use a small, connected, fixed maze for the initial implementation. Do not waste time building a sophisticated procedural generator.

=================================
6. PHASE ONE: 2D ARCADE GAMEPLAY
=================================

Implement the initial top-down game.

VISUALS:

* A small pixel-art-inspired cat.
* Large pixel-art-inspired rats.
* Maze walls and corridors.
* Collectible dots.
* A clear dot counter.
* A retro arcade presentation consistent with our UI.

MOVEMENT:

* WASD and arrow keys.
* Movement must respect the maze grid.
* The cat must not pass through walls.
* The cat should face its movement direction.
* Add simple movement animation if time permits.

COLLECTIBLES:

* Place dots along the walkable corridors.
* Track the total number of dots at the beginning of the level.
* Increase the collected-dot count whenever the cat collects a dot.
* Remove collected dots from the game world.
* Update the visible counter immediately.
* Ensure each dot can only be collected once.

RATS:

* Implement basic grid-based pathfinding or another reliable maze-navigation method.
* Rats must move through valid corridors.
* Rats must not pass through walls.
* Rats must chase the cat.
* Detect when a rat catches the cat.

GAME STATE:

Track whether the game is:

* In the menu
* In level selection
* In 2D gameplay
* Transitioning
* In first-person 3D gameplay
* Game over
* Level completed

Prevent gameplay input when the game is not actively running.

==============================================
7. THE CRITICAL RULE: TRANSFORM AT 50% OF DOTS
==============================================

THIS IS THE MOST IMPORTANT GAMEPLAY REQUIREMENT.

The transformation must happen automatically when the cat collects HALF of the original collectible dots.

Do not require the player to collect a separate special dot.

Do not trigger the transformation at the beginning of the level or when the cat collects all the dots.

At the beginning of each level, calculate and store the original total number of collectible dots.

Track the number of dots collected.

Use this threshold:

transformationThreshold = Math.ceil(totalDots / 2)

Trigger the transformation when:

collectedDots >= transformationThreshold

Example:

* Total dots: 40
* Transformation: after collecting dot 20.

Another example:

* Total dots: 41
* Transformation: after collecting dot 21.

The threshold must be calculated from the original dot count, not the remaining count.

The transformation must trigger only once per level.

Once triggered:

1. Stop normal movement input briefly.
2. Begin the transition animation.
3. Play view change cat scared.mp3.
4. Zoom the camera toward the cat.
5. Add a short pixel-glitch, screen-shake, or other dramatic effect if performance permits.
6. Transition from the 2D top-down view to the 3D first-person perspective.
7. Place the first-person camera at the cat's corresponding position.
8. Preserve the maze layout, player position, rat positions, and collectible state.
9. Resume gameplay in the first-person 3D environment.

Do not reload the page.

Do not reset the level.

Do not respawn already collected dots.

Do not replay the transformation if the player collects additional dots afterward.

Ensure the transformation works correctly even if a rat is nearby.

The transition should feel surprising, cinematic, and smooth, but it must remain reliable.

==========================================
8. PHASE TWO: FIRST-PERSON 3D ENVIRONMENT
==========================================

Use Three.js if it fits the existing architecture.

Create a genuine 3D environment, not a static image or a simulated camera zoom that does not permit actual gameplay.

WORLD:

* Generate 3D walls from the same maze grid.
* Build a walkable floor and maze boundaries.
* Preserve the maze layout.
* Render the environment using a retro pixel-art-inspired visual style.
* Use simple geometry and lightweight materials.
* Use lighting and fog to create suspense if performance permits.

CAMERA:

* Position the camera at the cat's eye level.
* Implement first-person movement.
* Allow the player to look around using the mouse if practical.
* Use Pointer Lock API if appropriate.
* Explain the controls to the player.
* Provide a way to exit pointer lock.
* Provide a reasonable keyboard-only fallback if feasible.

MOVEMENT:

* WASD for movement.
* Prevent walking through walls.
* Keep the camera at a consistent height.
* Prevent movement through the floor or outside the maze.
* Ensure movement remains responsive.

RATS:

* Rats must look substantially larger and more frightening from the first-person perspective.
* Use simple but recognisable rat models if detailed models are unavailable.
* Make them navigate the maze and pursue the player.
* Prevent them from walking through walls.
* Detect when a rat reaches the player.

COLLECTIBLES:

* Render the remaining dots in the 3D maze.
* Remove them when collected.
* Update the shared collectible count.
* Preserve the collected-dot state from the 2D phase.

Do not spend excessive time creating detailed 3D character models. Working gameplay comes first.

=======================
9. FIRST-PERSON MINIMAP
=======================

A small minimap must remain visible in a corner of the screen during first-person gameplay.

The minimap is an important part of the experience.

It should display:

* Maze walls
* Walkable corridors
* Cat/player position
* Rat positions, where practical
* Remaining collectible dots, where practical

Requirements:

* Render the minimap from the same shared maze data.
* Update the player marker as the cat moves.
* Keep it legible at small sizes.
* Make it visually consistent with the pixel-art theme.
* Position it so it does not obstruct the centre of the screen.
* Ensure it stays synchronised with the 3D game.

Do not create a decorative minimap that fails to reflect actual gameplay.

========================
10. HORROR ATMOSPHERE
========================

The 2D mode should feel like a familiar, colourful arcade game.

The first-person mode should feel dramatically more threatening.

Use:

* Darker lighting
* Stronger shadows if performant
* Restrained fog
* Larger enemy silhouettes
* Narrow corridors
* A more ominous colour palette
* Subtle visual effects

Preserve the pixel-art aesthetic throughout.

Avoid overly complicated effects that reduce performance.

The contrast between the two perspectives should communicate the transformation clearly even without sound.

==========================
11. GAME OVER AND VICTORY
==========================

GAME OVER:

When a rat catches the cat:

* Stop the player's movement.
* Stop or pause footsteps.
* Play if cat is eaten by mouse.mp3 once.
* Display the appropriate game-over UI.
* Provide a functional retry button.
* Provide a way back to level selection.

VICTORY:

When all collectible dots have been collected:

* Display a level-completed state.
* Stop gameplay movement and audio appropriately.
* Provide a next-level button if another level is available.
* Provide a way back to level selection.

Ensure the player cannot continue collecting dots after the game has ended.

If the existing UI includes suitable overlays, integrate them rather than creating generic replacements.

============================================
12. PROJECT STRUCTURE AND TEAM INTEGRATION
============================================

Keep the code modular and readable.

Separate the following responsibilities where practical:

* Shared maze data
* Game state
* Cat movement
* Rat AI
* Dot collection
* 2D rendering
* 3D rendering
* Transformation
* Minimap
* Audio management
* UI navigation
* Level management

Do not force a particular folder structure if the existing project already has a sensible architecture.

Keep the UI code separate from the game logic.

Keep audio management separate from rendering.

Make it easy for teammates to modify the UI and audio without breaking gameplay.

Create or update PROJECT_CONTEXT.md documenting:

* Game concept
* Architecture
* Project structure
* Controls
* UI integration
* Audio file mapping
* How to run the game
* Implemented features
* Remaining work
* Known limitations

Do not add unnecessary backend services, authentication, databases, or external APIs.

==========================
13. TESTING AND PRIORITIES
==========================

This is a time-limited hackathon project.

Prioritise a complete, playable core experience over ambitious but unfinished features.

Implementation order:

1. Integrate the existing main menu.
2. Integrate the existing level-selection UI.
3. Build the shared maze.
4. Implement 2D cat movement and wall collisions.
5. Implement dots and the collectible counter.
6. Implement basic rat movement and collision detection.
7. Implement the automatic transformation at 50% of the original dots.
8. Build the corresponding 3D maze.
9. Implement first-person movement and wall collision.
10. Implement rat pursuit in 3D.
11. Implement remaining-dot collection.
12. Implement the minimap.
13. Integrate the four audio files.
14. Implement victory, game-over, retry, and navigation.
15. Polish the transition and visual presentation.

After implementation:

* Run the application.
* Check the browser console for errors.
* Test the menu-to-level-selection navigation.
* Test movement in 2D.
* Test wall collisions.
* Test dot collection.
* Verify the exact halfway transformation threshold.
* Verify that the transformation triggers only once.
* Verify that the 3D maze matches the 2D maze.
* Verify that collected dots do not reappear.
* Test first-person movement.
* Test wall collisions in 3D.
* Test rat pursuit and collision detection.
* Verify minimap accuracy.
* Verify all four audio files play at the appropriate moments.
* Test game over, victory, and restart.

Fix errors discovered during testing.

Do not claim that a feature works unless you have actually tested it.

If the full scope is too large, finish one polished level with the complete 2D-to-3D transformation before attempting extra content.

Start by inspecting the existing project and locating the UI and audio assets. Then implement the application in working stages.

And edit the readme file putting project context into it

I have also provided 3D view design
```
