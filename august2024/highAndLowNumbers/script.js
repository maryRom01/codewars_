/**
 * https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
 * 
 * n this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
 */

function highAndLow(numbers){
    const array = numbers.split(' ').map(Number).sort(function(a, b){ return b - a });
    return array[0].toString() + " " + array[array.length - 1];
}

console.log(highAndLow("1 9 3 4 -5"));
console.log(highAndLow("1 2 -3 4 5"));