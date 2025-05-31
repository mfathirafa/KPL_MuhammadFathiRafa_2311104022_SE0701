const { CariTandaBilangan } = require('./cariTandaBilangan');

test('input negatif menghasilkan "Negatif"', () => {
  expect(CariTandaBilangan(-5)).toBe("Negatif");
});

test('input positif menghasilkan "Positif"', () => {
  expect(CariTandaBilangan(10)).toBe("Positif");
});

test('input nol menghasilkan "Nol"', () => {
  expect(CariTandaBilangan(0)).toBe("Nol");
});
