/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/


// const regex = /[aeiouAEIOU]/gi;
// console.log(disemvowel("This website is for losers LOL!"));

// function disemvowel(str) {
//     let newStr = str.replaceAll(regex, '')
//   return newStr;
// }

function disemvowel(str) {
  const regex = /[aeiouAEIOU]/gi;
  let newStr = str.replaceAll(regex, '');
  return newStr;
}