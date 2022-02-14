// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let a = 'hello world'
console.log(a.length)
console.log(a.toUpperCase())
let b = 'lorem ipsum'
console.log(b.length)
console.log(b.toUpperCase())
let c = 'javascript is cool'
console.log(c.length)
console.log(c.toUpperCase())
// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let d = 'HELLO WORLD'
console.log(d.toLowerCase())
let e = 'lorem ipsum'
console.log(e.toLowerCase())
let f = 'javascript is cool'
console.log(e.toLowerCase())
// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim())
// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let stringToarray = (str) => str.split(" ")
let g = 'Каждый охотник желает знать';
console.log(stringToarray(g))
 // Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
let substring = (text,indexOne,indexTwo) => text.substring(indexOne,indexTwo);
let st = 'Каждый охотник желает знать';
console.log(substring(st,0,7))
// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-)
// між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let insert_dash = (str)=>{
    let a = str.toUpperCase().split(" ").join("_")
    return a;
}
let tr = "HTML JavaScript PHP";
console.log(insert_dash(tr))
// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього
// регістру у верхній.
let toUpperCase = (string) => {
    let z = string[0].toUpperCase()+string.slice(1)
    console.log(z)
}
let Hello = "hello"
toUpperCase(Hello)
// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str)=>{
    let capitaLize = str.split(" ").map(text => text[0].toUpperCase()+text.slice(1)).join(" ")
    return capitaLize;

}
let text = 'каждый охотник желает знать'
console.log(capitalize(text))


//============================================= additional6.txt===============================================



// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString =(str, n)=>{
    let arrr = []
    for (let i = 0; i < str.length; i += n){
        arrr.push(str.substring(i,n+i))
    }
    return arrr;
}
 console.log(cutString('наслаждение',3))

//  Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе
//  :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2
// символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,
// some@EMAIL.com, і тд - однакові значення)

let email = (someemail) =>{
    let x = someemail.indexOf("@")
    let z = someemail.indexOf(".")
    if (x !== 0 && x !== -1 && x + 2 < z && z !== -1) {
        console.log(true)
    }else {
        console.log(false)
    }
}
email("someemail@gmail.com")
email("someeMAIL@gmail.com")
email("someeMAIL@i.ua")
email("some.email@gmail.com")
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArray = [
    {title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let x = coursesArray.sort((a,b) => b.modules.length - a.modules.length )
console.log(x)

 // Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let count = (str, stringsearch)=> {
    let sss = sstr.split(" ").join("").substring(0,stringsearch).length
     return sss;
}
let sstr = "Астрономия это наука о небесных объектах";
console.log(count(sstr,10))
// Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let cutStrinng = (str, n) => str.split(" ",n).join(" ")
console.log(cutStrinng(sstr,5))
