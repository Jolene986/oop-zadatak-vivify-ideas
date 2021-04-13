import Hero from "./Hero.js";

export default class Wizard extends Hero {
  constructor(name, type, health) {
    super(name, health);
    this.type = type;
  }
}
