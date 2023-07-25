{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  //public vs private vs protected

  class CoffeeMaker {
    private static BEANS_GRAMS_PER_SHOT: number = 7; //class level
    private coffeeBeans: number = 0; //object level

    constructor (coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeCoffeeMaker(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(10)
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0){
        throw new Error('beans should be bigger than 0');
      }
      this.coffeeBeans += beans;
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

  class User {
    private internalAge = 34;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if(num < 0){
        throw new Error('age cannot be under zero you dumb bitch')
      }
      this.internalAge = num;
    }
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('jake', 'baek');
  console.log({user});
  
  
}