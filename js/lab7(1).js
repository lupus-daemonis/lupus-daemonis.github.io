var flag=1;
var count=0;
var el1;

function createTables(){
    document.getElementById("table1").insertAdjacentHTML('beforeend',"<table id='workers_table' class='table'><thead class='ttt'><tr><td colspan='3'>Сотрудники</td></tr></thead><tr><th>Фамилия сотрудника</th><th>Дата заключения контракта</th><th>Дата предоставления отпуска</th></tr></table>");
    el1 = document.getElementById('workers_table');
}


function fillTables(){
    document.getElementById("workers_table").insertAdjacentHTML('beforeend',"<tr><td>"+document.getElementById("surname").value+"</td><td>"+document.getElementById("date").value+"</td><td>"+year(document.getElementById("date").value)+"</td></tr>");
    count++;
}

function remove_el() {
    el1.removeChild(el1.lastChild);
    count--;
}

function year(date_start) {
    if(date_start=="") return "";
    //date_start=date_start.split('-');
    // var d = new Date(date_start[0], date_start[1]-1, date_start[2]);
    // var date_end = date.getFullYear() + "-" + ("0"+(date.getMonth()+1)).slice(-2) +"-"+("0" + date.getDate()).slice(-2);
    // date.setMonth(date.getMonth() + 11);
   // date.setDate(0);
    var d = new Date(date_start);
    d.setMonth( d.getMonth( ) + 11 );
    var date = d.getFullYear( ) + "-" + ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);
    if (d.getMonth() == 11 || d.getMonth() == 0 || d.getMonth() == 1){
        date = date + " (отпуск зимой)";
    }
   return(date);
}