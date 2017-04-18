import Ember from 'ember';

//let item = [{
//who: 'andrew'
//  }];

export default Ember.Route.extend({
	model() {
	    return this.store.query('item', {
		    // Only data for fields whose names are in this list will be included in the records.
		    fields: ['who', 'desc'],
			// A formula used to filter records.
			filterByFormula: "NOT({name} = 'MacBook')",
			// A list of sort objects that specifies how the records will be ordered.
			sort: [{field: "name", direction: "desc"}],
			// The name or ID of a view in the table. 
			view: 'active_items'
			});
	}
});
