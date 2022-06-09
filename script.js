// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы в консоль.
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите в консоль столбец тех элементов массива, которые больше 3-х, но меньше 10.

let y = [2, 5, 9, 15, 0, 4];

for (i = 0; i < y.length; i++) {
  if (y[i] > 3 && y[i] < 10) {
    console.log(y[i]);
  }
}

//  Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let a = [10, 20, 30, 50, 235, 3000];

for (i = 0; i < a.length; i++) {
  let b = String(a[i]);
  let c = b[0];
  if (c == 1 || c == 2 || c == 5) {
    console.log(b);
  }
}

// Дан массив [1,2,45,"hello", 233, 100, "world", 45]. Переберите массив так чтоб у вас в консоли были только числа

let mixedArr = [1, 2, 45, "hello", 233, 100, "world", 45];

for (let i = mixedArr.length - 1; i >= 0; i--) {
  if (typeof mixedArr[i] == "number") {
    array.splice(i, 1);
    console.log(mixedArr[i]);
  }
}

//  Составьте массив дней недели. С помощью цикла выведите выходные дни в консоль.
let week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (i = 0; i < week.length; i++) {
  if (week[i] == "Saturday" || week[i] == "Sunday") {
    console.log(week[i]);
  }
}
