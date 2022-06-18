function obj(page) {
    var students = [];
    
    document.getElementById('search').addEventListener('input', function() {
        if (document.getElementById('search').value !== '') {
            document.getElementById('b2').disabled = false;
        } else {
            document.getElementById('b2').disabled = true;
        }
    });
    document.getElementById('fn').addEventListener('input', formfull);
    document.getElementById('gr').addEventListener('input', formfull);
    document.getElementById('a').addEventListener('input', formfull);
    document.getElementById('v').addEventListener('input', formfull);
    document.getElementById('b').addEventListener('input', formfull);
    document.getElementById('s').addEventListener('input', formfull);
    document.getElementById('b1').addEventListener('click', function(eve) {
        eve.preventDefault();
        students.push({
            fullname: getValue('fn'),
            group: getValue('gr'),
            pascal: parseInt(getValue('a')),
            si: parseInt(getValue('v')),
            assem: parseInt(getValue('b')),
            delphi: parseInt(getValue('s'))
        });
        setValue('fn', '');
        setValue('gr', '');
        setValue('a', '');
        setValue('v', '');
        setValue('b', '');
        setValue('s', '');
        document.getElementById('fn').dispatchEvent(new Event('input'));
    });
    document.getElementById('b2').addEventListener('click', function(eve) {
        eve.preventDefault();
        var rows = document.getElementsByTagName('tr');
        for (let i = rows.length - 1; i > 0; i--) {
            rows[i].parentNode.removeChild(rows[i]);
        }
        var val = getValue('search');
        students.forEach(stud => {
            if (stud.fullname.indexOf(val) != -1 || stud.group.indexOf(val) != -1 || stud.pascal == val || stud.si == val || stud.assem == val || stud.delphi == val) {
                var tab = document.getElementById('t1');
                var tr = document.createElement('tr');
                for (let f in stud) {
                    tr.appendChild(cell(() => {
                        return stud[f];
                    }));
                }
                tab.appendChild(tr);
            }
        });
        setValue('search', '');
        document.getElementById('search').dispatchEvent(new Event('input'));
    });
    document.getElementById('b3').addEventListener('click', function(eve) {
        var sort = [];
        for (let i = 0; i < students.length; i++) {
            sort.push(students[i]);
        }
        for (let i = 0; i < sort.length; i++) {
            for (let j = 0; j < sort.length - 1; j++) {
                if (sort[i].fullname < sort[j].fullname) {
                    for (let f in sort[i]) {
                        var tmp = sort[j][f];
                        sort[j][f] = sort[i][f];
                        sort[i][f] = tmp;
                    }
                }
            }
        }
        var rows = document.getElementsByTagName('tr');
        for (let i = rows.length - 1; i > 0; i--) {
            rows[i].parentNode.removeChild(rows[i]);
        }
        sort.forEach(stud => {
            var tab = document.getElementById('t1');
            var tr = document.createElement('tr');
            for (let f in stud) {
                tr.appendChild(cell(() => {
                    return stud[f];
                }));
            }
            tab.appendChild(tr);
        });
    });
    document.getElementById('b4').addEventListener('click', function(eve) {
        eve.preventDefault();
        var rows = document.getElementsByTagName('tr');
        for (let i = rows.length - 1; i > 0; i--) {
            rows[i].parentNode.removeChild(rows[i]);
        }
        students.forEach(stud => {
            var tab = document.getElementById('t1');
            var tr = document.createElement('tr');
            for (let f in stud) {
                tr.appendChild(cell(() => {
                    return stud[f];
                }));
            }
            tab.appendChild(tr);
        });
    });
    document.getElementById('b5').addEventListener('click', function(eve) {
        eve.preventDefault();
        var rows = document.getElementsByTagName('tr');
        for (let i = rows.length - 1; i > 0; i--) {
            rows[i].parentNode.removeChild(rows[i]);
        }
        students.forEach(stud => {
            if (stud.pascal >=4 && stud.si>=4 && stud.assem >=4 && stud.delphi >= 4) {
                var tab = document.getElementById('t1');
                var tr = document.createElement('tr');
                for (let f in stud) {
                    tr.appendChild(cell(() => {
                        return stud[f];
                    }));
                }
                tab.appendChild(tr);
            }
        });
    });
}

function formfull() {
    if (document.getElementById('fn').value !== '' && document.getElementById('gr').value !== '' && document.getElementById('a').value !== '' && document.getElementById('v').value !== '' && document.getElementById('b').value !== '' && document.getElementById('s').value !== '') {
        document.getElementById('b1').disabled = false;
    } else {
        document.getElementById('b1').disabled = true;
    }
}

function cell(callback) {
    var td = document.createElement('td');
    var txt = document.createTextNode(callback());
    td.appendChild(txt);
    return td;
}

function getValue(id) {
    return document.getElementById(id).value;
}

function setValue(id, val) {
    document.getElementById(id).value = val;
}
