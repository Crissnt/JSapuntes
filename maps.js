//Declaration

const userID = new Map();

//Value assignation

userID.set(1, 'Luis');
userID.set(2, 'Ana');
userID.set(3, 'Peter');

/* If a new element with the same key is added, the old one is removed */

let users = [
  [1, 'Luis'],
  [2, 'Ana'],
  [3, 'Peter'],
];

const userID = new Map(users);

/* It is possible to declare a map with the parameter being an array.
This array must have its elements of array type, and each one of them must be a "key-value" pair */

//Obtain a value from a key

userID.get(2); //Output: Ana

//Search for a key

userID.has(2); //Output: true

//Delete an element

userID.delete(2); //Deletes the key-value pair 2, "Ana"

//Split keys and values in different lists: iterable items

let userIDkeys = userID.keys();
let userIDvalues = userID.values();

//Now we are able to iterate and output the keys and values

for (let keys of userIDkeys) {
  console.log(keys);
}

for (let values of userIDvalues) {
  console.log(values);
}

//Convert maps to arrays

let usersArray = [...userID];

//Traverse maps

for (let users of userID) {
  console.log(user);
}

for (let [user, id] of userID) {
  console.log('User: ' + user + ' ID: ' + id);
}
