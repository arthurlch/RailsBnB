json.user do
  json.user_id @user.id
  json.username @user.username
  json.email @user.email
  json.properties do
    json.array! @user.properties do |property|
      json.id property.id
      json.name property.name
    end
  end
end
