const calculadora = {
    soma: function(n1, n2) {
        return n1 + n2;
    },
    subtracao: function(n1, n2){
        return n1 - n2;
    },
    multiplicação: function(n1, n2) {
        return n1 * n2;
    },
    divisao: function(n1, n2) {
        return n1 / n2;
    }
}

console.log(calculadora.soma(5,18));
console.log(calculadora.subtracao(18,5));
console.log(calculadora.multiplicação(3,9));
console.log(calculadora.divisao(50,3));