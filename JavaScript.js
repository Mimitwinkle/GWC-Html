function namebox() {
    var txt;
    var person = prompt("What is your name?", " ");
    if (person == null || person == "") {
        txt = "Hello";
    }
    else {
        txt = "Hello " + person + "!";
    }
    document.getElementById("name").innerHTML = txt;
}
function enlarge(imgname) {
    document.getElementById('family').src = imgName;
    document.getElementById('family').style.width = '80%';
    document.getElementById('family').style.padding = '0px';
}
