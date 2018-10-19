вставить элемент после другого элемента


function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}



const hiddenBlock = document.createElement('div');
hiddenBlock.innerHTML = 'qwertyui';
insertAfter(hiddenBlock, line);



hiddenBlock всавляем после line