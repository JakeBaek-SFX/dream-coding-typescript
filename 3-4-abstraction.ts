{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  //public vs private vs protected

  interface CoffeeMaker {
    makeCoffee: (shots: number) => CoffeeCup
  }

  interface CommercialCoffeeMaker {
    makeCoffee: (shots: number) => CoffeeCup;
    fillCoffeeBeans: (beans: number) => void;
    clean: () => void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMS_PER_SHOT: number = 7; //class level
    private coffeeBeans: number = 1000; //object level

    constructor (coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeCoffeeMaker(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans)
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

    private extract(shots: number): CoffeeCup {
      console.log(`${shots} of coffee are made`);
      return {
        shots: shots,
        hasMilk: false
      }
    }

    makeCoffee = (shots: number): CoffeeCup => {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee(shots: number){
      const coffee = this.machine.makeCoffee(shots)
    }
  }
  class ProBarista{
    constructor(private machine: CommercialCoffeeMaker){}
    makeCoffee(shots: number) {
      const coffee = this.machine.makeCoffee(shots);
      this.machine.fillCoffeeBeans(100);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeCoffeeMaker(500);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee(5);
  pro.makeCoffee(10);
}