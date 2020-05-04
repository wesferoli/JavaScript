let promessa = Promise.resolve(5);

console.log("Bla bla bla, Whiskas Sache");

console.log(promessa);

promessa.then((value) => {return value + 5})
 .then((value) => {console.log(value)});