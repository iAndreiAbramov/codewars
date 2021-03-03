// Problem
// b boys and g girls went to the cinema and bought tickets for consecutive seats in the same row. Write a function that will tell you how to sit down for boys and girls, so that at least one girl sits next to each boy, and at least one boy sits next to each girl.
// The format of the input data
// The input contains two numbers: b and g (both numbers are natural).
// Output format
// The function should return any string that contains exactly b characters 'B' (denoting boys) and g characters 'G' (denoting girls), satisfying the condition of the problem. You do not need to print spaces between characters. If it is not possible to seat boys and girls according to the task conditions, the function should return null, None, etc. depending on programming language.

// cinema(1,1) === "BG" (the result like "GB" is also valid)
// cinema(5,5) === "BGBGBGBGBG" (the result like "GBGBGBGBGB" is also valid)
// cinema(5,3) === "BGBGBBGB" (the results like "BGBBGBBG" or "BGBBGBGB" and so on are also valid)
// cinema(3,3) === "BGBGBG" (the result like "GBGBGB" is also valid)
// cinema(100,3) === null

function cinema(boys, girls) {
  const rowLength = boys + girls;
  const counter = {'B': boys, 'G': girls};
  const row = [];
  let currentMale;
  let result;

  function defineNextMale() {
    if (counter[currentMale] === 0) {changeCurrentMale()}
    else if ((/BB$/).test(result) || (/GG$/).test(result)) {changeCurrentMale()}
    else if (getRatioBG() >= 1 && getRatioBG() <= 1.5) {changeCurrentMale()}
    else if (getRatioBG() > 1.5 && counter[currentMale] < counter['B'] + counter['G'] - counter[currentMale]) {changeCurrentMale()};
  }

  function changeCurrentMale() {
    currentMale = (currentMale === 'B') ? 'G' : 'B';
  }

  function getRatioBG() {
    let ratio = Math.max(counter['B'], counter['G']) / Math.min(counter['B'], counter['G']);

    return ratio;
  }

  function pushCurrentMale() {
    row.push(currentMale);
    counter[currentMale] -= 1;
    result = row.join('');
  }

  if (rowLength === 0) return null;
  if (getRatioBG() > 2 || getRatioBG() === 0) return null;

  currentMale = (counter['B'] >= counter['G']) ? 'B' : 'G';
  pushCurrentMale();
  changeCurrentMale();

for (let i = 2; i <= rowLength; i++) {
  pushCurrentMale();
  defineNextMale();
}
  return result;
}

console.log(cinema(3, 4));
// console.log(cinema(3, 6));