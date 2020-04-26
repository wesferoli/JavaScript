class Carro {
    constructor(marca, cor, gasolina) {
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
    }

    consomeGasolina(distPercorrida) {
        this.gasolina -= distPercorrida * 2;
    }

    reabastece(tempoParado) {
        if(this.gasolina <= 2){
            this.gasolina += tempoParado * 0.2;
        }
    }
}

let meuCarro = new Carro('Peugeot', 'Prata', 50);

console.log(meuCarro);

meuCarro.consomeGasolina(24.5);

console.log(meuCarro);

meuCarro.reabastece(120);

console.log(meuCarro);

meuCarro.consomeGasolina(10);

console.log(meuCarro);

meuCarro.reabastece(120);

console.log(meuCarro);