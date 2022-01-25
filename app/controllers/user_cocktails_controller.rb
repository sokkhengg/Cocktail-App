class UserCocktailsController < ApplicationController

    def index
        render json: UserCocktail.all
    end

    def user_cocktails_all
        user = User.find(params[:id]) #find current user
        cocktails = []

        # # loop through all Cocktails and check the ingredient
        Cocktail.all.each do |c|
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