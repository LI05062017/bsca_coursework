function Monster (name, diet, img) { //Blueprint
    this.name = name
    this.diet = diet
    this.img = img
}

const monsters = []

//console.log(monsters)

const jason = new Monster('Jason', ['Monster Energy'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Jo_OgF4rJaizQPPbyIqUvFJQvlKgx2E3coPBoZuS80sKTWyl-g') 
const frankenstein = new Monster ('Frankenstein', ['Jelly Beans'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjUp9kW5k5FJ5JD_EK3NsMljs-S65ao4cH73uEztqA16Fji0XVyw')
const monsterThree = new Monster('Mummy', ['M & M', 'Twix', 'Skittles'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWfr9AaXXU0cs_z_UDgyRXhPyYtcR3U-Ju2CEX7wCa27hKaRR')
const monsterFour = new Monster ('Bob', ['candy'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKh3ghyOK08jzHgNBmlaz6r3gLfjoSBx7rEfk_4qGQTq2uf2v9Gg')
const monsterFive = new Monster ('Shelly', ['peanuts'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkNNMc0GANhxkdwYCNqmC3jGBcmDb3hE4kWNwWGT__xqtCH4ETw')


monsters.push(jason, frankenstein, monsterThree, monsterFour, monsterFive)


//console.log(monsters)

const monsterVue = {
        el: "#monster-app",
        data: {
            title: 'Monster Mash',
            monsters: monsters,
            newMonsterName: '',
            newMonsterDiet: '',
            newMonsterImg: '',
        },
        methods: {
            submitMonster: function(){
                const name = this.newMonsterName
                const diet = this.newMonsterDiet.split(",")
                const image = this.newMonsterImg
                const monster = new Monster(name, diet, image)

                this.monsters.push(monster)

                this.newMonsterName = ''
                this.newMonsterImg = ''
                this.newMonsterDiet= ''
                

            }
        },
}

new Vue(monsterVue) 