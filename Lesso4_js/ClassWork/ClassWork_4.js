// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNamber (a,b,c){
    if (a < b && a < c){
       console.log(a)
    }else if (b < a && b < c){
        console.log(b)
    }
    else {
        console.log(c)
    }
}
// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNamber (a,b,c){
    if (a > b && a > c){
       console.log(a)
    }else if (b > a && b > c){
        console.log(b)
    }
    else {
        console.log(c)
    }
}
// створити функцію яка повертає найбільше число з масиву
 function maxArrNamber(arr){
    let maxArr = 0
     for (i = 0; i < a.length; i++){
         if (maxArr < a[i]){
             maxArr = a[i]
         }
     }
     return maxArr;
 }
// створити функцію яка повертає найменьше число з масиву
function minArrNamber(arr){
    let minArr = a[0]
     for (i = 0; i < a.length; i++){
         if (minArr > a[i]){
             minArr = a[i]
         }
     }
     return minArr;
 }
// створити функцію яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад [1,2,10]->13
function sumValuesArr(arr){
    let result = 0
    for (i = 0; i < a.length; i++){
        result = result + a[i]
    }
    return result;
}
// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function meanValueArr(arr){
    sumValuesArr(a)
    return sumValuesArr(a) / a.length;

}
// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить
// найбільше (Math використовувати заборонено);
function turnLeastOutMost (arr){
    console.log(maxArrNamber(a))
    return minArrNamber(a)

}
// створити функцію яка заповнює масив рандомними числами
function arrayRandomNumbers(length){
    let arrey =[]
    for (i = 0; i < length; i++){
        arrey[i] = Math.floor(Math.random()*100)
    }
    return arrey;
}
// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
function arrayRandomLimitNumbers(length,limit){
    let arrey =[]
    for (i = 0; i < length; i++){
        arrey[i] = Math.floor(Math.random()*limit)
    }
    return arrey;
}
// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverseOrderArray(array){
    let asd = []
    for (i = array.length-1, u = 0; i >= 0; i-- , u++){
        asd[u]= array[i]
    }
    return asd;
}

