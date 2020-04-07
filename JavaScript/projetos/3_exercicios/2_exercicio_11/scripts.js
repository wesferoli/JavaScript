let idade = 22;
let cnh = true;

if(idade >= 18 && cnh == true){
    console.log("Habilitado a dirigir.");
} else if(idade < 18){
    console.log("Não possue idade para dirigir.");
} else if(idade >= 18 && cnh == false){
    console.log("Não possue CNH para dirigir.");
}