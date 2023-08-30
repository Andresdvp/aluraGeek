import { productoServices } from "../services/producto-servivce.js";


const crearNuevaLinea = (imagen, nombre, precio, id) => {

    const linea = document.createElement("div");
    const contenido = `
    <div class="card">
    <img src="${imagen}" class="card-img-top card__imagen"
        alt="${nombre}">
    <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">$ ${precio}</p>
        <button  class="btn btn-primary" id="${id}">VER</button>
    </div>
</div>
    `;

    linea.innerHTML = contenido;
    const btnVer = linea.querySelector("button");


    return linea;
}

const cards = document.querySelector("[data-cards]")


productoServices.listaProductos().then((data) => {
    const productosMezclados = mezclarProductos(data);

    let i = 0;

    productosMezclados.forEach(({ imagen, nombre, precio, id }) => {
        if (i < 8) {
            const nuevaLinea = crearNuevaLinea(imagen, nombre, precio, id);
            if (nuevaLinea !== "") {
                cards.appendChild(nuevaLinea);
                i++;
            }
        }

    });


}).catch((err) => alert("Ha ocurrido un error"));

function mezclarProductos(productos) {
    const mezclados = productos.slice();//crea una copia del array data 
    //mesclar los elementos iterando entre las posiciones de i y j
    for (let i = mezclados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mezclados[i], mezclados[j]] = [mezclados[j], mezclados[i]];
    }
    return mezclados;
}



