Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:create, :show, :update]
    resources :stories, only: [:index, :create, :show, :update, :destroy]
  end
end
