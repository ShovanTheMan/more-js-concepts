function greeting(greetingHandler, name){
      greetingHandler(name);
}
// const name = 'Halim mama';
// const numbers = [34, 56, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('Good Morning', name);
}
function greetEvening(name){
    console.log('Good evening', name);
}
function greetNight(name){
    console.log('Good Night',name);
}
greeting(greetingHandler, 'shovan');
greeting(greetingHandler, 'nabil');
greeting(greetingHandler, 'jony');
greeting(greetEvening, 'foysal');
greeting(greetEvening, 'rony');
greeting(greetNight, 'Joy');


function submitHandler(){
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler{
    console.log('submit button clicked')
})
