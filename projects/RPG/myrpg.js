var readline = require('readline-sync')

var villains = ["", "Fort", "Blazer"]

var isAlive = true;

var utilityBelt = []

class Sword {
    constructor
    (){
        this.attack = 10;
        this.defense = 10;
    }

    attackEnemy(enemy){
        enemy.hp -= this.attack

    }
}


function superHero (name){
    this.name = name;
    this.attack = Math.floor(Math.random()*20);
    this.defense = 20
    this.superpower = Math.floor(Math.random()*10)
}



function sideKick(){

}




// Functions :

// Enemy function
function encounter (){
    var action = readline.keyIn("Would you like to [e] Escape or [f] Fight? ", {limit: 'ef'})
    if(action === 'r'){
        run()
    }else {
        var enemy = enemySelect()
        while(enemy.hp > 0 && player.hp > 0){
            fight(enemy)
        }
        if(enemy.hp <= 0){
            console.log('you defeated the enemy')
        }else if(player.hp <= 0){
            console.log("Wasted.")
            isAlive = false;
        }
    }
}

// Encounter 

function enemySelect (){
    var random = Math.floor(Math.random()*enemies.length)

    return enemies[random]
}

function fight (enemy){
    var random = Math.floor(Math.random()*5)
    var missChance
    if(superHero.defense < 30){
        missChance = 2.5
    } else if(superHero.defense < 30 && superHero.defense < 61){
        missChance = 3
    } else {
        missChance = 4
    }
    if(random < missChance){
        miss()

    }else {
        player.hp -= enemy.attack
        enemy.hp -= player.attack * superWeapon
        console.log(`Hey ${player.name} your hp is now ${player.hp}`)
        console.log(`You hit ${enemy.name} and their hp is ${enemy.hp}`)
    }
}

function miss (){
    console.log("you missed!")
}