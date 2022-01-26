class HiddenCocktailsController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def create
    cocktail = HiddenCocktail.create!(:user_id => params[:user_id], :cocktail_id => params[:cocktail_id])
    render json: cocktail, status: :ok
  end

  private

  def render_not_found_response
      render json: { error: "Cocktail not found" }, status: :not_found
  end
  
end
