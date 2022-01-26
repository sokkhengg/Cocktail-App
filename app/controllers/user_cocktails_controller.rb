class UserCocktailsController < ApplicationController

    def index
        render json: UserCocktail.all
    end

    def user_cocktails_all
        user = User.find(params[:id]) #find current user
        cocktails = []

        # cocktail = HiddenCocktail.where(user_id: user.id)

        # # loop through all visible_cocktails and check the ingredient
        # button for hidden
        # user.hidden_cocktails.create(cocktail_id: 1)
        user.visible_cocktails.all.each do |c|
            ctail = c.ingredients.all? do |i|
                user.ingredients.include?(i)
            end

            if ctail 
                cocktails.push(c)
            end

        end
        render json: cocktails
    end

end