import randomGenerator from "../utils/randomGenerator.js";

export default class Monster {
  constructor(name, melee = {}, health, specialPower = {}) {
    this.name = name;
    this.health = 200;
    this.melee = melee;
    this.specialPower = specialPower;
    this.currentAttack;
  }

  setAttack() {
    if (randomGenerator() >= 50) {
      this.currentAttack = this.specialPower;
    } else {
      this.currentAttack = this.melee;
    }
  }
}
