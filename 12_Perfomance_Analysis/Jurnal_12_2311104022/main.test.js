const { CariNilaiPangkat } = require('./main');

test('Pangkat 2^3 = 8', () => {
  expect(CariNilaiPangkat(2, 3)).toBe(8);
});

test('Pangkat dengan b = 0', () => {
  expect(CariNilaiPangkat(0, 0)).toBe(1);
});

test('Pangkat dengan b < 0', () => {
  expect(CariNilaiPangkat(2, -1)).toBe(-1);
});

test('Pangkat dengan a > 100', () => {
  expect(CariNilaiPangkat(101, 2)).toBe(-2);
});

test('Pangkat dengan b > 10', () => {
  expect(CariNilaiPangkat(2, 11)).toBe(-2);
});

test('Pangkat overflow (9^30)', () => {
  expect(CariNilaiPangkat(9, 30)).toBe(-3);
});
