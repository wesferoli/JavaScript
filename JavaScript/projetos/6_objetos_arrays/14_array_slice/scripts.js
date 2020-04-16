let numeros = [4,69,62,3,4,8];

console.log(numeros.slice(4)); // do quarto elemento até o fim
console.log(numeros.slice(1,4)); // do primeiro elemento ate o terceiro
console.log(numeros.slice(0,1)); // apenas o elemento no indice zero

console.log(numeros.slice(-2)); // os dois ultimos elementos

console.log(numeros.slice(1,-2)); // do indice um sem os dois ultimos elementos


// o segundo parametro é a parada de indice, e não é retornado
// retorna um array