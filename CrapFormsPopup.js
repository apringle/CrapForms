document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('save-button').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id,{cmd: "save"});
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('restore-button').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id,{cmd: "restore"});
    });
  });
});
