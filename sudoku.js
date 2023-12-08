const fs = require('fs')
const path = require('path')



function read() {
  let readFile = fs.readFileSync(path.join(__dirname, './puzzles.txt'), 'utf-8').trim().split('')
  return readFile
}

let readFile = read()
console.log (readFile)


function solve(readFile) {
const array = []
for(let i = 0; i < readFile; i++){
array.push(i)
console.log (array)
}
}
solve()
function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
