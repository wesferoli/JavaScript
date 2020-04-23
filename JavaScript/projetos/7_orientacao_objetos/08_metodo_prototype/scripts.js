function Cachorro(patas, raca, cor) {
    this.patas = 4;
    this.raca = 'SRD';
    this.cor = 'SCD';
}

Cachorro.prototype.latir = function() {
    console.log("Au au");
}

let viraLata = new Cachorro(4, 'Vira Lata', 'Caramelo');

viraLata.latir();