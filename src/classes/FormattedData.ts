import { FormattedGeneral } from "./FormattedGeneral";
import { FormattedLanguage } from "./FormattedLanguage";
import { FormattedPersonal } from "./FormattedPersonal";
import { FormattedTimeMilestone } from "./FormattedTimeMilestone";
import { Language } from "./Language";
import { TimeMilestone } from "./TimeMilestone";
import { UserData } from "./UserData";

export class FormattedData {
	#general: FormattedGeneral | null;
	#personal: FormattedPersonal | null;
	#languages: FormattedLanguage[];
	#education: FormattedTimeMilestone[];
	#experience: FormattedTimeMilestone[];

	constructor(data: UserData)
	{
		this.#general = null;
		this.#personal = null;
		this.#languages = [];
		this.#education = [];
		this.#experience = [];

		const plainGeneral:Map<string,string> = data.getGeneralInfo();
		const name: string | undefined = plainGeneral.get("name");
		const profile: string | undefined = plainGeneral.get("profile");
		const description: string | undefined = plainGeneral.get("description"); 
		if (name == null)
		{
			console.log("Missing <name> in user.json");
			throw "An unexpected error has ocurred. Please check the console log.";
		}
		else if (profile == null)
		{
			console.log("Missing <profile> in user.json");
			throw "An unexpected error has ocurred. Please check the console log.";
		}
		else if (description == null)
		{
			console.log("Missing <description> in user.json");
			throw "An unexpected error has ocurred. Please check the console log.";
		}
		else
			this.#general = new FormattedGeneral(name, profile, description);
				
		const plainPersonal: Map<string,string> = data.getPersonalInfo();
		const email: string | undefined = plainPersonal.get("email");
		const address: string | undefined = plainPersonal.get("address");
		const phone: string | undefined = plainPersonal.get("phone");
		const id: string | undefined = plainPersonal.get("id");
		if (email == null) {
			console.log("Missing <email> in user.json");
			throw "An unexpected error has ocurred. Please check the console log.";
		} else if (address == null) {
			console.log("Missing <address> in user.json");
			throw "An unexpected error has ocurred. Please check the console log.";
		} else if (phone == null) {
			console.log("Missing <phone> in user.json");
			throw "An unexpected error has ocurred. Please check the console log.";
		} else if (id == null) {
			console.log("Missing <id> in user.json");
			throw "An unexpected error has ocurred. Please check the console log.";
		} else
			this.#personal = new FormattedPersonal(email, address, phone, id);
		

		const plainLanguages: Language[] = data.getLanguagesInfo();
		plainLanguages.forEach(element => {
			let currentLanguage: FormattedLanguage = new FormattedLanguage(element.getName(), element.getLevel());
			this.#languages.push(currentLanguage);
		});

		const plainEducation: TimeMilestone[] = data.getEducationInfo();
		plainEducation.forEach(element => {
			let currentDegree: FormattedTimeMilestone = new FormattedTimeMilestone(
				element.getName(),
				element.getDescription(),
				element.getStartDate(),
				element.getEndDate()
				);
			this.#education.push(currentDegree);
		});
		const plainExperience: TimeMilestone[] = data.getExperienceInfo();
		plainExperience.forEach(element => {
			let currentJob: FormattedTimeMilestone = new FormattedTimeMilestone(
				element.getName(),
				element.getDescription(),
				element.getStartDate(),
				element.getEndDate()
			);
			this.#experience.push(currentJob);
		});
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
