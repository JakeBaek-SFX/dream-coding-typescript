{
  const checkNotNull = <T>(arg: T | null): T => {
    if(arg === null) {
      throw new Error('type error');
    }

    return arg;
  }

  const number: number = checkNotNull(123);
  console.log(number);
  
}