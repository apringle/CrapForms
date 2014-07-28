var crapForms = crapForms || {};

sendSaveMessage = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    chrome.tabs.sendMessage(tab.id,{greeting: "save"});
  });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('save-button').addEventListener('click', sendSaveMessage);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('restore-button').addEventListener('click', crapForms.restoreForms);
});
