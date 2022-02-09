// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculationRectangle(a,b){
    let reslt = a * b
    return reslt;
}
 // створити функцію яка обчислює та повертає площу кола з радіусом r
function calculateCircle(a){
    let r = a ** 2
    let result = r * 3.14
    return result;
}
// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calculateCylinder( h,r){
    let a = 3.14**2
    let b = h * r
    return b * a

}
// створити функцію яка приймає масив та виводить кожен його елемент
function outputArray(a){
    for (let time of a){
        console.log(time)
    }
}
// створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(a){
    document.write(`<p>${a}</p>`)
}

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulBed( a ) {
   document.write(`<ul>`)
   document.write(`<li>${a}</li>`)
   document.write(`<li>${a}</li>`)
   document.write(`<li>${a}</li>`)
   document.write(`</ul>`)
}
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//  Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function numbeRulBed(a,b){
    for (i = 0; i < a; i++){
        ulBed(b)
    }
}
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arraYulBed (a){
    document.write(`<ul>`)
    for (i = 0; i < a.length;i++){
        document.write(`<li>${a[i]}</li>`)

    }
    document.write(`</ul>`)
}
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
function arraBloc (a) {
    for (i = 0; i < a.length; i++){
        document.write(`<div>${a[i].id} ${a[i].name} ${a[i].age}</div>`)
    }
}

