// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// перебрати його циклом while
let arr = [56,132,133,63,22,3,3,66,105,18]
let i = 0
while (i < arr.length){
    console.log(arr[i])
    i++
}
// перебрати його циклом for
for (i = 0; i < arr.length; i++){
    console.log(arr[i])

}
// перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < arr.length){
    if (arr[i] % 2 === 1){
        document.write(`${arr[i]} <br>`);
    };
    i++
};
// перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 1){
        document.write(`${arr[i]} <br>`)
    }
}
// перебрати циклом while та вивести  числа тільки парні  значення
i = 0
while (i < arr.length){
    if (arr[i] % 2 ===0){
        document.write(`${arr[i]} <br>`)
    }
    i++
}
// перебрати циклом for та вивести  числа тільки парні  значення
for (i = 0; i < arr.length; i++){
    if (arr[i] % 2 ===0){
        document.write(`${arr[i]} <br>`)
    }
}
// замінити кожне число кратне 3 на слово "okten"
for (i = 0; i < arr.length; i++){
    if (arr[i] % 3 ===0){
        arr[i] = "okten"
        document.write(`${arr[i]} <br>`)
    }
}
// вивести масив в зворотньому порядку.
let arrr = [56,132,133,63,22,3,3,66,105,18]
i = 0
for ( i = arrr.length-1; i >= 0; i-- ){
    console.log(arrr[i])
}