class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set attRua(novoRua) {
        this.rua = novoRua;
    }

    set attBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set attCidade(novoCidade) {
        this.cidade = novoCidade;
    }

    set attEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

let meuEndereco = new Endereco("Rogério de Andrade Santos", "Barreto", "Arujá", "SP");

console.log(meuEndereco);

meuEndereco.attRua = "Av. Salgado Filho";
meuEndereco.attBairro = "Vila Rio";
meuEndereco.attCidade = "Guarulhos";
meuEndereco.attEstado = "São Paulo";

console.log(meuEndereco);