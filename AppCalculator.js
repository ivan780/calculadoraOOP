class AppCalculator {

    constructor(doc, nombreDePantallaCalculadora) {
        console.log("Objeto AppCalculator creado");
        this.documento = doc;
        //Variables
        this.calculo = [""];
        this.posicionCalculo = 0;
        //htmlDocuments
        this.cookies = this.documento.cookies;
        this.avisoHtml = this.documento.getElementById("aviso");
        this.pantallaHtml = this.documento.getElementById(nombreDePantallaCalculadora);
        this.appLocalDB = new AppLocalDB();
    }

    init(){
    }
//Funciones basicas/////////////////////////////////////////////////////////////////////////////////////////////////////
     numbers(valor) {
        console.log("number(" + valor + ")");
        if (this.calculo[this.posicionCalculo] != 0 || this.calculo[this.posicionCalculo] == "") {
            this.calculo[this.posicionCalculo] += valor;
            this.toScreen(true);
        } else {
            this.calculo[posicionCalculo] = valor;
            this.toScreen(true);
        }
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     operaciones(operacion) {
        console.log("operaciones(" + operacion + ")");
        if (this.imparCalculo() && this.calculo[this.posicionCalculo] != "") {
            this.posicionCalculo++;
            this.calculo[this.posicionCalculo] = operacion;
            this.posicionCalculo++;
            this.calculo[this.posicionCalculo] = "";
            this.toScreen(true);
        }else {
            this.avisoHtml.innerText = "Tienes que introducir un numero para hacer una operacion";
        }
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     punto(valor) {
        if (this.calculo[this.posicionCalculo] != "" && valor == "."){
            if (this.tienePunto()){
                this.numbers(valor);
            }
        }
    }
//Funciones del codigo//////////////////////////////////////////////////////////////////////////////////////////////////
     imparCalculo() {
        console.log("parCalculo()");
        console.log("-" + (this.calculo.length % 2 === 1));
        return this.calculo.length % 2 === 1;
    }
     tienePunto() {
        let i = this.calculo[this.posicionCalculo].indexOf(".");
        if (i == -1){
            return true
        }else {
            return false
        }

    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     toScreen(modo) {
        let tScreen;

        for (let i = 0; i < this.calculo.length; i++) {
            console.log("toScreen-> " + this.calculo[i]);
            if (i === 0) {
                tScreen = this.calculo[i]
            } else {
                tScreen += ' ' + this.calculo[i];
            }
        }
        if (modo){
            this.pantallaHtml.value = tScreen;
        }else {
            return tScreen;
        }
    }
//Funciones de calculadora//////////////////////////////////////////////////////////////////////////////////////////////
     clean(){
         this.calculo = [""];
         this.posicionCalculo = 0;
         this.toScreen(true);
    }
     fullClean() {
         this.calculo = [""];
         this.posicionCalculo = 0;
         this.toScreen(true);
         this.cookies = "";
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     backspace() {
        console.log("backspace()");
        console.log("-" + this.calculo[this.posicionCalculo]);
        calculo[this.posicionCalculo] = this.calculo[this.posicionCalculo].slice(0, -1);
        console.log("-" + this.calculo[this.posicionCalculo]);
         this.toScreen(true);
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     resultado() {
        if (this.calculo[this.posicionCalculo] != ""){
            this.calculo = [eval(this.toScreen(false))];
            this.posicionCalculo = 0;
            this.pantallaHtml.value = this.calculo[this.posicionCalculo];
        }
    }
//Funciones de memoria//////////////////////////////////////////////////////////////////////////////////////////////////
     memoriaView() {
        console.log("memoriaview()");
        let memoria = this.cookies;
        console.log("-Memoria = " + this.cookies );
        if (memoria != ""){
            this.numbers(memoria)
        }
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     memoriaSave() {
        console.log("memoriaSave()");
        console.log("-memoria=" + this.toScreen(false));
        this.cookies = this.toScreen(false);
    }
}