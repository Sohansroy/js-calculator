
function appendToDisplay(input)
{
    const display=document.getElementById('display');
    display.value += input;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try 
    {
        display.value = eval(display.value);
    } 
    catch 
    {
        display.value = 'Error';
    }
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculatePercent() {
    const display = document.getElementById('display');
    try 
    {
        display.value = parseFloat(display.value) / 100;
    } 
    catch 
    {
        display.value = 'Error';
    }
}