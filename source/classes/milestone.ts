class Milestone {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;

    constructor(eventName, desc, start, end){
        this.name = eventName;
        this.description = desc;
        this.startDate = start;
        this.endDate = end;
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
}