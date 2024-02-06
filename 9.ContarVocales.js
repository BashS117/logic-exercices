function contarVocales(cadena) {
    const vocales= "aeiouAEIOU"
    let count=0;

    for (i=0;i<cadena.length;i++){
        if(vocales.includes(cadena[i])){
            count++;
        }
    }
    
    return count
}
const texto= "hola bienvenudis a la clase de JS";
console.log(contarVocales(texto))
///

function contarNum (string){
    const numeros = '0123456789'
    let contador = 0;

    for(i=0;i<=string.length;i++){
        if(numeros.includes(string[i])){
            contador++;
        }
    }
    return contador
}

const texto2= "hola bienvenudis a la clase 8 de JS";
console.log(contarNum(texto2))
///