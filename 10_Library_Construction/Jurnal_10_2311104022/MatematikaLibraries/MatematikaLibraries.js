const MatematikaLibraries = {
  FPB: function(input1, input2) {
    while (input2 !== 0) {
      let temp = input2;
      input2 = input1 % input2;
      input1 = temp;
    }
    return Math.abs(input1);
  },

  KPK: function(input1, input2) {
    return Math.abs(input1 * input2) / this.FPB(input1, input2);
  },

  Turunan: function(persamaan) {
    const turunan = [];
    const pangkatAwal = persamaan.length - 1;

    for (let i = 0; i < persamaan.length - 1; i++) {
      const koef = persamaan[i];
      const pangkat = pangkatAwal - i;
      const hasil = koef * pangkat;

      if (hasil !== 0) {
        let term = (hasil === 1 ? "" : hasil);
        if (pangkat - 1 > 1) term += "x" + (pangkat - 1);
        else if (pangkat - 1 === 1) term += "x";
        turunan.push(term);
      }
    }

    return turunan.join(" + ").replace(/\+ -/g, "- ");
  },

  Integral: function(persamaan) {
    const integral = [];
    const pangkatAwal = persamaan.length - 1;

    for (let i = 0; i < persamaan.length; i++) {
      const koef = persamaan[i];
      const pangkat = pangkatAwal - i + 1;
      let hasil = koef / pangkat;

      let term = (hasil === 1 ? "" : hasil === -1 ? "-" : hasil);
      if (pangkat > 1) term += "x" + pangkat;
      else term += "x";
      integral.push(term);
    }

    integral.push("C");
    return integral.join(" + ").replace(/\+ -/g, "- ");
  }
};

module.exports = MatematikaLibraries;
