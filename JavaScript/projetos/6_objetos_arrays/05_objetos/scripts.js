let timeDeFutebol = {
    nome: "São Paulo F.C.",
    idolo: "Rogério Ceni",
    ultimoTitulo: "Copa Sulamericana",
    dataUltimoTitulo: 2012,
    gritoTorcida: function(){
        console.log("Vamos São Paulo, vamos São Paulo, vamos ser campeões!");
    },
}

console.log(timeDeFutebol.nome);
console.log(timeDeFutebol.dataUltimoTitulo);
timeDeFutebol.gritoTorcida();

timeDeFutebol = {
    nome: "Liverpool F.C.",
    idolo: "Steven Gerrard",
    ultimoTitulo: "FIFA Club World Cup",
    dataUltimoTitulo: 2019,
    gritoTorcida: function(){
        console.log("You'll Never Walk Alone!");
    },
}

console.log(timeDeFutebol.nome);
console.log(timeDeFutebol.dataUltimoTitulo);
timeDeFutebol.gritoTorcida();