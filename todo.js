//Lessons learned
// - strive to make your functions reusable
// - avoid global variables
function updateItemStatus() {
  var cbId = this.id.replace("cb_", "");
  var itemText = document.getElementById("item_" + cbId)
  if (this.checked){
    itemText.className = "checked"
  }else{
    itemText.className = ""
  }
}

//var editElement = document.getElementsByClassName("btnedit");
var deleteElement = document.getElementsByClassName("btndelete");
for (var i = 0; i < deleteElement.length; i++) {
    deleteElement[i].addEventListener('click', function () {
      var deleteElem = confirm("Do you really want to delete this?");
      if (deleteElem === false) {
        return;
      }

      var li = this.parentElement;
      li.parentElement.removeChild(li);
    }, false);
}

/*editElement.addEventListener ('click', function () {
  var editElem = prompt ("Replace with:");
});*/

// deleteElement.addEventListener ('click', function () {
//   var deleteElem = confirm("Do you really want to delete this?");
// });

 function renameItem () {
  //this == span
  var newText = prompt("What should this item be renamed to?");
  //nu-mi functioneaza rename-ul!!!
  if (!newText || newText == "" || newText == " ") {
    return false;
  }
  this.innerText = newText;
}

 function removeItem () {
  //this == span
  //...var spanId = this.id.replace("item_", "");
  //...document.getElementById("li_" + spanId)
  this.style.display = "none";
}

function addNewItem (list, itemText) {

  var date = new Date();
  var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

  var listItem = document.createElement("li");
  listItem.id = "li_" + id;
  listItem.ondblclick = removeItem;

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "cb_" + id;
  checkBox.onclick = updateItemStatus;

  var span = document.createElement("span");
  span.id = "item_" + id;
  span.innerText = itemText;
  span.onclick = renameItem;

  var btndelete = document.createElement("btndelete");
  btndelete.type = "button";
  btndelete.id = "btndelete" + id;
  btndelete.onclick = deleteElement;

  listItem.appendChild(checkBox);
  listItem.appendChild(span);
  listItem.appendChild(btndelete);

  //listItem.innerText = itemText;
  /*var list = document.getElementById("todoList");*/
  list.appendChild(listItem);
}

var totalItems = 0;
var inItemText = document.getElementById("inItemText");
// inItemText.focus();
//**var btnNew = document.getElementById("btnAdd");
//**btnNew.onclick = function () {
inItemText.onkeyup = function (event) {
  //Event.which (13) -> ENTER
  //Only proceed if key press is ENTER key
  if (event.which == 13) {
    var itemText = inItemText.value;
    //**var itemText = event.which;
    if (itemText == false || itemText == "") {
      return;
    }

  addNewItem(document.getElementById("todoList"), itemText);

  inItemText.focus();
  inItemText.select();
}
};
//buton edit pt fiecare element
//            -//- stergere
//sa-mi arate cate taskuri sunt completate si cate sunt in total
