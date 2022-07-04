// Vanilla JavaScript Function
function addTwoNumbers(a, b){
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum1 = addTwoNumbers(3, 5);
console.log(sum1);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;

// Implicit Returns
const saySomething = message => console.log(message);

//If no parameter, use empty set of parentheses to tell JS we're creating a function.
const sayHello = () => console.log('hello'); 

// Returning Multiple Lines
// Uses () instead of {};
const returnMultipleLines = () => (
    `<p>
    This is a multiple lines string!
    </p>`
);
