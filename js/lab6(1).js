var flag=1;
var cb=new Array("","","");
var ex="";
var count=0;
var el1;
var el2;
var el3;

function showValue(newValue){
    document.getElementById("range").innerHTML=newValue;
}

function createTables(){
    document.getElementById("table1").insertAdjacentHTML('beforeend',"<table id='book_table' class='table'><thead class='ttt'><tr><td colspan='6'>Книги</td></tr></thead><tr><th>Область знаний</th><th>Название</th><th>Автор</th><th>Год выпуска</th><th>Цена</th><th>Дополнительная информация</th></tr></table>");
    document.getElementById("table2").insertAdjacentHTML('beforeend',"<table id='receipt_table' class='table'><thead class='ttt'><tr><td colspan='5'>Поступление</td></tr></thead><tr><th>Название</th><th>Автор</th><th>Количество</th><th>Дата поступления</th><th>Целевая аудитория</th></tr></table>");
    document.getElementById("table3").insertAdjacentHTML('beforeend',"<table id='sale_table' class='table'><thead class='ttt'><tr><td colspan='6'>Продажа</td></tr></thead><tr><th>Название</th><th>Автор</th><th>Количество</th><th>Дата продажи</th><th>Номер чека</th><th>Примечания</th></tr></table>");
    el1 = document.getElementById('book_table');
    el2 = document.getElementById('receipt_table');
    el3 = document.getElementById('sale_table');
}

function fillTables(){
    var i;
    for(i=0;i<3;i++) if (document.getElementById("cb"+(i)).checked) cb[i]=document.getElementById("sp"+(i)).innerHTML+"<br />";
    for(i=0;i<3;i++) if (document.getElementById("ex"+(i)).checked) ex=document.getElementById("ex"+(i)).value;
    document.getElementById("book_table").insertAdjacentHTML('beforeend',"<tr><td>"+document.getElementById("knowledge_field").value+"</td><td>"+document.getElementById("title").value+"</td>"+"<td>"+document.getElementById("author").value+"</td>"+"<td>"+document.getElementById("release_year").value+"</td>"+"<td>"+document.getElementById("book_price").value+"</td>"+"<td>"+cb[0]+cb[1]+cb[2]+"</td></tr>");
    document.getElementById("receipt_table").insertAdjacentHTML('beforeend',"<tr><td>"+document.getElementById("title1").value+"</td><td>"+document.getElementById("author1").value+"</td>"+"<td>"+document.getElementById("copies").value+"</td>"+"<td>"+document.getElementById("receipt_date").value+"</td>"+"<td>"+ex+"</td></tr>");
    document.getElementById("sale_table").insertAdjacentHTML('beforeend',"<tr><td>"+document.getElementById("title2").value+"</td><td>"+document.getElementById("author2").value+"</td>"+"<td>"+document.getElementById("copies1").value+"</td>"+"<td>"+document.getElementById("receipt_date1").value+"</td>"+"<td>"+document.getElementById("check_number").value+"</td>"+"<td>"+document.getElementById("messnumber").value+"</td></tr>");
    for (i=0;i<3;i++) cb[i]="";
    count++;
}


function remove_el() {
    el1.removeChild(el1.lastChild);
    el2.removeChild(el2.lastChild);
    el3.removeChild(el3.lastChild);
    count--;
}