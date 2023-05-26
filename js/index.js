/*function validarEmail(email) {
    // Expresión regular para verificar si el correo electrónico es válido
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function verificar() {
    // Obtener el valor del correo electrónico ingresado
    var email = document.getElementById("email").value;
    // Verificar si el correo electrónico es válido
    if (validarEmail(email)) {
        alert("El correo electrónico es válido");
    } else {
        alert("El correo electrónico es inválido");
    }
    var nombre = document.getElementById("Nombre").value;
    var email = document.getElementById("email").value;
    if (nombre.trim() === "") {
			alert("Por favor, ingrese su nombre.");
			return false;
	}
	if (email.trim() === "") {
		alert("Por favor, ingrese su correo electrónico.");
		return false;
	}
}*/
const nombres = document.getElementById("myName");
const apellidos = document.getElementById("surName");
const eMail = document.getElementById("eMail");
const celular = document.getElementById("mobile");
const textarea = document.getElementById("textarea");
const form = document.getElementById("form");
const listInput = document.querySelectorAll(".form-input");

form.addEventListener("submit",(e) =>{
    e.preventDefault();

    listInput.forEach((element) => {
        element.lastElementChild.innerHTML = "";
      })

    if (nombres.ariaValueMax.length <=1 || nombres.ariaValueMax.trim() == "" ){
   mostrarMensajeError("myName","Nombres no Validos");
    }
    if (apellidos.ariaValueMax.length <=1 || apellidos.ariaValueMax.trim() == "" ){
        mostrarMensajeError("aurName","Apellidos no Validos");
     }
     if (eMail.ariaValueMax.length <=1 || eMail.ariaValueMax.trim() == "" ){
        mostrarMensajeError("eMail","Mail no Valido");
     }
     if (celular.ariaValueMax.length <=1 || celular.ariaValueMax.trim() == "" ){
        mostrarMensajeError("mobile","Celular no Validos");
     }
     if (textarea.ariaValueMax.length <=1 || textarea.ariaValueMax.trim() == "" ){
        mostrarMensajeError("textarea","Contenido no Validos");
     }
  
} );

 function mostrarMensajeError(claseInput, mensaje){
    let elemento = document.querySelector(`.${claseInput}`);
       elemento.lastElementChild.innerHTML = mensaje;
       
 }
