import Ember from 'ember';

let test = [{
	who: 'andrewwk',
	when: '2012',
	what: 'lighting and photography'
}];
	
export default Ember.Route.extend({
	model() {
	    return test;
	}
});
