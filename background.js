chrome.webRequest.onBeforeRequest.addListener(function (details) {
  return { redirectUrl: details.url.replace('wikipedia', '0wikipedia') };
}, {
  urls: [
    "*://*.wikipedia.org/*"
  ],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
  }, ["blocking"]);