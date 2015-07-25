app.config([
    '$routeProvider', function($routeProvider) {
    	$routeProvider.when('/', {
    		templateUrl: '/templates/recipes.html',
    		controller: 'RecipesController'
    	});
        $routeProvider.otherwise({
            templateUrl: '/templates/recipes.html',
            controller: 'RecipesController'
        });
    }
]);