class Cocktail < ApplicationRecord
    has_many :ingredients
    has_many :cocktail_ingredients
    has_many :user_cocktails

    validates :name, :instructions, :ingredient_1_name, :ingredient_2_name,
    :ingredient_3_name, :ingredient_1_id, :ingredient_2_id, :ingredient_3_id, :measure_1, :measure_2, :measure_3, presence: true

end
