
import { Language } from "./Language";
import { TimeMilestone } from "./TimeMilestone";
import user from "../user.json";

export class UserData{
    #general: Map<string, string>;
    #personal: Map<string, string>;
    #languages: Language[];
    #education: TimeMilestone[];
    #experience: TimeMilestone[];

    constructor()
    {
        this.#general = new Map<string, string>;
        this.#general.set("name", user.general.name + " " + user.general.surname);
        this.#general.set("profile", user.general.profile);
        this.#general.set("description", user.general.description);

        this.#personal = new Map<string, string>;
        this.#general.set("email", user.personal.email);
        if (!this.isEmpty(user.personal.address))
            this.#general.set("address", user.personal.address);
        if (!this.isEmpty(user.personal.phone))
            this.#general.set("phone", user.personal.phone);
        if (!this.isEmpty(user.personal.id))
            this.#general.set("id", user.personal.id);
        
        this.#languages = [];
        user.languages.forEach(element => {
            let currentLanguage = new Language(element.name, element.level);
            this.#languages.push(currentLanguage);
        });

        this.#education = [];
        user.education.forEach(element => {
            let currentDegree = new TimeMilestone(element.name, element.description, element.start, element.end);
            this.#education.push(currentDegree);
        });

        this.#experience = [];
        user.experience.forEach(element => {
            let currentJob = new TimeMilestone(element.name, element.description, element.start, element.end);
            this.#experience.push(currentJob);
        });
    }

    private isEmpty(str: string)
    {
        return (!str || str.length === 0);
    }

    getGeneralInfo(): Map<string, string>
    {
        return this.#general;
    }

    getPersonalInfo(): Map<string, string>
    {
        return this.#personal;
    }

    getLanguagesInfo(): Language[]
    {
        return this.#languages;
    }

    getEducationInfo(): TimeMilestone[]
    {
        return this.#education;
    }

    getExperienceInfo(): TimeMilestone[]
    {
        return this.#experience;
    }

}
