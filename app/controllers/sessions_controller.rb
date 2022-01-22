class SessionsController < ApplicationController

  #skip checking authorization because we know they haven't (they're trying to login for the first time)
  skip_before_action :authorized, only: :create
  
  #login
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

    #logout
    def destroy
        session.delete :user_id
        head :no_content
      end

  end