export class Language {
    #name;
    #level;
    constructor(name, level) {
        this.#name = name;
        this.#level = level;
    }
    getName() {
        return this.#name;
    }
    getLevel() {
        return this.#level;
    }
}
