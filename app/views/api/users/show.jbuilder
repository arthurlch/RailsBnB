json.user do
  json.user_id @user.id
  json.username @user.username
  json.email @user.email
  json.id @property.user.id
  json.username @property.user.username
end
