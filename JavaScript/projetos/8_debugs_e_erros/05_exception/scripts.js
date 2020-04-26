function saudacao(nome) {
    if(typeof nome != 'string') {
        throw new Error("O parâmetro nome deve ser uma string!");
    } else {
        console.log(`Olá ${nome}!`);
    }
}

saudacao('Jeremiah');
saudacao(7);