app.controller('RecipesController', ['$scope','$routeParams', 'foodService', 'stylingService', function($scope, $routeParams, foodService, stylingService) {
    $scope.indexForPreparation = parseInt($routeParams.prepId) || 0;
    $scope.indexForStyling = parseInt($routeParams.stylingId) || 0;
    $scope.indexForBody = parseInt($routeParams.bodyId) || 0;
    $scope.indexForSide = parseInt($routeParams.sideId) || 0;
    $scope.indexForVegetableBase = parseInt($routeParams.vegetableId) || 0;
  
  $scope.saveLink = function() {
    alert(buildLink($scope.indexForPreparation, $scope.indexForStyling, $scope.indexForBody, $scope.indexForSide, $scope.indexForVegetableBase));
  }

  function buildLink(prepId, stylingId, bodyId, sideId, vegetableId) {
    var linkWithoutParams = window.location.href.split("?")[0];
    return linkWithoutParams + "?prepId=" + prepId + "&stylingId=" + stylingId + "&bodyId=" + bodyId + "&sideId=" + sideId + "&vegetableId=" + vegetableId;
  }

  $scope.makeRandom = function() {
    $scope.indexForPreparation = random($scope.preparationTechniques.length);
    $scope.indexForStyling = random($scope.stylingTechniques.length);
    $scope.indexForBody = random($scope.bodyIngredients.length);
    $scope.indexForSide = random($scope.sideIngredients.length);
    $scope.indexForVegetableBase = random($scope.vegetableBase.length);
    console.log($scope.indexForPreparation);
  }; 
  function random(max) {
    return Math.floor(max * Math.random());
  };
  $scope.preparationTechniques = stylingService.getPreparationTechniques();
  $scope.stylingTechniques = stylingService.getStylingTechniques();
  $scope.bodyIngredients = foodService.getBodyIngredients();
  $scope.sideIngredients = foodService.getSideIngredients();
  $scope.vegetableBase = foodService.getVegetables();
}]);
