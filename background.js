const filter = {
  urls: [
    "*://facebook.com/*",
    "*://www.facebook.com/*",
    "*://messenger.com/*",
    "*://www.messenger.com/*"
  ],
  types: [
    "main_frame",
    "sub_frame",
    "stylesheet",
    "script",
    "image",
    "object",
    "xmlhttprequest",
    "other"
  ]
};

const opt_extraInfoSpec = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(
  detail => {
    let today = new Date();
    let time = today.getHours();
    // let host = "./newtab.html";
    let host = "https://tenor.com/search/cute-love-gifs";

    console.log("time", time);
    console.log("detail", detail);
    // if (time < 6 || time > 21) {

    return {
      redirectUrl: host
      // cancel: true
    };
  },

  filter,
  opt_extraInfoSpec
);
