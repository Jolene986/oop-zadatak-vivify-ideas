import logger from "./classes/Logger.js";

import Wizard from "./classes/Wizard.js";
import Warrior from "./classes/Warrior.js";
import Weapon from "./classes/Weapon.js";
import Dragon from "./classes/Dragon.js";
import Spider from "./classes/Spider.js";
import Battle from "./classes/Battle.js";

let battlefield = [];

let wizard = new Wizard("Gandalf", "wizard");
let warrior = new Warrior("Gimly", "warrior");

let sword = new Weapon("sword", "warrior");
let spear = new Weapon("spear", "warrior");
let spell = new Weapon("spell", "wizard");

let dragon = new Dragon("Smaug");
let spider = new Spider("Tarantula");

warrior.takeWeapon(sword);
warrior.takeWeapon(spear);
//warrior.takeWeapon(spear); // throws an error
warrior.removeWeapon("spear");

warrior.setCurrentWeapon();
dragon.setAttack();

let battle = new Battle(warrior, dragon);
battle.fight();
