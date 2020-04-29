const dia = /\d\d/;

let num1 = "09";
let num2 = "2020";

console.log(dia.test(num1) && num1.length == 2);
console.log(dia.test(num2) && num2.length == 2);
console.log(dia.test("asfa"));

const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test("AVA"));
console.log(palavraTresLetras.test("AV"));
console.log(palavraTresLetras.test("AVasdad") && "AVasdad".length == 3);