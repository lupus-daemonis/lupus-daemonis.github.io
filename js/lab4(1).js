let color0='<button style="background-color:white;"></button>';
let color1='<button style="background-color:black;"></button>';
let color2='<button style="background-color:gray;"></button>';

let m1=25;
let n1=30;
let m2=7;
let n2=30;
let m3=25;
let n3=9;

let mas1=new Array();
mas1[0]=new Array(0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0);
mas1[1]=new Array(0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0);
mas1[2]=new Array(0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0);
mas1[3]=new Array(0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0);
mas1[4]=new Array(0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0);
mas1[5]=new Array(0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0);
mas1[6]=new Array(0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0);
mas1[7]=new Array(0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0);
mas1[8]=new Array(0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0);
mas1[9]=new Array(0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0);
mas1[10]=new Array(0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0);
mas1[11]=new Array(0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0);
mas1[12]=new Array(0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0);
mas1[13]=new Array(0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0);
mas1[14]=new Array(0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0);
mas1[15]=new Array(0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0);
mas1[16]=new Array(0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0);
mas1[17]=new Array(0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0);
mas1[18]=new Array(1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1);
mas1[19]=new Array(1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1);
mas1[20]=new Array(1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1);
mas1[21]=new Array(1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1);
mas1[22]=new Array(0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0);
mas1[23]=new Array(0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0);
mas1[24]=new Array(0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0);

