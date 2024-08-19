// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
    let count = 0;
    return s.split('')
        .map(c => c.toUpperCase())
        .map(c => {
            let str = '';
            for (let i = 0; i < count; i++) {
                str+= c.toLowerCase();
            }
            count++;
            return c.concat(str);
        })
        .join("-");
}

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));