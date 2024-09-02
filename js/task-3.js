"use strict";
// function checkForSpam(message) {
//   const str = message.toUpperCase();
//   if (str.includes("SPAM") || str.includes("SALE")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// function getOrderQuantity(order) {
//   return order.length;
// }
// console.log(getOrderQuantity(["apple", "banana", "orange"]));
// console.log(getOrderQuantity([]));
// console.log(getOrderQuantity(["coffee", "sugar"]));

// function getLastElementMeta(array) {
//   const lastIndex = array.length - 1;

//   const lastElement = array[lastIndex];

//   return [lastIndex, lastElement];
// }

// console.log(getLastElementMeta([10, 20, 30, 40]));
// console.log(getLastElementMeta([true, false, true]));
// console.log(getLastElementMeta([]));

// function getExtremeElements(array) {
//   const firstindex = array[0];
//   const lastElement = array[array.length - 1];
//   return [firstindex, lastElement];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// function getLength(array) {
//   const str = array.join("");
//   return str.length;
// }
// console.log(getLength(["top", "picks", "for", "you"]));

// function calculateEngravingPrice(message, pricePerWord) {
//   const cleanedStr = message.split(" ");
//   const wordsArray = cleanedStr.length;
//   const total = pricePerWord * wordsArray;
//   return total;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// function getSlice(array, value) {
//   const index = array.indexOf(value);
//   if (index === -1) {
//     return [];
//   } else {
//     return array.slice(0, index + 1);
//   }
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//     иву;
//   }

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// const planets = ["asdf", "sd"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function calculateTotalPrice(order) {
//   let total = 0; // Змінна для зберігання загальної суми

//   // Проходимо по всіх елементах масиву order
//   for (let i = 0; i < order.length; i++) {
//     total += order[i]; // Додаємо кожен елемент до total
//   }

//   return total; // Повертаємо загальну суму
// }

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.
// Якщо жодного парного числа немає, то масив має бути пустим.
// Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
// Використовуй цикл for.

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }

// console.log(getEvenNumbers(2, 5));

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].
//
// function checkStorage(storage, item) {
//   const str = item.toLowerCase();
//   for (const bg of storage) {
//     if (bg.toLowerCase() === str) {
//       return `${str} is availabele to order`;
//     }
//   }
//   return "Sorry! We are out of stock!";
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));

// function getCommonElements(array1, array2) {
//   const total = [];

//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       total.push(array1[i]);
//     }
//   }
//   return total;
// }
// console.log(getCommonElements([1, 2, 3], [0, 0, 0]));

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }
  return total;
}
console.log(calculateTotalPrice([1, 2, 3]));

function calculateTotalPrice1(order1) {
  let total = 0;
  for (let index of order1) {
    total += index;
  }
  return total;
}
console.log(calculateTotalPrice([164, 48, 291]));

function sum(a, b) {
  console.log(arguments);
  return a + b;
}

sum(2, 5);

function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

function foo() {
  // У змінній args буде повноцінний масив з усіх аргументів
  const args = Array.from(arguments);
  return args.join("-");
}

console.log(foo(1, 2, 3)); // Поверне "1-2-3"

function createReversedArray() {
  const args = Array.from(arguments);
  return args.toReversed();
}
console.log(createReversedArray(164, 48, 291));

function calculateTax(amount, taxRate = 0.2) {
  return amount * taxRate;
}
console.log(calculateTax(20, 0.5));
