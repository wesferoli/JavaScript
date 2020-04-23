class Cachorro {
    constructor(patas, raca, cor) {
        this.patas = patas;
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au");
    }
}

let viraLata = new Cachorro(4, 'Vira Lata', 'Caramelo');

Cachorro.prototype.raca = 'SRD';
Cachorro.prototype.patas = 4;

console.log(viraLata);

console.log(Cachorro.prototype.raca);