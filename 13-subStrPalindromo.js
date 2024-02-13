function isPalindrome(str,subStr) {
    const  limpiada=str.toLowerCase().replace(/[^a-zA-Z]/g, '');
    const  limpiadaSub=subStr.toLowerCase().replace(/[^a-zA-Z]/g, '');
 
 
    let subReversed= limpiadaSub.split('').reverse().join('');
 
    return limpiada.includes(subReversed) && subReversed ===limpiadaSub;
 
 }
 console.log(isPalindrome("racecar is a common example", "racecar"));

///en español


 function esPalindormo(strin,subStr){
    const palabraLimpiada=strin.toLowerCase().replace(/[^a-zA-Z]/g, '');
    const subpalabraLimmpiada= subStr.toLowerCase().replace(/[^a-zA-Z]/g, '');
 
    let subpalabraVoltiada= subpalabraLimmpiada.split('').reverse().join('');

    return palabraLimpiada.includes(subpalabraVoltiada) && subpalabraVoltiada===subpalabraLimmpiada;
 }

 console.log(esPalindormo("racecar is a common example", "racecar"))