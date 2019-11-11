class AppCalculator {

    constructor(p) {
        console.log("Objeto AppCalculator creado");
        this.documento = p;
        this.init();
    }

    init(){
        this.printPantalla("Bienvenidos");
    }

    printPantalla(v) {
        this.documento.getElementById("pantallaCalculadora").value = v;
    }
}