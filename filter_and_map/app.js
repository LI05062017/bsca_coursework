let names = ["David Bowie", "The Arist Formerly Known as Prince", "John Lennon", "Jimi Hendrix", "Robert Plant", "Paul McCartney",
 "Gene Simons", "Stevie Nicks","Florence Welch", "Sonny and Cher"];

// Map the names to objects
// ex: {name: "David Bowie"}

const mappedNames = names.map((name) => {
    let rockstar = {name: name}
    return rockstar
})

//console.log(mappedNames)


// map through just the first names
// return an array of the first names only

const mappedFirstNames = names.map(name => name.split(" ")[0])   
//console.log(mappedFirstNames)

let arrayOfArtists = names.filter(name => name[0] === "J")
//console.log(arrayOfArtists)

let firstNameJ = names.filter(name => name[0] === "J").map(name => name.split(" ")[0])
//console.log(firstNameJ)

// SHAPES
let shapes = [
    { name: "Square", color: "Green", sides: 4 },
    { name: "Triangle", color: "Green", sides: 3 },
    { name: "Rectanlge", color: "Red", sides: 4 },
    { name: "Pentagon", color: "Green", sides: 5 },
    { name: "Hexagon", color: "Red", sides: 6 },
]

// call map on shapes array
// return a new array of shape names

const shapeNames = shapes.map(shape => shape.name)
 //   console.log(shapeNames)

//Call filter on shapesArray 
//return green shapes

let greenShapes = shapes.filter(shape => shape.color === "Green" )
//console.log(greenShapes)


//return sides less than 4 

let lessThanFour = shapes.filter(shape => shape.sides < 4)
console.log(lessThanFour)
