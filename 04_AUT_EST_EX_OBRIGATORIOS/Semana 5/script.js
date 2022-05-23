function calculo() {
    var op = document.getElementById("op").value;

    if (op == "+") {
        var vl1 = document.getElementById("value1").value;
        var vl2 = document.getElementById("value2").value;
        var result = parseInt(vl1) + parseInt(vl2);
        alert(vl1  + op + vl2 + "=" + result);
    }

    else if (op == '-') {
        var vl1 = document.getElementById("value1").value;
        var vl2 = document.getElementById("value2").value;
        var result = parseInt(vl1) - parseInt(vl2);
        alert(vl1  + op + vl2 + "=" + result);
    }

    else if (op == "x" || op == "*") {
        var vl1 = document.getElementById("value1").value;
        var vl2 = document.getElementById("value2").value;
        var result = parseInt(vl1) * parseInt(vl2);
        alert(vl1  + op + vl2 + "=" + result);
    }

    else if (op == "/") {
        var vl1 = document.getElementById("value1").value;
        var vl2 = document.getElementById("value2").value;
        var result = parseInt(vl1) / parseInt(vl2);
        alert(vl1  + op + vl2 + "=" + result);
    }

    else if (op == "%") {
        var vl1 = document.getElementById("value1").value;
        var vl2 = document.getElementById("value2").value;
        var result = parseInt(vl1) % parseInt(vl2);
        alert(vl1  + op + vl2 + "=" + result);
    }
    
    else {
        alert("operação invalida")
    }

};

function preco() {
    var preco = document.getElementById("price").value;
    var nota100 = 0;
    var nota50 = 0;
    var nota20 = 0;
    var nota10 = 0;
    var nota5 = 0;
    var nota2 = 0;
    var nota1 = 0;

    while (preco >= 100) {
        preco = preco - 100;
        nota100 = nota100 + 1;
    };

    while (preco >= 50) {
        preco = preco - 50;
        nota50 = nota50 + 1;
    };

    while (preco >= 20) {
        preco = preco - 20;
        nota20 = nota20 + 1;
    };

    while (preco >= 10) {
        preco = preco - 10;
        nota10 = nota10 + 1;
    };

    while (preco >= 5) {
        preco = preco - 5;
        nota5 = nota5 + 1;
    };

    while (preco >= 2) {
        preco = preco - 2;
        nota2 = nota2 + 1;
    };

    while (preco >= 1) {
        preco = preco - 1;
        nota1 = nota1 + 1;
    };

    if (preco == 0) {
        alert(nota100 + " nota(s) de 100, " + nota50 + " nota(s) de 50, " + nota20 + " nota(s) de 20, " + nota10 + " nota(s) de 10, " + nota5 + " nota(s) de 5, " + nota2 + " nota(s) de 2 e " + nota1 + " nota(s) de 1.");
    };

};

function ordenar() {
    var list = []

    var numFocus = document.getElementById("numFocus").value

    var str = document.getElementById("list").value;

    list = str.split(',').map(Number);

    var focus = numFocus.split('"').map(Number);

    let numbers = [list.sort((a,b) => a - b)];

    alert(numbers + " ; o seu número em destaque " + "(" + focus + ")" + " está na posição " + numbers.indexOf(focus[0]) + " da lista.");

};
