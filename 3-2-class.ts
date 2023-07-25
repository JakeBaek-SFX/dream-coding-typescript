{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    static BEANS_GRAMS_PER_SHOT: number = 7; //class level
    coffeeBeans: number = 0; //object level

    constructor (coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeCoffeeMaker(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(10)
    }

    makeCoffee = (shots: number): CoffeeCup => {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMS_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMS_PER_SHOT;

      return {
        shots,
        hasMilk: false
      }
    }
  }
  
  const maker = new CoffeeMaker(32);
  console.log(maker.makeCoffee(2));
  
}