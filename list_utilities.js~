var input = document.getElementById('input');
var output = document.getElementById('output');
var removeDuplicates = document.getElementById('removeDuplicates');
var ignoreCase = document.getElementById('ignoreCase');
var listSeparator = document.getElementById('listSeparator');
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
listSeparator.onchange = listSeparator.onkeyup = listSeparator.onpropertychange = input.onpropertychange;
listEncase.onchange = listEncase.onkeyup = input.onpropertychange;

listEncase.onpropertychange = input.onpropertychange;

function getList(){ output.value = input.value
    .split('\n')
    .filter(function(element, index, arr){ 
        input.style.height = 'auto';
        output.style.height = input.style.height;
        input.style.height = input.scrollHeight + 'px';
        output.style.height = input.style.height;
        return (removeDuplicates.checked) ? (ignoreCase.checked) ? arr.indexOfIgnoreCase(element)===index : arr.indexOf(element)===index : true; 
    }).map(function(element){
        return listEncase.value.replace('x', element); 
    }).join(listSeparator.value); 
};
