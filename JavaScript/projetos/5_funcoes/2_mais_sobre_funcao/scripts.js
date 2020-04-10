function multiplicaNumeros(a, b) {
    return a * b;
}

let a = 10;
let b = 3;

console.log(multiplicaNumeros(a, b));

const mult = multiplicaNumeros(a=15, b=6);

console.log(`O valor de mult é ${mult}`);

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir.");
    } else{
        console.log("Não pode dirigir.");
    }
}

podeDirigir(20, 1);