/**
 * Theme Toggle Functionality
 * Switches between dark and white themes
 */
(function() {
  'use strict';

  // Theme storage key
  const THEME_STORAGE_KEY = 'cactus-theme';
  const THEME_DARK = 'dark';
  const THEME_WHITE = 'white';

  /**
   * Get current theme from localStorage or default to dark
   */
  function getCurrentTheme() {
    return localStorage.getItem(THEME_STORAGE_KEY) || THEME_DARK;
  }

  /**
   * Save theme to localStorage
   */
  function saveTheme(theme) {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  /**
   * Apply theme to body
   */
  function applyTheme(theme) {
    const body = document.body;
    if (theme === THEME_WHITE) {
      body.classList.add('theme-white');
    } else {
      body.classList.remove('theme-white');
    }
    updateToggleButton(theme);
  }

  /**
   * Update toggle button icon
   */
  function updateToggleButton(theme) {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      if (theme === THEME_WHITE) {
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        toggleBtn.setAttribute('aria-label', '切换到深色模式');
      } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        toggleBtn.setAttribute('aria-label', '切换到浅色模式');
      }
    }
  }

  /**
   * Toggle theme
   */
  function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === THEME_DARK ? THEME_WHITE : THEME_DARK;
    applyTheme(newTheme);
    saveTheme(newTheme);
  }

  /**
   * Initialize theme on page load
   */
  function initTheme() {
    const savedTheme = getCurrentTheme();
    applyTheme(savedTheme);
  }

  // Initialize theme when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Create toggle button
  function createToggleButton() {
    const body = document.body;
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'theme-toggle';
    toggleBtn.setAttribute('aria-label', '切换主题');
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    toggleBtn.onclick = toggleTheme;
    body.appendChild(toggleBtn);
  }

  // Create button when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createToggleButton);
  } else {
    createToggleButton();
  }

})();


