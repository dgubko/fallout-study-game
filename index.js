// This line of code will declare a variable and assign it to a value stored from previous page
var characterName = localStorage.getItem("character");
var playerCharacter = new PlayerCharacter(characterName);
var ghoul = new Enemy("Mr.Parker", "ghoul");
var raider = new Enemy("DEMO", "raider");
var deathClaw = new Enemy("Legendary death claw", "death claw");
var assaultron = new Enemy("Assaultron", "assaultron");
var badland = new Location("Dunes", "badland", raider);
var factory = new Location("Wilson atomatoys factory", "factory", assaultron);
var forest = new Location("Forest", "forest", ghoul);
var street = new Location("Concord", "street", deathClaw);
var levels = [street, badland, forest, factory];
// Utility functions
function loadLevel1() {
  // on 1st level location is street.
  street.loadLocation();
  playerCharacter.welcome();
}

function loadLevel2() {
  badland.loadLocation();
  playerCharacter.welcome();
}

function endLevel() {
  document.getElementById("character-health").style.display = "none";
  document.getElementById("enemy-health").style.display = "none";
  document.getElementById("end-msg").style.display = "flex";
  document.getElementById(
    "enemy-death-msg"
  ).innerText = `The ${deathClaw.name} is dead!`;
}

// Game functionality
loadLevel1();

// Click on start

document.getElementById("start-button").addEventListener("click", function () {
  document.getElementById("start-msg").style.display = "none";
  document.getElementById("enemy-button").style.display = "block";
  document.getElementById("enemy-button").removeAttribute("disabled");
  deathClaw.exploreEnemy(playerCharacter.level);
  deathClaw.displayHealth();
  playerCharacter.displayHealth();
});

document.getElementById("enemy-button").addEventListener("click", function () {
  var characterDamage = playerCharacter.damage();
  document.getElementById("character-damage-number").style.display = "block";
  document.getElementById(
    "character-damage-number"
  ).innerText = `-${characterDamage}`;
  deathClaw.getDamage(characterDamage);
  if (deathClaw.isDead) {
    endLevel();
  } else {
    var enemyDamage = deathClaw.damage();
    document.getElementById("enemy-damage-number").style.display = "block";
    document.getElementById(
      "enemy-damage-number"
    ).innerText = `-${enemyDamage}`;
    playerCharacter.getDamage(enemyDamage);
  }
});

document.getElementById("end-level-btn").addEventListener("click", function () {
  playerCharacter.upLevel();
  document.getElementById("end-msg").style.display = "none";
  document.getElementById("start-msg").style.display = "flex";
  document.getElementById("enemy-damage-number").style.display = "none";
  document.getElementById("character-damage-number").style.display = "none";
  loadLevel2();
});
