let arr = [21,12,23,324,3543,345,3]
let arrr = []
let ar = []
let array = [1,2,3]
// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let printSmallestNumber = (nam1,nam2,nam3)=>{
    if(nam1 < nam2 && nam1 < nam3){
        console.log(nam1)
    }
    else if(nam2 < nam1 && nam2 < nam3 ){
        console.log(nam2)
    }
    else {
        console.log(nam3)
    }
}
printSmallestNumber(1,2,3)
// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let displaysLargestNumber = (nam1,nam2,nam3)=>{
    if(nam1 > nam2 && nam1 > nam3){
        console.log(nam1)
    }
    else if(nam2 > nam1 && nam2 > nam3 ){
        console.log(nam2)
    }
    else {
        console.log(nam3)
    }
}
displaysLargestNumber(1,2,3)
// створити функцію яка повертає найбільше число з масиву
let returnsLargestNumberArray = (arr) =>{
    let largestNumber = 0
    for (let i = 0; i < arr.length; i++){
        if (largestNumber < arr[i]){
            largestNumber = arr[i]
        }
    }
    return largestNumber;
}
console.log(returnsLargestNumberArray(arr))
// створити функцію яка повертає найменьше число з масиву
let returnsSmallesNumberArray = (arr) =>{
    let largestNumber = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (largestNumber > arr[i]){
            largestNumber = arr[i]
        }
    }
    return largestNumber;
}
console.log(returnsSmallesNumberArray(arr))
// створити функцію яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад [1,2,10]->13
let plusElementSarray = (arr)=>{
    let result = 0;
    for (time of arr){
        result = result + time
    }
    return result;
}
console.log(plusElementSarray(arr))
// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let returnsAverageValues = (arr)=>{
    let result = 0;
    for (time of arr){
        result = result + time
    }
    return result / arr.length;
}
console.log(returnsAverageValues(arr))
// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
let anyQuantityReturnsLeast = (...number)=>{
    let max = 0
    let min = number[0]
    for (let i = 0; i < number.length; i++){
        if ( max < number[i]){
            max = number[i]
        }
        if ( min > number[i]){
            min = number[i]
        }
    }
    console.log(max)
    return min
}
console.log(anyQuantityReturnsLeast(1,2,3,4,5,6,7))
// створити функцію яка заповнює масив рандомними числами
let fillsArrayRandomNumbers = (length,arr) =>{
    for (let i = 0; i < length; i++){
        arr.push(Math.floor(Math.random()*100))
    }
    return arr;
}
console.log(fillsArrayRandomNumbers(11,arrr))
// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
let fillsArrayRandomLimit = (length,limit,arr )=>{
    for (let i = 0; i < length; i++){
       arr.push(Math.floor(Math.random()*limit))

    }
    return arr;

}
console.log(fillsArrayRandomLimit(10,1000,ar))
// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrayReverseOrder = (arr)=>{
    let newAreys = []
    for (i = arr.length-1, u = 0; i >= 0; i--, u++ ){
        newAreys[u] = arr[i]
    }
    return newAreys;
}
console.log(arrayReverseOrder(array))

