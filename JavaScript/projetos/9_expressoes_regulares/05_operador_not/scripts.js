const notab = /[^ab]/; // Not verifica se há alem do escolhido. Caso sim, retorna true

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const notAToZ = /[^a-z]/;

console.log(notAToZ.test("aqui tem coragem"));