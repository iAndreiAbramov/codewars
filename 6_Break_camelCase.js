// Complete the solution so that the function will break up camel casing, using a space between words.

// solution("camelCasing")  ==  "camel Casing"

function solution(string) {
  return string.replace(/[A-Z]/g, char => ' ' + char);
}

console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result');
console.log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result');