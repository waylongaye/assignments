var readline = require('readline-sync')

var isAlive = true;
var hasWon = false;
var superWeapon = Hero.attack * 2

// Character Creation

function Hero (name){
    this.name = name;
    this.attack = Math.floor(Math.random()*35);
    this.hp = 100;
    this.items = [];
    this.isAlive = true;
}

var player = new Hero('Big Newt Dawg Man Bro Dude')

function Enemy (name, attack, hp){
    this.name = name;
    this.attack = attack;
    this.hp = hp;
}
var randomLow = Math.floor(Math.random()*10)+10;
var randomMedium = Math.floor(Math.random()*15)+20;

var lexLuthor = new Enemy('Bald', randomLow, 15);
var bungalowBoy = new Enemy('Bouncy', randomMedium, 50);

var enemies = [lexLuthor, bungalowBoy]

// intro console.logs
console.log('hello, it is a game')

while(isAlive && !hasWon){
    var action = readline.keyIn("What would you like to do? [w] Walk, [p] Print Inventory, [q] Quit Game ", {limit: 'wpq'})
    if(action === 'w'){
        walk()
    }
}


function walk (){
    var random = Math.floor(Math.random()*3)
    if (random < 1){
        encounter()
    }else {
        console.log('You passed a pretty tree')
    }
}

function encounter (){
    var action = readline.keyIn("Would you like to [r] Run or [f] Fight? ", {limit: 'rf'})
    if(action === 'r'){
        run()
    }else {
        var enemy = enemySelect()
        while(enemy.hp > 0 && player.hp > 0){
            fight(enemy)
        }
        if(enemy.hp <= 0){
            console.log('good job you killed the enemy')
        }else if(player.hp <= 0){
            console.log('You dead')
            isAlive = false;
        }
    }
}

// Encounter Function
function fight (enemy){
    var random = Math.floor(Math.random()*5)
    if(random < 2.5){
        miss()
    }else {
        player.hp -= enemy.attack
        enemy.hp -= player.attack * superWeapon
        console.log(`Hey ${player.name} your hp is now ${player.hp}`)
        console.log(`You hit ${enemy.name} and their hp is ${enemy.hp}`)
    }
}
// Random Enemy Function
function enemySelect (){
    var random = Math.floor(Math.random()*enemies.length)
    return enemies[random]
}

function miss (){
    console.log('you missed dawg')
}

///////////////////////////////////////

var ask = require('readline-sync')

/////////////////////
// Global variables //
var player = {
    name: '',
    health: 100,
    inventory: []
}

////////////////////
// Game Functions //
function walk(){
     // random number between 1 - 4
     var chance = Math.floor(Math.random() * 4)
     // if number is 1 === attack
     if(chance === 1){
        console.log("ATTTAAACK")
     } else {
         console.log("Nothing happened, uneventful day really.")
     }
}


/////////////////
/// GAME INTRO //

player.name = ask.question("What is your name? ");
console.log("Welcome " + player.name + " to my super awesome game")

var options = ["Walk"]


/////////////
// GAME LOOP
while(player.health > 0){
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
    if(userChoice === 0){
       walk()
    } else if(userChoice === 1){

    }
}