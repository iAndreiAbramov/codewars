// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// My design
function switcheroo(x){
 return x.split('').map(item => {
   switch(item) {
    case 'a': return 'b'
    case 'b': return 'a'
    default: return item
   }
 }).join('')
}

// Top design
// function switcheroo(x) {
//   return x.replace(/[ab]/g, x => x == "a" ? "b" : "a")
// }

console.log(switcheroo('abc'));
console.log(switcheroo('aaabcccbaaa'));
console.log(switcheroo('ccccc'));

// const str1 = 'abc'
// const str2 = 'aaabcccbaaa'
// const str3 = 'ccccc'

// console.log(str1.match(/[ab]/g))
// console.log(str2.match(/[ab]/g))
// console.log(str3.match(/[ab]/g))