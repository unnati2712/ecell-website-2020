// jshint esversion: 6
window.addEventListener("load", function(){
  window.setTimeout(function (){
    document.querySelector(".loader").classList.add("hide-loader");
  }, 500);
});
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
document.querySelector(".reach-us .reach-us-button").addEventListener("click", function(){
  let target = document.querySelector(".reach-us .content");
  target.classList.add("show-reachus");
  target.classList.remove("hide-reachus");
});
document.querySelector(".content #close-reach-us").addEventListener("click", function(){
  let target = document.querySelector(".reach-us .content");
  target.classList.add("hide-reachus");
  target.classList.remove("show-reachus");
});
document.getElementById('modal1').addEventListener("click", function() {
  document.querySelector('.bg-modal1').style.display = "flex";
  document.querySelector(".navbar").style.display = "none";
  console.log("Button was clicked!");
});

document.getElementById('closemodal1').addEventListener("click", function() {
document.querySelector('.bg-modal1').style.display = "none";
document.querySelector(".navbar").style.display = "block";
});

document.getElementById('modal2').addEventListener("click", function() {
  document.querySelector('.bg-modal2').style.display = "flex";
  document.querySelector(".navbar").style.display = "none";
  console.log("Button was clicked!");
});

document.getElementById('closemodal2').addEventListener("click", function() {
document.querySelector('.bg-modal2').style.display = "none";
document.querySelector(".navbar").style.display = "block";
});

document.getElementById('modal3').addEventListener("click", function() {
  document.querySelector('.bg-modal3').style.display = "flex";
  document.querySelector(".navbar").style.display = "none";
  console.log("Button was clicked!");
});

document.getElementById('closemodal3').addEventListener("click", function() {
document.querySelector('.bg-modal3').style.display = "none";
document.querySelector(".navbar").style.display = "block";
});

document.getElementById('modal4').addEventListener("click", function() {
  document.querySelector('.bg-modal4').style.display = "flex";
  document.querySelector(".navbar").style.display = "none";
  console.log("Button was clicked!");
});

document.getElementById('closemodal4').addEventListener("click", function() {
document.querySelector('.bg-modal4').style.display = "none";
document.querySelector(".navbar").style.display = "block";
});

document.getElementById('modal5').addEventListener("click", function() {
  document.querySelector('.bg-modal5').style.display = "flex";
  document.querySelector(".navbar").style.display = "none";
  console.log("Button was clicked!");
});

document.getElementById('closemodal5').addEventListener("click", function() {
document.querySelector('.bg-modal5').style.display = "none";
document.querySelector(".navbar").style.display = "block";
});

document.getElementById('modal6').addEventListener("click", function() {
  document.querySelector('.bg-modal6').style.display = "flex";
  document.querySelector(".navbar").style.display = "none";
  console.log("Button was clicked!");
});

document.getElementById('closemodal6').addEventListener("click", function() {
document.querySelector('.bg-modal6').style.display = "none";
document.querySelector(".navbar").style.display = "block";
});