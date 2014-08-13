var host = "https://facebook.com/messages";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host};
    },
    {
        urls: [
            "*://facebook.com/",
            "*://www.facebook.com/"
        ],
        types: ["main_frame"]
    },
    ["blocking"]
);