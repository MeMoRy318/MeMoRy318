// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті
// години попадає число (в першу, другу, третю или четверту частину години).
let time = +prompt("leads minutes from 0 to 59");
if (time <= 14 || time === 0 ) {
    alert( time +" попадає число в першу")
}
else if(time <= 29 || time === 15){
    alert(time +" попадає число в другу")
}
else if( time <= 44 || time === 30){
    alert(time + " попадає число в третю")

}
else if( time <= 59 || time === 45){
    alert(time + " попадає число в чеверту")
}
else {
    alert("Error entering values from 0 to 59")
}
// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
//    потрапляє це число (у першу, другу чи третю).
let day = +prompt("leads day from 1 to 31")
if ( day <= 10 && day >= 1 ){
    alert( day +" потрапляє це число у першу половину декаду")
}
else if ( day <= 20 && day >= 11 ){
    alert( day +" потрапляє це число у другу половину декаду")
}
else if ( day <= 31 && day >= 21 ){
    alert( day +" потрапляє це число у третю половину декаду")
}
else {
    alert("Error entering values from 1 to 31")
}

// У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.Перевірте роботу
//  скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = true;
test === true ? alert('Вірно') : alert( 'Неправильно')
test !== true ? alert('Вірно') : alert( 'Неправильно')

// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
// що дорівнює 1, 0, -3
let a = +prompt( "keep the number 1, 0, -3") !== 0 ? alert('Вірно') : alert( 'Неправильно')

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день.
let b = +prompt("keep the number 1 to 7")
switch (b){
    case 1:
        alert("walk the dogs");
        break;
        case 2:
        alert("go on a diet");
        break;
        case 3:
        alert("enroll in the gym");
        break;
        case 4:
        alert("go on a diet");
        break;
        case 5:
        alert("walk the dogs");
        break;
        case 6:
        alert("house cleaning");
        break;
        case 7:
        alert("weekend");
        break;
    default:
        alert("I do not know such values")
}

// Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let days = +prompt("to lead the day of the year")
    if ( days % 2 === NaN){
        alert("Високосний")
    }
    else {
        alert( "Не Високосний")
    }
// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let c = prompt("Яка «офіційна» назва JavaScript?")
if( c === "ECMAScript" ) {
    alert("«Правильно!»")
}
else {
    alert("Не знаєте? ECMAScript!")
}