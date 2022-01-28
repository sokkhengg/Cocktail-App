class PopularCocktailSerializer < ActiveModel::Serializer
    attributes :cocktail_id, :like
    has_many :cocktails
  end
  