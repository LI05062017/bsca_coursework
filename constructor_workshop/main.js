// const tvCharacterOne = {
//                     name:"SpongeBob" , 
//                     show: "SpongeBob SqaurePants" ,
//                     rating: 3  
//                     };
//  const tvCharacterTwo = {
//                     name: 'Barbie',
//                     show: 'Barbie',
//                     rating: 0              
//                     };    
// const tvCharacterThree = {
//                     name: 'Dorthy',
//                     show: 'Wizard Of Oz',
//                     rating: 0
//                     };                                 
                    

                    

// function tvCharacter(name, show, rating){
//     this.name = name
//     this.show = show
//     this.rating = rating
// }

// const SpongeBob = new tvCharacter('Spongebob', 'Spongebob Sqaurepants', 7)
// console.log(SpongeBob);

///
function car (make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}

const goodName = new car('BMW', 'LS', 2017)
const goodNameTwo = new car('Chevy', 'LS', 2010)
const goodNameThree = new car('Dodge','LT',2010)

//console.log(goodName, goodNameTwo, goodNameThree)

const createCar = () => {
   let result = []
   for(let x = 0; x < 10; x+=1 ) {
   const carObj = {
       make: "VW",
       model:'Rabbit',
       year: 2008
   }
    result.push(carObj)
 }
  return result
}
//console.log(createCar())

const createCarTwo = () => {
    let result = []
        for(let i = 0; i < 10; i++){
            result.push(new car('VW', "Rabbit", 2008))
        }
        return result
}
//console.log(createCarTwo())

function Recipe (ingredients, instructions, time){
     this.ingredients = ingredients
     this.instructions = instructions
     this.tinme= time
 
}

const newRecipe =  (numRecipes) => {
    let result = []
        for (let i = 0; i < numRecipes ; i+=1){
          result.push(new Recipe({},[],0))
        }
    return result
}
console.log(newRecipe(20))