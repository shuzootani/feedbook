Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    get 'signup' => 'devise/registrations#new'
    get 'login' => 'devise/sessions#new'
    get 'logout' => 'devise/sessions#destroy'
    get 'account' => 'devise/registrations#edit'
  end

  root 'posts#index'

  resources :posts, only: %i[index show create update destroy] do
    get 'feed', on: :collection
    get 'my_words', on: :collection
  end

  resources :comments, only: %i[index create update destroy]

  get 'users/me'
  get 'users/mypage'
end
