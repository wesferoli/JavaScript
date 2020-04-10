function imprimirNoConsole() {
    console.log("Hello World!");
}

imprimirNoConsole();

function imprimirUmNumero(num){
    console.log(`O número é ${num}`);
}

let num = 18;

imprimirUmNumero(num);

// Função anônima
const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();