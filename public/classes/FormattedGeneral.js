"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedGeneral = void 0;
class FormattedGeneral {
    #name;
    #profile;
    #description;
    constructor(name, profile, description) {
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
    getFormattedInfo() {
        const formattedGeneral = [];
        formattedGeneral.push(this.#name);
        formattedGeneral.push(this.#profile);
        formattedGeneral.push(this.#description);
        return formattedGeneral;
    }
}
exports.FormattedGeneral = FormattedGeneral;
