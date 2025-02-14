document.addEventListener("DOMContentLoaded", function () { 

    let y_bt = document.getElementById("yes");
    let n_bt = document.getElementById("no");
    let img_1 = document.getElementById("img1");
    let questio= document.getElementById("question")
    y_bt.style.width = '100px';
    y_bt.style.height = '100px';
    n_bt.style.width = '100px';
    n_bt.style.height = '100px';

    let width = 100;
    let height = 100;
    let width_n = 100;
    let height_n = 100;

    let heartClicks = 0
    function createHeart() { 

        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
    
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
    
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
    
        document.body.appendChild(heart);  heart.addEventListener('click', () => {
            heartClicks++;
            console.log(`Corazones clickeados: ${heartClicks}`);
            heart.remove();
        });
    
        setTimeout(() => {
            heart.remove();
        }, 3000);
    
    }
    
        
    const images = ['images/trr.png', 'images/te.png', 'images/tr.jpg'];
    const images2 = ['images/pv.png', 'images/vm.png', 'images/lg.png', 'images/tr.png', 'images/td.png'];
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
let clicknt_count = 0
    n_bt.addEventListener("click", function() { 
        clicknt_count++
        // Reiniciar el índice si el botón anterior era diferente
        if (previousButton !== 1) currentIndex = 0, clicknt_count = 0;
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

        console.log(clicknt_count)

        if (clicknt_count === 3) { 
            n_bt.style.display= 'none'
            y_bt.style.width= '500px'
            y_bt.style.height= '500px'
            y_bt.style.backgroundColor= 'fucsia'
            y_bt.style.color= 'white'
            document.body.style.backgroundColor= "black"
            questio.style.fontFamily= '"Eater", serif'
             questio.style.fontSize= '35px'
             questio.style.animation = 'shake 0.5s infinite'
             y_bt.style.animation= 'shake 0.5s infinite'

             document.querySelectorAll('div').forEach(div => {
                div.style.animation = 'shake 0.5s infinite';
            });

            document.querySelectorAll('h1').forEach(div => {
                div.style.animation = 'shake 0.5s infinite';
            });

            document.querySelectorAll('h2').forEach(div => {
                div.style.animation = 'shake 0.5s infinite';
            });
        }
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

        if (y_bt.textContent === 'Sí (dale de nuevo)' && currentIndex === 1) { 
            y_bt.style.position = 'fixed'; // Sigue al usuario
            y_bt.style.zIndex = '9999';    // Se asegura de estar sobre todo
            y_bt.style.top = '0'; 
            y_bt.style.margin = '0';
            y_bt.style.animation = 'bounce2 1s infinite'
            y_bt.style.left = '-9';         // Pegado a la izquierda
            y_bt.style.borderRadius = '0'; 
            y_bt.style.width = '420px';
            y_bt.style.height = '950px';

        }
        change_array(images);

        if( parseInt(y_bt.style.width) > 400 ) { 
            setInterval(createHeart, 500);
            y_bt.textContent= 'Revienta los que puedass'
            document.querySelectorAll('img').forEach(img => img.style.display = 'none');

            // Ocultar todos los encabezados h1
            document.querySelectorAll('h1').forEach(h1 => h1.style.display = 'none');
            
            // Ocultar todos los párrafos
            document.querySelectorAll('p').forEach(p => p.style.display = 'none');
            document.body.style.backgroundColor = 'white'
        }

        if(heartClicks > 20
        ) {  y_bt.textContent = 'Clickea el fondo y obten la sorpresa!';
            y_bt.style.fontSize = '60px'
            y_bt.addEventListener('click', () => {
                window.location.href = 'second.html';
            });
        
        }

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