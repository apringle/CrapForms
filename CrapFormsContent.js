
var crapForms = crapForms || {};

crapForms.saveForms = function ()
{
    var inputs = document.querySelectorAll('input');
    var inputValues = [];

    for(var i = 0; i < inputs.length; i++)
    {
        var currentInput = inputs[i];

        if(currentInput.type === 'password' || currentInput.type === 'submit')
        {
            continue;
        }

        if(currentInput.type === 'checkbox' || currentInput.type === 'radio')
        {
            inputValues.push(currentInput.checked);
        }
        else
        {
            inputValues.push(currentInput.value);
        }
    }

    var crapFormsStorage;
    if(localStorage['crapFormsStorage'])
    {
        crapFormsStorage = JSON.parse(localStorage['crapFormsStorage']);
    }
    else
    {
        crapFormsStorage = {};
    }

    crapFormsStorage[location.pathname] = inputValues;
    localStorage['crapFormsStorage'] = JSON.stringify(crapFormsStorage);
};

crapForms.restoreForms = function()
{
    if(localStorage['crapFormsStorage'])
    {
        var crapFormsStorage = JSON.parse(localStorage['crapFormsStorage']);
        var values = crapFormsStorage[location.pathname];
        if(values)
        {
            var inputs = document.querySelectorAll('input');
            for(var i = 0; i < inputs.length; i++)
            {
                var currentInput = inputs[i];

                if(currentInput.type === 'password' || currentInput.type === 'submit')
                {
                    continue;
                }

                if(currentInput.type === 'checkbox' || currentInput.type === 'radio')
                {
                    currentInput.checked = values[i];
                }
                else
                {
                    currentInput.value = values[i];
                }
            }
        }
    }
};

crapForms.clearForms = function()
{
    var crapFormsStorage = {};
    localStorage['crapFormsStorage'] = JSON.stringify(crapFormsStorage);
};

crapForms.startAutoSave = function()
{
    window.onunload = crapForms.saveForms();
};

crapForms.stopAutoSave = function()
{
    window.onunload = null;
};



chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse)
{
    if (msg.cmd)
    {
        if(msg.cmd === 'save')
        {
            crapForms.saveForms();
        }
        else if(msg.cmd === 'restore')
        {
            crapForms.restoreForms();
        }
    }
});
