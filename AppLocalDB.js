class AppLocalDB {

    constructor(documento) {
        this.cookies = documento.cookie;
    }

    getCookies() {
        var operacion = this.cookies.split(';');
        return operacion[1];
    }

    setCookies(operacion) {
        var date = new Date();
        date.setTime(date.getTime() + (5 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + date.toUTCString();
        document.cookie = operacion + ";" + expires;
    }
}