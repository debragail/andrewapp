import Ember from 'ember';

export default Ember.Route.extend({
	model() {
	    
	    return this.get('store').findAll('rental');
	    /*return [{
		    id: 'attMH7ELJzRudfsxf',
			url: 'https://dl.airtable.com/OCyEE0Q2KFEVEh6ARuAQ_14.jpg',
			type: 'image/jpeg',
			image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
			description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
			}];*/
	}
    });