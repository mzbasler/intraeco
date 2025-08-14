const fs = require('fs');
const path = require('path');

function cleanUnusedImports(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove imports não utilizados baseado nos warnings do ESLint
  const unusedImports = {
    'src/components/Calendar.tsx': [
      'Filter'
    ],
    'src/components/Company.tsx': [
      'ExternalLink',
      'Globe'
    ],
    'src/components/GenericSection.tsx': [
      'Badge',
      'Monitor', 
      'Shield',
      'Heart',
      'Scale',
      'Leaf',
      'Mail',
      'Gift',
      'ShoppingCart'
    ],
    'src/components/Projects.tsx': [
      'Tabs',
      'TabsContent',
      'TabsList', 
      'TabsTrigger',
      'Users',
      'AlertCircle',
      'Filter'
    ],
    'src/components/Reports.tsx': [
      'BarChart3'
    ],
    'src/components/Team.tsx': [
      'Filter'
    ]
  };

  const fileKey = filePath.replace(/\\/g, '/');
  const importsToRemove = unusedImports[fileKey];
  
  if (importsToRemove) {
    importsToRemove.forEach(importName => {
      // Remove o import da lista de imports
      content = content.replace(new RegExp(`,\\s*${importName}(?=\\s*[,}])`, 'g'), '');
      content = content.replace(new RegExp(`${importName}\\s*,`, 'g'), '');
      content = content.replace(new RegExp(`\\{\\s*${importName}\\s*\\}`, 'g'), '{}');
    });
  }
  
  // Remove linhas vazias de import
  content = content.replace(/import\s*\{\s*\}\s*from[^;]*;?\n?/g, '');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Cleaned: ${filePath}`);
}

// Limpar arquivos específicos
const filesToClean = [
  'src/components/Calendar.tsx',
  'src/components/Company.tsx', 
  'src/components/GenericSection.tsx',
  'src/components/Projects.tsx',
  'src/components/Reports.tsx',
  'src/components/Team.tsx'
];

filesToClean.forEach(file => {
  const fullPath = path.join(__dirname, file);
  cleanUnusedImports(fullPath);
});

console.log('✅ Imports limpos!');