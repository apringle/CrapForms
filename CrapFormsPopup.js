var crapForms = crapForms || {};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('save-button').addEventListener('click', crapForms.saveForms);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('restore-button').addEventListener('click', crapForms.restoreForms);
});