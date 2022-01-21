class User < ApplicationRecord
    has_many :user_ingredients
    has_many :user_cocktails
    has_many :ingredients, through: :user_ingredients

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :username, length: { in: 3..30}
    # validates :password, length: { in: 8..20, message: "Password should be between 8 and 20 characters." }
end
