class UsersController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  wrap_parameters format: []

    # might not need
    def index
        render json: User.all, status: :ok
    end

    def show
      user = User.find_by(id: session[:user_id])
      if user
        render json: user
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  

    def create
      user = User.create!(user_params)
      render json: user, status: :created
    end

    private

    def find_user
      user = User.find(params[:id])
    end

    def user_params
      params.permit(:username, :password)
    end

    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_not_found_response
      render json: { error: "User not found" }, status: :not_found
    end

end
