// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone ) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
}
let user = [
new User(1,"vasya","ivanov","asda@gmail.com",Math.floor(Math.random()*100000000)),
new User(2,"Tanya","Sagaly","xxxgmail.com",Math.floor(Math.random()*100000000)),
new User(3,"Vika","Pupkin","hjkhjkgmail.com",Math.floor(Math.random()*100000000)),
new User(4,"Sveta","Kutas","adqdgmail.com",Math.floor(Math.random()*100000000)),
new User(5,"Andriy","Machuk","czxcgmail.com",Math.floor(Math.random()*100000000)),
new User(6,"Ollyga","Antropow","xjkjgmail.com",Math.floor(Math.random()*100000000)),
new User(7,"Ina","Finy","iuouigmail.com",Math.floor(Math.random()*100000000)),
new User(8,"Taras","Boychuk","bvrrgmail.com",Math.floor(Math.random()*100000000)),
new User(9,"Igor","Kozluk","xcvxgmail.com",Math.floor(Math.random()*100000000)),
new User(10,"Tanya","Sagaly","xxxgmail.com",Math.floor(Math.random()*100000000)),

]
console.log(user)
// Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
let user1 = user.filter(value => value.id % 2 === 0 )
console.log(user1)

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let user2 = user.sort((a, b) => b.id - a.id)
console.log(user2)

 // створити класс для об'єктів Client з полями id, name, surname , email, phone, order
 // (поле є масивом зі списком товарів)
 class Client {

     constructor(id, name, surname, email, phone, order) {
         this.id = id;
         this.name = name;
         this.surname = surname;
         this.email = email;
         this.phone = phone;
         this.order = order;
     }
 }
 // створити пустий масив, наповнити його 10 об'єктами Client
let client = [
    new Client(1,"Vasya","Ivanow","sadasd@gmail.com",Math.floor(Math.random()*100000000),['a',"b","c"]),
    new Client(2,"Vasya","Ivanow","sadasd@gmail.com",Math.floor(Math.random()*100000000),['a',"b","C",'d']),
    new Client(3,"Vasya","Ivanow","sadasd@gmail.com",Math.floor(Math.random()*100000000),['a']),
    new Client(4,"Vasya","Ivanow","sadasd@gmail.com",Math.floor(Math.random()*100000000),['a',"b","c"]),
    new Client(5,"Vasya","Ivanow","sadasd@gmail.com",Math.floor(Math.random()*100000000),['a',"b",'c','d',`e`]),
    new Client(6,"Vasya","Ivanow","sadasd@gmail.com",Math.floor(Math.random()*100000000),['a',"b"]),
    new Client(7,"Vasya","Ivanow","sadasd@gmail.com",Math.floor(Math.random()*100000000),['a',]),
    new Client(8,"Vasya","Ivanow","sadasd@gmail.com",Math.floor(Math.random()*100000000),['a',"b"]),
    new Client(9,"Vasya","Ivanow","sadasd@gmail.com",Math.floor(Math.random()*100000000),['a',"b",'c']),
    new Client(10,"Vasya","Ivanow","sadasd@gmail.com",Math.floor(Math.random()*100000000),['a',"b"]),
]
console.log(client)
// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів
// в полі order по зростанню. (sort)
client.sort((a, b) => a.order.length - b.order.length)
console.log(client)



//========================================== ClassWork========================================================



// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,' +
// ' рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

//  drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// - info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// - increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// - changeYear (newValue) - змінює рік випуску на значення newValue
// - addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car
function Car(modely,produser,year,maxSpid,engine) {
    this.modely = modely
    this.produser = produser
    this.year = year
    this.maxSpid = maxSpid
    this.engine = engine
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpid} на годину`)
    }
    this.info = function ()  {
        console.log(` ${this.modely} ${this.produser} ${this.year} ${this.maxSpid}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
      return   this.maxSpid =  this.maxSpid + newSpeed
    }
    this.changeYear = function (newValue) {
     return this.year =  this.year = newValue
    }
    this.addDriver = function (driver){
      return   this.driver = driver
    }
}
    let car = new Car("Tesla","IlonMask",2014,210,"Electro")
