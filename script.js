var menuBtn = document.getElementById("MenuBtn");
var sidebar = document.getElementById("sidebar");
var pagrindinisItem = document.getElementById("Pagrindinis");
var apieItem = document.getElementById("Apie");
var kontaktaiItem = document.getElementById("Kontaktai");
var faqItem = document.getElementById("FAQ");
var pagrindinisItemNav = document.getElementById("PagrindinisNav");
var apieItemNav = document.getElementById("ApieNav");
var kontaktaiItemNav = document.getElementById("KontaktaiNav");
var faqItemNav = document.getElementById("FAQNav");
var PagrVieta = document.getElementById("PagrVieta");
var ApieVieta = document.getElementById("ApieVieta");
var KontaktVieta = document.getElementById("KontakVieta");
var FAQVieta = document.getElementById("FAQVieta");
var faqKlausimai = document.getElementById("FAQKlausimai");
var pirmas = document.getElementById("pirmas");
var antras = document.getElementById("antras");
var trecias = document.getElementById("trecias");
var ketvirtas = document.getElementById("ketvirtas");
var PagrVietaMob = document.getElementById("PagrVietaMob");

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
  menuBtn.classList.remove("hidden");
});

apieItem.addEventListener("click", function () {
  antras.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
  menuBtn.classList.remove("hidden");
});

kontaktaiItem.addEventListener("click", function () {
  trecias.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
  menuBtn.classList.remove("hidden");
});

faqItem.addEventListener("click", function () {
  ketvirtas.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
  menuBtn.classList.remove("hidden");
});
pagrindinisItemNav.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

apieItemNav.addEventListener("click", function () {
  antras.scrollIntoView({ behavior: "smooth" });
});

kontaktaiItemNav.addEventListener("click", function () {
  trecias.scrollIntoView({behavior: "smooth" });
});

faqItemNav.addEventListener("click", function () {
  ketvirtas.scrollIntoView({ behavior: "smooth" });
});
