//import Warrior from "./Warrior.js";
import Wizard from "./Wizard.js";

export default class Hero {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.weaponBag = [];
    this.currentWeapon;
    if (this instanceof Wizard) {
      this.health = 150;
    } else {
      this.health = 100;
    }
  }
  //Put a weapon in the wapon bag
  takeWeapon(weapon) {
    // can I use this weapon
    if (this.type !== weapon.hero) {
      throw new Error("You can not use this weapon!");
    }
    // is there room in the bag

    if (this.weaponBag.length >= 2) {
      throw new Error("There is not enough room in your bag.");
    }

    this.weaponBag.push(weapon);
  }
  //Remove a weapon from the weapon bag
  removeWeapon(type) {
    this.weaponBag = this.weaponBag.filter((item) => item.type !== type);
    // missing functionality for throwing the weapon into the battlefield
  }

  //Select active weapon
  setCurrentWeapon() {
    if (this.weaponBag.length <= 0) {
      throw new Error("You have no weapons, take weapon");
    }
    this.currentWeapon = this.weaponBag[0];
  }
}
