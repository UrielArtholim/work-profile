import { IFormattable } from "../interfaces/IFormattable";

export class FormattedGeneral implements IFormattable {
	#name: HTMLSpanElement;
	#profile: HTMLSpanElement;
	#description: HTMLSpanElement;

	constructor(name: HTMLSpanElement, profile: HTMLSpanElement, description: HTMLSpanElement) {
		this.#name = name;
		this.#name.setAttribute("id", "user-fullname");
		this.#profile = profile;
		this.#profile.setAttribute("id", "user-profile");
		this.#description = description;
		this.#description.setAttribute("id", "user-description");
	}

	getFormattedInfo(): HTMLElement[] {
		const formattedGeneral: HTMLElement[] = [];
		formattedGeneral.push(this.#name);
		formattedGeneral.push(this.#profile);
		formattedGeneral.push(this.#description);
		return formattedGeneral;
	}
}
