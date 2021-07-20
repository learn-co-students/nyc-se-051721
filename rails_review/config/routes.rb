Rails.application.routes.draw do
  resources :users

  # http verb   url       controller#method/action
  # get '/users', to: "users#index"
  # get '/users/:id', to: "users#show"
  # post '/users', to: "users#create"
  # patch '/users/:id', to: "users#upate"
  # delete '/users/:id', to: "users#destroy"



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
