class UserIngredientsController < ApplicationController
  
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
        def index
          render json: UserIngredient.all
        end
    
        def show
          this_users_ingredients = UserIngredient.all.where(:user_id => params[:id])  
          render json: this_users_ingredients
        end
    
        def create
          new_user_ingredient = UserIngredient.create!(user_ingredient_params)
          render json: new_user_ingredient.ingredient, status: :created
        end
    
        private
    
        def find_user_ingredient
          user_ingredient = UserIngredient.find(params[:id])
        end
    
        def user_ingredient_params
          params.permit(:user_id, :ingredient_id)
        end

        def render_not_found_response
            render json: { error: "User Ingredient not found" }, status: :not_found
        end
    
        def render_unprocessable_entity_response(exception)
          render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
        end
    
end
