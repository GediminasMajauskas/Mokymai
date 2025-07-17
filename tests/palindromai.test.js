const palindromai = require('../palindromai.js');

test('grąžina true, kai žodis yra palindromas (pvz. "savas")', () => {
  expect(palindromai('savas')).toBe(true);
});

test('grąžina false, kai žodis nėra palindromas (pvz. "namas")', () => {
  expect(palindromai('namas')).toBe(false);
});