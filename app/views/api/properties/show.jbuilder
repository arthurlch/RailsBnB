json.property do
  json.id @property.id
  json.title @property.title
  json.description @property.description
  json.city @property.city
  json.country @property.country
  json.property_type @property.property_type
  json.price_per_night @property.price_per_night
  json.max_guests @property.max_guests
  json.bedrooms @property.bedrooms
  json.beds @property.beds
  json.baths @property.baths
  json.avatar @property.image_url

  json.bookings do
    json.array! @property.bookings do |booking|
      json.id booking.id
      json.is_paid booking.is_paid?
      json.user booking.user
      json.start_date booking.start_date
      json.end_date booking.end_date
    end
  end

  json.user do
    json.id @property.user.id
    json.username @property.user.username
  end  
end