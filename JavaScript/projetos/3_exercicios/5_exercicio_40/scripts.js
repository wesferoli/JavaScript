class Conta {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
        this.saldoCorrente = saldoCorrente;
        this.jurosPoupanca = jurosPoupanca;
        this.saldoPoupanca = saldoPoupanca;
    }

    depositoCorrente(dinheiro) {
        this.saldoCorrente += dinheiro;
    }

    depositoPoupanca(dinheiro) {
        this.saldoPoupanca += dinheiro;
    }

    saqueCorrente(saque) {
        this.saldoCorrente -= saque;
    }

    saquePoupanca(saque) {
        this.saldoPoupanca -= saque;
    }

    transferenciaCC(valor) {
        this.saldoCorrente += valor;
        this.saldoPoupanca -= valor;
    }

    transferenciaCP(valor) {
        this.saldoCorrente -= valor;
        this.saldoPoupanca += valor;
    }

    jurosAniversario() {
        let juros = this.saldoPoupanca * this.jurosPoupanca;
        this.saldoPoupanca += juros;
    }
}

class ContaEspecial extends Conta {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        super(saldoCorrente, saldoPoupanca, jurosPoupanca*2);
    }
}

let minhaConta = new Conta(1000, 500, 0.2);

console.log(minhaConta);

minhaConta.depositoCorrente(150);

console.log(minhaConta);

minhaConta.depositoPoupanca(150);

console.log(minhaConta);

minhaConta.saqueCorrente(50);

console.log(minhaConta);

minhaConta.saquePoupanca(50);

console.log(minhaConta);

minhaConta.transferenciaCC(400);

console.log(minhaConta);

minhaConta.transferenciaCP(400);

console.log(minhaConta);

minhaConta.jurosAniversario();

console.log(minhaConta);

let minhaContaEspecial = new ContaEspecial(1000, 500, 0.2);

console.log(minhaContaEspecial);

minhaContaEspecial.depositoCorrente(150);

console.log(minhaContaEspecial);

minhaContaEspecial.depositoPoupanca(150);

console.log(minhaContaEspecial);

minhaContaEspecial.saqueCorrente(50);

console.log(minhaContaEspecial);

minhaContaEspecial.saquePoupanca(50);

console.log(minhaContaEspecial);

minhaContaEspecial.transferenciaCC(400);

console.log(minhaContaEspecial);

minhaContaEspecial.transferenciaCP(400);

console.log(minhaContaEspecial);

minhaContaEspecial.jurosAniversario();

console.log(minhaContaEspecial);