const router = require('express').Router();
// const path = require("path");
const Workout = require("../models/workout");



// put route
router.put("api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercise: body } },
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        });
});




router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });


  router.get("/api/workouts/range", ({ query }, res) => {
    Workout.find({ day: { $gte: query.start, $lte: query.end } })
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });
  



// Aggregate function for get routes



module.exports = router;