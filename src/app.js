/* Playing with ES6 */

class Fighter {
	constructor(gym) {
		this.gym = gym;
		console.log(`I'm a fighter, and I train at ${this.gym}`);
	}
}

var fighter = new Fighter("KnuckleUp");