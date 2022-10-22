export class FormattedLanguage {
    #name;
    #level;
    constructor(name, level) {
        this.#name = new HTMLSpanElement();
        this.#name.setAttribute("class", "language-text");
        this.#name.innerText = `Language: ${name}`;
        this.#level = new HTMLSpanElement();
        this.#level.setAttribute("class", "language-text");
        this.#level.innerText = `Level: ${level}`;
        ;
    }
    getName() {
        return this.#name;
    }
    getLevel() {
        return this.#level;
    }
}
