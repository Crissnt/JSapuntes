/* Parameters: Names that appear in a function declaration 
   Arguments: Values passed to the function 
   
   Rules of parameters:
   -Not to specify the parameter type
   -Argument types are not verified
   -The amount of arguments received is not checked */

function sum(n1, n2) {
  if (n2 === undefined) {
    n2 = 0;
  }
  return n1 + n2;
}

/* The above function is declared with two parameters, n1 and n2
We added an 'if' block to check if the function has been called 
with only one parameter. If that is the case, the value
0 is assigned to the second one*/

console.log(sum(3, 3)); //Output: 6
console.log(sum(3)); //Output: 3 (Because the second parameter is 0);

function values() {
  console.log(arguments.length);
}

values(3, 2, 4, 2); //Output: 4

/* The above function has no parameters, but we are calling it 
specifying 4 of them. The console.log(arguments.length)
instruction prints the number of arguments received.
Arguments is an array, so we can traverse it with a loop. */

function values() {
  for (element of arguments) {
    console.log(element);
  }
}

values(3, 2, 4, 2); //Output: 3 2 4 2
