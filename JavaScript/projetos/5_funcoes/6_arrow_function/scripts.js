const parOuImpar = (n) => {
    if(n % 2 == 1){
        return 'Impar';
    } else {
        return 'Par';
    }
}

console.log(parOuImpar(5));