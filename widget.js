// Utilizamos una función autoejecutable para que el código se ejecute automáticamente
(function() {
    // Creamos el contenedor del widget de WhatsApp
    var whatsappWidget = document.createElement("div");
    whatsappWidget.id = "whatsapp-widget";
    document.body.appendChild(whatsappWidget);

    // Creamos el enlace de WhatsApp
    var whatsappLink = document.createElement("a");
    whatsappLink.href = "https://wa.me/XXXXXXXXXX";
    whatsappLink.target = "_blank";

    // Creamos la imagen del icono de WhatsApp
    var whatsappIcon = document.createElement("img");
    whatsappIcon.src = "ruta-a-tu-icono-de-whatsapp.png";
    whatsappIcon.alt = "WhatsApp";

    // Añadimos la imagen al enlace de WhatsApp
    whatsappLink.appendChild(whatsappIcon);

    // Añadimos el enlace de WhatsApp al contenedor del widget
    whatsappWidget.appendChild(whatsappLink);

    // Estilizamos el widget de WhatsApp
    var whatsappWidgetStyle = whatsappWidget.style;
    whatsappWidgetStyle.position = "fixed";
    whatsappWidgetStyle.bottom = "20px";
    whatsappWidgetStyle.right = "20px";
    whatsappWidgetStyle.zIndex = "1000";

    // Estilizamos la imagen del icono de WhatsApp
    var whatsappIconStyle = whatsappIcon.style;
    whatsappIconStyle.width = "60px";
    whatsappIconStyle.height = "auto";
})();
