json.user do
  json.id @user.id
  json.username @user.username
  json.email @user.email

  json.properties do
    json.array! @user.properties do |property|
      json.id property.id
      json.title property.title
      json.description property.description
      json.city property.city
      json.country property.country
      json.property_type property.property_type
      json.price_per_night property.price_per_night
      json.max_guests property.max_guests
      json.bedrooms property.bedrooms
      json.beds property.beds
      json.baths property.baths
    end
  end

  json.bookings do
    json.array! @user.bookings do |booking|
    json.start_date booking.start_date
    json.end_date booking.end_date
    json.is_paid booking.is_paid?
    end
  end

end

# go trough user.properties to get json, need to use same patterns for bookings