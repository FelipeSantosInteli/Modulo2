function calculo() {
    var vl1 = parseInt(document.getElementById("#value1"));
    var vl2 = parseInt(document.getElementById("#value2"));
    var select = document.getElementById("#op");
    var op = select.options[e.selectedIndex].vau;
    
    alert("estou aqui");

    if (op == '+') {
        var result = vl1 + vl2
        alert(result);
    }
};