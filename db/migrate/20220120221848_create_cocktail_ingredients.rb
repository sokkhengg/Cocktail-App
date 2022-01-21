class CreateCocktailIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :cocktail_ingredients do |t|
      t.references :ingredient
      t.references :cocktail
      
      t.timestamps
    end
  end
end
