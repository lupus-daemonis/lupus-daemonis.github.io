i = 0;
j = 0;
color = new Array("#0000ff", "#ff0000", "#00ff00", "#00ffff", "#d900ff","#fff000");
var textline= "Печатаемый текст";
changeColor();
text();

function Hide(){
    document.getElementById('text_1').hidden = true;
    document.getElementById('text_2').hidden = true;
    document.getElementById('text_3').hidden = true;
}

function Show(){
    document.getElementById('text_1').hidden = false;
    document.getElementById('text_2').hidden = false;
    document.getElementById('text_3').hidden = false;
}

function changeColor(){
    i++;
    document.getElementById("change_color_string").style.color = color[i];
    if (i>color.length) i = 0;
    setTimeout("changeColor()", 500);
}

    function text() {
    j++;
        if(j<=textline.length) {
            document.all.print_text.innerText=textline.substring (0,j);
        }
        else {document.all.print_text.innerText="Печатаемый текст";
            j=0;
        }
        setTimeout("text()",200);
    }

function changeSize(){
    const e = document.getElementById("img");
    e.width -= 30;
    e.height -= 20;
    e.left -= 20;
}