import { IFormattableLanguage } from "../interfaces/IFormattableLanguage";

export class FormattedLanguage implements IFormattableLanguage{
	#name: HTMLSpanElement;
	#level: HTMLSpanElement;

	constructor(name: string, level: string) {
		this.#name = new HTMLSpanElement();
		this.#name.setAttribute("class", "language-text");
		this.#name.innerText = `Language: ${name}`;
		this.#level = new HTMLSpanElement();
		this.#level.setAttribute("class", "language-text");
		this.#level.innerText = `Level: ${level}`;;
	}

	getName(): HTMLSpanElement
	{
		return this.#name;
	}

	getLevel(): HTMLSpanElement
	{
		return this.#level;
	}
}
