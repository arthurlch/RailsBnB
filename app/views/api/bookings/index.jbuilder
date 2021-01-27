#booking = Booking.last
#booking.is_paid? # returns true or false
json.bookings do
  json.array! @bookings do |booking|
    json.id booking.id
    json.start_date booking.start_date
    json.end_date booking.end_date
  end
end