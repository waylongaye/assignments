var readline = require("readline-sync");

var heroName = readline.question("Type your superhero name:")
var isAlive = true;
var hasWon = false;
// var newItem = [{                                             // This is an array of loot drops to pull randomnly from
//     name: "Inspiration",
//     use: "adds 10 hp",
//     doThis: function () {                // in the game loop, if player types use backta fluid and they have it in inventory
//         user.hp += 10;
//         console.log("Your hp was restored by 10 pts!\n")
//         user.inventory.push(newItem)               // it will cal this function and add 10 hp to their current health. Same below.
//     }
// }]
// var enemyTypes = ["Mindshift", "Fort", "Blazer"]
// var hasWon = false;

// Character Creation

// // Superhero

function Superhero(){
    this.name = heroName;
    this.attack = Math.floor(Math.random()*35)+5;
    this.hp = 300;
    this.superpowers = ["punch", "kick", "hurl a fireball at", "launch a rocket at"];
    this.inventory = [];
    this.villainsDefeated = 0
}

var user = new Superhero();
console.log(user)

// Villains

function Villain(name, attack, hp){
    this.name = name;
    this.attack = attack;
    this.hp = hp;
    this.superpowers = ["aims and fires at you!", "hurls a huge punch"];
}
/// random superpowers ///
// var randomPower = Math.floor(Math.random()*10)
var randomLow = Math.floor(Math.random()*10)+10;
var randomMedium = Math.floor(Math.random()*15)+20;

var blazer = new Villain("Blazer", randomLow, 75);
var fort = new Villain("Fort", randomMedium, 85);
var mindShift = new Villain("Mindshift", randomMedium, 80)

var enemies = [blazer, fort, mindShift]


///////////////////////// GAME LOOP //////////////////////////
console.log(`Welcome to a city of superheroes, ${user.name}: Paragon City. Here, you will face many villains as you rise through the ranks of capable heroes!\n`)
while (isAlive && !hasWon) {
    
    // console.log("Welcome to a city of superheroes: Paragon City. Here, you will face many villains as you rise through the ranks of capable heroes!\n")
    var input = readline.keyIn("\nWhat would you like to do? [W] to walk | [I] to see inventory] | [Q] Quit\n", {limit:'wiq'});
    // if (user.villainsDefeated === 3) {            //Check if the kill count is 3 if it is, break the loop and set hasWon to true;
    //     console.log("You've won! You're the greatest superhero ever!");
    //     hasWon = true;
    //     // break;
    // }
    if (input === "q"){
        console.log("You've quit! Thanks for playing!")
        break;
    }
    if (input === "w") {
        walk();
    // } else if (input === "F" || input === "f") {
    //     var enemy = enemySelect();
    //     fight(enemy);
    } else if (input === "i") {
        print();
    }

    // if (hasWon) {
    //     console.log("You've won! You're the greatest superhero ever!");
    //     hasWon = true;
    //     break;
    // }
}





///////////////////// Fight & Encounter ///////////////////////

function fight(enemy) {
    console.log("You've been ambushed!")
    var superpower = getRandomElement(user.superpowers)
    var villainpower = getRandomElement(enemy.superpowers)
        // console.log(enemy);
    while (user.hp > 0 && enemy.hp > 0) {        
        
        console.log(`You ${superpower} ${enemy.name}!`)
        user.hp -= enemy.attack;
        enemy.hp -= user.attack;
        console.log(`${enemy.name} ${villainpower}`)

        if (enemy.hp <= 0){
           enemies.splice(enemies.indexOf(enemy),1)
           console.log('enemy dead')
           user.inventory.push("Inspiration");
           user.hp += 10;
           user.villainsDefeated++;
           console.log(`You recieved Inspiration! Your hp is now ${user.hp}! You have now defeated ${user.villainsDefeated} villain(s)!`)
        }else if (user.hp <= 0){
            console.log(enemy.name + " Just killed you. You have died")
            isAlive = false;
        }else {
            console.log(`${user.name} hp is now ${user.hp}`)
            console.log(`${enemy.name} hp is now ${enemy.hp}`)
        } 
        
        if (user.villainsDefeated === 3) {            //Check if the kill count is 3 if it is, break the loop and set hasWon to true;
            console.log("You've won! You're the greatest superhero ever!");
            hasWon = true;
            // break;
        }

    }
}

// Encounter Function

function encounter (){
    
    console.log("\nThere seems to be trouble up ahead.\n")
    var action = readline.keyIn("Would you like to [r] Run or [f] Fight?\n", {limit: 'rf'})
    // var enemy = enemySelect()

    if(action === 'r'){
        run()
    }else if(action === "f") {
        enemy = enemySelect()
        fight(enemy)
        // while(enemy.hp > 0 && user.hp > 0){
        //     fight(enemy)
        // }
        // if(enemy.hp <= 0){
        //     console.log('good job you killed the enemy')
        // }else if(user.hp <= 0){
        //     console.log('You dead')
        //     isAlive = false;
        // }
    }
}


/////////////////////////// Regenerate Enemy ////////////////////////////

function regenerate (enemy){
    switch(enemy){
        case enemy:
        enemy.hp = 80;
        return; /// continue this for all enemies; be sure to create instances of enemies from constructor function
        case enemy2:
        enemy.hp = 85;
        return;
        case enemy3:
        enemy.hp = 85;
    }
}


////////////////////// Walk Function /////////////////////////

function walk(){
    // random number between 1 - 4
    var chance = Math.floor(Math.random() * 3)
    // if number is 1 === attack
    if(chance > 1.5){
        encounter()
    } else {
        console.log("Nothing happened, uneventful day really.\n")
        // walk();
        
    }
}

///////////////////// Run Function ////////////////////////////

function run() {
    var runChance = Math.floor(Math.random() * 5);
    var enemy = enemySelect()
    if (runChance <= 2.0) {
        console.log("You escape!\n");
    } else {
        console.log("You try to get away, but a Villain manages to keep up\n");
        var enemy = enemySelect();
        fight(enemy)
    }

}


////////////////////// Enemy Generator ///////////////////////

function getRandomElement(arr) {
    var index = Math.floor(Math.random() * arr.length); // takes an array and returns an item at a randomn index
    return arr[index];
}



// Random Enemy Function
function enemySelect (){
    var random = Math.floor(Math.random() *enemies.length)
    return enemies[random]
}

///////////////// Print Inventory ///////////////////

function print(){
    console.log(user.inventory)
}

// function randomEnemyGenerator(arr) {
    
//     var enemy = getRandomElement(arr);
//     if (enemyType === "Mindshift") {
//         return new Villain("Mindshift", 80);
//     } else if (enemyType === "Fort") {
//         return new Villain("Fort", 85);;
//     } else {
//         return new Villain("Blazer", 75);
//     }
// }

// var enemy1 = new Villain("Mindshift", 80);
// var enemy2 = new Villain("Fort", 85);
// var enemy3 = new Villain("Blazer", 75);
// function playerAttacks(){
    
// }

//////// MISS

// function miss (){
//     console.log("you missed!")
