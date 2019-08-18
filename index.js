const reducer = (accumulator, currentFunction) => currentFunction(accumulator);

const pipe = (...functions) => {
  if (functions.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return argument => functions.reduce(reducer, argument);
};

module.exports = { pipe };
