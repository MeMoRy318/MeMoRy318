
// a) додає клас з назвою групи, елементу з ід main_header
let main_header = document.getElementById(`main_header`)
main_header.classList.add(`add`)
main_header.innerText = "додає клас з назвою групи"
// b) робить шириниу елементу ul 400px
let ul = document.body.getElementsByTagName("ul")
ul[0].style.width = `400px`
ul[0].style.border = '1px solid blue'
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName(`linkList`)
for (const li of linkList){
    li.style.width = `50%`
    li.style.border = '1px solid red'
}
// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName(`listElement2`)
listElement2[0].innerText
// e) отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName(`li`)
for (const time of li){
    time.style.background = 'sylver'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let anchor = document.getElementsByTagName(`a`)
for (const anchors of anchor){
    anchors.classList.add(`anchor`)
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
let a = document.getElementsByTagName('a');
for (const as of a) {
    if (as.innerText === 'link3') {
        as.style.fontSize = '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aAll = document.getElementsByTagName('a');
 console.log(aAll);
 for (const aAllElement of aAll) {
     let text = aAllElement.innerText
     aAllElement.classList.add(`element_${text}`)
 }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName(`sub-header`)
for (const subs of subHeader){
    subs.style.background = prompt("Enter color red, green, blue" )
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст
// елемнту = content 2 segment . Колір отримати з prompt()
let sub_Header = document.getElementsByClassName(`sub-header`)

for (const subss of sub_Header){
    if (subss.innerText === `content 2 segment`){
        subss.style.color = prompt(`Enter color red, green, blue`)
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1 = document.getElementsByClassName(`text1`)
content_1[0].innerText = prompt(`text`)
// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName(`p`)
for (const ps of p){
    ps.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName(`text2`)
text2[0].innerText = `sep-2021`