function sortList() {
    var txt;
    var list = prompt("Please enter your unordered list:", "Input");
    if (list == null || list == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = list;
    }
  
    var array = txt.split(',');
    array.sort();
    document.getElementById("maddie").innerHTML = "Your ordered list: " + array;
  }