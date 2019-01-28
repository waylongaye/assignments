




// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// var counter = 0;
// for(var i = 0; i < officeItems.length; i++){
//     if(officeItems[i] === 'computer'){
//         counter += 1
//     }
// } console.log (`these are ${counter} computers`)

// Loops through the following array and count how many "computers" there are. The "var count" starts and counts the office item from 1 to 4

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  
  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough.")
      } else {
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough.")
      }
  }


  function toggleSwitch(switches){
      var on = false;
    
      for(var i = 0; i < switches.length; i++){
        for(var j = 0; j < switches[i]; j++){
          on = !on
          console.log(on)
        }
      }
    
      if(on) {
      return "the light is on"
    } else {
      return "the light is off"
    }
  }

toggleSwitch([2, 5, 435, 4, 3])