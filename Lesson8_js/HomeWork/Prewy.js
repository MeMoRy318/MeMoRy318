// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     Напишіть код,  котрий :
//  отримує текст з параграфа з id "content"
let textContent = document.getElementById("content")
console.log(textContent.innerText)
//  отримує текст з блоку з id "rules"
let textRules = document.getElementById("rules")
console.log(textRules.innerHTML)
//  замініть текст параграфа з id 'content' на будь-який інший
textContent.innerHTML = `<strong>Lorem ipsum dolor sit amet.</strong>`
//  замініть текст параграфа з id 'rules' на будь-який інший
textRules.innerHTML = `<h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>`
//  змініть кожному елементу колір фону на червоний
let begraun = document.body.children
for (const children of begraun){
    children.style.backgroundColor = `red`
}
//  змініть кожному елементу колір тексту на синій
for (const time of begraun){
    time.style.backgroundColor = `blue`
}
//  отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(textRules.classList)
//  поміняти колір тексту у всіх елементів fc_rules на червоний
let color = document.getElementsByClassName('fc_rules');
for (const children of color ){
    children.style.color = `red`
}