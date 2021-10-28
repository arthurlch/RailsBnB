class StaticPagesController < ApplicationController
  def home
    token = cookies.signed[:airbnb_session_token]
    session = Session.find_by(token: token)
    current_user = session.user

    @data = { user_id: current_user.id }.to_json
    render 'home'
  end

  def property
    @data = { property_id: params[:id] }.to_json
    render 'property'
  end

  def login
    render 'login'
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