km.focus();
metros.focus();
horas.focus();
segundos.focus();
minutos.focus();


function calcularPace () {
    var kmCalc = parseInt (document.querySelector ("#km").value);
    var metrosCalc = parseInt (document.querySelector("#metros").value);
    var horasCalc = parseInt (document.querySelector("#horas").value);
    var minutosCalc = parseInt (document.querySelector("#minutos").value);
    var segundosCalc = parseInt (document.querySelector("#segundos").value);
    
    // Resolvendo problemas sobre o tempo
    if (isNaN (horasCalc)){
        horasCalc = 0;
    }
    if (isNaN (segundosCalc)){
        segundosCalc = 0;
    }
    if (isNaN(minutosCalc)){
        minutosCalc = 0;
    }
    var tempoCalc = (horasCalc * 60) + minutosCalc + (segundosCalc / 60);

    // Resolvendo problemas sobre distância
    if (isNaN (kmCalc)){
        kmCalc = 0;
    }

    if (isNaN (metrosCalc)){
        metrosCalc = 0;
    }
    
    var distanciaCalc = (metrosCalc/1000) + kmCalc;

    // Calculando pace
    var paceFloat = (tempoCalc/distanciaCalc);
    var paceInt = parseInt (paceFloat);

    if ((paceFloat - paceInt) !== 0 ){
        var segundosCalc = parseInt (60 * (paceFloat - paceInt));
        alert ("Seu pace médio deve ser: " + paceInt + " min " + segundosCalc + " seg");
    } else {
        alert ("Seu pace médio deve ser:" + paceInt + " min " );
    }

    //Melhorando a usabilidade do usuário
    km.value = "";
    km.focus();
    metros.value = "";
    metros.focus();
    horas.value = "";
    horas.focus();
    segundos.value = "";
    segundos.focus();
    minutos.value = "";
    minutos.focus();
    
}

var buttonPace = document.getElementById("buttonPace");
buttonPace.onclick = calcularPace;