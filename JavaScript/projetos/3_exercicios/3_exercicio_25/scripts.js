function imprimeParesDecrescente(num){
    for(num; num >= 0; num--){
        if(num % 2 == 0){
            console.log(num);
        }
    }
}

imprimeParesDecrescente(15);