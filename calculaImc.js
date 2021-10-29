peso.focus();
altura.focus();

function calculaImc()
{
    var pesoCalc = parseInt (document.getElementById("peso").value);
    var alturaCalc = parseInt (document.getElementById("altura").value);
    var imc = pesoCalc/(alturaCalc*alturaCalc);
    alert("Seu IMC é:" + imc);
    
    // Melhorando a usabilidade e limpando o input
    peso.value = "";
    peso.focus();
    altura.value = "";
    altura.focus();
}


var button = document.getElementById("buttonImc");
button.onclick = calculaImc;
