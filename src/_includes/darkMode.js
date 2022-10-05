// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
}

function darkMode() {
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('color-theme', 'dark');
}
function lightMode() {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('color-theme', 'light');
}
function switchDarkMode() {
  let currentTheme = document.documentElement.getAttribute('data-theme');

  if (currentTheme == 'dark') {
    lightMode();
  } else {
    darkMode();
  }
}
