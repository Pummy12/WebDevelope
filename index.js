//First JS code
console.log('Hello world');

let firstName='Pummy';
console.log(firstName);

let interestRate=0.3; //can't use const in interestRate as it gives error
interestRate=1;
console.log(interestRate);

let isApproved=true; //boolean literal
let lastName=null;
let selectColor='red';
console.log(lastName);

let name='Jha';
let age=20;
let person={name:'Jha',
age:20};
//dot notation
person.name='PUMMY';
//bracket notation
person['name']='Pumm';
console.log(person.name);

//Array
let selectedColors=['Red','Black'];
selectedColors[2]='green';
console.log(selectedColors[2]);
console.log(selectedColors.length);

//FUNCTIONS
function greet(){
    console.log('Hello Guys');
}
greet();

function greet(name,Age){
    console.log('Hello'+name+'My age is'+Age);
}
greet(' Kartik',20);

//calculate
function square(number){
    return number*number;
}
console.log(square(2));

