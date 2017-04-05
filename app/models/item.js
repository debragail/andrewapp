import DS from 'ember-data';

export default DS.Model.extend({
	/*
	  
	  //QUERY

	  queryParams: {
	    who: {
		replace: true
		    }
	}
	*/  
	    
       

	    who: DS.attr(),
	    desc: DS.attr(),
	    when: DS.attr(),
	    what: DS.attr(),

	// readOnly option

	//formula: DS.attr('string', { readOnly: true })
});
