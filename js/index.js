// Converter

var BaseOrigem = document.getElementById("BaseOrigem");
var NumInicial = document.getElementById("NumInicial");
var BaseFinal = document.getElementById("BaseFinal");

BaseOrigem.addEventListener("change", function () {
    if (this.value) {
        NumInicial.disabled = false;
        NumInicial.value = '';
        NumInicial.focus();
    } else {
        NumInicial.disabled = true;
    }
});

NumInicial.addEventListener("input", function () {
    let regex;

    switch (BaseOrigem.value) {
        case "2": regex = /^[01]*$/; break;
        case "8": regex = /^[0-7]*$/; break;
        case "10": regex = /^[0-9]*$/; break;
        case "16": regex = /^[0-9a-fA-F]*$/; break;
        default: regex = /.*/;
    }

    if (!regex.test(this.value)) {
        this.value = this.value.slice(0, -1);

    }
});

function converter() {
    var numInicial = NumInicial.value;
    var baseOrigem = Number(BaseOrigem.value);
    var baseFinal = Number(BaseFinal.value);
    var resultConversor = document.getElementById("resultConversor");

    if (BaseFinal.value === '' || BaseOrigem === '') return alert('Preencha as bases numéricas')
    else if (numInicial === '') return alert('Preencha o campo número!');

    var numConvertido = parseInt(numInicial, baseOrigem).toString(baseFinal);

    resultConversor.innerHTML = `Resultado:<br>${numConvertido.toUpperCase()}`;
}


//Somar

var BaseSoma = document.getElementById("BaseSomar");
var Num1Somar = document.getElementById("Num1Somar");
var Num2Somar = document.getElementById("Num2Somar");

BaseSoma.addEventListener("change", function () {
    if (this.value) {
        Num1Somar.disabled = false;
        Num1Somar.value = '';
        Num1Somar.focus();
        Num2Somar.disabled = false;
        Num2Somar.value = '';
    } else {
        Num1Somar.disabled = true;
        Num2Somar.disabled = true;
    }
});


function alterarBaseInputSoma() {
    switch (BaseSoma.value) {
        case "2": regex = /^[01]*$/; break;
        case "8": regex = /^[0-7]*$/; break;
        case "10": regex = /^[0-9]*$/; break;
        case "16": regex = /^[0-9a-fA-F]*$/; break;
        default: regex = /.*/;
    }

    if (!regex.test(this.value)) {
        this.value = this.value.slice(0, -1);
    }
}

Num1Somar.addEventListener('input', alterarBaseInputSoma);
Num2Somar.addEventListener('input', alterarBaseInputSoma);

function somar() {
    var baseSoma = Number(BaseSoma.value);
    var num1 = Num1Somar.value;
    var num2 = Num2Somar.value

    if (BaseSoma.value === '') return alert('Preencha a base!');
    else if (num1 === '' || num2 === '') return alert('Preencha os números!')

    num1 = Number((parseInt(Num1Somar.value, baseSoma)).toString(10));
    num2 = Number((parseInt(Num2Somar.value, baseSoma)).toString(10));

    var numResult = (num1 + num2).toString(baseSoma);
    ResultadoSomar.innerHTML = `Resultado:<br>${numResult}`
}
// Subtrair

var BaseSubtrair = document.getElementById("BaseSubtrair");
var Num1Subtrair = document.getElementById("Num1Subtrair");
var Num2Subtrair = document.getElementById("Num2Subtrair");

BaseSubtrair.addEventListener("change", function () {
    if (this.value) {
        Num1Subtrair.disabled = false;
        Num1Subtrair.value = '';
        Num1Subtrair.focus();
        Num2Subtrair.disabled = false;
        Num2Subtrair.value = '';
    } else {
        Num1Subtrair.disabled = true;
        Num2Subtrair.disabled = true;
    }
});

function alterarBaseInputSubtrair() {
    switch (BaseSubtrair.value) {
        case "2": regex = /^[01]*$/; break;
        case "8": regex = /^[0-7]*$/; break;
        case "10": regex = /^[0-9]*$/; break;
        case "16": regex = /^[0-9a-fA-F]*$/; break;
        default: regex = /.*/;
    }

    if (!regex.test(this.value)) {
        this.value = this.value.slice(0, -1);
    }
}

Num1Subtrair.addEventListener('input', alterarBaseInputSubtrair);
Num2Subtrair.addEventListener('input', alterarBaseInputSubtrair);

