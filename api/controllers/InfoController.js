module.exports = {

	indoor: function(req, res) {
		res.locals.layout = 'layouts/blank';
		res.view({});
	},

	outdoor: function(req, res) {
		res.locals.layout = 'layouts/blank';
		res.view({});
	}
}