const btnNo = document.querySelector("#btn-random")
const sonidoClic2 = new Audio('botonsi.mp3');
const sonidoFeliz = new Audio('yei.mp3');
const audioFondo = document.querySelector("#audio-fondo");
const texto1 = document.getElementById('texto1');
const boton1 = document.getElementById('boton1');
let moves = 0;

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


function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%"
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%"
    moves++;

    if (moves >= 5) {
        texto1.removeAttribute('hidden');
    }
}

btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target)
})
