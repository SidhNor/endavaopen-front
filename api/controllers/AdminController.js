var AdminController = {

  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  index: function(req, res) {
    res.locals.layout = 'layouts/adminlayout';
    res.view({

    });
  }
};

module.exports = AdminController;
