app.service('stylingService', function() {
	return {
		getStylingTechniques: function() {
			return [
			  {name: "Sour", ingredients: ["1 part honey", "2 parts frozen orange juice", "10 parts plain yogurt", "cinnamon to taste"]},
			  {name: "Sour", ingredients: ["1 part chopped dill", "2 parts lemon or dill pickle juice", "3 parts mayonaise"]},
			  {name: "Salty", ingredients: ["1 part honey", "2 parts frozen orange juice", "10 parts plain yogurt", "cinnamon to taste"]},
			  {name: "Savory", ingredients: ["1 part honey", "2 parts frozen orange juice", "10 parts plain yogurt", "cinnamon to taste"]},
			  {name: "Tart", ingredients: ["1 part yogurt", "1 part shredded cucumber", "salt to taste", "lemon juice to taste", "chopped fresh dill to taste"]},
			  {name: "Asian", ingredients: ["1 part sugar", "1 part soy sauce", "2 parts rice vinegar", "8 parts peanut butter", "salt and pepper to taste"]},
			  {name: "Spicy", ingredients: ["1 part turmeric","1 part cumin","1 part coriander", "15 parts mayonaise", "black pepper to taste"]}
			  ];
		},
		getPreparationTechniques: function() {
			return [{name: "Chop", description: "Create a one of a kind salad! Just chop all ingredients, toss with dressing and enjoy."},
				  {name:"Blend", description: "Make a savory soup by boiling the ingredients and putting them plus 2 cups water and the sauce in the blender." },
				  {name: "Mash", description: "Like mashed potatoes only better! Boil all ingredients, drain the water, add the sauce and mash them for a tasty glop."},
				  {name: "Layer", description: "Make your own sandwich masterpiece. Thinly slice the first 2 ingredients and layer with the third between bread with a little sauce."},
				  {name:"Roast",description:"For an easy dinner, simply mix or layer all ingredients in an oven-safe, oiled baking dish and bake at 350 degrees until tender."},
				  {name: "Massage", description: "Instead of back massage try a salad assage! Chop all ingredients, drizzle with a (M) sauce and massage it with your hands for about a minute."},
				  {name: "Cook", description: "Yum! Just chop all ingredients and add to an oiled, medium-high heated pan. Cook til slightly brown. Turn off heat, add sauce, and mix."}];
		}
	}
})