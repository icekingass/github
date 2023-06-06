var menuBtn = document.getElementById("MenuBtn");
var sidebar = document.getElementById("sidebar");
var pagrindinisItem = document.getElementById("Pagrindinis");
var apieItem = document.getElementById("Apie");
var kontaktaiItem = document.getElementById("Kontaktai");
var faqItem = document.getElementById("FAQ");
var poraštėItem = document.getElementById("Poraštė");
var PagrVieta = document.getElementById("PagrVieta");
var ApieVieta = document.getElementById("ApieVieta");
var KontaktVieta = document.getElementById("KontakVieta");
var FAQVieta = document.getElementById("FAQVieta");
var PoraštVieta = document.getElementById("PoraštVieta");


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
pagrindinisItem.addEventListener("click", function () {
  PagrVieta.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
});

apieItem.addEventListener("click", function () {
  ApieVieta.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
});

kontaktaiItem.addEventListener("click", function () {
  KontaktVieta.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
});

faqItem.addEventListener("click", function () {
  FAQVieta.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
});

poraštėItem.addEventListener("click", function () {
  PoraštVieta.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open"); 
});
