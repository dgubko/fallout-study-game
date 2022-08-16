// This line of code will declare a variable and assign it to a value stored from previous page
var characterName = localStorage.getItem("character");

// CODE BELOW

var raider = new Enemy("Zig", "raider");
var ghoul = new Enemy("Mr.Parker", "ghoul");
var assaultron = new Enemy("Assaultron", "assaultron");
var deathClaw = new Enemy("Legendary Death Claw", "death claw");

var forestLocation = new Location("South Forest", "forest", ghoul);
var streetLocation = new Location("Concord", "street", deathClaw);
var factoryLocation = new Location(
  "Wilson Atomatoys factory",
  "factory",
  assaultron
);
var badlandLocation = new Location("Dunes", "badland", raider);
streetLocation.announceLocation();

streetLocation.changeImages();

streetLocation.announceEnemy();
