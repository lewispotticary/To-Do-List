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

    console.log(itemArr);

}

function removeItem(clicked_id, currentIndex){

    deleteIndex = clicked_id.slice(-1) - 1;
    alert(itemArr[deleteIndex] + " has been removed from your list");

    //Removing the item from array
    itemArr.splice(deleteIndex, 1);
    console.log(itemArr);

    var items = document.getElementsByClassName('item');
    itemsLength = items.length
    for(var i=0; i<itemsLength; i++) { 
        document.getElementById(i).remove();
    }   

    arrLength = itemArr.length;

    for(var x=0; x<arrLength; x++) { 
        console.log("start");
        var setID = x + 1;
        var list = document.createElement("li") 
        list.setAttribute("id", x);
        list.setAttribute("class", "item");
        var output = document.getElementById("orderedList");
        var removeBtn = document.createElement("BUTTON");
        removeBtn.innerText = "X";
        removeBtn.setAttribute("id", "b" + setID);
        removeBtn.setAttribute("onclick", "removeItem(this.id)");
        list.appendChild(document.createTextNode(itemArr[x]));
        list.appendChild(removeBtn);
        output.appendChild(list);
    } 

}

function clearItems(){

    //Removing all items from array
    arrLength = itemArr.length - 1;
    for(var x=arrLength; x>-1; x--) {  
        itemArr.splice(x, 1);
        
    }    
    console.log(itemArr);

    //Removing all list items in body
    var items = document.getElementsByClassName('item');
    itemsLength = items.length
    for(var i=0; i<itemsLength; i++) { 
        document.getElementById(i).remove();
    }    
}