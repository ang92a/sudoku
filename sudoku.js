const fs = require('fs');
const path = require('path');
const { EOL } = require('os');

function read() {
  const readFile = fs.readFileSync(
    path.join(__dirname, './puzzles.txt'),
    'utf-8',
  );
  return readFile;
}

const readresult = read();

function solve(arr) {
  return arr.split('').slice(0, 82);
}

console.log(solve(readresult));

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
