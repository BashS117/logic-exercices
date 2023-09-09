//suma de los multiplos de 3 y 5 menores que X
function sumMultiples(num) {
    let sum = 0;
    for (let iteracion =1;iteracion<num;iteracion++){
        if (iteracion%3 == 0 || iteracion % 5 == 0){
            sum+=iteracion;
            
        }
    }
    return sum;

}
console.log(sumMultiples(10))