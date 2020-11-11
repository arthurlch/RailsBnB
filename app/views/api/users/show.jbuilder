json.user do
  json.user_id @user.id
  json.username @user.username
  json.email @user.email

  json.property do
    json.id @user.property.name
  end
end
