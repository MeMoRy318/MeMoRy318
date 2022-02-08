// Створити пустий масив та :
let arr = []
let arr1 = []
//    a. заповнити його 50 парними числами за допомоги циклу.
//    b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i <= 49; i++){
     i % 2 === 0 ? arr[i] = i : arr1[i] = i
}
console.log(arr)
console.log(arr1)
// Заповнити масив 20ма рандомними числами
let ar = []
for (i = 0; i <= 19; i++){
    ar[i]= Math.floor(Math.random()*100)
}
console.log(ar)
// Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (i = 0; i <= 19;i++){
    ar[i] = Math.floor(Math.random() * (732 - 8 ) + 8)
}
console.log(ar)
// 2. Вивести за допомогою console.log кожен третій елемен
 for (i = 0; i <= ar.length; i++){
    if (i % 3 === 0){
        console.log(ar[i])
    }
 }
 // Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (i = 0;i <= ar.length;i++){
    if(i % 3 === 0 && ar[i] % 2 === 0){
        console.log(ar[i])
    }
}
 let arrr = [100,250,50,168,120,345,188]
//Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.
let a = 0;
for (time of arrr){
    a = a + time
}
a = a / arrr.length
console.log(a)
 // Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr2 = []
let arre = []

for (i = 0; i <= 19; i++){
    arr2[i] = Math.floor(Math.random()*100)
    arre[i] = arr2[i]* 5
}
console.log(arre)
 // Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
 // і якщо елемент є числом - додати його в інший масив.
 let s = [21,5443,34,"32",[],{}]
 let d = []
for (i = 0; i < s.length; i++){
    if (typeof s[i] === "number"){
        d[i] = s[i]
    }
}


    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let array = []
     for (i = 0; i < usersWithId.length; i++){
         if ( usersWithId[i].id === citiesWithId[0].user_id ){
             usersWithId[i].address = citiesWithId[i]
             array.push(usersWithId[i])
         }
         else if (usersWithId[i].id === citiesWithId[1].user_id){
             usersWithId[i].address = citiesWithId[i]
             array.push(usersWithId[i])

         }
         else if (usersWithId[i].id === citiesWithId[2].user_id){
             usersWithId[i].address = citiesWithId[i]
             array.push(usersWithId[i])

         }
         else if (usersWithId[i].id === citiesWithId[3].user_id){
             usersWithId[i].address = citiesWithId[i]
             array.push(usersWithId[i])

         }
     }
console.log(array)
// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let c = [ 22,11,56,77,44,20,80,1,3,12,]
for (time of c){
    if (time % 2 === 0){
        console.log(time)
    }
}
let xxx = []
// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу
// скопіювати значення одного масиву в інший.
for (time of c){
    xxx.push(time)
}
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let abc = [ 'a', 'b', 'c']
let string = ""
for ( i = 0; i < abc.length; i++ ){
    string = string + abc[i]
}
console.log(string)
while (i < abc.length){
    string = string + abc[i]
    i++
}
console.log(string)

mas = [ 'a', 'b', 'c'];
str = "";
for (string in mas){
    str = str + mas[string];
}
console.log(str);

mas = [ 'a', 'b', 'c'];
str = "";
for (string of mas){
    str = str + string
}
console.log(str)
