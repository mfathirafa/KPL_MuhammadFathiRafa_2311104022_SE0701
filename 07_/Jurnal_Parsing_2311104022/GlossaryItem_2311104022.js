const fs = require('fs');

class GlossaryItem_2311104022 {
  static ReadJSON() {
    try {
      const data = fs.readFileSync('jurnal7_3_2311104022.json', 'utf8'); 
      const obj = JSON.parse(data);

      const entry = obj.glossary.GlossDiv.GlossList.GlossEntry;

      console.log("=== Glossary Entry ===");
      console.log(`ID         : ${entry.ID}`);
      console.log(`Sort As    : ${entry.SortAs}`);
      console.log(`Gloss Term : ${entry.GlossTerm}`);
      console.log(`Acronym    : ${entry.Acronym}`);
      console.log(`Abbrev     : ${entry.Abbrev}`);
      console.log(`Definition : ${entry.GlossDef.para}`);
      console.log(`See Also   : ${entry.GlossDef.GlossSeeAlso.join(', ')}`);
      console.log(`Gloss See  : ${entry.GlossSee}`);
    } catch (err) {
      console.error("Terjadi kesalahan saat membaca file JSON:", err.message);
    }
  }
}

// Panggil method untuk membaca JSON
GlossaryItem_2311104022.ReadJSON();
