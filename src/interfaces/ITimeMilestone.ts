export interface ITimeMilestone {
	getName(): string;
	getDescription(): string;
	getStartDate(): Date;
	getEndDate(): Date | null;
}
