var endavaopenadmin = angular.module('endavaopenadmin', ['ng-admin']);
endavaopenadmin.config(['NgAdminConfigurationProvider', function(nga) {
	var app = nga.application('Endava Open')
		.baseApiUrl('http://localhost:1337/');
		
	var player = nga.entity('player')
		.identifier(nga.field('id'));
		
	app.addEntity(player);
	player.listView()
		.title('Players')
		.fields([
			nga.field('id'),
			nga.field('fullName'),
			nga.field('deliveryUnit'),
			nga.field('jobTitle'),
			nga.field('seedNumber'),
			nga.field('createdAt')
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
			nga.field('createdAt'),
			nga.field('updatedAt')
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