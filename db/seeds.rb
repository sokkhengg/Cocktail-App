# db/seeds.rb

require 'csv'

puts "Destroying existing data..."

# Destroy existing records to start fresh
CocktailIngredient.destroy_all
Cocktail.destroy_all
Ingredient.destroy_all
UserCocktail.destroy_all
UserIngredient.destroy_all
User.destroy_all

puts "Seeding ingredients..."

ingredients_csv = File.read(Rails.root.join('lib', 'seeds', 'Cocktail App Data - Final - Ingredients.csv'))
ingredients = CSV.parse(ingredients_csv, headers: true, encoding: 'ISO-8859-1')

ingredients.each do |row|
  ingredient_name = row['ingredient_name']
  ingredient_id = row['ingredient_id'].to_i

  if ingredient_name.present?
    Ingredient.create!(id: ingredient_id, name: ingredient_name)
  end
end

puts "Seeded #{Ingredient.count} ingredients."


puts "Seeding cocktails..."

# Read cocktails from CSV and create Cocktail records
cocktails_csv = File.read(Rails.root.join('lib', 'seeds', 'Cocktail App Data - Final - Cleaned Cocktails.csv'))
cocktails = CSV.parse(cocktails_csv, headers: true, encoding: 'ISO-8859-1')

cocktails.each do |row|
  # Skip the cocktail if it doesn't have a name
  next unless row['cocktail_name'].present?

  # Create the Cocktail record
  cocktail = Cocktail.create!(
    name: row['cocktail_name'],
    instructions: row['instructions'],
    alcoholic: row['alcoholic'],
    category: row['category'],
    image: row['cocktail_image'],
    glass: row['cocktail_glass'],
    iba: row['iba'],
    ingredient_1_name: row['ingredient_1_name'],
    ingredient_2_name: row['ingredient_2_name'],
    ingredient_3_name: row['ingredient_3_name'],
    ingredient_4_name: row['ingredient_4_name'],
    ingredient_5_name: row['ingredient_5_name'],
    ingredient_6_name: row['ingredient_6_name'],
    ingredient_1_id: row['ingredient_1_id'],
    ingredient_2_id: row['ingredient_2_id'],
    ingredient_3_id: row['ingredient_3_id'],
    ingredient_4_id: row['ingredient_4_id'],
    ingredient_5_id: row['ingredient_5_id'],
    ingredient_6_id: row['ingredient_6_id'],
    measure_1: row['measure_1'],
    measure_2: row['measure_2'],
    measure_3: row['measure_3'],
    measure_4: row['measure_4'],
    measure_5: row['measure_5'],
    measure_6: row['measure_6']
  )

  # Associate ingredients with the cocktail
  (1..6).each do |i|
    ingredient_name = row["ingredient_#{i}_name"]
    measure = row["measure_#{i}"]

    next unless ingredient_name.present?

    # Find or create the ingredient
    ingredient = Ingredient.find_or_create_by!(name: ingredient_name)

    # Create the CocktailIngredient association
    CocktailIngredient.create!(
      cocktail: cocktail,
      ingredient: ingredient,
      measure: measure
    )
  end
end

puts "Seeded #{Cocktail.count} cocktails."

puts "Creating test users..."

# Create test users
user1 = User.create!(username: "Sean", password: "password1")
user2 = User.create!(username: "Sok", password: "password2")
user3 = User.create!(username: "Ben", password: "password3")

puts "Created test users: Sean, Sok, Ben."

puts "Assigning default ingredients to test users..."

# Find the default ingredient by name
default_ingredient = Ingredient.find_by(name: '151 proof rum')

if default_ingredient
  [user1, user2, user3].each do |user|
    UserIngredient.create!(user: user, ingredient: default_ingredient)
  end
  puts "Assigned default ingredients to test users."
else
  puts "Error: Default ingredient '151 proof rum' not found."
end


puts "Seeding complete."
