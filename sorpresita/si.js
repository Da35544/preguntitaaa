const audioFondo = document.querySelector("#audio-fondo");

audioFondo.volume = 0.25;

audioFondo.play().catch(() => {
	document.addEventListener("click", () => audioFondo.play(), { once: true });
});