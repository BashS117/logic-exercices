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