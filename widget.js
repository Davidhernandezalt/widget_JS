// Utiliza un evento de carga para asegurarte de que el DOM esté completamente cargado antes de iniciar el widget
document.addEventListener("DOMContentLoaded", function() {
    // Llama a la función para inicializar el widget
    initWidget("widget-container");
});

// Definición de la función para inicializar el widget
function initWidget(containerId) {
    // Obtén el contenedor donde se insertará el widget
    var container = document.getElementById(containerId);

    // Crea el contenido del widget
    var widgetContent = document.createElement("div");
    widgetContent.innerHTML = "<h2>Este es mi widget</h2><button onclick='alert(\"Hola desde el widget!\")'>Haz clic</button>";

    // Agrega el contenido del widget al contenedor
    container.appendChild(widgetContent);
}
