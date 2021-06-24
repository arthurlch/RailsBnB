require 'rails_helper'

RSpec.describe User, type: :model do

  current_user = User.find_or_create(email: 'email@email.com', password: 'password')
  
  it 'has username' do 
  end

  it 'has password' do 
  end 

  it 'has email' do 
  end
end
