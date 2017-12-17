class UsersController < ApplicationController
  def me
    render json: current_user
  end
end
