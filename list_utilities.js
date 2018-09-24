var input = document.getElementById('input');
var inputCount = document.getElementById('inputCount');
var output = document.getElementById('output');
var outputCount = document.getElementById('outputCount');
var removeDuplicates = document.getElementById('removeDuplicates');
var ignoreCase = document.getElementById('ignoreCase');
var inputListSeparator = document.getElementById('inputListSeparator');
var outputListSeparator = document.getElementById('outputListSeparator');
var outputListItemPrepend = document.getElementById('outputListItemPrepend');
var outputListItemAppend = document.getElementById('outputListItemAppend');

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
outputListItemPrepend.onchange = outputListItemPrepend.onkeyup = outputListItemPrepend.onpropertychange = input.onpropertychange;
outputListItemAppend.onchange = outputListItemAppend.onkeyup = outputListItemAppend.onpropertychange = input.onpropertychange;

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
        return outputListItemPrepend.value + element + outputListItemAppend.value;
    });
    outputCount.innerText = outputArray.length;
    output.value = outputArray.join(outputListSeparator.value);
};
