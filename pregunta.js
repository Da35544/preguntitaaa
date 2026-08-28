const audioFondo = document.querySelector("#audio-fondo");
const sonidoClic = new Audio('botonno.mp3');
const sonidoClic2 = new Audio('botonsi.mp3');
const sonidoFeliz = new Audio('yei.mp3');
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');

audioFondo.volume = 0.25;

audioFondo.play().catch(() => {
	document.addEventListener("click", () => audioFondo.play(), { once: true });
});

boton1?.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        sonidoFeliz.currentTime = 0;
        sonidoFeliz.volume = 0.3;
        sonidoFeliz.play().catch((error) => {
            console.error('No se pudo reproducir yei.mp3:', error);
        });

        sonidoClic2.currentTime = 0; 
        sonidoClic2.volume = 0.4;
        sonidoClic2.play().catch((error) => {
            console.error('No se pudo reproducir botonsi.mp3:', error);
        });

        setTimeout(() => {
        window.location.href = "si.html";
        }, 1000);
               
});



boton2?.addEventListener('click', function(e) {
    e.preventDefault(); 
        
    sonidoClic.currentTime = 0; 
    sonidoClic.play().catch((error) => {
        console.error('No se pudo reproducir botonno.mp3:', error);
    });

    setTimeout(() => {
    window.location.href = "no1.html";
  }, 200);
               
});

boton3?.addEventListener('click', function(e) {
    e.preventDefault(); 
        
    sonidoClic.currentTime = 0; 
    sonidoClic.play().catch((error) => {
        console.error('No se pudo reproducir botonno.mp3:', error);
    });

    setTimeout(() => {
    window.location.href = "no2.html";
    }, 200);
               
});