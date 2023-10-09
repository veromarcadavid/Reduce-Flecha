
// data
const conjunto = [24,15,4,9,3,7,42 ];

// map() lo que hace es recorrer c/u de los elementos del array

// multipliar cada elmento del array por 10
var mult = multiplicar(conjunto)

function multiplicar(arr){
  var total=arr.reduce(function(accumulator, currentElement){
  return accumulator +(currentElement * 10);
  })
  return total;
 } 
console.log(mult);
document.write(mult)
