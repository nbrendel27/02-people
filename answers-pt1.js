// #1 
db.people.find();
// #2
db.people.find().count();
//#3
db.people.find({state: "Arizona"});
//#4
db.people.find({state: "Arizona", gender: "Male"});
//#5
db.people.find({$or: [{state: "Arizona"}, {state: "New Mexico"}] });
//#6
db.people.find({age: {$lt: 40}})
//#7
db.people.find({$and: [{ age: {$lte: 45} }, {age: {$gte: 40}}, {state: "Florida"}, {gender: "Female"}]} )
//#8
db.people.find({first_name: /^H/})
//#9
db.people.find({state: "Michigan"}).sort({first_name: 1})
//#10
db.people.find({$or: [{state: "Virginia"}, {first_name: "Virginia"}]})
//#11
db.people.find({ age: {$lt: 30} }, {first_name: true, last_name: true} )
//#12
db.people.find({state: "Montana"}, {age: false});
//#13
db.people.find({email: /.edu$/}, {email: true})
//#14
db.people.find({"children.age": { $lt: 4 }});
//#15
db.people.find({children: {$exists: true, $size: 0 } })
// or
db.people.find({ "children.0": {$exists: false}});
//or
db.people.find({ children: [] });

//#16
db.people.find({children: { $ne: []}})
//or
db.people.find({children: { $gt: []}})
//or
db.people.find({children: {$gte: { $size: 1 } } })