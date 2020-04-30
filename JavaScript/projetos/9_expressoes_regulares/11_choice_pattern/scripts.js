const padrao = /\w+: (Jeremiah|Wesley|Lauren|Byron|Stelth|Brandon)/; //Escolhe um padrão permitido (| = ou)

console.log(padrao.test("Nome: Jeremiah"));
console.log(padrao.test("Nome: Stelth"));
console.log(padrao.test("Nome: Byron"));
console.log(padrao.test("Nome: Lauren"));
console.log(padrao.test("Nome: Brandon"));
console.log(padrao.test("Nome: Wesley"));
console.log(padrao.test("Nome: Vitor"));