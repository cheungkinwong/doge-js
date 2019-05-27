document.getElementById("doge").onload = woof();
function woof() {
  document.getElementById("doge").innerHTML = "Woof!";
}

document.getElementById("doge").addEventListener("mouseover", woofwoof);
function woofwoof() {
  document.getElementById("doge").innerHTML = "Woof woof!";
}

document.getElementById("doge").addEventListener("click", picture);
function picture() {
  if (document.getElementById("picture").style.display === "block") {
    document.getElementById("picture").style.display = "none";
  } else {
    document.getElementById("picture").style.display = "block";
  }
}
