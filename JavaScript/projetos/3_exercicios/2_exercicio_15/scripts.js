let num = 57;
let divnum = 0;

for(let i = 1; i <= num; i++){
    if(num % i == 0){
        divnum++;
    }
}

if(num > 1){
    if(divnum == 2){
        console.log(`${num} é um número primo.`);
    } else{
        console.log(`${num} não é um número primo.`);
    }
}