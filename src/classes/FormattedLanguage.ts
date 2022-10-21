import { IFormattable } from "../interfaces/IFormattable";

export class FormattedLanguage implements IFormattable{
    #name: HTMLSpanElement;
    #level: HTMLSpanElement;

    constructor(name: HTMLSpanElement, level: HTMLSpanElement)
    {
        this.#name = name;
        this.#name.setAttribute("class", "language");
        this.#level = level;
        this.#level.setAttribute("class", "language");
    }

    getFormattedInfo(): HTMLElement[] {
        const formattedLanguage: HTMLElement[] = [];
        formattedLanguage.push(this.#name);
        formattedLanguage.push(this.#level);
        return formattedLanguage;
    }
}