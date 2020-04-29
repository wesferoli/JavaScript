const pontoRegex = /./; // Aceita tudo menos quebra de linha

console.log(pontoRegex.test("asdas"));
console.log(pontoRegex.test("\n"));

const dRegex = /\d/; // Aceita apenas numeros ([0-9])

console.log(dRegex.test("5"));
console.log(dRegex.test("5asda7"));
console.log(dRegex.test("sada"));

const DRegex = /\D/; // 'Not numeros ([^0-9])'. Aceita strings que possuam algo alem de numeros

console.log(DRegex.test("5"));
console.log(DRegex.test("5asda7"));
console.log(DRegex.test("sada"));

const sRegex = /\s/; // Aceita apenas strings com espaço e quebras de linha.

console.log(sRegex.test("5"));
console.log(sRegex.test("5asda7\n"));
console.log(sRegex.test("s "));

const wRegex = /\w/; // Não aceita APENAS espaços e quebras de linha. (ALFANUMERICOS)

console.log(wRegex.test("5"));
console.log(wRegex.test("5asda7\n"));
console.log(wRegex.test(" "));