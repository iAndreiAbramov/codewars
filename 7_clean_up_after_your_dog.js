// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D
// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.
// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.
// If you do, return 'Clean', else return 'Cr@p'.
// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

// function crap(x, bags, cap){
//   if (x.filter(item => item.includes('D')).length > 0) return 'Dog!!'

//   const f = x => Array.isArray(x) ? Math.max(...x.map(f)) + 1 : 0

//   const crapArr = x.filter(item => item.includes('@'))
//   if (crapArr.length > bags && f(x) > 1) return "Cr@p";
//   if (crapArr.length > 1 && f(x) < 1 && bags < 1) return "Cr@p";

//   const crapAmount = [];
//   let crapMax;
//   if (f(x) > 1) {
//     crapArr.forEach(item => {
//       crapAmount.push(item.reduce((sum, cur) => (cur === '@') ? sum += 1 : sum, 0))
//     })
//     crapMax = Math.max(...crapAmount)
//   } else {
//     crapMax = crapArr.length
//   }
//   if (crapMax > cap) return "Cr@p"
//   return 'Clean'
// }



function crap(x, bags, cap) {
  const overallCap = bags * cap;

  if (x.some(subArray => subArray.includes('D'))) return 'Dog!!';

  let crapCounter = 0;

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (x[i][j] === '@') crapCounter++;
      if (crapCounter > overallCap) return 'Cr@p';
    }
  }

  return 'Clean';
}


console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2), "Clean");
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1), "Cr@p");
console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2), "Dog!!");
console.log(crap(['_','_','_','@','_','_','_','_','_','_','_','_','@','_','_','_','_','_'], 1, 5), "Clean");