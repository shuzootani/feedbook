class UsersController < ApplicationController
  def mypage
  end
  def me
    render json: current_user
  end
end
