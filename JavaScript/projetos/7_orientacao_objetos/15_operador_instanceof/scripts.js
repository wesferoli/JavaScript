class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }
}

let viraLata = new Cachorro(4,'Vira Lata');

console.log(viraLata);

console.log(new Cachorro instanceof Mamifero);