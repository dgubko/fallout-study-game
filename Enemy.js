class Enemy {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 0;
    this.fullHealth = 0;
    this.damageRange = [];
    this.isDead = false;
  }

  exploreEnemy(level) {
    if (level <= 2) {
      this.fullHealth = 50;
      this.damageRange = [1, 10];
    } else if (level <= 4) {
      this.fullHealth = 75;
      this.damageRange = [5, 15];
    } else {
      this.fullHealth = 100;
      this.damageRange = [15, 30];
    }
    this.health = this.fullHealth;
  }

  damage() {
    return Math.floor(
      Math.random() * (this.damageRange[1] - this.damageRange[0] + 1) +
        this.damageRange[0] // returns random number within damage range where min value has index 0 and max value has index 1.
    );
  }
  getDamage(damage) {
    this.health = this.health - damage;
    if (this.health < 1) {
      this.isDead = true;
    }
    this.displayHealth();
  }

  displayHealth() {
    var enemyHealthBlock = document.getElementById("enemy-health");
    enemyHealthBlock.style.display = "flex";
    enemyHealthBlock.querySelector("p:first-child").innerText = this.name;
    var percent = this.health > 0 ? (this.health / this.fullHealth) * 100 : 0;
    document.getElementById("enemy-current-health").style.width = `${percent}%`;
  }
}
