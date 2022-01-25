class CocktailsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        cocktails = Cocktail.all
        response.headers["item_count"] = cocktails.count
        paginate json: cocktails.as_json, status: :ok
        # render json: Cocktail.all
    end

    def show
        cocktail = find_cocktail
        render json: cocktail
    end

    def create
        cocktail = Cocktail.create!(cocktail_params)
        render json: cocktail.id, status: :created
    end

    #come back later
    # def destroy
    #     cocktail = find_cocktail
    #     cocktail.destroy
    #     head :no_content
    # end

    private
    
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Cocktail not found" }, status: :not_found
    end

    def find_cocktail
        Cocktail.find(params[:id])
    end

    def cocktail_params
        params.permit(:name, :instructions, :alcoholic, :category, :image, :glass, :iba,
        :ingredient_1_name, :ingredient_2_name, :ingredient_3_name, :ingredient_4_name, :ingredient_5_name,
        :ingredient_6_name, :ingredient_1_id, :ingredient_2_id, :ingredient_3_id, :ingredient_4_id,
        :ingredient_5_id, :ingredient_6_id, :measure_1,
        :measure_2, :measure_3, :measure_4, :measure_5, :measure_6, :cocktail_id)
    end    

end

