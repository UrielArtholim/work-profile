import user from "../user.json";
import { FormattedData } from "./FormattedData";
import { FormattedGeneral } from "./FormattedGeneral";
import { FormattedPersonal } from "./FormattedPersonal";
import { Language } from "./Language";
import { TimeMilestone } from "./TimeMilestone";
export class PersonalData {
    // General Info
    #name;
    #surname;
    #profile;
    #description;
    // Personal Info
    #email;
    #phone;
    #address;
    #id;
    // Languages
    #languages;
    // Education
    #education;
    // Experience:
    #experience;
    constructor() {
        this.#name = user.general.name;
        this.#surname = user.general.surname;
        this.#profile = user.general.profile;
        this.#description = user.general.description;
        this.#email = user.personal.email;
        this.#phone = user.personal.phone;
        this.#address = user.personal.address;
        this.#id = user.personal.id;
        this.#languages = [];
        this.#education = [];
        this.#experience = [];
        let userLanguages = user.languages;
        userLanguages.forEach((element) => {
            let currentLanguage = new Language(element.name, element.level);
            this.#languages.push(currentLanguage);
        });
        let userEducation = user.education;
        userEducation.forEach((element) => {
            let currentDegree = new TimeMilestone(element.name, element.description, element.start, element.end);
            this.#education.push(currentDegree);
        });
        let userExperience = user.experience;
        userExperience.forEach((element) => {
            let currentJob = new TimeMilestone(element.name, element.description, element.start, element.end);
            this.#education.push(currentJob);
        });
    }
    getFormattableData() {
        const general = new FormattedGeneral(this.#name + " " + this.#surname, this.#profile, this.#description);
        const personal = new FormattedPersonal(this.#email, this.#phone, this.#address, this.#id);
        // Create formatted arrays
        const languages = [];
        const education = [];
        const experience = [];
        //----------------------------------------------------------------
        const formattedData = new FormattedData(general, personal, languages, education, experience);
        return formattedData;
    }
}
