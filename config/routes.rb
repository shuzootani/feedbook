Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    get 'signup' => 'devise/registrations#new'
    get 'login' => 'devise/sessions#new'
    get 'logout' => 'devise/sessions#destroy'
    get 'account' => 'devise/registrations#edit'
  end

  root 'posts#index'

  resources :posts, only: %i[index show create update destroy]
end
