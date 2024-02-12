let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}

const output = multiply(num1, num2);
console.log(output);

let student1 = {name: 'Jalil', partner: 'Borsha'};
let student2 = {name: 'Raj', partner: 'Mim'};

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.name = 'anika'
}
console.log(student1, student2);
makeMovie(student1,student2);
console.log(student1,student2);