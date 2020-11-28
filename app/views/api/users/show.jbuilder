json.user do
  json.id @user.id
  json.username @user.username
  json.email @user.email

  json.properties do
    json.array! @user.properties do |property|
    json.id property.id
    json.title property.title
    end
  end

  json.bookings do
    json.array! @user.bookings do |booking|
    json.start_date booking.start_date
    json.end_date booking.end_date
    end
  end

end

# go trough user.properties to get json, need to use same patterns for bookings