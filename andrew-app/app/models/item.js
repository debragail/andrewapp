import DS from 'ember-data';

export default DS.Model.extend({
	    title: DS.attr('string'),
	    who: DS.attr('string'),
	    desc: DS.attr('string'),
	    when: DS.attr('date'),
	    what: DS.attr('string'),
	    url: DS.attr('string'),
});
