//Foreach method ----------------------------------------------

let array = ['Element', 123, 'Abcdef'];

array.forEach(function (element, index) {
  console.log('Index: ' + index + ' Element: ' + element);
});

/* Foreach is a method who receives a function with 2 parameters,
The first one is the element stored in a position, and the second one
is the index of that element. The second parameter is optional.
We can simplify the call by using an arrow function. */

array.forEach((el, ind) => console.log(ind + ' | ' + el));

/* Foreach can be used for sets, too. In the case of sets,
the callback function only receives the parameter 'element' */

let set = new Set(array);

set.forEach(function (el) {
  console.log(el);
});

//Or:

set.forEach((el) => console.log(el));

/* In the case of maps, foreach can use a callback function
that admits two parameters; one for the key and another
for the value */

let map = new Map();

map.set(1, 'One').set(2, 'Two').set(3, 'Three');

map.forEach((v, k) => console.log(v + ': ' + k));

//Or:

map.forEach(function (value, key) {
  console.log('Key: ' + key + ' Value: ' + value);
});

//Map method ---------------------------------------------------

/* The method 'map' allows to iterate an array and modify
each element by the parameter specified. For example, if we 
want to double the numbers in an array, we can do the following */

let array = [1, 2, 3];

let doble = array.map((x) => x * 2);

/* The 'map' method doesn't modify the actual array, so if we want to
store the changes we need to do it in a new array like the code above */

console.log(array); //Output: [1, 2, 3]

console.log(doble); //Output: [2, 4, 6]

/* We can just print the array values with map: */

array.map((x) => console.log(x));

//Reduce method ------------------------------------------------

/* The reduce method returns a value, result of making an operation
with each element of the array */

let sum = array.reduce((stack, value) => stack + value, 0);

/* It has two parameters. The first one is a callback function.
This function has two parameters. The first one, is the variable
where the resulting value of the operations is being stored.
The second one is the value of the current element of the array.
The second parameter of the reduce method is the starting value of
the stack variable. */

// Filter method ---------------------------------------------------

/* Returns an array with the elements of another array that
meet a specified condition. Has one parameter that is a
callback function with the condition to meet */

let filteredArray = array.filter((x) => x > 2);

/* FilteredArray will have all the elements from 'array' that
are greater than 2 */
