function primosGemelos(n) {
    const paresGemelos = [];

    function esPrimo(num) {
        if(num<=1)return false;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num % i == 0){
                return false
            }
            
        }
        return true;
        
    }
    for(let i=2; i<=n -2; i++){
        if(esPrimo(i)&& esPrimo(i+2)){
            paresGemelos.push([i,i+2])
        }
    }
    return paresGemelos;
}
console.log(primosGemelos(20))