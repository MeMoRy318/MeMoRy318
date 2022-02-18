 // let user = {
 //     id:1,
 //     name:"Vasya",
 //     age: 31
 // }
 // user["sourName"] = "ivanow"
 // console.log(user)
 // let obj = {}
 // let arr = ["id","age","surName"]
 // let ar = [ 1,21,"ivanow"]
 // for (fild of arr){
 //     obj[fild] = ar[fild]
 // }
 // console.log(obj)
 // for (let i = 0; i < arr.length; i++ ){
 //     obj[arr[i]] = ar[i]
 // }
 // delete obj.id
 // console.log(obj)

// let user = {
//     name:"vasya",
//     age:21,
//     surName:"ivanow",
//     greeting:function ()  {
//         return `Hello my name is ${this.name} and my age ${this.age} and my sur name ${this.surName}`
//     },
//     woman:{
//         name: "Olyga",
//         age:22,
//         surName: "Antropowa",
//         greeting:function ()  {
//             return `Hello my name is ${this.name} and my sur name ${this.surName} and my age ${this.age}`
//
//         }
//     }
// }
// console.log(user.greeting())
//  console.log(user.woman.greeting())

 // let foo = ()=> {
 //    let x = 0
 //    function iner () {
 //     return ++x
 //    }
 //    return iner;
 //
 // }
 // let result = foo()
 // console.log(result())
 // console.log(result())
 // console.log(result())
 // console.log(result())
 // console.log(foo()())
 // console.log(foo()())
 // console.log(foo()())

 // let creanorUsers = ( name,age) =>{
 //     let obj = { name:name, age:age}
 //     return {
 //         getname: ()=>{return obj.name},
 //         getAge: ()=>{return obj.age},
 //         ageCreato:(age)=>{return obj.age = age}
 //
 //     }
 // }
 // let manipulyator = creanorUsers("Vasya", 29)
 // console.log(manipulyator.getAge())
 // console.log(manipulyator.getname())
 // manipulyator.ageCreato(21)
 // console.log(manipulyator.getAge())

 // let creatoUsers = (name,age) =>{
 //    let obj = {name:name, age:age}
 //     return {
 //        creatoName:()=>{return obj.name},
 //         creatoAge:()=>{return obj.age},
 //         manipulatorAge: (age) => {return obj.age = age},
 //
 //     }
 //
 // }
 // let x = creatoUsers("Vasya",21)
 // console.log(x.creatoAge())
 // console.log(x.creatoName())
 // x.manipulatorAge(32)
 // console.log(x.creatoAge(),x.creatoName())
 // x.manipulatorName = (name) => {return obj.name = name}
 // x.manipulatorName("Styopa")


//  function User(id,name,surName,age ) {
//  this["id"] = id
//  this["name"] = name
//   this["surName"] = surName
//   this["age"] = age
//   this.creeting = function () {
//   console.log(`Hello my name is ${this.name}` )
//
//   }
//
//
//  }
//  let user = new User(1,"Vasya","Ivanow",21)
//  console.log(user)
//  let user1 = new User(2,"styopa","Antropow",25)
//  console.log(user1)
//  let userArey = [user,user1]
//  console.log(userArey)
// user1.creeting()
//

 // class Wayf {
 // wayf
 //
 //  constructor(wayf) {
 //   this.wayf = wayf;
 //  }
 // }
 //
 // class User {
 // id;
 // name;
 // age;
 //
 //  constructor(id, name, age,wayf) {
 //   this.id = id;
 //   this.name = name;
 //   this.age = age;
 //   this.wayf = new Wayf(wayf)
 //  }
 // }
 //
 // let user = new User(1,"vasya",31,"sima")
 // console.log(user.wayf.wayf)

//  class Wife {
//   constructor(wife) {
//    this.wife = wife;
//   }
//  }
// class Car {
//  constructor(spid, marka,age,sborka) {
//   this.spid = spid;
//   this.marka = marka;
//   this.age = age;
//   this.sborka = new Wife(sborka);
//  }
// }
//
//
// let car = new Car(180,"tesla",1,"Germani")
// console.log(car)
 
 // class Car {
 //  constructor(speed, maxSpeed) {
 //   this.speed = speed;
 //   this.maxSpeed = maxSpeed;
 //  }
 // }
 // class SportCar extends Car{
 //  constructor(speed, maxSpeed, modely) {
 //   super(speed, maxSpeed);
 //   this.modely = modely;
 //  }
 // }
 // let suprCar = SportCar(300,450,"tesla")
