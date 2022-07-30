initiateNav();

function initiateNav() {
  let open = window.localStorage.getItem("nav_stat");
  if (open === "false") {
    closeNav();
  } else {
    openNav();
  }
}

function moveNav() {
  let open = window.localStorage.getItem("nav_stat");
  if (open === "false") {
    openNav();
  } else {
    closeNav();
  }
}

function closeNav() {
  document.getElementById("container").style.margin = "0px";
  document.getElementById("sidebar").style.width = "0px";
  document.getElementById("sidebar").style.padding = "0px";
  window.localStorage.setItem("nav_stat", "false");
}
function openNav() {
  document.getElementById("container").style.marginLeft = "300px";
  document.getElementById("sidebar").style.width = "300px";
  document.getElementById("sidebar").style.padding = "2rem";
  window.localStorage.setItem("nav_stat", "true");
}

var modal = document.getElementsByClassName("video-modal")[0];
var span = document.getElementsByClassName("close")[0];
function openVid() {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
  document.getElementById("video").pause();
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("video").pause();
  }
};
