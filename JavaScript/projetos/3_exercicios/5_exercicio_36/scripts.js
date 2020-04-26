class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo += valor;
        console.log("Você depositou R$" + valor);
    }

    saque(valor) {
        if(valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Você fez um saque de R$" + valor);
        }else {
            console.log("Apenas R$" + this.saldo + " estão disponiveis para saque");
        }
    }
}

let minhaConta = new Conta(100);

minhaConta.deposito(60);

console.log(minhaConta.saldo);

minhaConta.saque(150);

console.log(minhaConta.saldo);

minhaConta.saque(50);