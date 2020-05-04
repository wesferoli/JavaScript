let p = Promise.resolve(new Error("Deu ruim"));

console.log("bruuuv");

p.then((value) => console.log(value))
 .catch((value) => console.log("Falha: " + reason));