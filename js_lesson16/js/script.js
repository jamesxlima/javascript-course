// Classes

// Example
class Pizza {
  constructor(pizzaType) {
    this.type = pizzaType;
    this.size = "medium";
    this.crust = "original";
  }
  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza. `);
  }
}

// Pass a parameter into a class
const myPizza = new Pizza("pepperoni");
myPizza.bake();


// Factory Function
// Another way to create an object in JavaScript
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bakeTwo: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
  };
}

const myPizzaTwo = pizzaFactory("small");
myPizzaTwo.bakeTwo();

// Sources 👇
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://www.w3schools.com/js/js_classes.asp