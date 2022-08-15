// This line of code will declare a variable and assign it to a value stored from previous page
var characterName = localStorage.getItem("character");

// CODE BELOW
var forestLocation = new Location("South Forest", "forest", { type: "ghoul" });
var streetLocation = new Location("Concord", "street", { type: "death claw" });
var factoryLocation = new Location("Wilson Atomatoys factory", "factory", {
  type: "assaultron",
});
var badlandLocation = new Location("Dunes", "badland", { type: "raider" });
streetLocation.announceLocation();

streetLocation.changeImages();

streetLocation.announceEnemy();
