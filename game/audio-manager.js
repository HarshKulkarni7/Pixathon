/**
 * AudioManager — Central audio module for CAT & MOUSE: THE DARK MAZE
 * Handles all four game audio files with browser autoplay compliance.
 */
const AudioManager = (() => {
  const tracks = {
    menu:           { src: 'audio/theme song main menu.mp3', loop: true,  audio: null },
    footsteps:      { src: 'audio/footsteps.mp3',            loop: true,  audio: null },
    transformation: { src: 'audio/view change cat scared.mp3', loop: false, audio: null },
    death:          { src: 'audio/if cat is eaten by mouse.mp3', loop: false, audio: null },
  };

  let muted = false;
  let masterVolume = 0.8;
  let unlocked = false;

  function _load(key) {
    const t = tracks[key];
    if (t.audio) return;
    t.audio = new Audio();
    t.audio.src = t.src;
    t.audio.loop = t.loop;
    t.audio.volume = masterVolume;
    t.audio.preload = 'auto';
    t.audio.onerror = () => console.warn(`[AudioManager] Could not load: ${t.src}`);
  }

  function _loadAll() {
    Object.keys(tracks).forEach(_load);
  }

  // Call once after first user gesture
  function unlock() {
    if (unlocked) return;
    unlocked = true;
    _loadAll();
  }

  function play(key) {
    if (muted) return;
    const t = tracks[key];
    if (!t) return;
    _load(key);
    const a = t.audio;
    if (!a) return;
    try {
      if (!t.loop) { a.currentTime = 0; }
      const p = a.play();
      if (p && p.catch) p.catch(() => {});
    } catch(e) {}
  }

  function stop(key) {
    const t = tracks[key];
    if (!t || !t.audio) return;
    try {
      t.audio.pause();
      t.audio.currentTime = 0;
    } catch(e) {}
  }

  function pause(key) {
    const t = tracks[key];
    if (!t || !t.audio) return;
    try { t.audio.pause(); } catch(e) {}
  }

  function stopAll() {
    Object.keys(tracks).forEach(stop);
  }

  function setMute(val) {
    muted = val;
    if (muted) {
      Object.keys(tracks).forEach(k => {
        const t = tracks[k];
        if (t.audio) try { t.audio.pause(); } catch(e) {}
      });
    }
  }

  function isMuted() { return muted; }

  function setVolume(vol) {
    masterVolume = Math.max(0, Math.min(1, vol));
    Object.keys(tracks).forEach(k => {
      const t = tracks[k];
      if (t.audio) t.audio.volume = masterVolume;
    });
  }

  function isPlaying(key) {
    const t = tracks[key];
    return !!(t && t.audio && !t.audio.paused);
  }

  return { unlock, play, stop, pause, stopAll, setMute, isMuted, setVolume, isPlaying };
})();
