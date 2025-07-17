const circleArea = require('../apsPlotas.js');

test('apskaičiuoja ploto kai r = 0', () => {
  expect(circleArea(0)).toBe(0);
});

test('apskaičiuoja ploto kai r = 1', () => {
  expect(circleArea(1)).toBeCloseTo(Math.PI);
});

test('apskaičiuoja ploto kai r = 2.5', () => {
  expect(circleArea(2.5)).toBeCloseTo(Math.PI * 2.5 * 2.5);
});

test('apskaičiuoja ploto kai r = 30', () => {
  expect(circleArea(30)).toBeCloseTo(Math.PI * 30 * 30);
});

test('apskaičiuoja ploto kai r = 230', () => {
  expect(circleArea(230)).toBeCloseTo(Math.PI * 230 * 230);
});


test('mėtomas klaidos kai r neigiamas', () => {
  expect(() => circleArea(-1)).toThrow('Radius must be a non-negative number');
});

test('mėtomas klaidos kai r nėra skaičius', () => {
  expect(() => circleArea("a")).toThrow('Radius must be a non-negative number');
});