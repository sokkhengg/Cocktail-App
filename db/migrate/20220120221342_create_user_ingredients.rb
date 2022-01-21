class CreateUserIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :user_ingredients do |t|
      t.references :user
      t.references :ingredient
      t.timestamps
    end
  end
end
