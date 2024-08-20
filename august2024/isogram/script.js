/**
 * https://www.codewars.com/kata/isograms/
 * 
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

 */

function isIsogram(str){
    return str.length === new Set(str.toLowerCase().split('')).size;
}

console.log(isIsogram("Dermatoglyphics"));  //true
console.log(isIsogram("aba"));              //false
console.log(isIsogram("moOse"));            //false
console.log(isIsogram("moOom"));            //false
console.log(isIsogram(""));                 //true
console.log(isIsogram("isIsogram"));        //false