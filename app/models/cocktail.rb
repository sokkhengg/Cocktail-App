class Cocktail < ApplicationRecord
    has_many :ingredients
    has_many :cocktail_ingredients
    has_many :ingredients, through: :cocktail_ingredients
    has_many :user_cocktails
    has_many :users, through: :user_cocktail
    has_many :hidden_cocktails

    # validates :name, :instructions, :ingredient_1_name, :ingredient_2_name, :ingredient_1_id, :ingredient_2_id, :measure_1, :measure_2, presence: true

    def as_json(options={})
        super(options).reject { |k, v| v.nil? || v === 0 }
    end

    # All user can view all cocktails.
    #  Current user can "hide the cocktails". Then the cocktails it is not shown, but shown to users who do not have hidden cocktails
    def self.visible_for_user(user)
        # byebug
        subquery = user.hidden_cocktails.select("hidden_cocktails.cocktail_id").to_sql
        where("cocktails.id NOT IN (#{subquery})")
    end
    

end
