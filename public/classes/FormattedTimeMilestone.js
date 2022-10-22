"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedTimeMilestone = void 0;
class FormattedTimeMilestone {
    #name;
    #description;
    #time;
    constructor(name, description, startTime, endTime) {
        this.#name = new HTMLSpanElement();
        this.#name.setAttribute("class", "milestone-text");
        this.#name.innerText = `${name}`;
        this.#description = new HTMLSpanElement();
        this.#description.setAttribute("class", "milestone-text");
        this.#description.innerText = `${description}`;
        this.#time = new HTMLSpanElement();
        this.#time.setAttribute("class", "milestone-text");
        const options = { month: "short", year: "numeric" };
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (endTime == null)
            this.#time.innerText = `${startTime.toLocaleDateString(timezone, options)} - current`;
        else
            this.#time.innerText = `${startTime.toLocaleDateString(timezone, options)} - ${endTime.toLocaleDateString(timezone, options)}`;
    }
    getName() {
        return this.#name;
    }
    getDescription() {
        return this.#description;
    }
    getTime() {
        return this.#time;
    }
}
exports.FormattedTimeMilestone = FormattedTimeMilestone;
