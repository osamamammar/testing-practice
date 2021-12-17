const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  div: (a, b) => (b === 0 ? null : a / b),
  mul: (a, b) => a * b,
};

export default calculator;
