module.exports = function(app) {
    const db = require("../models");

    app.get("/api/workouts", function(req, res){
      console.log("get")
        db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    
    })

    app.put("/api/workouts/:id", function(req, res){
      console.log("put")
        console.log(req.params.id)
        db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body }, $inc: {totalDuration: req.body.duration} }, { new: true })
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    })

    app.post("/api/workouts", function(req, res){
      console.log("post")
    db.Workout.create({}).then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
    })

    app.get("/api/workouts/range", function(req, res){
      console.log("get in range")
        db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    })
}