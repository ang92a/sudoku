const path = require('path');
const { EOL } = require('os');

// Функция для чтения файла и преобразования его в массив символов
function read() {
  // Читаем содержимое файла и убираем пробелы и переносы строк
  const readFile = fs.readFileSync((__dirname, './puzzles.txt'), 'utf-8').split(/\s/).join("");
  // Разбиваем строку на массив символов
  return readFile.split('');
}

// Функция для решения одного судоку
function solveSudoku(sudoku) {
  // Возможные числа для заполнения клеток судоку
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Функция для проверки возможности установки числа в клетку
  function isValidMove(row, col, num) {
    // Проверяем, что число num не встречается в текущей строке и столбце
    for (let i = 0; i < 9; i++) {
      if (sudoku[row][i] === num || sudoku[i][col] === num) {
        return false;
      }
    }

    // Проверяем, что число num не встречается в текущем блоке 3x3
    const blockStartRow = Math.floor(row / 3) * 3;
    const blockStartCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (sudoku[blockStartRow + i][blockStartCol + j] === num) {
          return false;
        }
      }
    }

    // Если число num не встречается в текущей строке, столбце и блоке, возвращаем true
    return true;
  }

  // Функция для рекурсивного решения судоку
  function solve() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (sudoku[row][col] === '-') {
          // Если клетка пуста, пробуем установить числа от 1 до 9
          for (let num of numbers) {
            if (isValidMove(row, col, num)) {
              // Если число подходит, устанавливаем его и рекурсивно вызываем solve
              sudoku[row][col] = num;
              if (solve()) {
                return true;
              }
              // Если решение не найдено, возвращаемся и пробуем следующее число
              sudoku[row][col] = '-';
            }
          }
          // Если все числа пробованы и ни одно не подходит, возвращаемся
          return false;
        }
      }
    }
    // Если все клетки заполнены, решение найдено
    return true;
  }

  // Начинаем решение судоку
  solve();
}

// Функция для решения массива судоку
function solve(str) {
  // Массив для хранения решенных судоку
  const resultArray = [];

  // Разбиваем строку на 15 блоков, каждый из которых содержит 9 строк
  for (let i = 0; i < 15; i++) {
    const subArray = [];
    for (let j = 0; j < 9; j++) {
      // Выбираем каждую строку блока
      const innerSubArray = str.slice(i * 81 + j * 9, i * 81 + (j + 1) * 9);
      subArray.push(innerSubArray);
    }
    // Добавляем блок в массив
    resultArray.push(subArray);
  }

  // Решаем каждый судоку в массиве
  for (let i = 0; i < resultArray.length; i++) {
    solveSudoku(resultArray[i]);
  }

  return resultArray.slice();
}

// Читаем файл и решаем судоку
const file1 = read();
const solvedSudoku = solve(file1);
