//function
const add = (num1: number, num2: number): number => num1+num2

//async function
const jsFetchNum = (id: string): Promise<number> => new Promise((res, rej) => {res(100)})

//optional parameter
const printName = (firstName: string, lastName?: string) => {
  console.log(firstName);
  console.log(lastName);
}
printName('jake');

//default parameter
const printName2 = (firstName: string, lastName: string = 'baek'): void => {
  console.log(firstName);
  console.log(lastName);
}
printName('jake');

//rest parameter
const addNumbers = (...numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b);
}