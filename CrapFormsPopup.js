sendSaveMessage = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    chrome.tabs.sendMessage(tab.id,{cmd: "save"});
  });
}

sendRestoreMessage = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    chrome.tabs.sendMessage(tab.id,{cmd: "restore"});
  });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('save-button').addEventListener('click', sendSaveMessage);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('restore-button').addEventListener('click', sendRestoreMessage);
});
