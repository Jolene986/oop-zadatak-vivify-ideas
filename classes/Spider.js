import Monster from "./Monster.js";

export default class Spider extends Monster {
  constructor(name, melee, health, specialPower) {
    super(name, melee, health, specialPower);
    this.melee = {
      type: "hit",
      damage: 5,
    };
    this.specialPower = {
      type: "venom",
      damage: 8,
    };
  }
}
