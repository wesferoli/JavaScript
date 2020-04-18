let n1 = 4;
let n2 = 7;
let n3 = 6;
let n4 = 2;

function imprimirNumeros(...args) { // permite receber quantidade indefinida de argumentos
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(n1,n2,n3,n4);
imprimirNumeros(n2,n4);
imprimirNumeros(45,65,8,4,2,36,4,8,95,1,5445,6,78);