document.addEventListener("DOMContentLoaded", function() { 
    const images = document.querySelectorAll("img");

    images.forEach(image => {
        image.addEventListener("click", () => {
            // Crear el overlay
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");

            // Crear la imagen ampliada
            const zoomedImg = document.createElement("img");
            zoomedImg.src = image.src;
            zoomedImg.classList.add("zoomed-image");

            // Agregar imagen al overlay
            overlay.appendChild(zoomedImg);
            document.body.appendChild(overlay);

            // Cerrar al hacer clic en el overlay
            overlay.addEventListener("click", () => {
                overlay.remove();
            });
        });
    });
});