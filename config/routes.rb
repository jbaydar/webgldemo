Webgldemo::Application.routes.draw do
  root :to => 'home#index'
  match '/cube' => 'home#cube'
  match '/chain' => 'home#chain'
  match '/ring' => 'home#ring'
end
