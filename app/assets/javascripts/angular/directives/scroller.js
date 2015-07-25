app.directive('scroller',function() {
  return {
    transclude: true,
    templateUrl: '/templates/scroller.html',
    scope: {
      techniques: '=',
      currentIndex: '='
    },
    link: function(scope, elem, attrs, ctrl, transcludeFn) {
      scope.currentTechnique = scope.techniques && scope.techniques[0];
      scope.switchTechnique = function() {
        scope.currentIndex = (scope.currentIndex + 1) % scope.techniques.length;
      }
      scope.$watch('currentIndex', function(newValue, oldValue) {
        scope.currentTechnique = scope.techniques[newValue];
        scope.currentBackgroundImage = scope.currentTechnique.imageURL;
      });
      scope.displayCurrentTechnique = function(index) {
        return index === scope.currentIndex;
      }
    }
  };
});