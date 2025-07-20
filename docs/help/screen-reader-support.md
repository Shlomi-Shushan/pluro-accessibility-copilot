# Screen Reader Support Guide

## Overview

Pluro Accessibility Copilot provides support for screen readers, ensuring that blind and visually impaired users can effectively use all features of the extension.

## Supported Screen Readers

- **NVDA** (Windows)
- **JAWS** (Windows)
- **Narrator** (Windows)
- **VoiceOver** (macOS)
- **Orca** (Linux)

## ARIA Implementation

### Semantic Structure
All UI elements in Pluro Accessibility Copilot include proper ARIA attributes where possible.

### Live Regions
Dynamic content is announced through live regions where supported by VS Code.

### Focus Management
Logical focus order and clear focus indicators are maintained throughout the extension.

## Navigation Patterns

- Panel headers and content areas are structured for screen reader navigation.
- Issues are presented in a structured format with severity, description, and location.
- Context changes (such as file or issue selection) are announced where possible.

## Best Practices

### For Developers
1. **Test Regularly**: Test with actual screen readers
2. **Use Semantic HTML**: Use proper HTML elements
3. **Add ARIA Labels**: Provide descriptive labels
4. **Manage Focus**: Ensure logical focus order
5. **Test Keyboard Navigation**: Verify keyboard-only operation

### For Users
1. **Learn Commands**: Memorize essential screen reader commands
2. **Use Help**: Access help when needed
3. **Report Issues**: Report accessibility problems

## Troubleshooting

### Screen Reader Not Working
1. **Check Installation**: Ensure screen reader is installed
2. **Verify Settings**: Check screen reader settings
3. **Restart Application**: Restart VS Code
4. **Update Software**: Update screen reader and extension

### Commands Not Responding
1. **Check Conflicts**: Look for keyboard conflicts
2. **Verify Mode**: Ensure correct mode is active
3. **Test Commands**: Test basic screen reader commands
4. **Contact Support**: Contact support if issues persist

### Navigation Issues
1. **Reset Focus**: Use focus reset commands
2. **Check Context**: Verify current context
3. **Use Alternative Navigation**: Try different navigation methods
4. **Enable Debug Mode**: Enable debug mode for detailed information 