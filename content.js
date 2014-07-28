chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.text && (msg.text == "save")) {
    sendResponse(document.all[0].outerHTML);
  }
});
