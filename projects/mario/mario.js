var goombaPrice = 5;
var bobombPrice = 7;
var cheepCheepPrice = 11;
var goomba = document.getElementById("goombaCaught");
var bobomb = document.getElementById("bobCaught");
var cheepcheep = document.getElementById("cheepCaught");

goomba.oninput = function () {
    var gCaught = document.getElementById("goombaCaught").value;    
    var totalPrice = goombaPrice * gCaught;
    document.getElementById("goomba-price").innerHTML = totalPrice;    
}

bobomb.oninput = function () {
    var bCaught = document.getElementById("bobCaught").value;    
    var totalPrice = bobombPrice * bCaught;
    document.getElementById("bob-omb-price").innerHTML = totalPrice;    
}

cheepcheep.oninput = function () {
    var cCaught = document.getElementById("cheepCaught").value;
    var totalPrice = cheepCheepPrice * cCaught;
    document.getElementById("cheep-cheep-price").innerHTML = totalPrice;    
}

window.oninput = function () {
    var goomba = document.getElementById("goomba-price").innerHTML;
    var bobomb = document.getElementById("bob-omb-price").innerHTML;
    var cheepcheep = document.getElementById("cheep-cheep-price").innerHTML;
    var fullTotal = +goomba + +bobomb + +cheepcheep;
    document.getElementById("total").innerHTML = "Full Total: " + fullTotal;
}

// find out how many have been caught
// multiply how many have been caught by its price
// display price in span
// oninput executes a javascript when a user inputs a value