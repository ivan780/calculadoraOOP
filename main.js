window.onload = function () {
    console.log(document.readyState);
    if (document.readyState === "complete"){
        var pantallaHtml = document.getElementById("pantallaCalculadora");
        var appCalculadora = new AppCalculator(document);
    }
};