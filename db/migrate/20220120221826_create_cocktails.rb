class CreateCocktails < ActiveRecord::Migration[6.1]
  def change
    create_table :cocktails do |t|
      t.string :name
      t.string :instructions
      t.string :alcoholic
      t.string :category
      t.string :image
      t.string :glass
      t.string :iba
      t.string :ingredient_1_name
      t.string :ingredient_2_name
      t.string :ingredient_3_name
      t.string :ingredient_4_name
      t.string :ingredient_5_name
      t.string :ingredient_6_name
      t.integer :ingredient_1_id
      t.integer :ingredient_2_id
      t.integer :ingredient_3_id
      t.integer :ingredient_4_id
      t.integer :ingredient_5_id
      t.integer :ingredient_6_id
      t.string :measure_1
      t.string :measure_2
      t.string :measure_3
      t.string :measure_4
      t.string :measure_5
      t.string :measure_6

      t.timestamps
    end
  end
end
