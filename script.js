// ==============================
// Cambio de tema oscuro / claro
// ==============================

const botonTema = document.getElementById("temaBtn");

botonTema.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        botonTema.textContent = "Tema Claro";
        botonTema.classList.remove("btn-outline-dark");
        botonTema.classList.add("btn-outline-light");

    }else{

        botonTema.textContent = "Tema Oscuro";
        botonTema.classList.remove("btn-outline-light");
        botonTema.classList.add("btn-outline-dark");

    }

});

// ==============================
// Validación del formulario
// ==============================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();


    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();


    if(nombre === "" || correo === "" || mensaje === ""){

        alert("Por favor complete todos los campos.");

        return;

    }


    if(!correo.includes("@")){

        alert("Ingrese un correo válido.");

        return;

    }


    alert("Mensaje enviado correctamente.");

    formulario.reset();

});