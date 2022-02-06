// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arr = [[32,64,75,32,22],["name","usser","lesson","okten","shcool"],[true,false,"1","2","3"]]
console.log(arr)
for (let time of arr[0]){
    console.log(time)
}
for (let time of arr[1]){
    console.log(time)
}
for (let time of arr[2]){
    console.log(time)
}
// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arrr = []
arrr[0] = 21
arrr[1] = 31
arrr[2] = 41
arrr[3] = 51
arrr[4] = "52"
arrr[5] = true
for (let time of arrr) {
    console.log(time)
}
// а допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++ ){
document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eos?
</div>`)
}
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++){
    document.write(`<div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eos? ${i}</div>`)
}
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let index =0;
while ( index < 20){
    document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eos?</h1>`)
    index++
}
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let b = 0;
while ( b <20){
    document.write(`<h1> ${b}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, </h1>`)
    b++
}
// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let a = [32,11,56,87,90,12,44,22,99,11,]
for (let i = 0; i < a.length; i++ ){
    console.log(a[i])
}
// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let str = ["product","kard","index","name","okten","title","age","status","home","work"]
for (let i = 0; i < str.length; i++){
    console.log(str[i])
}
// Створити масив з 10 елементів числового, стірчкового і булевого типу.
//     За допомогою if та typeof вивести тільки булеві елементи
let array = [true,"one","produckt","a","b",false,1,2===2,[],55,900]
for (let i = 0; i < array.length; i++){
    if(typeof array[i] === "boolean"){
        console.log(array[i])
    }
}
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let ar = [21,44,77,true,false,"55",90,"654",12,54,]
for (let i = 0; i < ar.length; i++){
    if (typeof ar[i] === "number")
        console.log(ar[i])
}
// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arrays = [[],true,23,"age","name","okten",false,{},89,"22"]
for (let i = 0; i < arrays.length; i++){
    if(typeof arrays[i] === "string")
        console.log(arrays[i])
}
// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let d = []
d[0] = []
d[1] = {}
d[2] = true
d[3] = false
d[4] = 121
d[5] = 23
d[6] = "age"
d[7] = "name"
d[8] = 11
d[9] = 44
for (let time of d){
    console.log(time)
}
// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
let step = "Крок"
for (let i = 1 ; i <= 10; i++){
    console.log("крок " + i + "")
    document.write(`${step} ${i} <br>`)
}
// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер
// кроку через console.log та document.write
for (let i = 1; i <= 100;i++) {
    console.log(`${step} ${i} `)
    document.write(`${step} ${i} <br>`)
}
// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через
//    console.log та document.write
for (let i = 1; i <= 100; i += 2){
    console.log(`${step} ${i}`)
    document.write(`${step} ${i} <br>`)
}
 // Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log +
 //   document.write
for (let i = 0;i <= 100; i++){
    if ( i % 2 === 0 ){
        console.log(`${step} ${i}`)
        document.write(`${step} ${i} <br>`)
    }
}
// Створити цикл for на 100 ітерацій. Вивести тільки
// непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++){
    if(i % 2 ===1){
        console.log(`${step} ${i}`)
        document.write(`${step} ${i} <br>`)
    }
}