/* A set is an object similar to an array, but that doesn't admit duplicate values */

// Declaration ----------------------------------------------------

const numberList = new Set();

const numberList = new Set([1, 2, 3]); //A set can be initialized with an array of values
const numberList = new Set(weekDays); //Set initialized with the items of the array weekDays

const numberList = new Set(
  'Numbervalues'
); /* A set can be declared with a String,
but it will store each letter as an item, and will not store the duplicate ones */

//Element addition ------------------------------------------------

numberList.add(1);
numberList.add(2);
numberList.add(3);

console.log(numberList); //Output: Set(3) {1, 2, 3}

/* It doesn't admit duplicate values, so if there's an attempt to do so,
the set will ignore the command */

numberList.add(2);
console.log(numberList); //Output: Set(3) {1, 2, 3}

numberList.add(1).add(2).add(3); //Several values can be added in the same instruction

numberList.add('String element'); //Strings can be added with the add method

//Set size

numberList.size(); //Will return the size of the set

//Delete values

numberList.delete(item); //Deletes the specified item from the set

numberList.clear(); //Removes all the items from the set

//Search for elements

numberList.has(item); //Returns true if the item specified is in the set

//Convert set to array

const array = [...numberList];

//Traverse a set

for (let number in numberList) {
  console.log(number);
}
