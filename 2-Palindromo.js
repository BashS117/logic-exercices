function isPalindrome(str,subStr) {
    const  limpiada=str.toLowerCase().replace(/[^a-zA-Z]/g, '');
    const  limpiadaSub=subStr.toLowerCase().replace(/[^a-zA-Z]/g, '');
 
 
    return limpiadaSub=== limpiadaSub.split('').reverse().join('');
 
 
 }
 console.log(isPalindrome("racecar is a common example", "racecar"));