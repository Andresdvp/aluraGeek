import { productoServices } from "../services/producto-servivce.js";

const formularioAgregarProducto =document.querySelector("[data-form]");

formularioAgregarProducto.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const cantidad = document.querySelector("[data-cantidad]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;


    productoServices.agregarProducto(imagen,nombre,precio,categoria,cantidad,descripcion).then(()=>{
       if (categoria == 0) {
        alert("ingrese una categoria porfavor")
       }
        window.location.href="../../front/pages/producto-agregado.html";

    }).catch((err)=>console.log(err));

}); 