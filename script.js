// ACITIVIDAD REDUCE
const conjunto = [24,15,4,9,3,7,4,2];

var mult = multiplicar(conjunto)

function multiplicar(arr){
  var total=arr.reduce(function(accumulator, currentElement){
  return accumulator +(currentElement * 10);
  })
  return total;
 } 
console.log(mult);
document.getElementById('output').innerHTML = "El resultado es:" + mult;

//ACTIVIDAD FUNCION FLECHA
conjunto.forEach(()=> console.log("Elemento"));
