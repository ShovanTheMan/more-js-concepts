// primitive type
const a = 5;
const b = 'samsu kipatami caira dice';
// non -primitive
const ages = [34, 56];
const student = {id: 34, class: 7}

let x = 5;
let y = x;
console.log(x,y);
y = 7;
console.log(x,y);

let p = {job: 'Web Developer'}
let q = p;
q.job = 'front end developer';
// q = {job: 'Backend Developer'}
console.log(p, q);

