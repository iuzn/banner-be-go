# Banner Be Gone

**Eliminate intrusive "Open in App" banners and Smart App Banners from your Safari browsing experience.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Safari](https://img.shields.io/badge/Safari-Extension-blue.svg)](https://developer.apple.com/safari/extensions/)
[![Chrome](https://img.shields.io/badge/Chrome-Extension-green.svg)](https://developer.chrome.com/docs/extensions/)

## 🎯 Overview

Banner Be Gone is a lightweight browser extension that automatically removes annoying "Open in App", "Get the App", and Smart App Banner prompts from websites. Enjoy a cleaner, distraction-free browsing experience across all your favorite sites.

### ✨ Key Features

- 🚫 **Automatic Banner Removal**: Instantly hides app download prompts and Smart App Banners
- 🔄 **Dynamic Detection**: Monitors DOM changes to catch banners added after page load
- 🌐 **Universal Compatibility**: Works on all websites with configurable permissions
- 🎨 **CSS-Based Blocking**: Efficient styling rules for comprehensive banner blocking
- 🔒 **Privacy Focused**: No data collection, works entirely locally
- 📱 **Cross-Platform**: Available for both Safari (macOS/iOS) and Chrome/Edge/Brave
- ⚡ **Performance Optimized**: Minimal impact on page load times

## 📦 Installation

### Safari (macOS & iOS)

1. **Download from App Store**: Search for "Banner Be Gone" in the Mac App Store or iOS App Store
2. **Install the App**: Click "Get" and install the application
3. **Enable Extension**:
   - **macOS**: Safari → Settings → Extensions → Check "Banner Be Gone"
   - **iOS**: Settings → Apps → Safari → Extensions → Toggle "Banner Be Gone" ON

### Chrome/Edge/Brave (Development)

1. **Clone Repository**:
   ```bash
   git clone https://github.com/iuzn/banner-be-go.git
   cd banner-be-go
   ```

2. **Load Extension**:
   - Open `chrome://extensions/` (or `edge://extensions/`)
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the project folder

## 🚀 Usage

### Automatic Operation
Once installed and enabled, Banner Be Gone works automatically:
- Removes existing banners when pages load
- Monitors for dynamically added banners
- Applies CSS rules to hide banner elements
- Removes Safari-specific meta tags

### Per-Site Control (Safari)
- Click the **"AA"** icon in Safari's URL bar
- Select **"Website Settings"**
- Toggle "Banner Be Gone" on/off for specific sites

### Extension Status
Open the Banner Be Gone app to check extension status:
- **Green**: Extension active and working
- **Red**: Extension disabled
- **Gray**: Extension needs activation

## 🛠️ Technical Details

### Architecture
- **Content Scripts**: Run on all websites (`<all_urls>`)
- **Execution Timing**: `document_idle` for optimal performance
- **DOM Monitoring**: `MutationObserver` for dynamic content
- **CSS Injection**: Custom styles for comprehensive blocking

### Targeted Elements
The extension removes banners using these selectors:
```css
.smartbanner, .smart-banner, .smart-app-banner
.app-banner, .appbanner, .native-app-banner
[data-testid="app-banner"], [class*="AppBanner"]
meta[name="apple-itunes-app"]
```
 
## 🔧 Development

### Prerequisites
- **Safari Extension**: Xcode 12+, macOS Big Sur (11.0)+
- **Chrome Extension**: Chrome 88+, Manifest V3

### Building for Safari
1. Open project in Xcode
2. Select "My Mac (Designed for iPad)" target
3. Build and run to test in Safari
4. Archive for App Store submission

### Testing
- Visit websites with app banners (Reddit, Twitter, Instagram)
- Verify banners are automatically hidden
- Check browser console for debug messages: `[Banner Be Gone]`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
- Follow existing code style and structure
- Test on multiple websites and browsers
- Update documentation for new features
- Ensure compatibility across Safari and Chrome

### Adding New Banner Selectors
To block additional banner types, add CSS selectors to:
- `SELECTORS` array in `banner-blocker.js` (Chrome)
- Style rules in `Style.css` (Safari)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Author

**Ibrahim Uzun**
- GitHub: [@iuzn](https://github.com/iuzn)
- X (Twitter): [@ibrahimuzn](https://x.com/ibrahimuzn)

Follow me on X for updates and tech discussions: **[x.com/ibrahimuzn](https://x.com/ibrahimuzn)** 🚀

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature request? Please open an issue on GitHub:
- 🐛 [Report a Bug](https://github.com/iuzn/banner-be-go/issues/new?labels=bug)
- 💡 [Request a Feature](https://github.com/iuzn/banner-be-go/issues/new?labels=enhancement)

## 📊 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Safari (macOS) | 12+ | ✅ Supported |
| Safari (iOS) | 15+ | ✅ Supported |
| Chrome | 88+ | ✅ Supported |
| Edge | 88+ | ✅ Supported |
| Brave | Latest | ✅ Supported |

## 🎉 Acknowledgments

- Inspired by the need for cleaner web browsing
- Built with Safari Web Extensions and Chrome Extension APIs
- Thanks to the open-source community for tools and resources

---

**⭐ If you find Banner Be Gone useful, please consider starring this repository!**

*Made with ❤️ for a better web browsing experience* 