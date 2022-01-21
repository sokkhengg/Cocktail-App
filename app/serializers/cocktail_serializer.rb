class CocktailSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :alcoholic, :category, :image, :glass, :iba, :ingredient_1_name, :ingredient_2_name, :ingredient_3_name, :ingredient_4_name, :ingredient_5_name, :ingredient_6_name, :ingredient_1_id, :ingredient_2_id, :ingredient_3_id, :ingredient_4_id, :ingredient_5_id, :ingredient_6_id, :measure_1, :measure_2, :measure_3, :measure_4, :measure_5, :measure_6
end
