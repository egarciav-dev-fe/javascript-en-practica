let caja = document.getElementById("caja");

let rojo = document.getElementById("btn-1");
let naranjo = document.getElementById("btn-2");
let amarillo = document.getElementById("btn-3");
let verde = document.getElementById("btn-4");
let celeste = document.getElementById("btn-5");
let rosado = document.getElementById("btn-6");



rojo.addEventListener("click", () =>{
  caja.style.backgroundColor = '#e53e3e';
})
naranjo.addEventListener("click", () =>{
  caja.style.backgroundColor = '#dd6b20';
})
amarillo.addEventListener("click", () =>{
  caja.style.backgroundColor = '#faf089';
})
verde.addEventListener("click", () =>{
  caja.style.backgroundColor = '#48bb78';
})
celeste.addEventListener("click", () =>{
  caja.style.backgroundColor = '#81e6d9';
})
rosado.addEventListener("click", () =>{
  caja.style.backgroundColor = '#d53f8c';
})
