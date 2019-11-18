var appCal;
window.onload = function () {
    console.log(document.readyState);
    if (document.readyState === "complete"){
        appCal = new AppCalculator(document, "pantallaCalculadora");
    }
};