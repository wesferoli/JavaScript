class Cachorro {
    constructor(patas, raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au");
    }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let viraLata = new Cachorro('Vira Lata', 'Caramelo');

// acessando Symbol

console.log(Cachorro.prototype[patas]);
console.log(viraLata[patas]);