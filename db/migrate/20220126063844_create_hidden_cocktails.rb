class CreateHiddenCocktails < ActiveRecord::Migration[6.1]
  def change
    create_table :hidden_cocktails do |t|
      t.references :user
      t.references :cocktail
      
      t.timestamps
    end
  end
end
