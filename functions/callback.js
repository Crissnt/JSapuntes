//Is possible to use callback functions using anonymous functions

writes(12, function (y) {
  return 2 * y;
});

/* The code above is a call to the function 'writes', but instead
of using a prewritten function in the second parameter
(like 'writes(12, doble)' ), we develop the own function in the parameter */

function writes(x, action) {
  console.log(action(x));
}

writes(12, function (y) {
  return 2 * y;
});

/* So we have the function and the call to it in the code above.

The second block calls the function 'writes', with the parameters
12, function (y) {...}. Then, the function 'writes' executes.
The instruction console.log(action(x)) calls the function that has been received
as the parameter 'action', sending the parameter 'x', so the anonymous
function executes returning 2 * y (being 'y' the parameter 'x' in the
writes function) and console.log() prints that value. */

writes(12, (y) => 2 * y);

/* The line 28 shows another example of a callback but using an arrow function.
We call the function 'writes' sending the parameters '12, y => 2 * y'.
The arrow function would be equivalent to:
function (y) {
    return 2 * y;
} 
*/
