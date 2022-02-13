// Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
 let n1 = 'Harry..Potter'
 let n2 = 'Ron---Whisley'
 let n3 = 'Hermione__Granger'

let string = (text,symbol) =>{
    let a = text.split(symbol)
       return  a.join(" ");
}
console.log(string(n1,"."))
// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100
let generatesArray = (length) => {
    let arr = []
    for (let i = 0; i < length; i ++){
        arr.push(Math.floor(Math.random()*100))
    }
    return arr;

}
console.log(generatesArray(10))
// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
console.log(generatesArray(20).sort((a, b) => a - b))
// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log(generatesArray(30).filter(value => value % 2 ===0))
// створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції)
// . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log(generatesArray(15).map(value => value.toString()))
// створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let sortArr = (arr,direction) =>{
    if (direction === "direction"){
      return  arr.sort((a, b) => a - b)
    }
    else  {
        return  arr.sort((a, b) => b - a)
    }
}
console.log(sortArr(generatesArray(10) ,"direction" ))
// відсортувати його за спаданням за monthDuration
// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)
console.log(sort)
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(filter)
