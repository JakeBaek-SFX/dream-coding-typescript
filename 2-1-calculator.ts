{
  type operator = 'add' | 'substract' | 'multiply' | 'divide' |'remainder';

  const calculate = (operator: string, firstNumber: number, secondNumber: number): number | undefined => {
    switch(operator) {
      case 'add': 
        return firstNumber + secondNumber;
      case 'substract':
        return firstNumber - secondNumber;
      case 'multiply': 
        return firstNumber * secondNumber;
      case 'divide':
        return firstNumber / secondNumber;
      case 'remainder':
        return firstNumber % secondNumber;
      default: 
        throw Error('unknown Error');
    }
  }

  console.log(calculate('add', 1, 3)); // 4
  console.log(calculate('substract', 3, 1)); // 2
  console.log(calculate('multiply', 4, 2)); // 8
  console.log(calculate('divide', 4, 2)); // 2
  console.log(calculate('remainder', 5, 2)); // 1

}
  