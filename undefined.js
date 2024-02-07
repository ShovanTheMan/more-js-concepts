/*
8 ways to get undefined
1.variable that is not initialized will give undefined
2.function with no return
3.parameter that is not passed will be undefined
4.if return has nothing on the right side will return undefined
5.property that doesn't exists on an object will give you undefined
6.accessing array elements outside of the index range
7.deleting an element inside an array
8.set a value directly to undefined
 */

let first;
function second(a,b){
    const total = a + b;
}
const result = second();

function third(a,b,c,d){
    const total = a+b+c+d;
    console.log(a,b,c,d);
}
third(3, 4);

function noNegative(a, b){
    if( a > 0 && b < 0){
        return
    }
    return a + b;
}  
const total = noNegative(3,5);