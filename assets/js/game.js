// robo gladiators
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[3]);
console.log(enemyNames.length);


// fight function
var fight = function(enemyNames) {
    // fight function statement

    window.alert("Welcome to Robot Gladiators!");

  // Ask the player if they want to continue fighting
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
    if (promptFight == "fight" || promptFight == "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            enemyNames + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
        
        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
        }  else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
         playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

    // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } else { 
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    // player choice to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(enemyNames + " has decided to skip this fight. Goodbye!");
            // subtrat money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }

    //  if no (false), ask question again by running fiight() again
        else {
            fight();
        }
        
        }   else {
         window.alert("You need to choose a valid option. Try again!");
         }

         for(var i = 0; i < enemyNames.length; i++) {
            console.log("enemyNames[i]");
            console.log(i);
            console.log(enemyNames[i] + " is at " + i + " index");
         }
};

// run fight function to start game
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}