{
  enum Days {
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY'
  }

  const day: Days = 0;

  enum DickSize {
    'XL' = 8,
    'L' = 7,
    'M' = 6,
    'S' = 5,
    'XS' = 4
  }

  const yourDick: DickSize = 100; //does not occur compile error
}