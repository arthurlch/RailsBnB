Rails.application.routes.draw do
  root to: 'static_pages#home'

  get '/property/:id' => 'static_pages#property'
  get '/login' => 'static_pages#login'
  get '/user/:id' => 'static_pages#user'
  get '/booking/:id/success' => 'static_pages#charge'
  
  namespace :api do
    # Add routes below this line
    resources :users, only: [:create, :show, :update] 
    resources :sessions, only: [:create, :destroy]
    resources :properties, only: [:index, :show, :create, :update]
    resources :bookings, only: [:create, :show, :index, :update]
    resources :charges, only: [:create]
    get '/properties/:id/bookings' => 'bookings#get_property_bookings'
    get '/authenticated' => 'sessions#authenticated'
    #stripe webhook
    post '/charges/mark_complete' => 'charges#mark_complete'
  end 
end