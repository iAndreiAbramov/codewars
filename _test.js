const regexp = /кот/gi
const str = 'Кот терракотового цвета кушает котлету.'

let result = regexp.exec(str);
console.log(result)