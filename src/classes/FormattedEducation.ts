import { IFormattable } from "../interfaces/IFormattable";

export class FormattedEducation implements IFormattable {
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
		const formattedEducation: HTMLElement[] = [];
		formattedEducation.push(this.#name);
		formattedEducation.push(this.#description);
		formattedEducation.push(this.#time);
		return formattedEducation;
	}
}