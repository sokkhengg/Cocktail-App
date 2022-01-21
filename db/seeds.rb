puts "Destroying Seeds"

CocktailIngredient.destroy_all
Cocktail.destroy_all
Ingredient.destroy_all
UserCocktail.destroy_all
UserIngredient.destroy_all
User.destroy_all

puts "Replanting Seeds"


user0 = User.create(username: "Sean", password:"dfsdfsdf")
user1 = User.create(username: "Sok", password:"dfsdfsdf")
user2 = User.create(username: "Been", password:"dfsdfsdf")

ingredient1 = Ingredient.create(name: "Whiskey")
ingredient2 = Ingredient.create(name: "Lemon")
ingredient3 = Ingredient.create(name: "Ice")
ingredient4 = Ingredient.create(name: "Vermouth")
ingredient5 = Ingredient.create(name: "Gin")

cocktail1 = Cocktail.create(name: "Manhattan", instructions:"Mix well", alcoholic: "Non-alcoholic", category: "classic", image: "google.com", glass: "highball", iba: "new classic", ingredient_1_name: "lemon", ingredient_2_name: "whiskey", ingredient_3_name: "vermouth", ingredient_1_id: 2, ingredient_2_id: 1, ingredient_3_id: 4, measure_1: "1 oz", measure_2: "1 oz", measure_3: "1 oz")

cocktail2 = Cocktail.create(name: "Negroni", instructions:"Mix well", alcoholic: "Alcoholic", category: "classic", image: "google.com", glass: "highball", iba: "new classic", ingredient_1_name: "gin", ingredient_2_name: "lemon", ingredient_3_name: "vermouth", ingredient_1_id: 5, ingredient_2_id: 2, ingredient_3_id: 4, measure_1: "1 oz", measure_2: "1 oz", measure_3: "1 oz")

user_cocktail1 = UserCocktail.create(user_id: 1, cocktail_id: 1)
user_cocktail2 = UserCocktail.create(user_id: 1, cocktail_id: 2)
user_cocktail3 = UserCocktail.create(user_id: 2, cocktail_id: 1)
user_cocktail4 = UserCocktail.create(user_id: 3, cocktail_id: 1)
user_cocktail5 = UserCocktail.create(user_id: 3, cocktail_id: 2)

user_ingredient1 = UserIngredient.create(user_id: 1, ingredient_id: 1)
user_ingredient2 = UserIngredient.create(user_id: 1, ingredient_id: 5)
user_ingredient3 = UserIngredient.create(user_id: 2, ingredient_id: 3)
user_ingredient4 = UserIngredient.create(user_id: 2, ingredient_id: 3)
user_ingredient5 = UserIngredient.create(user_id: 3, ingredient_id: 1)
user_ingredient6 = UserIngredient.create(user_id: 3, ingredient_id: 2)
user_ingredient7 = UserIngredient.create(user_id: 3, ingredient_id: 3)

cocktail_ingredient1 = CocktailIngredient.create(cocktail_id:1, ingredient_id:2)
cocktail_ingredient2 = CocktailIngredient.create(cocktail_id:1, ingredient_id:1)
cocktail_ingredient3 = CocktailIngredient.create(cocktail_id:1, ingredient_id:4)
cocktail_ingredient4 = CocktailIngredient.create(cocktail_id:2, ingredient_id:5)
cocktail_ingredient5 = CocktailIngredient.create(cocktail_id:2, ingredient_id:2)
cocktail_ingredient6 = CocktailIngredient.create(cocktail_id:2, ingredient_id:4)



puts "Seeds Planted. Drink up"