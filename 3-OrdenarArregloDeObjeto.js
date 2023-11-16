//funcion ordenar ascendente 

function sortObjects(arr, property) {
    arr.sort((a,b)=>a[property] - b[property]);
}
const peoples= [
    {name:"Alice", age: 30},
    {name:"Bob", age: 25},
    {name:"Charlie", age: 35},

]

// sortObjects(people, "age");
console.log(people)

///segundo intento
function ordenarObjetos(arr, propiedad){
    arr.sort((a,b)=>a[propiedad]-b[propiedad])
}

ordenarObjetos(people, "age");
console.log(people)
//3er practica

function sortearObjects(arr, property){
    arr.sort((a,b)=>a[property]-b[property]);
}

const people= [
    {name:"Alice", age: 30},
    {name:"Bob", age: 25},
    {name:"Charlie", age: 35},

]


sortearObjects(people, "age");
console.log(people)