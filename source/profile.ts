import { IHasFormatter } from './classes/interfaces/IHasFormatter';
import { Milestone } from './classes/Milestone.ts';

let firstMilestone = new Milestone ("First Milestone", "My first milestone", "1990-10-24", "1990-10-24");
firstMilestone.format();

