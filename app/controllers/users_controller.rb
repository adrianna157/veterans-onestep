class UsersController < ApplicationController

  def login
    @user = User.find_by(email: params[:email])
    if @user && @user.valid_password?(params[:password]) # if user exists and password is correct
      render json: { user: @user.as_json(only: [:id]) } # specify the attributes you want to include
    else
      render json: { errors: "Invalid email/password combination!" }, status: :unprocessable_entity
    end
  end


end
