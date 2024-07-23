let form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  borraErrorAnterior(); //Limpia errores de campos al submit en el formulario


  let nombre = document.getElementById("nombre").value;
  let asunto = document.getElementById("asunto").value;
  let mensaje = document.getElementById("mensaje").value;

  const esValido =  validaPost(nombre, asunto, mensaje);


  if(esValido){
    document.querySelector(".resultado").innerText = 'Mensaje enviado con exito'
    form.reset(); //Limpia Formulario
  }

})

function validaPost (nombre,asunto,mensaje) {
  const validaNombre = /[a-z]+/i
  const validaAsunto = /[a-z]+/i
  const validaMensaje = /[a-z]+/i

  if(!validaNombre.test(nombre)){
    document.querySelector(".errorNombre").innerText = 'El nombre es requerido';
  }
  if(!validaAsunto.test(asunto)){
    document.querySelector(".errorAsunto").innerText = 'El asunto es requerido';
  }
  if(!validaMensaje.test(mensaje)){
    document.querySelector(".errorMensaje").innerText = 'El mensaje es requerido';
  }

  return validaNombre.test(nombre) && validaAsunto.test(asunto) && validaMensaje.test(mensaje);
}

function borraErrorAnterior(){
  let errorNombre = document.querySelector(".errorNombre");
  let errorAsunto = document.querySelector(".errorAsunto");
  let errorMensaje = document.querySelector(".errorMensaje");

  errorNombre.innerHTML = "";
  errorAsunto.innerHTML = "";
  errorMensaje.innerHTML = "";
}