#booking = Booking.last
#booking.is_paid? # returns true or false

json.booking do
  json.id @booking.id
  json.start_date @booking.start_date
  json.end_date @booking.end_date
end