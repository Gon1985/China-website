document.addEventListener("DOMContentLoaded", function () {
  const abrirNavlist = document.getElementById("abrir-nav-links");
  const cerrarMenu = document.querySelector(".cerrar-menu");
  const navlist = document.querySelector(".nav-links");
  const iconoX = document.querySelector(".cerrar-menu i");
  const iconoHamburguesa = document.querySelector(".menuHamburguesa i");

  let menuAbierto = false; // Variable para rastrear el estado del menú

  function toggleIconos(visible) {
      // Si visible es true, muestra los íconos de X y de hamburguesa
      if (visible) {
          iconoX.style.display = "block";
          iconoHamburguesa.style.display = "block";
      } else {
          // Si visible es false, oculta los íconos de X y de hamburguesa
          iconoX.style.display = "none";
          iconoHamburguesa.style.display = "none";
      }
  }

  function toggleMenu() {
    // Cambia el estado del menú
    menuAbierto = !menuAbierto;
    // Muestra u oculta el menú según el estado actual
    navlist.style.display = menuAbierto ? "flex" : "none";
}

  // Función para comprobar el tamaño de la ventana y mostrar u ocultar los íconos
  function checkWindowSize() {
      if (window.innerWidth <= 700) {
          toggleIconos(true); // Muestra los íconos si el tamaño de la ventana es menor o igual a 700px
          if (menuAbierto) {
              navlist.style.display = "flex"; // Asegura que el menú esté abierto si estaba abierto antes
          }
      } else {
          toggleIconos(false); // Oculta los íconos si el tamaño de la ventana es mayor a 700px
      }
  }

  // Llama a la función checkWindowSize al cargar la página
  checkWindowSize();

  // Agregar evento clic al botón para abrir/cerrar el menú
  abrirNavlist.addEventListener("click", toggleMenu);
  cerrarMenu.addEventListener("click", toggleMenu); // Ajuste: Usamos la misma función para abrir/cerrar el menú

  // Agregar evento de cambio de tamaño de ventana para comprobar el tamaño y mostrar u ocultar los íconos
  window.addEventListener("resize", checkWindowSize);
});


function openCd(cdPage) {
    window.location.href = cdPage;
}
















function search() {
  // Obtiene el valor de búsqueda ingresado por el usuario
  var query = document.getElementById("searchInput").value;

  // Verifica si el campo de búsqueda está vacío
  if (query.trim() !== "") {
      // Crea un objeto XMLHttpRequest para realizar la solicitud
      var xhr = new XMLHttpRequest();

      // Configura la función de devolución de llamada cuando la solicitud cambia de estado
      xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              // Verifica si la solicitud fue exitosa
              if (xhr.status === 200) {
                  // Si se encuentra un archivo con el nombre de búsqueda, redirige a esa página
                  window.location.href = query + ".html";
              } else {
                  // Si no se encuentra ningún archivo, muestra un mensaje de error
                  alert("No se encontraron resultados para la búsqueda: " + query);
              }
          }
      };

      // Abre una conexión HEAD para verificar la existencia del archivo
      xhr.open("HEAD", query + ".html");

      // Envía la solicitud
      xhr.send();
  }
}



