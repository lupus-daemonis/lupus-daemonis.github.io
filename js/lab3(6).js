function gradBackground1(element){
	element.style.background ="radial-gradient(circle at center, #3b066e, #dbf0f1)";
	element.style.color = "white";
}
function gradBackground2(element){
	element.style.background ="linear-gradient(#ffffff, #fff14f)";
	element.style.color = "brown";
}

function changeFont1(element){
	element.style.font ="bold italic 20px serif";
}
function changeFont2(element){
	element.style.font ="normal 18px sans-serif";
}

document.onkeydown = function() {
	if (event.code=="ArrowRight"){
		document.getElementById("keyStroke").style.background="linear-gradient(-45deg, #062a8a, #92dfe8)";
	}
	if (event.code=="ArrowLeft"){
		document.getElementById("keyStroke").style.background="linear-gradient(45deg, #062a8a, #92dfe8)";
	}
}

function onMouseDownImg(element){
	element.style.transform = "scale(2)";
}

function onMouseUpImg(element){
	element.style.transform = "scale(1)";
}

function changeShadow(element){
	element.style.textShadow = "0px 0px 20px orange";
}
