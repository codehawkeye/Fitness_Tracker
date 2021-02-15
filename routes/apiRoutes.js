const router = require('express').Router();
// const path = require("path");
const Workout = require("../models/workout");



// put route for updating workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      {_id: params.id },
        { $push:{exercises:body}},
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        });
});

router.post("/api/workouts", (req, res) => {
  console.log(req.body)  
  Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });



// //  post route for saving new workout
// router.put("/api/workouts", (req, res) => {
//   console.log(req.body)  
//   Workout.create(req.body)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });

//   continue workout
  router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // duration route
  router.get("/api/workouts/range", ({query}, res) => {
    Workout.find({ day: { $gte: query.start, $lte: query.end}})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
// route for deleting a workout. 
  // router.delete("/api/workouts", ({body}, res) => {
  //   Workout.findByIdAndDelete(body.id)
  //     .then(() => {
  //       res.json(true);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
  






module.exports = router;