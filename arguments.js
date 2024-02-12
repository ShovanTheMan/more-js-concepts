function sum(a,b,c){
    // console.log(arguments);
    // [Arguments] { '0': 5, '1': 7, '2': 9 }
     const args = [...arguments];
     console.log(args);
    // object theke array te niye jabe ...arguments
    const result = a + b + c;
    return result;
}
const total = sum(5,7,9);
 console.log(total);
 