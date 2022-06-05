function qnttUp(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}
  
function qnttDown(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value);
    if (value > 0) {
      value = isNaN(value) ?    0 : value;
      value--;
      input.value = value;
    }
}

function swapValues() {
    var vl1 = String(document.getElementById('value1').value);
    var vl2 = String(document.getElementById('value2').value);

    document.getElementById('value1').value = vl2;
    document.getElementById('value2').value = vl1;
}

function verifyNmbr() {
    var phoneNmbr = document.getElementById('phoneNmbr').value;
    var re = /^[(]\d{2}[)](\s)?\d{5}(-|\s)\d{4}$/;

    if (re.test(phoneNmbr) == true) {
        alert("Número enviado com sucesso")
    }

    if (re.test(phoneNmbr) == false) {
        alert("Formato de número inválido")
    }
}