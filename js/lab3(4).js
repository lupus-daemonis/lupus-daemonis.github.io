var myWindow;
function openWindow() {
	myWindow = window.open("","New window","width=300,height=300");
}

function moveWindowTo() {
	if (myWindow && !myWindow.closed) {
		myWindow.moveTo(0,0);
		myWindow.focus();
	}
}
function moveWindowBy(x,y) {
	if (myWindow && !myWindow.closed) {
		myWindow.moveBy(x,y);
		myWindow.focus();
	}
}