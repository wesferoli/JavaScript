const folk = {
    banda: undefined,
    albuns: undefined,
    vertente: "Folk",
}

let mumfordAndSons = Object.create(folk);

mumfordAndSons.banda = "Mumford & Sons";
mumfordAndSons.albuns = ['Sigh No More', 'Babel', 'Wilder Mind', 'Delta'];
mumfordAndSons.vertente = "Folk Rock";

console.log(mumfordAndSons.banda);
console.log(mumfordAndSons.albuns);
console.log(mumfordAndSons.vertente);

let theLumineers = Object.create(folk);

theLumineers.banda = "The Lumineers";
theLumineers.albuns = ['The Lumineers', 'Cleopatra', 'III'];
theLumineers.vertente = "Folk Rock";

console.log(theLumineers.banda);
console.log(theLumineers.albuns);
console.log(theLumineers.vertente);