import { IFormattableInfo } from "../interfaces/IFormattableInfo";

export class FormattedGeneral implements IFormattableInfo {
	#name: HTMLSpanElement;
	#profile: HTMLSpanElement;
	#description: HTMLSpanElement;

	constructor(name: string, profile: string, description: string) {
		this.#name = new HTMLSpanElement();
		this.#name.setAttribute("id", "user-fullname");
		this.#name.innerHTML = name;
		this.#profile = new HTMLSpanElement();
		this.#profile.setAttribute("id", "user-profile");
		this.#profile.innerHTML = profile;
		this.#description = new HTMLSpanElement();
		this.#description.setAttribute("id", "user-description");
		this.#description.innerText = description;
	}

	getFormattedInfo(): HTMLSpanElement[] {
		const formattedGeneral: HTMLSpanElement[] = [];
		formattedGeneral.push(this.#name);
		formattedGeneral.push(this.#profile);
		formattedGeneral.push(this.#description);
		return formattedGeneral;
	}
}
