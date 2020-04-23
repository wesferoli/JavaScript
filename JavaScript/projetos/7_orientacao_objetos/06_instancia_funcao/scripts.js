function criaBanda(nome, albuns, integrantes) {
    const banda = Object.create({});
    banda.nome = nome;
    banda.albuns = albuns;
    banda.integrantes = integrantes;

    return banda;
}

let mumfordAndSons = criaBanda('Mumford & Sons', ['Sigh No More', 'Babel', 'Wilder Mind', 'Delta'], 'Marcus; Ben; Winston; Ted;');
let theLumineers = criaBanda('The Lumineers', ['The Lumineers', 'Cleopatra', 'III'], 'Wesley; Jeremiah; Stelth; Byron; Lauren; Brandon;');
let theStaves = criaBanda('The Staves', ['Dead & Born & Grown', 'If I Was', 'The Way Is Read'], 'Jessica, Camilla, Emily');

console.log(mumfordAndSons);
console.log(theStaves);
console.log(theLumineers);