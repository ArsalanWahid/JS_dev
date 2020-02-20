
const life = {
  die() {
    console.log('I am dead')
  },
  live() {
    console.log('I am alive')
  }
}

const animal = {
  prototype: life,
  health: 0,
  eatFood(num){
    this.health += num
    console.log(`Ate ${num} food`) 
    console.log(`health now ${this.health}`);
  },
  starve() {
    this.health -= 1
    console.log(`hungry! health now ${this.health}`)
  }
}

const dog = {
  prototype: animal,
  sleep: () => console.log('Zzz..')
}

dog.prototype.eatFood(1)
dog.prototype.eatFood(1)
dog.prototype.starve()
dog.sleep()
//Is there not a better way to name they prototype?
dog.prototype.prototype.die()