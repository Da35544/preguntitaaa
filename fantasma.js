const sonidoClic = new Audio('fantasma.mp3');
const boton =  document.getElementById('boton');

boton.addEventListener("click", (evento) => {
    evento.preventDefault();

    sonidoClic.currentTime = 0; 
    sonidoClic.play();

    setTimeout(() => {
        window.location.href = "teamo.html";
    }, 3000);
});
