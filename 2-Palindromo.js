function isPalindrome(st) {
    const cleanedPalabra = st.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedPalabra = cleanedPalabra.split(" ").reverse().join("");
    return cleanedPalabra == reversedPalabra;
    
}
console.log(isPalindrome("reconocer"));