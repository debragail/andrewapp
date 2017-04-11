import Ember from 'ember';

let test = [{
	who: 'andrewwk',
	when: '2012',
	what: 'lighting and photography',
	desc: ' blah blah blah blah blah blah blah blah blah blah blah',
	media: '"https://dl.airtable.com/O2gR19UETd6OIUqDOO5D_large_14.jpg'
}];
	
export default Ember.Route.extend({
	model() {
	    return test;
	}
});
