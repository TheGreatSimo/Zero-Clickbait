let isRunning = false; // Initially, the content script is not running

function getTabId(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs && tabs.length > 0) {
      const tabId = tabs[0].id;
      callback(tabId);
    } else {
      console.error("Unable to get current tab.");
    }
  });
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.text === "Start") {
    getTabId((tabId) => {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js']
      });
      isRunning = true;
    });
  } else if (msg.text === "Stop") {
    isRunning = false;
  }
});

