function validarEmail(email) {
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
}


document.addEventListener('DOMContentLoaded', function() {
    var accessKey = 'CA7JZphjiTw3U9ciIQrxI1IykxrNfZ3SLO7bLglaDhU';
    var apiUrl = 'https://api.unsplash.com/photos/random?client_id=' + accessKey;
    
    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var imageUrl = data.urls.regular;
        var photographer = data.user.name;
        
        document.getElementById('image').src = imageUrl;
        document.getElementById('photographer').textContent = photographer;
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  });


/*
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
      });

    if (nombres.value.length <=1 || nombres.value.trim() == "" ){
   mostrarMensajeError("myName","Nombres no Validos");
    }
    if (apellidos.value.length <=1 || apellidos.value.trim() == "" ){
        mostrarMensajeError("aurName","Apellidos no Validos");
     }
     if (eMail.value.length <=1 || eMail.value.trim() == "" ){
        mostrarMensajeError("eMail","Mail no Valido");
     }
     if (celular.value.length !=10 || celular.value.trim() == ""|| isNaN(celular.value) ){
        mostrarMensajeError("mobile","Celular no Validos");
     }
     if (textarea.value.length <=1 || textarea.value.trim() == "" ){
        mostrarMensajeError("textarea","Contenido no Validos");
     }
  
} );

 function mostrarMensajeError(claseInput, mensaje){
    let elemento = document.querySelector(`.${claseInput}`);
       elemento.lastElementChild.innerHTML = mensaje;
       
 }
*/