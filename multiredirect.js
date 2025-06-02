const lang = navigator.language || navigator.userLanguage;

if (lang.startsWith('it')) {
  window.location.href = 'it/index.html';
} else if (lang.startsWith('es')) {
  window.location.href = 'es/index.html';
} else if (lang.startsWith('fur') || lang.startsWith('sl') || lang.startsWith('hr')) {
  window.location.href = 'trn/index.html';
} else {
  window.location.href = 'it/index.html'; // idioma por defecto: italiano
}
