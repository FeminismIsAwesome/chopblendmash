var myApp = angular.module('chopblendmash', ['ngRoute', 'ngResource', 'ngAnimate']); 
myApp.controller('RecipeController', ['$scope', function($scope) {
  $scope.preparationTechniques = ["Chop","Tear","Toss","Blend","Boil","Mash","Slice","Layer","Roast","Drizzle","Massage"];
  $scope.stylingTechniques = [{name: "Sour", details: "This is the way to prepare sour foods."},{name: "Salty", details: "This is the way to prepare salty foods."}];
  $scope.currentStylingIndex = 0;
  $scope.currentPreparationIndex = 0;
  $scope.currentStylingTechnique = $scope.stylingTechniques[0];
  $scope.currentPreparationTechnique = $scope.preparationTechniques[0];
  $scope.switchStylingTechnique = function() {
    $scope.currentStylingIndex = ($scope.currentStylingIndex + 1) % $scope.stylingTechniques.length;
  }
    $scope.x = {edit: false};
  $scope.switchPreparationTechnique = function() {
     $scope.currentPreparationIndex = ($scope.currentPreparationIndex + 1) % $scope.preparationTechniques.length;
  }
  $scope.displayCurrentStyling = function(index) {
    return index === $scope.currentStylingIndex;
  }
  $scope.displayCurrentTechnique = function(index) {
    return index === $scope.currentPreparationIndex;
  }
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