function Pastry(name, hasJam, hasSprinkles) {
    this.name = name;
    this.hasJam = hasJam;
    this.hasSprinkles = hasSprinkles
}

const cupcake = new Pastry("Cupcake", true, true)
const muffin = new Pastry("Muffin", true, false)

console.log(cupcake)

Pastry.prototype.servings = 1

console.log(cupcake.hasOwnProperty('servings'))
console.log(cupcake.__proto__.hasOwnProperty('servings'))
