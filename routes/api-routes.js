module.exports = function(app) {
    const db = require("../models");

    app.get("/api/workouts", function(req, res){
        db.Workout.find({}).sort({day: 1})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    
    })

    app.put("/api/workouts/:id", function(req, res){
        console.log(req.query.id)
        db.Workout.findOneAndUpdate({ _id: req.query.id }, { $push: { exercises: req.body } }, { new: true })
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    })

    app.post("/api/workouts", function(req, res){
    db.Workout.create({
        day: Date.now,
        exercises: []
    }).then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
    })

    app.get("/api/workouts/range", function(req, res){
        db.Workout.find({}).sort({day: -1})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    })
}