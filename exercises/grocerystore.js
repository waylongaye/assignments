var shopper = {
    itemsBought: [" grapes", " peaches", " spinach ", " beer"],
    legalAlcohol: true,
    quantity: [4, 6, 8],
    say: function(words) {
        console.log("The shopper bought " + words)
    }
}
shopper.say(shopper.quantity[1] + shopper.itemsBought[1])



/*


speak: function(phrase){
                console.log("hello " + phrase)
            }
                person.speak("Waylon!") <--- this prints "hello Waylon!"







*/