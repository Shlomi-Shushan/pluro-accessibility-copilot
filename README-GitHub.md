# Pluro Accessibility Copilot - Documentation

[![Version](https://img.shields.io/badge/version-1.0.5-blue.svg)](https://marketplace.visualstudio.com/items?itemName=pluro.accessibility-copilot)
[![License](https://img.shields.io/badge/license-Commercial-red.svg)](LICENSE.txt)
[![Test Coverage](https://img.shields.io/badge/coverage-75.66%25-brightgreen.svg)](coverage/lcov-report/index.html)
[![Security](https://img.shields.io/badge/security-audited-brightgreen.svg)](docs/help/security.md)

> **Intelligent Accessibility Scanner for VS Code** - Detect, fix, and prevent accessibility issues with AI-powered insights and automated corrections.

## 📋 About This Repository

This repository contains **documentation, guides, and resources** for the Pluro Accessibility Copilot VS Code extension. 

**Note**: This is **NOT** the source code repository. The actual extension source code is kept private for commercial reasons.

## 🚀 Features

### 🔍 **Advanced Scanning**
- **Multi-engine scanning** with axe-core, IBM Equal Access, and custom rules
- **Real-time analysis** of HTML, CSS, JavaScript, TypeScript, and React components
- **Comprehensive coverage** of WCAG 2.1 AA/AAA guidelines
- **Smart deduplication** to prevent duplicate results across scanners

### 🛠️ **AI-Powered Fixes**
- **Automated corrections** for common accessibility issues
- **Intelligent suggestions** based on context and best practices
- **Batch fixing** for multiple issues across files
- **Preview mode** to review changes before applying

### 📊 **Rich Reporting**
- **Interactive HTML reports** with detailed issue breakdowns
- **Visual accessibility score** with improvement recommendations
- **Export capabilities** for compliance documentation
- **Historical tracking** of accessibility improvements

### 🔧 **Developer Experience**
- **Seamless VS Code integration** with native UI
- **Quick fix suggestions** in the editor
- **Git integration** with pre-commit hooks
- **Custom rule support** for project-specific requirements

## 📦 Installation

### From VS Code Marketplace
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Pluro Accessibility Copilot"
4. Click Install

## 📋 License and Legal

### Commercial License
This software is licensed under a **Commercial License Agreement**. By using this software, you agree to the terms outlined in:
- [LICENSE.txt](LICENSE.txt) - Commercial License Agreement
- [EULA.md](EULA.md) - End User License Agreement  
- [PRIVACY_POLICY.md](PRIVACY_POLICY.md) - Privacy Policy

### License Requirements
- **Single User License**: One installation per licensed user
- **No Redistribution**: You may not redistribute or resell this software
- **No Reverse Engineering**: Modification or reverse engineering is prohibited
- **Commercial Use**: Licensed for internal business purposes only

### API License Keys
For advanced features requiring API access:
1. Visit [https://pluro.ai](https://pluro.ai) to purchase a license
2. Configure your API key in VS Code settings
3. See the Getting Started Guide in the VS Code Help panel for setup instructions

## 📚 Documentation

### Getting Started
- [Getting Started Guide](docs/help/getting-started.md) - Quick setup and first scan
- [License Activation](docs/help/license-activation.md) - How to activate your license
- [Understanding Issues](docs/help/understanding-issues.md) - Learn about accessibility issues

### Features
- [Accessibility Features](docs/help/accessibility-features.md) - Overview of features
- [Fixing Issues](docs/help/fixing-issues.md) - How to fix accessibility problems
- [Keyboard Navigation](docs/help/keyboard-navigation.md) - Keyboard shortcuts and navigation
- [Screen Reader Support](docs/help/screen-reader-support.md) - Screen reader compatibility

### Advanced Topics
- [Performance Optimization](docs/help/performance.md) - Performance tuning and optimization
- [Security Features](docs/help/security.md) - Security considerations and features
- [Visual Impairment Support](docs/help/visual-impairment-accessibility.md) - Support for visual impairments
- [QA Process](docs/help/qa-process.md) - Quality assurance process

### Troubleshooting
- [License Troubleshooting](docs/help/license-troubleshooting.md) - Common license issues
- [License vs API Token](docs/help/license-vs-token.md) - Understanding different types of keys

## 🧪 Testing

### Test Cases
This repository includes comprehensive test cases in the `qa/test-cases/` directory:
- HTML accessibility test cases
- React component test cases
- Angular component test cases
- Vue component test cases
- PHP test cases
- And more...

### Examples
- [Custom Rule Template](examples/custom-rule-template.json) - Template for creating custom accessibility rules

## 🔒 Security

### Security Features
- ✅ **Input validation** for all user inputs
- ✅ **Output encoding** to prevent XSS attacks
- ✅ **Secure error handling** without information disclosure
- ✅ **HTTPS enforcement** for all external requests
- ✅ **Rate limiting** to prevent abuse
- ✅ **Dependency scanning** with automated security audits

## 📈 Performance

### Performance Targets
- **Document Scan**: < 2 seconds for files < 1000 lines
- **Workspace Scan**: < 30 seconds for projects < 100 files
- **Quick Fix Application**: < 500ms
- **Memory Usage**: < 200MB for large files

### Optimization Features
- **Intelligent caching** for file content and rules
- **Parallel processing** for multi-file scanning
- **Lazy loading** of heavy components
- **Memory monitoring** and leak detection
- **Performance profiling** and benchmarking

## 🤝 Support

### Getting Help
- **GitHub Issues**: [Report bugs and request features](https://github.com/Shlomi-Shushan/pluro-accessibility-copilot/issues)
- **GitHub Discussions**: [Ask questions and share experiences](https://github.com/Shlomi-Shushan/pluro-accessibility-copilot/discussions)
- **Email Support**: support@pluro.ai
- **Documentation**: [docs.pluro.ai](https://docs.pluro.ai)

### Contributing
While the source code is private, you can contribute to this documentation repository:
- Report documentation issues
- Suggest improvements to guides
- Share test cases
- Improve examples

## 📄 License

This project is licensed under the Commercial License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🔗 Links

- **Website**: [pluro.ai](https://pluro.ai)
- **VS Code Marketplace**: [Pluro Accessibility Copilot](https://marketplace.visualstudio.com/items?itemName=pluro.accessibility-copilot)
- **Documentation**: [docs.pluro.ai](https://docs.pluro.ai)
- **Support**: [GitHub Issues](https://github.com/Shlomi-Shushan/pluro-accessibility-copilot/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Shlomi-Shushan/pluro-accessibility-copilot/discussions)
- **Email**: support@pluro.ai

---

**Made with ❤️ by Pluro Technologies** 