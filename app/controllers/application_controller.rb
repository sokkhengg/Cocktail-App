class ApplicationController < ActionController::API
  include ActionController::Cookies

  # this trickles down to the other controllers to check if the user is logged in before they can do stuff
  # before_action :authorized

  # # renders an error message if the session does not include the user_id
  # def authorized
  #   render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
  # end

end
