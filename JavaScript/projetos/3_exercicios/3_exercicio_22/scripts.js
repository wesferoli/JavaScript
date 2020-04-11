function negativoParaPositivo(num){
    if(num < 0){
        return Math.abs(num);
    } else{
        console.log("Necessário passar número negativo.");
    }
}

console.log(negativoParaPositivo(-20));