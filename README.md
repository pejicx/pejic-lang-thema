# PejicLang Theme System (.pej)

A comprehensive, production-ready theme system for PejicLang (pej) and the PejicX Ecosystem. Provides dark, light, and specialized themes with full VS Code integration, modular architecture, and real API services.

## ✨ Features

- **5 Complete Themes**: dark, light, high-contrast, oceanic, neon
- **Real API Services**: Complete REST endpoints for theme management
- **Modular Architecture**: Clear separation of concerns
- **Theme Engine**: Dynamic color manipulation and processing
- **Theme Builder**: Fluent API for custom theme creation
- **Production-Ready**: Validation, error handling, logging
- **Full VS Code Support**: Complete token color scope coverage

## Quick Start

```bash
# Install dependencies
npm install

# Apply themes to .pej files
node update-theme.js

# Start API server
npm run dev

# Validate all themes
npm run validate-themes
```

## Project Structure

```
src/
├── api/              REST endpoints & validation
├── services/         ThemeManager, Engine, Builder, Logger
├── models/          Data structures
└── utils/           Validators, color utilities

themes/
├── pejic-dark-color-theme.json
├── pejic-light-color-theme.json
├── pejic-high-contrast.json
├── pejic-oceanic.json
├── pejic-neon.json
└── api-data.json

docs/
├── API.md            API documentation
├── ARCHITECTURE.md   Architecture overview
├── THEMES.md         Theme creation guide
└── COLOR-SYSTEM.md   Color utilities guide
```

## Available Themes

| Theme | Type | Colors | Scopes | Use Case |
|-------|------|--------|--------|----------|
| **pejic-dark** | Dark | 90+ | 200+ | Professional, extended sessions |
| **pejic-light** | Light | 70+ | 100+ | Daytime, high ambient light |
| **pejic-high-contrast** | Dark | High | Full | Accessibility, WCAG AA |
| **pejic-oceanic** | Dark | Ocean | Full | Calm, focused work |
| **pejic-neon** | Dark | Neon | Full | Creative, energetic |

## API Endpoints

```
GET    /api/v1/themes              List all themes
GET    /api/v1/themes/{name}       Get specific theme
POST   /api/v1/themes              Create new theme
PUT    /api/v1/themes/{name}       Update theme
DELETE /api/v1/themes/{name}       Delete theme
GET    /api/v1/themes/search       Search themes
GET    /api/v1/stats               Get statistics
GET    /health                     Health check
```

## Services

### ThemeManager
- Load themes from files
- CRUD operations
- Search and filter
- Theme statistics

### ThemeEngine
- Active theme management
- Color processing
- Token color lookup
- Theme validation

### ThemeBuilder
- Fluent API for theme creation
- Color management
- Token color definition
- Theme validation and building

### Logger
- Structured logging
- Multiple log levels
- Color-coded output

## Development

```bash
npm run dev              # Start development server
npm test                 # Run tests
npm run validate-themes  # Validate all themes
npm run generate-themes  # Generate theme variations
npm run update-theme     # Apply themes to .pej files
```

## Configuration

Create `.env` from `.env.example`:

```bash
PORT=3000
NODE_ENV=development
LOG_LEVEL=info
```

## API Usage Examples

### Get All Themes
```bash
curl http://localhost:3000/api/v1/themes
```

### Get Specific Theme
```bash
curl http://localhost:3000/api/v1/themes/pejic-dark
```

### Create Custom Theme
```bash
curl -X POST http://localhost:3000/api/v1/themes \
  -H "Content-Type: application/json" \
  -d '{
    "name": "my-theme",
    "type": "dark",
    "colors": {"editor.background": "#1e1e1e"},
    "tokenColors": [{"scope": "keyword", "settings": {"foreground": "#569cd6"}}]
  }'
```

### Search Themes
```bash
curl "http://localhost:3000/api/v1/themes/search?q=dark"
```

## Documentation

- [API Documentation](docs/API.md) - Complete API reference
- [Architecture](docs/ARCHITECTURE.md) - System design and layers
- [Theme Creation](docs/THEMES.md) - Building custom themes
- [Color System](docs/COLOR-SYSTEM.md) - Color utilities and formats

## Dependencies

- **express** - Web framework
- **uuid** - Unique identifiers
- **chalk** - Colored terminal output
- **lodash** - Utility functions

## Scripts

```json
{
  "start": "node src/index.js",
  "dev": "node src/services/api-server.js",
  "validate-themes": "node scripts/validate-themes.js",
  "update-theme": "node update-theme.js"
}
```

## File Organization

### Core Services (`src/services/`)
- `logger.js` - Structured logging
- `theme-manager.js` - Theme CRUD and management
- `theme-engine.js` - Theme processing
- `theme-builder.js` - Fluent theme creation API
- `api-server.js` - Express server setup

### API Layer (`src/api/`)
- `routes.js` - REST endpoint definitions
- `validators.js` - Request validation

### Utilities (`src/utils/`)
- `validators.js` - Data validation
- `color-utils.js` - Color manipulation
- `config.js` - Configuration

### Themes (`themes/`)
- Complete theme definitions in JSON
- VSCode-compatible color schemes
- Comprehensive token color scopes

## PejicLang Integration

This theme system is designed for PejicLang (.pej files) and integrates seamlessly with the PejicX Ecosystem:

- Apply themes to .pej files automatically
- Consistent color schemes across projects
- Theme inheritance and composition
- Export to multiple formats

## License

MIT License - See LICENSE file

## Contributing

Contributions welcome! Please ensure:
- All tests pass: `npm test`
- Themes are valid: `npm run validate-themes`
- Code follows standards
- Documentation is updated

## Resources

- [GitHub Repository](https://github.com/pejicx/pejic-lang-thema)
- [PejicX Ecosystem](https://github.com/pejicx)
- [VS Code Theme Documentation](https://code.visualstudio.com/api/extension-guides/color-theme)
