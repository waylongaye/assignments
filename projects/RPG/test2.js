while (true) {

    var input = readline.question("What would you like to do? [W to walk|F to fight| U + item to use an item| R to run | p to see self\n");

    if (input === "w" || input === "W") {
        walk();
    }

    if (input === "F" || input === "f") {
        fight();
    }

    if (player.enemiesKilled === 3) {            //Check if the kill count is 3 if it is, break the loop and set hasWon to true;
        hasWon = true;
        break;
    }

    if (input === "U Bacta" || input === "U Bacta Fluid") {
        player.useItem("Bacta Fluid", this.inventory);
    }

    if (input === "U Force" || input === "U Force Crystal") {
        player.useItem("Force Crystal", this.inventory);
    }

    if (input === "U Light" || input === "U Lightsaber Crystal") {
        player.useItem("Lightsaber Crystal", this.inventory);
    }

    if (input === "R" || input === "Run" || input === "r" && isEnemyHere === true) {
        run();

    }

    if (input === "P" || input === "p") {
        player.print();
    }
    if (hasWon) {
        console.log("You did it young Padawan, You are now a full fledged Jedi Knight");
        hasWon = true;
        break;
    }
    if (isAlive === false) {
        break;
    }
    var reg = new RegExp(/[^wfur]ig/);
    if (reg.test(input)) {
        console.log("That's not a valid thing you can do.");
    }