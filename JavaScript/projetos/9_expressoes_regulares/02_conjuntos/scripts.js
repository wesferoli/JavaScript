const reg1 = /[12345]/;

console.log(reg1.test("Temos o numero 7"));
console.log(reg1.test("Temos o numero 2"));
console.log(reg1.test("Temos o numero 23"));
console.log(reg1.test("Temos o numero 60"));

const reg2 = /[0-9]/; // Verifica se há numeros na frase. Não é bom para verificar qual o numero.

console.log(reg2.test("Tem o numero 4659898"));