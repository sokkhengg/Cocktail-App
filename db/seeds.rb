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
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'Cocktail App Data - Final - Cleaned Cocktails.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  cocktail = Cocktail.find_or_create_by(name:row['cocktail_name'])

  ingredient_1_name = Ingredient.find_or_create_by(name:row['ingredient_1_name'])
  ingredient_2_name = Ingredient.find_or_create_by(name:row['ingredient_2_name'])
  ingredient_3_name = Ingredient.find_or_create_by(name:row['ingredient_3_name'])
  ingredient_4_name = Ingredient.find_or_create_by(name:row['ingredient_4_name'])
  ingredient_5_name = Ingredient.find_or_create_by(name:row['ingredient_5_name'])
  ingredient_6_name = Ingredient.find_or_create_by(name:row['ingredient_6_name'])

  measure_1 = row['measure_1']
  measure_2 = row['measure_2']
  measure_3 = row['measure_3']
  measure_4 = row['measure_4']
  measure_5 = row['measure_5']
  measure_6 = row['measure_6']

  CocktailIngredient.create(cocktail:cocktail, ingredient:ingredient_1_name, measure:measure_1)
  CocktailIngredient.create(cocktail:cocktail, ingredient:ingredient_2_name, measure:measure_2)
  CocktailIngredient.create(cocktail:cocktail, ingredient:ingredient_3_name, measure:measure_3)
  CocktailIngredient.create(cocktail:cocktail, ingredient:ingredient_4_name, measure:measure_4)
  CocktailIngredient.create(cocktail:cocktail, ingredient:ingredient_5_name, measure:measure_5)
  CocktailIngredient.create(cocktail:cocktail, ingredient:ingredient_6_name, measure:measure_6)

end 

user0 = User.create(username: "Sean", password:"asdf")
user1 = User.create(username: "Sok", password:"asdf")
user2 = User.create(username: "Been", password:"asdf")

UserCocktail.create(user_id: 3, cocktail_id:1)
UserCocktail.create(user_id: 3, cocktail_id:2)
UserCocktail.create(user_id: 3, cocktail_id:3)
UserCocktail.create(user_id: 3, cocktail_id:4)
UserCocktail.create(user_id: 3, cocktail_id:5)
UserCocktail.create(user_id: 3, cocktail_id:6)


puts "Seeds Planted. Drink up"