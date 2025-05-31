function CariNilaiPangkat(a, b) {
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;

  let result = 1;
  try {
    for (let i = 0; i < b; i++) {
      result = checkedMultiply(result, a);
    }
    return result;
  } catch (e) {
    return -3;
  }
}

function checkedMultiply(x, y) {
  let res = x * y;
  if (!Number.isSafeInteger(res)) {
    throw new Error("Overflow");
  }
  return res;
}

function hitung() {
  const a = parseInt(document.getElementById("inputA").value);
  const b = parseInt(document.getElementById("inputB").value);
  const hasil = CariNilaiPangkat(a, b);
  document.getElementById("output").innerText = `Hasil: ${hasil}`;
}

// Export untuk unit test
if (typeof module !== 'undefined') {
  module.exports = { CariNilaiPangkat };
}
