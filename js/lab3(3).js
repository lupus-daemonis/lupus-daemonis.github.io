var myWindow;
function openWindow() {
	myWindow = window.open("","New window","width=300,height=300");
}
function resizeWindowTo() {
	if (myWindow && !myWindow.closed) {
		myWindow.resizeTo(500,500);
		myWindow.focus();
	}
}
function resizeWindowBy(x,y) {
	if (myWindow && !myWindow.closed) {
		myWindow.resizeBy(x,y);
		myWindow.focus();
	}
}

function moveWindowTo() {
	if (myWindow && !myWindow.closed) {
		myWindow.moveTo(300,300);
		myWindow.focus();
	}
}
function moveWindowBy(x,y) {
	if (myWindow && !myWindow.closed) {
		myWindow.moveBy(x,y);
		myWindow.focus();
	}
}