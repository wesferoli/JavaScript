const validandoID = /\d+ID\b/;

console.log(validandoID.test("45454ID"));
console.log(validandoID.test("65646"));
console.log(validandoID.test("ID"));
console.log(validandoID.test("454545id"));