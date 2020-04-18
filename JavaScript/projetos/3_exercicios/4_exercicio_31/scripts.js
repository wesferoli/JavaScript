let numeros = [1,2,6,4,8,5,98,4];
let nomes = ["Jõao", "Wesley", "Maria"];

function tamanhoArray(array){
    if(array.length < 5){
        console.log("Poucos elementos");
    } else{
        console.log("Muitos elementos");
    }
}

tamanhoArray(numeros);
tamanhoArray(nomes);