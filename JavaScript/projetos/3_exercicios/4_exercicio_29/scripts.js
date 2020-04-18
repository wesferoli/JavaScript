let onibus = {
    rodas: 8,
    limitePassageiro: 40,
    portas: 2,
}

onibus.janelas = 20;

delete onibus.rodas;

console.log(onibus.rodas);
console.log(onibus);