import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    });

import AirtableAdapter from "ember-airtable/adapter";
 
export default AirtableAdapter.extend({

	host: 'https://api.airtable.com',

	    namespace: 'v0/appJKocZsUWpTuPv1',

	    headers: {
	    'Accept': 'application/json',
		'Authorization': 'Bearer ' + 'keynFPXh4Lf94Zj74'
		},
});
