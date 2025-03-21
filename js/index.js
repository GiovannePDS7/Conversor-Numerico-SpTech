function converter() {
    var decimal = Number(demo1.value);

    demo2.innerHTML = decimal.toString(8);
    demo3.innerHTML = decimal.toString(16);
    demo4.innerHTML = decimal.toString(2);
}