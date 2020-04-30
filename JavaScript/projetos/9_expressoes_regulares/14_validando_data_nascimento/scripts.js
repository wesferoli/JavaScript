const validaDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validaDataNasc.test("11/09/1997"));
console.log(validaDataNasc.test("11/09/97"));
console.log(validaDataNasc.test("11/9/1997"));
console.log(validaDataNasc.test("11-09-1997"));