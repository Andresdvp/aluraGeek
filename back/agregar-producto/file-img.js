function mostrarImagen(){
const img =document.getElementById('img-producto')
const inputUrl = document.getElementById('img-url')

const url = inputUrl.value;

img.src = url;


}
