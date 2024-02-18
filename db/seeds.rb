# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Owner.create([{ name: "Owner 1", email: "Email 1", phone_number: "Phone Number 1" }])
Event.create([{ name: "Event 1", location: "Location 1", description: "Description 1", start_time: "2024-02-18 17:58:07", end_time: "2024-02-18 17:58:07", slug: "Slug 1", owner_id: 1 }])