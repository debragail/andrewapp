import DS from 'ember-data';

export default DS.Model.extend({

	api: Ember.inject.service(),

	/*
	  
	  //QUERY

	  queryParams: {
	    who: {
		replace: true
		    }
	}
	*/  
	    
	    hasGroup(group){
	    return this.get('api').request('assignGroup'),{
		    
		    model: 'item',
			params: {
			group: group
			    }
		}
    }
		/*
		  who: DS.attr(),
		  desc: DS.attr(),
		  when: DS.attr(),
		  what: DS.attr(),
		*/
	// readOnly option

	//formula: DS.attr('string', { readOnly: true })
});
