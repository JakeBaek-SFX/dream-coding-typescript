{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  }

  //public vs private vs protected

  interface CoffeeMaker {
    makeCoffee: (shots: number) => CoffeeCup
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMS_PER_SHOT: number = 7; //class level
    private coffeeBeans: number = 1000; //object level

    constructor (coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0){
        throw new Error('beans should be bigger than 0');
      }
      console.log(`${beans} of beans are added`);
      
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('cleaning');
    }

    private grindBeans(shots: number) {
      console.log(`grind ${shots} shots of beans now`);

      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMS_PER_SHOT) {
        throw new Error(`you don't have enough beans bruh`)
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMS_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up now');
    }

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    private steamMilk(): void {
      console.log('steaming milk');
    }

    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasMilk: true
      }
    }

    makeCoffee(shots: number): CoffeeCup { 
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {...coffee, hasMilk: true, hasSugar: true}
    };
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    private addSugar(): void {
      console.log('adding sugar');
    }

    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasMilk: false,
        hasSugar: true
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();
      return {...coffee, hasMilk: true}
    }
  }

  const machines: CoffeeMachine[] = [
    //new CoffeeMachine(100),
    new CafeLatteMachine(50),
    new SweetCoffeeMaker(10)
  ]

  machines.forEach((machine) => {
    console.log('--------------------');
    machine.makeCoffee(1);
    console.log('--------------------');
  })
}