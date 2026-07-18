#!/usr/bin/env node

/**
 * Theme Update Script
 * Automatically updates all .pej files with the latest pejic-dark theme
 * 
 * Links:
 * - package.json: https://github.com/pejicx/pejic-lang-thema/blob/main/package.json
 * - pejic-dark-color-theme.json: https://github.com/pejicx/pejic-lang-thema/blob/main/themes/pejic-dark-color-theme.json
 */

const fs = require('fs');
const path = require('path');

// Load the theme configuration
const loadTheme = () => {
  try {
    const themePath = path.join(__dirname, 'themes', 'pejic-dark-color-theme.json');
    const themeContent = fs.readFileSync(themePath, 'utf8');
    return JSON.parse(themeContent);
  } catch (error) {
    console.error('❌ Error loading theme:', error.message);
    process.exit(1);
  }
};

// Find all .pej files in the project
const findPejFiles = (dir = '.') => {
  let results = [];
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      // Skip node_modules and hidden directories
      if (file.startsWith('.') || file === 'node_modules') {
        continue;
      }
      
      if (stat.isDirectory()) {
        results = results.concat(findPejFiles(filePath));
      } else if (file.endsWith('.pej')) {
        results.push(filePath);
      }
    }
  } catch (error) {
    console.warn(`⚠️  Warning reading directory ${dir}:`, error.message);
  }
  
  return results;
};

// Apply theme to .pej file
const applyThemeToFile = (filePath, theme) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add theme metadata at the beginning if not already present
    const themeComment = `// @theme: ${theme.name}\n// @type: ${theme.type}\n\n`;
    
    if (!content.includes('@theme:')) {
      content = themeComment + content;
    }
    
    // Create a theme marker object that can be referenced
    const themeMarker = `\n/*\n * THEME: ${theme.name.toUpperCase()}\n * Colors: ${Object.keys(theme.colors).length} editor settings\n * Token colors: ${theme.tokenColors.length} scopes\n */\n`;
    
    // Add theme marker at the end
    if (!content.includes('* THEME:')) {
      content = content + themeMarker;
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Create a theme info report
const generateThemeReport = (theme) => {
  const report = `
╔════════════════════════════════════════════════════════════════╗
║                    PEJIC THEME INFORMATION                     ║
╚════════════════════════════════════════════════════════════════╝

Theme Name:     ${theme.name}
Theme Type:     ${theme.type}

EDITOR COLORS (${Object.keys(theme.colors).length}):
${Object.entries(theme.colors)
  .map(([key, value]) => `  • ${key}: ${value}`)
  .join('\n')}

TOKEN COLOR SCOPES (${theme.tokenColors.length}):
${theme.tokenColors
  .slice(0, 10)
  .map(t => `  • ${t.scope}: ${t.settings.foreground}`)
  .join('\n')}
  ... and ${theme.tokenColors.length - 10} more scopes

PACKAGE INFO:
  Name:       pejic-dark
  Publisher:  pejicx
  Version:    0.0.1
  VSCode:     ^1.60.0

═══════════════════════════════════════════════════════════════════
`;
  return report;
};

// Main execution
const main = () => {
  console.log('🎨 Starting Pejic Theme Update...\n');
  
  // Load theme
  const theme = loadTheme();
  console.log(`✅ Theme loaded: ${theme.name}\n`);
  
  // Find all .pej files
  const pejFiles = findPejFiles();
  
  if (pejFiles.length === 0) {
    console.log('ℹ️  No .pej files found in the project.');
    console.log(generateThemeReport(theme));
    return;
  }
  
  console.log(`Found ${pejFiles.length} .pej file(s):\n`);
  
  // Apply theme to each file
  let successCount = 0;
  pejFiles.forEach((file, index) => {
    const success = applyThemeToFile(file, theme);
    const status = success ? '✅' : '❌';
    console.log(`${status} [${index + 1}/${pejFiles.length}] ${file}`);
    if (success) successCount++;
  });
  
  console.log(`\n${generateThemeReport(theme)}`);
  console.log(`\n✨ Update complete! ${successCount}/${pejFiles.length} files processed successfully.\n`);
};

// Run the script
main();
