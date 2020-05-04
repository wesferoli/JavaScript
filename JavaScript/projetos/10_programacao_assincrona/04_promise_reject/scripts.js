function checaNumero(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log(`O número é ${num}`));
        } else {
            reject(new Error("Deu ruim"));
        }
    });    
}

checaNumero(2);
checaNumero(20);