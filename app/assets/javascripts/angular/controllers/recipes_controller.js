app.controller('RecipesController', ['$scope','$routeParams', 'foodService', 'stylingService', function($scope, $routeParams, foodService, stylingService) {
    var indexesForPreparation = [
    {index: 'indexForPreparation', list: 'preparationTechniques', routeId: 'prepId'},
    {index: 'indexForStyling', list: 'stylingTechniques', routeId: 'stylingId'},
    {index: 'indexForBody', list: 'bodyIngredients', routeId: 'bodyId'},
    {index: 'indexForSide', list: 'sideIngredients', routeId: 'sideId'},
    {index: 'indexForVegetableBase', list: 'vegetableBase', routeId: 'vegetableId'}];
    indexesForPreparation.forEach(function(index) {
      $scope[index.index] = parseInt($routeParams[index.routeId]) || 0;
    });
  
  $scope.saveLink = function() {
    alert(buildLink());
  }

  function buildLink() {
    var linkWithoutParams = window.location.href.split("?")[0];
    var routePiece = indexesForPreparation.map(function(index) {
      return "?" + index.routeId + "=" + $scope[index.index];
    }).join("&");
    return linkWithoutParams + routePiece;
  }

  $scope.makeRandom = function() {
    indexesForPreparation.forEach(function(index) {
      $scope[index.index] = random($scope[index.list].length);
    });
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
