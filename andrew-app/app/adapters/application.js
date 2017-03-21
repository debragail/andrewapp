import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({


	host: 'https://api.airtable.com',

	    namespace: 'v0/appJKocZsUWpTuPv1',

	    headers: {
	    'Accept': 'application/json',
		'Authorization': 'Bearer ' + 'keynFPXh4Lf94Zj74'
		},
});
