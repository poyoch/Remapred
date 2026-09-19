const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'js', 'products.js');
let content = fs.readFileSync(file, 'utf8');

// Replacements by ID
const changes = [
  { id: 'fotric-tp320a', gamaEs: 'Serie TP', gamaEn: 'TP Series' },
  { id: 'fotric-tk5', gamaEs: 'Serie TK', gamaEn: 'TK Series' },
  { id: 'fotric-tk6', gamaEs: 'Serie TK', gamaEn: 'TK Series' },
  { id: 'fotric-tk7', gamaEs: 'Serie TK', gamaEn: 'TK Series' },
  { id: 'fotric-tk8', gamaEs: 'Serie TK', gamaEn: 'TK Series' },
  { id: 'fotric-v5', gamaEs: 'Serie V', gamaEn: 'V Series' },
  { id: 'fotric-v7', gamaEs: 'Serie V', gamaEn: 'V Series' }
];

for (const c of changes) {
    const regex = new RegExp(`(id:\\s*"${c.id}",[\\s\\S]*?gama:\\s*\\{)[^}]+(\\})`);
    content = content.replace(regex, `$1 es: "${c.gamaEs}", en: "${c.gamaEn}" $2`);
}

fs.writeFileSync(file, content, 'utf8');
console.log("Replaced gama based on ID successfully.");
