// jshint esversion: 6
window.addEventListener("load", function(){
  document.querySelector(".loader").classList.add("hide-loader");
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

document.querySelector("#ini-box-close").addEventListener("click", function(){
  document.querySelector(".initiative-desc-box").classList.add("d-none");
});

/*--------------------open initiatives---------------------*/
let initiatives = [
  {
    id: "endeavour_18",
    head: "Endeavour'18",
    img: ["1.jpg", "2.jpg", "endeavour_17/3.jpg", "endeavour_17/4.jpg"],
    content: "Endeavour'18 was the second Inter- Techno-EntreprCollegeeneurial E-Summit of our college. Being initiated in 2015, the legacy was carried forward, with the intense efforts of KIET e-Cell. It was held for two days, 7th & 8th March, 2017, venue being the college campus itself. It comprised of numerous competitions, guest lectures from eminent entrepreneurs, technical and corporate events and host of other activities to enthral its participants. Being organized at inter-collegiate level, the E-summit brought forth before its audience- a battle of ideas, an explosion of creativity, an expanse of knowledge and above all, a platform for all to develop a sense of entrepreneurship.Endeavour'17 witnessed overwhelming response from not only KIET, but also numerous colleges such as IIT Delhi, Delhi University, Ajay Kumar Garg Engineering College, JSS-Noida, JIIT Noida, IPEC, Jamia Milia Islamia, Bhartiya Vidyapeeth, Shobhit University and MIET.<br/> Endeavour'17 had been graced by several noteworthy guest talks. Some of them being by:<br/> Mr. Harkesh Kr Mittal (Adviser, Member Secretary, NSTED)B<br/> Mrs. Kanchan Agarwal (Co-Founder and CEO, Compare Munafa)<br/> Mr. Ramesh Dharmaji( CGM, Small Industries Development Bank of India)<br/> In the events, the students got to realise what it takes to be an entrepreneur. The winners took home prizes worth INR 3,00,000.<br/>"
  },
  {
    id: "endeavour_17",
    head: "Endeavour'18",
    img: ["endeavour_17/1.jpg", "endeavour_17/2.jpg", "endeavour_17/3.jpg"],
    content: "Endeavour'17 was the second Inter-College Techno-Entrepreneurial E-Summit of our college. Being initiated in 2015, the legacy was carried forward, with the intense efforts of KIET e-Cell. It was held for two days, 7th & 8th March, 2017, venue being the college campus itself. It comprised of numerous competitions, guest lectures from eminent entrepreneurs, technical and corporate events and host of other activities to enthral its participants. Being organized at inter-collegiate level, the E-summit brought forth before its audience- a battle of ideas, an explosion of creativity, an expanse of knowledge and above all, a platform for all to develop a sense of entrepreneurship.Endeavour'17 witnessed overwhelming response from not only KIET, but also numerous colleges such as IIT Delhi, Delhi University, Ajay Kumar Garg Engineering College, JSS-Noida, JIIT Noida, IPEC, Jamia Milia Islamia, Bhartiya Vidyapeeth, Shobhit University and MIET.<br/> Endeavour'17 had been graced by several noteworthy guest talks. Some of them being by:<br/> Mr. Harkesh Kr Mittal (Adviser, Member Secretary, NSTED)B<br/> Mrs. Kanchan Agarwal (Co-Founder and CEO, Compare Munafa)<br/> Mr. Ramesh Dharmaji( CGM, Small Industries Development Bank of India)<br/> In the events, the students got to realise what it takes to be an entrepreneur. The winners took home prizes worth INR 3,00,000.<br/>"
  },
  {
    id: "endeavour_17",
    head: "Endeavour'18",
    img: ["endeavour_17/1.jpg", "endeavour_17/2.jpg", "endeavour_17/3.jpg"],
    content: "Endeavour'17 was the second Inter-College Techno-Entrepreneurial E-Summit of our college. Being initiated in 2015, the legacy was carried forward, with the intense efforts of KIET e-Cell. It was held for two days, 7th & 8th March, 2017, venue being the college campus itself. It comprised of numerous competitions, guest lectures from eminent entrepreneurs, technical and corporate events and host of other activities to enthral its participants. Being organized at inter-collegiate level, the E-summit brought forth before its audience- a battle of ideas, an explosion of creativity, an expanse of knowledge and above all, a platform for all to develop a sense of entrepreneurship.Endeavour'17 witnessed overwhelming response from not only KIET, but also numerous colleges such as IIT Delhi, Delhi University, Ajay Kumar Garg Engineering College, JSS-Noida, JIIT Noida, IPEC, Jamia Milia Islamia, Bhartiya Vidyapeeth, Shobhit University and MIET.<br/> Endeavour'17 had been graced by several noteworthy guest talks. Some of them being by:<br/> Mr. Harkesh Kr Mittal (Adviser, Member Secretary, NSTED)B<br/> Mrs. Kanchan Agarwal (Co-Founder and CEO, Compare Munafa)<br/> Mr. Ramesh Dharmaji( CGM, Small Industries Development Bank of India)<br/> In the events, the students got to realise what it takes to be an entrepreneur. The winners took home prizes worth INR 3,00,000.<br/>"
  },
];
function displayDesc(name){
  let target = document.querySelector(".initiative-desc-box");
  initiatives.forEach(element => {
    if(element.id == name){
      document.querySelector(".ini-desc-box .section-head h3").innerHTML = element.head;
      document.querySelector(".ini-desc-box  .ini-desc").innerHTML = element.content; 
      document.querySelector(".ini-desc-box .img1").setAttribute("src", "img/ecell_image/" + element.img[0]);
      document.querySelector(".ini-desc-box .img2").setAttribute("src", "img/ecell_image/" + element.img[1]);
      document.querySelector(".ini-desc-box .img3").setAttribute("src", "img/ecell_image/" + element.img[2]);
      document.querySelector(".ini-desc-box .img4").setAttribute("src", "img/ecell_image/" + element.img[3]);
    }
  });
  target.classList.remove("d-none");
}