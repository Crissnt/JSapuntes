//Recursion

function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let factor = factorial(3);
console.log(factor);

//Iteration

function factorial(n) {
  let res = 1;
  while (n > 1) {
    res *= n;
    n--;
  }
  return res;
}

//Callback

function writes(text, myFunction) {
  myFunction(text);
}

writes('Hello', console.log);

/* A function also can receive another function as a parameter
The above function, 'writes', receives an argument called 'text',
and another one called 'myFunction'. When we call the function
'writes', we specify the parameters 'Hello' (String) and console.log (function).
In the 'writes' function, the instruction uses the argument 'myFunction()'
which contains console.log and the argument 'text' which contains the String
to display, so it would be like: console.log('Hello'); */

function writes(x, action) {
  console.log(action(x));
}

function doble(y) {
  return 2 * y;
}

writes(12, doble); //Output: 24

/* The function 'writes ' receives a variable (x) and a function (action).
 The action argument is the function 'doble(y)', which returns 2 * y.
 In the call to the function, we set the parameters '12, doble'. Therefore,
 the instruction of 'writes' would be equivalent to 'console.log(doble(12))'.
 So, that would call the function 'doble' which would return 24 (2 * 12).*/
