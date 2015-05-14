module.exports = {

	indoor: function(req, res) {
		res.locals.layout = 'layouts/blank';
		res.view({});
	},

	schedule: function(req, res) {
    var tourId = req.param('tour');
    tournament.findOne({ id: tourId }, function(err, tournament) {
      res.locals.layout = 'layouts/blank';
      if (typeof err === 'undefined') {
        res.view({indoor: false });
      } else {
        res.view({indoor: tournament.indoor });
      }
    });
	},

	outdoor: function(req, res) {
		res.locals.layout = 'layouts/blank';
		res.view({});
	},

  description: function(req, res) {
    res.locals.layout = 'layouts/blank';
    res.view({});
  },

  rules: function(req, res) {
    res.locals.layout = 'layouts/blank';
    res.view({});
  }
};

