json.charge do
  json.id @charge.id
  json.amount @charge.amount
  json.currency @charge.currency
  json.complete @charge.complete
end