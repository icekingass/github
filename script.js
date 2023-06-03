var menuBtn = document.getElementById("MenuBtn");
var sidebar = document.getElementById("sidebar");
var pagrindinisItem = document.getElementById("Pagrindinis");
var apieItem = document.getElementById("Apie");
var kontaktaiItem = document.getElementById("Kontaktai");
var faqItem = document.getElementById("FAQ");

menuBtn.addEventListener("click", function () {
  sidebar.classList.toggle("open");

  // Update the opacity of menuBtn when the sidebar is opened
  if (sidebar.classList.contains("open")) {
    menuBtn.classList.add("hidden");
  } else {
    menuBtn.classList.remove("hidden");
  }
});

var closeBtn = document.getElementById("CloseBtn");

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("open");

  // Reset the opacity of menuBtn when the sidebar is closed
  menuBtn.classList.remove("hidden");
});

// Add click event listeners to individual menu items
pagrindinisItem.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "#";
});

apieItem.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "#";
});

kontaktaiItem.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "#";
});

faqItem.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "#";
});
