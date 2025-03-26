function converter() {
    var NumInicial=document.getElementById("NumInicial").value;
    var BaseOrigem=Number(document.getElementById("BaseOrigem").value);
    var BaseFinal=Number(document.getElementById("BaseFinal").value);
    var NumResult= (parseInt(NumInicial, BaseOrigem)).toString(BaseFinal);
    resultConversor.innerHTML=`Resultado:<br>${NumResult}`
}

function somar() {
    var baseSoma=Number(document.getElementById("BaseSomar").value);
    var num1=Number((parseInt(document.getElementById("Num1Somar").value, baseSoma)).toString(10));
    var num2=Number((parseInt(document.getElementById("Num2Somar").value, baseSoma)).toString(10));
    var numResult=(num1+num2).toString(baseSoma);
    ResultadoSomar.innerHTML=`Resultado:<br>${numResult}`
}

function subtrair() {
    var baseSubtrair=Number(document.getElementById("BaseSubtrair").value);
    var num1=Number((parseInt(document.getElementById("Num1Subtrair").value, baseSubtrair)).toString(10));
    var num2=Number((parseInt(document.getElementById("Num2Subtrair").value, baseSubtrair)).toString(10));
    var numResult=(num1-num2).toString(baseSubtrair);
    ResultadoSubtrair.innerHTML=`Resultado:<br>${numResult}`
}

function dividir() {
    var baseDividir=Number(document.getElementById("BaseDividir").value);
    var num1=Number((parseInt(document.getElementById("Num1Dividir").value, baseDividir)).toString(10));
    var num2=Number((parseInt(document.getElementById("Num2Dividir").value, baseDividir)).toString(10));
    var numResult=(num1/num2).toString(baseDividir);
    ResultadoDividir.innerHTML=`Resultado:<br>${numResult}`
}

function multiplicar() {
    var baseMultiplicar=Number(document.getElementById("BaseMultiplicar").value);
    var num1=Number((parseInt(document.getElementById("Num1Multiplicar").value, baseMultiplicar)).toString(10));
    var num2=Number((parseInt(document.getElementById("Num2Multiplicar").value, baseMultiplicar)).toString(10));
    var numResult=(num1*num2).toString(baseMultiplicar);
    ResultadoMultiplicar.innerHTML=`Resultado:<br>${numResult}`
}

const MConverter = document.getElementById("MainConverter");
const MDividir = document.getElementById("MainDividir");
const MMultiplicar = document.getElementById("MainMultiplicar");
const MSomar = document.getElementById("MainSomar");
const MSubtrair = document.getElementById("MainSubtrair");

function ExibirConverter() {
    MConverter.classList.add("d-block");
    MConverter.classList.remove("d-none");

    [MDividir, MMultiplicar, MSomar, MSubtrair].forEach(elemento => {
        elemento.classList.add("d-none");
        elemento.classList.remove("d-block");
    });
}

function ExibirMultiplicacao() {
    MMultiplicar.classList.add("d-block");
    MMultiplicar.classList.remove("d-none");

    [MConverter, MDividir, MSomar, MSubtrair].forEach(elemento => {
        elemento.classList.add("d-none");
        elemento.classList.remove("d-block");
    });
}

function ExibirDividir() {
    MDividir.classList.add("d-block");
    MDividir.classList.remove("d-none");

    [MConverter, MMultiplicar, MSomar, MSubtrair].forEach(elemento => {
        elemento.classList.add("d-none");
        elemento.classList.remove("d-block");
    });
}

function ExibirSomar() {
    MSomar.classList.add("d-block");
    MSomar.classList.remove("d-none");

    [MConverter, MMultiplicar, MDividir, MSubtrair].forEach(elemento => {
        elemento.classList.add("d-none");
        elemento.classList.remove("d-block");
    });
}

function ExibirSubtracao() {
    MSubtrair.classList.add("d-block");
    MSubtrair.classList.remove("d-none");

    [MConverter, MMultiplicar, MDividir, MSomar].forEach(elemento => {
        elemento.classList.add("d-none");
        elemento.classList.remove("d-block");
    });
}