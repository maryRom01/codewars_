function isPalyndrome(str){
    let fl = true;
    str.toLowerCase().split('').map((item, index, arr) => {
        (item !== arr[arr.length - 1 - index]) ? fl = false : console.log();
    })
    return fl;
}

console.log(isPalyndrome("Dermatoglyphics"));
console.log(isPalyndrome("aba"));
console.log(isPalyndrome("moOse"));
console.log(isPalyndrome("moOom"));
console.log(isPalyndrome(""));
console.log(isPalyndrome("isIsogram"));