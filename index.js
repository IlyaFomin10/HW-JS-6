/*
1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
найти минимальное число в массиве, решение задание должно состоять из одной
строки кода.
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
с двумя методами: increment и decrement. Метод increment должен увеличивать
значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
на 1. Значение счетчика должно быть доступно только через методы объекта,
а не напрямую.
*/

// Task1
arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// function createCounter() {
//   let count = { increment: 0, decrement: 0 };
//   return function () {
//     count.increment++;
//     count.decrement--;
//     return count;
//   };
// }

function createCounter() {
  let currentCount = 0;
  return {
    increment: function () {
      return ++currentCount;
    },
    decrement: function () {
      return --currentCount;
    },
    show: function () {
      return currentCount;
    },
  };
}

const myCount = createCounter();
console.log("Счетчик равен - " + myCount.show());
console.log(myCount.increment());
console.log(myCount.increment());
console.log(myCount.increment());
console.log(myCount.decrement());
console.log("Счетчик равен - " + myCount.show());
