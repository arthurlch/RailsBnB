class StaticPagesController < ApplicationController
  def home
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