let mas2=new Array();
mas2[0]=new Array(0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
mas2[1]=new Array(0,0,0,0,0,1,0,2,0,1,1,7,1,2,1,0,0,0,0,0,1,1,0,2,0,0,0,0,0,0);
mas2[2]=new Array(0,0,0,0,4,1,2,1,4,2,4,1,5,4,2,0,0,1,0,1,2,2,4,2,0,2,2,0,0,0);
mas2[3]=new Array(0,0,0,4,2,2,4,2,2,4,2,2,4,2,5,4,2,5,1,5,4,5,2,2,1,4,2,2,0,0);
mas2[4]=new Array(0,0,8,2,2,2,2,3,4,1,1,1,1,1,2,11,11,5,7,3,3,3,3,3,2,4,3,3,0,0);
mas2[5]=new Array(0,12,3,2,1,2,1,2,1,1,1,2,1,1,1,1,1,1,12,1,2,1,2,1,11,2,2,3,12,0);
mas2[6]=new Array(4,3,3,3,3,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,3,3,2,3,3,3,4);

let mas3=new Array();
mas3[0]=new Array(0,0,0,0,0,0,4,2,4);
mas3[1]=new Array(0,0,0,0,0,2,1,2,2);
mas3[2]=new Array(1,1,2,1,4,1,1,2,1);
mas3[3]=new Array(0,0,2,4,1,2,1,4,2);
mas3[4]=new Array(0,0,0,3,2,2,2,2,2);
mas3[5]=new Array(0,0,0,0,0,4,10,2,1);
mas3[6]=new Array(0,0,0,0,3,15,1,2,1);
mas3[7]=new Array(0,0,0,0,2,2,14,4,1);
mas3[8]=new Array(0,0,0,2,1,2,13,2,1);
mas3[9]=new Array(0,0,0,2,4,1,3,4,2);
mas3[10]=new Array(0,0,0,0,2,2,2,2,8);
mas3[11]=new Array(0,0,0,3,1,1,2,4,6);
mas3[12]=new Array(0,0,0,1,6,4,6,3,1);
mas3[13]=new Array(0,0,0,1,5,2,8,2,1);
mas3[14]=new Array(0,0,0,0,0,1,3,11,1);
mas3[15]=new Array(0,0,0,0,0,1,9,4,1);
mas3[16]=new Array(0,0,0,0,0,2,1,2,2);
mas3[17]=new Array(0,0,0,0,0,2,3,1,2);
mas3[18]=new Array(0,0,1,2,1,3,1,2,1);
mas3[19]=new Array(0,0,0,0,1,3,1,5,1);
mas3[20]=new Array(0,0,0,0,2,3,1,2,2);
mas3[21]=new Array(0,0,0,0,0,4,5,1,4);
mas3[22]=new Array(0,0,0,0,0,0,5,8,6);
mas3[23]=new Array(0,0,0,0,0,0,0,7,7);
mas3[24]=new Array(0,0,0,0,0,0,0,0,21);

function drawTable(){
    let tbl="<table id='MyTable1' style='position:absolute; top:525px; left:400px;' onclick='changeColor();'>";
    for(let i=0; i<m1; i++){
        tbl+="<tr>";
        for(let j=0; j<n1; j++) tbl+="<td><button style='background-color:white;'></button></td>";
        tbl+="</tr>";
    }
    tbl+="</table>";
    return tbl;
}

function drawTableTop(){
    let tbl="<table id='MyTable2' style='position:absolute; top:360px; left:400px;' onClick='colorTop();'>";
    for(let i=0; i<m2; i++){
        tbl+="<tr>";
        for(let j=0; j<n2; j++) {
            if(mas2[i][j]!=0) tbl+="<td><button style='background-color:#afafaf;'>"+mas2[i][j]+"</button></td>";
            else tbl+="<td><button style='background-color:#e5e5e5;'>⠀</button></td>";
        }
        tbl+="</tr>";
    }
    tbl+="</table>";
    return tbl;
}

function drawTableLeft(){
    let tbl="<table id='MyTable3' style='position:absolute; top:525px; left:210px;' onClick='colorLeft();'>";
    for(let i=0; i<m3; i++){
        tbl+="<tr>";
        for(let j=0; j<n3; j++) {
            if(mas3[i][j]!=0) tbl+="<td><button style='background-color:#afafaf;'>"+mas3[i][j]+"</button></td>";
            else tbl+="<td><button style='background-color:#e5e5e5;width:18px; height:18px; font-size: 11px;'></button></td>";
        }
        tbl+="</tr>";
    }
    tbl+="</table>";
    return tbl;
}

function changeColor(){
    if("BUTTON"==event.srcElement.tagName){
        let shot=event.srcElement;
        if(color0==shot.outerHTML) shot.outerHTML=color1;
        else if (color1==shot.outerHTML) shot.outerHTML=color2;
        else if (color2==shot.outerHTML) shot.outerHTML=color0;
    }
}

function colorLeft(){
    if("BUTTON"==event.srcElement.tagName){
        let shot=event.srcElement;
        let number=event.srcElement.innerHTML;
        color_0='<button style="background-color:#afafaf;">'+number+'</button>';
        color_1='<button style="background-color:#7f8acc;">'+number+'</button>';
        if(color_0==shot.outerHTML) shot.outerHTML=color_1;
        else if (color_1==shot.outerHTML) shot.outerHTML=color_0;
    }
}

function colorTop(){
    if("BUTTON"==event.srcElement.tagName){
        let shot=event.srcElement;
        let number=event.srcElement.innerHTML;
        color_0='<button style="background-color:#afafaf;">'+number+'</button>';
        color_1='<button style="background-color:#7f8acc;">'+number+'</button>';
        if(color_0==shot.outerHTML)shot.outerHTML=color_1;
        else if (color_1==shot.outerHTML)shot.outerHTML=color_0;
    }
}

function Clean(){
    tbl=document.getElementById("MyTable1");
    for(let i=0; i<m1; i++){
        for(let j=0; j<n1; j++) tbl.rows[i].cells[j].innerHTML=color0;
    }
}

function showAnswer(){
    tbl=document.getElementById("MyTable1");
    for(let i=0;i<m1; i++){
        for(let j=0;j<n1; j++)
            if (mas1[i][j]==0) tbl.rows[i].cells[j].innerHTML=color0;
            else tbl.rows[i].cells[j].innerHTML=color1;
    }
}

function Check(){
    let k=0;
    tbl=document.getElementById("MyTable1");
    let mas_result = new Array();
    for(let i=0; i<m1; i++){
        mas_result[i]= new Array();
        for(let j=0; j<n1; j++) {
            if(tbl.rows[i].cells[j].innerHTML==color1) mas_result[i][j]=1;
            else mas_result[i][j]=0;
        }
    }
    for(let i=0; i<m1; i++){
        for(let j=0; j<n1; j++) if(mas_result[i][j]==mas1[i][j]) k++;
    }
    if (k==n1*m1) alert("Вы правильно разгадали кроссворд и заслужили тортик :)");
    else alert("Вы неправильно разгадали кроссворд :(");
}
