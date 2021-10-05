// Animacion de java script para el texto
const typeWriter = document.getElementById('typeWriter-text');
const text = 'Esto es una prueba';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);