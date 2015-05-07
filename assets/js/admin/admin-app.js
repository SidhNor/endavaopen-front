var endavaopenadmin = angular.module('endavaopenadmin', ['ng-admin']);
endavaopenadmin.config(['NgAdminConfigurationProvider', function(nga) {
	var app = nga.application('Endava Open')
		.baseApiUrl('');

	var player = nga.entity('player')
		.identifier(nga.field('id'));
	var tournament = nga.entity('tournament')
		.identifier(nga.field('id'));
	var round = nga.entity('round')
		.identifier(nga.field('id'));
	var match = nga.entity('match')
		.identifier(nga.field('id'));
	var doublematch = nga.entity('doublematch')
		.identifier(nga.field('id'));
	var score = nga.entity('score')
		.identifier(nga.field('id'));
	//----------------------------------------------PLAYER
	app.addEntity(player);
	player.listView()
		.title('Players')
		.fields([
			nga.field('id'),
			nga.field('fullName'),
			nga.field('deliveryUnit'),
			nga.field('jobTitle'),
			nga.field('seedNumber'),
			nga.field('createdAt', 'datetime')
		])
		.listActions(['show', 'edit', 'delete']);
	player.creationView()
		.title('New Player')
		.fields([
			nga.field('fullName'),
			nga.field('photoUri'),
			nga.field('hqPhotoUri'),
			nga.field('deliveryUnit'),
			nga.field('jobTitle'),
			nga.field('description'),
			nga.field('seedNumber')
		]);
	player.editionView()
		.title('Edit Player')
		.fields([
			nga.field('fullName'),
			nga.field('photoUri'),
			nga.field('hqPhotoUri'),
			nga.field('deliveryUnit'),
			nga.field('jobTitle'),
			nga.field('description'),
			nga.field('seedNumber')
		]);
	player.showView()
		.title('Player Details')
		.fields([
			nga.field('id'),
			nga.field('fullName'),
			nga.field('photoUri'),
			nga.field('hqPhotoUri'),
			nga.field('deliveryUnit'),
			nga.field('jobTitle'),
			nga.field('description'),
			nga.field('seedNumber'),
			nga.field('createdAt', 'datetime'),
			nga.field('updatedAt', 'datetime')
		]);
	//----------------------------------------------TOURNAMENT

	app.addEntity(tournament);
	tournament.listView()
		.title('Tournaments')
		.fields([
			nga.field('id'),
			nga.field('name'),
			nga.field('started')
		])
		.listActions(['show', 'edit', 'delete']);
	tournament.creationView()
		.title('New Tournament')
		.fields([
			nga.field('name'),
			nga.field('started')
		]);
	tournament.editionView()
		.title('Edit Tournament')
		.fields([
			nga.field('name'),
			nga.field('started')
		]);
	tournament.showView()
		.title('Tournament Details')
		.fields([
			nga.field('name'),
			nga.field('started')
		]);
	//----------------------------------------------ROUND

	app.addEntity(round);
	round.listView()
		.title('Rounds')
		.fields([
			nga.field('id'),
			nga.field('name'),
			nga.field('day', 'datetime'),
			nga.field('precedence'),
			nga.field('tournament')
				.map(function truncate(value, entry) {
					return value.name;
				})
		])
		.listActions(['show', 'edit', 'delete']);
	round.creationView()
		.title('New Round')
		.fields([
			nga.field('name'),
			nga.field('day', 'datetime'),
			nga.field('precedence'),
			nga.field('tournament', 'reference')
				.targetEntity(tournament)
				.targetField(nga.field('name'))
		]);
	round.editionView()
		.title('Edit Round')
		.fields([
			nga.field('name'),
			nga.field('day', 'datetime'),
			nga.field('precedence'),
			nga.field('tournament', 'reference')
				.targetEntity(tournament)
				.targetField(nga.field('name'))
		]);
	round.showView()
		.title('Round Details')
		.fields([
			nga.field('id'),
			nga.field('name'),
			nga.field('day', 'datetime'),
			nga.field('precedence'),
			nga.field('tournament')
				.map(function truncate(value, entry) {
					return value.name;
				})
		]);
	//----------------------------------------------MATCH

	app.addEntity(match);
	match.listView()
		.title('Matches')
		.fields([
			nga.field('id'),
			nga.field('date', 'datetime'),
			nga.field('location'),
			nga.field('player1')
				.map(function truncate(value, entry) {
					return value.fullName;
				}),
			nga.field('player2')
				.map(function truncate(value, entry) {
					return value.fullName;
				}),
			nga.field('round')
				.map(function truncate(value, entry) {
					return value.name;
				}),
		])
		.listActions(['show', 'edit', 'delete']);
	match.creationView()
		.title('New Match')
		.fields([
			nga.field('date', 'datetime'),
			nga.field('location'),
			nga.field('player1', 'reference')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('player2', 'reference')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('round', 'reference')
				.targetEntity(round)
				.targetField(nga.field('name'))
		]);
	match.editionView()
		.title('Edit Match')
		.fields([
			nga.field('date', 'datetime'),
			nga.field('location'),
			nga.field('player1', 'reference')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('player2', 'reference')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('round', 'reference')
				.targetEntity(round)
				.targetField(nga.field('name'))
		]);
	match.showView()
		.title('Match Details')
		.fields([
			nga.field('id'),
			nga.field('date', 'datetime'),
			nga.field('location'),
			nga.field('player1')
				.map(function truncate(value, entry) {
					return value.fullName;
				}),
			nga.field('player2')
				.map(function truncate(value, entry) {
					return value.fullName;
				}),
			nga.field('round')
				.map(function truncate(value, entry) {
					return value.name;
				}),
		]);
	//----------------------------------------------DOUBLE_MATCH

	app.addEntity(doublematch);
	doublematch.listView()
		.title('DoubleMatches')
		.fields([
			nga.field('id'),
			nga.field('date', 'datetime'),
			nga.field('location'),
			nga.field('player11')
				.map(function truncate(value, entry) {
					return value.fullName;
				}),
			nga.field('player12')
				.map(function truncate(value, entry) {
					return value.fullName;
				}),
			nga.field('player21')
				.map(function truncate(value, entry) {
					return value.fullName;
				}),
			nga.field('player22')
				.map(function truncate(value, entry) {
					return value.fullName;
				}),
			nga.field('round')
				.map(function truncate(value, entry) {
					return value.name;
				}),
		])
		.listActions(['show', 'edit', 'delete']);
	doublematch.creationView()
		.title('New DoubleMatch')
		.fields([
			nga.field('date', 'datetime'),
			nga.field('location'),
			nga.field('player11', 'reference')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('player12', 'reference')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('player21', 'reference')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('player22', 'reference')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('round', 'reference')
				.targetEntity(round)
				.targetField(nga.field('name'))
		]);
	doublematch.editionView()
		.title('Edit DoubleMatch')
		.fields([
			nga.field('date', 'datetime'),
			nga.field('location'),
			nga.field('player11', 'reference')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('player12', 'reference')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('player21', 'reference')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('player22', 'reference')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('round', 'reference')
				.targetEntity(round)
				.targetField(nga.field('name'))
		]);
	doublematch.showView()
		.title('DoubleMatch Details')
		.fields([
			nga.field('id'),
			nga.field('date', 'datetime'),
			nga.field('location'),
			nga.field('player11')
				.map(function truncate(value, entry) {
					return value.fullName;
				}),
			nga.field('player12')
				.map(function truncate(value, entry) {
					return value.fullName;
				}),
			nga.field('player21')
				.map(function truncate(value, entry) {
					return value.fullName;
				}),
			nga.field('player22')
				.map(function truncate(value, entry) {
					return value.fullName;
				}),
			nga.field('round')
				.map(function truncate(value, entry) {
					return value.name;
				}),
		]);
	//----------------------------------------------SCORE

	app.addEntity(score);
	score.listView()
		.title('Scores')
		.fields([
			nga.field('id'),
			nga.field('set1'),
			nga.field('set2'),
			nga.field('set3'),
			nga.field('summary'),
			nga.field('match')
				.map(function truncate(value, entry) {
					return value.player1.fullName + " vs. " + value.player2.fullName + " : " + value.date;
				})
		])
		.listActions(['show', 'edit', 'delete']);
	score.creationView()
		.title('New Score')
		.fields([
			nga.field('set1'),
			nga.field('set2'),
			nga.field('set3'),
			nga.field('summary'),
			nga.field('match', 'reference')
				.targetEntity(match)
				.targetField(nga.field('player1')
					.map(function truncate(value, entry) {
						return entry.player1.fullName + " vs. " + entry.player2.fullName + " : " + entry.date;
					}))
		]);
	score.editionView()
		.title('Edit Score')
		.fields([
			nga.field('set1'),
			nga.field('set2'),
			nga.field('set3'),
			nga.field('summary'),
			nga.field('match', 'reference')
				.targetEntity(match)
				.targetField(nga.field('player1')
					.map(function truncate(value, entry) {
						return entry.player1.fullName + " vs. " + entry.player2.fullName + " : " + entry.date;
					}))
		]);
	score.showView()
		.title('Score Details')
		.fields([
			nga.field('id'),
			nga.field('set1'),
			nga.field('set2'),
			nga.field('set3'),
			nga.field('summary'),
			nga.field('match')
				.map(function truncate(value, entry) {
					return entry.player1.fullName + " vs. " + entry.player2.fullName + " : " + entry.date;
				})
		]);
	nga.configure(app);
}]);

endavaopenadmin.config(["RestangularProvider", function(rp) {
	rp.addFullRequestInterceptor(function(element, operation, what, url, headers, params, httpConfig) {
		if (operation == 'getList') {
			params.skip = (params._page - 1) * params._perPage;
			params.limit = params._perPage;
			params.sort = params._sortField + " " + params._sortDir;
			delete params._page;
			delete params._perPage;
			delete params._sortDir;
			delete params._sortField;
		}

		return { params: params };
	});
}]);
