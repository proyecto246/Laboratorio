'use strict'

/* 
    // Cuando hacemos CLICK en .a
        // .lightbox ADD CLASS 'activo'
        // .img ATTR "SRC"
        // .grande COLOCAR el SRC de .img

    // Cuando hacemos CLICK en .cerrar
        // .lightbox REMOVE CLASS 'activo'
*/

const enlaces  = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande   = document.querySelector('.grande')
const cerrar   = document.querySelector('.cerrar')


enlaces.forEach((cadaEnlace, i) => {
  enlaces[i].addEventListener('click', (e) => {
    e.preventDefault();
    let ruta = cadaEnlace.querySelector('.img').src;

    // comprobar si la ruta es un video
    if (ruta.endsWith('.mp4') || ruta.endsWith('.ogg') || ruta.endsWith('.webm')) {
      // reproducir video
      grande.style.display = 'none'; // ocultar etiqueta img
      let video = document.querySelector('.grande'); // seleccionar etiqueta video
      video.style.display = 'block'; // mostrar etiqueta video
      video.setAttribute('src', ruta); // establecer atributo src del video
    } else {
      // mostrar imagen
      let video = document.querySelector('.grande'); // seleccionar etiqueta video
      video.style.display = 'none'; // ocultar etiqueta video
      grande.style.display = 'block'; // mostrar etiqueta img
      grande.setAttribute('src', ruta); // establecer atributo src de la img
    }

    lightbox.classList.add('activo');
  });
});

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})

const adelante = document.querySelector('.adelante')
const atras = document.querySelector('.atras')


const imagenes = [
  "LCI/2015-03-24 11.53.34.jpg",
  "LCI/2015-03-24 12.04.26.jpg",
  "LCI/2015-03-24 12.05.10.jpg",
  "LCI/Poster_Cluster_Agave_2022.jpg",
  "LCI/Poster_Cluster_Nopal_pptx_01.jpg",
  "LCI/Poster_Cluster_Peyote_2022_01.jpg"
  ]
  
  let posicionActual = 0
  
  adelante.addEventListener('click', () => {
    if (posicionActual === imagenes.length - 1) {
      posicionActual = 0
    } else {
      posicionActual++
    }
    let ruta = imagenes[posicionActual]
    grande.setAttribute('src', ruta)
  })
  
  atras.addEventListener('click', () => {
    if (posicionActual === 0) {
      posicionActual = imagenes.length - 1
    } else {
      posicionActual--
    }
    let ruta = imagenes[posicionActual]
    grande.setAttribute('src', ruta)
  })

