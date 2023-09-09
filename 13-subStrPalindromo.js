function isPalindrome(str,subStr) {
    const  limpiada=str.toLowerCase().replace(/[^a-zA-Z]/g, '');
    const  limpiadaSub=subStr.toLowerCase().replace(/[^a-zA-Z]/g, '');
 
 
    let subReversed= limpiadaSub.split('').reverse().join('');
 
    return limpiada.includes(subReversed) && subReversed ===limpiadaSub;
 
 }
 console.log(isPalindrome("racecar is a common example", "racecar"));