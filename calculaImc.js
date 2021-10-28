peso.focus();
altura.focus();

function calculaImc()
{
    var pesoCalc = parseInt (document.getElementById("peso").value);
    var alturaCalc = parseInt (document.getElementById("altura").value);
    var imc = pesoCalc/(alturaCalc*alturaCalc);
    alert(imc);
    
    peso.value = "";
    peso.focus();
    altura.value = "";
    altura.focus();
}


var button = document.getElementById("buttonImc");
button.onclick = calculaImc;
