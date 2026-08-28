
    const boton1 = document.getElementById('boton1');
    const boton2 = document.getElementById('boton2');
    const boton3 = document.getElementById('boton3');
    const boton4 = document.getElementById('boton4');
    const boton5 = document.getElementById('boton5');

    const texto0 = document.getElementById('texto0');
    const texto1 = document.getElementById('texto1');
    const texto2 = document.getElementById('texto2');
    const texto3 = document.getElementById('texto3');
    const texto4 = document.getElementById('texto4');

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    const sonidoClic = new Audio('boton.mp3');
    const sonidoMusica = new Audio('musicafondo.mp3');

    boton1.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        sonidoClic.currentTime = 0; 
        sonidoClic.play();
        
        if (texto1.hasAttribute('hidden')) {
            texto1.removeAttribute('hidden');
            texto0.setAttribute('hidden', '');
            boton1.setAttribute('hidden', '');
            boton2.removeAttribute('hidden');

        }
    });

    boton2.addEventListener('click', function(e) {
        e.preventDefault(); 

        sonidoClic.currentTime = 0; 
        sonidoClic.play();
        
        if (texto2.hasAttribute('hidden')) {
            texto2.removeAttribute('hidden');
            texto1.setAttribute('hidden', '');
            boton2.setAttribute('hidden', '');
            boton3.removeAttribute('hidden');
            img1.setAttribute('hidden', '');
            img2.removeAttribute('hidden');

        }
    });
    
    boton3.addEventListener('click', function(e) {
        e.preventDefault(); 

        sonidoClic.currentTime = 0; 
        sonidoClic.play();

        sonidoMusica.loop = true;
        sonidoMusica.currentTime = 0;
        sonidoMusica.volume = 0.6;
        sonidoMusica.play();

        
        if (texto3.hasAttribute('hidden')) {
            texto3.removeAttribute('hidden');
            texto2.setAttribute('hidden', '');
            boton3.setAttribute('hidden', '');
            boton4.removeAttribute('hidden');
            img2.setAttribute('hidden', '');
            img3.removeAttribute('hidden');

        }
    });

    boton4.addEventListener('click', function(e) {
        e.preventDefault();

        sonidoClic.currentTime = 0; 
        sonidoClic.play();

        if (texto4.hasAttribute('hidden')) {
            texto4.removeAttribute('hidden');
            texto3.setAttribute('hidden', '');
            boton4.setAttribute('hidden', '');
            boton5.removeAttribute('hidden');
            
        }

    });

    boton5.addEventListener('click', function(e) {
        e.preventDefault();

        sonidoClic.currentTime = 0;
        sonidoClic.play();

        sonidoMusica.pause();

        setTimeout(() => {
        window.location.href = "pregunta.html";
        }, 600);
    });