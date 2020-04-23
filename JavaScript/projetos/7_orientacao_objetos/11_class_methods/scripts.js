class Cachorro {
    constructor(patas, raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au");
    }
}

Cachorro.prototype.patas = 4;

let viraLata = new Cachorro('Vira Lata', 'Caramelo');

console.log(Cachorro.prototype.patas);

viraLata.latir();