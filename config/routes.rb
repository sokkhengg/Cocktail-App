Rails.application.routes.draw do
  
  resources :cocktail_ingredients, only: [ :index, :show ]
  resources :cocktails, only: [ :index, :show, :create ]
  resources :user_cocktails, only: [ :index ]
  resources :ingredients, only: [ :index, :show ]
  resources :user_ingredients, only: [ :index, :create, :show, :destroy ]
  resources :users, only: [ :index, :show, :create ]

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
