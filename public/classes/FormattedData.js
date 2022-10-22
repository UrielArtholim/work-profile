import { FormattedGeneral } from "./FormattedGeneral";
import { FormattedLanguage } from "./FormattedLanguage";
import { FormattedPersonal } from "./FormattedPersonal";
import { FormattedTimeMilestone } from "./FormattedTimeMilestone";
export class FormattedData {
    #general;
    #personal;
    #languages;
    #education;
    #experience;
    constructor(data) {
        this.#general = null;
        this.#personal = null;
        this.#languages = [];
        this.#education = [];
        this.#experience = [];
        const plainGeneral = data.getGeneralInfo();
        const name = plainGeneral.get("name");
        const profile = plainGeneral.get("profile");
        const description = plainGeneral.get("description");
        if (name == null) {
            console.log("Missing <name> in user.json");
            throw "An unexpected error has ocurred. Please check the console log.";
        }
        else if (profile == null) {
            console.log("Missing <profile> in user.json");
            throw "An unexpected error has ocurred. Please check the console log.";
        }
        else if (description == null) {
            console.log("Missing <description> in user.json");
            throw "An unexpected error has ocurred. Please check the console log.";
        }
        else
            this.#general = new FormattedGeneral(name, profile, description);
        const plainPersonal = data.getPersonalInfo();
        const email = plainPersonal.get("email");
        const address = plainPersonal.get("address");
        const phone = plainPersonal.get("phone");
        const id = plainPersonal.get("id");
        if (email == null) {
            console.log("Missing <email> in user.json");
            throw "An unexpected error has ocurred. Please check the console log.";
        }
        else if (address == null) {
            console.log("Missing <address> in user.json");
            throw "An unexpected error has ocurred. Please check the console log.";
        }
        else if (phone == null) {
            console.log("Missing <phone> in user.json");
            throw "An unexpected error has ocurred. Please check the console log.";
        }
        else if (id == null) {
            console.log("Missing <id> in user.json");
            throw "An unexpected error has ocurred. Please check the console log.";
        }
        else
            this.#personal = new FormattedPersonal(email, address, phone, id);
        const plainLanguages = data.getLanguagesInfo();
        plainLanguages.forEach(element => {
            let currentLanguage = new FormattedLanguage(element.getName(), element.getLevel());
            this.#languages.push(currentLanguage);
        });
        const plainEducation = data.getEducationInfo();
        plainEducation.forEach(element => {
            let currentDegree = new FormattedTimeMilestone(element.getName(), element.getDescription(), element.getStartDate(), element.getEndDate());
            this.#education.push(currentDegree);
        });
        const plainExperience = data.getExperienceInfo();
        plainExperience.forEach(element => {
            let currentJob = new FormattedTimeMilestone(element.getName(), element.getDescription(), element.getStartDate(), element.getEndDate());
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
