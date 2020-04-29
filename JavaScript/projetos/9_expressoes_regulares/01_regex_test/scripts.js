const reg1 = new RegExp("bola");

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));

const reg2 = /bola/;

let test = "Tem bola na rede!";

console.log(reg2.test("Tem bola?"));
console.log(reg2.test("Não tem"));
console.log(reg2.test(test));

console.log(/quadrado/.test("Tem quadrado"));
console.log(/quadrado/.test("Tem a45s4da854squadradoasdasd"));