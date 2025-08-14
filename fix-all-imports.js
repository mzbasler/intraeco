const fs = require('fs');
const path = require('path');

function fixImportsInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove all version numbers from imports
  content = content.replace(/@\d+\.\d+\.\d+/g, '');
  
  // Fix specific problematic imports
  content = content.replace(/from "lucide-react";/g, 'from "lucide-react";');
  content = content.replace(/from "class-variance-authority";/g, 'from "class-variance-authority";');
  content = content.replace(/from "react-hook-form";/g, 'from "react-hook-form";');
  content = content.replace(/from "recharts";/g, 'from "recharts";');
  content = content.replace(/from "react-day-picker";/g, 'from "react-day-picker";');
  content = content.replace(/from "embla-carousel-react";/g, 'from "embla-carousel-react";');
  content = content.replace(/from "react-resizable-panels";/g, 'from "react-resizable-panels";');
  content = content.replace(/from "cmdk";/g, 'from "cmdk";');
  content = content.replace(/from "vaul";/g, 'from "vaul";');
  content = content.replace(/from "sonner";/g, 'from "sonner";');
  content = content.replace(/from "next-themes";/g, 'from "next-themes";');
  content = content.replace(/from "input-otp";/g, 'from "input-otp";');
  
  // Fix Radix imports
  content = content.replace(/@radix-ui\/react-([a-z-]+)/g, '@radix-ui/react-$1');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${filePath}`);
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      walkDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixImportsInFile(fullPath);
    }
  });
}

// Fix all files in src directory
const srcDir = path.join(__dirname, 'src');
if (fs.existsSync(srcDir)) {
  walkDirectory(srcDir);
}

console.log('✅ All imports fixed!');