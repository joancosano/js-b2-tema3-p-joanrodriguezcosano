
// T3. JavaScript profesional en una aplicación web
// U4. Almacenamiento local (Cookies)
// Enunciado disponible en u4e1.md / Enunciat disponible a u4e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:


class CookieApi {

    static EXPIRING_DAYS = 365;

    static expirationDate(nDays) {
        const date = new Date();

        date.setTime(
            date.getTime() + nDays * 24 * 60 * 60 * 1000
        );

        return date.toUTCString();
    }

    constructor(document = window.document) {
        this.document = document;
    }

    setCookie(
        key,
        value,
        nDays = CookieApi.EXPIRING_DAYS
    ) {

        const jsonValue = JSON.stringify(value);

        this.document[key] = jsonValue;
    }

    getCookie(key) {

        const value = this.document[key];

        if (value === undefined) {
            return null;
        }

        return JSON.parse(value);
    }

    removeCookie(key) {
        this.document[key] = JSON.stringify('');
    }

}

export { CookieApi };