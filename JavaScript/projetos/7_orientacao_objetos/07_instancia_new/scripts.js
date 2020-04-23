function Time(clube, pais, idolo, torcer) {
    this.nome = clube;
    this.pais = pais;
    this.idolo = idolo;
    this.torcer = function() {
        console.log(torcer);
    }
}

let spfc = new Time('São Paulo F.C.', 'Brasil', 'Rogério Ceni', 'Vamos São Paulo!');
let liverpool = new Time('Liverpool F.C.', 'Inglaterra', 'Gerrard', 'YNWA!');
let spurs = new Time('Tottenham F.C.', 'Inglaterra', 'Harry Kane', 'COYS!');

console.log(spfc.nome);
console.log(spfc.pais);
console.log(spfc.idolo);
spfc.torcer()

console.log(liverpool.nome);
console.log(liverpool.pais);
console.log(liverpool.idolo);
liverpool.torcer()

console.log(spurs.nome);
console.log(spurs.pais);
console.log(spurs.idolo);
spurs.torcer()