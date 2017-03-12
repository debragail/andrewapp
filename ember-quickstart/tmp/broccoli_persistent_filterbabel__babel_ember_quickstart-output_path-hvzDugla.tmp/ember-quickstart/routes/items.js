define('ember-quickstart/routes/items', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return ['Andrew WK', 'Girl Talk', 'Jerry'];
		}
	});
});