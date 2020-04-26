class Carrinho {
    constructor(itens, totQuant, totVal) {
        this.itens = itens;
        this.totQuant = totQuant;
        this.totVal = totVal;
    }

    addItem(item){
        let contador = 0;

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0) {
            this.itens.push(item);
        }

        this.totQuant += item.qtd;
        this.totVal += item.preco * item.qtd;
    }

    removeItem(item){
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {

                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) {return obj.id == item.id});
                
                this.itens.splice(index, 0);

                this.totQuant -= this.itens[itemCarrinho].qtd;
                this.totVal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
            }
        }
    }
}

let meuCarrinho = new Carrinho([
    {
        id: 01,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120);

console.log(meuCarrinho);

meuCarrinho.addItem({id: 01, nome: "Camisa", qtd: 2, preco: 20});

console.log(meuCarrinho);

meuCarrinho.addItem({id: 03, nome: "Boné", qtd: 1, preco: 15});

console.log(meuCarrinho);

meuCarrinho.removeItem({id: 01, nome: "Camisa", qtd: 1, preco: 20});

console.log(meuCarrinho);