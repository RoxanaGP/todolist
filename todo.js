
function updateItemStatus() {
  var cbId = this.id.replace("cb_", "");
  var itemText = document.getElementById("item_" + cbId)
  if (this.checked){
    itemText.className = "checked"
  }else{
    itemText.className = ""
  }
}

function renameItem () {
  var newText = prompt("What should this item be renamed to?");
  if (!newText || newText == "" || newText == " ") {
    return false;
  }
  this.innerText = newText;
}

function deleteElement (varza) {
  var li = varza;
  var deleteElem = confirm("Do you really want to delete this?");
  if (deleteElem === false) {
    return;
  }
  li.parentElement.removeChild(li);
  incrementCountDeleted();
}

function addNewItem (list, itemText) {
  var date = new Date();
  var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

  var listItem = createLi(id);
  var checkBox = createCheckB(id);
  var span = renameSpan(id);
  var deleteElem = createDeleteBtn(id);

  listItem.appendChild(checkBox);
  listItem.appendChild(span);
  listItem.appendChild(deleteElem);
  list.appendChild(listItem);
}

function createLi (bla) {
  var e = document.createElement("li");
  e.id = "li_" + bla;
  return e;
}

function createCheckB (castravete) {
var checkBox = document.createElement("input");
checkBox.type = "checkbox";
checkBox.id = "cb_" + castravete;
checkBox.onclick = updateItemStatus;
}

function renameSpan (cartof, itemText) {
  var span = document.createElement("span");
  span.id = "item_" + cartof;
  span.innerText = itemText;
  span.onclick = renameItem;
}

function createDeleteBtn () {
    var deleteElem = document.createElement("button");
    deleteElem.type = "button";
    deleteElem.innerText = "Delete!";
    deleteElem.onclick = function () {
      deleteElement(this.parentElement);
      countElements();
      updateCountDeleted ();
    };
}

var totalItems = 0;
var inItemText = document.getElementById("inItemText");

inItemText.onkeyup = function (event) {
  if (event.which == 13) {
    var itemText = inItemText.value;
    if (itemText == false || itemText == "") {
      return;
    }

  addNewItem(document.getElementById("todoList"), itemText);

  inItemText.value = "";
  countElements();
  }
};

function countElements() {
  var spanTotal = document.getElementById("total");
  var list = document.getElementById("todoList");
  var listItems = list.getElementsByTagName("li");
  spanTotal.innerText = listItems.length;
}
//am apelat aceasta functie pentru a-mi afisa numarul de taskuri la incarcarea paginii
//github add commit push
//Tema - functii si obiecte

var countDeleted = 0;

function incrementCountDeleted () {
   countDeleted = countDeleted + 1;
}

function updateCountDeleted () {
  document.getElementById("deleted").innerText = countDeleted;
}
//Tema - functia addNewItem - scrie 4 functii pentru variabilele din ea
//retunr