function subtrair() {
    var baseSubtrair = Number(BaseSubtrair.value);
    var num1 = Num1Subtrair.value;
    var num2 = Num2Subtrair.value;

    if (BaseSubtrair.value === '') return alert('Preencha a base!');
    else if (num1 === '' || num2 === '') return alert('Preencha os números!')

    num1 = Number((parseInt(Num1Subtrair.value, baseSubtrair)).toString(10));
    num2 = Number((parseInt(Num2Subtrair.value, baseSubtrair)).toString(10));

    var numResult = (num1 - num2).toString(baseSubtrair);
    ResultadoSubtrair.innerHTML = `Resultado:<br>${numResult}`
}

// Dividir

var BaseDividir = document.getElementById("BaseDividir");
var Num1Dividir = document.getElementById("Num1Dividir");
var Num2Dividir = document.getElementById("Num2Dividir");

BaseDividir.addEventListener("change", function () {
    if (this.value) {
        Num1Dividir.disabled = false;
        Num1Dividir.value = '';
        Num1Dividir.focus();
        Num2Dividir.disabled = false;
        Num2Dividir.value = '';
    } else {
        Num1Dividir.disabled = true;
        Num2Dividir.disabled = true;
    }
});

function alterarBaseInputDividir() {
    switch (BaseDividir.value) {
        case "2": regex = /^[01]*$/; break;
        case "8": regex = /^[0-7]*$/; break;
        case "10": regex = /^[0-9]*$/; break;
        case "16": regex = /^[0-9a-fA-F]*$/; break;
        default: regex = /.*/;
    }

    if (!regex.test(this.value)) {
        this.value = this.value.slice(0, -1);
    }
}

Num1Dividir.addEventListener('input', alterarBaseInputDividir);
Num2Dividir.addEventListener('input', alterarBaseInputDividir);

function dividir() {
    var baseDividir = Number(BaseDividir.value);
    var num1 = Num1Dividir.value;
    var num2 = Num2Dividir.value;

    if (BaseDividir.value === '') return alert('Preencha a base!');
    else if (num1 === '' || num2 === '') return alert('Preencha os números!')

    num1 = Number((parseInt(Num1Dividir.value, baseDividir)).toString(10));
    num2 = Number((parseInt(Num2Dividir.value, baseDividir)).toString(10));
    var numResult = (num1 / num2).toString(baseDividir);
    ResultadoDividir.innerHTML = `Resultado:<br>${numResult}`
}

// Multiplicar

var BaseMultiplicar = document.getElementById("BaseMultiplicar");
var Num1Multiplicar = document.getElementById("Num1Multiplicar");
var Num2Multiplicar = document.getElementById("Num2Multiplicar");


BaseMultiplicar.addEventListener("change", function () {
    if (this.value) {
        Num1Multiplicar.disabled = false;
        Num1Multiplicar.value = '';
        Num1Multiplicar.focus();
        Num2Multiplicar.disabled = false;
        Num2Multiplicar.value = '';
    } else {
        Num1Multiplicar.disabled = true;
        Num2Multiplicar.disabled = true;
    }
});


function alterarBaseInputMultiplicar() {
    switch (BaseMultiplicar.value) {
        case "2": regex = /^[01]*$/; break;
        case "8": regex = /^[0-7]*$/; break;
        case "10": regex = /^[0-9]*$/; break;
        case "16": regex = /^[0-9a-fA-F]*$/; break;
        default: regex = /.*/;
    }

    if (!regex.test(this.value)) {
        this.value = this.value.slice(0, -1);
    }
}

Num1Multiplicar.addEventListener('input', alterarBaseInputMultiplicar);
Num2Multiplicar.addEventListener('input', alterarBaseInputMultiplicar);

function multiplicar() {
    var baseMultiplicar = Number(BaseMultiplicar.value);
    var num1 = Num1Multiplicar.value;
    var num2 = Num2Multiplicar.value;

    if (BaseMultiplicar.value === '') return alert('Preencha a base!');
    else if (num1 === '' || num2 === '') return alert('Preencha os números!')

    num1 = Number((parseInt(Num1Multiplicar.value, baseMultiplicar)).toString(10));
    num2 = Number((parseInt(Num2Multiplicar.value, baseMultiplicar)).toString(10));

    var numResult = (num1 * num2).toString(baseMultiplicar);
    ResultadoMultiplicar.innerHTML = `Resultado:<br>${numResult}`
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