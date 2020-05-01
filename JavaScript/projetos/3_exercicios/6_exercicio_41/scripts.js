const apenasMaiusculo = /[A-Z][^a-z]/;

console.log(apenasMaiusculo.test("ZOAS"));
console.log(apenasMaiusculo.test("zoas"));
console.log(apenasMaiusculo.test("Zoas"));
console.log(apenasMaiusculo.test("ZOAS "));