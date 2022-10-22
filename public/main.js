"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FormattedData_1 = require("./classes/FormattedData");
const UserData_1 = require("./classes/UserData");
// Get main structures from index.html
const general = document.getElementById("general");
const personal = document.getElementById("personal");
const cualifications = document.getElementById("cualifications");
const languages = document.getElementById("languages");
const milestones = document.getElementById("milestones");
const education = document.getElementById("education");
const experience = document.getElementById("experience");
// 1. Add profile info
const data = new UserData_1.UserData();
const formattedData = new FormattedData_1.FormattedData(data);
if (general != null) {
    const userGeneralInfo = formattedData.getFormattableGeneralInfo()?.getFormattedInfo();
    if (userGeneralInfo != null) {
        userGeneralInfo.forEach(element => {
            general.appendChild(element);
        });
    }
}
if (personal != null) {
    const userPersonalInfo = formattedData.getFormattablePersonalInfo()?.getFormattedInfo();
    if (userPersonalInfo != null) {
        userPersonalInfo.forEach(element => {
            personal.appendChild(element);
        });
    }
}
if (languages != null) {
    const userLanguagesInfo = formattedData.getFormattableLanguagesInfo();
    userLanguagesInfo.forEach(element => {
        let languageItem = new HTMLDivElement();
        languageItem.setAttribute("class", "language");
        languageItem.appendChild(element.getName());
        languageItem.appendChild(element.getLevel());
        languages.appendChild(languageItem);
    });
}
if (education != null) {
    const userEducationInfo = formattedData.getFormattableEducationInfo();
    userEducationInfo.forEach((element) => {
        let educationItem = new HTMLDivElement();
        educationItem.setAttribute("class", "education");
        educationItem.appendChild(element.getName());
        educationItem.appendChild(element.getDescription());
        educationItem.appendChild(element.getTime());
        education.appendChild(educationItem);
    });
}
if (experience != null) {
    const userExperienceInfo = formattedData.getFormattableExperienceInfo();
    userExperienceInfo.forEach((element) => {
        let experienceItem = new HTMLDivElement();
        experienceItem.setAttribute("class", "experience");
        experienceItem.appendChild(element.getName());
        experienceItem.appendChild(element.getDescription());
        experienceItem.appendChild(element.getTime());
        experience.appendChild(experienceItem);
    });
}
