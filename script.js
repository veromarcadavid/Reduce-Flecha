// ACITIVIDAD REDUCE
const conjunto = [24,15,4,9,3,7,42];

var mult = multiplicar(conjunto)

function multiplicar(arr){
  var total=arr.reduce(function(accumulator, currentElement){
  return accumulator +(currentElement * 10);
  })
  return total;
 } 
console.log(mult);
document.write(mult);

//ACTIVIDAD FUNCION FLECHA
//console.log(<br>);
conjunto.forEach(()=> console.log("Elemento"));
