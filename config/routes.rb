Rails.application.routes.draw do
  
  resources :cocktail_ingredients, only: [ :index, :show ]
  # add an option to delete cocktails
  resources :cocktails, only: [ :index, :show, :create, :destroy ]
  resources :user_cocktails, only: [ :index, :create, :update ]
  resources :ingredients, only: [ :index, :show ]
  resources :user_ingredients, only: [ :index, :create, :show, :destroy ]
  resources :users, only: [ :index, :show, :create ]

  get "/auth", to: "users#show" # used for continuous authentication as the user moves through the app
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create" #creates a new session when the user fills out the login form
  delete "/logout", to: "sessions#destroy" #idk about this one yet.
  # delete the session, but when the user log back in since using post method, it will create a new session.

  get "/my-custom-cocktails", to: "user_cocktails#user_cocktails_all" #returns the cocktails a user can make
  
  get "/cocktail-total", to: "cocktails#total" #returns the total number of cocktails in the db (for pagination)
  


  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
