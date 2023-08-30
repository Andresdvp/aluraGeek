import { productoServices } from "../services/producto-servivce.js";

const formularioRegistro =document.querySelector("[data-registro]");

formularioRegistro.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const apellido = document.querySelector("[data-apellido]").value;
    const cedula = document.querySelector("[data-cedula]").value;
    const fechaNacimiento = document.querySelector("[data-FechaNacimiento]").value;
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;


    productoServices.crearUsuario(nombre,apellido,cedula,fechaNacimiento,email,password).then(()=>{
        window.location.href="/front/pages/login.html";

    }).catch((err)=>console.log(err));

});