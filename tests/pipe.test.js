const { pipe } = require('../index');

describe('pipe', () => {
  it('should sum values', () => {
    const sumThree = arg => 3 + arg;
    const sumFour = arg => 4 + arg;

    const result = pipe(
      sumThree,
      sumFour
    )(5);
    expect(result).toBe(12);
  });

  it('should sum more values', () => {
    const sumThree = arg => 3 + arg;
    const sumFour = arg => 4 + arg;
    const divideByTwo = arg => arg / 2;

    const result = pipe(
      sumThree,
      sumFour,
      divideByTwo
    )(127);

    expect(result).toBe(67);
  });

  it('should throw if no argument is specified', () => {
    expect(() => pipe()).toThrow(Error);
  });
});
