const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validaIP.test("127.0.0.1"));
console.log(validaIP.test("8.8.8.8"));
console.log(validaIP.test("127.0.0"));
console.log(validaIP.test("127.0.0111.11114144"));