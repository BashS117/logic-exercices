function capitalizeWords(phrase) {
    return phrase
    .split(' ')
    .map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
}
console.log(capitalizeWords('hola, bienvenidos a mi clase de javascrip el pro de sebas'))