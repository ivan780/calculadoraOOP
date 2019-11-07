window.onload = function () {
    console.log(document.readyState);
    if (document.readyState === "complete"){
        let pantallaHtml = document.getElementById("pantallaCalculadora");
        let appCalculadora = new AppCalculator(pantallaHtml);
        appCalculadora.printPantalla("hola");
    }
};