let nome = 'Wesley';

for(let i = 0; i < 10; i++){
    if(i == 3){
        nome = 'João';
    }
    if (i == 5 && nome == 'João'){
        console.log(`Pare! O nome é ${nome}`)
        break;
    }
    console.log(i);
}