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
var trash = document.getElementById("trash");
var trash2 = document.getElementById("trash2");
var trash3 = document.getElementById("trash3");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var answer5 = document.getElementById("answer5");
var answer6 = document.getElementById("answer6");
var Logo = document.getElementById("Logo");
var LogoNav = document.getElementById("LogoNav");
var LogoMob = document.getElementById("LogoMob");

LogoMob.addEventListener("click", function (){
  window.scrollTo({ top: 0, behavior: 'smooth' });
  sidebar.classList.remove("open");
  menuBtn.classList.remove("hidden");
})
Logo.addEventListener("click", function (){
  window.scrollTo({ top: 0, behavior: 'smooth' });
  sidebar.classList.remove("open");
  menuBtn.classList.remove("hidden");
})

LogoNav.addEventListener("click", function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

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


document.body.classList.add('fade-out');


// Add click event listeners to individual menu items
pagrindinisItem.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  sidebar.classList.remove("open");
  menuBtn.classList.remove("hidden");
});

apieItem.addEventListener("click", function () {
  ApieVieta.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
  menuBtn.classList.remove("hidden");
});

kontaktaiItem.addEventListener("click", function () {
  KontaktVieta.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
  menuBtn.classList.remove("hidden");
});

faqItem.addEventListener("click", function () {
  FAQVieta.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
  menuBtn.classList.remove("hidden");
});
pagrindinisItemNav.addEventListener("click", function () {
});

apieItemNav.addEventListener("click", function () {
  ApieVieta.scrollIntoView({ behavior: "smooth" });
});

kontaktaiItemNav.addEventListener("click", function () {
  KontaktVieta.scrollIntoView({behavior: "smooth" });
});

faqItemNav.addEventListener("click", function () {
  FAQVieta.scrollIntoView({ behavior: "smooth" });
});
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
function aanswer1() {
  
  if (a == 0){
    answer1.style.display = "block";
    a += 1;
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    answer5.style.display = "none";
    answer6.style.display = "none";
  }else{
    answer1.style.display = "none";
    a--;
  }
}
function aanswer2() {
  
  if (b == 0){
    answer2.style.display = "block";
    b += 1;
    answer1.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    answer5.style.display = "none";
    answer6.style.display = "none";
  }else{
    answer2.style.display = "none";
    b--;
  }
}
function aanswer3() {
  
  if (c == 0){
    answer3.style.display = "block";
    c += 1;
    answer2.style.display = "none";
    answer1.style.display = "none";
    answer4.style.display = "none";
    answer5.style.display = "none";
    answer6.style.display = "none";
  }else{
    answer3.style.display = "none";
    c--;
  }
}
function aanswer4() {
  
  if (d == 0){
    answer4.style.display = "block";
    d += 1;
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer1.style.display = "none";
    answer5.style.display = "none";
    answer6.style.display = "none";
  }else{
    answer4.style.display = "none";
    d--;
  }
}
function aanswer5() {
  
  if (e == 0){
    answer5.style.display = "block";
    e += 1;
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    answer1.style.display = "none";
    answer6.style.display = "none";
  }else{
    answer5.style.display = "none";
    e--;
  }
}
function aanswer6() {
  
  if (f == 0){
    answer6.style.display = "block";
    f += 1;
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    answer5.style.display = "none";
    answer1.style.display = "none";
  }else{
    answer6.style.display = "none";
    f--;
  }
}
window.addEventListener('scroll', function() {
  var navLinks = document.querySelectorAll('a[id$="Nav"]');
  var sectionIds = ['PagrVieta', 'ApieVieta', 'KontakVieta', 'FAQVieta'];

  for (var i = 0; i < navLinks.length; i++) {
    var navLink = navLinks[i];
    var targetElement = document.getElementById(sectionIds[i]);

    var elementRect = targetElement.getBoundingClientRect();
    var isInViewport = elementRect.top >= 0 && elementRect.bottom <= window.innerHeight;

    if (isInViewport) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  }
});