// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, truд, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write
let hello = "hello",
    aString = "owu",
    bString = "com",
    cString = "ua",
    aInt = 1,
    bInt = 10,
    cInt = -999,
    dInt = 123,
    aFloat = 3.14,
    bFloat = 2.7,
    eInt = 16,
    aBoolean = true,
    bBoolean = false;
// Вивести кожну змінну за допомогою: console.log
console.log(hello + " " + aString + " " + bString + " " + cString + " " + aInt + " " + bInt + " " + cInt + " " + dInt + " " + aFloat + " " +
    bFloat + " " + eInt + " " + aBoolean + " " + bBoolean);

// Вивести кожну змінну за допомогою: alert

alert(hello + " " + aString + " " + bString + " " + cString + " " + aInt + " " + bInt + " " + cInt + " " + dInt + " " + aFloat + " " +
    bFloat + " " + eInt + " " + aBoolean + " " + bBoolean);
// Вивести кожну змінну за допомогою: alert

// Вивести кожну змінну за допомогою document.write
document.write(`<div> ${hello + " " + aString + " " + bString + " " + cString + " " + aInt + " " + bInt + " " + cInt + " " + dInt + " " + aFloat + " " +
bFloat + " " + eInt + " " + aBoolean + " " + bBoolean}</div>`)

// Переприсвоїти кожній змінній з завдання значення.
    hello = "a",
    aString = "b",
    bString = "c",
    cString = "d",
    aInt = 1,
    bInt = 2,
    cInt = -3,
    dInt = 4,
    aFloat = 5.14,
    bFloat = 6.7,
    eInt = 7,
    aBoolean = false,
    bBoolean = true;

// Вивести кожну змінну за допомогою: console.log
console.log(hello + " " + aString + " " + bString + " " + cString + " " + aInt + " " + bInt + " " + cInt + " " + dInt + " " + aFloat + " " +
    bFloat + " " + eInt + " " + aBoolean + " " + bBoolean);

// Вивести кожну змінну за допомогою: alert
alert(hello + " " + aString + " " + bString + " " + cString + " " + aInt + " " + bInt + " " + cInt + " " + dInt + " " + aFloat + " " +
    bFloat + " " + eInt + " " + aBoolean + " " + bBoolean);

// Вивести кожну змінну за допомогою document.write
document.write(`<div> ${hello + " " + aString + " " + bString + " " + cString + " " + aInt + " " + bInt + " " + cInt + " " + dInt + " " + aFloat + " " +
bFloat + " " + eInt + " " + aBoolean + " " + bBoolean}</div>`)

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person.
let firstName = "Yuriy",
    middleName = "Podusovskiy",
    lastName = "Mikhaylovich";
years = null;

let person = firstName + middleName + lastName;

// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
firstName = prompt("Your name");
middleName = prompt("Your middle name");
lastName = prompt("Your last name");
years = prompt("You are old");

// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
alert(" Витаю " + firstName + " " + middleName + " " + lastName + " Тоби " + years + " рокив");

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)


// Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 === 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 != 10 -> false
// 10 > 10 -> false
// 10 < 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// a = 5;
// document.write(str + a + "<br/>");
// Вывод будет «205» Оскільки спочатку є строковий тип даних, будь-яка змінна,
// яка йде після оператора «+», буде об’єднано з даними . Пимер якщо в нас буде значеня 1+2+ “3” тоді результат буде “33”
// document.write(str - a + "<br/>"); Вывод будет «15»
// document.write(str * "2" + "<br/>"); Вывод будет «40»
// document.write(str / 2 + "<br/>"); Вывод будет «10»
// оскільки оператори '- * / 'призначений тільки для числових, обидва значеня перетворюються на числові і, таким чином,
// дають числову відповідь


