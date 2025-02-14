document.addEventListener("DOMContentLoaded", function () { 

    let y_bt = document.getElementById("yes");
    let n_bt = document.getElementById("no");
    let img_1 = document.getElementById("img1");

    y_bt.style.width = '100px';
    y_bt.style.height = '100px';
    n_bt.style.width = '100px';
    n_bt.style.height = '100px';

    let width = 100;
    let height = 100;
    let width_n = 100;
    let height_n = 100;

    const images = ['images/pv.jpg', 'images/tr.jpg', 'images/tr.jpg'];
    const images2 = ['images/tr.jpg', 'images/tr.jpg', 'images/vt.jpg', 'images/otra.jpg'];
    let currentIndex = 0;
    img_1.src = images[currentIndex];

    let previousButton = 3;

    function change_array(group_images) { 
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % group_images.length;
            img_1.src = group_images[currentIndex];
            img_1.style.opacity = 1;
            console.log(`currentIndex: ${currentIndex}`);
        }, 200);
    }

    n_bt.addEventListener("click", function() { 
        // Reiniciar el índice si el botón anterior era diferente
        if (previousButton !== 1) currentIndex = 0;
        previousButton = 1;

        width += 50;
        height += 50;
        y_bt.style.width = width  + 'px';
        y_bt.style.height = height + 'px';

        width_n -= 20;
        height_n -= 20;
        n_bt.style.width = width_n + 'px';
        n_bt.style.height = height_n + 'px';

        img_1.style.opacity = 0;

        y_bt.style.backgroundColor = '#f0045e';
        y_bt.style.color = 'white';
        y_bt.textContent = 'Sí';
        y_bt.style.animation = '';

        change_array(images2);
    });

    y_bt.addEventListener("click", function() {
        // Reiniciar el índice si el botón anterior era diferente
        if (previousButton !== 2) currentIndex = 0;
        previousButton = 2;

        y_bt.style.backgroundColor = 'white';
        y_bt.style.color = '#ad0043';
        y_bt.textContent = 'Sí (dale de nuevo)';
        img_1.style.opacity = 0;
        y_bt.style.animation = 'bounce 1s infinite';

        if (y_bt.textContent === 'Sí (dale de nuevo)' && currentIndex === 2) { 
            y_bt.style.position = 'fixed'; // Sigue al usuario
            y_bt.style.zIndex = '9999';    // Se asegura de estar sobre todo
            y_bt.style.top = '0'; 
            y_bt.style.margin = '0';
            y_bt.style.animation = 'bounce2 1s infinite'
            y_bt.style.left = '-9';         // Pegado a la izquierda
            y_bt.style.width = '400px';
            y_bt.style.height = '820px';

        }
        change_array(images);
    });

    const question = document.getElementById("question");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                question.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(question);

});