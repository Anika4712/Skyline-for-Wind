let sky=
document.querySelector(".sky");
let intro=document.querySelector(".intro-container");
let constellationContainer =
document.querySelector(".constellation-container");
let bgMusic = document.getElementById("bgMusic");

let scenes=[
 {
   title:"Hey,Aneek.",
   text:"Click anywhere to begin."
 },
 { 
   title:"I really didn't know....",
   text:"what to get you since you live  soooo far away."
 },
 {
   title:"So...",
   text:"I made you a little piece of sky.",
   action:"startShootingStars"
 },
 {
   title:"Hopefully...",
   text:"You enjoy it and that it brightens your day,even if only a little :)  ."
 }
 ];
 
 let constellations = [
   [
"I don't know if I tell you this enough, but I'm really, really glad it's you.",
"That I got to know you,",
"that I got to witness all these little parts of you,",
"that somewhere between all our conversations and ordinary days,",
"you became someone I hold so dearly."
   ],
   [



  "Before we go any further...",

  "Can I tell you something?",

  "I don't think I ever expected to find someone whose little thoughts I'd be so interested in knowing.",

  "Someone whose stories I'd want to hear, even when they're about the most ordinary things.",

  "I think I've grown rather fond of the world inside your head...",

  "The things you wonder about, the things you get excited over, the way you look at things.",

  "There's always something more I'd like to know about you.",

  "And somehow, even after all this time, I still haven't run out of curiosity about you."



],
[
  "I don't think this sky exists because today is your birthday.",
"I think today simply gave me an excuse...",
" to tell you things I'd been noticing for much longer."
],
[
  "Some gifts are opened once.",
"I hope this one can be revisited...",
"whenever you need a quiet sky.",

"Perhaps that's why I chose a sky.",
"It felt unfair...",
"to describe someone who always seemed larger than descriptions."
  ],
  {
      scroll: true,
      lines:  [
    "I wish you could borrow my eyes for a little while.",

  "Not just to see how much I love you...",

  "But to see the person I get to love.",

  "Someone with a mind that never seems to run out of things to explore,",
  "someone who can be wonderfully silly,",
  "someone who feels things deeply,",
  "someone who is still figuring things out, just like the rest of us.",

  "I hope you never become so occupied with who you think you ought to be...",

  "that you forget there's already so much about who you are worth appreciating.",

  "I wish you could see that, too."
  
    ]
  },
    {
      scroll: true,
      lines:[
      "If this sky ever reminds you of tonight...",
"I think that's enough.",
"Some things don't need to last forever...",
"to stay with us.",
"No matter where life carries you...",
"I hope you never lose that quiet part of yourself...",
"the one that's still willing to wonder.",
"I don't wish for the world to become easier for you.",
"Only that...",
"you never stop finding peace within yourself...",
"even when the world forgets how.",
"If the wind must keep travelling...",
"then I hope every new horizon...",
"greets it with something worth wondering about."
      ]
      },
      [
        "Whatever tomorrow asks of you...",
"I hope you meet it as yourself.",
"Not a smaller version to make others comfortable.",
"Not a louder version to make yourself noticed.",
"Just... yourself.",
"I think that's always been more than enough."
        ],
        {
          scroll: true,
          lines:[
          "Whether our paths remain close...",
"or slowly become different skies...",
"I think I'll always hope for the same thing...",
"that you continue becoming someone who feels at home within himself.",
"May you always remain wonderfully...","Unfinished.",
"Still curious.",
"Still learning.",
"Still looking up.",
"And if you ever lose your way for a while...",
"I hope you remember...",
"even the wind eventually finds its own rhythm again."
          ]
          },
          [
            "Go wherever your heart finds meaning.",
"Become whoever feels most honest to you.",
"The sky has never asked the wind...",
"to be anything other than itself."
            ],
            [
              "It felt wrong to pretend I had better words than these.",
              " XD Do you remember?...",
"when I asked you for suggestions about a sky?",
"You helped build this one...",
"without knowing it had always been yours.",
"This is the closest i could come to giving someone a sky"
              ],
              
   

   

            
];
const birthdayScene = {
title: "Happy Birthday",
name: "Aneek",
message: [
"I don't think I have",
"one perfect wish for you.",

"Maybe...",

"I hope this life",
"brings you",
"more skies worth looking up at...",

"more quiet moments...",

"more reasons to wonder.",

"And I really really really loveee youu ♡"


]
};


 let currentScene=1;
 let isTyping=false;
 let shootingStarsStarted = false;
 let currentConstellation = 0;
 let constellation="null";
 let blockIndex = 0;
let currentBlock = " ";
let completedText = "";
let mode = "scene";
let waitingForConstellationClick = false;
let birthdayIndex = 0;
let completedBirthdayText = "";
 let stars = [];
 let guideStar = null;
 let birthdayContainer =
