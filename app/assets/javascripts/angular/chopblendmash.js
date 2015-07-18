var exampleApp = angular.module("chopblendmash", ["ngAnimate", "ngRoute"]);
exampleApp.directive('scroller',function() {
  return {
    transclude: true,
    templateUrl: '/templates/scroller.html',
    scope: {
      techniques: '='
    },
    link: function(scope, elem, attrs, ctrl, transcludeFn) {
      scope.currentIndex = 0;
      scope.test = 1;
      scope.currentTechnique = scope.techniques && scope.techniques[0];
      scope.switchTechnique = function() {
        scope.currentIndex = (scope.currentIndex + 1) % scope.techniques.length;
        scope.currentTechnique = scope.techniques[scope.currentIndex];
      }
      scope.displayCurrentTechnique = function(index) {
        return index === scope.currentIndex;
      }
    }
  };
});
exampleApp.controller('RecipesController', ['$scope', function($scope) {
  $scope.preparationTechniques = [{name: "Chop", description: "Create a one of a kind salad! Just chop all ingredients, toss with dressing and enjoy."},
  {name:"Blend", description: "Make a savory soup by boiling the ingredients and putting them plus 2 cups water and the sauce in the blender." },
  {name: "Mash", description: "Like mashed potatoes only better! Boil all ingredients, drain the water, add the sauce and mash them for a tasty glop."},
  {name: "Layer", description: "Make your own sandwich masterpiece. Thinly slice the first 2 ingredients and layer with the third between bread with a little sauce."},
  {name:"Roast",description:"For an easy dinner, simply mix or layer all ingredients in an oven-safe, oiled baking dish and bake at 350 degrees until tender."},
  {name: "Massage", description: "Instead of back massage try a salad assage! Chop all ingredients, drizzle with a (M) sauce and massage it with your hands for about a minute."},
  {name: "Cook", description: "Yum! Just chop all ingredients and add to an oiled, medium-high heated pan. Cook til slightly brown. Turn off heat, add sauce, and mix."}];
  $scope.stylingTechniques = [
  {name: "Sour", ingredients: ["1 part honey", "2 parts frozen orange juice", "10 parts plain yogurt", "cinnamon to taste"]},
  {name: "Sour", ingredients: ["1 part chopped dill", "2 parts lemon or dill pickle juice", "3 parts mayonaise"]},
  {name: "Salty", ingredients: ["1 part honey", "2 parts frozen orange juice", "10 parts plain yogurt", "cinnamon to taste"]},
  {name: "Savory", ingredients: ["1 part honey", "2 parts frozen orange juice", "10 parts plain yogurt", "cinnamon to taste"]},
  {name: "Tart", ingredients: ["1 part yogurt", "1 part shredded cucumber", "salt to taste", "lemon juice to taste", "chopped fresh dill to taste"]}
  ];
  $scope.bodyIngredients = [
    "Ground Beef",
    "Cheese",
    "Chicken",
    "Eggs",
    "Beans",
    "Bacon",
    "Nuts"
  ];
  $scope.sideIngredients = [
  "Carrot",
  "Broccoli",
  "Apple",
  "Berries",
  "Zucchini",
  "Tomato",
  "Beets"
  ];
  $scope.vegetableBase = [
    "Kale",
    "Spinach",
    "Basil",
    "Cabbage",
    "Arugula",
    "Leaf Lettuce",
    "Rainbow Chard"
  ];
}]);
exampleApp.config([
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