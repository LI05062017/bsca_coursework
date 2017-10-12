const fallArray = [
    'pumpkin',
    'spice',
    'is',
    'very',
    'nice',
    'happy',
    'fall'
]
// find the greatest length in the string and how many letters it has
const printGreatestLength = (myArray) => {

    let greatestLengthSoFar = 0
    let indexOfWord= 0
    
    for(let i = 0; i < myArray.length; i += 1){
    let currentLengthOfWord = myArray[i].length
        if (currentLengthOfWord > greatestLengthSoFar){
           greatestLengthSoFar = currentLengthOfWord
           indexOfWord = i
  } 
    }
    return `${myArray[indexOfWord]} has length ${greatestLengthSoFar}`
}
console.log(printGreatestLength(fallArray))