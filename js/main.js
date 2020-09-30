// jshint esversion: 6
document.querySelector("#close-nav").addEventListener("click", function(){
  let target = document.querySelector(".navslider");
  let secondaryTarget = document.querySelector(".nav-options");
  target.classList.add("hide-nav"); 
  target.classList.remove("show-nav");
  secondaryTarget.classList.add("hide-nav-options");
  secondaryTarget.classList.remove("show-nav-options");
});
document.querySelector("#open-nav").addEventListener("click", function(){
  let target = document.querySelector(".navslider");
  let secondaryTarget = document.querySelector(".nav-options");
  console.log("open clicked");
  target.classList.remove("hide-nav");
  target.classList.add("show-nav");
  secondaryTarget.classList.add("show-nav-options");
  secondaryTarget.classList.remove("hide-nav-options");
});
document.querySelector("body").addEventListener("scroll", function(){
  let target = document.querySelector("#open-nav");
  if(document.body.scrollTop < 150){
    target.classList.remove("make-black");
  } else{
    target.classList.add("make-black");
  }
  console.log(document.querySelector("body").scrollTop);
});
