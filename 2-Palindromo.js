function isPalindrome(st) {
    const cleanedPalabra = st.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedPalabra = cleanedPalabra.split("").reverse().join("");
    return cleanedPalabra == reversedPalabra;
    
}
console.log(isPalindrome("reconocer"));

////////////////////

function saberSiesPalindromo(palabra) {
    const palabraLimpia=palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return palabraLimpia ==  palabraLimpia.split("").reverse().join('');

}
console.log(saberSiesPalindromo("reconoceremos"));
/////

// function esPalindromo(cadenaTexto){
//     const palabraLimpiada=cadenaTexto.toLowerCase().replace(/[^a-z0-9]/g, '');
//     //devuelve booleano
//     return palabraLimpiada == palabraLimpiada.split("").reverse().join('');
// }

// console.log(esPalindromo("reconocewr"));
///

function esPalindromo(cadenaTexto){
    const palabraLimpiada=cadenaTexto.toLowerCase().replace(/[^a-z0-9]/g, '');
    //devuelve booleano
    return palabraLimpiada == palabraLimpiada.split("").reverse().join('');
}

console.log(esPalindromo("reconocewr"));