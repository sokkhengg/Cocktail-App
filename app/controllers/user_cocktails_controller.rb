class UserCocktailsController < ApplicationController

    def index
        render json: UserCocktail.all
    end

    def create
        existing_record = UserCocktail.find_by_user_id_and_cocktail_id(params[:user_id],params[:cocktail_id])

        if existing_record
            existing_record.update!(:like=>[:like])
            render json: {"message: " => "Updated record"}, status: :ok
        else
            new_like = UserCocktail.create!(:user_id=> params[:user_id], :cocktail_id=> params[:cocktail_id], :like=>[:like])
            render json: new_like, status: :ok
        end
    end

    def show
        user_cocktails = UserCocktail.where(:user_id => params[:id])
        render json: user_cocktails, status: :ok
    end

    def user_cocktails_all
        user = User.find(params[:id]) #find current user
        cocktails = []

        # # loop through all Cocktails and check the ingredient
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