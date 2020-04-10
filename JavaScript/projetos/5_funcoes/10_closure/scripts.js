function lembraSoma(x){
    return function(y){
        return x + y;
    }
}

let soma1 = lembraSoma(4);

console.log(soma1(6));

function contador(i){
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    
    return somarContador;
}

let meuContador = contador(5);

meuContador();
meuContador();
meuContador();
meuContador();
meuContador();