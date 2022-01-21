class Ingredient < ApplicationRecord
    has_many :user_ingredients
    has_many :users, through: :user_ingredients
    has_many :cocktail_ingredients
end
