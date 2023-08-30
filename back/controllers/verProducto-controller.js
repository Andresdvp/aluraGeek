import { productoServices } from "../services/producto-servivce.js";


const crearNuevaLinea = (imagen, nombre, precio) => {

    const linea = document.createElement("div");
    const contenido = `
    <div class="card">
    <img src="${imagen}" class="card-img-top card__imagen"
        alt="${nombre}">
    <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">$ ${precio}</p>
        <a href="#" class="btn btn-primary">VER</a>
    </div>
</div>
    `;

    linea.innerHTML = contenido;


    return linea;
}

const todoCards = document.querySelector("[data-todo]")

productoServices.listaProductos().then((data) => {

    

    data.forEach(({ imagen, nombre, precio }) => {

            const nuevaLinea = crearNuevaLinea(imagen, nombre, precio);
           
                todoCards.appendChild(nuevaLinea);
                
            
        
    });
}).catch((err) => alert("A ocurrido el error"))



