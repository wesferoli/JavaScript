let livro = {
    "nome": "As cronicas de gelo e fogo",
    "editora": "Leya",
    "tipo": "Romance",
}

let jsonParaString = JSON.stringify(livro);

console.log(jsonParaString);

let stringParaJSON = JSON.parse(jsonParaString);

console.log(stringParaJSON.nome);