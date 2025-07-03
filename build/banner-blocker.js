/**
 * Banner Be Gone - Chrome Extension
 * ----------------------------------
 * Removes intrusive "Open in App" banners from Safari and other browsers
 * - When the page first loads
 * - Catches banners added later via MutationObserver
 */

// Most common class and id patterns
// New patterns can be added as needed
const SELECTORS = [
  // Safari native smart banners
  ".smartbanner",
  ".smart-app-banner",
  ".smartAppBanner",
  'div[id^="smartbanner"]',
  "#smartbanner",

  // Common smart banner libraries
  ".smartbanner-js",
  ".adjust-smart-banner",

  // Basic native app install prompts
  ".native-app-banner",
  'div[class*="SmartAppBanner"]',
  '[data-testid="app-banner"]',
  'div[role="banner"]',
  'header[role="banner"]',
];

// Meta tag that triggers Safari Smart App Banner
const META_SELECTOR = 'meta[name="apple-itunes-app"]';

/**
 * Removes banners from the DOM
 * @param {Document|Element} root - Root element to search within
 */
function removeBanners(root = document) {
  // Remove visible banner elements
  SELECTORS.forEach((selector) => {
    root.querySelectorAll(selector).forEach((element) => {
      console.debug("[Banner Be Gone] Removing banner:", element);
      element.remove();
    });
  });

  // Remove Safari meta tags
  root.querySelectorAll(META_SELECTOR).forEach((meta) => {
    console.debug("[Banner Be Gone] Removing meta tag:", meta);
    meta.remove();
  });
}

/**
 * Adds CSS to the page head
 * Additional hiding rules for comprehensive blocking
 */
function addCustomStyles() {
  const style = document.createElement("style");
  style.textContent = `
    /* Banner Be Gone - Native app banners only */
    [class*="smartbanner" i],
    [class*="smart-app-banner" i],
    [id*="smartbanner" i] {
      display: none !important;
      visibility: hidden !important;
      height: 0 !important;
      overflow: hidden !important;
      position: absolute !important;
      left: -9999px !important;
    }
    
    /* Common smart banner patterns */
    .smartbanner-js,
    .adjust-smart-banner,
    .native-app-banner {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
  console.debug("[Banner Be Gone] Custom styles added");
}

/**
 * Runs when extension starts
 */
function initialize() {
  console.log("[Banner Be Gone] Extension started");

  // Initial cleanup
  removeBanners();

  // Add CSS rules
  addCustomStyles();

  // Start MutationObserver for dynamic content
  startObserver();
}

/**
 * Starts observer to monitor DOM changes
 */
function startObserver() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          removeBanners(node);
        }
      });
    });
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  console.log("[Banner Be Gone] MutationObserver started");
}

// Start when page loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}
