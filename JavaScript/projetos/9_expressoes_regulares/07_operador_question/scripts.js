const padrao = /Foo?l/; // O '?' torna o elemento atras dele opcional

console.log(padrao.test("Fool"));
console.log(padrao.test("Fol"));

const padrao2 = /\d+\w?/;

console.log(padrao2.test("487454"));
console.log(padrao2.test("asda"));
console.log(padrao2.test("487454asdasd"));