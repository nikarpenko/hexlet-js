import _ from 'lodash';

import app from './src/index.js';

console.log('Hello, Hexlet!');
console.log(_.last(['one', 'two']));

const fn = (a, b) => {
  const c = a + b;
  return c;
};

app();
