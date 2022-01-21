class UsersController < ApplicationController

  skip_before_action :authorized, only: :create
  # wrap_parameters format: []

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response



    # might not need
    def index
        render json: User.all, status: :ok
    end

    #used for auth
    def show
      current_user = User.find(session[:user_id])
      if current_user
        render json: current_user
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
