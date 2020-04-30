const umOuMaisNumeros = /\d+/; // Plus aceita o padrao sem quantidade definida. Aquele padrao indefinitivamente

console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("45"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("sahdush"));