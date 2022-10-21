import { ILanguage } from "../interfaces/ILanguage";

export class Language implements ILanguage
{
    #name: string;
    #level: string;

    constructor(name: string, level: string)
    {
        this.#name = name;
        this.#level = level; 
    }

    getName(): string {
        return this.#name;
    }

    getLevel(): string {
        return this.#level;
    }
}