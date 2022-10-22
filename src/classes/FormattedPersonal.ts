import { IFormattableInfo } from "../interfaces/IFormattableInfo";

export class FormattedPersonal implements IFormattableInfo {
	#email: HTMLSpanElement;
	#phone: HTMLSpanElement | undefined;
	#address: HTMLSpanElement | undefined;
	#id: HTMLSpanElement | undefined;

	constructor(email: string, phone?: string, address?: string, id?: string) {
		this.#email = new HTMLSpanElement();
		this.#email?.setAttribute("class", "personal");
		this.#email.innerText = email;
		if (phone != null) {
			this.#phone = new HTMLSpanElement();
			this.#phone?.setAttribute("class", "personal");
			this.#phone.innerText = phone;
		}
		if (address != null) {
			this.#address = new HTMLSpanElement();
			this.#address?.setAttribute("class", "personal");
			this.#address.innerText = address;
		}
		if (id != null) {
			this.#id = new HTMLSpanElement();
			this.#id.setAttribute("class", "personal");
			this.#id.innerText = id;
		}
	}

	getFormattedInfo(): HTMLSpanElement[] {
		const formattedPersonal: HTMLSpanElement[] = [];
		formattedPersonal.push(this.#email);
		if (this.#phone != null) formattedPersonal.push(this.#phone);
		if (this.#address != null) formattedPersonal.push(this.#address);
		if (this.#id != null) formattedPersonal.push(this.#id);
		return formattedPersonal;
	}
}
