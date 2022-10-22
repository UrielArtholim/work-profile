import { FormattedData } from "./classes/FormattedData";
import { UserData } from "./classes/UserData";

// Get main structures from index.html
const general: HTMLElement | null = document.getElementById("general");
const personal: HTMLElement | null = document.getElementById("personal");
const cualifications: HTMLElement | null = document.getElementById("cualifications");
const languages: HTMLElement | null = document.getElementById("languages");
const milestones: HTMLElement | null = document.getElementById("milestones");
const education: HTMLElement | null = document.getElementById("education");
const experience: HTMLElement | null = document.getElementById("experience");

// 1. Add profile info
const data = new UserData();
const formattedData = new FormattedData(data);

if (general != null)
{
    const userGeneralInfo = formattedData.getFormattableGeneralInfo()?.getFormattedInfo();
    if (userGeneralInfo != null) {
        userGeneralInfo.forEach(element => {
            general.appendChild(element);
        });
    }    
}

if (personal != null)
{
    const userPersonalInfo = formattedData.getFormattablePersonalInfo()?.getFormattedInfo();
    if (userPersonalInfo != null)
    {
        userPersonalInfo.forEach(element => {
            personal.appendChild(element);
        });
    }
}

if (languages != null)
{
    const userLanguagesInfo = formattedData.getFormattableLanguagesInfo();
    userLanguagesInfo.forEach(element => {
        let languageItem = new HTMLDivElement();
		languageItem.setAttribute("class", "language");
        languageItem.appendChild(element.getName());
        languageItem.appendChild(element.getLevel());
        languages.appendChild(languageItem);
    });
}

if (education != null)
{
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
