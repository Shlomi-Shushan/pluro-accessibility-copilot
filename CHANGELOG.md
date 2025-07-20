# Changelog

All notable changes to the Pluro Accessibility Copilot extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-07-13

### Added
- **Core Accessibility Scanning**: 24+ built-in scanners including Axe, IBM Equal Access, WAVE, and custom engines
- **AI-Powered Issue Detection**: Advanced pattern recognition for HTML, JSX/TSX, Vue, Angular, and PHP files
- **Smart Issue Prioritization**: Priority engine with deduplication and severity scoring
- **One-Click Quick Fixes**: Automatic fixes for 85-95% of common accessibility issues
- **WCAG Compliance**: Full support for WCAG 2.1 AA/AAA guidelines with detailed references
- **VS Code Integration**: Native Problems panel integration with keyboard navigation (F8/Shift+F8)
- **Git Auto-Commit**: Automatic commit of accessibility fixes with customizable messages
- **Pluro Monitor Sync**: Bi-directional sync with Pluro Monitor for team collaboration
- **REST API Integration**: Pull issues from and push reports to external APIs
- **Multi-Language Support**: Hebrew, English, and Spanish localization
- **Performance Monitoring**: Built-in health monitoring and performance metrics
- **Security Features**: Secure token management and encrypted communication
- **Accessibility Support**: Full keyboard and screen reader support for the extension itself

### Enhanced
- **Scanner Performance**: Optimized scanning with concurrent execution and caching
- **Memory Management**: Efficient memory usage with automatic cleanup
- **Error Handling**: Robust error handling with graceful fallbacks
- **Configuration**: Flexible configuration via VS Code settings, environment variables, and project files
- **Documentation**: Comprehensive user guide with examples and best practices

### Fixed
- **JSDOM Security**: Moved JSDOM to separate Node.js process for enhanced security
- **ESLint Compliance**: Resolved all critical linting issues while maintaining code quality
- **Bundle Size**: Optimized extension size for faster loading
- **Compatibility**: Ensured compatibility with VS Code 1.74+ and Node.js 16+

### Security
- **Token Encryption**: Secure storage of API tokens and license keys
- **Process Isolation**: JSDOM runs in isolated child process
- **Input Validation**: Comprehensive input validation and sanitization
- **Network Security**: HTTPS-only communication with API endpoints

### Documentation
- **User Guide**: Complete setup and usage documentation
- **API Reference**: Detailed API integration guide
- **Best Practices**: Accessibility development best practices
- **Troubleshooting**: Comprehensive troubleshooting guide

### Technical
- **TypeScript**: Full TypeScript implementation with strict type checking
- **Testing**: 122 comprehensive tests covering unit, integration, and E2E scenarios
- **Build System**: Optimized build process with esbuild and webpack
- **Code Quality**: ESLint configuration with security-focused rules

---

## [0.9.0] - 2025-06-15

### Added
- Initial beta release with core scanning functionality
- Basic HTML accessibility checking
- Simple issue reporting

### Known Issues
- Limited scanner coverage
- No auto-fix capabilities
- Basic UI only

---

## [0.8.0] - 2025-05-20

### Added
- Prototype version with basic accessibility scanning
- Support for HTML files only
- Simple command palette integration

---

For more information about releases, visit [pluro.ai](https://pluro.ai) or check our [documentation](https://pluro.ai/docs). 