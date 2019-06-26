// JS OBJECT EXAMPLE
// ----
const drink = {
  id: "xhs8Pla",
  name: "Lemonade",
  price: {
    sale: 99,
    full: 129
  }
};

// shallow copies
// const drinkClone = Object.assign({}, drink);
// const drinkClone = { ...drink };

// deep copy
const drinkStringified = JSON.stringify(drink);
const drinkClone = JSON.parse(drinkStringified);

drinkClone.id = "abcd";
drinkClone.price.sale = 79;

console.log(drink);
// -----------------------------------------------------
// Delete Object Property
// -----------------------------------------------------

// slow
// delete drink.id;

drink.id = undefined;

if (drink.id) {
  console.log("Has ID...");
}

console.log(drink.hasOwnProperty("id"));

const { price, ...rest } = drink;
console.log(price, rest, drink);
// -----------------------------------------------------
// Update Object Property
// -----------------------------------------------------
function propUpdate(prop, value) {
  drink[prop] = value;
}

propUpdate("brand", "My Drinks Co.");

console.log(drink);
// -----------------------------------------------------
// Property and value existence
// -----------------------------------------------------
// value exists

if (drink.id) {
  console.log(drink.id);
}

for (const prop in drink) {
  if (drink[prop] === "Lemonade") {
    console.log(drink[prop]);
  }
}

const hasLemonade = Object.values(drink).includes("Lemonade");
console.log(hasLemonade);

// property exists
//   console.log(drink.hasOwnProperty('name'));
console.log(Object.prototype.hasOwnProperty.call(drink, "name"));
//   console.log(Object.keys(drink).includes('name'));

// -----------------------------------------------------
// Explore Object
// -----------------------------------------------------
const {
  id: myId,
  price: { full },
  ...rest
} = drink;

const { sale, full: fullPrice } = drink.price;
console.log(sale, fullPrice);
console.log(myId, name, full, rest);
// -----------------------------------------------------
// shorthand prop and methods
// get object details inside functions
// -----------------------------------------------------
const id = 'xhs8Pla';
const name = 'Lemonade';
const price = 99;

const someKey = 'name';

const drink = {
  id,
  [someKey]: name,
  price,
  getDrinkDetails() {
    return `Drink ${this.name} (${this.price})`;
  },
};

console.log(drink);