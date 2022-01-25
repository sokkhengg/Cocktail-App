class AddFieldsToUserCocktails < ActiveRecord::Migration[6.1]
  def change
    add_column :user_cocktails, :review, :string
    add_column :user_cocktails, :made, :boolean
    add_column :user_cocktails, :like, :boolean
  end
end
