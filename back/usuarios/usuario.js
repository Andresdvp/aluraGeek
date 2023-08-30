import { productoServices } from "../services/producto-servivce.js";




const login = document.querySelector("[data-login]");

login.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Prevenir el envío por defecto del formulario
    
    const logemail = document.querySelector("[data-email]").value.trim();
    const logpassword = document.querySelector("[data-password]").value.trim();

    productoServices.verUsuarios().then((data) => {
        data.forEach(({ email, password }) => {
            if (email === logemail && password === logpassword) {
            window.location.href="../../front/pages/paginaInicio.html";
            }
        });
    }).catch((err) => {
       
        alert("Ha ocurrido un error");
    });
});