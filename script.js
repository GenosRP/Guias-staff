<script>
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar-left a");
    const secciones = document.querySelectorAll(".seccion");

    function mostrarSeccion(id) {
      secciones.forEach(sec => sec.classList.remove("activa"));
      document.querySelector(id).classList.add("activa");
    }

    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");
        history.pushState(null, "", target); // actualiza la URL sin recargar
        mostrarSeccion(target);
      });
    });

    // Mostrar la sección correcta al cargar la página
    const hash = window.location.hash || "#normas";
    mostrarSeccion(hash);
  });
</script>
