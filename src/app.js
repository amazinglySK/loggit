var open = true;

function moveNav() {
  if (open == false) {
    openNav();
  } else {
    closeNav();
  }
}

function closeNav() {
  document.getElementById("container").style.margin = "0px";
  document.getElementById("sidebar").style.width = "0px";
  document.getElementById("sidebar").style.padding = "0px";
  open = false;
}
function openNav() {
  document.getElementById("container").style.marginLeft = "300px";
  document.getElementById("sidebar").style.width = "300px";
  document.getElementById("sidebar").style.padding = "2rem";
  open = true;
}
