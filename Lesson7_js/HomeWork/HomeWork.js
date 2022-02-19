let a = document.head.getElementsByTagName("meta")
//=========================================звертаэться до всих тегив мета в хеди
let b = document.body.getElementsByTagName("div")
//==========================================звертаэться до всих тегив div в в Body

for (const time of a){
    console.log(time)
//============================================= итеруэ атрибути тегу
    console.log(time.attributes)
    let attributes = time.attributes
    for (const att of attributes){
        console.log(att, att.value)
//==================================================== итеруэ атрибути Value

    }

}
console.log(document.body.children)
//================================звертаэться до дочерних тегив боди
console.log(document.title)
// звертаэться до контенту тега тайтил
console.log(document.body.getElementsByClassName("fc"))
// ================================звертаэться до clasu в боди и виводить нам масив
let x = document.body.getElementsByClassName("fc")
//====================================добавляэ клас в тег див
x[0].classList.add("xxx")
//====================================уддаляэ клас в тег див
x[0].classList.remove("xxx")
//======================================== стализуэ див
x[0].style.background = "red"
//заминяэ контент тегу див з тегом
x[0].innerHTML = "<h1>Lorem ipsum dolor sit amet.</h1>"
// ================================звертаэться до id
document.getElementById("rules")
//=================================знаходить перший kлас знаходить один елемент навить яшо вин не уникальний
document.querySelector(`body > .wrap > .product`)// nodList
//=================================знаходить перший kлас знаходить вси елементи навить яшо винb уникальни
document.querySelectorAll(`body > .wrap > .product`)// nodList
//  отримати весь список класів елемента з id=rules і вивести їх в console.log
let textRules = document.getElementById("rules")
console.log(textRules.classList)

