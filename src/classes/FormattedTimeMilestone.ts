import { IFormattableTimeMilestone } from "../interfaces/IFormattableTimeMilestone";

export class FormattedTimeMilestone implements IFormattableTimeMilestone {
	#name: HTMLSpanElement;
	#description: HTMLSpanElement;
	#time: HTMLSpanElement;

	constructor(name: string, description: string, startTime: Date, endTime?: Date | null) {
		this.#name = new HTMLSpanElement();
		this.#name.setAttribute("class", "milestone-text");
		this.#name.innerText = `${name}`;
		this.#description = new HTMLSpanElement();
		this.#description.setAttribute("class", "milestone-text");
		this.#description.innerText = `${description}`;
		this.#time = new HTMLSpanElement();
		this.#time.setAttribute("class", "milestone-text");
		const options: Intl.DateTimeFormatOptions = { month: "short", year: "numeric" };
		const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		if (endTime == null)
			this.#time.innerText = `${startTime.toLocaleDateString(timezone, options)} - current`;
		else
			this.#time.innerText = `${startTime.toLocaleDateString(timezone, options)} - ${endTime.toLocaleDateString(timezone, options)}`;
	}

	getName(): HTMLSpanElement {
		return this.#name;
	}

	getDescription(): HTMLSpanElement{
		return this.#description;
	}

	getTime(): HTMLSpanElement {
		return this.#time;
	}
}
