//1

//#2
db.people.insertOne({
    first_name: "Patricia",
    last_name: "Medina",
    email: "pmedina@trellian.com",
    gender: "Female",
    age: 36,
    state: "Arizona",
    children: [
      { name: "Antonio", age: 9 },
      { name: "George", age: 13 },
      { name: "Kathy", age: 16 },
    ],
  });
//#3
db.people.updateOne({first_name: "Clarence"}, {state: "South Dakota"})
//#4
db.people.updateOne({first_name:"Rebecca", last_name: "Hayes"}, { $unset: { email: 1 }});
//#5
db.people.updateMany({state: "Missouri"}, { $inc: {age: 1}});
//#6
db.people.replaceOne({first_name: "Jerry", last_name: "Baker"}, { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] })
//#7
db.people.delete({first_name: "Wanda", last_name:"Bowman"})
//#8
db.people.deleteAll({$or: [{email: {$exists: false}}, {email: null}]});
//#9
db.people.createIndex({email: 1})
//#10
db.people.createIndex({first_name: 1, last_name: 1});
//#11
db.submissions.insertMany([{title: "The River Bend", upvotes: 10, downvotes: 2, artist: ObjectId('665f31b7ccca757b69f56f09')}, 
{title: "Nine Lives", upvotes: 7, downvotes: 0, artist: ObjectId('665f31b7ccca757b69f56f37')}, 
{title: "Star Bright", upvotes: 19, downvotes: 3, artist: ObjectId('665f31b7ccca757b69f56fba')}, 
{title: "Why Like This?", upvotes: 1, downvotes: 5, artist: ObjectId('665f31b7ccca757b69f56f40')}, 
{title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: <ID of Gerald Bailey></ID>}])
