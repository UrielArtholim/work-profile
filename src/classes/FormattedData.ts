import { IFormattable } from "../interfaces/IFormattable";

export class FormattedData {
	#general: IFormattable;
	#personal: IFormattable;
	#languages: IFormattable[];
	#education: IFormattable[];
	#experience: IFormattable[];

	constructor(
		general: IFormattable,
		personal: IFormattable,
		languages: IFormattable[],
		education: IFormattable[],
		experience: IFormattable[]
	) {
		this.#general = general;
		this.#personal = personal;
		this.#languages = languages;
		this.#education = education;
		this.#experience = experience;
	}

	getFormattableGeneralInfo() {
		return this.#general;
	}

	getFormattablePersonalInfo() {
		return this.#personal;
	}

	getFormattableLanguagesInfo() {
		return this.#languages;
	}

	getFormattableEducationInfo() {
		return this.#education;
	}

	getFormattableExperienceInfo() {
		return this.#experience;
	}
}
