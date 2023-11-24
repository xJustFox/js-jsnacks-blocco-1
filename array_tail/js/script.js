let array = [];
let array_num = parseInt(prompt('Quanti elementi vuoi in questo array?'));
let array_element = parseInt(prompt('Quanti elementi vuoi vedere di questo array?'));

for (let i = 1; i <= array_num; i++) {
    let num = Math.floor(Math.random()*100 + 1);
    array.push(num);
}
console.log(array);

let element = array.slice(0,array_element);
console.log(element);