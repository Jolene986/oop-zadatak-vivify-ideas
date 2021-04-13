export default class Weapon {
  constructor(type, hero, damage) {
    this.type = type;
    this.hero = hero;
    if (this.type == "sword") {
      this.damage = 10;
    } else if (this.type == "spear") {
      this.damage = 15;
    } else {
      this.damage = 20;
    }
  }
}
