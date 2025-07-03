/**
 * Banner Be Gone - Chrome Extension
 * ----------------------------------
 * Removes intrusive "Open in App" banners from Safari and other browsers
 * - When the page first loads
 * - Catches banners added later via MutationObserver
 */

// Meta tags that trigger Safari "Open in App" banners
const META_SELECTORS = [
  // Apple Smart App Banner
  'meta[name="apple-itunes-app"]',

  // App Links (Universal Links)
  'meta[property="al:ios:app_name"]',
  'meta[property="al:ios:app_store_id"]',
  'meta[property="al:ios:url"]',
  'meta[property="al:iphone:app_name"]',
  'meta[property="al:iphone:app_store_id"]',
  'meta[property="al:iphone:url"]',
  'meta[property="al:ipad:app_name"]',
  'meta[property="al:ipad:app_store_id"]',
  'meta[property="al:ipad:url"]',

  // Twitter Cards
  'meta[name="twitter:app:name:iphone"]',
  'meta[name="twitter:app:id:iphone"]',
  'meta[name="twitter:app:url:iphone"]',
  'meta[name="twitter:app:name:ipad"]',
  'meta[name="twitter:app:id:ipad"]',
  'meta[name="twitter:app:url:ipad"]',
];

/**
 * Removes meta tags that cause "Open in App" banners
 * @param {Document|Element} root - Root element to search within
 */
function removeMetaTags(root = document) {
  META_SELECTORS.forEach((selector) => {
    root.querySelectorAll(selector).forEach((meta) => {
      console.debug("[Banner Be Gone] Removing meta tag:", meta);
      meta.remove();
    });
  });
}

/**
 * Runs when extension starts
 */
function initialize() {
  console.log("[Banner Be Gone] Extension started");

  // Remove meta tags
  removeMetaTags();

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
          removeMetaTags(node);
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
