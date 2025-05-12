// Save and retrieve user preferences
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

function getPreference(key) {
  return localStorage.getItem(key);
}

// Example: Save theme preference
document.querySelector('#themeButton').addEventListener('click', () => {
  savePreference('theme', 'dark');
  alert('Theme preference saved!');
});

// Example: Retrieve and apply theme on page load
window.addEventListener('load', () => {
  const theme = getPreference('theme');
  if (theme === 'dark') {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
  }
});

// Trigger animation on button click
document.querySelector('#animateButton').addEventListener('click', () => {
  const element = document.querySelector('.animate-me');
  element.classList.add('animate');
  
  // Remove the animation class after it completes
  setTimeout(() => {
    element.classList.remove('animate');
  }, 1000); // Match the animation duration
});