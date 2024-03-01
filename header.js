document.addEventListener("DOMContentLoaded", function () {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./header.html", true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            // Insertar el contenido del header en el contenedor
            document.getElementById("headerContainer").innerHTML = xhr.responseText;



        }
    };

    // Manejar errores
    xhr.onerror = function () {
        console.error("Error al cargar el header.");
    };

    // Enviar la solicitud
    xhr.send();
});