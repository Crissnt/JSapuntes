//Advanced array sorting

const words = ['Mars', 'native', 'page', 'Swear', 'whisper'];

words.sort();

console.log(words); //Output: [ 'Mars', 'Swear', 'native', 'page', 'whisper' ]

/* If we sort an array with just the method 'sort()', it will
be sorted according to the Unicode table */

/* The sort method admits a parameter, which is a callback function.
That function has two parameters that determine the sorting criteria.
To sort an array by the length of its words, we can do the following. */

words.sort((a, b) => a.length - b.length);

/* We are sending as a parameter an anonymous function that would
be equivalent to:
function (a, b) {
    return a.length - b.length;
}

This function returns a positive number if the first word is larger
than the second one, a 0 if both are the same length and a negative number
if the first one is shorter than the second one.
*/

/* We could create a function to store this algorithm so we don't have
to define it in each sort call. */

function shorterFirst(a, b) {
  return a.length - b.length;
}

/* And then call the sorting method */

words.sort(shorterFirst);

/* If we want to alphabetically sort the array we can use the 
method 'localeCompare'. */

words.sort((a, b) => a.localeCompare(b, 'es'));

console.log(words); //Output: [ 'Mars', 'native', 'page', 'Swear', 'whisper' ]
