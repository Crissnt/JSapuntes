//Syntax
const myFunction = (num1, num2) => num1 + num2;

/* The arrow anonymous functions are declared by specifying its parameters 
(between parenthesis if there are more than one) followed by an arrow
and the return instruction (without the word return) */

//For functions with more than one instruction, it's necessary to enclose them within keys

const myFunction = (n1, n2) => {
  let a = n1 + n2;
  let b = a / 2;
  return b;
};

//Keys are also needed when the function doesn't return anything

const myFunction = (message) => {
  console.log(message);
};

//If the function has no parameters, is necessary to put parenthesis

const myFunction = () => {
  console.log('Hello');
};
