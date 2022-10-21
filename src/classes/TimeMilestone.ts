import { IMilestone } from "../interfaces/IMilestone";

export class TimeMilestone implements IMilestone{
    #name: string;
    #description: string;
    #start: Date;
    #end: Date | undefined;

    constructor(name: string, description: string, start: string, end?: string)
    {
        this.#name = name;
        this.#description = description;
        this.#start = new Date(start);
        if (end != null)
            this.#end = new Date(end);
    }

    getName(): string {
        return this.#name;
    }

    getDescription(): string {
        return this.#description;
    }

    getStartDate(): Date
    {
        return this.#start;
    }

    getEndDate(): Date | null
    {
        let date = null;
        if(this.#end != null)
            date = this.#end;
        return date;
    }    
}