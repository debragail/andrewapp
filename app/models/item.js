import DS from 'ember-data';

export default DS.Model.extend({
	queryParams: {
	    who: {
		replace: true
		    }
	}
	    
	    
	    // static

	    /*who: DS.attr('string'),
	    desc: DS.attr('string'),
	    when: DS.attr('date'),
	    what: DS.attr('string'),
	    url: DS.attr('string'),*/
});
