// T3. JavaScript profesional en una aplicación web
// U4. Almacenamiento local (Cookies)
// Enunciado disponible en u5e1.md / Enunciat disponible a u5e1.md

//Escribe aquí tu solución / escriviu aquí la vostra solució:

export class ClipboardApi {

    // Constructor
    constructor(clipboard = window.navigator.clipboard) {
        this.clipboard = clipboard;
    }

    // Copiar texto
    async copy(text) {
        return await this.clipboard.writeText(text);
    }

    // Leer texto
    async read() {
        return await this.clipboard.readText();
    }
}
