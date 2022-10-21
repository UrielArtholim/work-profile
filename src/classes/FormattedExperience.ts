import { IFormattable } from "../interfaces/IFormattable";

export class FormattedExperience implements IFormattable {
	#name: HTMLSpanElement;
	#description: HTMLSpanElement;
	#time: HTMLSpanElement;

	constructor(name: HTMLSpanElement, description: HTMLSpanElement, time: HTMLSpanElement) {
		this.#name = name;
		this.#name.setAttribute("class", "education");
		this.#description = description;
		this.#description.setAttribute("class", "education");
		this.#description = description;
		this.#time = time;
		this.#time.setAttribute("class", "education");
	}

	getFormattedInfo(): HTMLElement[] {
		const formattedExperience: HTMLElement[] = [];
		formattedExperience.push(this.#name);
        formattedExperience.push(this.#description);
        formattedExperience.push(this.#time);
		return formattedExperience;
	}
}