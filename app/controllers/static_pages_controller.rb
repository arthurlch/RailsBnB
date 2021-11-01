class StaticPagesController < ApplicationController
  def home
    token = cookies.signed[:airbnb_session_token]
    session = Session.find_by(token: token)
    
    if session == nil 
      @data = { user_id: '' }.to_json
      render 'home'
    else 
      current_user = session.user
      @data = { user_id: current_user.id }.to_json
      render 'home' 
    end
  end

  def property
    @data = { property_id: params[:id] }.to_json
    render 'property'
  end

  def login
    token = cookies.signed[:airbnb_session_token]
    session = Session.find_by(token: token)
    
    if session == nil 
      @data = { user_id: '' }.to_json
      render 'login'
    else 
      current_user = session.user
      @data = { user_id: current_user.id }.to_json
      render 'login' 
    end
  end

  def user
    @data = { user_id: params[:id] }.to_json
    render 'user'
  end

  def charge 
    @data = { charge_id: params[:id] }.to_json
    render 'charge'
  end
end