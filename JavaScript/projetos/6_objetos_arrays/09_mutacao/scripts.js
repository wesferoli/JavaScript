let carro = {
    portas: 2,
    portamala: "200l",
    motor: 2.0,
}

let carro2 = carro;

let carro3 = {
    portas: 2,
    portamala: "200l",
    motor: 2.0,
}

console.log(carro2 == carro);

console.log(carro3 == carro);

carro2.portas = 4;

console.log(carro.portas); //carro e carro2 estão 'amarrados'