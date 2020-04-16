let album = {
    nome: "Song For Our Daughter",
    artista: "Laura Marling",
    data: 2020,
    estilo: "Folk",
}

console.log(album.nome);

delete album.nome;

console.log(album.nome);

album.numFaixas = 10;

console.log(album);