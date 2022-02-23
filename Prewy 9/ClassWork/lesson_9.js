// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (let simpson_1 of simpsons){
    let div_member = document.createElement("div")
    div_member.classList.add("member")
    div_member.innerHTML = `<div>${simpson_1.name}</div>,<div>${simpson_1.surname}</div>,
<div>${simpson_1.age}</div>,<div>${simpson_1.info}</div>`
    document.body.append(div_member)
}
// взяти попередній масив з сімпсонами.
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// Для кожної властивості елементу створити окремий блок, та помістити його у div.member
for (let simpson of simpsons){
    let div_member = document.createElement("div")
    div_member.classList.add('member')

    let img = document.createElement("img")
    img.src = `${simpson.photo}`

    let Name = document.createElement("div")
    Name.innerText = `${simpson.name}`

    let surName = document.createElement("div")
    surName.innerText = `${simpson.surname}`

    let age = document.createElement("div")
    age.innerText = `${simpson.age}`

    let info = document.createElement("div")
    info.innerText = `${simpson.info}`

    div_member.append(name,surName,age,info)
    div_member.append(img)
    document.body.append(div_member)
}
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (let cours of coursesArray){
    let div_wrep = document.createElement("div")
    div_wrep.style.width = `100%`

    let h2 = document.createElement("h2")
    h2.innerText =`${cours.title}`
    h2.style.width = `100%`
    h2.style.border = '1px solid red'

    let div_box = document.createElement("div")
    div_box.style.display = `flex`
    div_box.style.justifyContent = `space-between`
    div_box.style.width = "100%"

    let div_box_1 = document.createElement("div")
    div_box_1.innerText = `${cours.monthDuration}`
    div_box_1.style.border = '1px solid red'
    div_box_1.style.width = "30%"

    let div_box_2 = document.createElement("div")
    div_box_2.innerText = `${cours.hourDuration}`
    div_box_2.style.border = '1px solid red'
    div_box_2.style.width = "68%"

    let modules_element = document.createElement('ul');


    for (let modules of cours.modules){
    let li_cont = document.createElement("li")
    li_cont.style.width = "100%"
    li_cont.style.border = '1px solid red'
    li_cont.innerText = `${modules}`
        li_cont.style.marginBottom = "5px"
        modules_element.append(li_cont)

}

    div_box.append(div_box_1,div_box_2)
    div_wrep.append(h2,div_box,modules_element)
    document.body.append(div_wrep)
}