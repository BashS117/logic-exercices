function fibonacciRecursivo(n) {
    if(n===0){
        return 0;
    }else if(n===1){
        return 1
    }else{
        return fibonacciRecursivo(n-1)+ fibonacciRecursivo(n-2);
    }
}


console.log(fibonacciRecursivo(3))
console.log(fibonacciRecursivo(8))