let flag=1;
let cos_flag=1;
let up=0;
let left=0;
let right=0;
let down=0;
let follow=0;
let avoid=0;

window.onload = function () {
	setInterval('Move1()',20);
	setInterval('Move2()',20);
	setInterval('Move3()',20);
	setInterval('Move4()',20);
}

function Move1(){
	var moving = document.getElementById("move1");
	let movt=parseInt(moving.style.top || getComputedStyle(moving)['top'], 10);
	let movr=parseInt(moving.style.right || getComputedStyle(moving)['right'], 10);
	if (movt>400 && movr==1000)
		movt-=3;
	else if (movt<590 && movr>810) {
		movt+=3;
		movr-=3;
	}
	else if (movt > 400){
		movt-=3;
	}
	else {
		movt=590;
		movr=1000;
	}
	moving.style.top=movt+"px";
	moving.style.right=movr+"px";
}

function Move2(){
	var moving=document.getElementById("move2");
	let movt=parseInt(moving.style.top || getComputedStyle(moving)['top'], 10);
	let movr=parseInt(moving.style.right || getComputedStyle(moving)['right'], 10);
	if (flag==1){
		if (movt>670 && movr==1000)
			movt-=3;
		else if (movt<860 && movr>810) {
			movt+=3;
			movr-=3;
		}
		else if (movt > 670)
			movt-=3;
		else flag=0;
	}
	else if (flag==0) {
		if (movt < 860 && movr == 811)
			movt += 3;
		else if (movr < 1000) {
			movt -= 3;
			movr += 3;
		}
		else if (movt < 860 && movr == 1000)
			movt += 3;
		else flag=1;
	}
	moving.style.top=movt+"px";
	moving.style.right=movr+"px";
}

function Move3(){
	var moving = document.getElementById("move3");
	let movt=parseInt(moving.style.top || getComputedStyle(moving)['top'], 10);
	let movr=parseInt(moving.style.right || getComputedStyle(moving)['right'], 10);
	if (movt < 1130){
		movt += 3;
		movr = 1000 + 20*Math.cos(movt*0.07);
	}
	else{
		movt = 930;
		movr = 1000;
	}
	moving.style.top=movt+"px";
	moving.style.right=movr+"px";
}

function Move4(){
	var moving = document.getElementById("move4");
	let movt=parseInt(moving.style.top || getComputedStyle(moving)['top'], 10);
	let movr=parseInt(moving.style.right || getComputedStyle(moving)['right'], 10);
	if (cos_flag==1) {
		if (movt < 1400) {
			movt += 3;
			movr = 1000 + 20 * Math.cos(movt * 0.07);
		}
		else cos_flag = 0;
	}
	else if (cos_flag==0) {
		if (movt > 1200) {
			movt -= 3;
			movr = 1000 - 20 * Math.cos(movt * 0.07);
		}
		else cos_flag = 1;
		}
	moving.style.top=movt+"px";
	moving.style.right=movr+"px";
}

function MoveUp(){
	var moving=document.getElementById("move5");
	let movt=parseInt(moving.style.top || getComputedStyle(moving)['top'], 10);
	if (up==1) {
		movt-=1;
		moving.style.top=movt+"px";
	}
	setTimeout('MoveUp()',10);
}

function MoveDown(){
	var moving=document.getElementById("move5");
	let movt=parseInt(moving.style.top || getComputedStyle(moving)['top'], 10);
	if (down==1) {
		movt+=1;
		moving.style.top=movt+"px";
	}
	setTimeout('MoveDown()',10);
}

function MoveLeft(){
	var moving=document.getElementById("move5");
	let movl=parseInt(moving.style.left || getComputedStyle(moving)['left'], 10);
	if (left==1) {
		movl-=1;
		moving.style.left=movl+"px";
	}
	setTimeout('MoveLeft()',10);
}

function MoveRight(){
	var moving=document.getElementById("move5");
	let movl=parseInt(moving.style.left || getComputedStyle(moving)['left'], 10);
	if (right==1) {
		movl+=1;
		moving.style.left=movl+"px";
	}
	setTimeout('MoveRight()',10);
}

function Stop(){
	var moving=document.getElementById("move5");
	moving.style.left="600px";
	moving.style.top="1590px";
}

document.onkeydown = function() {
	if (event.code=="ArrowRight"){
		down=0; up=0; left=0; right=1; MoveRight();
	}
	else if (event.code=="ArrowLeft"){
		down=0; up=0; left=1; right=0; MoveLeft();
	}
	else if (event.code=="ArrowUp"){
		up=1; down=0; left=0; right=0; MoveUp();
	}
	else if (event.code=="ArrowDown"){
		down=1; up=0; left=0; right=0; MoveDown();
	}
	else if (event.code=="Enter"){
		down=0; up=0; left=0; right=0; Stop();
	}
}

function Follow(){
		if (follow==1) {
			var moving=document.getElementById("move6");
			let movl=parseInt(moving.style.left || getComputedStyle(moving)['left'], 10);
			let movt=parseInt(moving.style.top || getComputedStyle(moving)['top'], 10);
			if(movl<event.pageX+20) {
				movl=movl+10;
			}
			if(movl>event.pageX-20) {
				movl=movl-10;
			}
			if(movt<event.pageY+20) {
				movt=movt+10;
			}
			if(movt>event.pageY-20) {
				movt=movt-10;
			}
			moving.style.top=movt+"px";
			moving.style.left=movl+"px";
	}
}

function Avoid(){
	if (avoid==1){
		var moveLeft, moveTop, maxMoveLeft, maxMoveTop;
		var moving=document.getElementById("move6");
		maxMoveLeft = document.documentElement.scrollWidth - moving.offsetWidth;
		maxMoveTop = document.documentElement.scrollHeight - moving.offsetHeight;
		moveLeft = Math.random() * maxMoveLeft;
		moving.style.left = moveLeft + 'px';
		moveTop = Math.random() * maxMoveTop;
		moving.style.top = moveTop + 'px';
	}
}

function Stop1(){
	var moving=document.getElementById("move6");
	moving.style.left="600px";
	moving.style.top="1650px";
}