// JavaScript Document
// En vez de ponerlo inline se puede hacer en el scirpt. Otra forma usando addEventListener
window.addEventListener("load", cambiarFoto);

const bldgs = [
  ["fotoDerecho.jpg", "Facultad de Derecho"],
  ["fotoGeografiaHistoria.jpg", "Facultad de Geografia e Historia"],
  ["fotoFilosofia.jpg", "Facultad de Filosofia"],
  ["fotoPsicologia.jpg", "Facultad de Psicologia"],
  ["fotoIndustriales130.jpg", "Facultad de Industriales"],
  ["fotoCiencias.jpg", "Facultad de Ciencias"],
  ["fotoEconomicas.jpg", "Facultad de Economicas"],
  ["fotoFilologia.jpg", "Facultad de Filologia"],
  ["fotoEducacion.jpg", "Facultad de Educacion"],
  ["fotoInformatica.jpg", "Facultad de Informatica"],
];

// Preload de imágenes para que el carrusel no de saltos. Contamos con que el usuario no tenga la cache desactivada
bldgs.forEach(([foto, _]) => {
  new Image().src = `/img/${foto}`;
});

function cambiarFoto() {
  // Random number between 0 and bldgs.length
  const randomPick = Math.floor(Math.random() * bldgs.length);
  // Cogemos el elemento imagen
  const img = document.getElementById("facultades");
  // Cambiamos el src de la imagen segun el indice aleatorio

  img.src = `/img/${bldgs[randomPick][0]}`;

  // Cogemos el heading
  const heading = document.getElementById("titulos");
  // Cambiamos el texto del heading segun el indice aleatorio
  heading.innerText = bldgs[randomPick][1];

  // Hacemos que se ejecute la funcion cada 2 segundos
  setTimeout(() => {
    cambiarFoto();
  }, 2000);
}
