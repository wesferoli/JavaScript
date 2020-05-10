// 1-
/* const randomNumbers = [36, 99, 64, 19];

// filter() funcional igual ao map(), porem filtra elementos baseando-se na condição
const greaterThan37 = randomNumbers.filter(item => item > 37);

console.log(greaterThan37); */

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
];

const premiumUsers = users.filter(user => user.premium == true);

console.log(premiumUsers);
console.log(users);