car.drive()
car.info()
car.increaseMaxSpeed(20)
car.changeYear(2020)
car.addDriver("Ivan")
console.log(car)

// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// changeYear (newValue) - змінює рік випуску на значення newValue
// addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Auto {
    constructor(modely, produser, year, maxSpid, engine) {
        this.modely = modely;
        this.produser = produser;
        this.year = year;
        this.maxSpid = maxSpid;
        this.engine = engine;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpid} на годину`)
    }
    info (){
        console.log(` ${this.modely} ${this.produser} ${this.year} ${this.maxSpid}`)
    }
    increaseMaxSpeed (newSpeed) {
        return  this.maxSpid =  this.maxSpid + newSpeed
    }
    changeYear (newValue){
      return   this.year =  this.year = newValue
    }
    addDriver (driver){
        return this.driver = driver
    }
}
let auto = new Auto("Tesla","IlonMask",2011,240,"Electro")
auto.drive()
auto.info()
auto.increaseMaxSpeed(20)
auto.changeYear(2010)
auto.addDriver("Ivan")
console.log(auto)

// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelyushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let popelyushka = [
new Popelyushka("Vika",21,38),
new Popelyushka("sima",21,37) ,
new Popelyushka("Vita",21,34),
new Popelyushka("Kasya",21,36),
new Popelyushka("Asya",21,32),
new Popelyushka("Knopa",21,33),
new Popelyushka("Ana",21,31),
new Popelyushka("Ira",21,39),
new Popelyushka("Ksyha",21,42),
new Popelyushka("Olya",21,40),
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, findShose) {
        this.name = name;
        this.age = age;
        this.findShose = findShose;
    }
}

let prince = [
    new Prince("Igor",21,38),
    new Prince("Taras",21,37) ,
    new Prince("Anton",21,34),
    new Prince("Ivan",21,36),
    new Prince("Styopa",21,32),
    new Prince("Kristof",21,33),
    new Prince("Oleg",21,31),
    new Prince("Yura",21,39),
    new Prince("Vasuly",21,42),
    new Prince("Sergey",21,40),
]
 // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
 for (let i = 0; i < popelyushka.length; i++ ){
     if (popelyushka[i].footSize === prince[i].findShose){
         console.log(`Love ${popelyushka[i].name} ${prince[i].name} `)
     }
 }
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

 let princess = popelyushka.find((shose) => shose.footsize === prince.findShose);
 console.log(princess);


 //================================================ additional===============================================
function userCard(namber) {
    let stamp = Date.now()
    let time = new Date(stamp)
    let card ={
        balance:100,
        transactionLimit:100,
        historyLogs: [],
        key: namber,
    }
    return{
        getCardOptions: function (){
            return card;
        },
        putCredits:function (balans) {
            card.balance = card.balance + balans
            let transaction = {
                operationType: 'Received credits',
                credits: balans,
                operationTime: `${time}`
            }
            card.historyLogs.push(transaction);
        },
        takeCredits:function (balans1) {
            if (card.balance >= balans1 && card.transactionLimit >= balans1){
                card.balance = card.balance - balans1
            }else {
                console.error("error")
            }
            let transaction = {
                operationType:  'Withdrawal of credits',
                credits: balans1,
                operationTime: `${time}`
            }
            card.historyLogs.push(transaction);

        },
        setTransactionLimit:function (balans3) {
            card.transactionLimit = balans3
            let transaction = {
                operationType:  'Transaction Limit change',
                credits: balans3,
                operationTime: `${time}`
            }
            card.historyLogs.push(transaction);
        },
        transferCredits: function (credit, cards) {
            cards.getCardOptions().balance+=credits;
            credit = credit + credit * 0.5 / 100;
            card.balance -= credits;
        },
    }

}
let card3 = userCard(3);
let card = userCard(1)
card.setTransactionLimit(200)
card.putCredits(20)
card.takeCredits(120)
console.log(card3.getCardOptions());
console.log(card.getCardOptions());
