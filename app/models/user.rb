class User < ApplicationRecord
    has_many :user_ingredients
    has_many :ingredients, through: :user_ingredients
    has_many :user_cocktails
    has_many :cocktails, through: :user_cocktail
    has_many :hidden_cocktails

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :username, length: { in: 3..30}

    validates :password, length: { in: 1..20, message: "Password should be between 8 and 20 characters." }

    def visible_cocktails
        Cocktail.visible_for_user(self)
    end     
    # get the non-hidden items for a user
    # user = User.find(1)
    # ap user.visible_cocktails

end
