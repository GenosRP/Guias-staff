function cargarSeccion(nombre) {
  fetch(`secciones/${nombre}.html`)
    .then(response => response.text())
    .then(data => {
      document.getElementById("main-content").innerHTML = data;
    })
    .catch(error => {
      document.getElementById("main-content").innerHTML = "<p>Error al cargar la sección.</p>";
      console.error(error);
    });
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substring(1); // quita el #
  if (hash) {
    cargarSeccion(hash);
  }
});

// Al cargar la página, si hay un hash ya, cargarlo:
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    cargarSeccion(hash);
  }
});

