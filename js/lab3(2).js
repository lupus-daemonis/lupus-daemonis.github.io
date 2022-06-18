window.onload = function () {
	alert("Добро пожаловать в страну всплывающих окон!");
}
button_change.onclick = function() {
	var message1 = "Хотите поменять цвет кнопки?";
	var design = document.getElementById("button_change");
	if (confirm(message1)) {
		if (design.style.backgroundColor == "chocolate") {
			design.style.backgroundColor = "rgb(106,54,162)";
		}
		else {
			design.style.backgroundColor = "chocolate";
		}
		}

	var message2 = "Хотите поменять шрифт кнопки?";
	var design = document.getElementById("button_change");
	if (confirm(message2)) {
		if (design.style.fontStyle == "oblique") {
			design.style.fontStyle = "normal"
		}
		else {
			design.style.fontStyle = "oblique";
		}
	}

		while (1) {
			n = prompt("Какую надпись добавим?");
			if (n) {
				design.textContent = n;
				break;
			}
			else {
				alert("Введите надпись, которая будет украшать кнопку!");
				continue;
			}
		}
	}