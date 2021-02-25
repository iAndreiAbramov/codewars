// Digit Recovery
// Some letters in the input string are representing a written-out digit. Some of the letters may randomly shuffled. Your task is to recover them all.
// Note that:
// Only consecutive letters can be used. "OTNE" cannot be recovered to 1!
// Every letter has to start with an increasing index.. "ONENO" results to 11, because the E can be used two times. Endless loops are not possible!
// If there are letters in the string, which don't create a number you can ignore them.
// If no digits can be found, return "No digits found"
// Take care about the order! "ENOWT" will be recovered to 12 and not to 21.
// The input string consists only UpperCase letters
// e.g.
// recover("NEO") =>  "1"
// recover("ONETWO") => "12"
// recover("ONENO") => "11"
// recover("TWWTONE") => "21"
// recover("ZYX") => "No digits found"
// recover("NEOTWONEINEIGHTOWSVEEN") => "12219827"

function recover(str) {

  const alph = {"ZERO":0,"ONE":1,"TWO":2,"THREE":3,"FOUR":4,"FIVE":5,"SIX":6,"SEVEN":7,"EIGHT":8,"NINE":9};
  const overlap = [];
  let currentSubstring;

  function checkOverlap(currentSubstring, item) {
    const itemLetters = item.split('').sort();
    const substringLetters = currentSubstring.split('').sort();
    if (item.length === currentSubstring.length) {
      for (let n = 0; n < item.length; n++) {
        if (itemLetters[n] != substringLetters[n]) return false;
      }
    } else {
      return false;
    }
    return true;
  }

  for (let i = 0; i < str.length - 2; i++) {
    for (let j = 3; j <= 5; j++) {
      currentSubstring = str.substr(i, j);
      for (let item in alph)  {
        if (checkOverlap(currentSubstring, item)) {
          overlap.push(alph[item]);
          j = 5;
          break;
        }
      };
    }
  }

  return (overlap.length === 0) ? "No digits found" : overlap.join('');
}

console.log(recover("NEO"),"1");
console.log(recover("ONETWO"),"12");
console.log(recover("TWWTONE"),"21");
console.log(recover("ZYX"),"No digits found");
console.log(recover("ONENO"),"11");
console.log(recover("NEOTWONEINEIGHTOWSVEEN"),"12219827");