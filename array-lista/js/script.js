let fruit = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
let peach = 'pesca';
console.log(fruit);

fruit.push(peach);
console.log(fruit);

let check = false;
for (let i= 0; i<fruit.length; i++) {
    if ('cocomero' == fruit[i]) {
        check = true;
    }
}

if (check) {
    console.log('Trovato! Devo solo preparare il cocktail.');
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!');
}