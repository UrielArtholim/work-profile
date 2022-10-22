"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserData = void 0;
const Language_1 = require("./Language");
const TimeMilestone_1 = require("./TimeMilestone");
const user_json_1 = __importDefault(require("../user.json"));
class UserData {
    #general;
    #personal;
    #languages;
    #education;
    #experience;
    constructor() {
        this.#general = new Map;
        this.#general.set("name", user_json_1.default.general.name + " " + user_json_1.default.general.surname);
        this.#general.set("profile", user_json_1.default.general.profile);
        this.#general.set("description", user_json_1.default.general.description);
        this.#personal = new Map;
        this.#general.set("email", user_json_1.default.personal.email);
        if (!this.isEmpty(user_json_1.default.personal.address))
            this.#general.set("address", user_json_1.default.personal.address);
        if (!this.isEmpty(user_json_1.default.personal.phone))
            this.#general.set("phone", user_json_1.default.personal.phone);
        if (!this.isEmpty(user_json_1.default.personal.id))
            this.#general.set("id", user_json_1.default.personal.id);
        this.#languages = [];
        user_json_1.default.languages.forEach(element => {
            let currentLanguage = new Language_1.Language(element.name, element.level);
            this.#languages.push(currentLanguage);
        });
        this.#education = [];
        user_json_1.default.education.forEach(element => {
            let currentDegree = new TimeMilestone_1.TimeMilestone(element.name, element.description, element.start, element.end);
            this.#education.push(currentDegree);
        });
        this.#experience = [];
        user_json_1.default.experience.forEach(element => {
            let currentJob = new TimeMilestone_1.TimeMilestone(element.name, element.description, element.start, element.end);
            this.#experience.push(currentJob);
        });
    }
    isEmpty(str) {
        return (!str || str.length === 0);
    }
    getGeneralInfo() {
        return this.#general;
    }
    getPersonalInfo() {
        return this.#personal;
    }
    getLanguagesInfo() {
        return this.#languages;
    }
    getEducationInfo() {
        return this.#education;
    }
    getExperienceInfo() {
        return this.#experience;
    }
}
exports.UserData = UserData;
