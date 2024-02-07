/*
truthy:
1.true
2.any number positive or negative other than 0
3.any string other than empty string
4.'0'




falsy:
1.false
2.0
3.'' empty string
4.undefined
5.null

*/
const y = null;
if(!y){
    console.log('value is falsy');
}
const z = 4;
if(!!z){
    console.log('value is truthy')
}