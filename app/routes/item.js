import Ember from 'ember';

let item = [{
	who: 'andrew'
    }];

export default Ember.Route.extend({
	model() {
	    return item;
	}
});