document.querySelector(".birthday-container");
for(let i = 0; i < 150; i++) {
let star=
document.createElement("div");
 star.classList.add("star");
 
 let randomX=Math.random()*100;
 let randomY= Math.random()*100;
 star.style.left=randomX+"%";
 star.style.top=randomY+ "%";
 star.dataset.originalX = randomX;
star.dataset.originalY = randomY;



let size = Math.random() * 4 + 2;
if (star === guideStar) {
    size = 10;
}
 star.style.width=size+"px";
 star.style.height=size+"px";
  
 let glow = size * 2;
star.style.boxShadow = "0 0 " + glow + "px white";
 star.style.opacity=Math.random()*0.7+0.3;
 
 
 let delay=Math.random()*2;
 star.style.animationDelay=delay+"s";
 let duration = Math.random() * 3 + 2;
star.style.animationDuration = duration + "s";
let numberLabel = document.createElement("div");
numberLabel.classList.add("star-label");
numberLabel.textContent = i;

// star.appendChild(numberLabel);
 
sky.appendChild(star);
stars.push(star);
}
// 🌌 Milky Way
let clusters = [];
let clusterCount=
Math.floor(Math.random() * 3) + 3;
  for (let c = 0; c < clusterCount; c++) {
let cluster = {
  left:Math.random() * window.innerWidth,
  top:Math.random() * window.innerHeight
};
clusters.push(cluster);
for (let s = 0; s < 30; s++) {
let milkyStar = document.createElement("div");
milkyStar.classList.add("milky-star");

let offsetX = Math.random() * 160 - 80;
let offsetY = Math.random() * 160 - 80;
milkyStar.style.left = cluster.left + offsetX + "px";
milkyStar.style.top = cluster.top + offsetY + "px";
sky.appendChild(milkyStar);
}
}


 createHeroStar();
 setInterval(function () {
    console.log("alive");
}, 1000);
function createHeroStar() {
let heroStar = document.createElement("div");
heroStar.classList.add("star");
let heroX = 50;
let heroY = 50;

    heroStar.style.left = heroX + "%";
    heroStar.style.top = heroY + "%";
    guideStar = heroStar;
    let heroStarLayer =
document.querySelector(".hero-star-layer");

heroStarLayer.appendChild(heroStar);
    
    stars.push(heroStar);
}

function continueStory(){

}

 function playGuideStar(){

    guideStar.classList.add("guide-star");
    
  

    setTimeout(function(){

        guideStar.classList.remove("guide-star");

        setTimeout(function(){

            displayConstellation();

        },800);

    },2200);

}
function skyHint(){

    intro.style.opacity = "0";

    setTimeout(function(){

        if(currentConstellation == 0){
            playGuideStar();
        }else{
            displayConstellation();
        }

    },2000);

}

function displayScene(){
 
 if   (currentScene < scenes.length) {
      let scene =scenes[currentScene];
    intro.innerHTML = `
    <h1>${scene.title}</h1>
    <p></p>
    `;
    let paragraph=intro.querySelector("p");
    let i=1;
    isTyping=true;
    let typing=setInterval(function()
    {
    paragraph.textContent=scene.text.slice(0,i);
    i++;
    if (i>scene.text.length){
      
      clearInterval(typing);
      isTyping=false;
          currentScene = currentScene + 1;
          if (currentScene >= scenes.length) {
            
    mode = "constellation";
}
      if (scene.action) {

    switch (scene.action) {

        case "startShootingStars":
           if (!shootingStarsStarted) {
        shootingStarsStarted = true;
            startShootingStars();
           }
            break;

    }

}
    }
    },50);



    intro.style.opacity = "1";
} 
}
function displayConstellation(){
  
  intro.style.opacity = "0";
  

  constellation =
constellations[currentConstellation];
if (constellation.scroll) {

    constellationContainer.classList.add("scroll-mode");

    constellation = constellation.lines;

}
else{

    constellationContainer.classList.remove("scroll-mode");

}
blockIndex = 0;
currentBlock = constellation[blockIndex];
constellationContainer.innerHTML = `
<p class="constellation-text"></p>
`;
if (Array.isArray(constellation)) {
  completedText = "";
  blockIndex = 0;
    currentBlock = constellation[blockIndex];
setTimeout(function () {

    typeBlock();

}, 1200);
return;

}

currentBlock = constellation;


let paragraph =
constellationContainer.querySelector("p");
let i = 1;
isTyping = true;
let typing = setInterval(function(){
  paragraph.textContent =
paragraph.textContent =
currentBlock.slice(0, i);
i++;
if (i > currentBlock.length) {

    clearInterval(typing);
    isTyping = false;
    waitingForConstellationClick = true;

    

    

}




},80);
constellationContainer.style.opacity = "1";

}
function displayBirthday() {
  birthdayIndex = 0;
completedBirthdayText = "";
intro.style.opacity = "0";
    constellationContainer.style.opacity = "0";
    birthdayContainer.innerHTML = `
<h1>${birthdayScene.title}</h1>
<h2>${birthdayScene.name}</h2>
<p></p>
`;
birthdayContainer.style.opacity = "1";
setTimeout(function(){

    typeBirthday();

},1800);
}
function typeBirthday(){
  console.log("Typing line:", birthdayIndex);
let paragraph =
birthdayContainer.querySelector("p");
let line =
birthdayScene.message[birthdayIndex];
let i = 1;

isTyping = true;

let typing = setInterval(function(){

    paragraph.textContent =
completedBirthdayText + line.slice(0,i);

    i++;
    if(i > line.length){

    clearInterval(typing);

    if(birthdayIndex < birthdayScene.message.length - 1){
      completedBirthdayText += line + "\n";

        birthdayIndex++;

        setTimeout(function(){

            typeBirthday();

        },1200);

    }

    else{

        isTyping = false;
        console.log("Birthday finished");
console.log(isTyping);
mode = "universe";

        // 🎸 Guitar starts here later

    }

}
},80);
}
function typeBlock() {
 constellationContainer .style.opacity = "1";
  
let paragraph =
constellationContainer.querySelector("p");

let i = 1;
let lineText = currentBlock.text ?? currentBlock;
isTyping = true;
let typing = setInterval(function () {
paragraph.textContent =
completedText + lineText.slice(0, i);

i++;
if (i > lineText.length) {
clearInterval(typing);
if (
    constellationContainer.scrollHeight >
    constellationContainer.clientHeight
) {
    constellationContainer.scrollTop += 30;
}

if (blockIndex < constellation.length - 1) {
let waitTime = currentBlock.pause ?? 1200;

completedText += lineText + "\n";
    blockIndex++;
    currentBlock = constellation[blockIndex];
    setTimeout(function(){

    typeBlock();

},waitTime);

}
else {

    isTyping = false;
    waitingForConstellationClick = true;

}
}
}, 80);

}

