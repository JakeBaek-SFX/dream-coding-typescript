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
}