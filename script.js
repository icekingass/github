// JavaScript content

var FAQ = document.getElementById("FAQ");
var Pagrindinis = document.getElementById("Pagrindinis");
var Apie = document.getElementById("Apie");
var Kontaktai = document.getElementById("Kontaktai");
var MenuBtn = document.getElementById("MenuBtn");
var SubMenu = document.getElementsByClassName("sub-menu")[0];
var sidebar = document.getElementById("sidebar");

FAQ.addEventListener("click", function () {
  window.location.href = "#";
});

Pagrindinis.addEventListener("click", function () {
  window.location.href = "#";
});

Apie.addEventListener("click", function () {
  window.location.href = "#";
});

Kontaktai.addEventListener("click", function () {
  window.location.href = "#";
});

MenuBtn.addEventListener("click", function () {
  sidebar.classList.toggle("open");
  
  if (sidebar.classList.contains("open")) {
    MenuBtn.style.transform = "translateX(400px)";
  } else {
    MenuBtn.style.transform = "translateX(0)";
  }
});
