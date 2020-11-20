//Declaration ------------------------------------------------------------------

let emptyArray = []; //Empty array

let weekDays = ['Monday', 'Tuesday', 3, 4, ['Friday', 'Saturday'], 'Sunday']; 
/* Array with elements defined at its declaration.
-String type elements in indexes 0, 1 and 6 (Monday, Tuesday, Sunday)
-Numeric values in the indexes 2 and 3.
-Array type element in the index 4. This array has only String type elements */

weekDays[index]; //Shows the element in the specified index
weekDays[1]; //Output: Tuesday
weekDays[4][0]; //Element in the position 0 of the array declared inside the weekDays array. Output: Friday

//Finding out if an element is array type

typeof weekDays; //Output: object. Arrays in javascript are object type
weekDays instanceof Array; //Output: true
Array.isArray(weekDays); //Output: true



//Array display methods --------------------------------------------------------

weekDays.length; //Output: 6. Returns the number of elements in the array
weekDays.toString(); //Outputs the array in String format
weekDays.join(
  param
); /* Outputs the array separated by the specified param.
    Eg: weekDays.join("-") outputs: Monday-Tuesday-3-4-Friday,Saturday-Sunday */



//Array modifying methods --------------------------------------------------------

weekDays.shift(); //Removes the first element of the array
let firstElement = weekDays.shift(); //Will remove the first element and store it in the variable 'firstElement'

weekDays.pop(); //Removes the last element of the array
let lastElement = weekDays.pop(); //Will remove the last element and store it in the variable 'lastElement'

delete weekDays[index]; //Removes the element in the specified index

weekDays.unshift(param); //Adds the param specified element at the start of the array
weekDays.push(param); //Adds the param specified element at the end of the array

weekDays.splice(start, deleteCount, element1, element2...);
/* Inserts and/or removes elements in/from the array
The first parameter designates the index which the method starts working from
The second parameter (can be 0) designates the number of elements that will be removed from the array,
starting from the index indicated at the first parameter 
The elements to be added to the array are specified after these first two 
Examples: */

weekDays.splice(3, 0, "Day1", "Day2");
/* Starting from the index 3 (value: 4), there will be 0 elements removed. Then, there will
be added "Day1" and "Day2". Output: weekDays['Monday', 'Tuesday', 3,' Day1', 'Day2', 4, [ 'Friday', 'Saturday' ], 'Sunday'] */

weekDays.splice(3, 2, "Day1", "Day2");
/*It will remove 2 items starting from the 3rd index, and it will add the two specified elements
starting from that position. Output: [ 'Monday', 'Tuesday', 3, 'Day1', 'Day2', 'Sunday' ] */

/* Splice returns the deleted items, so you can store them in a variable: let remElements = weekDays.splice(...) */

weekDays.slice(start, end); /* Returns a subarray from the position specified in the first parameter
to the one defined in the second one. The second parameter is not necessary */
 
weekDays.slice(2, 4); //Output: [3, 4];
weekDays.slice(2); //Output: [ 3, 4, [ 'Friday', 'Saturday' ], 'Sunday' ]

let months = ["January", "February", "March"];

let twoArrays = weekDays.concat(months); //Joins two or more arrays.
console.log(twoArrays); //Output ['Monday', 'Tuesday', 3, 4, [ 'Friday', 'Saturday' ], 'Sunday', 'January', 'February', 'March']

let threeArrays = array1.concat(array2, array3);

weekDays.copyWithin(target, start, end);

weekDays.fill(element); //Replaces all the items in the array for the element in the parameter



//Search methods ------------------------------------------------------

weekDays.indexOf(item, fromIndex); /* Returns the index where the specified item is stored in 
If the second parameter is specified, it will start to search from the specified index */



//Order and reverse methods ----------------------------------------------

weekDays.reverse(); //Reverses the array



//Array destructuring ----------------------------------------------------

let numbers = [1, 2, 3];

let [n1, n2, n3] = [...numbers];
/* We have declared an array called "numbers", with 3 items. Then, we declared three variables (n1, n2 and n3)
and assigned them the values of the array numbers. So, n1 = 1, n2 = 2 and n3 = 3 */

let [n1, n2, n3, n4] = [...numbers]; /* We declare 4 variables but in the array there are only 3 items,
so the variable n4 doesn't acquire any value (undefined) */

numbers.push(4) //Now numbers = [1, 2, 3, 4]
let [n1, n2, n3] = [...numbers] //The three variables keep storing only 1 value each, so the fourth element in "numbers" doesn't store in any of them

let a, b, c;

[a, b, ...c] = [1, 2, 3, 4, 5] /* Here, we treated the variable "c" as an array by typing three dots in the value assignation 
Because that, while the variables "a" and "b" store one value each (1 and 2), the variable "c" will store the remaining ones (3, 4, 5) */