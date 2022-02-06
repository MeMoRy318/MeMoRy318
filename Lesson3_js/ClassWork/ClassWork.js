// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr = [2,17,13,6,22,31,45,66,100,-18]
// перебрати його циклом while
let i = 0
while ( i < arr.length){
    console.log(arr[i])
    i++
}
// перебрати його циклом for
for ( i = 0; i < arr.length; i++){
    document.write(`${arr[i]} <br>`)
}
// перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0
document.write(`<ol>`)
while (i < arr.length){
    if (i % 2 !== 0){
        document.write(`<li>${arr[i]}</li>`)
    }
    i++
}
document.write(`</ol>`)
// перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = 0; i < arr.length;i++){
    if( i % 2 !== 0)
        document.write(`<div>${arr[i]}</div>`)
}
 // перебрати циклом while та вивести  числа тільки парні  значення
i = 0
while (i < arr.length){
    if (arr[i] % 2 === 0 ){
        document.write(`<div>${arr[i]}</div>`)
    }
    i++
}
// перебрати циклом for та вивести  числа тільки парні  значення
document.write(`<ol>`)
for (i = 0; i < arr.length;i++){
    if (arr[i] % 2 === 0){
        document.write(`<li>${arr[i]}</li>`)
    }
}
// замінити кожне число кратне 3 на слово "okten"
document.write(`<ol>`)
for (i = 0; i < arr.length; i++){
    if (arr[i] % 3 ===0 ){
        arr[i] = "Okten"
        document.write(`<div>${arr[i]}</div>`)
    }
}
// вивести масив в зворотньому порядку.
let arrr = [2,17,13,6,22,31,45,66,100,-18]

document.write(`<ol>`)
for (i = arrr.length-1;i >= 0 ; i--){

    document.write(`<li>${arrr[i]}</li>`)
}
document.write(`</ol>`)
// всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// перебрати його циклом while
i = 0
i = arrr.length-1;
while ( i >= 0){
    document.write(`<div>${arrr[i]}</div>`)
    i--
}
// перебрати його циклом for

document.write(`<ol>`)
for (i = arrr.length-1;i >= 0 ; i--){

    document.write(`<li>${arrr[i]}</li>`)
}
document.write(`</ol>`)
 // перебрати циклом while та вивести  числа тільки з непарним індексом
i = arrr.length-1
while (i >= 0){
    if (i % 2 !==0){
        document.write(`<div>${arrr[i]}</div>`)
    }
    i--
}
// перебрати циклом for та вивести  числа тільки з непарним індексом
document.write(`<ol>`)
for (i = arrr.length-1; i >= 0; i--){
    if (i % 2 !==0 ){
        document.write(`<li>${arrr[i]}</li>`)
    }
}
document.write(`</ol>`)
// перебрати циклом while та вивести  числа тільки парні  значення
i = arrr.length-1
while (i >= 0){
    if (arrr[i] % 2 === 0){
        document.write(`<div>${arrr[i]}</div>`)
    }
    i--
}
// перебрати циклом for та вивести  числа тільки парні  значення
document.write(`<ol>`)
for (i = arrr.length-1; i >= 0; i--){
    if (arrr[i] % 2 === 0){
        document.write(`<li>${arrr[i]}</li>`)
    }
}
document.write(`</ol>`)
 // замінити кожне число кратне 3 на слово "okten"
for (i = arrr.length-1; i >= 0; i--){
    if (arrr[i] % 3 === 0){
        arrr[i] = "okten"
        document.write(`<div>${arrr[i]}</div>`)
    }
}




