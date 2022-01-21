class UserCocktailsController < ApplicationController

    def index
        render json: UserCocktail.all
    end

end
