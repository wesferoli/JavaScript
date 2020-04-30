const cep = /\d{5}-\d{3}/; // Recolhe dados com maior restrição/precisao

console.log(cep.test("07417-195"));
console.log(cep.test("07417-19"));
console.log(cep.test("0741-195"));

const cel = /\d{2,3} \d{4,5}-\d{4}/;

console.log(cel.test("011 99985-7971"));
console.log(cel.test("11 99985-7971"));
console.log(cel.test("011 9985-7971"));
console.log(cel.test("011 999-7971"));
console.log(cel.test("011 99985-79"));