const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("blur", (input) =>{
        valida(input.target);
        
    })
})

function valida(input) {

    if (input.validity.valid){
        input.parentElement.classList.remove("invalido");
        
    }else{
        input.parentElement.classList.add("invalido");
       
    }
}



