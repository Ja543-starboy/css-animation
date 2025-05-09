// Store user preferences
function savePreferences() {
    const theme = document.getElementById('theme-selector').value;
    const fontSize = document.getElementById('font-size').value;
    
    localStorage.setItem('userTheme', theme);
    localStorage.setItem('userFontSize', fontSize);
    
    // Trigger confirmation animation
    const confirmation = document.getElementById('confirmation-message');
    confirmation.style.display = 'block';
    confirmation.style.animation = 'fadeInOut 2s';
    
    setTimeout(() => {
      confirmation.style.display = 'none';
    }, 2000);
  }
  
  // Load saved preferences
  function loadPreferences() {
    const savedTheme = localStorage.getItem('userTheme');
    const savedFontSize = localStorage.getItem('userFontSize');
    
    if (savedTheme) {
      document.getElementById('theme-selector').value = savedTheme;
      document.body.classList.add(savedTheme + '-theme');
    }
    
    if (savedFontSize) {
      document.getElementById('font-size').value = savedFontSize;
      document.body.style.fontSize = savedFontSize + 'px';
    }
  }
  
  // Additional animation trigger
  function triggerSpecialAnimation() {
    const element = document.getElementById('animated-element');
    element.style.animation = 'none';
    void element.offsetWidth; // Trigger reflow
    element.style.animation = 'specialAnimation 1.5s ease-out';
  }
  
  // Initialize on page load
  window.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    
    // Set up event listeners
    document.getElementById('save-btn').addEventListener('click', savePreferences);
    document.getElementById('animate-btn').addEventListener('click', triggerSpecialAnimation);
  });