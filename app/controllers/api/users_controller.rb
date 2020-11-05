module Api
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)

      if @user.save
        render 'api/users/create', status: :created
      else
        render json: { success: false }, status: :bad_request
      end
    end

    # get user 
    def show
      @user = User.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found if !@user
    end

    def update
      
    end
    
    private

    def user_params
      params.require(:user).permit(:email, :password, :username)
    end
  end
end