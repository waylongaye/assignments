var superhero = {
    heroName: "Authority",
    powerLevel: 96,
    superpowers: ["invulnerability", "super speed", "super strength", "regeneration"],
    weaknesses: ['water', 'electricity', 'extreme heat'],
    authorityVillains: [{
            villainName: "Animal",
            powerLevel: 85,
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
            powerLevel: 91,
            attributes: [
                {
                    superpowers: ["super intellect", "gravity control"],
                    weaknesses: ["asphyxiation", "zero gravity"]
                }
        ]
        }
    ],
    battleResults : function(){
        
        for(var i = 0; i < superhero.authorityVillains.powerLevel.length; i++){
            
            if(superhero.powerLevel[0] > superhero.authorityVillains.powerLevel[i]){
                return "test"
            }
        }
    }


},

battleResults()

/* haveBirthday:function(){
    
}











*/