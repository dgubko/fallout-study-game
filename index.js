// This line of code will declare a variable and assign it to a value stored from previous page
var characterName = localStorage.getItem("character");
var playerCharacter = new PlayerCharacter(characterName);
var ghoul = new Enemy("Mr.Parker", "ghoul");
var raider = new Enemy("DEMO", "raider");
var deathClaw = new Enemy("Legendary death claw", "death claw");
var assaultron = new Enemy("Assaultrone", "assaultrone");
var badlands = new Location("Dunes", "badlands", raider);
var factory = new Location("Wilson atomatoys factory", "factory", assaultron);
var forest = new Location("Forest", "forest", ghoul);
var street = new Location("Concord", "street", deathClaw);

// Utility functions
function loadLevel1() {
  // on 1st level location is street.
  street.loadLocation();
  playerCharacter.welcome();
}

// Game functionality
loadLevel1();
