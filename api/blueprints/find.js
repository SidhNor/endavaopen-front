var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

module.exports = function (req, res) {
  if (actionUtil.parsePk(req)) {
    return require('./findOne')(req, res);
  }

  var Model = actionUtil.parseModel(req),
    where = actionUtil.parseCriteria(req),
    limit = actionUtil.parseLimit(req),
    skip = actionUtil.parseSkip(req),
    sort = actionUtil.parseSort(req),
    query = Model.find().where(where).limit(limit).skip(skip).sort(sort);

  query = actionUtil.populateEach(query, req);
  query.exec(function (error, records) {
    if (error) {
      return res.serverError(error);
    }

    Model
      .count(where)
      .exec(function (error, count) {
        if (error) {
          return res.serverError(error);
        }

        var metaInfo = {
          start: skip,
          end: skip + limit,
          limit: limit,
          total: count,
          criteria: where
        };

        res.set('Content-Range', metaInfo.start + '-' + metaInfo.end + '/' + metaInfo.total);

        return res.ok(records, null, null, metaInfo);
      });
  });
};
