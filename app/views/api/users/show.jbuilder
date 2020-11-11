json.user do
  json.user_id @user.id
  json.username @user.username
  json.email @user.email
  json.properties @user.properties
  json.bookings @user.bookings
end
