peso.focus();
altura.focus();

var visibilidade = true; //Variável que vai manipular o botão Exibir
document.getElementById("dvConteudo").style.display = "none";

function calculaImc()
{
    var pesoCalc = parseFloat (document.getElementById("peso").value);
    var alturaCalc = parseFloat (document.getElementById("altura").value);
    alturaCalc = alturaCalc/100; //Transformando cm em metros
    var imc = parseFloat (pesoCalc/(alturaCalc*alturaCalc));
    imc = imc.toFixed(1); //Determinando o número de casas decimais (função arredonda para cima)
    document.getElementsByClassName("resultadoImc")[0].innerHTML  = imc;

    
    // Melhorando a usabilidade e limpando o input
    peso.value = "";
    peso.focus();
    altura.value = "";
    altura.focus();
  
    if (visibilidade) {//Se a variável visibilidade for igual a true, então...
        document.getElementById("dvConteudo").style.display = "block";//Exibimos a div
        visibilidade = false;//alteramos o valor da variável para falso.
    }
    /* Se caso precisasse desabilitar a div:
    else { //ou se a variável estiver com o valor false..
        document.getElementById("dvConteudo").style.display = "none";//Ocutamos a div..
        visibilidade = true;//Alteramos o valor da variável para true.
    //}*/
}


var button = document.getElementById("buttonImc");
button.onclick = calculaImc;

