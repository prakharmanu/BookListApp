var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter');

//Form submit
form.addEventListener('submit', addItem);

//Delete item
itemList.addEventListener('click', removeItem);

//Filter item

filter.addEventListener('keyup', filterItem);

//AddItem
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;

    //create new element li
    var li = document.createElement('li');

    //Add Class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button
    var deleteBtn = document.createElement('button');

    //Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append Text Node
    deleteBtn.appendChild(document.createTextNode(' X'));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);
}

// Remove Item
function removeItem(e){
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

function filterItem(e) {
    // convert to lower caseitem
    var text = e.target.value.toLowerCase();
    
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function (item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}