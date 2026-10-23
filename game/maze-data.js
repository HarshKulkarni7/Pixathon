/**
 * MazeData — Shared maze grid and game state for CAT & MOUSE
 *
 * Grid legend:
 *   0 = walkable corridor (dot spawns here)
 *   1 = wall
 *   2 = walkable, no dot (player/rat start zones)
 *
 * Coordinate system: row (y), col (x). Origin top-left.
 */
const MazeData = (() => {

  // 21 × 21 fixed maze — symmetric, all corridors connected
  const LAYOUT = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1],
    [1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1],
    [1,1,1,1,0,1,2,2,2,2,2,2,2,2,2,1,0,1,1,1,1],
    [1,1,1,1,0,1,2,1,1,0,0,0,1,1,2,1,0,1,1,1,1],
    [0,0,0,0,0,0,2,1,0,0,2,0,0,1,2,0,0,0,0,0,0],
    [1,1,1,1,0,1,2,1,0,0,0,0,0,1,2,1,0,1,1,1,1],
    [1,1,1,1,0,1,2,1,1,1,1,1,1,1,2,1,0,1,1,1,1],
    [1,1,1,1,0,1,2,2,2,2,2,2,2,2,2,1,0,1,1,1,1],
    [1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1],
    [1,0,0,1,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,1],
    [1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];

  const ROWS = LAYOUT.length;   // 21
  const COLS = LAYOUT[0].length; // 21

  // Player starting position (row, col)
  const CAT_START = { row: 17, col: 10 };

  // Rat starting positions
  const RAT_STARTS = [
    { row: 1,  col: 1  },
    { row: 1,  col: 19 },
    { row: 10, col: 10 },
  ];

  /**
   * Build a fresh game state object from the layout.
   * All positions are in grid {row, col} space.
   */
  function buildState() {
    const dots = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (LAYOUT[r][c] === 0) {
          dots.push({ row: r, col: c, collected: false });
        }
      }
    }

    const totalDots = dots.length;
    const transformationThreshold = Math.ceil(totalDots / 2);

    return {
      grid: LAYOUT,          // reference (read-only)
      rows: ROWS,
      cols: COLS,
      cellSize: 40,          // pixels per cell in 2D renderer

      // Player
      cat: {
        row: CAT_START.row,
        col: CAT_START.col,
        x: CAT_START.col,    // sub-cell float position (col)
        y: CAT_START.row,    // sub-cell float position (row)
        angle: 0,            // radians, for 3D first-person
        dir: { row: 0, col: 0 },
      },

      // Rats
      rats: RAT_STARTS.map((s, i) => ({
        id: i,
        row: s.row,
        col: s.col,
        x: s.col,
        y: s.row,
        moveTimer: 0,
        speed: 0.04 + i * 0.005,
      })),

      // Dots
      dots,
      totalDots,
      collectedDots: 0,
      transformationThreshold,

      // Phase flags
      phase: 'playing2d',   // 'playing2d' | 'transforming' | 'playing3d' | 'gameover' | 'victory'
      transformationDone: false,

      score: 0,
    };
  }

  /**
   * Returns true if grid cell (row, col) is walkable.
   */
  function isWalkable(grid, row, col) {
    if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return false;
    return grid[row][col] !== 1;
  }

  /**
   * BFS shortest path from (sr,sc) to (er,ec).
   * Returns array of {row,col} steps (excluding start), or [] if unreachable.
   */
  function bfsPath(grid, sr, sc, er, ec) {
    const key = (r, c) => r * COLS + c;
    const visited = new Set();
    const parent = new Map();
    const queue = [{ row: sr, col: sc }];
    visited.add(key(sr, sc));

    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

    while (queue.length) {
      const cur = queue.shift();
      if (cur.row === er && cur.col === ec) {
        // Reconstruct path
        const path = [];
        let node = { row: er, col: ec };
        while (parent.has(key(node.row, node.col))) {
          path.unshift(node);
          node = parent.get(key(node.row, node.col));
        }
        return path;
      }
      for (const [dr, dc] of dirs) {
        const nr = cur.row + dr;
        const nc = cur.col + dc;
        const k = key(nr, nc);
        if (!visited.has(k) && isWalkable(grid, nr, nc)) {
          visited.add(k);
          parent.set(k, cur);
          queue.push({ row: nr, col: nc });
        }
      }
    }
    return [];
  }

  return { buildState, isWalkable, bfsPath, ROWS, COLS, CAT_START, RAT_STARTS };
})();
