let resu = document.querySelector(".resultado");

let v1 = document.getElementById("valor1");
let v2 = document.getElementById("valor2");
let botonSuma = document.getElementById("btn-sumar");
let botonResta = document.getElementById("btn-restar");


function suma (){
  let val1 = Number(v1.value);
  let val2 = Number(v2.value);
  let resultado = val1+val2;
  resu.innerHTML = resultado;
}
function resta (){
  let val1 = Number(v1.value);
  let val2 = Number(v2.value);
  let resultado = val1-val2;
  resu.innerHTML = resultado;
}


botonSuma.addEventListener('click',() =>{
  suma();
})
botonResta.addEventListener('click',() =>{
  resta();
})