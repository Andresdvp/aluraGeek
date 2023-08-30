import { productoServices } from "../services/producto-servivce.js";



const crearNuevaLinea =(imagen,nombre,precio) =>{

    const linea =document.createElement("ul");
    linea.classList.add("carousel")
    const contenido = `
    <li class="li-card">
    <div class="img"><img src="${imagen}" alt="${nombre}"></div>
    <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">${precio}</p>
        <a href="#" class="btn btn-primary">VER</a>
    </div>
</li>
    `;

    linea.innerHTML= contenido;


    return linea;
}

const cardElectronica= document.querySelector("[data-electronica]");
const cardHogar =document.querySelector("[data-hogar]");
const cardRopa =document.querySelector("[data-ropa]");
const cardAccesorios =document.querySelector("[data-accesorios]");

productoServices.listaProductos().then((data)=> {
   
   
    data.forEach(({imagen, nombre, precio,categoria}) => {
       
       const nuevaLinea =crearNuevaLinea(imagen, nombre, precio);
      
       
  
        if (categoria == 1) {
            cardElectronica.appendChild(nuevaLinea);
        }  else if(categoria == 2){
            cardHogar.appendChild(nuevaLinea);
        } else if(categoria == 3){
            cardRopa.appendChild(nuevaLinea);
        } else if(categoria == 4){
            cardAccesorios.appendChild(nuevaLinea);
        }
    

  });
}).catch((err)=> alert("Lo siento presentamos un error, por vavor intenta mas tarde"))


