console.log("HEllo World");
class Pizza{
  #sauce;
  constructor(pizzaType,pizzaSize){
    this.size=pizzaSize;
    this.type=pizzaType;
    this.crust="solid";
    this.toppings=[];
    this.#sauce="soya sauce";
  }
  get pizzaCrust(){
    return this.crust;
  }
  set pizzaCrust(pizzaCrust){
    this.crust=pizzaCrust;
  }
  getToppings(){
    return this.toppings;
  }
  setToppings(topping){
    this.toppings.push(topping); 
  }
  bake(){
    console.log(`baking a ${this.size} ${this.type} ${this.crust} solid pizza with ${this.toppings} and a ${this.#sauce}`);
  }
}

class Speciality extends Pizza{
  constructor(pizzaType){
  super(pizzaType);
  }
  slice(){
    return `The pizza of type ${this.type} can be divided in 8 pieces`;
  }
}
const myPizza=new Pizza("pepperoni","medium");
myPizza.pizzaCrust="rock hard";
myPizza.setToppings("paprika");
myPizza.setToppings("lemon");
myPizza.type="barbeque grilled";
myPizza.bake();
const splt=new Speciality("pepper");
console.log(splt.slice());
console.log(myPizza.sauce);