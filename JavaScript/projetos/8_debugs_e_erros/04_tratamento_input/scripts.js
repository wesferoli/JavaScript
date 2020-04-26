function checarNumero(num) {
    let number = Number(num);

    if (Number.isNaN(number)) {
        console.log("Por favor, passe apenas números.")
    } else {
        return number;
    }
}

checarNumero(5);
checarNumero('asdf');

let number = prompt("Digite um número:");

checarNumero(number);