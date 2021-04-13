import randomGenerator from "../utils/randomGenerator.js";
import logger from "./Logger.js";
export default class Battle {
  constructor(hero, monster) {
    this.hero = hero;
    this.monster = monster;
    this.winner;
  }

  fight() {
    while (this.hero.health || this.monster.health > 0) {
      if (randomGenerator() > 50) {
        logger.writeLog(
          `${this.monster.name} attacks ${this.hero.name} with ${this.monster.currentAttack.type}`
        );
        this.hero.health -= this.monster.currentAttack.damage;
      } else {
        this.monster.health -= this.hero.currentWeapon.damage;
        logger.writeLog(
          `${this.hero.name} attacks ${this.monster.name} with ${this.hero.currentWeapon.type}`
        );
      }
    }
    this.hero.health > 0
      ? this.setWinner(this.hero.name)
      : this.setWinner(this.monster.name);
  }
  setWinner(winner) {
    this.winner = winner;
    logger.writeLog(
      `${this.winner.name} is the winner of the duel with ${
        this.monster.health < 0 ? this.monster.name : this.hero.name
      }`
    );
  }
}
