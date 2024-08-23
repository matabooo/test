// This is a JavaScript file
let count = 0;
let countfly = document.getElementById("countfly");
let flys = [];
const fly = new Audio('audio/fly.mp3');
const can = new Audio('audio/can.mp3');
const banana = new Audio('audio/banana.mp3');

window.onload = function() {
    start();

//変数
console.log(sessionStorage.getItem('zi'));
var max = 0;
var count = Number(sessionStorage.getItem('zi'));
sessionStorage.setItem('time', count); 
var msg = document.getElementById('msg');

var timerID = setInterval( function(){

if(count == max){
clearInterval(timerID);
sessionStorage.setItem('score', countfly.textContent);
console.log(`点数: ${countfly.textContent}`);
window.location = "finish.html"
}else{
msg.innerHTML = count;
count--;
}

}, 1000);

}


function start() {
    flys.push(document.getElementById("image_fly1"));
    flys.push(document.getElementById("image_fly2"));
    flys.push(document.getElementById("image_fly3"));
    flys.push(document.getElementById("image_fly4"));
    flys.push(document.getElementById("image_fly5"));
    flys.push(document.getElementById("image_fly6"));
    flys.push(document.getElementById("image_fly7"));
    flys.push(document.getElementById("image_fly8"));
    flys.push(document.getElementById("image_fly9"));
    
    flys.forEach(mogu => {
        onfly(mogu);
        movefly(mogu);
    });
}

function movefly(mogu) {
    setTimeout(() => visiblefly(mogu), Math.random() * 4 * 1000);
}

function onfly(mogu) {
    mogu.onclick = () => {
        const fileName = mogu.src.split('/').pop();
        if (fileName === "fly.png") {
            var fly = new Audio('audio/fly.mp3');
            fly.play();
            mogu.src = "img/fly2.png";
            count ++;
            countfly = document.getElementById("countfly");
            countfly.innerHTML = count;
        }else if(fileName === "superfly.png") {
            var fly = new Audio('audio/fly.mp3');
            fly.play();
            mogu.src = "img/superfly2.png";
            count = count + 2;
            countfly = document.getElementById("countfly");
            countfly.innerHTML = count;
        }else if(fileName === "can.png") {
            var can = new Audio('audio/can.mp3');
            can.play();
            mogu.src = "img/can2.png";
            count = count - 1;
            countfly = document.getElementById("countfly");
            countfly.innerHTML = count;
        }else if(fileName === "banana.png") {
            var banana = new Audio('audio/banana.mp3');
            banana.play();
            mogu.src = "img/banana2.png";
            count = count - 1;
            countfly = document.getElementById("countfly");
            countfly.innerHTML = count;
    };
}
}

function hiddenfly(mogu) {
    mogu.src = "img/to.png";
    setTimeout(() => visiblefly(mogu),  Math.random() * 3 * 1000);
}

function visiblefly(mogu) {
    var ran = Math.floor(Math.random() * 11);
    console.log('乱数' + ran);
     if(ran >= 3){
        mogu.src = "img/fly.png";
        setTimeout(() => hiddenfly(mogu), (Math.floor( Math.random() * 2.5 ) + 0.7 ) * 1000);
     }else if(ran >= 2){
        mogu.src = "img/superfly.png";
        setTimeout(() => hiddenfly(mogu), (Math.floor( Math.random() * 2.5 ) + 0.7 ) * 1000); 
    }else{
        if(ran == 1){
        mogu.src = "img/can.png";
        setTimeout(() => hiddenfly(mogu), (Math.floor( Math.random() * 2.5 ) + 0.7 ) * 1000);
        }else{
        mogu.src = "img/banana.png";
        setTimeout(() => hiddenfly(mogu), (Math.floor( Math.random() * 2.5 ) + 0.7 ) * 1000);
        }
    }
}