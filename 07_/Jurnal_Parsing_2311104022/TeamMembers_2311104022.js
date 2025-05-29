const fs = require('fs');

class TeamMembers_2311104022 {
  static ReadJSON() {
    try {
      const data = fs.readFileSync('jurnal7_2_2311104022.json', 'utf8'); 
      const obj = JSON.parse(data);
      const members = obj.members;

      console.log("Team member list:");
      members.forEach(member => {
        const fullName = `${member.firstName} ${member.lastName}`;
        console.log(`${member.nim} ${fullName} (${member.age} ${member.gender})`);
      });
    } catch (err) {
      console.error("Terjadi kesalahan saat membaca file JSON:", err.message);
    }
  }
}

// Panggil method ReadJSON
TeamMembers_2311104022.ReadJSON();
