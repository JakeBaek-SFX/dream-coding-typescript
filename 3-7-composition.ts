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

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMS_PER_SHOT: number = 7; //class level
    private coffeeBeans: number = 1000; //object level

    constructor (coffeeBeans: number, private milkFrother: IMilkSteamer, private sugarMixer: ISugarMixer) {
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

    protected extract(shots: number): CoffeeCup {
      console.log(`${shots} of coffee are made`);
      return {
        shots: shots,
        hasMilk: false
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = this.makeCoffee(shots);
      return this.sugarMixer.addSugar(this.milkFrother.makeMilk(coffee));
    }
  }

  interface IMilkSteamer {
    makeMilk(cup: CoffeeCup): CoffeeCup
  }

  class CheapMilkSteamer implements IMilkSteamer {
    private steamMilk() {
      console.log('steaming cheap milk');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {...cup, hasMilk: true};
    }
  }

  class FancyMilkSteamer implements IMilkSteamer {
    private steamMilk() {
      console.log('steaming fancy milk');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {...cup, hasMilk: true};
    }
  }

  class NoMilk implements IMilkSteamer {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  interface ISugarMixer {
    addSugar(cup: CoffeeCup): CoffeeCup
  }

  class SugarMixer implements ISugarMixer {
    private getSugar() {
      console.log('getting regular sugar');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const hasSugar = this.getSugar();
      return {...cup, hasSugar};
    }
  }

  class FancySugarMixer implements ISugarMixer {
    private getSugar() {
      console.log('getting fancy sugar');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const hasSugar = this.getSugar();
      return {...cup, hasSugar};
    }
  }

  class NoSugar implements ISugarMixer {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //milk
  const cheapMilkSteamer = new CheapMilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();
  const noMilkSteamer = new NoMilk();

  //sugar
  const regularSugarMixer = new SugarMixer();
  const fancySugarMixer = new FancySugarMixer();
  const noSugar = new NoSugar();

  //machines
  const sweetCoffeeMachine = new CoffeeMachine(10, noMilkSteamer, regularSugarMixer);
  const latterMachine = new CoffeeMachine(20, fancyMilkSteamer, noSugar);
  const caramelMachinatto = new CoffeeMachine(30, cheapMilkSteamer, fancySugarMixer);
}