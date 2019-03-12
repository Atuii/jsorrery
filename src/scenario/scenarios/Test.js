
import { sun } from './bodies/sun';
import { jupiter } from './bodies/jupiter';
import { earth } from "./bodies/earth";
import {AU, DAY} from "../../core/constants";
import {getJD} from "../../utils/JD";

export default {
	name: 'TestScenario',
	title: 'Some jupiter test',
	forcedGuiSettings:{
		date:'2021-06-03T12:15:11.000Z',
	},
	commonBodies: [
		sun,
		jupiter,
		earth,
	],
	bodies:{
		jupiter:{
			forceMaxPrecision: true,
			showSolidOrbit: true,
			resetPosAtTick: true,
		},
		sling:{
			title: 'Halley\'s Comet',
			name: 'halley',
			mass: 1,
			radius: 50,
			color: '#ffffff',
			orbit: {
				base: {
					a: 17.8341442925537 * AU,
					e: 0.967142908462304,
					i: 162.262690579161,
					M: 38.3842644764388, //360 * (438393600 / (75.1 * YEAR * DAY)),
					w: 111.3324851045177,
					o: 58.42008097656843,
				},
				day: {
					a: 0,
					e: 0,
					i: 0,
					M: 0.01308656479244564,
					w: 0,
					o: 0,
				},
			},
		}
	},
	secondsPerTick: { min: 1, max: 3600 * 5, initial: 1 },
	defaultGuiSettings: { 
		planetScale: 1,
	},
	help: 'This is a test scenario',
};
