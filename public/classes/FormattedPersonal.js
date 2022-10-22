"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedPersonal = void 0;
class FormattedPersonal {
    #email;
    #phone;
    #address;
    #id;
    constructor(email, phone, address, id) {
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
    getFormattedInfo() {
        const formattedPersonal = [];
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
exports.FormattedPersonal = FormattedPersonal;
