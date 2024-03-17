Rails.application.routes.draw do
  devise_for :users
  root 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    namespace :v1 do
      resources :events, only: [:index, :show, :update, :create]
    end
  end

  # This line will catch all other HTML requests and serve the React application
  get '*path', to: 'homepage#index', via: :all, constraints: ->(req) { req.format.html? }
end
