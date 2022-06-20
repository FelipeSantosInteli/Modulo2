function verifyCent() {
    var input = document.getElementById('centena').value
    input = Math.trunc(input / 100)
    var verifyCent = input % 2
    
    if (verifyCent == 0) {
        alert("A Centena é Par")
    }

    if (verifyCent != 0) {
        alert("A Centena é Ímpar")
    }
}

function addNmbr() {
    var input = document.getElementById('addNmbr').value
    var add = 0

    while (input > 0) {
        resto = input % 10
        input = (input - resto) / 10
        add = add + resto
    }

    alert("A soma de todos os algarismos é " + add)
}

function ordNm() {
    var list = []

    var str = String(document.getElementById("list").value);

    list = str.split(',');

    list.sort((a, b) => a.localeCompare(b));

    console.log(list)

    alert(list);
};

function seqFib() {
    var input = document.getElementById('term').value
    var list = []

    for (var i = 1; i <= input; i++) {
        var calculo = Math.trunc((Math.pow(1.618034, i) - Math.pow((1-1.618034),i))/Math.sqrt(5))
        list.push(calculo)
    }

    alert(list)
}

function nmbrPrimos() {
    var intervalo = []

    var str = String(document.getElementById("intervalo").value);

    intervalo = str.split(',');

    intervalo.sort((a,b) => a - b);

    
    if (intervalo.length != 2) {
            alert("Por favor inserir apenas dois números")
    }
        
    var vl1 = Number(intervalo[0])
    var vl2 = Number(intervalo[1])
    var list = [] 

    for (var i = vl1; i <= vl2; i++) {
        var int = 0

        for (var e = 2; e < i; e++) {
            
            if (i % e == 0) {
                int = 1
                break
            }
        }

        if (int == 0 && i > 1) {
            list.push(i)
        }  
    }
    alert(list)
}
