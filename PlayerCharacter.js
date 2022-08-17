class PlayerCharacter {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.baseHealth = 100;
    this.damageRange = [5, 15];
    this.level = 1;
    this.isDead = false;
  }

  upLevel() {
    this.level = this.level + 1;
    this.health = this.health * 1.2;
    this.damageRange[0] = this.damageRange[0] * 1.15;
    this.damageRange[1] = this.damageRange[1] * 1.15;
  }
  damage() {
    return Math.floor(
      Math.random() * (this.damageRange[1] - this.damageRange[0] + 1) +
        this.damageRange[0]
    );
  }

  getDamage(damage) {
    this.health = this.health - damage;
    if (this.health < 1) {
      this.isDead = true;
    }
  }

  welcome() {
    document.getElementById(
      "name-block"
    ).innerText = `${this.name}, welcome to level ${this.level}!`;
  }

  displayHealth() {
    var characterHealthBlock = document.getElementById("character-health");
    characterHealthBlock.style.display = "flex";
    var percent = (this.health / this.baseHealth) * 100;
    document.getElementById("status-line-current").style.width = `${percent}%`;
    document.getElementById(
      "character-health-range"
    ).innerText = `${this.health} / ${this.baseHealth}`;
  }
}
