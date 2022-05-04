const btn = document.querySelector("#send");

function calcMaxH(v) {
    console.log("Valor recebido de v0: "+v)
    var h = Math.pow(v, 2)/20
    return(h)
};

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const v0 = Number(document.querySelector("#value").value);
    const MaxH = calcMaxH(v0);
    
    document.getElementById("output").innerHTML = parseFloat(MaxH).toFixed(2) + "m";
    console.log(MaxH);
    console.log(v0);

});




