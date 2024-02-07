//always use ===
//equal comparison doesn't  work for non-primitive(string,array,null,undefined)
//
const first = {};
//const second = {};
//values are not equal
const second = first;
// === value and typeof checks both and == checks only value.
if(first === second){
    console.log('values are equal');
}
else{
    console.log('values are not equal');
}
// type coercion