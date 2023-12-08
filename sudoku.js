
const fs = require('fs')
const path = require('path')
const { EOL } = require('os')

function read() {
  let readFile = fs.readFileSync(path.join(__dirname, './puzzles.txt'), 'utf-8').trim().split('')
  return readFile
}

let file1 = read()
console.log(file1)
console.log(file1.length);

function solve(str) {
  const resultArray = [];

  for (let i = 0; i < 15; i++) {
    const subArray = [];
    for (let j = 0; j < 9; j++) {
      const innerSubArray = file1.slice(i * 81 + j * 9, i * 81 + (j + 1) * 9);
      subArray.push(innerSubArray);
    }
    resultArray.push(subArray);
  }

  return resultArray;
}

console.log(solve(file1));
const allArr = solve()

// function isSolved() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//    * Возвращает булевое значение — решено это игровое поле или нет.
//    */
// }

// function prettyBoard() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//    * Выводит в консоль/терминал судоку.
//    * Подумай, как симпатичнее его вывести.
//    */
// }
