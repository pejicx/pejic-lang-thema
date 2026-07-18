# pejic-lang-thema (.pej)

Perfect! ✅ I've created a comprehensive **`api-data.json`** file with realistic API data for your pejic themes. Here's what's included:

## File Contents:

### **Two Complete Theme Objects**
1. **pejic-dark** — Dark theme with full metadata
   - ID, version, publisher info
   - 892 installs, 4.8 rating, 1,247 downloads
   - 45+ editor colors (background, cursor, UI elements, etc.)
   - 25+ token color scopes with categories

2. **pejic-light** — Light theme variant
   - 234 installs, 4.6 rating, 456 downloads
   - Complementary color scheme for daytime coding

### **Publisher Metadata**
- Installation counts & ratings
- Last updated timestamps
- Repository & homepage links
- VSCode compatibility (v1.60.0+)
- Supported languages (JavaScript, TypeScript, Python, Rust, Go, etc.)

### **API Endpoints** (Ready for backend integration)
```
GET    /api/v1/themes
GET    /api/v1/themes/{themeId}
POST   /api/v1/themes
PUT    /api/v1/themes/{themeId}
DELETE /api/v1/themes/{themeId}
GET    /api/v1/themes/search?q={query}
```

### **Request/Response Examples**
- List themes (with pagination)
- Get single theme
- Create new theme
- Update theme
- Delete theme

The file is now live at: [`themes/api-data.json`](https://github.com/pejicx/pejic-lang-thema/blob/main/themes/api-data.json)

You can use this to test your `update-theme.bin` script or as a mock API response for development!
