Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do 
    namespace :v1 do 
      resources :tweets, only: [] do
        collection do
          get :search
        end
      end
    end 
  end
end
