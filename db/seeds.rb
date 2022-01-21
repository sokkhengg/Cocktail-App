require 'csv'

puts "Destroying Seeds"

CocktailIngredient.destroy_all
Cocktail.destroy_all
Ingredient.destroy_all
UserCocktail.destroy_all
UserIngredient.destroy_all
User.destroy_all

puts "Replanting Seeds"


csv_text = File.read(Rails.root.join('lib', 'seeds', 'Cocktail App Data - Final - Ingredients.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    t = Ingredient.new
    t.name = row['ingredient_name']
    t.save
    puts "#{t.name} saved"
  end

puts "There are now #{Ingredient.count} rows in the ingredients table"

csv_text = File.read(Rails.root.join('lib', 'seeds', 'Cocktail App Data - Final - Cleaned Cocktails.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Cocktail.create!
  t.name = row['cocktail_name']
  t.instructions = row['instructions']
  t.alcoholic = row['alcoholic']
  t.category = row['category']
  t.image = row['cocktail_image']
  t.glass = row['cocktail_glass']
  t.iba = row['iba']
  t.ingredient_1_name = row['ingredient_1_name']
  t.ingredient_2_name = row['ingredient_2_name']
  t.ingredient_3_name = row['ingredient_3_name']
  t.ingredient_4_name = row['ingredient_4_name']
  t.ingredient_5_name = row['ingredient_5_name']
  t.ingredient_6_name = row['ingredient_6_name']
  t.ingredient_1_id = row['ingredient_1_id']
  t.ingredient_2_id = row['ingredient_2_id']
  t.ingredient_3_id = row['ingredient_3_id']
  t.ingredient_4_id = row['ingredient_4_id']
  t.ingredient_5_id = row['ingredient_5_id']
  t.ingredient_6_id = row['ingredient_6_id']
  t.measure_1 = row['measure_1']
  t.measure_2 = row['measure_2']
  t.measure_3 = row['measure_3']
  t.measure_4 = row['measure_4']
  t.measure_5 = row['measure_5']
  t.measure_6 = row['measure_6']


  t.save
  puts "#{t.name} saved"
end

puts "There are now #{Cocktail.count} rows in the cocktails table"
 

user0 = User.create(username: "Sean", password:"asdf")
user1 = User.create(username: "Sok", password:"asdf")
user2 = User.create(username: "Been", password:"asdf")

# ingredient1 = Ingredient.create(name: "Whiskey")
# ingredient2 = Ingredient.create(name: "Lemon")
# ingredient3 = Ingredient.create(name: "Ice")
# ingredient4 = Ingredient.create(name: "Vermouth")
# ingredient5 = Ingredient.create(name: "Gin")

# cocktail1 = Cocktail.create(name: "Manhattan", instructions:"Mix well", alcoholic: "Non-alcoholic", category: "classic", image: "google.com", glass: "highball", iba: "new classic", ingredient_1_name: "lemon", ingredient_2_name: "whiskey", ingredient_3_name: "vermouth", ingredient_1_id: 2, ingredient_2_id: 1, ingredient_3_id: 4, measure_1: "1 oz", measure_2: "1 oz", measure_3: "1 oz")

# cocktail2 = Cocktail.create(name: "Negroni", instructions:"Mix well", alcoholic: "Alcoholic", category: "classic", image: "google.com", glass: "highball", iba: "new classic", ingredient_1_name: "gin", ingredient_2_name: "lemon", ingredient_3_name: "vermouth", ingredient_1_id: 5, ingredient_2_id: 2, ingredient_3_id: 4, measure_1: "1 oz", measure_2: "1 oz", measure_3: "1 oz")

# user_cocktail1 = UserCocktail.create(user_id: 1, cocktail_id: 1)
# user_cocktail2 = UserCocktail.create(user_id: 1, cocktail_id: 2)
# user_cocktail3 = UserCocktail.create(user_id: 2, cocktail_id: 1)
# user_cocktail4 = UserCocktail.create(user_id: 3, cocktail_id: 1)
# user_cocktail5 = UserCocktail.create(user_id: 3, cocktail_id: 2)

# user_ingredient1 = UserIngredient.create(user_id: 1, ingredient_id: 1)
# user_ingredient2 = UserIngredient.create(user_id: 1, ingredient_id: 5)
# user_ingredient3 = UserIngredient.create(user_id: 2, ingredient_id: 3)
# user_ingredient4 = UserIngredient.create(user_id: 2, ingredient_id: 3)
# user_ingredient5 = UserIngredient.create(user_id: 3, ingredient_id: 1)
# user_ingredient6 = UserIngredient.create(user_id: 3, ingredient_id: 2)
# user_ingredient7 = UserIngredient.create(user_id: 3, ingredient_id: 3)

# cocktail_ingredient1 = CocktailIngredient.create(cocktail_id:1, ingredient_id:2)
# cocktail_ingredient2 = CocktailIngredient.create(cocktail_id:1, ingredient_id:1)
# cocktail_ingredient3 = CocktailIngredient.create(cocktail_id:1, ingredient_id:4)
# cocktail_ingredient4 = CocktailIngredient.create(cocktail_id:2, ingredient_id:5)
# cocktail_ingredient5 = CocktailIngredient.create(cocktail_id:2, ingredient_id:2)
# cocktail_ingredient6 = CocktailIngredient.create(cocktail_id:2, ingredient_id:4)



puts "Seeds Planted. Drink up"