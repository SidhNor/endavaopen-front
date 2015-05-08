var endavaopenadmin = angular.module('endavaopenadmin', ['ng-admin']);
endavaopenadmin.config(['NgAdminConfigurationProvider', function(nga) {
	var app = nga.application('Endava Open')
		.baseApiUrl('');

	var player = nga.entity('player')
		.label('Players')
		.identifier(nga.field('id'));
	var tournament = nga.entity('tournament')
		.label('Tournaments')
		.identifier(nga.field('id'));
	var round = nga.entity('round')
		.label('Rounds')
		.identifier(nga.field('id'));
	var match = nga.entity('match')
		.label('Matches (singles)')
		.identifier(nga.field('id'));
	var doublematch = nga.entity('doublematch')
		.label('Matches (doubles)')
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
		.sortField('precedence')
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
			nga.field('round')
				.map(function truncate(value, entry) {
					return value.name;
				}),
			nga.field('player1')
				.label('Title')
				.map(function truncate(value, entry) {
					var title = entry.player1.fullName;
					if (entry.set1) {
						title += ' (' + entry.set1 + ', ' + entry.set2 + ', ' + entry.set3 + ') ';
					}
					else {
						title += ' vs. ';
					}

					title += entry.player2.fullName;
					return title;
				})
				.isDetailLink(true),
			nga.field('date', 'datetime'),
			nga.field('location')
		])
		.listActions(['show', 'edit', 'delete']);
	match.creationView()
		.title('New Match')
		.fields([
			nga.field('date', 'datetime'),
			nga.field('player1', 'reference')
				.label('Player A')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('player2', 'reference')
				.label('Player B')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('round', 'reference')
				.targetEntity(round)
				.targetField(nga.field('name')),
			nga.field('location')
		]);
	match.editionView()
		.title('Edit Match')
		.fields([
			nga.field('date', 'datetime')
				.editable(false),
			nga.field('round')
				.map(function truncate(value, entry) {
					return value.name;
				})
				.editable(false),
			nga.field('date')
				.label('Title')
				.map(function truncate(value, entry) {
					if(entry && entry.player1 && entry.player2)
						return entry.player1.fullName + ' vs. ' + entry.player2.fullName;
				})
				.editable(false),
			nga.field('location')
				.editable(false),
			nga.field('set1'),
			nga.field('set2'),
			nga.field('set3'),
			nga.field('summary')
		]);
	//----------------------------------------------DOUBLE_MATCH

	app.addEntity(doublematch);
	doublematch.listView()
		.title('DoubleMatches')
		.fields([
			nga.field('round')
				.map(function truncate(value, entry) {
					return value.name;
				}),
			nga.field('player11')
				.label('Title')
				.map(function truncate(value, entry) {
					var title = entry.player11.fullName + ' & ' + entry.player12.fullName;
					if (entry.set1) {
						title += ' (' + entry.set1 + ', ' + entry.set2 + ', ' + entry.set3 + ') ';
					}
					else {
						title += ' vs. ';
					}

					title += entry.player21.fullName + ' & ' + entry.player22.fullName;
					return title;
				})
				.isDetailLink(true),
			nga.field('date', 'datetime'),
			nga.field('location')
		])
		.listActions(['show', 'edit', 'delete']);
	doublematch.creationView()
		.title('New DoubleMatch')
		.fields([
			nga.field('date', 'datetime'),
			nga.field('player11', 'reference')
				.label('Player A 1')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('player12', 'reference')
				.label('Player A 2')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('player21', 'reference')
				.label('Player B 1')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('player22', 'reference')
				.label('Player B 2')
				.targetEntity(player)
				.targetField(nga.field('fullName')),
			nga.field('round', 'reference')
				.targetEntity(round)
				.targetField(nga.field('name')),
			nga.field('location')
		]);
	doublematch.editionView()
		.title('Edit DoubleMatch')
		.fields([
			nga.field('date', 'datetime'),
			nga.field('round')
				.map(function truncate(value, entry) {
					return value.name;
				})
				.editable(false),
			nga.field('player11')
				.label('Title')
				.map(function truncate(value, entry) {
					if(entry.player11 && entry.player12 && entry.player21 && entry.player22) {
						var title = entry.player11.fullName + ' & ' + entry.player12.fullName;
						if (entry.set1) {
							title += ' (' + entry.set1 + ', ' + entry.set2 + ', ' + entry.set3 + ') ';
						}
						else {
							title += ' vs. ';
						}

						title += entry.player21.fullName + ' & ' + entry.player22.fullName;
						return title;
					}
				})
				.editable(false),
			nga.field('location')
				.editable(false),
			nga.field('set1'),
			nga.field('set2'),
			nga.field('set3'),
			nga.field('summary')
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
