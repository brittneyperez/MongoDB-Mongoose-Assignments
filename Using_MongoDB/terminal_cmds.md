
Run terminal command:

Note: { month: 1, day: 3, year: 2023 }
```
% brew services start mongodb-community
% mongo
> show dbs
> db.createCollection("students")
{ "ok" : 1 }
> show collections
    students
> db.students.insert({ name: "firstName lastName", home_state: "someState", luckyNumber: int, birthday: { month: int, day: int, year: int } })
    writeResult({ "nInserted": 1 })
> db.students.find().pretty()
    {
        studentData
    }
    {
        studentData
    }
> db.students.insert({ data })
> db.students.find().pretty()
# repeat 4x

> db.students.find().count()
> db.students.find({home_state: "homeState" })
> db.students.find({$or [ {home_state: "homeState"}, {home_state: "homeState"}, ] })

> db.students.find({lucky_number: {$gt: 4}}).pretty()
> db.students.find({lucky_number: {$lte: 10}}).pretty()
> db.students.find({lucky_number: {$gte: 1, $lte: 9}}).pretty()

> db.students.updateMany({}, {$set: {interests: ['coding', 'walking', 'mongodb']}})
> db.students.update({ name: 'firstName lastName'}, {$push: {interests: 'Microsoft'}})

> db.students.update({ name: 'firstName lastName'}, {$push: {interests: 'interestObj'}})
> db.students.update({ name: 'firstName lastName'}, {$pull: {interests: 'interestObj'}})

> db.students.insert()
> db.students.remove({home_state: 'homeState'})
> db.students.remove({luck_number: {$gt: 5}}, true)

> db.students.updateMany({}, {$set: {number_of_belts: 0}})
> db.students.find()
> db.students.updateMany({home_state: 'homeState'}, {$inc: {number_of_belts: 1}})
> db.students.find().pretty()
> db.students.updateMany({}, {$rename {'number_of_belts' : 'belts_earned'}})
> db.students.updateMany({}, {$unset {'lucky_number' : ''}})
> db.students.find().pretty()

> db.students.updateMany({}, {$set {'upated_on': Date()}})
> db.students.find().pretty()


```
