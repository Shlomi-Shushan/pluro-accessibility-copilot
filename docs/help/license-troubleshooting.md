# License Troubleshooting Guide

## Quick Diagnosis

### Check License Status
1. Open Command Palette (`Ctrl+Shift+P`)
2. Run: `Pluro: Show License Info`
3. Review the displayed information

### Common Error Messages

| Error Message | Cause | Solution |
|---------------|-------|----------|
| "No license token found" | License not entered | Enter license token |
| "License is not for this machine" | Wrong machine ID | Contact support |
| "License expired" | License past expiry date | Renew license |
| "Invalid token format" | Corrupted token | Re-enter token |
| "License validation failed" | Network/server issue | Check connection |

## Detailed Troubleshooting

### Issue: No License Token Found

**Symptoms:**
- Extension shows "Activate License" button
- Premium features are disabled
- Error: "No license token found"

**Solutions:**
1. **Enter License Token:**
   - Command: `Pluro: Enter License Token`
   - Copy token from your email/purchase confirmation
   - Paste and save

2. **Check Settings:**
   - Open VS Code Settings (`Ctrl+,`)
   - Search: "pluro.licenseToken"
   - Ensure token is entered correctly

3. **Verify Token Source:**
   - Check your purchase confirmation email
   - Visit [pluro.ai/account](https://pluro.ai/account)
   - Copy token from your account dashboard

### Issue: License Not for This Machine

**Symptoms:**
- Error: "License is not for this machine"
- License works on other computers
- Machine ID mismatch

**Solutions:**
1. **Get Your Machine ID:**
   - Command: `Pluro: Show Machine ID`
   - Note the displayed ID

2. **Contact Support:**
   - Email: support@pluro.ai
   - Include: Machine ID, license token, error message
   - Request license transfer or new token

3. **Alternative Solutions:**
   - Use the same VS Code installation
   - Check if VS Code was reinstalled
   - Verify you're using the correct account

### Issue: License Expired

**Symptoms:**
- Error: "License expired"
- Premium features disabled
- Warning messages about expiry

**Solutions:**
1. **Renew License:**
   - Visit [pluro.ai](https://pluro.ai)
   - Purchase license renewal
   - Enter new license token

2. **Check Expiry Date:**
   - Command: `Pluro: Show License Info`
   - Note the expiry date
   - Plan renewal before expiry

3. **Grace Period:**
   - Some licenses have grace periods
   - Contact support for extension
   - Temporary access may be available

### Issue: Invalid Token Format

**Symptoms:**
- Error: "Invalid token format"
- Token appears corrupted
- Extension won't accept token

**Solutions:**
1. **Verify Token:**
   - Ensure complete token is copied
   - Check for extra spaces or characters
   - Token format: `base64.payload.signature`

2. **Re-enter Token:**
   - Clear existing token from settings
   - Copy fresh token from source
   - Paste carefully without modifications

3. **Get New Token:**
   - Visit [pluro.ai/account](https://pluro.ai/account)
   - Generate new license token
   - Replace old token

### Issue: Network/Connection Problems

**Symptoms:**
- License validation fails
- Intermittent license errors
- Cannot connect to license server

**Solutions:**
1. **Check Internet Connection:**
   - Ensure stable internet connection
   - Try accessing [pluro.ai](https://pluro.ai)
   - Check firewall settings

2. **Proxy/Corporate Network:**
   - Configure proxy settings in VS Code
   - Contact IT for network access
   - Use personal network if possible

3. **Offline Mode:**
   - Some licenses support offline validation
   - Contact support for offline token
   - Use cached validation when possible

## Advanced Troubleshooting

### Debug License Issues

**Enable Debug Mode:**
1. Open VS Code Settings
2. Search: "pluro.debug"
3. Enable debug logging
4. Check Output panel for detailed logs

**Collect Debug Information:**
- License token (first 10 characters)
- Machine ID
- VS Code version
- Extension version
- Error messages
- Debug logs

### Contact Support

**When to contact support:**
- All troubleshooting steps failed
- License transfer needed
- Billing issues
- Technical problems

**Information to provide:**
- Machine ID
- License token (first 10 characters)
- Error messages
- VS Code version
- Extension version
- Steps to reproduce issue

**Support channels:**
- **Email**: support@pluro.ai
- **Website**: [pluro.ai/support](https://pluro.ai/support)
- **Documentation**: [pluro.ai/docs](https://pluro.ai/docs)

## Prevention

### Best Practices
1. **Keep License Information Safe:**
   - Store license token securely
   - Note expiry dates
   - Keep machine ID handy

2. **Regular Maintenance:**
   - Check license status monthly
   - Renew before expiry
   - Update extension regularly

3. **Backup Configuration:**
   - Export VS Code settings
   - Document license information
   - Keep support contact details

### License Management Tips
- Use the same VS Code installation
- Don't share license tokens
- Monitor usage and limits
- Plan renewals in advance

---

**Need Help?** Contact support at support@pluro.ai or visit [pluro.ai/support](https://pluro.ai/support) 