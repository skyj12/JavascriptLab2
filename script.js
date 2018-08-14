function startGame() {
    let answer = prompt("Would you like to play a game?");
    if (answer.toLowerCase() === "yes") {
        let userName = prompt("Enter your character name!");
        startCombat(userName);
    } else if (answer.toLowerCase() === "no") {
        console.log("maybe we can play later?");
    }
}

function getDamage() {
    return Math.floor(Math.random() * 2 + 1)
}

function startCombat(name) {
    let userHealth = 40;
    let grantHealth = 10;
    let wins = 0;
    // let userName = prompt("Enter your character name!");
    
    // console.log(`${name}'s Health: ${userHealth}, Grant's Health: ${grantHealth}, ${name}'s Wins: ${wins}`);

   while (wins<3 && grantHealth >=0) {
      let userMove = prompt("Would you like to attack or quit?");
      if (userMove.toLowerCase() === "quit") {
            console.log(" maybe next time!");
            return;
      }
        
        if (userMove === "attack") {
            console.log(`${name}'s health is now: ${userHealth -= getDamage()}`);
            console.log(`Grant's Health is now: ${grantHealth -= getDamage()}`);
            
        if (userHealth <= 0) {
                console.log("Game over. You lose, Grant wins!");

            } else if (grantHealth <= 0) {
                wins++;
                if (wins === 3) {
                    console.log("You beat Grant! You are the best!");

                }
                console.log(`${name} wins: ${wins}`);
                grantHealth = 10;
            }
             

        }
    }
    
}
startGame();
