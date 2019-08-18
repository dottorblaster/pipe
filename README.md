# `pipe`
Easily pipe unary functions in JavaScript.

Example:

```js
const { pipe } = require('@dottorblaster/pipe');

const sumThree = arg => 3 + arg;
const sumFour = arg => 4 + arg;
const divideByTwo = arg => arg / 2;

const result = pipe(
    sumThree,
    sumFour,
    divideByTwo
)(127); // result will be 67
```

