Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create, :edit, :update]
    resource :session, only: [:new, :create, :destroy]
  end
end
