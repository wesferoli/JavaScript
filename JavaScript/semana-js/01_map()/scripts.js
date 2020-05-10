// 1-
// const numbers = [1, 2, 3];

// map() recebe uma declaração de funçao como argumento, sendo item obrigatorio, index e array opcional.
// const doubleNumbers = numbers.map(item => item * 2); // item recebe um item do array, faz a condiçao e passa para a proxima posição.

// console.log(doubleNumbers);

// 2-
// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const newPrices = prices.map(item => item / 2); // promoção metade do preço

// console.log(newPrices);

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
];

const saleProducts = products.map(product => {
    if(product.price >= 30){
        return { name: product.name, price: product.price / 2 };
    }

    return product;
});

console.log(saleProducts);
console.log(products);