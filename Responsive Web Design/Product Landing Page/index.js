let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function burgerMenu() {
  let main = document.getElementById("main");
  let icon = document.getElementById("icon");
  let burgerDropdown = document.getElementById("myLinks");

  if (burgerDropdown.style.display === "block"){
    burgerDropdown.style.display = "none";
    main.style.paddingTop = "60px";
    icon.style.height = "100%";
    resetSpacer();
  }
  else{
    burgerDropdown.style.display = "block";
    main.style.paddingTop = "200px";
    icon.style.height = "auto";
  } 
}

//Set padding to a spacer to account for fixed header/menu
function linkClick(link){
  //if window size is not a mobile view, exit.
  if (window.innerWidth > 1000){
    let element = document.getElementById(link);
    element.style.animation = "glow 700ms 2";
    element.style.borderRadius = "3px";
    return;
  }

  //Reset spacer when link is clicked: 
  resetSpacer();
  //Set spacer for selected link
  let spacer = document.getElementById(link+"-spacer");
  console.log(spacer);
  spacer.style.paddingTop = "200px";
}

function resetSpacer(){
  document.getElementById("features-spacer").style.paddingTop = "0px";
  document.getElementById("pricing-spacer").style.paddingTop = "0px";
  document.getElementById("demo-spacer").style.paddingTop = "0px";
}
