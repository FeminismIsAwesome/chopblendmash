var myApp = angular.module('chopblendmash', ['ngRoute', 'ngResource']); 
myApp.controller('RecipeController', ['$scope', function($scope) {
  $scope.preparationTechniques = ["Chop","Tear","Toss","Blend","Boil","Mash","Slice","Layer","Roast","Drizzle","Massage"];
}]);
myApp.config([
    '$routeProvider', function($routeProvider) {
    	$routeProvider.when('/', {
    		templateUrl: '/templates/recipes.html',
    		controller: 'RecipeController'
    	});
        $routeProvider.otherwise({
            templateUrl: '/templates/recipes.html',
            controller: 'RecipeController'
        });
    }
]);