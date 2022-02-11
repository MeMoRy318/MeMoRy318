let arr = [21,12,23,324,3543,345,3]
let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
// створити функцію яка обчислює та повертає площу прямокутника
let areaRectangle = (a,b)=> a * b;
console.log(areaRectangle(5,5))
// створити функцію яка обчислює та повертає площу кола
let carArea = (radius,p)=> radius**2 * p;
console.log(carArea(2,3.14))
// створити функцію яка обчислює та повертає площу циліндру
let cylinderArea = (radius,p,h)=>2 * p * radius * h;
console.log(cylinderArea(5,3.14,5))
// створити функцію яка приймає масив та виводить кожен його елемент
let iterationArray = (arr,fn)=>fn(arr);
iterationArray(arr,function (arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
})
// створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let createsParagraph = (quantity,text)=>{
    for (let i = 0; i <= quantity; i++){
        document.write(`<p>${text}</p>`)}
}
createsParagraph(5,"Hello")
// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createsUlElementsLi = (text,fn)=>fn(text);
    createsUlElementsLi("hello Everything", function (text){
        document.write(`<ul>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`</ul>`)
    })
// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
 let createsUlElements = (quantity,text) => {
        document.write(`<ul>`)
        for (let i = 0; i <= quantity;i++){
            document.write(`<li>${text}</li>`)
        }
     document.write(`</ul>`)


 };
    createsUlElements(5,"Hello Okten")
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let buildsArrayList = (array)=>{
    document.write(`<ul>`)
    for (let i = 0; i < array.length;i++){
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}
buildsArrayList(arr)
// створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersWithId = (arrObj)=>{
        for (let i = 0; i < arrObj.length;i++){
            document.write(`<div>id: ${arrObj[i].id}</div>`)
            document.write(`<div>name: ${arrObj[i].name}</div>`)
            document.write(`<div>age: ${arrObj[i].age}</div> <br>`)
        }
}
usersWithId(users)













