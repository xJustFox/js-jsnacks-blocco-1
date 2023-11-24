let array_1 = [23, 42, 46, 19, 29, 87, 23, 35, 93, 54];
let array_2 = [53, 90, 26, 39, 21,];

if (array_1.length > array_2.length ) {
    let x = array_1.length - array_2.length;

    for (let i = 0; i < x; i++) {
        let newElement = Math.floor(Math.random()*100 + 1);
        array_2.push(newElement);
    }
} 
else {
    let x = array_2.length - array_1.length;
    
    for (let i = 0; i < x; i++) {
        let newElement = Math.floor(Math.random()*100 + 1);
        array_1.push(newElement);
    }
}

console.log(array_1, array_1.length);
console.log(array_2, array_2.length);