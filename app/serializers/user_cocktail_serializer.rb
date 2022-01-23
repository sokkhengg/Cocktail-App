class UserCocktailSerializer < ActiveModel::Serializer
  attributes :id
has_one :cocktail
  has_one :user
end
