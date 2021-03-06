const baseballPlayers = [
    { name: "Barry Bonds", HR: 763, team: "San Francisco Giants", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Barry_Bonds_2006-05-08.jpg/440px-Barry_Bonds_2006-05-08.jpg" },
    { name: "Hank Aaron", HR: 755, team: "Atlanta Braves", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Hank_Aaron_-_Baseball_HOF_Induction_2013.jpg/500px-Hank_Aaron_-_Baseball_HOF_Induction_2013.jpg" },
    { name: "Babe Ruth", HR: 714, team: "New York Yankees", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Babe_Ruth2.jpg/512px-Babe_Ruth2.jpg" },
    { name: "Alex Rodriguez", HR: 696, team: "New York Yankees" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Alex_Rodriguez_2008-04-19.jpg/550px-Alex_Rodriguez_2008-04-19.jpg" },
    { name: "Carlton Fisk", HR: 376, team: "Boston Red Sox" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Carlton_Fisk_-_Baseball_HOF_Induction_2013.jpg/440px-Carlton_Fisk_-_Baseball_HOF_Induction_2013.jpg" },
    { name: "Rocky Colavito", HR: 376, team: "Cleveland Indians" , img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Rocky_Colavito_1959.png" },
    { name: "Gil Hodges" , HR: 370, team: "Los Angeles Dodgers" , img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Gil_Hodges_1960.png" },
    { name: "Willie Mays" , HR: 660, team: "San Francisco Giants", img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Willie_Mays_cropped.jpg"},
    { name: "George Kenneth Griffey Jr.", HR: 630, team: "Seattle Mariners" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ken_Griffey%2C_Jr._June_2009.jpg/500px-Ken_Griffey%2C_Jr._June_2009.jpg" },
    { name: "Jim Thome", HR: 612, team: "Cleveland Indians" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jim_Thome_2008.jpg/440px-Jim_Thome_2008.jpg"},
    { name: "Samuel Kelvin Peralta Sosa", HR: 609, team: "Chicago Cubs", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Sosa_swinging4.png/440px-Sosa_swinging4.png"},
    { name: "Albert Pujols", HR: 605, team: "Los Angeles Angels" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Albert_Pujols_on_April_14%2C_2012.jpg/500px-Albert_Pujols_on_April_14%2C_2012.jpg"},
    { name: "Frank Robinson", HR: 586, team: "Cleveland Indians", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Frank_Robinson.jpg/440px-Frank_Robinson.jpg"},
    { name: "Mark McGuire", HR: 583, team: "St. Louis Cardinals", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mark_McGwire_on_April_20%2C_2013.jpg/480px-Mark_McGwire_on_April_20%2C_2013.jpg"},
    { name: "Harmon Killebrew", HR: 573, team: "Minnesota Twins",img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Harmon_Killebrew_1962.png/440px-Harmon_Killebrew_1962.png"},
    { name: "Rafael Palmeiro", HR: 549, team: "Baltimore Orioles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Rafael_Palmeiro_2003.jpg/440px-Rafael_Palmeiro_2003.jpg"},
    { name: "Reggie Jackson", HR: 563, team: "Oakland Athletics", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Reggie_Jackson_at_Dodger_Stadium_2010.jpg/440px-Reggie_Jackson_at_Dodger_Stadium_2010.jpg"},
    { name: "Manny Ramirez", HR: 555, team: "Cleveland Indians", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Manny_Ramirez.JPG/500px-Manny_Ramirez.JPG"},
    { name: "Mickey Mantle", HR: 536, team: "New York Yankees", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mickey_Mantle_1953.jpg/440px-Mickey_Mantle_1953.jpg"},
    { name: "Chipper Jones", HR: 468, team: "Atlanta Braves", img: "https://upload.wikimedia.org/wikipedia/commons/4/40/Chipper_jones_4-18-12.jpg"},
    ];
  
  
  // 1) Use map or filter to return an array of baseball player names.
  // examples -> ["Barry Bonds", "Hank Aaron", "Babe Ruth", etc..]

  ////THIS ONE WORKS!!!
//   const playerNames = (arr) => {
//       for (let i = 0; i < arr.length; i += 1) {
//           console.log(arr[i].name)
//       }
//   }
//   //playerNames(baseballPlayers)

//   const printPlayersMap = baseballPlayers.map(function(item){
//       return item.name
//   })
//  console.log(printPlayersMap)

  // 2) User map or filter to return an array of only players that play for the Cleveland Indians
//  ////THIS ONE DOES WORK ON THE MAP FUNCTION 
//   const playerNamesS = (arr) => {
//       let newArr = []

//       for (let i = 0; i < arr.length; i += 1){
//         if(arr[i].team === 'Cleveland Indians')
//         newArr.push(arr[i].team === 'Cleveland Indians');
//       }
//       return teamIndians.name
//   }
//  // console.log(playerNamesS(baseballPlayers))
// //   //////////////
// const clevelandIndians = baseballPlayers.map(function(item) {
//     return item.team === 'Cleveland Indians' && item.name
// })
// console.log(clevelandIndians)

//   // 3) Use map or filter to return an array full of objects with only the players name and team.
//   //  examples -> [ { name: "Barry Bonds", team: "San Francisco Giants" }, { name: "Hank Aaron", team: "Atlanta Braves"}, etc..]
//   const nameAndTeam = (arr) => {
     let newArr = []

//      for (let i = 0; i < arr.length; i += 1){
//          newArr.push({ name: arr[i] });
//      }
//    return newArr
//  } 
// //console.log(nameAndTeam(baseballPlayers));

//   const nameAndTeamMap = baseballPlayers.filter(function(item){
//     return item.name && item.team
//   })
// console.log(baseballPlayers)
//  // 4) Create a function that returns the average of all players HR (for loop)
//   ///THIS ONE WORKS!!
 const averageList = (arr) => {
      for(i=0; i < arr.length; i += 1){
          if (arr[i].HR > 570 && arr[i].HR < 580)
          console.log(arr[i])
      }
  }
// averageList(baseballPlayers)
//   // 5) Use map or filter to return an array of only the baseball players first names
///THIS ONE WORKS!!! 
// const firstNames = baseballPlayers.map(firstName =>{
//      return firstName.name.split(' ')[0]
//   })
//   console.log(firstNames)

// //   // 6) Use filter or map to return an array of Cleveland Indian Players with HRs greater than 575

// ///THIS ONE DOES WORK
  // const clevelandIndians = baseballPlayers.map(function(item) {
  //     return item.team === "Cleveland Indians" && item.HR > 575 && item.name
  // })

  //  console.log(clevelandIndians)

// //   // 7) Use Filter & Map to return an array of just the Names of the Cleveland Indian Players with HR's greater than 575.
          
//         const clevelandIndians = baseballPlayers.map(function(item) {
//           return item.team === "Cleveland Indians" && item.HR > 575 && item.name
//       })
    
//        console.log(clevelandIndians)
    
// //   // 8) Use Filter or Map to return an array full of sentences that match the following examples:
// //   // examples -> [
// //   //  "Barry Bonds played for the Giants and had 763 homeruns", 
// //   //  "Hank Aaron played for the Braves and had 755 homeruns",
// //   //  "Babe Ruth played for the Yankees and had 714 homeruns",]
 
// const newSentences = baseballPlayers.map(function(item){
//     return item.name && item.team && item.HR
// })
// console.log(` ${name} played for ${team} and had ${HR} homeruns `)