const didSk = require('../didSk.js');

test('grąžina didžiausią skaičių iš teigiamų skaičių masyvo', () => {
  expect(didSk([1, 5, 3, 9, 2])).toBe(9);
});

test('grąžina didžiausią skaičių iš neigiamų skaičių masyvo', () => {
  expect(didSk([-10, -5, -3, -8])).toBe(-3);
});

test('grąžina skaičių kai masyve vienas elementas', () => {
  expect(didSk([42])).toBe(42);
});

test('mėtoma klaida jei perduodamas tuščias masyvas', () => {
  expect(() => didSk([])).toThrow('Input must be a non-empty array');
});

test('mėtoma klaida jei perduodamas ne masyvas', () => {
  expect(() => didSk('ne masyvas')).toThrow('Input must be a non-empty array');
});