{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  const BEANS_GRAMS_PER_SHOT: number = 7;

  let coffeeBeans: number = 15;

  const makeCoffee = (shots: number): CoffeeCup => {
    if(coffeeBeans < shots * BEANS_GRAMS_PER_SHOT) {
      throw new Error('Not enough coffee beans');
    }

    coffeeBeans -= shots * BEANS_GRAMS_PER_SHOT;

    return {
      shots,
      hasMilk: false
    }
  }

  const coffee = makeCoffee(2);
  console.log(coffee);
}