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
  trash.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
  menuBtn.classList.remove("hidden");
});

kontaktaiItem.addEventListener("click", function () {
  trash2.scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
  menuBtn.classList.remove("hidden");
});

faqItem.addEventListener("click", function () {
  trash3 .scrollIntoView({ behavior: "smooth" });
  sidebar.classList.remove("open");
  menuBtn.classList.remove("hidden");
});
pagrindinisItemNav.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

apieItemNav.addEventListener("click", function () {
  trash.scrollIntoView({ behavior: "smooth" });
});

kontaktaiItemNav.addEventListener("click", function () {
  trash2.scrollIntoView({behavior: "smooth" });
});

faqItemNav.addEventListener("click", function () {
  trash3.scrollIntoView({ behavior: "smooth" });
});
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
function answer1() {
  var answer1 = document.getElementById("answer1");
  
  if (a == 0){
    answer1.style.display = "block";
    a += 1;
    console.log(a);
    
  }else{
    answer1.style.display = "none";
    a--;
  }
}
function answer2() {
  var answer1 = document.getElementById("answer2");
  
  if (b == 0){
    answer1.style.display = "block";
    b += 1;
    console.log(b);
    
  }else{
    answer1.style.display = "none";
    b--;
  }
}
function answer3() {
  var answer1 = document.getElementById("answer3");
  
  if (c == 0){
    answer1.style.display = "block";
    c += 1;
    console.log(c);
    
  }else{
    answer1.style.display = "none";
    c--;
  }
}
function answer4() {
  var answer1 = document.getElementById("answer4");
  
  if (d == 0){
    answer1.style.display = "block";
    d += 1;
    console.log(d);
    
  }else{
    answer1.style.display = "none";
    d--;
  }
}
function answer5() {
  var answer1 = document.getElementById("answer5");
  
  if (e == 0){
    answer1.style.display = "block";
    e += 1;
    console.log(e);
    
  }else{
    answer1.style.display = "none";
    e--;
  }
}
function answer6() {
  var answer1 = document.getElementById("answer6");
  
  if (f == 0){
    answer1.style.display = "block";
    f += 1;
    console.log(f);
    
  }else{
    answer1.style.display = "none";
    f--;
  }
}