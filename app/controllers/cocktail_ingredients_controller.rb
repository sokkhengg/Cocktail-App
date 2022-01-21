class CocktailIngredientsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
      render json: CocktailIngredient.all, status: :ok
    end

    def show
        render json: find_cocktail_ingredient, status: :ok
    end

    private

    def find_cocktail_ingredient
      cocktail_ingredient = CocktailIngredient.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Cocktail ingredients not found" }, status: :not_found
    end
    
end
