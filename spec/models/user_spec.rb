require 'rails_helper'

RSpec.describe User, type: :model do

  it 'has a unique username' do
    user = User.new(
      username: "",
      password: "password",
      email: "email@mailtest.com"
    )

    expect(user).to_not be_valid
    user.username = "user12"
    expect(user).to be_valid
  end

  it 'has a password' do
    user = User.new(
      username: "user12",
      password: "",
      email: "email@mailtest.com"
    )

    expect(user).to_not be_valid
    user.password = "password"
    expect(user).to be_valid
  end

  it 'has a unique email' do
    user = User.new(
      username: "user12",
      password: "password",
      email: ""
    )

    expect(user).to_not be_valid
    user.email = "email@mailtest.com"
    expect(user).to be_valid
  end

end