function transitionToNextConstellation() {

    intro.style.opacity = "0";

    setTimeout(function () {

        // 🌙 Going to Constellation 2
        if (currentConstellation == 0) {

            let moon = document.querySelector(".moon");

            moon.classList.add("moon-glow");

            setTimeout(function () {

                moon.classList.remove("moon-glow");

                setTimeout(function () {

                    currentConstellation++;

                    displayConstellation();

                }, 500);

            }, 2200);

        }

        // 🌠 Going to Constellation 3
        else if (currentConstellation == 1) {

            for (let i = 0; i < 4; i++) {

                setTimeout(function () {

                    createShootingStar();

                }, i * 350);

            }

            setTimeout(function () {

                currentConstellation++;

                displayConstellation();

            }, 2500);

        }

        else {

            currentConstellation++;

            if (currentConstellation < constellations.length) {

                displayConstellation();

            } else {

                mode = "birthday";

            }

        }

    }, 2000);

}
document.body.addEventListener("click",function (){
  console.log("Mode:", mode);
console.log("Typing:", isTyping);
  if(isTyping){
    return;
  }
  if (mode === "scene") {
    intro.style.opacity = "0";
}
else if (mode === "constellation") {
    constellationContainer.style.opacity = "0";
}


  setTimeout(function() {
    
    if (mode === "scene") {

    displayScene();

}
else if (mode === "constellation") {

    if (waitingForConstellationClick) {

        waitingForConstellationClick = false;

        transitionToNextConstellation();

    } else {

        skyHint();

    }
    



}
else if (mode === "birthday") {

    displayBirthday();

}

  },2000);

  });
  function skipToBirthday(){

    mode = "birthday";

    displayBirthday();

}
  function createShootingStar(){
     






    let shootingStar = document.createElement("div");
    let lifetime = Math.random() * 0.5 + 0.8;
    shootingStar.style.animationDuration = lifetime + "s";
    let length = Math.random() * 30 + 60;
    shootingStar.style.width = length + "px";

    shootingStar.classList.add("shooting-star");

  let randomX = Math.random() * 30 + 70;
let randomY = Math.random() * 20;

shootingStar.style.left = randomX + "%";
shootingStar.style.top = randomY + "%";


    sky.appendChild(shootingStar);
    setTimeout(function () {
    shootingStar.remove();
}, 1000);

}
 function startShootingStars(){

   
let chance = Math.random();
let starCount;
if (chance < 0.70) {
        starCount = 1;
    }
    else if (chance < 0.95) {
        starCount = 2;
    }
    else {
        starCount = 3;
    }
    for (let i = 0; i < starCount; i++) {
      setTimeout(function () {

        createShootingStar();

    }, i * 100);
    }
setTimeout(function () {

    startShootingStars();

}, Math.random() * 4000 + 2000);

}

document.addEventListener("touchmove", function(event) {
  event.preventDefault();
  let fingerX =
(event.touches[0].clientX / window.innerWidth) * 100;
let fingerY =
(event.touches[0].clientY / window.innerHeight) * 100;

    for (let i = 0; i < stars.length; i++) {

        let currentStar = stars[i];
        let originalX = Number(currentStar.dataset.originalX);
        let originalY = Number(currentStar.dataset.originalY);

        let differenceX = fingerX - originalX;
        let differenceY = fingerY - originalY;
let moveX = differenceX * 0.04;
let moveY = differenceY * 0.04;
currentStar.style.left = (originalX + moveX) + "%";
        currentStar.style.top = (originalY + moveY) + "%";


}

});


