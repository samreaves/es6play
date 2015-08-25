/**
 * @name Fighter Class
 * @file fighter.js
 * @description Provides Fighter objects
 * @author Sam Reaves
 * @date August 25, 2015
 */

export class Fighter {

	/**
	 * @name Fighter constructor
	 * @description Builds Fighter object
	 * 
	 * @param {string} gym Gym of which fighter is a member
	 */
	constructor(gym) {
		
		// Assign this fighter's gym to Fighter object
		this.gym = gym;
	}

	/**
	 * @name Sound off
	 * @description Fighter describes his attributes
	 */
	soundOff() {
		document.write(`I'm a fighter, and I train at ${this.gym}`);
	}
}