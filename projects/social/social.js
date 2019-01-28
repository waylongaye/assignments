var superhero = {
    heroName: "Authority",
    powerLevel: 92,
    superpowers: ["invulnerability", "super speed", "super strength", "regeneration"],
    weaknesses: ['water', 'electricity', 'extreme heat'],
    authorityVillains: [
        {
            villainName: "Animal",
            powerLevel: 89,
            attributes: [
                {
                    superpowers: ["animal instinct", "claws", "shapeshifting"],
                    weaknesses: ["fire", "silver"]
                }
            ]

        },
        {
            villainName: "Fort",
            powerLevel: 93,
            attributes: [
                {
                    superpowers: ["super suit", "super strength", "super jump"],
                    weaknesses: ["electricity", "intense vibration"]
                }
        ]
        },
        {
            villainName: "Mindshift",
            powerLevel: 90,
            attributes: [
                {
                    superpowers: ["telekinesis", "telepathy", "dimension shifting"],
                    weaknesses: ["deafening noise", "combative situations"]
                }
        ]
        },
        {
            villainName: "Astronaut",
            powerLevel: 93,
            attributes: [
                {
                    superpowers: ["super intellect", "gravity control"],
                    weaknesses: ["asphyxiation", "zero gravity"]
                }
        ]
        }
    ],
    battleResults : function(){
        
        for(var i = 0; i < superhero.authorityVillains.length; i++){
            // console.log(superhero.powerLevel)  <-- Test objects-->
            // console.log(superhero.authorityVillains[i].villainName)  <-- Test objects-->
            if(superhero.powerLevel > superhero.authorityVillains[i].powerLevel){
                console.log(`${superhero.heroName} defeated ${superhero.authorityVillains[i].villainName}.`)
            } else {
                console.log(`${superhero.authorityVillains[i].villainName} defeated ${superhero.heroName}.`)
            }
        }
    }


}

superhero.battleResults()

/* haveBirthday:function(){
    
}











*/