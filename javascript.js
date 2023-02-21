

var d1 = Math.random();
d1 = d1*6;
d1 = Math.floor(d1)+1;



var d2 = Math.random();
d2 = d2*6;
d2 = Math.floor(d2)+1;

if(d1===1){ document.querySelector("img.img1").setAttribute("src", "img/dice1.png"); }
else{if(d1===2){ document.querySelector("img.img1").setAttribute("src", "img/dice2.png"); }
else{if(d1===3){ document.querySelector("img.img1").setAttribute("src", "img/dice3.png"); }
else{if(d1===4){ document.querySelector("img.img1").setAttribute("src", "img/dice4.png"); }
else{if(d1===5){ document.querySelector("img.img1").setAttribute("src", "img/dice5.png"); }
else{if(d1===6){ document.querySelector("img.img1").setAttribute("src", "img/dice6.png"); }
}}}}}

if(d2===1){ document.querySelector("img.img2").setAttribute("src", "img/dice1.png"); }
else{if(d2===2){ document.querySelector("img.img2").setAttribute("src", "img/dice2.png"); }
else{if(d2===3){ document.querySelector("img.img2").setAttribute("src", "img/dice3.png"); }
else{if(d2===4){ document.querySelector("img.img2").setAttribute("src", "img/dice4.png"); }
else{if(d2===5){ document.querySelector("img.img2").setAttribute("src", "img/dice5.png"); }
else{if(d2===6){ document.querySelector("img.img2").setAttribute("src", "img/dice6.png"); }
}}}}}


if(d1>d2){document.querySelector("h1").innerHTML="🚩 Player 1 won!";}
else{if(d1===d2){document.querySelector("h1").innerHTML="🌜 DRAW! 🌛";}
    else{document.querySelector("h1").innerHTML="Player 2 won! 🚩";}};
