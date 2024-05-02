// Utilizamos una función autoejecutable para que el código se ejecute automáticamente
(function() {
    // Definimos la función para inicializar el widget
    function initWhatsAppWidget() {
        // Crea el contenedor del widget de WhatsApp
        var whatsappWidget = document.createElement("div");
        whatsappWidget.id = "whatsapp-widget";

        // Crea el enlace para WhatsApp
        var whatsappLink = document.createElement("a");
        whatsappLink.href = "https://wa.me/NUMERO_DE_TELEFONO";
        whatsappLink.target = "_blank";

        // Crea el icono de WhatsApp
        var whatsappIcon = document.createElement("img");
        whatsappIcon.src = "whatsapp-icon.png";
        whatsappIcon.alt = "WhatsApp";

        // Agrega el icono al enlace
        whatsappLink.appendChild(whatsappIcon);

        // Agrega el enlace al contenedor del widget
        whatsappWidget.appendChild(whatsappLink);

        // Agrega el contenedor del widget al cuerpo del documento
        document.body.appendChild(whatsappWidget);
    }

    // Llamamos a la función para inicializar el widget de WhatsApp
    initWhatsAppWidget();
})();
