// router.js

document.addEventListener("DOMContentLoaded", () => {
  function loadSectionFromHash() {
    const hash = window.location.hash.substring(1) || "normas";
    const sectionPath = `secciones/${hash}.html`;
    fetch(sectionPath)
      .then(response => {
        if (!response.ok) throw new Error("Archivo no encontrado");
        return response.text();
      })
      .then(html => {
        document.getElementById("main-content").innerHTML = html;
        // Mover la vista al top de la página (opcional)
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch(error => {
        document.getElementById("main-content").innerHTML =
          `<p style="color: red;">⚠️ Error al cargar la sección: ${hash}</p>`;
        console.error(error);
      });
  }

  // Carga inicial
  loadSectionFromHash();

  // Al cambiar el hash (clic en enlaces del menú)
  window.addEventListener("hashchange", loadSectionFromHash);
});
