function numeroAleatorio(max){
    return Math.floor(Math.random() * max) + 1;
}

console.log(numeroAleatorio(10));
console.log(numeroAleatorio(50));
console.log(numeroAleatorio(100));