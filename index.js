//Variables
let calculo = [""];
let posicionCalculo = 0;
//htmlDocuments
let cookie = document.cookie;
const avisoHtml = document.getElementById("aviso");
const pantallaHtml = document.getElementById("pantallaCalculadora");
//Funciones basicas/////////////////////////////////////////////////////////////////////////////////////////////////////
function numbers(valor) {
    console.log("number(" + valor + ")");
    if (calculo[posicionCalculo] != 0 || calculo[posicionCalculo] == "") {
        calculo[posicionCalculo] += valor;
        toScreen(true);
    } else {
        calculo[posicionCalculo] = valor;
        toScreen(true);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function operaciones(operacion) {
    console.log("operaciones(" + operacion + ")");
    if (imparCalculo() && calculo[posicionCalculo] != "") {
        posicionCalculo++;
        calculo[posicionCalculo] = operacion;
        posicionCalculo++;
        calculo[posicionCalculo] = "";
        toScreen(true);
    }else {
        avisoHtml.innerText = "Tienes que introducir un numero para hacer una operacion";
    }
}
function punto(valor) {
    if (calculo[posicionCalculo] != ""){
        if (tienePunto()){
            numbers(valor);
        }
    }
}
//Funciones del codigo//////////////////////////////////////////////////////////////////////////////////////////////////
function imparCalculo() {
    console.log("parCalculo()");
    console.log("-" + (calculo.length % 2 === 1));
    return calculo.length % 2 === 1;
}
function tienePunto() {
    let i = calculo[posicionCalculo].indexOf(".");
    if (i == -1){
        return true
    }else {
        return false
    }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function toScreen(modo) {
    let tScreen;

    for (let i = 0; i < calculo.length; i++) {
        console.log("toScreen-> " + calculo[i]);
        if (i === 0) {
            tScreen = calculo[i]
        } else {
            tScreen += ' ' + calculo[i];
        }
    }
    if (modo){
        pantallaHtml.value = tScreen;
    }else {
        return tScreen;
    }
}
//Funciones de calculadora//////////////////////////////////////////////////////////////////////////////////////////////
function clean(){
    calculo = [""];
    posicionCalculo = 0;
    toScreen(true);
}
function fullClean() {
    calculo = [""];
    posicionCalculo = 0;
    toScreen(true);
    cookie = "";
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function backspace() {
    console.log("backspace()");
    console.log("-" + calculo[posicionCalculo]);
    calculo[posicionCalculo] = calculo[posicionCalculo].slice(0, -1);
    console.log("-" + calculo[posicionCalculo]);
    toScreen(true);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function resultado() {
    if (calculo[posicionCalculo] != ""){
        calculo = [eval(toScreen(false))];
        posicionCalculo = 0;
        pantallaHtml.value = calculo[posicionCalculo];
    }
}
//Funciones de memoria//////////////////////////////////////////////////////////////////////////////////////////////////
function memoriaView() {
    console.log("memoriaview()");
    let memoria = cookie;
    console.log("-Memoria = " + cookie );
    if (memoria != ""){
        numbers(memoria)
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function memoriaSave() {
    console.log("memoriaSave()");
    console.log("-memoria=" + toScreen(false


    ));
    cookie = toScreen(false);
}