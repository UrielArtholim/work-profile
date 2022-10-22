export class TimeMilestone {
    #name;
    #description;
    #start;
    #end;
    constructor(name, description, start, end) {
        this.#name = name;
        this.#description = description;
        this.#start = new Date(start);
        if (end != null)
            this.#end = new Date(end);
    }
    getName() {
        return this.#name;
    }
    getDescription() {
        return this.#description;
    }
    getStartDate() {
        return this.#start;
    }
    getEndDate() {
        let date = null;
        if (this.#end != null)
            date = this.#end;
        return date;
    }
}
