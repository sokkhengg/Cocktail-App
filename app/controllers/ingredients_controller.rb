class IngredientsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorized, only: :index

    def index
        render json: Ingredient.all
    end

    def show
        ingredient = find_ingredient
        render json: ingredient
    end

    private

    def render_not_found_response
        render json: { error: "Ingredient not found" }, status: :not_found
    end

    def find_ingredient
        Ingredient.find(params[:id])
    end

end
