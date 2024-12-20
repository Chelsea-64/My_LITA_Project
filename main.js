const features = document.getElementById("features");
const company = document.getElementById("company");
const arrow = document.getElementById("arrow");
const arrowTwo = document.getElementById("arrow-two");
const dropdownContent = document.getElementById("dropdown-content");
const dropdownContentTwo = document.getElementById("dropdown-content-two");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

function dropDown() {
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
    arrow.src = "images/icon-arrow-up.svg";
  } else {
    dropdownContent.style.display = "none";
    arrow.src = "images/icon-arrow-down.svg";
  }
}

function sideBar() {
  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
    hamburger.src = "images/icon-close-menu.svg";
  } else {
    navLinks.style.display = "none";
    hamburger.src = "images/icon-menu.svg";
  }
}

function dropDownTwo() {
  if (dropdownContentTwo.style.display === "none") {
    dropdownContentTwo.style.display = "block";
    arrowTwo.src = "images/icon-arrow-up.svg";
  } else {
    dropdownContentTwo.style.display = "none";
    arrowTwo.src = "images/icon-arrow-down.svg";
  }
}

features.addEventListener("click", dropDown);
company.addEventListener("click", dropDownTwo);
hamburger.addEventListener("click", sideBar);
