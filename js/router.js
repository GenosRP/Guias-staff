// js/router.js
const routes = {
  '#normas': 'secciones/normas.html',
  '#clases': 'secciones/clases.html',
  '#sanciones': 'secciones/normas.html', // si están en el mismo archivo, se reutiliza
  // añade más rutas según crezcas
};

function loadContent() {
  const hash = window.location.hash || '#normas';
  const url = routes[hash] || 'secciones/normas.html';

  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
    });
}

window.addEventListener('hashchange', loadContent);
window.addEventListener('DOMContentLoaded', loadContent);
