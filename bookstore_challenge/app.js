const storeInventory = [
    {name: "Catcher in the Rye", author: "J.D. Salinger", price: 10.00, genre: "Adult Fiction"},
    {name: "The Wind-Up Bird Chronicles", author: "Haruki Murakami", price: 15.00, genre: "Adult Fiction"},
    {name: "The Unbearable Lightness of Being", author: "Milan Kundera", price: 14.00, genre: "Adult Fiction"},
    {name: "Harry Potter: The Sorcerers Stone", author: "J.K. Rowling", price: 22.00, genre: "Youth Fiction"},
    {name: "In Cold Blood", author: "Truman Capote", price: 14.00, genre: "Non-Fiction"},
    {name: "A Brief History of Time", author: "Stephen Hawking", price: 18.00, genre: "Non-Fiction"},
    {name: "The Emperor of All Maladies", author: "Siddhartha Mukherjee", price: 20.00, genre: "Non-Fiction"},
    {name: "The Structure of Scientific Revolutions", author: "Thomas S. Khun", price: 16.00, genre: "Non-Fiction"},
    {name: "A Wrinkle in Time", author: "Madeleine L Engle", price: 14.00, genre: "Youth Fiction"},
    {name: "The House of the Scorpion", author: "Nancy Farmer", price: 16.00, genre: "Youth Fiction"},
    {name: "Mastering the Art of French Cooking", author: "Julia Child", price: 24.00, genre: "Food/Cooking"},
    {name: "Antifragile", author: "Nassim Nicholas Taleb", price: 20.00, genre: "Philosophy"}
  ]

  // Cathcher in the Rye is by J.D salin... and is $10.00

//   const printInfo = storeInventory.map((info) => {
//       return `${info.name} is by ${info.author} and is ${info.price}`
//   })

//   console.log(printInfo)

//   const newFunc = (arr) =>{
//     let printInfo = arr.map((info) => {
//         return `${info.name} is by ${info.author} and is ${info.price}`
//     })
//     return printInfo
//   } 

//   console.log(newFunc(storeInventory))

//creat a function that uses filter that returns nonfiction books

const nonFictionOnly = storeInventory.filter (book => {
    return book.genre === 'Non-Fiction'
})

//console.log(nonFictionOnly)

const newFunc = (arr) => {
    let newArr = arr.filter( x => {
        return x.genre === 'Non-Fiction'
    })
    return newArr
}

//onsole.log(newFunc(storeInventory))

//challenge 3 (create a funtion that creates a price > 15)

// const challThree = (arr,price) => {

// let greaterThan = arr.filter((books) =>{
//     return books.price === price 
// }).map((name => {
//     return name.name
// })
// return greaterThan
// }
// console.log(challThree(storeInventory(storeInventory, 20)))

const shoppingCart = []

const addBookToCart = (nameOfBook) => {
   const book = storeInventory.filter(book => {
       return book.name === nameOfBook
   })
  shoppingCart.push(book[0])

}

addBookToCart("The Wind-Up Bird Chronicles")
addBookToCart("Antifragile")
addBookToCart("The House of the Scorpion")

const totalPrice = (arr) => {
  let totalPrice = 0
  for(i=0; i < arr.length; i += 1) {
     totalPrice += arr[i].price
  }
 return totalPrice
}
 
const printInfoToCustomer =(arr) =>{
    for( let i = 0; i < arr.length; i +=1 ){
        console.log (`${arr[i].name} is by ${arr[i].author} and costs ${arr[i].price}`)

}
console.log(totalPrice(`Total Price ${totalPrice(shoppingCart)}`)
}

printInfoToCustomer(shoppingCart)


