var input = document.getElementById('input');
var inputCount = document.getElementById('inputCount');
var output = document.getElementById('output');
var outputCount = document.getElementById('outputCount');
var removeDuplicates = document.getElementById('removeDuplicates');
var ignoreCase = document.getElementById('ignoreCase');
var inputListSeparator = document.getElementById('inputListSeparator');
var outputListSeparator = document.getElementById('outputListSeparator');
var listEncase = document.getElementById('listEncase');

Array.prototype.indexOfIgnoreCase = function(string){
    var index = -1;
    this.some(function(element, i){
        if(string.toLowerCase()!==element.toLowerCase()){ return; }
        index = i; 
        return true;
    });
    return index;
};
input.oninput = input.onpropertychange = getList; 
removeDuplicates.onchange = input.onpropertychange;
ignoreCase.onchange = input.onpropertychange;
inputListSeparator.onchange = inputListSeparator.onkeyup = inputListSeparator.onpropertychange = input.onpropertychange;
outputListSeparator.onchange = outputListSeparator.onkeyup = outputListSeparator.onpropertychange = input.onpropertychange;
listEncase.onchange = listEncase.onkeyup = input.onpropertychange;

listEncase.onpropertychange = input.onpropertychange;

function getList(){ 
    var inputArray = input.value
    .split(inputListSeparator.value);
    inputCount.innerText = inputArray.length;
    var outputArray = inputArray.filter(function(element, index, arr){ 
        input.style.height = 'auto';
        output.style.height = input.style.height;
        input.style.height = input.scrollHeight + 'px';
        output.style.height = input.style.height;
        return (removeDuplicates.checked) ? (ignoreCase.checked) ? arr.indexOfIgnoreCase(element)===index : arr.indexOf(element)===index : true; 
    }).map(function(element){
        return listEncase.value.replace('x', element); 
    });
    outputCount.innerText = outputArray.length;
    output.value = outputArray.join(outputListSeparator.value); 
};
