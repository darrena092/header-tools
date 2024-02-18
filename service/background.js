// Preload rules, as the extension API doesn't support blocking operations.
let cachedRules = [];

function updateCachedRules() {
  chrome.storage.local.get(['rules'], function(result) {
    if (result.rules) {
      cachedRules = result.rules;
    }
  });
}

updateCachedRules();

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local' && changes.rules) {
    updateCachedRules();
  }
});

chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    cachedRules.forEach(rule => {
      if (rule.domains.some(domain => new RegExp(domain).test(details.url))) {
        rule.headers.forEach(header => {
          const headerIndex = details.requestHeaders.findIndex(h => h.name.toLowerCase() === header.name.toLowerCase());
          if (headerIndex > -1) {
            details.requestHeaders[headerIndex].value = header.value;
          } else {
            details.requestHeaders.push({ name: header.name, value: header.value });
          }
        });
      }
    });

    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders", "extraHeaders"]
);