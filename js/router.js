window.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('main-content');

  function loadContent() {
    const hash = window.location.hash.substring(1) || 'inicio';
    const file = `./secciones/${hash}.html`;

    fetch(file)
      .then((res) => res.text())
      .then((html) => {
        mainContent.innerHTML = html;
      })
      .catch(() => {
        mainContent.innerHTML = "<h2>❌ Sección no encontrada.</h2>";
      });
  }

  window.addEventListener('hashchange', loadContent);
  loadContent();
});
