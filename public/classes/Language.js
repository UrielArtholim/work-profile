"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = void 0;
class Language {
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
exports.Language = Language;
