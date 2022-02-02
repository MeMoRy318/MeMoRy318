// Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
let arr = [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100,
    Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100,
    Math.random() * 100,]

//Скласти результат цих чисел в змінній result.
let result = arr.reduce(function (previousValue, item, index, array) {
    return item + previousValue;
});
console.log(result)

// Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name: "JavaScript",
    numberOfSides: 720,
    genre: "textbook",
}
//Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book1 = {
    name: "Java",
    numberOfSides: 600,
    genre: "textbook",
    author: "David Flanagan"
}

// Створити маис об'єктів book з наступними полями  - назва, ' +'кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт

let arrr = [book = {name: "JavaScript", numberOfSides: 500, genre: "textbook", author: "David Flanagan"},
    book = {name: "Java", numberOfSides: 600, genre: "textbook", author: "David Flanagan"}];
// Вивести кожну книгу як окремий об'єкт
console.log(arrr[0])
console.log(arrr[1])

// Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s
let a = 23,
    b = 10;
let s = a * b;

// Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dc = 4;
let c = 2;
let v = heightC * dc ** c
// прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора
let n = 3 ** c;
let m = 4 ** c;
let k = (n + m) / 5;
