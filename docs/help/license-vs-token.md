# License vs API Token Guide

## Overview

Pluro Accessibility Copilot uses two different types of tokens for different purposes. Understanding the difference is crucial for proper setup and usage.

## License Token

### What is a License Token?
A **License Token** is your **product license** that unlocks premium features of the Pluro Accessibility Copilot extension.

### Purpose
- **Product Access**: Unlocks premium features
- **Feature Gating**: Controls which features are available
- **Machine Binding**: Tied to your specific machine
- **Expiry Management**: Has expiration dates

### Features Unlocked by License Token
- Advanced scanners
- AI-powered suggestions
- Pluro Monitor integration
- Custom rule creation
- Priority engine
- Synergy manager
- Health monitoring
- Performance metrics

### How to Get a License Token
1. Visit [pluro.ai](https://pluro.ai)
2. Purchase a license (Individual or Team)
3. Receive license token via email
4. Activate in VS Code extension

### License Token Format
```
eyJjdXN0b21lciI6IkpvaG4gRG9lIiwibWFjaGluZUlkIjoiMTIzNDU2Nzg5MCIsImV4cGlyeSI6IjIwMjQtMTItMzEiLCJwbGFuIjoiaW5kaXZpZHVhbCJ9.signature
```

### Where to Enter License Token
- **Command**: `Pluro: Enter License Token`
- **Settings**: `pluro.licenseToken`
- **Extension Panel**: License section

## API Token (MyPluro Integration)

### What is an API Token?
An **API Token** is used for **MyPluro integration** to fetch accessibility issues from the Pluro web dashboard.

### Purpose
- **API Access**: Authenticates with MyPluro API
- **Data Sync**: Fetches issues from web dashboard
- **Project Linking**: Links to specific projects
- **Real-time Updates**: Gets latest issue data

### Features Using API Token
- Import Pluro Monitor reports
- Sync issues from web dashboard
- Real-time issue updates
- Project-specific data

### How to Get an API Token
1. Log into [my.pluro.ai](https://my.pluro.ai)
2. Go to Account Settings
3. Generate API token
4. Copy token for use in extension

### API Token Format
```
pluro_api_1234567890abcdef1234567890abcdef
```

### Where to Enter API Token
- **Settings**: `pluro.api.token`
- **Environment Variable**: `PLURO_API_TOKEN`

## Key Differences

| Aspect | License Token | API Token |
|--------|---------------|-----------|
| **Purpose** | Product license | API authentication |
| **Required For** | Premium features | MyPluro integration |
| **Machine Binding** | Yes | No |
| **Expiry** | Yes (license expiry) | Yes (token expiry) |
| **Format** | JWT-like | Simple string |
| **Source** | pluro.ai purchase | my.pluro.ai account |
| **Scope** | Extension features | API access only |

## Setup Scenarios

### Scenario 1: Basic Usage (License Only)
**What you need:**
- License token only

**Setup:**
1. Purchase license from [pluro.ai](https://pluro.ai)
2. Enter license token in extension
3. Use premium features locally

**Features available:**
- All premium scanning features
- Local accessibility analysis
- Custom rules and configurations

### Scenario 2: MyPluro Integration (Both Tokens)
**What you need:**
- License token (for premium features)
- API token (for MyPluro integration)

**Setup:**
1. Purchase license from [pluro.ai](https://pluro.ai)
2. Get API token from [my.pluro.ai](https://my.pluro.ai)
3. Enter both tokens in extension

**Features available:**
- All premium features
- Import from Pluro Monitor
- Sync with web dashboard

### Scenario 3: Free Trial
**What you need:**
- Trial license token only

**Setup:**
1. Get trial license from [pluro.ai](https://pluro.ai)
2. Enter trial token in extension
3. Test all features for 14 days

**Features available:**
- All premium features (trial period)
- No MyPluro integration (unless you have API token)

## Common Confusion

### "I have an API token, why can't I use premium features?"
- **Cause**: API token ≠ License token
- **Solution**: Purchase license from [pluro.ai](https://pluro.ai)

### "I have a license, why can't I import from MyPluro?"
- **Cause**: License token ≠ API token
- **Solution**: Get API token from [my.pluro.ai](https://my.pluro.ai)

### "Do I need both tokens?"
- **Answer**: Depends on your needs
- **License only**: Premium features, local usage
- **Both tokens**: Premium features + MyPluro integration

## Troubleshooting

### License Token Issues
- **Error**: "No license token found"
- **Solution**: Enter license token from [pluro.ai](https://pluro.ai)

### API Token Issues
- **Error**: "API authentication failed"
- **Solution**: Check API token from [my.pluro.ai](https://my.pluro.ai)

### Both Token Issues
- **Error**: Mixed up tokens
- **Solution**: Verify token sources and purposes

## Best Practices

### Token Management
1. **Keep tokens separate**: Don't confuse license and API tokens
2. **Store securely**: Keep tokens in safe location
3. **Regular updates**: Renew tokens before expiry
4. **Documentation**: Note token purposes and sources

### Security
- **Don't share tokens**: Keep tokens private
- **Use environment variables**: For API tokens in production
- **Regular rotation**: Update API tokens periodically
- **Monitor usage**: Check token activity regularly

## Support

### License Token Support
- **Email**: support@pluro.ai
- **Website**: [pluro.ai/support](https://pluro.ai/support)

### API Token Support
- **Email**: support@pluro.ai
- **Website**: [my.pluro.ai/support](https://my.pluro.ai/support)

### General Questions
- **Documentation**: [pluro.ai/docs](https://pluro.ai/docs)

---

**Remember**: License tokens unlock features, API tokens enable integration. Both serve different purposes in the Pluro ecosystem. 