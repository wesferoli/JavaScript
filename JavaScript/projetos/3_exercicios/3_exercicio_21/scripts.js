function tipoDeDado(dado){
    if(typeof dado == 'number'){
        console.log("Este é um dado tipo number.");
    } else if(typeof dado == 'boolean'){
        console.log("Este é um dado tipo boolean.");
    } else{
        console.log("Este é um dado tipo string.");
    }
}

tipoDeDado('Brooo');
tipoDeDado(15);
tipoDeDado(true);