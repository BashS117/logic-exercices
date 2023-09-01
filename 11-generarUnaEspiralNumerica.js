 

 function divisoresPropios(num){
    const divisores = [];
    for (let i =1;i<num;i++){
        if(num%1===0){
            divisores.push(i);
        }
    }
    return divisores;
 }
 function numerosAmigos(n) {
    const paresAmigos = [];
    for(let a=2; a<=n;a++){
        const b=divisoresPropios(a).reduce((sum,val)=>sum + val, 0);
        if(b>a && divisoresPropios(b).reduce((sum,val)=>sum +val,0)===a){
            paresAmigos.push([a,b])
        }
    }
    return paresAmigos;
 }

 console.log(numerosAmigos(2000))