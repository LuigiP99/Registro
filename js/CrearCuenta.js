function mostrarTecnico() {

    const BotonTecnico = document.getElementById("TechButton")
    const CrearCuenta = document.querySelector(".CreateAccount")
    const Eleccion = document.getElementById("choice")
    const Tecnico = document.getElementById("tech")
    const Usuario = document.getElementById("user")

    if(Tecnico.classList.contains("invisible")) {

        CrearCuenta.style.height = "140%"
        Tecnico.classList.replace("invisible", "visible")
        Usuario.classList.replace("visible", "invisible")

    }

    else {

        CrearCuenta.style.height = "auto"
        Tecnico.classList.replace("visible", "invisible")

    }

}
    
function mostrarUsuario() {

    const BotonUsuario = document.getElementById("TechUser")
    const CrearCuenta = document.querySelector(".CreateAccount")
    const Eleccion = document.getElementById("choice")
    const Usuario = document.getElementById("user")
    const Tecnico = document.getElementById("tech")

    if(Usuario.classList.contains("invisible")) {

        CrearCuenta.style.height = "95%"
        Usuario.classList.replace("invisible", "visible")
        Tecnico.classList.replace("visible", "invisible")

    }

    else {

        CrearCuenta.style.height = "auto"
        Usuario.classList.replace("visible", "invisible")

    }



}
   






