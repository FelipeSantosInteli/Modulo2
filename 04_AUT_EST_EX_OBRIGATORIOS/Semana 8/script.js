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




// function qnttUp(a, b) {
//     var input = b.previousElementSibling;
//     var value = parseInt(input.value);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     input.value = value;
// }
  
// function qnttDown(a, b) {
//     var input = b.nextElementSibling;
//     var value = parseInt(input.value);
//     if (value > 0) {
//       value = isNaN(value) ?    0 : value;
//       value--;
//       input.value = value;
//     }
// }

// function swapValues() {
//     var vl1 = String(document.getElementById('value1').value);
//     var vl2 = String(document.getElementById('value2').value);

//     document.getElementById('value1').value = vl2;
//     document.getElementById('value2').value = vl1;
// }

// function verifyNmbr() {
//     var phoneNmbr = document.getElementById('phoneNmbr').value;
//     var re = /^[(]\d{2}[)](\s)?\d{5}(-|\s)\d{4}$/;

//     if (re.test(phoneNmbr) == true) {
//         alert("Número enviado com sucesso");
//     };

//     if (re.test(phoneNmbr) == false) {
//         alert("Formato de número inválido");
//     };
// };

// function valueOff() {
//     var input = document.getElementById("ppl");
//     var turn = document.getElementById("turn").value;
//     var ppl = parseInt(input.value);
//     var ticket;

//     if(turn == "Diurno") {
//         ticket = 200;
//         var discount = 0.6;
//     }

//     else if(turn == "Noturno") {
//         ticket = 100;
//         var discount = 0.8;
//     };

//     if (ppl > 50) {
//         var finalValue = ticket*discount;
//     };

//     alert("O valor da sua passagem será " + "R$" + finalValue + ",00");
// };