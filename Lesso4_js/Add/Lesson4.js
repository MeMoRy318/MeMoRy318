let arrTest = [1,2,3,4]
let arrTestTwo =[2,3,4,5]
let usersInfo = [{name: 'Dima', age: 13}, {model: 'Camry'},]

// створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.
let calculator = (...number)=>{
    if (number.length === 2){
       let result = number[0]+ number[1]
        console.log(result)
    } else{
        console.log(number[0])
    }
}
calculator(2,1)
// створити функцію  яка приймає два масиви та скаладає значення елементів з
// однаковими індексами  та повертає новий результуючий масив.
let calculatorArr = (arrOne,arrTwo) =>{
    let arrTestReslt = []
    for (let i = 0; i < arrOne.length; i++){
        arrTestReslt[i] = arrOne[i] + arrTwo[i]
    }
    return arrTestReslt;
}
console.log(calculatorArr(arrTest,arrTestTwo))
// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
 let = returnsArrayKeys = (arrKey)=>{
    let keys = []
    for (let key in arrKey) {
        keys.push(Object.keys(arrKey[key]));
    }
return keys;
}
console.log(returnsArrayKeys(usersInfo))
// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

let = returnsArrayVal = (arrVal)=>{
    let values = []
    for (let key in arrVal) {
        values.push(Object.values(arrVal[key]));
    }
    return values;
}
console.log(returnsArrayVal(usersInfo))