{
  interface Employee {
    pay: () => void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('paycheck deposited');
    }

    workFullTime() {

    }
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log('paycheck deposited');
    }

    workPartTime() {
      
    }
  }

  const pay = <E extends Employee>(person: E): E => {
    person.pay();
    return person;
  }

  const jake = new FullTimeEmployee();
  const mike = new PartTimeEmployee();

  const jakeAfterPay = pay(jake);
  const mikeAfterPay = pay(mike);

  const getValue = <T, K extends keyof T>(object: T, key: K): T[K] => {
    return object[key];
  }

  const obj = {
    name: 'jake'
  }

  console.log(getValue(obj, 'name'));
  
}