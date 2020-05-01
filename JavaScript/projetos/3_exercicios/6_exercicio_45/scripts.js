const validaNome = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validaNome.test("a-_"));
console.log(validaNome.test("7a"));
console.log(validaNome.test("77777"));
console.log(validaNome.test("wkacrision97"));