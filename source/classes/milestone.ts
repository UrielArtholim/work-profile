import {IHasFormatter} from '../interfaces/IHasFormatter.js';

export class Milestone implements IHasFormatter {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;

    constructor(eventName, desc, startDate, endDate){
        this.name = eventName;
        this.description = desc;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }

    getName() {
        return this.name;
    }

    getDescription(){
        return this.description;
    }

    getStartDate(){
        return this.startDate;
    }

    getEndDate(){
        return this.endDate;
    }

    format(){
        let info = `<div name="${this.name}" class="Milestone"><h2>${this.name}</h2><h3>${this.description}</h3><h4>${this.startDate} - ${endDate}</h4></div>`;
        return info;
    }
}