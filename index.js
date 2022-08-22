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

function getLocation() {
  var levelNumber = playerCharacter.level;
  return levels[levelNumber - 1];
}

function getEnemy() {
  var location = getLocation();
  return location.enemy;
}

function loadLevel() {
  var location = getLocation();
  location.loadLocation();
  playerCharacter.welcome();
}

function endLevel() {
  var enemy = getEnemy();
  document.getElementById("enemy-damage-number").style.display = "none";
  document.getElementById("character-damage-number").style.display = "none";
  document.getElementById("character-health").style.display = "none";
  document.getElementById("enemy-health").style.display = "none";
  document.getElementById("end-msg").style.display = "flex";
  document.getElementById(
    "enemy-death-msg"
  ).innerText = `The ${enemy.name} is dead!`;
  if (playerCharacter.level >= 4) {
    document.getElementById("end-level-btn").style.display = "none";
    document.getElementById("final-msg").innerText = "You won the game!";
  }
}

// Game functionality
loadLevel();

// Click on start

document.getElementById("start-button").addEventListener("click", function () {
  var enemy = getEnemy();
  document.getElementById("start-msg").style.display = "none";
  document.getElementById("enemy-button").style.display = "block";
  document.getElementById("enemy-button").removeAttribute("disabled");
  enemy.exploreEnemy(playerCharacter.level);
  enemy.displayHealth();
  playerCharacter.displayHealth();
});

document.getElementById("enemy-button").addEventListener("click", function () {
  var enemy = getEnemy();
  var characterDamage = playerCharacter.damage();
  document.getElementById("character-damage-number").style.display = "block";
  document.getElementById(
    "character-damage-number"
  ).innerText = `-${characterDamage}`;
  enemy.getDamage(characterDamage);
  if (enemy.isDead) {
    endLevel();
  } else {
    var enemyDamage = enemy.damage();
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
  loadLevel();
});
