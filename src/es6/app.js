/* Playing with ES6 */

// Import Fighter class
import {Fighter} from './classes/fighter';

// Create new Fighter who trains MMA at ATT 
let att_fighter = new Fighter("American Top Team", "MMA");

// Create new fighter who trains at KU
let fighter = new Fighter("Knuckle Up");

// Fighter describes his attributes
att_fighter.soundOff();
fighter.soundOff();