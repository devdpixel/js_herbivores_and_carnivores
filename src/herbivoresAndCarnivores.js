'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((a) => a.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;

      if (victim.health <= 0) {
        victim.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
