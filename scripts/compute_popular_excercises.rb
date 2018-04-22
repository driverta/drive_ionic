require 'firebase'

base_uri = 'https://drive-cadf7.firebaseio.com/'

firebase = Firebase::Client.new(base_uri)

firebase.get('users/').body.keys.each do |user|
  firebase.get(user + '/')
end