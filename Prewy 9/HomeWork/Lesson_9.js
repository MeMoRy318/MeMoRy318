// Все робити за допомоги js.
// створити блок,
// додати йому класи wrap, collapse, alpha, beta
// додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// додати цей блок в body.
// клонувати його повністю, та додати клон в body.
let div = document.createElement("div")
div.classList = "wrap, collapse, alpha, beta"
div.style.background = 'silver';
div.style.color = 'red';
div.style.fontSize = '36px';
let clone = div.cloneNode(true)
document.body.append(div,clone)
// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
 let arrr = ['Main','Products','About us','Contacts']
for (let ar of arrr){
    let li = document.createElement("li")
    li.innerText =`${ar}`
  document.getElementsByClassName("menu")[0].append(li)

}
//  Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for(let courses of coursesAndDurationArray){
    let div_1 = document.createElement("div")
    div_1.innerHTML = `<p>${courses.title}</p> <p>${courses.monthDuration}</p>`
    document.body.append(div_1)
}
// Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (let cours of coursesAndDurationArray){
    let div_item = document.createElement("div")
    div_item.classList.add("item")

    let h1 = document.createElement("h1")
    h1.classList.add('heading')
    h1.innerText = `${cours.title}`

    let p = document.createElement("p")
    p.classList.add("description")
    p.innerText = `${cours.monthDuration}`

    div_item.append(h1,p)
    document.body.append(div_item)



}