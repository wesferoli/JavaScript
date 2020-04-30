const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("wesleyfer.oli@gmail.com"));
console.log(validaEmail.test("wesleyfer.oli@gmail.com.br"));
console.log(validaEmail.test("wesleyfer.oli@hotmail.com.br"));
console.log(validaEmail.test("wesleyfer.oli@outlook.com"));
console.log(validaEmail.test("wesleyfer.oli@outlook"));
console.log(validaEmail.test("wesleyfer.oli97@yahoo.com"));