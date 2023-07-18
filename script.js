//your JS code here. If required.
function getSize() {
  let w = document.documentElement.clientWidth;

  let h = document.documentElement.clientHeight;

  document.getElementById("sizeInfo").innerHTML =
    "<h1>Width: " + w + " and " + " Heigth: " + h + "</h1>";
}
