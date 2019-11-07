class AppCalculator {

    constructor(p) {
        console.log("Objeto AppCalculator creado")
        this.pantalla = p;
    }

    printPantalla(v) {
        this.pantalla.value = v;
    }
}