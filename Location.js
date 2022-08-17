class Location {
  constructor(name, type, enemy) {
    this.name = name;
    this.type = type || "forest";
    this.enemy = enemy;
    this.isVisited = false;
  }

  announceLocation() {
    var locationBlock = document.getElementById("location-msg"); //get HTML element with id atribute location-msg as a js object.
    locationBlock.innerText = `You are at the ${this.name}`; //changes inner text in HTML element, this.name refers to object property name.
  }
  announceEnemy() {
    var enemyBlock = document.getElementById("enemy-msg"); //get HTML element with id atribute enemy-msg as a js object.
    enemyBlock.innerText = `${this.enemy.name} is attacking you`; //changes inner text in HTML element, this.enemy refers to object property enemy. this.enemy is an object passed to contructor function from outside.
  }
  leaveLocation() {
    this.isVisited = true;
  }
  changeImages() {
    var imageBlock = document.getElementById("game-page");
    imageBlock.style.background = `url(./images/locs/${this.type}.jpeg)`;
    var enemyPicture = document.getElementById("enemy-picture");
    enemyPicture.setAttribute(
      "src",
      `./images/enemies/${this.enemy.type.replace(" ", "-")}.png`
    );
  }
  loadLocation() {
    this.changeImages();
    this.announceLocation();
    this.announceEnemy();
  }
}
