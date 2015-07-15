describe("RecipesController", function() {
	beforeEach(module('chopblendmash'));
	controller = undefined;
	scope = {};
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller('RecipeController', {$scope: scope});
	}));
	it("Should have a list of ways to mash", function() {
		expect(scope.preparationTechniques).toMatch("Chop");
		expect(scope.preparationTechniques).toMatch("Blend");
		expect(scope.preparationTechniques).toMatch("Mash");
	});
	it("Should have a list of different ways to style the food", function() {
		expect(scope.stylingTechniques[0].name).toEqual("Sour");
		expect(scope.stylingTechniques[0].details).toEqual("This is the way to prepare sour foods.");
	});
});