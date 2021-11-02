module Api
  class UsersController < ApplicationController
    
    def create
      @user = User.new(user_params)
      
      if @user.save!
        render 'api/users/create', status: :created
      else
        render json: { success: false }, status: :bad_request
      end
    end
    
    # Safety check user show and update route cannot be seen if User is not logged in.
    #skip_before_action :verify_authenticity_token 

    def show
      token = cookies.signed[:airbnb_session_token]
      session = Session.find_by(token: token)
      return render json: { error: 'user not logged in' }, status: :unauthorized if !session
      
      @user = User.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found if !@user
      render 'api/users/show', status: :ok
    end

    def update
      
    end
    
    private

    def user_params
      params.require(:user).permit(:email, :password, :username)
    end

  end
end