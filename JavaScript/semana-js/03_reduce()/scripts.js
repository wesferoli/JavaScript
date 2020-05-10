// 2-
/* const numbers = [1, 2, 3];

// reduce() reduz um array a outro tamanho de dado, sendo array, string ou objeto
// recebe os parametros accumulator e item, com index e array opcionais
// accumulator recebe o 0, e a cada proxima iteração, recebe o resultado da condição
const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0);

console.log(sumResult); */

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
];

const rogerScore = phaseScores.reduce((accumulator, scores) => {
    if(scores.name === 'Roger Melo'){
        accumulator += scores.score;
    }

    return accumulator;
}, 0);

console.log(rogerScore);