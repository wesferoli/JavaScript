class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au");
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }
}

let viraLata = new Cachorro('Vira Lata', 'SCD');

console.log(viraLata);

viraLata.setCor = 'Caramelo';

console.log(viraLata.getCor);