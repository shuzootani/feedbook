class UsersController < ApplicationController
  def me
    render json: current_user
  end

  def show
  end
end
