import * as fs from "fs"
import * as path from "path"
import * as child_process from "child_process"

// Update package.json for marketplace
function updatePackageJson() {
  const packagePath = path.join(__dirname, "..", "package.json")
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"))

  // Ensure marketplace fields are set
  pkg.displayName = "Pluro Copilot - Accessibility Scanner"
  pkg.publisher = "pluro-team"
  pkg.preview = false
  pkg.icon = "resources/accessibility-icon.png"
  pkg.galleryBanner = {
    color: "#0078D4",
    theme: "dark",
  }
  pkg.repository = {
    type: "git",
    url: "https://github.com/pluro-team/pluro-copilot",
  }
  pkg.bugs = {
    url: "https://github.com/pluro-team/pluro-copilot/issues",
  }
  pkg.homepage = "https://pluro-copilot.com"

  // Add keywords for better discoverability
  pkg.keywords = ["accessibility", "a11y", "wcag", "scanner", "html", "react", "vue", "jsx", "tsx"]

  // Write updated package.json
  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2))
  console.log("✅ Updated package.json for marketplace")
}

// Generate CHANGELOG.md if it doesn't exist
function ensureChangelog() {
  const changelogPath = path.join(__dirname, "..", "CHANGELOG.md")
  if (!fs.existsSync(changelogPath)) {
    const changelog = `# Change Log

## 1.0.0 (${new Date().toISOString().split("T")[0]})

- Initial release of Pluro Copilot
- Basic accessibility scanning
- Mobile accessibility scanning
- Visual accessibility scanning
- Quick fixes for common issues
- HTML report generation
- Git integration with pre-commit hooks
`
    fs.writeFileSync(changelogPath, changelog)
    console.log("✅ Created CHANGELOG.md")
  }
}

// Build VSIX package
function buildVsix() {
  console.log("Building VSIX package...")
  try {
    child_process.execSync("vsce package", {
      cwd: path.join(__dirname, ".."),
      stdio: "inherit",
    })
    console.log("✅ VSIX package built successfully")
  } catch (error) {
    console.error("❌ Failed to build VSIX package:", error)
    process.exit(1)
  }
}

// Main function
function main() {
  console.log("Preparing Pluro Copilot for marketplace...")
  updatePackageJson()
  ensureChangelog()
  buildVsix()
  console.log("✅ All done! VSIX package is ready for marketplace submission.")
}

main()
