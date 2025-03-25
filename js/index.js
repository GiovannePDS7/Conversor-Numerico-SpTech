function converter() {
    var decimal = Number(demo1.value);

    demo2.innerHTML = decimal.toString(8);
    demo3.innerHTML = decimal.toString(16);
    demo4.innerHTML = decimal.toString(2);
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