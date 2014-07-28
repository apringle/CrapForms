
var crapForms = crapForms || {};

crapForms.saveForms = function ()
{
    var inputs = document.querySelectorAll('input');
    var inputValues = [];

    for(var i = 0; i < inputs.length; i++)
    {
        var currentInput = inputs[i];

        if(currentInput.type === 'password')
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

                if(currentInput.type === 'password')
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

document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('save-button').addEventListener('click', crapForms.saveForms);      
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('restore-button').addEventListener('click', crapForms.restoreForms);      
});
