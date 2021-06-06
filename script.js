var itemArr = [];
var itemIndex = 0;
var currentIndex = 0;
var deleteIndex = 0;
var arrLength = 0;

function addItem(){

    var item = document.getElementById("inputItem").value;
    itemArr.push(item);

    currentIndex = itemArr.length - 1;
    console.log("Array length: "+ currentIndex);
    itemIndex = itemArr.indexOf(itemArr[currentIndex], currentIndex) + 1;

    var list = document.createElement("li") 
    list.setAttribute("id", currentIndex);
    list.setAttribute("class", "item");
    var output = document.getElementById("orderedList");
    var removeBtn = document.createElement("BUTTON");
    removeBtn.innerText = "X";
    removeBtn.setAttribute("id", "b" + itemIndex);
    removeBtn.setAttribute("onclick", "removeItem(this.id)");
    list.appendChild(document.createTextNode(itemArr[currentIndex]));
    list.appendChild(removeBtn);
    output.appendChild(list);

}

function removeItem(){

}

function clearItems(){

    

}