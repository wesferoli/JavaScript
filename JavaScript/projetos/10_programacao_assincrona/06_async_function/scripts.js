async function soma(a,b) { //Se retorna o valor, é resolvida. Se acontece erro, é rejeitada.
    return a + b;
}

console.log(soma(5, 6));

soma(5, 6).then((value) => console.log(value));