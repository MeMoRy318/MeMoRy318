
function closed ()  {
    let users = [
        {id: 1, name: 'vasya', age: 31, status:false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
    return {
        cetUsers: () =>{
            return  users
    },
         setAge: (age) => {
            for (const time of users ){
                time.age = time.age + age
            }

         },
        colbec:() => users.filter(value => value.age < 30)



    }
}
let a = closed()
a.setAge(1)
console.log(a.colbec())
console.log(a.cetUsers())