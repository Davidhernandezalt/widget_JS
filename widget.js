// Utilizamos una función autoejecutable para que el código se ejecute automáticamente
(function() {
    // Definimos la función para inicializar el widget
    function initWidget() {
        // Creamos el contenedor del widget si no existe
        var container = document.getElementById("widget-container");
        if (!container) {
            container = document.createElement("div");
            container.id = "widget-container";
            document.body.appendChild(container);
        }

        // Crea el contenido del widget
        var widgetContent = document.createElement("div");
        widgetContent.innerHTML = "<button onclick='alert(\"Hola desde el widget!\")'>Haz clic</button>";

        // Agrega el contenido del widget al contenedor
        container.appendChild(widgetContent);
    }

    // Llamamos a la función para inicializar el widget
    initWidget();
})();
