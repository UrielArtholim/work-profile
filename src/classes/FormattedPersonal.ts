import { IFormattable } from "../interfaces/IFormattable";

export class FormattedPersonal implements IFormattable {
	#email: HTMLSpanElement;
	#phone: HTMLSpanElement | undefined;
	#address: HTMLSpanElement | undefined;
	#id: HTMLSpanElement | undefined;

	constructor(email: HTMLSpanElement, phone: HTMLSpanElement, address?: HTMLSpanElement, id?: HTMLSpanElement) {
        this.#email = email;
        this.#email.setAttribute("class", "personal");
        this.#phone = phone;
        this.#phone.setAttribute("class", "personal");
        if (address != null) {
            this.#address = address;
            this.#address.setAttribute("class", "personal");
        }
        if (id != null)
        {
            this.#id = id;
            this.#id.setAttribute("class", "personal");    
        }
	}

	getFormattedInfo(): HTMLElement[] {
		const formattedPersonal: HTMLElement[] = [];
		formattedPersonal.push(this.#email);
        if (this.#phone != null)
            formattedPersonal.push(this.#phone);
        if (this.#address != null)
        formattedPersonal.push(this.#address);
        if (this.#id != null)
        formattedPersonal.push(this.#id);
            
		return formattedPersonal;
	}
}