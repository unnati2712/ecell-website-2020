// jshint esversion: 6
window.addEventListener("load", function(){
  window.setTimeout(() => document.querySelector(".loader").classList.add("hide-loader"),1000);
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
    id: "endeavour_20",
    head: "Endeavour'20",
    img: ["endeavour_17/1.jpg", "endeavour_17/2.jpg", "endeavour_17/3.jpg", "endeavour_17/4.jpg"],
    content: "Endeavour'20 was the sixth successfully organised entrepreneurship summit of our college. Ever since its initiation in 2015, Endeavour has always been a unique platform for academicians, new-age entrepreneurs, eminent business personalities, venture capitalists and the students to gather at one place and share their entrepreneurial endeavours and experiences, and to pledge to take entrepreneurship to greater scales. Endeavour'20 witnessed a heartwarming response not only from Ghaziabad but from colleges all around the country, in which more than 500 teams took part in various competitive events. E-Summit'20 was not just a conclave of innovative minds and a degree of validation, but it turned to be a place where ideas become the greatest revelations."
  },
  {
    id: "endeavour_19",
    head: "Endeavour'19",
    img: ["endeavour'19/1.jpg", "endeavour'19/2.jpg", "endeavour'19/3.jpg" ,"endeavour'19/4.jpg"],
    content: "Endeavour'19</strong></big> was the fifth inter-college Techno-Entrepreneurial Summit of our college. Initiated in 2015, our rich legacy was carried forward, with the intense efforts of KIET e-Cell. It was organised over the course of two days, 23rd & 24th Feb, 2019, venue being the college campus itself. It comprised of numerous competitions, guest lectures from eminent entrepreneurs, technical and corporate events and host of other activities to enrich its participants.Organized at inter-college level, the E-summit brought forth before its audience, a battle of ideas, an explosion of creativity, an expanse of knowledge and above all, a platform for all to develop a sense of entrepreneurship. Endeavour'19 witnessed overwhelming response from not only KIET, but also numerous colleges such as IIT Delhi, Delhi University, Ajay Kumar Garg Engineering College, JSS-Noida, JIIT Noida, IPEC, Jamia Milia Islamia, Bhartiya Vidyapeeth, Shobhit University and MIET.</br>In the events, the students got an opportunity to realise what it takes to be a successful entrepreneur. The winners took home prizes worth <b>INR 4,00,000.</b>"
  },
  {
    id: "endeavour_18",
    head: "Endeavour'18",
    img: ["endeavour_18/1.jpg", "endeavour_18/2.jpg", "endeavour_18/3.jpg", "endeavour_18/4.jpg"],
    content: "<big><strong>Endeavour'18</strong></big> was the fourth inter-college Techno-Entrepreneurial Summit of our college. Initiated in 2015, our rich legacy was carried forward, with the intense efforts of KIET e-Cell. It was organised over the course of two days, 17th & 18th March, 2018, venue being the college campus itself. It comprised of numerous competitions, guest lectures from eminent entrepreneurs, technical and corporate events and host of other activities to enrich its participants.Organized at inter-college level, the E-summit brought forth before its audience, a battle of ideas, an explosion of creativity, an expanse of knowledge and above all, a platform for all to develop a sense of entrepreneurship. Endeavour'18 witnessed overwhelming response from not only KIET, but also numerous colleges such as IIT Delhi, Delhi University, Ajay Kumar Garg Engineering College, JSS-Noida, JIIT Noida, IPEC, Jamia Milia Islamia, Bhartiya Vidyapeeth, Shobhit University and MIET.</br> Endeavour'18 had been graced by the presence of some noteworthy guest of honour, some of them being:-</br><b>Shri Atul Garg (Minister of State,Government of Uttar Pradesh)</b></br> <b>Mr. Suresh Mansharamani (Co-Founder, Tajurba Business Network Pvt Ltd)</b></br> <b>Mr. Francisco Santolo, (Founder & Global CEO, Scalabl)</b></br> <b>Mr. Gulraj S. Shahpuri (Leadership Coach)</b></br> <b>Mr. Rahul Kaushik (The Melting Words)</b></br> <b>Mr.C.R Chaudhary ( Hon'ble member, The Lok Sabha)</b></br> <b>Mr. Saarthak Bakshi (CEO, International Fertility Centre)</b></br> <b>Mr. Kulpan Peshin (VP, IndiaMART)</b></br> In the events, the students got an opportunity to realise what it takes to be a successful entrepreneur. The winners took home prizes worth <b>INR 3,00,000.</b>"
  },
  {
    id: "endeavour_17",
    head: "Endeavour'17",
    img: ["endeavour_17/1.jpg", "endeavour_17/2.jpg", "endeavour_17/3.jpg", "endeavour_17/4.jpg"],
    content: "Endeavour'17 was the second Inter-College Techno-Entrepreneurial E-Summit of our college. Being initiated in 2015, the legacy was carried forward, with the intense efforts of KIET e-Cell. It was held for two days, 7th & 8th March, 2017, venue being the college campus itself. It comprised of numerous competitions, guest lectures from eminent entrepreneurs, technical and corporate events and host of other activities to enthral its participants. Being organized at inter-collegiate level, the E-summit brought forth before its audience- a battle of ideas, an explosion of creativity, an expanse of knowledge and above all, a platform for all to develop a sense of entrepreneurship.Endeavour'17 witnessed overwhelming response from not only KIET, but also numerous colleges such as IIT Delhi, Delhi University, Ajay Kumar Garg Engineering College, JSS-Noida, JIIT Noida, IPEC, Jamia Milia Islamia, Bhartiya Vidyapeeth, Shobhit University and MIET.<br/> Endeavour'17 had been graced by several noteworthy guest talks. Some of them being by:<br/> Mr. Harkesh Kr Mittal (Adviser, Member Secretary, NSTED)B<br/> Mrs. Kanchan Agarwal (Co-Founder and CEO, Compare Munafa)<br/> Mr. Ramesh Dharmaji( CGM, Small Industries Development Bank of India)<br/> In the events, the students got to realise what it takes to be an entrepreneur. The winners took home prizes worth INR 3,00,000.<br/>"
  },
  {
    id: "endeavour_16",
    head: "Endeavour'16",
    img: ["endeavour'16/1.jpg", "endeavour'16/2.jpg", "endeavour'16/3.jpg", "endeavour'16/4.jpg", "endeavour'16/5.jpg","endeavour'16/6.jpg"],
    content: "<big><strong>Endeavour'16</big></strong> was the second Inter-College Techno-Entrepreneurial E-Summit of our college. Being initiated in 2015, the legacy was carried forward, with the intense efforts of KIET e-Cell. It was held for two days, 26th & 27th February, 2016, venue being the college campus itself. It comprised of numerous competitions, guest lectures from eminent entrepreneurs, technical and corporate events and host of other activities to enthral its participants. Being organized at inter-collegiate level, the E-summit brought forth before its audience- a battle of ideas, an explosion of creativity, an expanse of knowledge and above all, a platform for all to develop a sense of entrepreneurship.Endeavour'16 witnessed overwhelming response from not only KIET, but also numerous colleges such as IIT Delhi, Delhi University, Ajay Kumar Garg Engineering College, JSS-Noida, JIIT Noida, IPEC, Jamia Milia Islamia, Bhartiya Vidyapeeth, Shobhit University and MIET.</br> Endeavour'16 had been graced by several noteworthy guest talks. Some of them being by: <br/> <b>Mr. R.K. Panigrahi</b> (Director MSME-DI)</br> <b>Mr. Vatsal Asthana</b> (Founder and CEO, Costura.com)</br> <b>Mr. Arpit Gupta</b> (CEO, T.R.E.E.S. Pvt. Ltd.) (Founder and CEO, Pixooz, LED Cubes) </br> In the events, the students got to realise what it takes to be an entrepreneur. The winners took home prizes worth <b>INR 5,00,000</b>."
  },
  {
    id: "endeavour_15",
    head: "Endeavour'15",
    img: ["endeavour'15/1.jpg", "endeavour'15/2.jpg", "endeavour'15/3.jpg", "endeavour'15/4.jpg"],
    content: "The founding team of the <big><strong>e-Cell</strong></big> has represented our college at IIT Guwahati's Techniche 2014. With all the exposure that they got, they had learned a great deal from their experiences.With a resolve to bring the entrepreneurship culture to our college & others, the idea of organizing an inter-college E-Summit, took its roots. After months of hard work, the first season of the E-Summit - Endeavour was hosted on 13 & 14 March, 2015. It witnessed a considerable participation of approximate 5000 people, from not only KIET, but several colleges of Delhi-NCR as well. Endeavour'15 had events in two major modules - Technical and Entrepreneurial. Endeavour'15 saw a glorious list of speakers including: </br> <b>Mr. Sarvesh Agrawal</b> (CEO and Founder, Internshala)</br> <b>Mr. Deepak Goel, Founder</b> (iMET Global)</br> <b>Mr. Anuj Saxena</b> (Founder Director, Bcube IT Services Pvt. Ltd.)</br> <b>Mr. Jaitendra Kumar</b> (Senior Secretary, PHD Chamber of Commerce & Industries)</br> <b>Mr. Raj Nidhi Sharma</b> (CEO, KM Group) <br/> It also hosted a Start Up Expo, showcasing several start-ups and budding ventures."
  },
  {
    id: "hult_19",
    head: "Hult Prize",
    img: ["hult2020/1.jpg", "hult2020/2.jpg", "hult2020/3.jpg" , "hult2020/4.jpg"],
    content: "We at team e-Cell feel immense pleasure in announcing that we successfully organised the first round of <strong>international event Hult prize 2020 </strong>in our institute under the guidance of GM Of TBI <strong>Mr.Satendra Kumar</strong>.<br><br>The event was graced by the presence of very talented personalities -<br><strong>Ashutosh Kumar (Founder: Archipidia),<br> Ashish Kumar (MOC Atal Innovation Mission) <br> Upainder Agnihotri(Founder: Offpich Technologies)</strong><br> who performed their duties as judges very well. The participating teams were judged on the basis of their innovation and presenting skills within a specified interval of time.<br><brAll of the participants represented themselves actively giving tough competition to each other and making it difficult for the judges to select the one out of them. GREEN WARRIORS performed out to be the best and had been selected for the next round (regional level)of the Hult Prize."
  },
  {
    id: "nec",
    head: "NEC",
    img: ["neciitbombay/1.jpg", "neciitbombay/2.jpg", "neciitbombay/3.jpg"],
    content: "kietecell NEC is IIT Bombay's annual venture, which aims at fostering an entrepreneurial spirit and ensure holistic development of the scene throughout the nation.<br> Advance track of the National Entrepreneurship Challenge is meant to take entrepreneurial ventures to unimaginable heights, and hence, create an ecosystem that can be beneficial for like-minded individuals. By conducting various events, workshops, and interactive sessions, and also by performing well on various national level tasks, team e-Cell, KIET Ghaziabad was able to feed the entrepreneurial hunger in our institution effectively, and hence ace the Advance leaderboard of the National Entrepreneurship Challenge<br><br> Under the able mentorship of Mr Satendra Kumar, Dean of Entrepreneurship and Innovation, team e-Cell, KIET Ghaziabad has been able to turn 6 months worth of hard work into a fruitful result. The team has secured All India Rank 2nd in IIT Bombay's National Entrepreneurship Challenge, 2020, which saw them competing with over 700 teams.<br> The team comprises of 10 illustrious students:<br> 1.	Harsh Mishra<br> 2.	Nipun  Kumar Drayan<br> 3.	Priya Mishra<br> 4.	Harshit Saxena<br> 5.	Maulik Varshney<br> 6.	Bhavya Gulati<br> 7.	Kinshuk Agarwal<br> 8.	Siddhant Gupta<br> 9.	Ritik Mehta<br> 10.	Shivangi Pandey<br>"
  
  },
  {
    id: "fw",
    head: "Facilitation Workshop",
    img: ["facilitation/1.jpg", "facilitation/2.jpg", "facilitation/3.jpg","facilitation/4.jpg","facilitation/5.jpg"],
    content: "<strong> Entrepreneurship Development Institute of India, Ahmedabad</strong> organized a <strong>ONE day</strong> Facilitation workshop on <strong>16 November, 2016</strong> at TBI (Technology Business Incubator),K.I.E.T. Group of Institutions, Ghaziabad and members of KIET E-Cell worked tirelessly to make this workshop successful.</br></br> Dr. Usha Dixit, Scientist  DST Govt. of India, was the main Chief Guest of this workshop. Other important members of this workshop were Sri S.B. Sareen, Sri Prakash Solanki, Dr. S.P. Mishra, Dr. J. Girish, Sri Satya Ranjan Acharya, Sri Satendra Kumar and Dr. Manoj Goel. There were also many representatives of various Engineering Colleges and Universities located in North India mainly Chandigarh, Haryana, Delhi, Punjab, Uttarakhand and Uttar Pradesh. </br></br> This workshop has been formulated and designed by National Project Director Of DST-Nimat, Shri S.B. Sareen who has conceived this idea of organizing regional level workshop for North India at TBI K.I.E.T. as TBI K.I.E.T. is a leading institute in the area of innovation, incubation and entrepreneurship since 2002.</br></br> The main objective and purpose of organizing this workshop is to facilitate all the implementing agencies for documenting the program activities as well as ensuring that we achieve desired results. The workshop mainly  focused on developing skills in successfully initiating, expanding and diversifying a business enterprise in new, up-coming areas and on creating entrepreneurial managers for corporate sector. There was also an open question answer session in which many member of the workshop came up with very useful information about entrepreneurship and related issues."
  },
  {
    id: "eac_14",
    head: "EAC 14",
    img: ["bpharma_eac/1.jpg", "bpharma_eac/2.jpg", "bpharma_eac/3.jpg"],
    content: "EAC (Entrepreneurship Awareness Camp) is an effort to stimulate the spirit of entrepreneurship and encourage students to embrace the idea of starting their own venture. It consists of a series of guest lectures by distinguished local entrepreneurs.</br></br> Working under the aegis of CSE Dept of the college & TBI-KIET (Technology Business Incubator), the awareness workshop was conducted for the first time by KIET e-Cell from 30 April to 2 May, 2014, aimed at spreading awareness about entrepreneurship among the students and inspiring their young minds. </br></br> 2016 bears witness of this legacy. By September, three different camps had been organised within the KIET premises in association with EN Dept, KSOP (KIET School of Pharmacy) and IT Dept individually.</br></br> EAC follows a specific format. The program begins with a motivational presentation about entrepreneurship, presented by the team. The presiding dignitaries then address the students on the occasion which is followed by lectures by young entrepreneurs who share their experiences. These lectures are interactive sessions with the students and spread over duration of three days. The delegates share their experiences with the students and give valuable insight into the steps involved in evolving one's idea into pragmatic solutions. The certificates that the students receive become a testimony to the experience that they have earned in the Camp."
  },
  {
    id: "eac_17",
    head: "EAC 17",
    img: ["endeavour_17/1.jpg", "endeavour_17/2.jpg", "endeavour_17/3.jpg"],
    content: "EAC (Entrepreneurship Awareness Camp) is an effort to stimulate the spirit of entrepreneurship and encourage students to embrace the idea of starting their own venture. It consists of a series of guest lectures by distinguished local entrepreneurs.</br></br> Working under the aegis of TBI-KIET (Technology Business Incubator), the awareness workshop was conducted for the first time by KIET e-Cell from 30 April to 2 May, 2014, aimed at spreading awareness about entrepreneurship among the students and inspiring their young minds. </br></br>2017 bears witness of this legacy.In this year, three different camps had been organised within the KIET premises in association with MCA Dept (1st year), MCA Dept (2nd year) and CE Dept individually.Since 2014, nearly 12 awareness camps had been organised in various departments of KIET.</br></br> EAC follows a specific format. The program begins with a motivational presentation about entrepreneurship, presented by the team. The presiding dignitaries then address the students on the occasion which is followed by lectures by young entrepreneurs who share their experiences. These lectures are interactive sessions with the students and spread over duration of three days. The delegates share their experiences with the students and give valuable insight into the steps involved in evolving one's idea into pragmatic solutions. The certificates that the students receive become a testimony to the experience that they have earned in the Camp."
  },
  {
    id: "igames",
    head: "Innompic Games",
    img: ["innompic19/1.jpg", "innompic19/2.jpg", "innompic19/3.jpg","innompic19/4.jpg","innompic19/6.jpg"],
    content: "We team<strong> KIET e-Cell </strong>feel prerogative to inform you that we had successfully hosted <strong>3rd World Innompic Games</strong> known for its entrepreneurial sports at KIET Group of Institutions, Ghaziabad. It was a four-day event, organised from <strong>27 November 2019 to 30 November 2019</strong> in which teams from different countries participated in different activities held on different days.<br><br> The event started with the Inauguration program in which our Director sir (Col) A Garg, GM TBI Mr Satendra Kumar and also with the founder of Innompic Games, Mr Vadim Kotelnikov and many other Dignitaries, enlightened the lamp and took the blessing from the goddess Saraswati. Later on, an introduction program was held in which the teams gave their introduction impressively, later on, some fun activities were held, by the help of which best actor and actress was chosen from each team.<br><br>The next day, the flagship event of Innompic Games was held named as <strong>INNOBALL</strong> which is especially famous for systematic thinking, in which the teams were supposed to pitch their startup Idea and the other teams have to mention the challenges that the startup will be facing. Before the finals, a photoshoot session was held which was carried on by Musical-inn, in which the selected candidates from different teams performed on <strong>\"Startup Romeo and Juliet\"</strong> which was based on innovation jokes and entrepreneurial creativity. Then the finals were held for different events. Finally, the long wait was over and felicitation was done, in which the Russia Moscow team won most of the awards and the torch of the legacy for next Innompic Games was given to Financial University, Russia."
  },


];
function displayDesc(name){
  let target = document.querySelector(".initiative-desc-box");
  initiatives.forEach(element => {
    if(element.id === name){
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