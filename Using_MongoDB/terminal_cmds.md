
## Using MongoDB Terminal Commands

```js
// Starting MongoDB
brew services start mongodb-community@5.0
mongosh

// Creating DB
show dbs
use my_first_db

// Creating Collection
db.createCollection('students')
    { ok: 1 }
show collections
    students

// CRUD
db.students.insertOne({ name: "Jane Doe", home_state: "California", lucky_number: 7, birthday: {month: 1, day: 9, year: 1995} })
db.students.find().pretty()
db.students.insertOne({ name: "Mikaela Shindō", home_state: "New York", lucky_number: 4, birthday: {month: 5, day: 1, year: 2004} })
db.students.insertOne({ name: "John Doe", home_state: "Washington", lucky_number: 45, birthday: {month: 12, day: 27, year: 1988} })
db.students.insertOne({ name: "Kurapika", home_state: "California", lucky_number: 13, birthday: {month: 4, day: 4, year: 1980} })
db.students.insertOne({ name: "Shikanoin Heizou", home_state: "Washington", lucky_number: 21, birthday: {month: 7, day: 13, year: 2000} })
db.students.find().pretty()
db.students.countDocuments()

db.students.find({home_state: "California"})
db.students.find({home_state: "Washington"})
db.students.find({$or: [{home_state: "California"}, {home_state: "Washington"}] })

db.students.find({lucky_number: {$gt: 4}}).pretty()
db.students.find({lucky_number: {$lte: 10}}).pretty()
db.students.find({lucky_number: {$gte: 1, $lte: 9}}).pretty()

db.students.updateMany({}, { $set: {interests: ['coding', 'brunch', 'MongoDB']} })
db.students.updateOne({name: 'Jane Doe'}, {$push: {interests: 'reading'}})
db.students.updateOne({name: 'Mikaela Shindō'}, {$push: {interests: 'travel with friends'}})
db.students.updateOne({name: 'John Doe'}, {$push: {interests: 'jogging'}})
db.students.updateOne({name: 'Kurapika'}, {$push: {interests: 'adventuring'}})
db.students.updateOne({name: 'Shikanoin Heizou'}, {$push: {interests: 'solving mysteries'}})
db.students.updateOne({name: 'John Doe'}, {$push: {interests: 'taxes'}})
db.students.updateOne({name: 'John Doe'}, {$pull: {interests: 'taxes'}})

db.students.remove({home_state: 'California'})
db.students.remove({name: 'John Doe'})
db.students.remove({lucky_number: {$gt: 5}}, true)

db.students.updateMany({}, { $set: {number_of_belts: 0} })
db.students.insertOne({ name: "Shikanoin Heizou", home_state: "Washington", lucky_number: 21, birthday: {month: 7, day: 13, year: 2000}, interests: [ 'coding', 'brunch', 'MongoDB', 'solving mysteries' ], number_of_belts: 0 })
db.students.insertOne({ name: "Dan Heng", home_state: "Astral Express", lucky_number: 7, birthday: {month: 4, day: 16, year: 2001}, interests: [ 'coding', 'drinking tea', 'MongoDB', 'studying biology' ], number_of_belts: 0 })
db.students.insertOne({ name: "John Doe", home_state: "Washington", lucky_number: 45, birthday: {month: 12, day: 27, year: 1988}, interests: [ 'coding', 'brunch', 'MongoDB', 'jogging' ], number_of_belts: 0 })
db.students.insertOne({ name: "Jimmy Neutron", home_state: "California", lucky_number: 160, birthday: {month: 3, day: 14, year: 1991}, interests: [ 'coding', 'physics', 'MongoDB', 'everything science' ], number_of_belts: 0 })

db.students.updateMany({home_state: 'Washington'}, {$inc: {number_of_belts: 1}})
db.students.updateMany({}, {$rename: {'number_of_belts' : 'belts_earned'}})
db.students.updateMany({}, {$unset: {'lucky_number' : ""}})
db.students.find().pretty()

db.students.updateMany({}, {$set: {'updated_on': Date()}})
db.students.find().pretty()


> exit
```
