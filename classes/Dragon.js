import Monster from "./Monster.js";

export default class Dragon extends Monster {
  constructor(name, melee, health, specialPower) {
    super(name, melee, health, specialPower);
    this.melee = {
      type: "hit",
      damage: 5,
    };
    this.specialPower = {
      type: "fire",
      damage: 20,
    };
  }
}
