Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    get 'signup' => 'devise/registrations#new'
    get 'login' => 'devise/sessions#new'
    get 'logout' => 'devise/sessions#destroy'
  end

  root 'posts#index'

  resources :posts, only: %i[index show create update destroy] do
    get 'feed', on: :collection
  end

  resources :comments, only: %i[index create update destroy]

  resources :users, only: %i[show] do
    get 'me', on: :collection
  end

  resources :word_cloud, only: :index
end
