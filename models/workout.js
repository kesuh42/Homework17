const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String
      },
      duration: {
        type: Number
      },
      //Resistance Values
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      //Cardio Value
      distance: {
        type: Number
      }
    }
  ]
});

workoutSchema.methods.durationTotaler = function() {
  var total
  for (i of this.exercises) {
    total += i.duration
  }
  this.totalDuration = total
  return totalDuration
}

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;