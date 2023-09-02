function isPalindrome(st) {
    const cleanedPalabra = st.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedPalabra = cleanedPalabra.split(" ").reverse().join("");
    return cleanedPalabra == reversedPalabra;
    
}
console.log(isPalindrome("reconocerAA"));

////////////////////

function saberSiesPalindromo(palabra) {
    const palabraLimpia=palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
    const palabraReversa=palabraLimpia.split(" ").reverse().join("");
    
    
    console.log("PALABRArEVERSED",palabraLimpia.split("").reverse().join(''))
    console.log(palabraLimpia)
    
    return palabraLimpia ==  palabraLimpia.split("").reverse().join('');

}
console.log(saberSiesPalindromo("reconoceremos"));
