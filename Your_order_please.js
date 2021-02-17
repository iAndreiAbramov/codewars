function order(words){
  return words.split(' ').sort((a, b) => +a.match(/[1-9]/) - +b.match(/[1-9]/)).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));

console.log("Thiыs".match(/[1-9]/))

